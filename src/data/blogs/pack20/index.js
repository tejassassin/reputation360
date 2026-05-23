import { article as article01 } from "./blog01.js";

export { SLUG as SLUG01 } from "./blog01.js";

export { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

/** @type {import('./types.js').Pack20Article[]} */
/** Only blog 01 is published from the pack for now; add more articles here when ready. */
export const PACK20_ARTICLES = [article01];

/** @type {Map<string, import('./types.js').Pack20Article>} */
export const PACK20_BY_SLUG = new Map(PACK20_ARTICLES.map((a) => [a.slug, a]));

export const PACK20_SLUGS = new Set(PACK20_ARTICLES.map((a) => a.slug));

/**
 * @param {string} slug
 * @returns {import('./types.js').Pack20Article | undefined}
 */
export function getPack20Article(slug) {
  return PACK20_BY_SLUG.get(slug);
}

/**
 * @param {import('./types.js').Pack20Article} article
 * @returns {import('./types.js').Pack20Article[]}
 */
export function getPack20RelatedArticles(article) {
  if (article.relatedReading?.length) {
    return article.relatedReading;
  }
  return (article.relatedSlugs ?? [])
    .map((s) => PACK20_BY_SLUG.get(s))
    .filter(Boolean)
    .map((related) => ({
      title: related.listing.title,
      href: related.path,
      category: related.listing.category,
      readTime: related.listing.readTime.includes("read")
        ? related.listing.readTime
        : `${related.listing.readTime} read`,
      image: related.listing.image,
      imageAlt: related.listing.imageAlt,
    }));
}

/**
 * @returns {import('./types.js').Pack20Listing[]}
 */
export function getPack20Listings() {
  return PACK20_ARTICLES.map((a) => a.listing);
}
