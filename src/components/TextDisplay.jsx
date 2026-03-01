import { useEffect, useRef } from "react";
import CHAR_STATE from "../constants/charState";
import {
  textAreaStyle,
  charStyle,
  charCorrectStyle,
  charWrongStyle,
  charReviewStyle,
  charCursorStyle,
  modeHintStyle,
  modeHintTitleStyle,
  modeHintSubStyle,
  startHintStyle,
} from "../styles/appStyles";

export default function TextDisplay({ mode, story, charStates, cursor, started }) {
  const textRef = useRef(null);

  // Scroll the cursor character into view on every cursor change
  useEffect(() => {
    if (textRef.current) {
      const activeEl = textRef.current.querySelector(".char-cursor");
      if (activeEl) activeEl.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [cursor]);

  return (
    <>
      <div style={modeHintStyle}>
        <span style={modeHintTitleStyle}>{mode.label}</span>
        <span style={modeHintSubStyle}>{mode.subtitle}</span>
      </div>

      {!started && <div style={startHintStyle}>start typing to begin</div>}

      <div ref={textRef} style={textAreaStyle}>
        {story.split("").map((char, i) => {
          const state = charStates[i];
          const isCursor = i === cursor;
          return (
            <span
              key={i}
              className={isCursor ? "char-cursor" : undefined}
              style={{
                ...charStyle,
                ...(state === CHAR_STATE.CORRECT ? charCorrectStyle : {}),
                ...(state === CHAR_STATE.WRONG ? charWrongStyle : {}),
                ...(state === CHAR_STATE.REVIEW ? charReviewStyle : {}),
                ...(isCursor ? charCursorStyle : {}),
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </div>
    </>
  );
}
