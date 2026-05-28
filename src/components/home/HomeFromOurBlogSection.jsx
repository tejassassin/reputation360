import { ArrowRight } from "lucide-react";
import { BLOG_INDEX_PATH } from "../../constants/blogPaths.js";
import {
  HOME_FROM_OUR_BLOG_LINKS,
  HOME_FROM_OUR_BLOG_SUBHEADING,
} from "../../data/homeFromOurBlog.js";
import { internalAnchorProps } from "../../lib/internalLinkProps.js";
import { HomeFromOurBlogCard } from "./HomeFromOurBlogCard.jsx";

/**
 * Homepage featured blog posts (mirrors prerendered #r360-prerender section after hydration).
 * @param {{ className?: string }} props
 */
export function HomeFromOurBlogSection({ id = "from-our-blog", className = "" }) {
  return (
    <section
      id={id}
      className={`from-our-blog relative z-10 scroll-mt-28 overflow-hidden border-t border-[#dce3ec] bg-gradient-to-b from-[#f4f8fc] via-[#f8fafc] to-[#f1f5f9] py-14 md:py-16 ${className}`.trim()}
      aria-labelledby="from-our-blog-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#4CAF50]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-[#2e5b88]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#2e5b88]">
              Insights
            </p>
            <h2
              id="from-our-blog-heading"
              className="font-heading text-[28px] font-bold leading-[1.1] text-[#0f2e58] md:text-[36px]"
            >
              From Our Blog
            </h2>
            <p className="mt-3 text-[16px] leading-[1.65] text-[#4a5d75] md:text-[17px]">
              {HOME_FROM_OUR_BLOG_SUBHEADING}
            </p>
          </div>
          <a
            href={BLOG_INDEX_PATH}
            {...internalAnchorProps(BLOG_INDEX_PATH)}
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[#0f2e58]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#0f2e58] shadow-[0_8px_24px_-12px_rgba(15,46,88,0.2)] transition hover:border-[#2e5b88]/40 hover:bg-[#f4f8fc] hover:text-[#163d6e] md:self-auto md:text-[15px]"
          >
            All articles
            <ArrowRight className="h-4 w-4 stroke-[2.25]" aria-hidden />
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {HOME_FROM_OUR_BLOG_LINKS.map((link) => (
            <HomeFromOurBlogCard key={link.href} href={link.href} label={link.label} />
          ))}
        </ul>
      </div>
    </section>
  );
}
