# PracticeTyping

A sleek, MonkeyType-inspired typing practice app built with React + Vite. Improve your typing speed and accuracy with progressive modes, real-time feedback, and a distraction-free zen experience.

## Features

- **6 Progressive Typing Modes** -- train row by row or go full keyboard
  - Home Row (Basic): `a s d f j k l ;`
  - Home Row (Full): `a s d f g h j k l ;`
  - Top Row: `q w e r t y u i o p`
  - Bottom Row: `z x c v b n m , . /`
  - Numbers Row: `1 2 3 4 5 6 7 8 9 0`
  - Full Keyboard: all keys combined (24 coherent prose stories)
- **3 Text Lengths** -- short (~150 chars), medium (~280), long (~450)
- **Live Stats** -- real-time WPM and elapsed time while typing
- **Smart Cursor** -- smooth linear-gliding cursor with character-level tracking
- **Zen Mode** -- UI fades away as you type; logo stays visible at low opacity
- **Keyboard Shortcuts** -- `Esc` to restart, `Tab` to switch modes
- **Result Screen** -- WPM, accuracy, time, errors with retry & next story options
- **Responsive Design** -- scales from mobile to ultrawide (14px--36px font range)
- **Sentence-Boundary Trimming** -- stories are cut cleanly at sentence endings
- **No Word Splitting** -- words never break mid-word across lines

## Tech Stack

| Layer     | Tech                        |
| --------- | --------------------------- |
| Framework | React 19                    |
| Bundler   | Vite 7                      |
| Fonts     | Roboto Mono, JetBrains Mono |
| Styling   | CSS-in-JS (inline styles)   |
| Linting   | ESLint 9                    |

## Getting Started

```bash
# Clone the repo
git clone https://github.com/avdeshjadon/practiceTyping.git
cd practiceTyping

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command           | Description                 |
| ----------------- | --------------------------- |
| `npm run dev`     | Start dev server with HMR   |
| `npm run build`   | Production build to `dist/` |
| `npm run preview` | Preview production build    |
| `npm run lint`    | Run ESLint                  |

## Project Structure

```
src/
├── components/        # UI components (Header, TextDisplay, ResultScreen, Footer)
├── constants/         # Character states, design tokens
├── data/
│   ├── modes.js       # Mode definitions (id, label, keys)
│   └── stories/       # Story pools per mode (homeHalf, homeFull, top, bottom, numbers, full)
├── hooks/
│   └── useTypingSession.js  # Core typing logic, stats, keyboard handling
├── styles/            # Style objects (app, result)
├── utils/             # getRandomStory, formatTime
├── App.jsx
├── TypingTrainer.jsx  # Main app orchestrator
└── main.jsx           # Entry point
```

## How It Works

1. **Pick a mode** from the navbar (or press `Tab` to cycle)
2. **Choose length** -- short, medium, or long
3. **Start typing** -- the timer starts on your first keystroke
4. **Track progress** -- live WPM and timer in the stats bar; correct characters turn white, errors turn red
5. **Finish** -- see your WPM, accuracy, time, and error count on the result screen
6. **Retry or next** -- retype the same text or load a new story

## License

MIT -- free to use, modify, and distribute.

## Author

**Avdesh Jadon** -- [GitHub](https://github.com/avdeshjadon)
