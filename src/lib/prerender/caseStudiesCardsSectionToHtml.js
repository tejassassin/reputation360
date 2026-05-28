import { escapeHtml, escapeHtmlAttr } from "./html.js";
import { caseStudyCardHtml } from "./moreCaseStudiesToHtml.js";

/**
 * @typedef {{ href: string; label: string }} CaseStudyCardLink
 */

/**
 * @param {{
 *   sectionClass?: string;
 *   headingId: string;
 *   heading: string;
 *   subheading?: string;
 *   links: CaseStudyCardLink[];
 *   allHref: string;
 *   allLabel?: string;
 * }} options
 */
export function caseStudiesCardsSectionHtml({
  sectionClass = "",
  headingId,
  heading,
  subheading,
  links,
  allHref,
  allLabel = "All case studies",
}) {
  if (!links.length) return "";

  const cards = links.map((link) => caseStudyCardHtml(link.href, link.label)).join("\n");
  const subheadingHtml = subheading
    ? `<p class="mt-3 text-[15px] leading-[1.65] text-[#4a5d75] md:text-base">${escapeHtml(subheading)}</p>`
    : "";
  const sectionClassAttr = sectionClass ? ` ${sectionClass}` : "";

  return `<section class="case-study-links mt-10 border-t border-[#dce3ec] pt-10 md:pt-12${sectionClassAttr}" aria-labelledby="${escapeHtmlAttr(headingId)}">
  <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div class="max-w-xl">
      <h2 id="${escapeHtmlAttr(headingId)}" class="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px]">${escapeHtml(heading)}</h2>
      ${subheadingHtml}
    </div>
    <p class="m-0 shrink-0 self-start md:self-auto"><a href="${escapeHtmlAttr(allHref)}" class="inline-flex items-center gap-2 rounded-full border border-[#0f2e58]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#0f2e58] no-underline shadow-sm">All case studies <span aria-hidden="true">→</span></a></p>
  </div>
  <ul class="mt-8 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
${cards}
  </ul>
</section>`;
}
