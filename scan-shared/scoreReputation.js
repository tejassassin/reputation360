/**
 * Reputation score: internal model 0-100, user-facing max 85.
 */

/**
 * @param {import('./classifySerp.js').ClassifiedResult[]} rows
 */
export function computeReputationScore(rows) {
  const positive = rows.filter((r) => r.sentiment === "positive");
  const neutral = rows.filter((r) => r.sentiment === "neutral");
  const negative = rows.filter((r) => r.sentiment === "negative");
  const strongPositive = positive.filter((r) => r.strongPositive);
  const negativeOnFirstPage = negative.filter((r) => r.rank <= 10);

  let raw = 52;
  raw += strongPositive.length * 8;
  raw += Math.max(0, positive.length - strongPositive.length) * 4;
  raw += neutral.length * 1;
  raw -= negative.length * 17;

  if (rows.length === 0) {
    raw = 58;
  }

  raw = Math.max(0, Math.min(100, Math.round(raw)));

  const negPage1 = negativeOnFirstPage.length;
  if (negPage1 >= 1) {
    raw = Math.min(raw, 49);
  }
  if (negPage1 >= 2) {
    raw = Math.min(raw, 44);
  }
  if (negPage1 >= 3) {
    raw = Math.min(raw, 38);
  }

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
    `We reviewed the first three pages of Google-style results for your name (${rows.length} links).`,
    `Our model tagged ${nPos} positive, ${nNeu} neutral, and ${nNeg} negative results.`,
    `Reputation score: ${score.reportedScore} out of 85. Overall presence: ${score.presenceLabel}.`,
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
    "Claim and complete a consistent professional profile on LinkedIn with a clear headline and photo.",
    "Publish 2-3 high-quality, accurate bios on properties you control (personal site, employer, industry associations).",
    "Monitor new mentions quarterly and document anything that is not about you so it can be addressed strategically.",
  ];
  if (presenceLabel === "Weak Online Presence") {
    lines.unshift(
      "Your scan shows fewer strong authority profiles than we like to see for a resilient first page of results - prioritize credible third-party profiles and media.",
    );
  }
  const weakSocial = !rows.some((r) => /linkedin\.com\/(in|pub)/i.test(r.link));
  if (weakSocial) {
    lines.push("Add or refresh a LinkedIn URL that ranks for your exact professional name.");
  }
  return lines.map((l) => `- ${l}`).join("\n");
}
