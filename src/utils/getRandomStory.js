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
// getRandomStory.js -- Random Story Generator
// ==============================================
// Picks a random story from the mode-specific pool and trims it to
// approximately match the requested length (short ~150, medium ~280,
// long ~450 chars). Text is extended by repeating the base string and
// then cut at the last word boundary to avoid mid-word truncation.
// ----------------------------------------------------------------------------

import STORIES from "../data/stories/index";

const LENGTH_TARGETS = { short: 150, medium: 280, long: 450 };

export default function getRandomStory(modeId, length = "medium") {
  const pool = STORIES[modeId] || STORIES.full;
  const base = pool[Math.floor(Math.random() * pool.length)];
  const target = LENGTH_TARGETS[length] || 280;

  let text = base;
  while (text.length < target) text += " " + base;

  // Trim at target length
  text = text.slice(0, target);

  // Try to cut at a sentence boundary (. or ;) for a cleaner ending
  const lastSentence = Math.max(text.lastIndexOf(". "), text.lastIndexOf("; "), text.lastIndexOf("."));
  if (lastSentence > target * 0.5) {
    text = text.slice(0, lastSentence + 1);
  } else {
    // Fall back to cutting at last word boundary
    const lastSpace = text.lastIndexOf(" ");
    if (lastSpace > target * 0.4) text = text.slice(0, lastSpace);
  }

  // Strip any leading/trailing spaces, commas, periods, semicolons
  text = text.replace(/^[\s,.\;:]+/, "").replace(/[\s]+$/, "");

  return text;
}
