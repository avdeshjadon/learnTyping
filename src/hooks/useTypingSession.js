import { useState, useEffect, useCallback, useRef } from "react";
import MODES from "../data/modes";
import CHAR_STATE from "../constants/charState";
import getRandomStory from "../utils/getRandomStory";

/**
 * Core typing session hook — manages all state and keyboard logic.
 *
 * BUG FIXES vs original:
 * 1. Uses refs for hot-path state (cursor, charStates, errors, story) to avoid
 *    recreating handleKey on every keystroke (stale closure + perf fix).
 * 2. Timer uses Date.now() delta instead of setInterval increment (drift fix).
 * 3. Accuracy clamped to 0-100 (negative accuracy fix after backspace).
 * 4. Flash timeout cleaned up on unmount/reset (memory leak fix).
 * 5. startTimeRef used for sub-second WPM on first second.
 */
export default function useTypingSession() {
  const [mode, setMode] = useState(MODES[0]);
  const [length, setLength] = useState("medium");
  const [story, setStory] = useState(() => getRandomStory("home_half", "medium"));
  const [charStates, setCharStates] = useState(() =>
    new Array(story.length).fill(CHAR_STATE.IDLE)
  );
  const [cursor, setCursor] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [errors, setErrors] = useState(0);
  const [flashKey, setFlashKey] = useState(null);
  const [soundOn, setSoundOn] = useState(false);

  // ── Refs for values accessed inside the keydown handler ──
  // This prevents handleKey from depending on fast-changing state,
  // which would cause the event listener to be torn down & re-added
  // on every single keystroke.
  const cursorRef = useRef(cursor);
  const charStatesRef = useRef(charStates);
  const storyRef = useRef(story);
  const errorsRef = useRef(errors);
  const startedRef = useRef(started);
  const finishedRef = useRef(finished);
  const modeRef = useRef(mode);
  const lengthRef = useRef(length);

  // Keep refs in sync
  cursorRef.current = cursor;
  charStatesRef.current = charStates;
  storyRef.current = story;
  errorsRef.current = errors;
  startedRef.current = started;
  finishedRef.current = finished;
  modeRef.current = mode;
  lengthRef.current = length;

  const timerRef = useRef(null);
  const startTimeRef = useRef(null);
  const flashTimeoutRef = useRef(null);

  // ── Derived stats ──
  // Use real elapsed time for WPM (fixes "0 wpm" during first second)
  const realElapsed = started && startTimeRef.current
    ? Math.max(1, elapsed || Math.ceil((Date.now() - startTimeRef.current) / 1000))
    : 0;
  const wpm = realElapsed > 0 ? Math.round((cursor / 5) / (realElapsed / 60)) : 0;
  const accuracy = cursor > 0
    ? Math.min(100, Math.max(0, Math.round(((cursor - errors) / cursor) * 100)))
    : 100;
  const totalChars = story.length;

  // ── Reset session ──
  const resetSession = useCallback((newMode, newLength) => {
    const m = newMode || modeRef.current;
    const l = newLength || lengthRef.current;
    const s = getRandomStory(m.id, l);

    setStory(s);
    setCharStates(new Array(s.length).fill(CHAR_STATE.IDLE));
    setCursor(0);
    setStarted(false);
    setFinished(false);
    setElapsed(0);
    setErrors(0);
    setFlashKey(null);

    startTimeRef.current = null;
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    if (flashTimeoutRef.current) { clearTimeout(flashTimeoutRef.current); flashTimeoutRef.current = null; }
  }, []); // No deps — uses refs

  const switchMode = useCallback((m) => {
    setMode(m);
    resetSession(m, lengthRef.current);
  }, [resetSession]);

  const switchLength = useCallback((l) => {
    setLength(l);
    resetSession(modeRef.current, l);
  }, [resetSession]);

  // ── Timer (uses Date.now delta — fixes drift) ──
  useEffect(() => {
    if (started && !finished && startTimeRef.current) {
      timerRef.current = setInterval(() => {
        setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
      }, 250); // Update 4x/sec for smoother display
    }
    return () => {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    };
  }, [started, finished]);

  // ── Flash helper (cleans up previous timeout) ──
  const triggerFlash = useCallback((key, correct) => {
    if (flashTimeoutRef.current) clearTimeout(flashTimeoutRef.current);
    setFlashKey({ key, correct });
    flashTimeoutRef.current = setTimeout(() => {
      setFlashKey(null);
      flashTimeoutRef.current = null;
    }, 180);
  }, []);

  // ── Keyboard handler (stable — uses refs, not state) ──
  const handleKey = useCallback((e) => {
    if (finishedRef.current) return;

    if (e.key === "Escape") {
      resetSession();
      return;
    }

    if (e.key === "Tab") {
      e.preventDefault();
      const idx = MODES.findIndex((m) => m.id === modeRef.current.id);
      const next = MODES[(idx + 1) % MODES.length];
      setMode(next);
      resetSession(next, lengthRef.current);
      return;
    }

    if (e.key === "Backspace") {
      e.preventDefault();
      const c = cursorRef.current;
      if (c === 0) return;
      const newStates = [...charStatesRef.current];
      newStates[c - 1] = CHAR_STATE.REVIEW;
      setCharStates(newStates);
      setCursor(c - 1);
      triggerFlash("⌫", null);
      return;
    }

    if (e.key.length !== 1) return;

    // Start timer on first real keypress
    if (!startedRef.current) {
      setStarted(true);
      startTimeRef.current = Date.now();
    }

    const c = cursorRef.current;
    const expected = storyRef.current[c];
    const correct = e.key === expected;
    const newStates = [...charStatesRef.current];
    newStates[c] = correct ? CHAR_STATE.CORRECT : CHAR_STATE.WRONG;
    setCharStates(newStates);

    const keyLabel = e.key === " " ? "⎵" : e.key;
    triggerFlash(keyLabel, correct);

    if (!correct) setErrors((er) => er + 1);

    const newCursor = c + 1;
    setCursor(newCursor);

    if (newCursor >= storyRef.current.length) {
      setFinished(true);
      // Final elapsed snapshot
      if (startTimeRef.current) {
        setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
      }
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    }
  }, [resetSession, triggerFlash]); // Stable deps only

  // ── Attach / detach keyboard listener ──
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // ── Cleanup on unmount ──
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (flashTimeoutRef.current) clearTimeout(flashTimeoutRef.current);
    };
  }, []);

  return {
    // State
    mode,
    length,
    story,
    charStates,
    cursor,
    started,
    finished,
    elapsed,
    errors,
    flashKey,
    soundOn,

    // Derived
    wpm,
    accuracy,
    totalChars,

    // Actions
    resetSession,
    switchMode,
    switchLength,
    setSoundOn,

    // The next expected key (for keyboard highlight)
    nextExpectedKey: finished ? null : story[cursor]?.toLowerCase() ?? null,
  };
}
