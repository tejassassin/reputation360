/**
 * Reputation-aware SERP classification.
 * Shared by Vercel API, Vite dev middleware, and browser fallback.
 *
 * The classifier uses weighted signals from:
 * - platform/domain authority
 * - professional credibility
 * - reputational/legal risk
 * - contextual phrasing in title/snippet/url
 * - rank weighting (page 1 matters more than page 3)
 *
 * It aims to approximate how an average client, employer, investor, patient,
 * journalist, or business partner would perceive the result on Google.
 */

import { FREE_SCAN_LINK_LIMIT } from "./freeScanConstants.js";

/** @typedef {'positive' | 'neutral' | 'negative'} Sentiment */

/**
 * @typedef {object} SerpItem
 * @property {string} title
 * @property {string} link
 * @property {string} displayLink
 * @property {string} snippet
 */

/**
 * @typedef {object} ClassifiedResult
 * @property {number} rank
 * @property {string} title
 * @property {string} link
 * @property {string} displayLink
 * @property {string} snippet
 * @property {Sentiment} sentiment
 * @property {boolean} strongPositive
 * @property {string} reason
 * @property {number} classificationScore
 * @property {number} rankWeight
 */

const HIGH_RISK_HOST =
  /ripoffreport|complaintsboard|pissedconsumer|mugshots|thedirty|scam(adviser|alert)|consumercomplaints|glassdoor|indeed\.com\/(cmp|rc)|reddit\.com\/r\/|quora\.com/i;

const COURT_OR_REGULATOR_HOST =
  /(\.gov(\/|$)|sec\.gov|justice\.gov|fbi\.gov|ftc\.gov|consumerfinance\.gov|trellis\.law|casetext\.com|justia\.com|law360\.com|courtlistener\.com|pacermonitor\.com)/i;

const STRONG_POSITIVE_HOST =
  /linkedin\.com\/(in|pub)|crunchbase\.com\/(person|people)|bloomberg\.com\/profile|forbes\.com\/(sites\/|people\/)|speakerhub\.com|about\.me|github\.com\/|official|company/i;

const POSITIVE_HOST =
  /wikipedia\.org\/wiki\/|medium\.com\/@|substack\.com\/(p|@)|youtube\.com\/|behance\.net\/|dribbble\.com\/|podcast|\.edu(\/|$)/i;

const OFFICIAL_SITE_HINT =
  /\b(official site|official website|company website|leadership|our team|founder|ceo|advisor|speaker|author)\b/i;

const POSITIVE_TEXT =
  /\b(award|featured|expert|founder|ceo|recognized|top|leading|successful|certified|professional|official|keynote|advisor|entrepreneur|specialist|trusted|interview|podcast|speaker|author|featured in|case study|testimonials?)\b/i;

const STRONG_NEGATIVE_TEXT =
  /\b(fraud|scam|lawsuit|sued|arrest(ed)?|criminal|convicted|indicted|bankruptcy|violation|ripoff|guilty|allegations?|investigation|corruption|defamation|mugshot|warning|exposed)\b/i;

const MODERATE_NEGATIVE_TEXT =
  /\b(complaint|controversy|bad review|negative review|consumer complaint|public dispute|accused|criticism|harassment|terminated|refund denied|worst|avoid this)\b/i;

const CONTEXTUAL_SAFE_TEXT =
  /\b(defending|represents|attorney for|lawyer for|commentary on|analysis of|coverage of|reporting on)\b/i;

const NEUTRAL_TEXT =
  /\b(profile|directory|listing|mention|archive|reference|public record|database|people search|background|lookup)\b/i;

/**
 * @param {number} rank
 */
function pageWeight(rank) {
  if (rank <= 10) return 1;
  if (rank <= 20) return 0.7;
  return 0.5;
}

/**
 * @param {SerpItem} item
 */
function safeHost(item) {
  try {
    return new URL(item.link).hostname.replace(/^www\./, "");
  } catch {
    return item.displayLink || "";
  }
}

/**
 * @param {string} host
 * @param {string} blob
 * @returns {{ baseScore: number; strongPositive: boolean; reasons: string[] }}
 */
