import { getBlogCardMeta } from "../blogCardMeta.js";
import { escapeHtml, escapeHtmlAttr } from "./html.js";

const CARD_CLASS =
  "group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#0f2e58]/10 bg-white text-left no-underline shadow-[0_16px_48px_-24px_rgba(15,46,88,0.28)]";

/**
 * Homepage-style blog card with image header (SSR).
 * @param {string} href
 * @param {string} label
 * @param {{ compact?: boolean }} [options]
 */
export function featuredBlogCardHtml(href, label, options = {}) {
  const { compact = false } = options;
  const meta = getBlogCardMeta(href);
  const excerptClamp = compact ? "line-clamp-2" : "line-clamp-3";
  const excerpt = meta?.excerpt
    ? `<p class="mt-3 ${excerptClamp} flex-1 text-[15px] leading-[1.65] text-[#4a5d75]">${escapeHtml(meta.excerpt)}</p>`
    : "";
  const readTime = meta?.readTime
    ? `<span class="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7a8ca3]">${escapeHtml(meta.readTime)} read</span>`
    : "";
  const imageAspect = compact ? "aspect-[16/9]" : "aspect-[5/3] sm:aspect-[16/9]";
  const imageBlock =
    meta?.image ?
      `<div class="relative ${imageAspect} w-full overflow-hidden bg-[#e8edf3]">
    <img src="${escapeHtmlAttr(meta.image)}" alt="${escapeHtmlAttr(meta.imageAlt ?? label)}" width="640" height="400" loading="lazy" decoding="async" class="h-full w-full object-cover" />
  </div>`
    : `<div class="relative ${imageAspect} w-full bg-gradient-to-br from-[#0f2e58] via-[#1a4a7a] to-[#2e5b88]" aria-hidden="true"></div>`;

  const bodyPad = compact ? "p-5 md:p-6" : "p-6 md:p-7";
  const titleClass = compact ?
    "font-heading text-[17px] font-bold leading-snug text-[#0f2e58] md:text-[19px]"
  : "font-heading text-[19px] font-bold leading-snug text-[#0f2e58] md:text-[21px]";

  return `<li class="list-none">
  <a href="${escapeHtmlAttr(href)}" class="${CARD_CLASS}">
    ${imageBlock}
    <div class="flex flex-1 flex-col ${bodyPad}">
      <h3 class="${titleClass}">${escapeHtml(label)}</h3>
      ${excerpt}
      <div class="mt-5 flex items-center justify-between gap-3 border-t border-[#e8edf3] pt-4">
        ${readTime}
        <span class="text-[14px] font-semibold text-[#2e5b88]">Read article <span aria-hidden="true">→</span></span>
      </div>
    </div>
  </a>
</li>`;
}
