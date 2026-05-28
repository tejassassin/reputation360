import { ArrowRight } from "lucide-react";
import { PACK20_BY_SLUG } from "../../data/blogs/pack20/catalog.js";
import { diyReputationGuideListing } from "../../data/blogs/diyReputationGuide.js";
import { removeNegativeSearchResultsListing } from "../../data/blogs/removeNegativeSearchResultsGuide.js";
import { removeNewsArticlesFromGoogleListing } from "../../data/blogs/removeNewsArticlesFromGoogleGuide.js";
import { suppressNegativeGuideListing } from "../../data/blogs/suppressNegativeGuideMeta.js";
import { WHO_WE_SERVE_FURTHER_READING } from "../../data/whoWeServeFurtherReading.js";
import { internalAnchorProps } from "../../lib/internalLinkProps.js";
import { BLOG_INDEX_PATH } from "../../constants/blogPaths.js";

/** @param {string} href */
function slugFromBlogHref(href) {
  const match = href.match(/^\/blog\/([^/]+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

/** @type {Record<string, { excerpt: string; readTime?: string; category?: string }>} */
const GUIDE_LISTING_BY_SLUG = {
  [suppressNegativeGuideListing.slug]: suppressNegativeGuideListing,
  [diyReputationGuideListing.slug]: diyReputationGuideListing,
  [removeNegativeSearchResultsListing.slug]: removeNegativeSearchResultsListing,
  [removeNewsArticlesFromGoogleListing.slug]: removeNewsArticlesFromGoogleListing,
};

/**
 * @param {string} href
 */
function getBlogCardMeta(href) {
  const slug = slugFromBlogHref(href);
  if (!slug) return null;

  const packArticle = PACK20_BY_SLUG.get(slug);
  if (packArticle?.listing) {
    return {
      excerpt: packArticle.listing.excerpt,
      readTime: packArticle.listing.readTime,
      category: packArticle.listing.category,
    };
  }

  const guide = GUIDE_LISTING_BY_SLUG[slug];
  if (guide) {
    return {
      excerpt: guide.excerpt,
      readTime: guide.readTime,
      category: guide.category,
    };
  }

  return null;
}

/**
 * @param {{ href: string; label: string }} props
 */
export function FurtherReadingCard({ href, label }) {
  const meta = getBlogCardMeta(href);

  return (
    <li className="list-none snap-start">
      <a
        href={href}
        {...internalAnchorProps(href)}
        className="group flex h-full w-[min(100%,21rem)] flex-col rounded-[20px] border border-[#0f2e58]/10 bg-white p-6 text-left no-underline shadow-[0_12px_40px_-18px_rgba(15,46,88,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2e5b88]/35 hover:shadow-[0_22px_50px_-20px_rgba(15,46,88,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e5b88] focus-visible:ring-offset-2 sm:w-[21rem] md:p-7 lg:w-full"
      >
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#0f2e58]/8 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#2e5b88] md:text-xs">
            {meta?.category ?? "Article"}
          </span>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f2e58]/5 text-[#0f2e58]/50 transition group-hover:bg-[#0f2e58] group-hover:text-white"
            aria-hidden
          >
            <ArrowRight className="h-4 w-4 stroke-[2.25] transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>

        <h4 className="mt-5 font-heading text-[19px] font-bold leading-snug text-[#0f2e58] group-hover:text-[#163d6e] md:text-[21px] md:leading-[1.25]">
          {label}
        </h4>

        {meta?.excerpt ? (
          <p className="mt-3 line-clamp-4 flex-1 text-[15px] leading-[1.65] text-[#4a5d75] md:text-base md:leading-[1.7]">
            {meta.excerpt}
          </p>
        ) : null}

        {meta?.readTime ? (
          <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7a8ca3]">
            {meta.readTime} read
          </p>
        ) : null}

        <span className="mt-5 border-t border-[#e8edf3] pt-4 text-[14px] font-semibold text-[#0f2e58] md:text-[15px]">
          Read article
          <span className="ml-1 inline-block text-[#2e5b88] transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>
    </li>
  );
}

/**
 * Blog links placed below See It In Action on audience pages.
 * @param {{ audiencePath: string; className?: string }} props
 */
export function FurtherReadingSection({ audiencePath, className = "" }) {
  const config = WHO_WE_SERVE_FURTHER_READING[audiencePath];
  if (!config) return null;

  const count = config.links.length;
  const useCompactGrid = count <= 2;
  const desktopGridClass =
    count === 3 ? "lg:grid-cols-3" : count >= 4 ? "lg:grid-cols-2" : "lg:grid-cols-2";

  return (
    <section
      className={`further-reading scroll-mt-28 border-t border-[#dce3ec] pt-10 md:pt-12 ${className}`.trim()}
      aria-labelledby="further-reading-heading"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h3
            id="further-reading-heading"
            className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px]"
          >
            Further Reading
          </h3>
          <p className="mt-3 text-base leading-[1.65] text-[#4f5f75] md:text-[17px] md:leading-[1.7]">
            {config.intro}
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
            <FurtherReadingCard key={link.href} href={link.href} label={link.label} />
          ))}
        </ul>
      </div>

      {!useCompactGrid ? (
        <p className="mt-3 text-center text-sm text-[#7a8ca3] lg:hidden">
          Swipe to explore more articles
        </p>
      ) : null}
    </section>
  );
}
