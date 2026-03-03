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
// appStyles.js -- Application-Wide Inline Style Objects
// =======================================================
// Exports JS objects consumed as `style={...}` props across the app:
// header, nav buttons, length selector, main layout, text display,
// character-state colours, footer, and start-hint.
//
// All transition timings use cubic-bezier(0.22, 1, 0.36, 1) for a
// consistent, butter-smooth feel.
// ----------------------------------------------------------------------------

import TOKENS from "../constants/tokens";

export const appStyle = {
  minHeight: "100vh",
  background: TOKENS.bg,
  color: TOKENS.text,
  fontFamily: TOKENS.font,
  display: "flex",
  flexDirection: "column",
  userSelect: "none",
  outline: "none",
};

// ─── Header ─────────────────────────────────────────────────────────────────

export const headerStyle = {
  display: "flex",
  alignItems: "center",
  gap: 24,
  padding: "14px 32px",
  borderBottom: `1px solid ${TOKENS.borderLight}`,
  flexWrap: "wrap",
  position: "relative",
  zIndex: 10,
  maxWidth: 1300,
  margin: "0 auto",
  width: "100%",
};

export const logoStyle = {
  fontSize: 28,
  fontWeight: 400,
  fontFamily: "'Roboto Mono', 'JetBrains Mono', monospace",
  color: TOKENS.yellow,
  letterSpacing: "normal",
  textTransform: "lowercase",
  marginRight: 8,
  display: "flex",
  alignItems: "center",
};

export const navStyle = { display: "flex", gap: 4, flex: 1, flexWrap: "wrap" };

export const navBtnStyle = {
  background: "none",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: TOKENS.muted,
  color: TOKENS.dimLight,
  fontFamily: "inherit",
  fontSize: 11,
  padding: "5px 10px",
  borderRadius: 4,
  cursor: "pointer",
  letterSpacing: "0.05em",
  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
};

export const navDropdownContainerStyle = {
  position: "relative",
  display: "inline-block",
};

export const navDropdownListStyle = {
  position: "absolute",
  top: "100%",
  left: 0,
  marginTop: 8,
  background: TOKENS.bg,
  border: `1px solid ${TOKENS.borderLight}`,
  borderRadius: 6,
  padding: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  minWidth: 160,
  zIndex: 100,
  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
};

export const navDropdownItemStyle = {
  background: "none",
  border: "none",
  color: TOKENS.dimLight,
  fontFamily: "inherit",
  fontSize: 11,
  padding: "8px 12px",
  borderRadius: 4,
  cursor: "pointer",
  letterSpacing: "0.05em",
  textAlign: "left",
  transition: "all 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
  width: "100%",
};

export const navDropdownItemActiveStyle = {
  color: "#ccc",
  background: "rgba(255,255,255,0.04)",
};

export const controlsStyle = { display: "flex", alignItems: "center", gap: 12 };

export const lengthGroupStyle = { display: "flex", gap: 2 };

export const lengthBtnStyle = {
  background: "none",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: TOKENS.borderLight,
  color: TOKENS.dimMid,
  fontFamily: "inherit",
  fontSize: 10,
  padding: "4px 8px",
  borderRadius: 3,
  cursor: "pointer",
  letterSpacing: "0.05em",
  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
};

export const lengthBtnActiveStyle = { borderColor: TOKENS.dim, color: "#aaa" };

export const iconBtnStyle = {
  background: "none",
  border: "none",
  color: TOKENS.dimLight,
  fontFamily: "inherit",
  fontSize: 14,
  cursor: "pointer",
  padding: "4px 6px",
  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
};

// ─── Stats bar ──────────────────────────────────────────────────────────────

export const statsBarStyle = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "8px 32px",
  borderBottom: `1px solid ${TOKENS.surface}`,
  fontSize: 11,
};

export const statStyle = { display: "flex", gap: 6, alignItems: "baseline" };
export const statLabelStyle = {
  color: TOKENS.dim,
  letterSpacing: "0.08em",
  fontSize: 10,
};
export const statValStyle = { color: TOKENS.statText, fontWeight: 500 };
export const statDividerStyle = { color: TOKENS.muted };

// ─── Main area ──────────────────────────────────────────────────────────────

export const mainStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 48px 20px",
  margin: "0 auto",
  width: "100%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 1300,
  zIndex: 5,
};

export const modeHintStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
  marginBottom: 28,
};

export const modeHintTitleStyle = {
  fontSize: 12,
  color: TOKENS.dim,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
};

export const modeHintSubStyle = {
  fontSize: 11,
  color: TOKENS.dimDark,
  letterSpacing: "0.15em",
};

export const startHintStyle = {
  fontSize: 11,
  color: TOKENS.dim,
  letterSpacing: "0.1em",
  marginBottom: 12,
};

// ─── Text display ───────────────────────────────────────────────────────────

export const textAreaStyle = {
  fontSize: 37,
  fontWeight: 400,
  fontFamily: "'Roboto Mono', 'JetBrains Mono', monospace",
  lineHeight: "37px",
  letterSpacing: "normal",
  maxHeight: 320,
  minHeight: 111 /* ensures 3 lines minimum */,
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "left",
  width: "100%",
  wordBreak: "normal",
  overflowWrap: "normal",
  position: "relative",
  scrollBehavior: "smooth",
};

export const charStyle = {
  color: "#656669",
  display: "inline",
  transition: "color 0.06s cubic-bezier(0.16, 1, 0.3, 1)",
  position: "relative",
};

export const charCorrectStyle = { color: "#D1D0C5" };

export const charWrongStyle = {
  color: TOKENS.red,
  textDecoration: "underline",
  textDecorationColor: "rgba(248,113,113,0.4)",
};

export const charReviewStyle = { color: TOKENS.yellow };

// ─── Footer ─────────────────────────────────────────────────────────────────

export const footerStyle = {
  padding: "8px 32px 12px",
  textAlign: "center",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0, // Ensure it spans across to help centering
  margin: "0 auto", // Center it horizontally
  maxWidth: 1300, // Match max-width of header
  width: "100%",
};

export const footerHintStyle = {
  fontSize: 10,
  color: "#656669",
  letterSpacing: "0.08em",
};
