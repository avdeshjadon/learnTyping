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
// keyboardLayout.js -- Physical Keyboard Layout Data
// ====================================================
// Exports a 2D array representing a standard US QWERTY keyboard,
// plus a Set of wide keys (Backspace, Tab, Caps, Enter, Shift, etc.)
// used by VisualKeyboard to apply wider CSS sizing.
// ----------------------------------------------------------------------------

const KEYBOARD_LAYOUT = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "⌫"],
  ["⇥", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
  ["⇪", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "↵"],
  ["⇧", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", " ⇧"],
  ["ctrl", "alt", "⎵", "alt", "ctrl"],
];

export const WIDE_KEYS = new Set(["⌫", "⇥", "⇪", "↵", "⇧", " ⇧", "ctrl", "alt"]);

export default KEYBOARD_LAYOUT;
