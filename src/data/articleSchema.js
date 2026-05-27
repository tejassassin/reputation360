import { METADATA_BASE } from "../constants/siteUrl.js";

export const JSONLD_ARTICLE_ID = "r360-jsonld-article";

const PUBLISHER_LOGO = `${METADATA_BASE}/android-chrome-512x512.png`;

const MONTH_TO_NUMBER = {
  january: "01",
  february: "02",
  march: "03",
  april: "04",
  may: "05",
  june: "06",
  july: "07",
  august: "08",
  september: "09",
  october: "10",
  november: "11",
  december: "12",
};

/**
 * @param {string | undefined} dateStr
 * @returns {string | undefined} ISO date (YYYY-MM-DD)
 */
export function parseBlogDate(dateStr) {
  if (!dateStr) {
    return undefined;
  }
  const trimmed = dateStr.trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(trimmed)) {
    return trimmed.slice(0, 10);
  }
  const match = trimmed.match(/^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})$/);
  if (!match) {
    return undefined;
  }
  const month = MONTH_TO_NUMBER[match[1].toLowerCase()];
  if (!month) {
    return undefined;
  }
  const day = match[2].padStart(2, "0");
  return `${match[3]}-${month}-${day}`;
}

/**
 * @typedef {object} BlogArticleSchemaInput
 * @property {string} path
 * @property {string} headline
 * @property {string} description
 * @property {string} image
 * @property {string} datePublished
 * @property {string} [dateModified]
 * @property {string} [author]
 */

/**
 * @param {BlogArticleSchemaInput} input
 * @returns {Record<string, unknown> | null}
 */
export function buildBlogPostingSchema(input) {
  const headline = input.headline?.trim();
  const description = input.description?.trim();
  const image = input.image?.trim();
  const datePublished = parseBlogDate(input.datePublished);
  const path = input.path?.trim();

  if (!headline || !description || !image || !datePublished || !path) {
    return null;
  }

  const url = `${METADATA_BASE}${path}`;
  const authorName = input.author?.trim() || "Reputation360";
  const dateModified = parseBlogDate(input.dateModified) ?? datePublished;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    headline,
    description,
    image: [image],
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: authorName,
      url: METADATA_BASE,
    },
    publisher: {
      "@type": "Organization",
      name: "Reputation360",
      url: METADATA_BASE,
      logo: {
        "@type": "ImageObject",
        url: PUBLISHER_LOGO,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

/** @param {BlogArticleSchemaInput} input */
export function articleAdditionalJsonLdFromInput(input) {
  const data = buildBlogPostingSchema(input);
  if (!data) {
    return [];
  }
  return [{ id: JSONLD_ARTICLE_ID, data }];
}

/** @param {import("./blogs/pack20/types.js").Pack20Article} article */
export function pack20ArticleToSchemaInput(article) {
  return {
    path: article.path,
    headline: article.listing.title,
    description: article.metaDescription,
    image: article.listing.image,
    datePublished: article.listing.date,
    author: article.listing.author,
  };
}

/**
 * @param {string} path
 * @param {{ title: string, date: string, author?: string, image: string }} listing
 * @param {string} metaDescription
 */
export function guideListingToSchemaInput(path, listing, metaDescription) {
  return {
    path,
    headline: listing.title,
    description: metaDescription,
    image: listing.image,
    datePublished: listing.date,
    author: listing.author,
  };
}

/** @param {{ id: string, data: Record<string, unknown> }[][]} groups */
export function mergeAdditionalJsonLd(...groups) {
  return groups.flat();
}
