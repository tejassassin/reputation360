/**
 * Reputation score: internal raw 0-100, displayed as X/100 with X capped at 85.
 * Scores below 45 are reserved for high-stakes negatives (major press, regulators, .gov, or many risks).
 *
 * Letter grades A-D (no F) and overall presence both derive from the reported score (0-85) so they stay aligned.
 */

import { FREE_SCAN_LINK_LIMIT } from "./freeScanConstants.js";

/**
 * High-to-low tiers. First matching `minScore` wins. Grade D applies to reported scores 0-47 (below 48).
 * @type {ReadonlyArray<{ minScore: number; letter: string; presenceLabel: string }>}
 */
export const REPUTATION_GRADE_RUBRIC = [
  { minScore: 72, letter: "A", presenceLabel: "Well Positioned - Continue Monitoring" },
  { minScore: 60, letter: "B", presenceLabel: "Growth Opportunities Identified" },
  { minScore: 48, letter: "C", presenceLabel: "Reputation Requires Urgent Attention" },
  { minScore: 0, letter: "D", presenceLabel: "Serious Reputation Threats Identified" },
];

/**
 * @param {number} reportedScore 0-85 (shown on a /100 scale in the product)
 */
export function letterGradeForReportedScore(reportedScore) {
  const s = Math.max(0, Math.min(85, reportedScore));
  for (const tier of REPUTATION_GRADE_RUBRIC) {
    if (s >= tier.minScore) return tier.letter;
  }
  return "D";
}

/**
 * @param {number} reportedScore 0-85 (shown on a /100 scale in the product)
 */
export function presenceLabelForReportedScore(reportedScore) {
  const s = Math.max(0, Math.min(85, reportedScore));
  for (const tier of REPUTATION_GRADE_RUBRIC) {
    if (s >= tier.minScore) return tier.presenceLabel;
  }
  return "Serious Reputation Threats Identified";
}

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

  const reportedScore = Math.min(85, raw);
  const presenceLabel = presenceLabelForReportedScore(reportedScore);

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
    `We reviewed up to ${FREE_SCAN_LINK_LIMIT} live search results for your name (${rows.length} links).`,
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
    return `We did not flag obvious high-risk links in the results we reviewed (up to ${FREE_SCAN_LINK_LIMIT} links). You should still verify each result manually.`;
  }
  return neg
    .slice(0, 5)
    .map((r) => `${r.title} (${r.displayLink})`)
    .join("\n");
}

/**
 * @param {import('./classifySerp.js').ClassifiedResult[]} rows
 * @param {number} reportedScore 0-85; below 48 (grades C and D) we add the authority-profile emphasis line
 */
export function buildImprovingSection(rows, reportedScore) {
  const lines = [
    "Strengthen your anchor identity: complete your LinkedIn with a clear headline, photo, and roles that match how you want to be found.",
    "Own accurate bios on a few trusted surfaces you control (personal site, employer page, relevant industry directories) so searchers see consistent facts.",
    "Set a simple rhythm to check new results (for example quarterly), note anything that is not about you or is outdated, and decide what is worth addressing with evidence or outreach.",
  ];
  if (reportedScore < 48) {
    lines.unshift(
      "Your first pages lean light on recognizable authority profiles. Prioritize a small set of credible third-party profiles and mentions over chasing every possible listing.",
    );
  }
  const weakSocial = !rows.some((r) => /linkedin\.com\/(in|pub)/i.test(r.link));
  if (weakSocial) {
    lines.push("Add or refresh a public LinkedIn profile that uses the exact professional name people search for.");
  }
  return lines.join("\n");
}
