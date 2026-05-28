import { MORE_CASE_STUDIES_BY_PATH } from "../../data/caseStudies/moreCaseStudiesByPath.js";
import { getCaseStudyBySlug } from "../../data/caseStudies/index.js";
import { normalizeCanonicalPath } from "../canonicalHrefFromPath.js";
import { caseStudyListTeaser } from "../../utils/caseStudyTeaser.js";
import { escapeHtml, escapeHtmlAttr } from "./html.js";

/** Matches See It In Action story card layout (Who We Serve pages). */
const CARD_LINK_CLASS =
  "group flex h-full w-full flex-col rounded-[20px] border border-[#0f2e58]/10 bg-white p-6 text-left no-underline shadow-[0_12px_40px_-18px_rgba(15,46,88,0.22)]";

/**
 * @param {string} href
 * @param {string} label
 */
function caseStudyCardHtml(href, label) {
  const slug = href.replace(/^\/case-studies\//, "");
  const study = getCaseStudyBySlug(slug);
  const teaser =
    study?.summary?.trim() ||
    (study ? caseStudyListTeaser(study) : null) ||
    "See how we rebuilt search results and protected professional credibility.";

  return `<li class="list-none">
  <a href="${escapeHtmlAttr(href)}" class="${CARD_LINK_CLASS}">
    <span class="inline-block rounded-full bg-[#79df86]/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a5c38]">Case study</span>
    <h3 class="mt-5 font-heading text-[19px] font-bold leading-snug text-[#0f2e58]">${escapeHtml(label)}</h3>
    <p class="mt-3 text-[15px] leading-[1.65] text-[#4a5d75]">${escapeHtml(teaser)}</p>
    <span class="mt-5 block border-t border-[#e8edf3] pt-4 text-[14px] font-semibold text-[#0f2e58]">Read full story <span class="text-[#4eab66]">→</span></span>
  </a>
</li>`;
}

/**
 * @param {string} pathname
 */
export function moreCaseStudiesSectionHtml(pathname) {
  const path = normalizeCanonicalPath(pathname);
  const links = MORE_CASE_STUDIES_BY_PATH[path];
  if (!links?.length) return "";

  const cards = links.map((link) => caseStudyCardHtml(link.href, link.label)).join("\n");

  return `<section class="more-case-studies mt-10 border-t border-[#dce3ec] pt-10 md:pt-12" aria-labelledby="more-case-studies-heading">
  <div>
    <h2 id="more-case-studies-heading" class="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px]">More Case Studies</h2>
    <p class="mt-3 max-w-xl text-base leading-[1.65] text-[#4f5f75] md:text-[17px]">See how we&apos;ve helped others in similar situations</p>
    <p class="mt-4"><a href="/case-studies" class="text-[15px] font-semibold text-[#0f2e58] no-underline hover:text-[#163d6e]">All case studies →</a></p>
  </div>
  <ul class="mt-8 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2">
${cards}
  </ul>
</section>`;
}
