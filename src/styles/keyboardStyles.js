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
// keyboardStyles.js -- Visual Keyboard Style Objects
// ====================================================
// Inline style objects for the on-screen keyboard: base key appearance,
// wide/space key overrides, next-key glow highlight, and flash states
// for correct / wrong / backspace keypresses.
// ----------------------------------------------------------------------------

import TOKENS from "../constants/tokens";

export const kbWrapStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
  alignItems: "center",
  padding: "16px 32px 8px",
  borderTop: `1px solid ${TOKENS.surface}`,
};

export const kbRowStyle = { display: "flex", gap: 4 };

export const keyBaseStyle = {
  background: TOKENS.surface,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: TOKENS.border,
  borderRadius: 5,
  color: "#656669",
  fontFamily: TOKENS.fontMono,
  fontSize: 12,
  width: 36,
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "default",
  letterSpacing: "0.02em",
  transition: "background 0.1s cubic-bezier(0.16,1,0.3,1), border-color 0.1s cubic-bezier(0.16,1,0.3,1), color 0.1s cubic-bezier(0.16,1,0.3,1), box-shadow 0.15s cubic-bezier(0.16,1,0.3,1), transform 0.08s cubic-bezier(0.16,1,0.3,1)",
};

export const keyWideStyle = { width: 54, fontSize: 11 };
export const keySpaceStyle = { width: 220 };

export const keyNextStyle = {
  background: "#3d3820",
  borderColor: TOKENS.yellow,
  boxShadow: `0 0 8px rgba(226,183,21,0.35)`,
  color: TOKENS.yellow,
};

export const keyFlashCorrectStyle = {
  background: "#D1D0C5",
  color: "#000",
  transform: "scale3d(0.9, 0.9, 1)",
};

export const keyFlashWrongStyle = {
  background: TOKENS.red,
  color: "#fff",
  transform: "scale3d(0.9, 0.9, 1)",
};

export const keyFlashBackspaceStyle = {
  background: TOKENS.yellow,
  color: "#000",
  transform: "scale3d(0.9, 0.9, 1)",
};
