import { ArrowRight } from "lucide-react";
import { BLOG_INDEX_PATH } from "../../constants/blogPaths.js";
import {
  SERVICES_FURTHER_READING_LINKS,
  SERVICES_FURTHER_READING_SUBHEADING,
} from "../../data/servicesPageRelatedLinks.js";
import { internalAnchorProps } from "../../lib/internalLinkProps.js";
import { FurtherReadingCard } from "../whoWeServe/FurtherReadingSection.jsx";

/**
 * Blog links on the Services page (mirrors prerender HTML after hydration).
 * @param {{ className?: string }} props
 */
export function ServicesFurtherReadingSection({ className = "" }) {
  return (
    <section
      className={`further-reading scroll-mt-28 border-t border-[#dce3ec] pt-10 md:pt-12 ${className}`.trim()}
      aria-labelledby="services-further-reading-heading"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2
            id="services-further-reading-heading"
            className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px]"
          >
            Further Reading
          </h2>
          <p className="mt-3 text-base leading-[1.65] text-[#4f5f75] md:text-[17px] md:leading-[1.7]">
            {SERVICES_FURTHER_READING_SUBHEADING}
          </p>
        </div>
        <a
          href={BLOG_INDEX_PATH}
          {...internalAnchorProps(BLOG_INDEX_PATH)}
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[#0f2e58]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#0f2e58] shadow-sm transition hover:border-[#2e5b88]/40 hover:bg-[#f4f8fc] hover:text-[#163d6e] md:self-auto md:text-[15px]"
        >
          All articles
          <ArrowRight className="h-4 w-4 stroke-[2.25]" aria-hidden />
        </a>
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {SERVICES_FURTHER_READING_LINKS.map((link) => (
          <FurtherReadingCard key={link.href} href={link.href} label={link.label} />
        ))}
      </ul>
    </section>
  );
}
