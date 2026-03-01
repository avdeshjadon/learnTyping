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
// stories/index.js -- Story Pool Registry
// =========================================
// Re-exports all per-mode story arrays into a single lookup object
// keyed by mode id (e.g. "home_half", "top", "full").
// ----------------------------------------------------------------------------

import homeHalf from "./homeHalf";
import homeFull from "./homeFull";
import top from "./top";
import bottom from "./bottom";
import numbers from "./numbers";
import full from "./full";

const STORIES = {
  home_half: homeHalf,
  home_full: homeFull,
  top,
  bottom,
  numbers,
  full,
};

export default STORIES;
