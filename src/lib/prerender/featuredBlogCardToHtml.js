import { getBlogCardMeta } from "../blogCardMeta.js";
import { escapeHtml, escapeHtmlAttr } from "./html.js";

const CARD_CLASS =
  "group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#0f2e58]/10 bg-white text-left no-underline shadow-[0_16px_48px_-24px_rgba(15,46,88,0.28)]";

/**
 * Homepage-style blog card with image header (SSR).
 * @param {string} href
 * @param {string} label
 */
export function featuredBlogCardHtml(href, label) {
  const meta = getBlogCardMeta(href);
  const category = escapeHtml(meta?.category ?? "Article");
  const excerpt = meta?.excerpt
    ? `<p class="mt-3 line-clamp-3 flex-1 text-[15px] leading-[1.65] text-[#4a5d75]">${escapeHtml(meta.excerpt)}</p>`
    : "";
  const readTime = meta?.readTime
    ? `<span class="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7a8ca3]">${escapeHtml(meta.readTime)} read</span>`
    : "";
  const imageBlock =
    meta?.image ?
      `<div class="relative aspect-[16/10] w-full overflow-hidden bg-[#e8edf3]">
    <img src="${escapeHtmlAttr(meta.image)}" alt="${escapeHtmlAttr(meta.imageAlt ?? label)}" width="640" height="400" loading="lazy" decoding="async" class="h-full w-full object-cover" />
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f2e58]/75 via-[#0f2e58]/25 to-[#0f2e58]/5]" aria-hidden="true"></div>
    <span class="absolute left-4 top-4 inline-block rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#2e5b88] shadow-sm">${category}</span>
  </div>`
    : `<div class="relative bg-gradient-to-br from-[#0f2e58] to-[#2e5b88] px-6 py-8">
    <span class="inline-block rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">${category}</span>
  </div>`;

  const categoryInBody =
    meta?.image ?
      ""
    : `<span class="inline-block rounded-full bg-[#0f2e58]/8 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#2e5b88]">${category}</span>`;

  return `<li class="list-none">
  <a href="${escapeHtmlAttr(href)}" class="${CARD_CLASS}">
    ${imageBlock}
    <div class="flex flex-1 flex-col p-6 md:p-7">
      ${categoryInBody}
      <h3 class="${meta?.image ? "mt-0" : "mt-4"} font-heading text-[19px] font-bold leading-snug text-[#0f2e58] md:text-[21px]">${escapeHtml(label)}</h3>
      ${excerpt}
      <div class="mt-5 flex items-center justify-between gap-3 border-t border-[#e8edf3] pt-4">
        ${readTime}
        <span class="text-[14px] font-semibold text-[#2e5b88]">Read article <span aria-hidden="true">→</span></span>
      </div>
    </div>
  </a>
</li>`;
}
