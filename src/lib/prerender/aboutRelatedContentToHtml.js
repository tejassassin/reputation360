import { BLOG_INDEX_PATH } from "../../constants/blogPaths.js";
import {
  ABOUT_FURTHER_READING_LINKS,
  ABOUT_FURTHER_READING_SUBHEADING,
  ABOUT_WORK_IN_ACTION_LINKS,
  ABOUT_WORK_IN_ACTION_SUBHEADING,
} from "../../data/aboutPageRelatedLinks.js";
import { escapeHtml, escapeHtmlAttr } from "./html.js";
import { caseStudyCardHtml } from "./moreCaseStudiesToHtml.js";
import { featuredBlogCardHtml } from "./featuredBlogCardToHtml.js";

function workInActionSectionHtml() {
  const cards = ABOUT_WORK_IN_ACTION_LINKS.map((link) =>
    caseStudyCardHtml(link.href, link.label),
  ).join("\n");

  return `<section class="case-study-links scroll-mt-28" aria-labelledby="about-work-in-action-heading">
  <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
    <div class="max-w-2xl">
      <p class="text-[12px] font-bold uppercase tracking-[0.14em] text-[#1a5c38]">Case studies</p>
      <h2 id="about-work-in-action-heading" class="mt-2 font-heading text-[28px] font-bold leading-[1.1] text-[#0f2e58] md:text-[34px]">Our Work in Action</h2>
      <p class="mt-3 text-[16px] leading-[1.65] text-[#4a5d75] md:text-[17px]">${escapeHtml(ABOUT_WORK_IN_ACTION_SUBHEADING)}</p>
    </div>
    <p class="m-0 shrink-0 self-start md:self-auto"><a href="/case-studies" class="inline-flex items-center gap-2 rounded-full border border-[#0f2e58]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#0f2e58] no-underline shadow-[0_8px_24px_-12px_rgba(15,46,88,0.2)]">All case studies <span aria-hidden="true">→</span></a></p>
  </div>
  <ul class="mt-10 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
${cards}
  </ul>
</section>`;
}

function furtherReadingSectionHtml() {
  const cards = ABOUT_FURTHER_READING_LINKS.map((link) =>
    featuredBlogCardHtml(link.href, link.label),
  ).join("\n");

  return `<section class="further-reading scroll-mt-28 border-t border-[#dce3ec]/80 pt-12 md:pt-14 lg:pt-16" aria-labelledby="about-further-reading-heading">
  <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
    <div class="max-w-2xl">
      <p class="text-[12px] font-bold uppercase tracking-[0.14em] text-[#2e5b88]">Insights</p>
      <h2 id="about-further-reading-heading" class="mt-2 font-heading text-[28px] font-bold leading-[1.1] text-[#0f2e58] md:text-[34px]">Related Readings</h2>
      <p class="mt-3 text-[16px] leading-[1.65] text-[#4a5d75] md:text-[17px]">${escapeHtml(ABOUT_FURTHER_READING_SUBHEADING)}</p>
    </div>
    <p class="m-0 shrink-0 self-start md:self-auto"><a href="${escapeHtmlAttr(BLOG_INDEX_PATH)}" class="inline-flex items-center gap-2 rounded-full border border-[#0f2e58]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#0f2e58] no-underline shadow-[0_8px_24px_-12px_rgba(15,46,88,0.2)]">All articles <span aria-hidden="true">→</span></a></p>
  </div>
  <ul class="mt-10 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
${cards}
  </ul>
</section>`;
}

export function aboutRelatedContentToHtml() {
  return `<div class="about-related-content relative overflow-hidden border-t border-[#dce3ec] bg-gradient-to-b from-[#f4f8fc] via-[#f8fafc] to-[#eef2f6]" aria-label="Case studies and articles">
  <div class="pointer-events-none absolute -right-20 top-8 h-72 w-72 rounded-full bg-[#79df86]/12 blur-3xl" aria-hidden="true"></div>
  <div class="pointer-events-none absolute -left-16 top-1/3 h-56 w-56 rounded-full bg-[#2e5b88]/10 blur-3xl" aria-hidden="true"></div>
  <div class="relative mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16 lg:py-20">
${workInActionSectionHtml()}
${furtherReadingSectionHtml()}
  </div>
</div>`;
}
