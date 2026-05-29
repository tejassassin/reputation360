import { PACK20_BY_SLUG } from "../data/blogs/pack20/catalog.js";
import { diyReputationGuideListing } from "../data/blogs/diyReputationGuide.js";
import { removeNegativeSearchResultsListing } from "../data/blogs/removeNegativeSearchResultsGuide.js";
import { removeNewsArticlesFromGoogleListing } from "../data/blogs/removeNewsArticlesFromGoogleGuide.js";
import { reputationRepairTimelineListing } from "../data/blogs/reputationRepairTimelineGuide.js";
import { suppressNegativeGuideListing } from "../data/blogs/suppressNegativeGuideMeta.js";

/** @typedef {{ excerpt: string; readTime?: string; category?: string; image?: string; imageAlt?: string }} BlogCardMeta */

/** @type {Record<string, BlogCardMeta & { slug: string }>} */
const GUIDE_LISTING_BY_SLUG = {
  [suppressNegativeGuideListing.slug]: suppressNegativeGuideListing,
  [diyReputationGuideListing.slug]: diyReputationGuideListing,
  [removeNegativeSearchResultsListing.slug]: removeNegativeSearchResultsListing,
  [removeNewsArticlesFromGoogleListing.slug]: removeNewsArticlesFromGoogleListing,
  [reputationRepairTimelineListing.slug]: reputationRepairTimelineListing,
};

/** @param {string} href */
function slugFromBlogHref(href) {
  const match = href.match(/^\/blog\/([^/]+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * Listing metadata for blog link cards (Related Readings, homepage, prerender).
 * @param {string} href
 * @returns {BlogCardMeta | null}
 */
export function getBlogCardMeta(href) {
  const slug = slugFromBlogHref(href);
  if (!slug) return null;

  const packArticle = PACK20_BY_SLUG.get(slug);
  if (packArticle?.listing) {
    return {
      excerpt: packArticle.listing.excerpt,
      readTime: packArticle.listing.readTime,
      category: packArticle.listing.category,
      image: packArticle.listing.image,
      imageAlt: packArticle.listing.imageAlt,
    };
  }

  const guide = GUIDE_LISTING_BY_SLUG[slug];
  if (guide) {
    return {
      excerpt: guide.excerpt,
      readTime: guide.readTime,
      category: guide.category,
      image: guide.image,
      imageAlt: guide.imageAlt,
    };
  }

  return null;
}
