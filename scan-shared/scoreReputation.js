/**
 * Reputation score: internal raw 0-100, displayed as X/100 with X capped at 85.
 * Scores below 45 are reserved for high-stakes negatives (major press, regulators, .gov, or many risks).
 */

/** Government, regulators, and major news domains - negative hits here are weighted heavily. */
const SEVERE_NEGATIVE_SIGNAL =
  /(\.gov(\/|$)|(?:^https?:\/\/)?(?:www\.)?sec\.gov|sec\.gov\/|justice\.gov\/|fbi\.gov\/|ftc\.gov\/|consumerfinance\.gov\/|edgar|litigation-release)|wsj\.com\/articles\/|nytimes\.com\/\d{4}\/|washingtonpost\.com\/[^/]+\/\d{4}|reuters\.com\/(?:legal|world|business|markets)|bloomberg\.com\/news\/articles|ft\.com\/content\/|theguardian\.com\/[^/]+\/\d{4}|bbc\.com\/news\/|bbc\.co\.uk\/news\/|economist\.com\/[^/]+\/|latimes\.com\/(?:[^/]+\/)?\d{4}|npr\.org\/\d{4}\/\d{2}\/\d{2}\//i;

/**
 * @param {import('./classifySerp.js').ClassifiedResult} row
 */
export function isSevereNegativeThreat(row) {
  if (row.sentiment !== "negative") return false;
  const hay = `${row.link} ${row.title} ${row.snippet}`;
  return SEVERE_NEGATIVE_SIGNAL.test(hay);
}

/**
 * @param {import('./classifySerp.js').ClassifiedResult[]} rows
 */
export function computeReputationScore(rows) {
  const positive = rows.filter((r) => r.sentiment === "positive");
  const neutral = rows.filter((r) => r.sentiment === "neutral");
  const negative = rows.filter((r) => r.sentiment === "negative");
  const strongPositive = positive.filter((r) => r.strongPositive);

  const severe = negative.filter((r) => isSevereNegativeThreat(r));
  const softNeg = negative.filter((r) => !isSevereNegativeThreat(r));
  const severeNearTop = severe.filter((r) => r.rank <= 15);

  const hugeNegativeStory =
    softNeg.length >= 8 ||
    severeNearTop.length >= 1 ||
    severe.length >= 3;

  let raw = 58;
  raw += strongPositive.length * 6;
  raw += Math.max(0, positive.length - strongPositive.length) * 3;
  raw += neutral.length * 1;
  raw -= softNeg.length * 4;
  raw -= severe.length * 13;
  if (severeNearTop.length >= 1) raw -= 10;
  if (severeNearTop.length >= 2) raw -= 10;

  if (rows.length === 0) {
    raw = 64;
  }

  raw = Math.round(raw);

  if (!hugeNegativeStory) {
    raw = Math.max(45, raw);
  }

  raw = Math.max(0, Math.min(100, raw));

  const strongPositiveCount = strongPositive.length;
  const presenceLabel =
    strongPositiveCount >= 5 ? "Good Online Presence" : "Weak Online Presence";

  const reportedScore = Math.min(85, raw);

  return {
    rawScore: raw,
    reportedScore,
    presenceLabel,
    strongPositiveCount,
  };
}

/**
 * @param {import('./classifySerp.js').ClassifiedResult[]} rows
 * @param {{ presenceLabel: string; reportedScore: number }} score
 */
export function buildScanSummary(rows, score) {
  const nPos = rows.filter((r) => r.sentiment === "positive").length;
  const nNeu = rows.filter((r) => r.sentiment === "neutral").length;
  const nNeg = rows.filter((r) => r.sentiment === "negative").length;

  return [
    `We reviewed the first three pages of search results for your name (${rows.length} links).`,
    `Our model tagged ${nPos} positive, ${nNeu} neutral, and ${nNeg} negative results.`,
    `Reputation score: ${score.reportedScore} out of 100. Overall presence: ${score.presenceLabel}.`,
  ].join("\n");
}

/**
 * @param {import('./classifySerp.js').ClassifiedResult[]} rows
 */
export function buildHurtingSection(rows) {
  const neg = rows.filter((r) => r.sentiment === "negative");
  if (neg.length === 0) {
    return "We did not flag obvious high-risk links in the first three pages of results we reviewed. You should still verify each result manually.";
  }
  return neg
    .slice(0, 5)
    .map((r) => `- ${r.title} (${r.displayLink})`)
    .join("\n");
}

/**
 * @param {import('./classifySerp.js').ClassifiedResult[]} rows
 * @param {string} presenceLabel
 */
export function buildImprovingSection(rows, presenceLabel) {
  const lines = [
    "Strengthen your anchor identity: complete your LinkedIn with a clear headline, photo, and roles that match how you want to be found.",
    "Own accurate bios on a few trusted surfaces you control (personal site, employer page, relevant industry directories) so searchers see consistent facts.",
    "Set a simple rhythm to check new results (for example quarterly), note anything that is not about you or is outdated, and decide what is worth addressing with evidence or outreach.",
  ];
  if (presenceLabel === "Weak Online Presence") {
    lines.unshift(
      "Your first pages lean light on recognizable authority profiles. Prioritize a small set of credible third-party profiles and mentions over chasing every possible listing.",
    );
  }
  const weakSocial = !rows.some((r) => /linkedin\.com\/(in|pub)/i.test(r.link));
  if (weakSocial) {
    lines.push("Add or refresh a public LinkedIn profile that uses the exact professional name people search for.");
  }
  return lines.join("\n\n");
}
