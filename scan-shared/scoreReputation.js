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
  const neg = rows
    .filter((r) => r.sentiment === "negative")
    .sort((a, b) => a.rank - b.rank);
  if (neg.length === 0) {
    return `We did not flag obvious high-risk links in the results we reviewed (up to ${FREE_SCAN_LINK_LIMIT} links). You should still verify each result manually.`;
  }

  return neg
    .slice(0, 5)
    .map((r) => {
      const page = r.rank <= 10 ? 1 : r.rank <= 20 ? 2 : 3;
      const riskLabel = riskTypeForResult(r);
      const visibleIssue = visibleIssueForResult(r);
      return [
        `Page ${page}, rank ${r.rank}: ${r.title || r.displayLink} (${r.displayLink})`,
        `${riskLabel}: ${visibleIssue}`,
        `Why it matters: ${riskImpactForRank(r.rank)}`,
      ].join(" - ");
    })
    .join("\n");
}

/**
 * @param {import('./classifySerp.js').ClassifiedResult} row
 */
function riskTypeForResult(row) {
  const blob = `${row.title} ${row.snippet} ${row.link}`.toLowerCase();
  const host = row.displayLink || "";
  if (
    /\.gov(\/|$)|sec\.gov|justice\.gov|ftc\.gov|consumerfinance\.gov|court|law|legal|regulator|board|disciplinary/i.test(
      `${host} ${blob}`,
    )
  ) {
    return "Legal or regulator visibility";
  }
  if (/review|complaint|pissedconsumer|ripoff|scam|reddit|forum|glassdoor|indeed/i.test(`${host} ${blob}`)) {
    return "Complaint or review visibility";
  }
  if (/news|article|press|media|investigation|allegation|controversy/i.test(blob)) {
    return "Negative article or media visibility";
  }
  if (/facebook|twitter|x\.com|instagram|tiktok|linkedin|reddit|social/i.test(`${host} ${blob}`)) {
    return "Social media visibility";
  }
  return "Reputation-risk visibility";
}

/**
 * @param {import('./classifySerp.js').ClassifiedResult} row
 */
function visibleIssueForResult(row) {
  const snippet = String(row.snippet || "").trim();
  const reason = String(row.reason || "").trim();
  if (snippet) {
    return `the search snippet shows "${snippet.slice(0, 180)}${snippet.length > 180 ? "..." : ""}"`;
  }
  return reason || "the title/domain can create a negative first impression.";
}

/**
 * @param {number} rank
 */
function riskImpactForRank(rank) {
  if (rank <= 3) return "it appears near the top of page one, where searchers are most likely to notice it.";
  if (rank <= 10) return "it is still on page one and can shape first impressions before positive context is seen.";
  if (rank <= 20) return "it sits on page two and should be monitored or suppressed before it climbs.";
  return "it is lower visibility today, but it is worth tracking because harmful links can move upward over time.";
}

/**
 * @param {import('./classifySerp.js').ClassifiedResult} row
 */
function actionForNegativeResult(row) {
  const blob = `${row.title} ${row.snippet} ${row.link}`.toLowerCase();
  const host = row.displayLink || "";
  const page = row.rank <= 10 ? 1 : row.rank <= 20 ? 2 : 3;

  if (
    /\.gov(\/|$)|sec\.gov|justice\.gov|ftc\.gov|consumerfinance\.gov|court|law|legal|regulator|board|disciplinary/i.test(
      `${host} ${blob}`,
    )
  ) {
    return `Address the ${host} result at rank ${row.rank}: prepare a factual context page or professional bio that explains the current status in neutral language, then support it with authoritative profiles and relevant citations.`;
  }
  if (/review|complaint|pissedconsumer|ripoff|scam|glassdoor|indeed/i.test(`${host} ${blob}`)) {
    return `For the ${host} complaint/review result on page ${page}, collect evidence, respond only where a calm factual response is useful, and build stronger owned/profile assets for the exact name query.`;
  }
  if (/reddit|forum|quora/i.test(`${host} ${blob}`)) {
    return `For the discussion result from ${host}, avoid arguing in-thread; instead publish clearer controlled assets that answer the same search intent and give Google better sources to show.`;
  }
  if (/news|article|press|media|investigation|allegation|controversy/i.test(blob)) {
    return `For the article/media result at rank ${row.rank}, create or refresh stronger third-party proof points - current bio, recent press, interviews, and profile pages - so the old story is not the dominant context.`;
  }
  if (/facebook|twitter|x\.com|instagram|tiktok|linkedin|social/i.test(`${host} ${blob}`)) {
    return `For the social result at rank ${row.rank}, review the underlying post/profile visibility and replace weak or outdated social signals with current professional profiles.`;
  }
  return `Prioritize the negative result at rank ${row.rank}: build positive assets targeting the same name query until this URL has stronger alternatives around it.`;
}

/**
 * @param {import('./classifySerp.js').ClassifiedResult} row
 */
