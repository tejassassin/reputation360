import { ArrowRight } from "lucide-react";
import { BLOG_INDEX_PATH } from "../../constants/blogPaths.js";
import { FURTHER_READING_BY_BLOG_PATH } from "../../data/blogs/furtherReadingByBlogPath.js";
import { normalizeCanonicalPath } from "../../lib/canonicalHrefFromPath.js";
import { internalAnchorProps } from "../../lib/internalLinkProps.js";
import { FurtherReadingCard } from "../whoWeServe/FurtherReadingSection.jsx";

/**
 * Mapped related articles at the bottom of blog post pages.
 * @param {{ blogPath: string; className?: string }} props
 */
export function BlogFurtherReadingSection({ blogPath, className = "" }) {
  const path = normalizeCanonicalPath(blogPath);
  const links = FURTHER_READING_BY_BLOG_PATH[path];
  if (!links?.length) return null;

  return (
    <section
      className={`further-reading scroll-mt-28 border-t border-[#dce3ec] pt-10 md:pt-12 ${className}`.trim()}
      aria-labelledby="further-reading-heading"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2
            id="further-reading-heading"
            className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px]"
          >
            Related Reputation Management Articles
          </h2>
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

      <ul className="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
        {links.map((link) => (
          <FurtherReadingCard
            key={link.href}
            href={link.href}
            label={link.label}
            layout="grid"
            titleTag="h3"
          />
        ))}
      </ul>
    </section>
  );
}
