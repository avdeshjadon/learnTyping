import KEYBOARD_LAYOUT, { WIDE_KEYS } from "../data/keyboardLayout";
import {
  kbWrapStyle,
  kbRowStyle,
  keyBaseStyle,
  keyWideStyle,
  keySpaceStyle,
  keyNextStyle,
  keyFlashCorrectStyle,
  keyFlashWrongStyle,
  keyFlashBackspaceStyle,
} from "../styles/keyboardStyles";

function getKeyStyle(key, nextKey, flashKey) {
  const kLower = key.toLowerCase();
  const isNext =
    nextKey != null &&
    (kLower === nextKey || (nextKey === " " && key === "⎵") || (nextKey === ";" && key === ";"));
  const isFlash =
    flashKey != null &&
    (kLower === flashKey.key?.toLowerCase() ||
      (flashKey.key === "⎵" && key === "⎵") ||
      (flashKey.key === "⌫" && key === "⌫"));

  let extra = {};
  if (isFlash) {
    extra =
      flashKey.correct === null
        ? keyFlashBackspaceStyle
        : flashKey.correct
        ? keyFlashCorrectStyle
        : keyFlashWrongStyle;
  } else if (isNext) {
    extra = keyNextStyle;
  }

  return {
    ...keyBaseStyle,
    ...(WIDE_KEYS.has(key) ? keyWideStyle : {}),
    ...(key === "⎵" ? keySpaceStyle : {}),
    ...extra,
  };
}

export default function VisualKeyboard({ nextKey, flashKey }) {
  return (
    <div style={kbWrapStyle}>
      {KEYBOARD_LAYOUT.map((row, ri) => (
        <div key={ri} style={kbRowStyle}>
          {row.map((key, ki) => (
            <div key={ki} style={getKeyStyle(key, nextKey, flashKey)}>
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
