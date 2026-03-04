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
// ResultScreen.jsx -- Post-Session Results
// ==========================================
// Shown when the user finishes typing a story. Displays WPM, accuracy,
// elapsed time, and error count in a clean stat-card layout. Provides
// "try again" (same mode, new story) and "next mode" action buttons.
// ----------------------------------------------------------------------------

import formatTime from "../utils/formatTime";
import {
  resultScreenStyle,
  resultTitleStyle,
  resultStatsStyle,
  resultStatStyle,
  resultStatValStyle,
  resultStatLabelStyle,
  resultStatDividerStyle,
  resultActionsStyle,
  resultBtnStyle,
  resultBtnSecondaryStyle,
  resultModeStyle,
} from "../styles/resultStyles";

export default function ResultScreen({
  wpm,
  accuracy,
  elapsed,
  errors,
  onRetry,
  onNextStory,
  mode,
}) {
  return (
    <div className="result-screen" style={resultScreenStyle}>
      <div style={resultTitleStyle}>session complete</div>

      <div style={resultStatsStyle}>
        <div style={resultStatStyle}>
          <span style={resultStatValStyle}>{wpm}</span>
          <span style={resultStatLabelStyle}>wpm</span>
        </div>
        <div style={resultStatDividerStyle} />
        <div style={resultStatStyle}>
          <span style={resultStatValStyle}>{accuracy}%</span>
          <span style={resultStatLabelStyle}>accuracy</span>
        </div>
        <div style={resultStatDividerStyle} />
        <div style={resultStatStyle}>
          <span style={resultStatValStyle}>{formatTime(elapsed)}</span>
          <span style={resultStatLabelStyle}>time</span>
        </div>
        <div style={resultStatDividerStyle} />
        <div style={resultStatStyle}>
          <span style={resultStatValStyle}>{errors}</span>
          <span style={resultStatLabelStyle}>errors</span>
        </div>
      </div>

      <div style={resultActionsStyle}>
        <button onClick={() => onRetry()} style={resultBtnStyle}>
          try again
        </button>
        <button
          onClick={() => onNextStory()}
          style={{ ...resultBtnStyle, ...resultBtnSecondaryStyle }}
        >
          next story →
        </button>
      </div>

      <div style={resultModeStyle}>practiced: {mode.label}</div>
    </div>
  );
}
