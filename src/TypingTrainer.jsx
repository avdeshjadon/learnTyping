import MODES from "./data/modes";
import useTypingSession from "./hooks/useTypingSession";
import Header from "./components/Header";
import TextDisplay from "./components/TextDisplay";
import VisualKeyboard from "./components/VisualKeyboard";
import ResultScreen from "./components/ResultScreen";
import Footer from "./components/Footer";
import GlobalStyles from "./components/GlobalStyles";
import { appStyle, mainStyle } from "./styles/appStyles";

export default function TypingTrainer() {
  const {
    mode,
    length,
    story,
    charStates,
    cursor,
    started,
    finished,
    elapsed,
    errors,
    flashKey,
    soundOn,
    wpm,
    accuracy,
    resetSession,
    switchMode,
    switchLength,
    setSoundOn,
    nextExpectedKey,
  } = useTypingSession();

  return (
    <div style={appStyle}>
      <Header
        mode={mode}
        length={length}
        soundOn={soundOn}
        onSwitchMode={switchMode}
        onSwitchLength={switchLength}
        onToggleSound={() => setSoundOn((s) => !s)}
      />

      <main style={mainStyle}>
        {finished ? (
          <ResultScreen
            wpm={wpm}
            accuracy={accuracy}
            elapsed={elapsed}
            errors={errors}
            onRetry={() => resetSession()}
            onNext={() => {
              const idx = MODES.findIndex((m) => m.id === mode.id);
              switchMode(MODES[(idx + 1) % MODES.length]);
            }}
            mode={mode}
          />
        ) : (
          <TextDisplay
            mode={mode}
            story={story}
            charStates={charStates}
            cursor={cursor}
            started={started}
          />
        )}
      </main>

      {!finished && <VisualKeyboard nextKey={nextExpectedKey} flashKey={flashKey} />}

      <Footer />
      <GlobalStyles />
    </div>
  );
}
