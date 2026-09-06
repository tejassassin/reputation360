import { ArrowRight } from "lucide-react";
import { BLOG_INDEX_PATH } from "../../constants/blogPaths.js";
import {
  HOME_FROM_OUR_BLOG_LINKS,
  HOME_FROM_OUR_BLOG_SUBHEADING,
} from "../../data/homeFromOurBlog.js";
import { internalAnchorProps } from "../../lib/internalLinkProps.js";
import { HomeFromOurBlogCard } from "./HomeFromOurBlogCard.jsx";

/**
 * Homepage featured blog posts.
 * @param {{ className?: string }} props
 */
export function HomeFromOurBlogSection({ id = "from-our-blog", className = "" }) {
  return (
    <section
      id={id}
      className={`from-our-blog relative z-10 scroll-mt-28 overflow-hidden border-t border-navy/10 bg-offwhite pt-6 pb-14 md:pt-8 md:pb-16 ${className}`.trim()}
      aria-labelledby="from-our-blog-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#4CAF50]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-navy/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center gap-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.14em] text-green">
              Insights
            </span>
            <h2
              id="from-our-blog-heading"
              className="font-heading text-[28px] font-bold leading-[1.1] text-navy md:text-[36px]"
            >
              Online Reputation Management Guide and Insights
            </h2>
            <p className="mt-3 text-[16px] leading-[1.65] text-steel md:text-[17px]">
              {HOME_FROM_OUR_BLOG_SUBHEADING}
            </p>
          </div>
          <a
            href={BLOG_INDEX_PATH}
            {...internalAnchorProps(BLOG_INDEX_PATH)}
            className="inline-flex shrink-0 items-center gap-2 self-end rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy shadow-[0_8px_24px_-12px_rgba(31,59,100,0.2)] transition hover:border-green/40 hover:bg-offwhite hover:text-navy md:text-[15px]"
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
