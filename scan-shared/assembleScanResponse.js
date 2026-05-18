import { classifySerpItems } from "./classifySerp.js";
import {
  computeReputationScore,
  buildScanSummary,
  buildHurtingSection,
  buildImprovingSection,
} from "./scoreReputation.js";

/**
 * @param {import('./classifySerp.js').SerpItem[]} serpItems
 * @param {string} searchQueryUsed
 * @param {string} dataSource
 */
export function assembleScanResponse(serpItems, searchQueryUsed, dataSource) {
  const classified = classifySerpItems(serpItems);
  const positive = classified.filter((r) => r.sentiment === "positive");
  const neutral = classified.filter((r) => r.sentiment === "neutral");
  const negative = classified.filter((r) => r.sentiment === "negative");

  const scoreBundle = computeReputationScore(classified);
  const summary = buildScanSummary(classified, scoreBundle);
  const hurting = buildHurtingSection(classified);
  const improving = buildImprovingSection(classified, scoreBundle.reportedScore);

  return {
    ok: true,
    dataSource,
    searchQueryUsed,
    positive,
    neutral,
    negative,
    rawScore: scoreBundle.rawScore,
    reportedScore: scoreBundle.reportedScore,
    presenceLabel: scoreBundle.presenceLabel,
    strongPositiveCount: scoreBundle.strongPositiveCount,
    summary,
    hurting,
    improving,
  };
}
