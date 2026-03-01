import TOKENS from "../constants/tokens";

export const resultScreenStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 32,
  padding: "20px 0",
};

export const resultTitleStyle = {
  fontSize: 13,
  color: TOKENS.dim,
  letterSpacing: "0.15em",
  textTransform: "lowercase",
};

export const resultStatsStyle = { display: "flex", alignItems: "center", gap: 0 };

export const resultStatStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 6,
  padding: "0 36px",
};

export const resultStatValStyle = {
  fontSize: 40,
  fontWeight: 300,
  color: TOKENS.text,
  letterSpacing: "-0.02em",
  lineHeight: 1,
};

export const resultStatLabelStyle = {
  fontSize: 10,
  color: TOKENS.dim,
  letterSpacing: "0.12em",
  textTransform: "lowercase",
};

export const resultStatDividerStyle = {
  width: 1,
  height: 50,
  background: TOKENS.borderLight,
};

export const resultActionsStyle = { display: "flex", gap: 12 };

export const resultBtnStyle = {
  background: "none",
  border: `1px solid ${TOKENS.green}`,
  color: TOKENS.green,
  fontFamily: TOKENS.fontMono,
  fontSize: 12,
  padding: "10px 24px",
  borderRadius: 4,
  cursor: "pointer",
  letterSpacing: "0.08em",
  transition: "all 0.15s",
};

export const resultBtnSecondaryStyle = {
  borderColor: TOKENS.muted,
  color: TOKENS.dimLight,
};

export const resultModeStyle = {
  fontSize: 10,
  color: TOKENS.dimDark,
  letterSpacing: "0.1em",
};
