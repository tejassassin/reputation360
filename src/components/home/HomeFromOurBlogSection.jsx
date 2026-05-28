import { ArrowRight } from "lucide-react";
import { BLOG_INDEX_PATH } from "../../constants/blogPaths.js";
import {
  HOME_FROM_OUR_BLOG_LINKS,
  HOME_FROM_OUR_BLOG_SUBHEADING,
} from "../../data/homeFromOurBlog.js";
import { internalAnchorProps } from "../../lib/internalLinkProps.js";
import { FurtherReadingCard } from "../whoWeServe/FurtherReadingSection.jsx";

/**
 * Homepage featured blog posts (mirrors prerendered #r360-prerender section after hydration).
 * @param {{ className?: string }} props
 */
export function HomeFromOurBlogSection({ className = "" }) {
  return (
    <section
      className={`from-our-blog scroll-mt-28 border-t border-[#dce3ec] bg-offwhite pt-10 md:pt-12 ${className}`.trim()}
      aria-labelledby="from-our-blog-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2
              id="from-our-blog-heading"
              className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px]"
            >
              From Our Blog
            </h2>
            <p className="mt-3 text-[15px] leading-[1.65] text-[#4a5d75] md:text-base">
              {HOME_FROM_OUR_BLOG_SUBHEADING}
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

        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_FROM_OUR_BLOG_LINKS.map((link) => (
            <FurtherReadingCard key={link.href} href={link.href} label={link.label} />
          ))}
        </ul>
      </div>
    </section>
  );
}
