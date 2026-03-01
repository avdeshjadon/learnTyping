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
// modes.js -- Typing Mode Definitions
// =====================================
// Array of mode descriptors. Each entry has an id (used to look up the
// story pool), a human label, subtitle showing the relevant keys, and
// a keys string for validation. Tab cycles through these in order.
// ----------------------------------------------------------------------------

const MODES = [
  { id: "home_half", label: "Home Row (Basic)", subtitle: "a s d f  ·  j k l ;", keys: "asdfjkl;" },
  { id: "home_full", label: "Home Row (Full)", subtitle: "a s d f g h j k l ;", keys: "asdfghjkl;" },
  { id: "top", label: "Top Row", subtitle: "q w e r t  ·  y u i o p", keys: "qwertyuiop" },
  { id: "bottom", label: "Bottom Row", subtitle: "z x c v b  ·  n m , . /", keys: "zxcvbnm,./" },
  { id: "numbers", label: "Numbers Row", subtitle: "1 2 3 4 5  ·  6 7 8 9 0", keys: "1234567890" },
  { id: "full", label: "Full Keyboard", subtitle: "All keys combined", keys: "all" },
];

export default MODES;
