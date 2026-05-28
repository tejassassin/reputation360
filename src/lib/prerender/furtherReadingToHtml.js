import { FURTHER_READING_BY_BLOG_PATH } from "../../data/blogs/furtherReadingByBlogPath.js";
import { getBlogCardMeta } from "../blogCardMeta.js";
import { normalizeCanonicalPath } from "../canonicalHrefFromPath.js";
import { escapeHtml, escapeHtmlAttr } from "./html.js";
import { blogCardsSectionHtml } from "./blogCardsSectionToHtml.js";

const CARD_LINK_CLASS =
  "group flex h-full w-full flex-col rounded-[20px] border border-[#0f2e58]/10 bg-white p-6 text-left no-underline shadow-[0_12px_40px_-18px_rgba(15,46,88,0.22)]";

/**
 * @param {string} href
 * @param {string} label
 */
export function furtherReadingCardHtml(href, label) {
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

  return blogCardsSectionHtml({
    sectionClass: "further-reading",
    headingId: "further-reading-prerender-heading",
    heading: "Further Reading",
    links,
  });
}
