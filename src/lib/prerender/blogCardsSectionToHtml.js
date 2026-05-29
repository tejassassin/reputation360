import { BLOG_INDEX_PATH } from "../../constants/blogPaths.js";
import { escapeHtml, escapeHtmlAttr } from "./html.js";
import { furtherReadingCardHtml } from "./furtherReadingToHtml.js";

/**
 * @typedef {{ href: string; label: string }} BlogCardLink
 */

/**
 * @param {{
 *   sectionClass?: string;
 *   headingId: string;
 *   heading: string;
 *   subheading?: string;
 *   links: BlogCardLink[];
 * }} options
 */
export function blogCardsSectionHtml({
  sectionClass = "",
  headingId,
  heading,
  subheading,
  links,
}) {
  if (!links.length) return "";

  const cards = links
    .map((link) =>
      furtherReadingCardHtml(link.href, link.label).replace(
        '<li class="list-none">',
        '<li class="list-none min-w-0">',
      ),
    )
    .join("\n");
  const subheadingHtml = subheading
    ? `<p class="mt-3 text-[15px] leading-[1.65] text-[#4a5d75] md:text-base">${escapeHtml(subheading)}</p>`
    : "";
  const sectionClassAttr = sectionClass ? ` ${sectionClass}` : "";

  return `<section class="from-our-blog mt-10 border-t border-[#dce3ec] pt-10 md:pt-12${sectionClassAttr}" aria-labelledby="${escapeHtmlAttr(headingId)}">
  <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div class="max-w-xl">
      <h2 id="${escapeHtmlAttr(headingId)}" class="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px]">${escapeHtml(heading)}</h2>
      ${subheadingHtml}
    </div>
    <p class="m-0 shrink-0 self-start md:self-auto"><a href="${escapeHtmlAttr(BLOG_INDEX_PATH)}" class="inline-flex items-center gap-2 rounded-full border border-[#0f2e58]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#0f2e58] no-underline shadow-sm">All articles <span aria-hidden="true">→</span></a></p>
  </div>
  <ul class="mt-8 grid w-full list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 sm:gap-6">
${cards}
  </ul>
</section>`;
}
