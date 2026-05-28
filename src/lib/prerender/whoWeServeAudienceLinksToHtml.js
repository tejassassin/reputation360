import { BLOG_INDEX_PATH } from "../../constants/blogPaths.js";
import { AUDIENCE_PATH } from "../../constants/whoWeServePaths.js";
import { PACK20_BY_SLUG } from "../../data/blogs/pack20/catalog.js";
import { diyReputationGuideListing } from "../../data/blogs/diyReputationGuide.js";
import { removeNegativeSearchResultsListing } from "../../data/blogs/removeNegativeSearchResultsGuide.js";
import { removeNewsArticlesFromGoogleListing } from "../../data/blogs/removeNewsArticlesFromGoogleGuide.js";
import { suppressNegativeGuideListing } from "../../data/blogs/suppressNegativeGuideMeta.js";
import { getCaseStudyBySlug } from "../../data/caseStudies/index.js";
import { getRouteSeoMeta } from "../../data/routeSeoByPath.js";
import { WHO_WE_SERVE_FURTHER_READING } from "../../data/whoWeServeFurtherReading.js";
import { WHO_WE_SERVE_SEE_IT_IN_ACTION } from "../../data/whoWeServeSeeItInAction.js";
import { caseStudyListTeaser } from "../../utils/caseStudyTeaser.js";
import { escapeHtml, escapeHtmlAttr } from "./html.js";

/** @type {readonly string[]} */
export const WHO_WE_SERVE_AUDIENCE_PATHS = Object.freeze(Object.values(AUDIENCE_PATH));

/** @param {string} pathname */
export function isWhoWeServeAudiencePath(pathname) {
  return WHO_WE_SERVE_AUDIENCE_PATHS.includes(pathname);
}

/** @param {string} title */
function pageTitleToH1(title) {
  return title.replace(/\s*\|\s*Reputation360\s*$/i, "").trim();
}

/** @param {string} href */
function slugFromCaseStudyHref(href) {
  const match = href.match(/^\/case-studies\/([^/]+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

/** @param {string} href */
function slugFromBlogHref(href) {
  const match = href.match(/^\/blog\/([^/]+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

/** @type {Record<string, { excerpt: string; readTime?: string; category?: string }>} */
const GUIDE_LISTING_BY_SLUG = {
  [suppressNegativeGuideListing.slug]: suppressNegativeGuideListing,
  [diyReputationGuideListing.slug]: diyReputationGuideListing,
  [removeNegativeSearchResultsListing.slug]: removeNegativeSearchResultsListing,
  [removeNewsArticlesFromGoogleListing.slug]: removeNewsArticlesFromGoogleListing,
};

/**
 * @param {string} href
 * @returns {{ excerpt: string; readTime?: string; category?: string } | null}
 */
function getBlogCardMeta(href) {
  const slug = slugFromBlogHref(href);
  if (!slug) return null;

  const packArticle = PACK20_BY_SLUG.get(slug);
  if (packArticle?.listing) {
    return {
      excerpt: packArticle.listing.excerpt,
      readTime: packArticle.listing.readTime,
      category: packArticle.listing.category,
    };
  }

  const guide = GUIDE_LISTING_BY_SLUG[slug];
  if (guide) {
    return {
      excerpt: guide.excerpt,
      readTime: guide.readTime,
      category: guide.category,
    };
  }

  return null;
}

/**
 * @param {string} href
 */
function getCaseStudyTeaser(href) {
  const slug = slugFromCaseStudyHref(href);
  if (!slug) return null;
  const study = getCaseStudyBySlug(slug);
  if (!study) return null;
  return (
    study.summary?.trim() ||
    caseStudyListTeaser(study) ||
    "See how we rebuilt search results and protected professional credibility."
  );
}

/**
 * @param {string} audiencePath
 */
function seeItInActionSectionHtml(audiencePath) {
  const config = WHO_WE_SERVE_SEE_IT_IN_ACTION[audiencePath];
  if (!config) return "";

  const cards = config.links
    .map((link) => {
      const teaser = getCaseStudyTeaser(link.href);
      return `<li>
  <article>
    <p><span>Case study</span></p>
    <h3><a href="${escapeHtmlAttr(link.href)}">${escapeHtml(link.label)}</a></h3>
    <p>${escapeHtml(teaser)}</p>
    <p><a href="${escapeHtmlAttr(link.href)}">Read full story</a></p>
  </article>
</li>`;
    })
    .join("\n");

  return `<section class="case-study-links" aria-labelledby="see-it-in-action-heading">
  <h2 id="see-it-in-action-heading">See It In Action</h2>
  <p>${escapeHtml(config.intro)}</p>
  <p><a href="/case-studies">All case studies</a></p>
  <ul>
${cards}
  </ul>
</section>`;
}

/**
 * @param {string} audiencePath
 */
function furtherReadingSectionHtml(audiencePath) {
  const config = WHO_WE_SERVE_FURTHER_READING[audiencePath];
  if (!config) return "";

  const cards = config.links
    .map((link) => {
      const meta = getBlogCardMeta(link.href);
      const category = meta?.category ?? "Article";
      const excerpt = meta?.excerpt
        ? `<p>${escapeHtml(meta.excerpt)}</p>`
        : "";
      const readTime = meta?.readTime
        ? `<p>${escapeHtml(meta.readTime)} read</p>`
        : "";
      return `<li>
  <article>
    <p><span>${escapeHtml(category)}</span></p>
    <h3><a href="${escapeHtmlAttr(link.href)}">${escapeHtml(link.label)}</a></h3>
    ${excerpt}
    ${readTime}
    <p><a href="${escapeHtmlAttr(link.href)}">Read article</a></p>
  </article>
</li>`;
    })
    .join("\n");

  return `<section class="further-reading" aria-labelledby="further-reading-heading">
  <h2 id="further-reading-heading">Further Reading</h2>
  <p>${escapeHtml(config.intro)}</p>
  <p><a href="${escapeHtmlAttr(BLOG_INDEX_PATH)}">All articles</a></p>
  <ul>
${cards}
  </ul>
</section>`;
}

/**
 * Static HTML for audience pages: crawlable case study and blog links.
 * @param {string} pathname
 * @returns {string | null}
 */
export function whoWeServeAudiencePageToHtml(pathname) {
  if (!isWhoWeServeAudiencePath(pathname)) return null;

  const seo = getRouteSeoMeta(pathname);
  const title = seo?.title ? pageTitleToH1(seo.title) : "Who We Serve";
  const description =
    seo?.description ??
    "Reputation360 online reputation management tailored to your professional needs.";

  const seeIt = seeItInActionSectionHtml(pathname);
  const further = furtherReadingSectionHtml(pathname);

  return `<header>
  <h1>${escapeHtml(title)}</h1>
  <p>${escapeHtml(description)}</p>
</header>
${seeIt}
${further}`;
}
