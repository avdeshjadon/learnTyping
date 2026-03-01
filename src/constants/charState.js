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
// charState.js -- Character State Enum
// ======================================
// Defines the possible visual states for each character in the typing
// text: IDLE (not yet reached), CORRECT, WRONG, or REVIEW (backspaced).
// Used by TextDisplay to pick the right colour for each <span>.
// ----------------------------------------------------------------------------

const CHAR_STATE = {
  IDLE: "idle",
  CORRECT: "correct",
  WRONG: "wrong",
  REVIEW: "review",
};

export default CHAR_STATE;
