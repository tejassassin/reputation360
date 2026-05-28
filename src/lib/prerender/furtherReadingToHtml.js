import { BLOG_INDEX_PATH } from "../../constants/blogPaths.js";
import { PACK20_BY_SLUG } from "../../data/blogs/pack20/catalog.js";
import { diyReputationGuideListing } from "../../data/blogs/diyReputationGuide.js";
import { FURTHER_READING_BY_BLOG_PATH } from "../../data/blogs/furtherReadingByBlogPath.js";
import { removeNegativeSearchResultsListing } from "../../data/blogs/removeNegativeSearchResultsGuide.js";
import { removeNewsArticlesFromGoogleListing } from "../../data/blogs/removeNewsArticlesFromGoogleGuide.js";
import { suppressNegativeGuideListing } from "../../data/blogs/suppressNegativeGuideMeta.js";
import { normalizeCanonicalPath } from "../canonicalHrefFromPath.js";
import { escapeHtml, escapeHtmlAttr } from "./html.js";

/** @type {Record<string, { excerpt: string; readTime?: string; category?: string }>} */
const GUIDE_LISTING_BY_SLUG = {
  [suppressNegativeGuideListing.slug]: suppressNegativeGuideListing,
  [diyReputationGuideListing.slug]: diyReputationGuideListing,
  [removeNegativeSearchResultsListing.slug]: removeNegativeSearchResultsListing,
  [removeNewsArticlesFromGoogleListing.slug]: removeNewsArticlesFromGoogleListing,
};

/**
 * @param {string} href
 */
function getBlogCardMeta(href) {
  const match = href.match(/^\/blog\/([^/]+)$/);
  const slug = match ? decodeURIComponent(match[1]) : null;
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

const CARD_LINK_CLASS =
  "group flex h-full w-full flex-col rounded-[20px] border border-[#0f2e58]/10 bg-white p-6 text-left no-underline shadow-[0_12px_40px_-18px_rgba(15,46,88,0.22)]";

/**
 * @param {string} href
 * @param {string} label
 */
function furtherReadingCardHtml(href, label) {
  const meta = getBlogCardMeta(href);
  const category = escapeHtml(meta?.category ?? "Article");
  const excerpt = meta?.excerpt
    ? `<p class="mt-3 text-[15px] leading-[1.65] text-[#4a5d75]">${escapeHtml(meta.excerpt)}</p>`
    : "";
  const readTime = meta?.readTime
    ? `<p class="mt-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7a8ca3]">${escapeHtml(meta.readTime)} read</p>`
    : "";

  return `<li class="list-none">
  <a href="${escapeHtmlAttr(href)}" class="${CARD_LINK_CLASS}">
    <span class="inline-block rounded-full bg-[#0f2e58]/8 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#2e5b88]">${category}</span>
    <h3 class="mt-5 font-heading text-[19px] font-bold leading-snug text-[#0f2e58]">${escapeHtml(label)}</h3>
    ${excerpt}
    ${readTime}
    <span class="mt-5 block border-t border-[#e8edf3] pt-4 text-[14px] font-semibold text-[#0f2e58]">Read article <span class="text-[#2e5b88]">→</span></span>
  </a>
</li>`;
}

/**
 * @param {string} pathname
 */
export function furtherReadingSectionHtml(pathname) {
  const path = normalizeCanonicalPath(pathname);
  const links = FURTHER_READING_BY_BLOG_PATH[path];
  if (!links?.length) return "";

  const cards = links.map((link) => furtherReadingCardHtml(link.href, link.label)).join("\n");

  return `<section class="further-reading mt-10 border-t border-[#dce3ec] pt-10 md:pt-12" aria-labelledby="further-reading-prerender-heading">
  <div>
    <h2 id="further-reading-prerender-heading" class="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px]">Further Reading</h2>
    <p class="mt-4"><a href="${escapeHtmlAttr(BLOG_INDEX_PATH)}" class="text-[15px] font-semibold text-[#0f2e58] no-underline hover:text-[#163d6e]">All articles →</a></p>
  </div>
  <ul class="mt-8 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
${cards}
  </ul>
</section>`;
}
