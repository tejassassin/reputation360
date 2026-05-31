import { ArrowRight } from "lucide-react";
import { MORE_CASE_STUDIES_BY_PATH } from "../../data/caseStudies/moreCaseStudiesByPath.js";
import { normalizeCanonicalPath } from "../../lib/canonicalHrefFromPath.js";
import { internalAnchorProps } from "../../lib/internalLinkProps.js";
import { SeeItInActionStoryCard } from "../whoWeServe/SeeItInActionSection.jsx";

/**
 * Related case studies at the bottom of a case study detail page.
 * @param {{ caseStudyPath: string; className?: string }} props
 */
export function MoreCaseStudiesSection({ caseStudyPath, className = "" }) {
  const path = normalizeCanonicalPath(caseStudyPath);
  const links = MORE_CASE_STUDIES_BY_PATH[path];
  if (!links?.length) return null;

  return (
    <section
      className={`more-case-studies scroll-mt-28 border-t border-[#dce3ec] pt-10 md:pt-12 ${className}`.trim()}
      aria-labelledby="more-case-studies-heading"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2
            id="more-case-studies-heading"
            className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px]"
          >
            Related Reputation Management Case Studies
          </h2>
          <p className="mt-3 text-base leading-[1.65] text-[#4f5f75] md:text-[17px] md:leading-[1.7]">
            See how we&apos;ve helped others in similar situations
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

      <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {links.map((link) => (
          <SeeItInActionStoryCard key={link.href} href={link.href} label={link.label} titleTag="h3" />
        ))}
      </ul>
    </section>
  );
}
