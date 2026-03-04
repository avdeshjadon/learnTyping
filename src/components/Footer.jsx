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
// Footer.jsx -- Bottom Hint Bar
// ===============================
// Minimal footer showing keyboard shortcuts (esc to reset, tab to switch
// mode). Auto-hides during zen-mode via the .app-footer CSS class.
// ----------------------------------------------------------------------------

import { footerStyle, footerHintStyle } from "../styles/appStyles";

export default function Footer() {
  return (
    <div
      className="app-footer"
      style={{
        ...footerStyle,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        fontSize: 11,
      }}
    >
      <div style={{ display: "flex", gap: 16 }}>
        <a
          href="https://github.com/avdeshjadon/practiceTyping"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "var(--dim)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 6,
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "var(--yellow)")}
          onMouseLeave={(e) => (e.target.style.color = "var(--dim)")}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          github
        </a>
      </div>
      <div
        style={{
          color: "var(--dim)",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        made by
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
          style={{ color: "var(--text)", transition: "color 0.4s ease" }}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        avdesh jadon
      </div>
    </div>
  );
}
