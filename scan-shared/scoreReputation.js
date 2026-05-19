/**
 * Reputation score: penalty-based perception model.
 *
 * Everyone starts at 80 internally and we never display more than 80,
 * even though the public-facing UI presents the score on a /100 scale.
 *
 * - Positive links do NOT add points.
 * - Neutral links do NOT change points.
 * - Negative links reduce points by page:
 *   - page 1 (ranks 1-10): -20 each
 *   - page 2 (ranks 11-20): -10 each
 *   - page 3 (ranks 21-30): -5 each
 */

import { FREE_SCAN_GOOGLE_PAGES, FREE_SCAN_LINK_LIMIT } from "./freeScanConstants.js";

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
 * @param {number} reportedScore 0-80 (shown as part of a /100 score in the product)
 */
export function letterGradeForReportedScore(reportedScore) {
  const s = Math.max(0, Math.min(80, reportedScore));
  for (const tier of REPUTATION_GRADE_RUBRIC) {
    if (s >= tier.minScore) return tier.letter;
  }
  return "D";
}

/**
 * @param {number} reportedScore 0-80 (shown as part of a /100 score in the product)
 */
export function presenceLabelForReportedScore(reportedScore) {
  const s = Math.max(0, Math.min(80, reportedScore));
  for (const tier of REPUTATION_GRADE_RUBRIC) {
    if (s >= tier.minScore) return tier.presenceLabel;
  }
  return "Serious Reputation Threats Identified";
}

/**
 * Letter grade and status line for UI (same 0-80 internal scale as {@link letterGradeForReportedScore}).
 * @param {number} reportedScore
 * @returns {{ letter: string; label: string; bandLabel: string }}
 */
export function reputationGradeBundle(reportedScore) {
  const s = Math.max(0, Math.min(80, reportedScore));
  const letter = letterGradeForReportedScore(s);
  const label = presenceLabelForReportedScore(s);
  let bandLabel = "0-47";
  if (s >= 72) bandLabel = "72-80";
  else if (s >= 60) bandLabel = "60-71";
  else if (s >= 48) bandLabel = "48-59";
  return { letter, label, bandLabel };
}

/**
 * @param {import('./classifySerp.js').ClassifiedResult[]} rows
 */
export function computeReputationScore(rows) {
  const positive = rows.filter((r) => r.sentiment === "positive");
  const negative = rows.filter((r) => r.sentiment === "negative");
  const strongPositive = positive.filter((r) => r.strongPositive);
  const strongPositiveCount = strongPositive.length;

  let raw = 80;
  for (const row of negative) {
    if (row.rank <= 10) raw -= 20;
    else if (row.rank <= 20) raw -= 10;
    else raw -= 5;
  }

  raw = Math.max(0, Math.min(80, raw));
  const reportedScore = raw;
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

  const letter = letterGradeForReportedScore(score.reportedScore);
  return [
    `We analyzed the first ${FREE_SCAN_GOOGLE_PAGES} pages of Google-style results for your name (${rows.length} links found, up to ${FREE_SCAN_LINK_LIMIT}).`,
    `We tagged ${nPos} positive, ${nNeu} neutral, and ${nNeg} negative results based on public perception impact.`,
    `Penalty-based reputation score: ${score.reportedScore} / 80 (${letter} grade). ${score.presenceLabel}`,
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
    .map((r) => `${r.title} (${r.displayLink}) - ${r.reason}`)
    .join("\n");
}

/**
 * @param {import('./classifySerp.js').ClassifiedResult[]} rows
 * @param {number} reportedScore 0-80; below 48 (grades C and D) we add the authority-profile emphasis line
 */
export function buildImprovingSection(rows, reportedScore) {
  const topPositives = rows
    .filter((r) => r.sentiment === "positive")
    .slice(0, 2)
    .map((r) => `${r.title} (${r.displayLink})`);
  const lines = [
    "Strengthen your anchor identity: complete your LinkedIn with a clear headline, photo, and roles that match how you want to be found.",
    "Own accurate bios on a few trusted surfaces you control (personal site, employer page, relevant industry directories) so searchers see consistent facts.",
    "Set a simple rhythm to check new results (for example quarterly), note anything that is not about you or is outdated, and decide what is worth addressing with evidence or outreach.",
  ];
  if (topPositives.length) {
    lines.unshift(`Visible trust-building assets already helping you: ${topPositives.join("; ")}.`);
  }
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
