/**
 * @typedef {import("../data/r360ChatbotKnowledge.js").R360ChatbotEntry} R360ChatbotEntry
 */

const STOP = new Set([
  "the",
  "and",
  "for",
  "you",
  "are",
  "our",
  "can",
  "how",
  "what",
  "with",
  "that",
  "this",
  "from",
  "your",
  "have",
  "does",
  "will",
  "about",
  "into",
  "they",
  "was",
  "its",
]);

/**
 * @param {string} raw
 * @returns {string}
 */
export function normalizeChatQuery(raw) {
  return raw
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * @param {string} normalized
 * @param {R360ChatbotEntry} entry
 * @returns {number}
 */
function scoreEntry(normalized, entry) {
  let score = 0;
  for (const phrase of entry.triggers) {
    if (normalized.includes(phrase)) score += 12;
  }
  const tokens = normalized.split(" ").filter((t) => t.length > 2 && !STOP.has(t));
  const tokenSet = new Set(tokens);
  for (const kw of entry.keywords) {
    if (kw.length <= 2) continue;
    if (normalized.includes(kw)) score += 3;
    else if (tokenSet.has(kw)) score += 2;
  }
  return score;
}

/**
 * @param {string} userMessage
 * @param {R360ChatbotEntry[]} entries
 * @returns {{ entry: R360ChatbotEntry | null; score: number }}
 */
export function matchR360ChatbotEntry(userMessage, entries) {
  const normalized = normalizeChatQuery(userMessage);
  if (!normalized) return { entry: null, score: 0 };

  let best = /** @type {R360ChatbotEntry | null} */ (null);
  let bestScore = 0;
  for (const entry of entries) {
    const s = scoreEntry(normalized, entry);
    if (s > bestScore) {
      bestScore = s;
      best = entry;
    }
  }
  return { entry: best, score: bestScore };
}
