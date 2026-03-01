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
// VisualKeyboard.jsx -- On-Screen Keyboard Visualizer
// =====================================================
// Renders a full QWERTY keyboard layout. The next-expected key is
// highlighted with a golden glow, and each keypress triggers a brief
// flash animation (green for correct, red for wrong, yellow for
// backspace). Toggled on/off from the Header.
// ----------------------------------------------------------------------------

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
    <div className="kb-wrap" style={kbWrapStyle}>
      {KEYBOARD_LAYOUT.map((row, ri) => (
        <div key={ri} className="kb-row" style={kbRowStyle}>
          {row.map((key, ki) => (
            <div key={ki} className={`kb-key${WIDE_KEYS.has(key) ? ' kb-key-wide' : ''}${key === '⎵' ? ' kb-key-space' : ''}`} style={getKeyStyle(key, nextKey, flashKey)}>
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
