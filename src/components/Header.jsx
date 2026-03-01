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

export default function Header({ mode, length, soundOn, onSwitchMode, onSwitchLength, onToggleSound }) {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>keyzen</div>
      <nav style={navStyle}>
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => onSwitchMode(m)}
            style={{
              ...navBtnStyle,
              ...(mode.id === m.id ? navBtnActiveStyle : {}),
            }}
          >
            {m.label}
          </button>
        ))}
      </nav>
      <div style={controlsStyle}>
        <div style={lengthGroupStyle}>
          {["short", "medium", "long"].map((l) => (
            <button
              key={l}
              onClick={() => onSwitchLength(l)}
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
          onClick={onToggleSound}
          style={{ ...iconBtnStyle, opacity: soundOn ? 1 : 0.35 }}
          title="Toggle sound"
        >
          ♪
        </button>
      </div>
    </header>
  );
}
