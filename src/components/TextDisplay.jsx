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
// TextDisplay.jsx -- Live Typing Area & Stats
// ==============================================
// Core display component. Renders the story text with per-character colour
// states (idle → correct / wrong / review), a GPU-accelerated smooth
// cursor caret, live WPM + elapsed-time stats, and a restart button.
//
// Behaviour:
//   1. On each cursor advance, the caret smoothly translates to the new
//      character position. After 500ms idle the caret starts a blink
//      animation.
//   2. Auto-scrolls the text container to keep the active line visible.
//   3. Live stats fade in once typing starts; the refresh button resets
//      WPM / timer / cursor while keeping the same story passage.
// ----------------------------------------------------------------------------

import { useEffect, useRef, useCallback } from "react";
import CHAR_STATE from "../constants/charState";
import {
  textAreaStyle,
  charStyle,
  charCorrectStyle,
  charWrongStyle,
  charReviewStyle,
  modeHintStyle,
  modeHintTitleStyle,
  modeHintSubStyle,
  startHintStyle,
} from "../styles/appStyles";

export default function TextDisplay({ mode, story, charStates, cursor, started, wpm, elapsed, onRestart, onNextStory }) {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  const idleTimer = useRef(null);

  // Smoothly position the vertical caret and auto-scroll
  const updateCursor = useCallback(() => {
    const container = textRef.current;
    const cursorEl = cursorRef.current;
    if (!container || !cursorEl) return;

    const charEl = container.querySelector(`[data-idx="${cursor}"]`);
    if (!charEl) return;

    const containerRect = container.getBoundingClientRect();
    const charRect = charEl.getBoundingClientRect();

    // Vertical bar sits at the LEFT edge of the current character
    const left = charRect.left - containerRect.left + container.scrollLeft;
    const top = charRect.top - containerRect.top + container.scrollTop;
    const height = charRect.height;

    cursorEl.style.transform = `translate(${left}px, ${top}px)`;
    cursorEl.style.height = `${height}px`;

    // Remove idle blink while typing, re-add after 0.5s pause
    cursorEl.classList.remove("idle");
    clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => {
      cursorEl.classList.add("idle");
    }, 500);

    // Vertical auto-scroll: keep the current line roughly centred
    const charTopInContainer = charRect.top - containerRect.top;
    const visibleHeight = container.clientHeight;
    if (charTopInContainer < 0 || charTopInContainer > visibleHeight - charRect.height) {
      container.scrollTo({
        top: top - visibleHeight / 2 + charRect.height / 2,
        behavior: "smooth",
      });
    }
  }, [cursor]);

  useEffect(() => {
    updateCursor();
  }, [cursor, updateCursor]);

  // Reposition on window resize / font load
  useEffect(() => {
    window.addEventListener("resize", updateCursor);
    return () => window.removeEventListener("resize", updateCursor);
  }, [updateCursor]);

  return (
    <>
      {!started && (
        <div className="start-hint" style={startHintStyle}>start typing to begin</div>
      )}

      {started && (
        <div className="live-stats" style={{
          display: "flex",
          alignItems: "center",
          gap: 28,
          marginBottom: 28,
          fontSize: 20,
          fontFamily: "'Roboto Mono', monospace",
          letterSpacing: "0.06em",
          opacity: 0.75,
          transition: "opacity 0.3s ease",
        }}>
          <span style={{ color: "#E2B715" }}>{wpm} <span style={{ fontSize: 14, color: "#656669" }}>wpm</span></span>
          <span style={{ color: "#D1D0C5" }}>{elapsed}s</span>
          <button
            onClick={(e) => { e.preventDefault(); onRestart(); }}
            title="Restart same text"
            style={{
              background: "none",
              border: "none",
              color: "#656669",
              cursor: "pointer",
              padding: "2px 6px",
              fontSize: 20,
              lineHeight: 1,
              borderRadius: 4,
              transition: "color 0.15s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#E2B715'; e.currentTarget.style.transform = 'rotate(90deg)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#656669'; e.currentTarget.style.transform = 'rotate(0deg)'; }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 4v6h-6" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
          </button>
        </div>
      )}

      <div ref={textRef} className="typing-text" style={textAreaStyle}>
        {/* Floating smooth cursor */}
        <div ref={cursorRef} className="smooth-cursor" />

        {/* Render each word in a nowrap span; spaces are normal " " between
            spans so the browser breaks lines at word boundaries only. */}
        {(() => {
          const elements = [];
          // Split story into words
          const words = story.split(" ");
          let charIdx = 0;

          words.forEach((word, wi) => {
            // Add space span before this word (except the first)
            if (wi > 0) {
              const spaceIdx = charIdx++;
              const spaceState = charStates[spaceIdx];
              elements.push(
                <span
                  key={`s${spaceIdx}`}
                  data-idx={spaceIdx}
                  style={{
                    ...charStyle,
                    ...(spaceState === CHAR_STATE.CORRECT ? charCorrectStyle : {}),
                    ...(spaceState === CHAR_STATE.WRONG ? charWrongStyle : {}),
                    ...(spaceState === CHAR_STATE.REVIEW ? charReviewStyle : {}),
                  }}
                >{" "}</span>
              );
            }

            // Render word characters inside a nowrap span
            const startIdx = charIdx;
            const charSpans = [];
            for (let j = 0; j < word.length; j++) {
              const idx = charIdx++;
              const state = charStates[idx];
              charSpans.push(
                <span
                  key={idx}
                  data-idx={idx}
                  style={{
                    ...charStyle,
                    ...(state === CHAR_STATE.CORRECT ? charCorrectStyle : {}),
                    ...(state === CHAR_STATE.WRONG ? charWrongStyle : {}),
                    ...(state === CHAR_STATE.REVIEW ? charReviewStyle : {}),
                  }}
                >{word[j]}</span>
              );
            }

            elements.push(
              <span key={`w${startIdx}`} style={{ whiteSpace: "nowrap" }}>
                {charSpans}
              </span>
            );
          });

          return elements;
        })()}
      </div>
    </>
  );
}
