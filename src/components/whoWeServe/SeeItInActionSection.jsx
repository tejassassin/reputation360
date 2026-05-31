import { ArrowRight } from "lucide-react";
import { getCaseStudyBySlug } from "../../data/caseStudies/index.js";
import { WHO_WE_SERVE_SEE_IT_IN_ACTION } from "../../data/whoWeServeSeeItInAction.js";
import { internalAnchorProps } from "../../lib/internalLinkProps.js";
import { caseStudyListTeaser } from "../../utils/caseStudyTeaser.js";

/** @param {string} href */
function slugFromCaseStudyHref(href) {
  const match = href.match(/^\/case-studies\/([^/]+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * @param {{ href: string; label: string; layout?: "carousel" | "grid"; titleTag?: "h3" | "h4" }} props
 */
export function SeeItInActionStoryCard({
  href,
  label,
  layout = "carousel",
  titleTag = layout === "grid" ? "h3" : "h4",
}) {
  const slug = slugFromCaseStudyHref(href);
  const study = slug ? getCaseStudyBySlug(slug) : null;
  const teaser =
    study?.summary?.trim() || (study ? caseStudyListTeaser(study) : null);

  const widthClass =
    layout === "grid"
      ? "w-full"
      : "w-[min(100%,21rem)] sm:w-[21rem] lg:w-full";
  const titleClassName =
    "mt-5 font-heading text-[19px] font-bold leading-snug text-[#0f2e58] group-hover:text-[#163d6e] md:text-[21px] md:leading-[1.25]";

  return (
    <li className={`list-none ${layout === "carousel" ? "snap-start" : ""}`.trim()}>
      <a
        href={href}
        {...internalAnchorProps(href)}
        className={`group flex h-full ${widthClass} flex-col rounded-2xl border border-[#0f2e58]/10 bg-white p-6 text-left no-underline shadow-[0_16px_48px_-24px_rgba(15,46,88,0.28)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#79df86]/40 hover:shadow-[0_28px_60px_-22px_rgba(15,46,88,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#79df86] focus-visible:ring-offset-2 md:p-7`}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#79df86]/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a5c38] md:text-xs">
            Case study
          </span>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f2e58]/5 text-[#0f2e58]/50 transition group-hover:bg-[#79df86] group-hover:text-[#0f2e58]"
            aria-hidden
          >
            <ArrowRight className="h-4 w-4 stroke-[2.25] transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>

        {titleTag === "h3" ? (
          <h3 className={titleClassName}>{label}</h3>
        ) : (
          <h4 className={titleClassName}>{label}</h4>
        )}

        {teaser ? (
          <p className="mt-3 line-clamp-4 flex-1 text-[15px] leading-[1.65] text-[#4a5d75] md:text-base md:leading-[1.7]">
            {teaser}
          </p>
        ) : (
          <p className="mt-3 flex-1 text-[15px] leading-[1.65] text-[#4a5d75] md:text-base md:leading-[1.7]">
            See how we rebuilt search results and protected professional credibility.
          </p>
        )}

        <span className="mt-5 border-t border-[#e8edf3] pt-4 text-[14px] font-semibold text-[#0f2e58] md:text-[15px]">
          Read full story
          <span className="ml-1 text-[#4eab66] transition-transform group-hover:translate-x-1 inline-block">
            →
          </span>
        </span>
      </a>
    </li>
  );
}

/**
 * Case study links shown above the bottom consultation CTA on audience pages.
 * @param {{ audiencePath: string; className?: string }} props
 */
export function SeeItInActionSection({
  audiencePath,
  className = "",
  sectionTitleTag = "h3",
  cardTitleTag = "h4",
  sectionTitle = "Reputation Management Case Studies",
}) {
  const config = WHO_WE_SERVE_SEE_IT_IN_ACTION[audiencePath];
  if (!config) return null;

  const count = config.links.length;
  const useCompactGrid = count <= 2;
  const desktopGridClass =
    count === 3 ? "lg:grid-cols-3" : count >= 4 ? "lg:grid-cols-2" : "lg:grid-cols-2";

  return (
    <section
      className={`!mt-16 md:!mt-24 case-study-links scroll-mt-28 ${className}`.trim()}
      aria-labelledby="see-it-in-action-heading"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          {sectionTitleTag === "h2" ? (
            <h2
              id="see-it-in-action-heading"
              className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px]"
            >
              {sectionTitle}
            </h2>
          ) : (
            <h3
              id="see-it-in-action-heading"
              className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px]"
            >
              {sectionTitle}
            </h3>
          )}
          <p className="mt-3 text-base leading-[1.65] text-[#4f5f75] md:text-[17px] md:leading-[1.7]">
            {config.intro}
          </p>
        </div>
        <a
          href="/case-studies"
          {...internalAnchorProps("/case-studies")}
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[#0f2e58]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#0f2e58] shadow-sm transition hover:border-[#79df86]/50 hover:bg-[#f8fdf9] hover:text-[#163d6e] md:self-auto md:text-[15px]"
        >
          All case studies
          <ArrowRight className="h-4 w-4 stroke-[2.25]" aria-hidden />
        </a>
      </div>

      <div
        className={[
          "mt-8",
          useCompactGrid
            ? "grid grid-cols-1 gap-5 sm:grid-cols-2"
            : "-mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:thin] md:-mx-6 md:px-6 lg:overflow-visible lg:pb-0",
        ].join(" ")}
      >
        <ul
          className={
            useCompactGrid
              ? "contents"
              : `flex w-max gap-5 lg:grid lg:w-full lg:gap-6 ${desktopGridClass}`
          }
        >
          {config.links.map((link) => (
            <SeeItInActionStoryCard
              key={link.href}
              href={link.href}
              label={link.label}
              titleTag={cardTitleTag}
            />
          ))}
        </ul>
      </div>

      {!useCompactGrid ? (
        <p className="mt-3 text-center text-sm text-[#7a8ca3] lg:hidden">
          Swipe to explore more stories
        </p>
      ) : null}
    </section>
  );
}