function actionForPositiveResult(row) {
  if (/linkedin\.com\/(in|pub)/i.test(row.link)) {
    return `Strengthen the LinkedIn result already ranking at ${row.rank}: update the headline, About section, current role, recommendations, and featured links so it becomes a stronger anchor result.`;
  }
  if (/official|about|team|bio|profile|company|\.com/i.test(`${row.title} ${row.displayLink} ${row.snippet}`)) {
    return `Reinforce the positive ${row.displayLink} result at rank ${row.rank}: make sure the page uses the exact searched name, current title, location/industry context, and links to other trusted profiles.`;
  }
  return `Build on the positive result at rank ${row.rank} (${row.displayLink}) by keeping it updated and linking it from other credible profiles or owned pages.`;
}

/**
 * @param {import('./classifySerp.js').ClassifiedResult[]} rows
 */
function hasLinkedInProfile(rows) {
  return rows.some((r) => /linkedin\.com\/(in|pub)/i.test(r.link));
}

/**
 * @param {import('./classifySerp.js').ClassifiedResult[]} rows
 */
function hasControlledIdentityAsset(rows) {
  return rows.some((r) =>
    /\b(official|personal website|portfolio|about|bio|biography|team|company|profile)\b/i.test(
      `${r.title} ${r.snippet} ${r.displayLink}`,
    ),
  );
}

/**
 * @param {string[]} lines
 * @param {string} line
 */
function pushUnique(lines, line) {
  const normalized = line.toLowerCase().replace(/\s+/g, " ").trim();
  if (!normalized || lines.some((existing) => existing.toLowerCase().replace(/\s+/g, " ").trim() === normalized)) {
    return;
  }
  lines.push(line);
}

/**
 * @param {import('./classifySerp.js').ClassifiedResult[]} rows
 * @param {number} reportedScore 0-80; below 48 (grades C and D) we add the authority-profile emphasis line
 */
export function buildImprovingSection(rows, reportedScore) {
  const sorted = [...rows].sort((a, b) => a.rank - b.rank);
  const negatives = sorted.filter((r) => r.sentiment === "negative");
  const pageOneNegatives = negatives.filter((r) => r.rank <= 10);
  const positives = sorted.filter((r) => r.sentiment === "positive");
  const neutral = sorted.filter((r) => r.sentiment === "neutral");
  const lines = [];

  for (const row of negatives.slice(0, 3)) {
    pushUnique(lines, actionForNegativeResult(row));
  }

  if (pageOneNegatives.length >= 2) {
    pushUnique(
      lines,
      `Because ${pageOneNegatives.length} negative results appear on page one, focus first on suppression assets that can rank quickly: LinkedIn, a current bio page, high-authority profiles, and credible third-party mentions for the exact name search.`,
    );
  }

  if (!hasLinkedInProfile(rows)) {
    pushUnique(
      lines,
      "Create or fully refresh a public LinkedIn profile for the exact name being searched; no strong LinkedIn profile appeared in the scanned results.",
    );
  }

  if (!hasControlledIdentityAsset(rows)) {
    pushUnique(
      lines,
      "Add one controlled identity page - a personal site, employer bio, company leadership page, or professional profile - so searchers see an accurate source you can keep current.",
    );
  }

  for (const row of positives.slice(0, 2)) {
    pushUnique(lines, actionForPositiveResult(row));
  }

  if (neutral.length >= 5 && positives.length < 4) {
    pushUnique(
      lines,
      `The scan contains ${neutral.length} neutral or low-context listings. Improve consistency across these surfaces so they show the same name, title, location/industry, and current role rather than thin directory-style information.`,
    );
  }

  if (negatives.length === 0 && positives.length >= 3) {
    pushUnique(
      lines,
      "No obvious high-risk links were flagged, so the next step is protection: keep the strongest positive profiles updated and monitor quarterly for new results that mention your name.",
    );
  }

  if (reportedScore < 48) {
    pushUnique(
      lines,
      "This score needs urgent attention: start with the highest-ranking risk above, then build a small group of stronger positive assets before adding lower-priority directory listings.",
    );
  } else if (reportedScore < 60) {
    pushUnique(
      lines,
      "This score is workable but vulnerable: prioritize the first-page issue and strengthen two or three authoritative profiles before expanding into broader content.",
    );
  }

  if (lines.length === 0) {
    lines.push(
      "Keep monitoring this search every quarter and update your strongest positive assets whenever your role, credentials, location, or public-facing work changes.",
    );
  }

  return lines.slice(0, 6).join("\n");
}

/**
 * @deprecated Use buildImprovingSection. Kept only to make older imports fail less abruptly if cached.
 * @param {import('./classifySerp.js').ClassifiedResult[]} rows
 */
export function buildLegacyImprovingSection(rows) {
  return rows
    .filter((r) => r.sentiment === "positive")
    .slice(0, 2)
    .map((r) => `Build on ${r.title} (${r.displayLink}).`)
    .join("\n");
}
