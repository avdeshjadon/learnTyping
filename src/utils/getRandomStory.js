import STORIES from "../data/stories";

const LENGTH_TARGETS = { short: 150, medium: 280, long: 450 };

export default function getRandomStory(modeId, length = "medium") {
  const pool = STORIES[modeId] || STORIES.full;
  const base = pool[Math.floor(Math.random() * pool.length)];
  const target = LENGTH_TARGETS[length] || 280;

  let text = base;
  while (text.length < target) text += " " + base;

  text = text.slice(0, target);
  const lastSpace = text.lastIndexOf(" ");
  return lastSpace > 100 ? text.slice(0, lastSpace) : text;
}
