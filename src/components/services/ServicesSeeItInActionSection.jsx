import { ArrowRight } from "lucide-react";
import {
  SERVICES_SEE_IT_IN_ACTION_LINKS,
  SERVICES_SEE_IT_IN_ACTION_SUBHEADING,
} from "../../data/servicesPageRelatedLinks.js";
import { internalAnchorProps } from "../../lib/internalLinkProps.js";
import { SeeItInActionStoryCard } from "../whoWeServe/SeeItInActionSection.jsx";

/**
 * Case study links on the Services page (mirrors prerender HTML after hydration).
 * @param {{ className?: string }} props
 */
export function ServicesSeeItInActionSection({ className = "" }) {
  return (
    <section
      className={`case-study-links scroll-mt-28 border-t border-[#dce3ec] pt-10 md:pt-12 ${className}`.trim()}
      aria-labelledby="services-see-it-in-action-heading"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2
            id="services-see-it-in-action-heading"
            className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px]"
          >
            See It In Action
          </h2>
          <p className="mt-3 text-base leading-[1.65] text-[#4f5f75] md:text-[17px] md:leading-[1.7]">
            {SERVICES_SEE_IT_IN_ACTION_SUBHEADING}
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

      <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {SERVICES_SEE_IT_IN_ACTION_LINKS.map((link) => (
          <SeeItInActionStoryCard key={link.href} href={link.href} label={link.label} />
        ))}
      </ul>
    </section>
  );
}
