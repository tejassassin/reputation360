import { ArrowRight } from "lucide-react";
import { getBlogCardMeta } from "../../lib/blogCardMeta.js";
import { internalAnchorProps } from "../../lib/internalLinkProps.js";

/**
 * Featured blog card with image header for the homepage.
 * @param {{ href: string; label: string }} props
 */
export function HomeFromOurBlogCard({ href, label }) {
  const meta = getBlogCardMeta(href);
  const category = meta?.category ?? "Article";

  return (
    <li className="list-none">
      <a
        href={href}
        {...internalAnchorProps(href)}
        className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#0f2e58]/10 bg-white text-left no-underline shadow-[0_16px_48px_-24px_rgba(15,46,88,0.28)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2e5b88]/30 hover:shadow-[0_28px_60px_-22px_rgba(15,46,88,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e5b88] focus-visible:ring-offset-2"
      >
        {meta?.image ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e8edf3]">
            <img
              src={meta.image}
              alt={meta.imageAlt ?? label}
              width={640}
              height={400}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f2e58]/80 via-[#0f2e58]/30 to-transparent"
              aria-hidden
            />
            <span className="absolute left-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#2e5b88] shadow-sm">
              {category}
            </span>
          </div>
        ) : (
          <div className="relative bg-gradient-to-br from-[#0f2e58] via-[#1a4a7a] to-[#2e5b88] px-6 py-8">
            <span className="inline-block rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
              {category}
            </span>
          </div>
        )}

        <div className="flex flex-1 flex-col p-6 md:p-7">
          {!meta?.image ? (
            <span className="inline-block w-fit rounded-full bg-[#0f2e58]/8 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#2e5b88]">
              {category}
            </span>
          ) : null}

          <h3
            className={`font-heading text-[19px] font-bold leading-snug text-[#0f2e58] transition-colors group-hover:text-[#163d6e] md:text-[21px] md:leading-[1.25] ${meta?.image ? "" : "mt-4"}`}
          >
            {label}
          </h3>

          {meta?.excerpt ? (
            <p className="mt-3 line-clamp-3 flex-1 text-[15px] leading-[1.65] text-[#4a5d75] md:text-base md:leading-[1.7]">
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
