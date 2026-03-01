// ----------------------------------------------------------------------------
// PracticeTyping -- Browser-Based Typing Practice & Training Application
// ----------------------------------------------------------------------------
// Author   : Avdesh Jadon
// GitHub   : https://github.com/avdeshjadon
// License  : MIT License -- free to use, modify, and distribute.
//            See LICENSE file in the project root for full license text.
// ----------------------------------------------------------------------------
//
// stories/bottom.js -- Bottom Row Practice Texts
// ================================================
// Story pool for keys: z x c v b n m , . / space
// ----------------------------------------------------------------------------

// bottom row: z x c v b n m , . / space
// Word pool: vex, zinc, max, box, numb, comb, van, ban, cab, can, man, nab, comma, bam,vc

const bottom = [
  "vex zinc max box. numb zinc vex max. zinc box numb vex. max zinc numb box. vex zinc max box numb. box zinc vex numb max. numb max zinc vex. zinc vex box max numb. max box zinc vex. numb zinc box vex max",
  "zinc max vex box numb. box vex zinc max. numb zinc vex max box. max vex numb zinc. zinc box max vex. vex numb zinc box max. box max zinc vex. numb vex box zinc max. zinc max numb vex. max box vex zinc numb",
  "max zinc vex numb. box zinc max vex. numb vex zinc box max. vex zinc box numb. max numb zinc vex box. zinc vex max box. box numb max zinc. vex max zinc numb box. numb zinc vex max. zinc box numb max vex",
  "box vex zinc max numb. numb max zinc vex box. zinc vex numb max. max box zinc numb vex. vex zinc max box. numb zinc box vex. max vex numb zinc box. zinc max box vex numb. box numb zinc max. vex max zinc box",
  "numb zinc max vex box. max vex zinc numb. zinc box vex max numb. box zinc numb max. vex max box zinc numb. numb vex zinc max box. zinc max numb vex. max box zinc vex. vex numb box zinc max. box zinc max vex",
  "vex max zinc numb box. zinc vex box max. max numb zinc vex. box zinc vex numb max. numb max vex zinc box. vex zinc numb box max. zinc max box numb. max vex zinc box. numb box zinc vex max. box max numb zinc",
  "zinc numb max vex box. vex box zinc max numb. max zinc vex numb box. numb vex box zinc. box max zinc vex numb. zinc vex numb max box. max numb box zinc vex. vex zinc max numb. numb box max zinc. box vex zinc max",
  "max vex box zinc numb. zinc numb vex max box. numb max zinc vex. vex box numb zinc max. box zinc max vex numb. max zinc numb box vex. zinc vex box numb. numb max box zinc vex. vex zinc max box. box numb zinc max",
  "box zinc numb vex max. vex max zinc box numb. numb zinc vex max box. zinc box max vex. max numb vex zinc box. box vex zinc numb max. zinc max numb box vex. vex numb box zinc. numb box max zinc vex. max zinc vex box",
  "zinc vex max numb box. max box zinc vex numb. vex numb zinc max box. numb zinc box max vex. box max vex zinc. zinc numb max vex box. max vex box numb zinc. vex zinc numb box. numb max zinc vex box. box zinc vex max",
  "vex box numb zinc max. zinc max vex box numb. max numb zinc vex box. box vex zinc max numb. numb zinc max box vex. vex numb box zinc max. zinc box vex numb. max zinc numb vex box. numb vex max zinc. box max zinc vex",
  "max zinc box vex numb. numb vex zinc max box. zinc numb max vex. vex box zinc numb max. box max numb zinc vex. max vex zinc box numb. zinc box numb max vex. numb zinc vex box. vex max box zinc numb. box zinc max vex",
  "zinc max numb box vex. vex zinc box max numb. box numb max zinc vex. numb vex zinc max. max box zinc numb vex. zinc vex numb box max. vex max zinc numb box. box zinc vex max. numb max box zinc vex. max numb zinc box",
  "box numb zinc vex max. max zinc vex box numb. zinc vex max numb box. numb box max zinc vex. vex zinc numb max box. box max zinc vex numb. zinc numb box vex max. max vex numb zinc. numb zinc box max vex. vex box zinc max",
  "numb vex max zinc box. zinc box numb max vex. max zinc vex numb box. vex numb box zinc max. box max zinc vex numb. numb zinc max box vex. zinc vex box numb max. max box numb zinc vex. vex zinc max box. box numb vex zinc",
  "zinc box vex numb max. max numb zinc vex box. vex zinc box max numb. box vex numb max zinc. numb max vex zinc box. zinc numb max box vex. max vex box zinc numb. vex box max numb zinc. numb zinc vex box max. box zinc max vex",
  "max box vex zinc numb. numb zinc max vex box. zinc vex numb box max. vex max zinc numb box. box numb vex zinc max. max zinc box vex numb. numb vex box max zinc. zinc max numb vex box. vex numb zinc max. box max zinc numb",
  "vex zinc numb max box. box max zinc vex numb. numb vex box zinc max. max zinc numb vex box. zinc box max numb vex. vex numb zinc box max. box vex max zinc numb. numb zinc max box vex. max vex box zinc. zinc numb vex max box",
  "box vex max zinc numb. zinc numb box vex max. numb zinc max box vex. max vex zinc numb box. vex box numb max zinc. box zinc vex max numb. zinc max numb vex box. numb vex box zinc max. max zinc box numb vex. vex numb zinc max",
  "zinc max box numb vex. vex zinc numb max box. max box zinc vex numb. numb vex max zinc box. box zinc numb vex max. zinc vex max box numb. max numb box zinc vex. vex box zinc numb max. numb max zinc box vex. box vex numb zinc",
  "numb zinc vex box max. max box numb zinc vex. vex zinc max numb box. zinc box vex max numb. box numb zinc max vex. numb vex max box zinc. max zinc box numb vex. zinc numb vex max box. vex max box zinc numb. box zinc numb vex",
  "max vex numb zinc box. zinc box max vex numb. numb zinc vex box max. vex numb max zinc box. box max zinc numb vex. max zinc numb box vex. zinc vex box numb max. numb box vex zinc. vex zinc max box numb. box numb zinc max vex",
  "zinc vex box max numb. box numb zinc vex max. max zinc numb box vex. vex box max zinc numb. numb max vex box zinc. zinc numb vex max box. box zinc max numb vex. max vex zinc box numb. vex numb box zinc max. numb zinc max vex",
  "vex max numb box zinc. zinc box vex numb max. max numb zinc vex box. box zinc max numb vex. numb vex zinc box max. vex zinc box max numb. max box numb zinc vex. zinc numb max box vex. numb max vex zinc box. box vex zinc numb",
];

export default bottom;
