import { ArrowRight } from "lucide-react";
import { BLOG_INDEX_PATH } from "../../constants/blogPaths.js";
import {
  ABOUT_FURTHER_READING_LINKS,
  ABOUT_FURTHER_READING_SUBHEADING,
  ABOUT_WORK_IN_ACTION_LINKS,
  ABOUT_WORK_IN_ACTION_SUBHEADING,
} from "../../data/aboutPageRelatedLinks.js";
import { internalAnchorProps } from "../../lib/internalLinkProps.js";
import { HomeFromOurBlogCard } from "../home/HomeFromOurBlogCard.jsx";
import { SeeItInActionStoryCard } from "../whoWeServe/SeeItInActionSection.jsx";

/**
 * Case studies + blog links on /about (mirrors #r360-prerender after hydration).
 */
export function AboutRelatedContentBlock() {
  return (
    <div
      className="about-related-content relative z-10 overflow-hidden border-t border-[#dce3ec] bg-gradient-to-b from-[#f4f8fc] via-[#f8fafc] to-[#eef2f6]"
      aria-label="Case studies and articles"
    >
      <div
        className="pointer-events-none absolute -right-20 top-8 h-72 w-72 rounded-full bg-[#79df86]/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 top-1/3 h-56 w-56 rounded-full bg-[#2e5b88]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-[#4CAF50]/8 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <section
          className="case-study-links scroll-mt-28"
          aria-labelledby="about-work-in-action-heading"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="max-w-2xl">
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#1a5c38]">
                Case studies
              </p>
              <h2
                id="about-work-in-action-heading"
                className="mt-2 font-heading text-[28px] font-bold leading-[1.1] text-[#0f2e58] md:text-[34px]"
              >
                Reputation Management Case Studies
              </h2>
              <p className="mt-3 text-[16px] leading-[1.65] text-[#4a5d75] md:text-[17px] md:leading-[1.7]">
                {ABOUT_WORK_IN_ACTION_SUBHEADING}
              </p>
            </div>
            <a
              href="/case-studies"
              {...internalAnchorProps("/case-studies")}
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[#0f2e58]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#0f2e58] shadow-[0_8px_24px_-12px_rgba(15,46,88,0.2)] transition hover:border-[#79df86]/50 hover:bg-[#f8fdf9] hover:text-[#163d6e] md:self-auto md:text-[15px]"
            >
              All case studies
              <ArrowRight className="h-4 w-4 stroke-[2.25]" aria-hidden />
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
            {ABOUT_WORK_IN_ACTION_LINKS.map((link) => (
              <SeeItInActionStoryCard
                key={link.href}
                href={link.href}
                label={link.label}
                layout="grid"
                titleTag="h3"
              />
            ))}
          </ul>
        </section>

        <section
          className="further-reading mt-16 md:mt-24 scroll-mt-28 border-t border-[#dce3ec]/80 pt-12 md:pt-14 lg:pt-16"
          aria-labelledby="about-further-reading-heading"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="max-w-2xl">
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#2e5b88]">
                Insights
              </p>
              <h2
                id="about-further-reading-heading"
                className="mt-2 font-heading text-[28px] font-bold leading-[1.1] text-[#0f2e58] md:text-[34px]"
              >
                Reputation Management Guides & Insights
              </h2>
              <p className="mt-3 text-[16px] leading-[1.65] text-[#4a5d75] md:text-[17px] md:leading-[1.7]">
                {ABOUT_FURTHER_READING_SUBHEADING}
              </p>
            </div>
            <a
              href={BLOG_INDEX_PATH}
              {...internalAnchorProps(BLOG_INDEX_PATH)}
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[#0f2e58]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#0f2e58] shadow-[0_8px_24px_-12px_rgba(15,46,88,0.2)] transition hover:border-[#2e5b88]/40 hover:bg-white hover:text-[#163d6e] md:self-auto md:text-[15px]"
            >
              All articles
              <ArrowRight className="h-4 w-4 stroke-[2.25]" aria-hidden />
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
            {ABOUT_FURTHER_READING_LINKS.map((link) => (
              <HomeFromOurBlogCard key={link.href} href={link.href} label={link.label} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
