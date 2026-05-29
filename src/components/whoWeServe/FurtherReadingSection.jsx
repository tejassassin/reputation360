import { ArrowRight } from "lucide-react";
import { WHO_WE_SERVE_FURTHER_READING } from "../../data/whoWeServeFurtherReading.js";
import { getBlogCardMeta } from "../../lib/blogCardMeta.js";
import { internalAnchorProps } from "../../lib/internalLinkProps.js";
import { BLOG_INDEX_PATH } from "../../constants/blogPaths.js";

/**
 * @param {{ href: string; label: string; layout?: "carousel" | "grid"; className?: string }} props
 */
export function FurtherReadingCard({ href, label, layout = "carousel", className = "" }) {
  const meta = getBlogCardMeta(href);
  const isGrid = layout === "grid";

  return (
    <li
      className={[
        "list-none",
        isGrid ? "min-w-0" : "snap-start",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <a
        href={href}
        {...internalAnchorProps(href)}
        className={[
          "group flex h-full flex-col overflow-hidden rounded-2xl border border-[#0f2e58]/10 bg-white text-left no-underline shadow-[0_16px_48px_-24px_rgba(15,46,88,0.28)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2e5b88]/35 hover:shadow-[0_28px_60px_-22px_rgba(15,46,88,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e5b88] focus-visible:ring-offset-2",
          isGrid ?
            "w-full"
          : "w-[min(100%,26rem)] sm:w-[26rem] lg:w-full",
        ].join(" ")}
      >
        {meta?.image ? (
          <div
            className={`relative w-full overflow-hidden bg-[#e8edf3] ${isGrid ? "aspect-[16/9]" : "aspect-[5/3] sm:aspect-[16/9]"}`}
          >
            <img
              src={meta.image}
              alt={meta.imageAlt ?? label}
              width={640}
              height={400}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            />
          </div>
        ) : (
          <div
            className={`relative w-full bg-gradient-to-br from-[#0f2e58] via-[#1a4a7a] to-[#2e5b88] ${isGrid ? "aspect-[16/9]" : "aspect-[5/3] sm:aspect-[16/9]"}`}
            aria-hidden
          />
        )}

        <div
          className={`flex flex-1 flex-col ${isGrid ? "p-5 md:p-6" : "p-6 md:p-7"}`}
        >
          <h4
            className={`font-heading font-bold leading-snug text-[#0f2e58] transition-colors group-hover:text-[#163d6e] ${isGrid ? "text-[17px] md:text-[19px] md:leading-[1.3]" : "text-[19px] md:text-[21px] md:leading-[1.25]"}`}
          >
            {label}
          </h4>

          {meta?.excerpt ? (
            <p
              className={`mt-3 flex-1 text-[15px] leading-[1.65] text-[#4a5d75] md:text-base md:leading-[1.7] ${isGrid ? "line-clamp-2" : "line-clamp-3"}`}
            >
              {meta.excerpt}
            </p>
          ) : null}

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#e8edf3] pt-4">
            {meta?.readTime ? (
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7a8ca3]">
                {meta.readTime} read
              </span>
            ) : (
              <span className="text-[12px] text-[#7a8ca3]" aria-hidden>
                &nbsp;
              </span>
            )}
            <span className="inline-flex items-center gap-1 text-[14px] font-semibold text-[#2e5b88] md:text-[15px]">
              Read article
              <ArrowRight
                className="h-4 w-4 stroke-[2.25] transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </span>
          </div>
        </div>
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
            Related Readings
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
