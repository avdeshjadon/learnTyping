// ----------------------------------------------------------------------------
// PracticeTyping -- Browser-Based Typing Practice & Training Application
// ----------------------------------------------------------------------------
// Author   : Avdesh Jadon
// GitHub   : https://github.com/avdeshjadon
// License  : MIT License -- free to use, modify, and distribute.
//            See LICENSE file in the project root for full license text.
// ----------------------------------------------------------------------------
// If this project helped you, consider starring the repository, opening a
// pull request, or reporting issues on GitHub. Contributions are welcome.
// ----------------------------------------------------------------------------
//
// TypingTrainer.jsx -- Main Orchestrator Component
// ==================================================
// Top-level stateful component that wires together the entire typing
// trainer UI. Manages:
//   - Zen-mode (auto-hide navbar/footer while typing, reveal on mouse)
//   - Keyboard visibility toggle
//   - Routing between the active typing view and the result screen
//   - Passing session state from useTypingSession to child components
//
// Component tree:
//   TypingTrainer
//   ├── Header       (mode selector, length picker, keyboard toggle)
//   ├── TextDisplay   (live text, cursor, stats, restart button)
//   │   └── OR ResultScreen (post-session stats + retry/next actions)
//   ├── VisualKeyboard (optional on-screen keyboard)
//   ├── Footer        (hotkey hints)
//   └── GlobalStyles  (injected <style> tag for CSS animations etc.)
// ----------------------------------------------------------------------------

import { useState, useEffect, useRef, useCallback } from "react";
import MODES from "./data/modes";
import useTypingSession from "./hooks/useTypingSession";
import Header from "./components/Header";
import TextDisplay from "./components/TextDisplay";
import VisualKeyboard from "./components/VisualKeyboard";
import ResultScreen from "./components/ResultScreen";
import Footer from "./components/Footer";
import GlobalStyles from "./components/GlobalStyles";
import { appStyle, mainStyle } from "./styles/appStyles";

export default function TypingTrainer() {
  const {
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
    wpm,
    accuracy,
    resetSession,
    restartSameStory,
    switchMode,
    switchLength,
    nextExpectedKey,
  } = useTypingSession();

  const [showKeyboard, setShowKeyboard] = useState(false);
  const [mouseHidden, setMouseHidden] = useState(false);
  const [zenActive, setZenActive] = useState(false);
  const mouseTimer = useRef(null);
  const prevCursorRef = useRef(cursor);

  // Typing active = started + not finished
  const isTyping = started && !finished;

  // When a key is pressed (cursor advances) → hide navbar, hide mouse
  useEffect(() => {
    if (!isTyping) return;
    if (cursor !== prevCursorRef.current) {
      setZenActive(true);
      setMouseHidden(true);
      if (mouseTimer.current) clearTimeout(mouseTimer.current);
    }
    prevCursorRef.current = cursor;
  }, [cursor, isTyping]);

  // On mouse move: show navbar + cursor, stay visible until next keystroke
  const handleMouseMove = useCallback(() => {
    if (!isTyping) return;
    setMouseHidden(false);
    setZenActive(false);
    // Only auto-hide the mouse cursor after idle, NOT the navbar
    if (mouseTimer.current) clearTimeout(mouseTimer.current);
    mouseTimer.current = setTimeout(() => {
      setMouseHidden(true);
    }, 2000);
  }, [isTyping]);

  useEffect(() => {
    if (isTyping) {
      setMouseHidden(true);
      setZenActive(true);
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      setMouseHidden(false);
      setZenActive(false);
      if (mouseTimer.current) clearTimeout(mouseTimer.current);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (mouseTimer.current) clearTimeout(mouseTimer.current);
    };
  }, [isTyping, handleMouseMove]);

  // Zen mode class for the app wrapper
  const zenClass = zenActive ? "zen-mode" : "";
  const cursorClass = mouseHidden ? "hide-cursor" : "";

  return (
    <div className={`${zenClass} ${cursorClass}`.trim()} style={appStyle}>
      <Header
        mode={mode}
        length={length}
        onSwitchMode={switchMode}
        onSwitchLength={switchLength}
        showKeyboard={showKeyboard}
        onToggleKeyboard={() => setShowKeyboard((v) => !v)}
        onNextStory={resetSession}
        isTyping={isTyping}
      />

      <main className="typing-main" style={mainStyle}>
        {finished ? (
          <ResultScreen
            wpm={wpm}
            accuracy={accuracy}
            elapsed={elapsed}
            errors={errors}
            onRetry={() => restartSameStory()}
            onNextStory={() => resetSession()}
            mode={mode}
          />
        ) : (
          <TextDisplay
            mode={mode}
            story={story}
            charStates={charStates}
            cursor={cursor}
            started={started}
            wpm={wpm}
            elapsed={elapsed}
            onRestart={restartSameStory}
            onNextStory={resetSession}
          />
        )}
      </main>

      {!finished && showKeyboard && <VisualKeyboard nextKey={nextExpectedKey} flashKey={flashKey} />}

      <Footer />
      <GlobalStyles />
    </div>
  );
}
