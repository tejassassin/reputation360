/**
 * Rule-based SERP classification (domains + keyword signals).
 * Shared by Vercel API, Vite dev middleware, and browser fallback.
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
 */

const NEGATIVE_HOST =
  /glassdoor|indeed\.com\/(cmp|rc)|ripoffreport|complaintsboard|pissedconsumer|cheaterland|mugshots|thedirty|gossip/i;

const NEGATIVE_TEXT =
  /\b(lawsuit|sued|scandal|arrest(ed)?|convicted|indicted|fraud(ster)?|scam|ripoff|harassment|terminated\s+for\s+cause|complaints?\s+about|defamation|mugshot)\b/i;

const STRONG_POSITIVE_HOST =
  /linkedin\.com\/(in|pub)|crunchbase\.com\/(person|people)|about\.me\b|forbes\.com\/(sites\/|people\/)|wsj\.com\/articles\//i;

const POSITIVE_HOST =
  /\.(edu|gov)(\/|$)|wikipedia\.org\/wiki\/|github\.com\/|behance\.net\/|dribbble\.com\/|medium\.com\/@|substack\.com\/(p|@)/i;

const POSITIVE_TEXT =
  /\b(award|honored|keynote|fellow|appointed|promoted|speaker|profile|biography|published\s+in)\b/i;

const SOFT_NEGATIVE_TEXT =
  /\b(complaint|1\s*star|one\s*star|worst|avoid\s+this|refund\s+denied|scam\s+alert)\b/i;

/**
 * @param {SerpItem} item
 * @param {number} rank
 * @returns {ClassifiedResult}
 */
export function classifySerpItem(item, rank) {
  const blob = `${item.title} ${item.snippet} ${item.link}`.toLowerCase();
  const host = item.link || "";
  let sentiment = /** @type {Sentiment} */ ("neutral");
  let strongPositive = false;
  const reasons = [];

  if (NEGATIVE_HOST.test(host) || NEGATIVE_TEXT.test(blob)) {
    sentiment = "negative";
    reasons.push("High-risk domain or strongly negative language in the snippet.");
  } else if (NEGATIVE_HOST.test(blob)) {
    sentiment = "negative";
    reasons.push("Negative directory or review pattern detected.");
  }

  if (sentiment !== "negative" && SOFT_NEGATIVE_TEXT.test(blob)) {
    sentiment = "negative";
    reasons.push("Complaint or reputational risk language in the snippet.");
  }

  if (sentiment === "negative") {
    return {
      rank,
      title: item.title,
      link: item.link,
      displayLink: item.displayLink || safeHost(item.link),
      snippet: item.snippet,
      sentiment,
      strongPositive: false,
      reason: reasons.join(" "),
    };
  }

  if (STRONG_POSITIVE_HOST.test(host) || STRONG_POSITIVE_HOST.test(blob)) {
    sentiment = "positive";
    strongPositive = true;
    reasons.push("Recognized professional or authority profile surface.");
  } else if (POSITIVE_HOST.test(host) || POSITIVE_TEXT.test(blob)) {
    sentiment = "positive";
    reasons.push("Educational, government, or broadly credible professional signal.");
  }

  return {
    rank,
    title: item.title,
    link: item.link,
    displayLink: item.displayLink || safeHost(item.link),
    snippet: item.snippet,
    sentiment,
    strongPositive,
    reason: reasons.length
      ? reasons.join(" ")
      : "Directory, social, or mixed context; limited reputational signal alone.",
  };
}

/**
 * @param {string} link
 */
function safeHost(link) {
  try {
    return new URL(link).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/**
 * @param {SerpItem[]} items
 * @returns {ClassifiedResult[]}
 */
export function classifySerpItems(items) {
  return items.slice(0, FREE_SCAN_LINK_LIMIT).map((it, i) => classifySerpItem(it, i + 1));
}
