import { blogPostPath } from "../constants/blogPaths.js";
import { METADATA_BASE } from "../constants/siteUrl.js";
import { PACK20_ARTICLES } from "../data/blogs/pack20/catalog.js";
import { PACK20_DATE, PACK20_LAST_UPDATED } from "../data/blogs/pack20/shared.js";
import { diyReputationGuideListing } from "../data/blogs/diyReputationGuide.js";
import { removeNegativeSearchResultsListing } from "../data/blogs/removeNegativeSearchResultsGuide.js";
import { removeNewsArticlesFromGoogleListing } from "../data/blogs/removeNewsArticlesFromGoogleGuide.js";
import { reputationRepairTimelineListing } from "../data/blogs/reputationRepairTimelineGuide.js";
import { suppressNegativeGuideListing } from "../data/blogs/suppressNegativeGuideMeta.js";
import { displayDateToIso, isoDateToRfc822 } from "./displayDateToIso.js";

/**
 * @typedef {{ title: string; link: string; guid: string; description: string; pubDate: string; sortIso: string }} BlogFeedItem
 */

/**
 * @param {string} path
 * @param {{ title: string; excerpt: string; date: string }} listing
 * @param {string | undefined} [updatedDate]
 * @returns {BlogFeedItem | null}
 */
function feedItemFromListing(path, listing, updatedDate) {
  const sortIso = displayDateToIso(updatedDate ?? listing.date);
  const pubDate = isoDateToRfc822(sortIso);
  if (!sortIso || !pubDate) return null;
  const link = `${METADATA_BASE}${path}`;
  return {
    title: listing.title,
    link,
    guid: link,
    description: listing.excerpt,
    pubDate,
    sortIso,
  };
}

/** @returns {BlogFeedItem[]} */
export function buildBlogFeedItems() {
  /** @type {BlogFeedItem[]} */
  const items = [];

  for (const article of PACK20_ARTICLES) {
    const item = feedItemFromListing(
      article.path,
      article.listing,
      PACK20_LAST_UPDATED[article.slug] ?? PACK20_DATE,
    );
    if (item) items.push(item);
  }

  const legacyGuides = [
    { listing: suppressNegativeGuideListing, path: blogPostPath(suppressNegativeGuideListing.slug) },
    { listing: diyReputationGuideListing, path: blogPostPath(diyReputationGuideListing.slug) },
    {
      listing: removeNegativeSearchResultsListing,
      path: blogPostPath(removeNegativeSearchResultsListing.slug),
    },
    {
      listing: reputationRepairTimelineListing,
      path: blogPostPath(reputationRepairTimelineListing.slug),
    },
    {
      listing: removeNewsArticlesFromGoogleListing,
      path: blogPostPath(removeNewsArticlesFromGoogleListing.slug),
    },
  ];

  for (const guide of legacyGuides) {
    const item = feedItemFromListing(guide.path, guide.listing);
    if (item) items.push(item);
  }

  return items.sort((a, b) => b.sortIso.localeCompare(a.sortIso));
}
