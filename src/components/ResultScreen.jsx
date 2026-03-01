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

export default function ResultScreen({ wpm, accuracy, elapsed, errors, onRetry, onNext, mode }) {
  return (
    <div style={resultScreenStyle}>
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
        <button onClick={onRetry} style={resultBtnStyle}>
          try again
        </button>
        <button onClick={onNext} style={{ ...resultBtnStyle, ...resultBtnSecondaryStyle }}>
          next mode →
        </button>
      </div>

      <div style={resultModeStyle}>practiced: {mode.label}</div>
    </div>
  );
}
