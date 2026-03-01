const KEYBOARD_LAYOUT = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "⌫"],
  ["⇥", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
  ["⇪", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "↵"],
  ["⇧", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", " ⇧"],
  ["ctrl", "alt", "⎵", "alt", "ctrl"],
];

export const WIDE_KEYS = new Set(["⌫", "⇥", "⇪", "↵", "⇧", " ⇧", "ctrl", "alt"]);

export default KEYBOARD_LAYOUT;
