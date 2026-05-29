import { FURTHER_READING_BY_BLOG_PATH } from "../../data/blogs/furtherReadingByBlogPath.js";
import { normalizeCanonicalPath } from "../canonicalHrefFromPath.js";
import { blogCardsSectionHtml } from "./blogCardsSectionToHtml.js";
import { featuredBlogCardHtml } from "./featuredBlogCardToHtml.js";

/**
 * @param {string} href
 * @param {string} label
 */
export function furtherReadingCardHtml(href, label) {
  return featuredBlogCardHtml(href, label, { compact: true });
}

/**
 * @param {string} pathname
 */
export function furtherReadingSectionHtml(pathname) {
  const path = normalizeCanonicalPath(pathname);
  const links = FURTHER_READING_BY_BLOG_PATH[path];
  if (!links?.length) return "";

  return blogCardsSectionHtml({
    sectionClass: "further-reading",
    headingId: "further-reading-prerender-heading",
    heading: "Related Readings",
    links,
  });
}
