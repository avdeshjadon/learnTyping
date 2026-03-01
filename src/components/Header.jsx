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
// Header.jsx -- Navigation Bar & Controls
// =========================================
// Renders the top navigation bar containing:
//   - App logo with custom SVG favicon
//   - Mode-selection buttons (Home Row, Top Row, etc.)
//   - Text-length picker (short / medium / long)
//   - On-screen keyboard visibility toggle (SVG icon)
//
// Uses className hooks for zen-mode CSS targeting (auto-hide on typing).
// ----------------------------------------------------------------------------

import MODES from "../data/modes";
import {
  headerStyle,
  logoStyle,
  navStyle,
  navBtnStyle,
  navBtnActiveStyle,
  controlsStyle,
  lengthGroupStyle,
  lengthBtnStyle,
  lengthBtnActiveStyle,
  iconBtnStyle,
} from "../styles/appStyles";

const kbToggleStyle = {
  ...iconBtnStyle,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 28,
  height: 28,
  borderRadius: 4,
  opacity: 0.4,
  transition: "opacity 0.15s cubic-bezier(0.16, 1, 0.3, 1), background 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
};

const kbToggleActiveStyle = {
  opacity: 1,
  background: "rgba(226,183,21,0.1)",
};

const KbIcon = ({ active }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={active ? "#E2B715" : "currentColor"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="14" rx="2" />
    <line x1="6" y1="8" x2="6" y2="8" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="10" y1="8" x2="10" y2="8" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="14" y1="8" x2="14" y2="8" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="18" y1="8" x2="18" y2="8" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="6" y1="12" x2="6" y2="12" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="10" y1="12" x2="10" y2="12" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="14" y1="12" x2="14" y2="12" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="18" y1="12" x2="18" y2="12" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="8" y1="16" x2="16" y2="16" />
  </svg>
);

export default function Header({ mode, length, onSwitchMode, onSwitchLength, showKeyboard, onToggleKeyboard, onNextStory, isTyping }) {
  return (
    <header className="app-header" style={headerStyle}>
      <div className="app-logo" style={logoStyle}>
        <img src="/favicon.svg" alt="" style={{ width: 26, height: 26, marginRight: 8, verticalAlign: 'middle' }} />
        PracticeTyping
      </div>
      <nav style={navStyle}>
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => onSwitchMode(m)}
            className="nav-btn"
            style={{
              ...navBtnStyle,
              ...(mode.id === m.id ? navBtnActiveStyle : {}),
            }}
          >
            {m.label}
          </button>
        ))}
      </nav>
      {!isTyping && (
        <button
          onClick={onNextStory}
          title="Next story"
        style={{
          background: "none",
          border: "none",
          color: "#656669",
          cursor: "pointer",
          padding: "4px 8px",
          fontSize: 16,
          lineHeight: 1,
          borderRadius: 4,
          transition: "color 0.15s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "inline-flex",
          alignItems: "center",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#E2B715'; e.currentTarget.style.transform = 'translateX(3px)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = '#656669'; e.currentTarget.style.transform = 'translateX(0)'; }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 4 15 12 5 20 5 4" />
          <line x1="19" y1="5" x2="19" y2="19" />
        </svg>
      </button>
      )}
      <div className="header-controls" style={controlsStyle}>
        <div style={lengthGroupStyle}>
          {["short", "medium", "long"].map((l) => (
            <button
              key={l}
              onClick={() => onSwitchLength(l)}
              className="length-btn"
              style={{
                ...lengthBtnStyle,
                ...(length === l ? lengthBtnActiveStyle : {}),
              }}
            >
              {l}
            </button>
          ))}
        </div>
        <button
          onClick={onToggleKeyboard}
          title={showKeyboard ? "Hide keyboard" : "Show keyboard"}
          style={{
            ...kbToggleStyle,
            ...(showKeyboard ? kbToggleActiveStyle : {}),
          }}
        >
          <KbIcon active={showKeyboard} />
        </button>
      </div>
    </header>
  );
}