function classifyBaseSignals(host, blob) {
  let baseScore = 0;
  let strongPositive = false;
  const reasons = [];

  if (/linkedin\.com\/(in|pub)/i.test(host)) {
    baseScore += 5;
    strongPositive = true;
    reasons.push("LinkedIn profile is a strong professional credibility signal.");
  } else if (STRONG_POSITIVE_HOST.test(host)) {
    baseScore += 4;
    strongPositive = true;
    reasons.push("High-authority professional or business profile boosts credibility.");
  } else if (POSITIVE_HOST.test(host)) {
    baseScore += 2;
    reasons.push("Recognized authority or professional publishing platform.");
  }

  if (COURT_OR_REGULATOR_HOST.test(host)) {
    baseScore -= 4;
    reasons.push("Court, regulator, or public legal database creates immediate risk perception.");
  }

  if (HIGH_RISK_HOST.test(host)) {
    baseScore -= 4;
    reasons.push("High-risk complaint, review, forum, or gossip platform.");
  }

  if (OFFICIAL_SITE_HINT.test(blob)) {
    baseScore += 3;
    reasons.push("Official or leadership context tends to strengthen trust.");
  }

  return { baseScore, strongPositive, reasons };
}

/**
 * @param {SerpItem} item
 * @param {number} rank
 * @returns {ClassifiedResult}
 */
export function classifySerpItem(item, rank) {
  const host = safeHost(item);
  const text = `${item.title} ${item.snippet} ${item.link}`;
  const blob = text.toLowerCase();
  const reasons = [];
  const rankWeight = pageWeight(rank);
  const { baseScore, strongPositive: baseStrongPositive, reasons: baseReasons } =
    classifyBaseSignals(host, blob);
  reasons.push(...baseReasons);

  let score = baseScore;
  let strongPositive = baseStrongPositive;

  if (STRONG_NEGATIVE_TEXT.test(blob)) {
    if (CONTEXTUAL_SAFE_TEXT.test(blob)) {
      score -= 1;
      reasons.push("Negative terms appear, but the snippet suggests contextual or informational coverage.");
    } else {
      score -= 5;
      reasons.push("Strong legal, criminal, scam, or reputational risk language is visible on Google.");
    }
  } else if (MODERATE_NEGATIVE_TEXT.test(blob)) {
    score -= 3;
    reasons.push("Complaint, criticism, or controversy language may create distrust.");
  }

  if (POSITIVE_TEXT.test(blob)) {
    score += 3;
    reasons.push("Achievement, authority, or trust-building language improves perception.");
  }

  if (NEUTRAL_TEXT.test(blob) && score > -2 && score < 3) {
    reasons.push("Low-impact directory or informational reference with limited emotional weight.");
  }

  if (/wikipedia\.org\/wiki\//i.test(host) && score > -2 && score < 3) {
    score += 1;
    reasons.push("Wikipedia is broadly credible but often informational rather than strongly reputation-building.");
  }

  const weightedScore = score * rankWeight;
  let sentiment = /** @type {Sentiment} */ ("neutral");
  if (weightedScore >= 3) sentiment = "positive";
  else if (weightedScore <= -3) sentiment = "negative";

  if (sentiment !== "negative") {
    const looksIrrelevant =
      /\b(people search|lookup|background|directory|listing|reference|archive)\b/i.test(text) &&
      weightedScore < 3;
    if (looksIrrelevant) {
      sentiment = "neutral";
      reasons.push("This looks low-impact or identity-unclear, so it should not materially affect reputation.");
    } else if (sentiment === "neutral" && weightedScore > -3) {
      sentiment = "positive";
      reasons.push("Relevant result without visible negative context generally improves Google perception.");
    }
  }

  if (sentiment === "positive" && /linkedin\.com\/(in|pub)/i.test(host)) {
    strongPositive = true;
  }

  return {
    rank,
    title: item.title,
    link: item.link,
    displayLink: item.displayLink || host,
    snippet: item.snippet,
    sentiment,
    strongPositive,
    reason: reasons.length
      ? reasons.join(" ")
      : "Low-impact informational result with limited positive or negative perception.",
    classificationScore: Number(weightedScore.toFixed(2)),
    rankWeight,
  };
}

/**
 * @param {SerpItem[]} items
 * @returns {ClassifiedResult[]}
 */
export function classifySerpItems(items) {
  return items.slice(0, FREE_SCAN_LINK_LIMIT).map((it, i) => classifySerpItem(it, i + 1));
}
