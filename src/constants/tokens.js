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
// tokens.js -- Design Token Constants
// =====================================
// Single source of truth for all visual design values: colors, fonts,
// border shades, and muted/dim palette entries. Every style file imports
// from here so a colour-scheme change only needs one edit.
// ----------------------------------------------------------------------------

const TOKENS = {
  bg: "var(--bg)",
  surface: "var(--surface)",
  border: "var(--border)",
  borderLight: "var(--borderLight)",
  text: "var(--text)",
  dim: "var(--dim)",
  dimLight: "var(--dimLight)",
  dimDark: "var(--dimDark)",
  dimMid: "var(--dimMid)",
  muted: "var(--muted)",
  statText: "var(--statText)",
  green: "var(--green)",
  red: "var(--red)",
  yellow: "var(--yellow)",
  font: "'JetBrains Mono', 'Courier New', monospace",
  fontMono: "'JetBrains Mono', monospace",
};

export default TOKENS;
