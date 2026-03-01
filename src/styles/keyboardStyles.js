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
  border: `1px solid ${TOKENS.border}`,
  borderRadius: 5,
  color: TOKENS.dim,
  fontFamily: TOKENS.fontMono,
  fontSize: 10,
  width: 34,
  height: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "default",
  letterSpacing: "0.02em",
  transition: "all 0.12s ease",
};

export const keyWideStyle = { width: 52, fontSize: 9 };
export const keySpaceStyle = { width: 220 };

export const keyNextStyle = {
  background: "#1a1700",
  borderColor: TOKENS.yellow,
  boxShadow: `0 0 8px rgba(250,204,21,0.4)`,
  color: TOKENS.yellow,
};

export const keyFlashCorrectStyle = {
  background: TOKENS.green,
  color: "#000",
  transform: "scale(0.88)",
};

export const keyFlashWrongStyle = {
  background: TOKENS.red,
  color: "#fff",
  transform: "scale(0.88)",
};

export const keyFlashBackspaceStyle = {
  background: TOKENS.yellow,
  color: "#000",
  transform: "scale(0.88)",
};
