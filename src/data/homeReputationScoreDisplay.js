import {
  REPUTATION_PUBLIC_BANDS,
  REPUTATION_PUBLIC_SCORE_MAX,
} from "../../scan-shared/scoreReputation.js";
import { FREE_SCAN_RESULTS_TIMING_SHORT } from "../constants/freeRiskScan.js";

/** Homepage Free Reputation Score preview (public 0-100 scale). */
export const HOME_REPUTATION_SCORE_DISPLAY = 89;
export const HOME_REPUTATION_SCORE_MAX = REPUTATION_PUBLIC_SCORE_MAX;

/**
 * Public score bands (same as free scan).
 * @type {ReadonlyArray<{ id: string; label: string; range: string; dotColor: string }>}
 */
export const HOME_REPUTATION_PUBLIC_RANGES = REPUTATION_PUBLIC_BANDS.map((band) => ({
  id: band.label.toLowerCase().replace(/\s+/g, "-"),
  label: band.label,
  range: band.rangeLabel,
  dotColor:
    band.label === "Good"
      ? "#4CAF50"
      : band.label === "Mixed"
        ? "#D97706"
        : "#DC2626",
}));

export const HOME_REPUTATION_SCORE_PREVIEW = {
  score: HOME_REPUTATION_SCORE_DISPLAY,
  max: HOME_REPUTATION_SCORE_MAX,
  arcFraction: HOME_REPUTATION_SCORE_DISPLAY / HOME_REPUTATION_SCORE_MAX,
};

export const HOME_REPUTATION_SCORE_TRUST_POINTS = [
  "Free",
  FREE_SCAN_RESULTS_TIMING_SHORT,
  "Confidential",
  "Complimentary Consultation",
];
