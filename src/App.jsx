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
// App.jsx -- Root Application Component
// =======================================
// Thin wrapper that renders the TypingTrainer as the sole top-level view.
// Keeps the root clean so future additions (routing, providers) slot in
// easily without touching TypingTrainer itself.
// ----------------------------------------------------------------------------

import TypingTrainer from './TypingTrainer'

function App() {
  return <TypingTrainer />
}

export default App
