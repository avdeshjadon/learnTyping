import TOKENS from "../constants/tokens";

// ─── App-level styles ───────────────────────────────────────────────────────
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
};

export const logoStyle = {
  fontSize: 18,
  fontWeight: 600,
  color: TOKENS.green,
  letterSpacing: "0.15em",
  textTransform: "lowercase",
  marginRight: 8,
};

export const navStyle = { display: "flex", gap: 4, flex: 1, flexWrap: "wrap" };

export const navBtnStyle = {
  background: "none",
  border: `1px solid ${TOKENS.muted}`,
  color: TOKENS.dimLight,
  fontFamily: "inherit",
  fontSize: 11,
  padding: "5px 10px",
  borderRadius: 4,
  cursor: "pointer",
  letterSpacing: "0.05em",
  transition: "all 0.15s",
};

export const navBtnActiveStyle = {
  borderColor: TOKENS.green,
  color: TOKENS.green,
  background: "rgba(74,222,128,0.05)",
};

export const controlsStyle = { display: "flex", alignItems: "center", gap: 12 };

export const lengthGroupStyle = { display: "flex", gap: 2 };

export const lengthBtnStyle = {
  background: "none",
  border: `1px solid ${TOKENS.borderLight}`,
  color: TOKENS.dimMid,
  fontFamily: "inherit",
  fontSize: 10,
  padding: "4px 8px",
  borderRadius: 3,
  cursor: "pointer",
  letterSpacing: "0.05em",
  transition: "all 0.15s",
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
  transition: "all 0.15s",
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
export const statLabelStyle = { color: TOKENS.dim, letterSpacing: "0.08em", fontSize: 10 };
export const statValStyle = { color: TOKENS.statText, fontWeight: 500 };
export const statDividerStyle = { color: TOKENS.muted };

// ─── Main area ──────────────────────────────────────────────────────────────
export const mainStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 32px 20px",
  maxWidth: 900,
  margin: "0 auto",
  width: "100%",
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
  fontSize: 20,
  lineHeight: 2.2,
  letterSpacing: "0.04em",
  maxHeight: 260,
  overflowY: "hidden",
  textAlign: "left",
  width: "100%",
  wordBreak: "break-all",
  position: "relative",
};

export const charStyle = {
  color: "#2d2d2d",
  display: "inline",
  transition: "color 0.08s ease",
};

export const charCorrectStyle = { color: TOKENS.green };

export const charWrongStyle = {
  color: TOKENS.red,
  textDecoration: "underline",
  textDecorationColor: "rgba(248,113,113,0.4)",
};

export const charReviewStyle = { color: TOKENS.yellow };

export const charCursorStyle = {
  color: TOKENS.text,
  borderBottom: `2px solid ${TOKENS.text}`,
};

// ─── Footer ─────────────────────────────────────────────────────────────────
export const footerStyle = { padding: "8px 32px 12px", textAlign: "center" };

export const footerHintStyle = {
  fontSize: 10,
  color: TOKENS.muted,
  letterSpacing: "0.08em",
};
