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
  navDropdownContainerStyle,
  navBtnStyle,
  navDropdownListStyle,
  navDropdownItemStyle,
  navDropdownItemActiveStyle,
  controlsStyle,
  lengthGroupStyle,
  lengthBtnStyle,
  lengthBtnActiveStyle,
} from "../styles/appStyles";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function Header({
  mode,
  length,
  onSwitchMode,
  onSwitchLength,
  onNextStory,
  isTyping,
}) {
  const { theme, toggleTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const rowRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      const isClickOnToggle =
        dropdownRef.current && dropdownRef.current.contains(event.target);
      const isClickOnRow =
        rowRef.current && rowRef.current.contains(event.target);

      if (!isClickOnToggle && !isClickOnRow) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className="app-header"
      style={{
        ...headerStyle,
        background: "var(--bg)", // Hide shadow from row behind it
        borderBottomColor: isDropdownOpen ? "transparent" : "var(--navBorder)",
        transition:
          "border-color 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.4s ease",
      }}
    >
      <div className="app-logo" style={logoStyle}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            marginRight: 8,
            transform: "translateY(3px)",
            transition: "color 0.4s ease",
            color: "var(--yellow)",
          }}
        >
          <rect
            x="2"
            y="6"
            width="20"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M9 14h6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        PracticeTyping
      </div>
      <nav style={navStyle}>
        <div
          ref={dropdownRef}
          style={{ position: "relative", display: "inline-block" }}
        >
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="nav-btn"
            style={{
              ...navBtnStyle,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: isDropdownOpen ? "var(--surface)" : "transparent",
              color: isDropdownOpen ? "var(--text)" : "var(--dimLight)",
              borderColor: isDropdownOpen ? "var(--dim)" : "var(--muted)",
            }}
          >
            {mode.label}
          </button>
        </div>
      </nav>
      {!isTyping && (
        <button
          onClick={() => onNextStory()}
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
            transition:
              "color 0.15s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            display: "inline-flex",
            alignItems: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#E2B715";
            e.currentTarget.style.transform = "translateX(3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#656669";
            e.currentTarget.style.transform = "translateX(0)";
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 4 15 12 5 20 5 4" />
            <line x1="19" y1="5" x2="19" y2="19" />
          </svg>
        </button>
      )}
      <div className="header-controls" style={controlsStyle}>
        <button
          onClick={toggleTheme}
          title="Toggle Theme"
          style={{
            background: "none",
            border: "none",
            color: "var(--charNeutral)",
            cursor: "pointer",
            padding: "4px 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition:
              "color 0.15s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--yellow)";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--charNeutral)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {theme === "light" ? (
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          )}
        </button>
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
      </div>

      {/* Animated Full-width Mode Selector Row */}
      <div
        ref={rowRef}
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          background: "var(--bg)",
          borderBottom: "1px solid var(--navBorder)",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 12,
          padding: isDropdownOpen ? "16px 32px" : "0 32px",
          maxHeight: isDropdownOpen ? 300 : 0,
          opacity: isDropdownOpen ? 1 : 0,
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          pointerEvents: isDropdownOpen ? "auto" : "none",
          boxShadow: isDropdownOpen
            ? theme === "light"
              ? "none"
              : "0 10px 30px rgba(0,0,0,0.08)"
            : "none",
          zIndex: 9,
        }}
      >
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => {
              onSwitchMode(m);
              setIsDropdownOpen(false);
            }}
            style={{
              ...navDropdownItemStyle,
              width: "auto",
              textAlign: "center",
              padding: "8px 16px",
              ...(mode.id === m.id ? navDropdownItemActiveStyle : {}),
            }}
          >
            {m.label}
          </button>
        ))}
      </div>
    </header>
  );
}
