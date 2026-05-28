import { ArrowUpRight } from "lucide-react";
import { WHO_WE_SERVE_AUDIENCES } from "../data/whoWeServeAudiences.js";
import { internalAnchorProps } from "../lib/internalLinkProps.js";

const ICON_STYLES = [
  "bg-[#1f3b64] text-white",
  "bg-[#2a8c3e] text-white",
  "bg-[#3b6488] text-white",
];

/**
 * Audience grid for the Services page - matches What We Do card styling.
 */
export function ServicesWhoWeWorkWith() {
  return (
    <div id="who-we-work-with" className="scroll-mt-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="text-center sm:text-left">
          <h3 className="who-we-work-with-heading font-heading font-bold tracking-tight text-navy">
            Who We Work With
          </h3>
          <div
            className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#2E5B88] sm:mx-0"
            aria-hidden
          />
        </div>
        <a
          href="#who-we-work-with"
          className="inline-flex shrink-0 items-center gap-2 self-center rounded-lg border border-[#2a8c3e]/50 bg-transparent px-4 py-2.5 font-heading text-sm font-semibold text-[#2a6b3a] transition hover:border-[#4CAF50] hover:bg-[#4CAF50]/[0.08] sm:self-auto"
        >
          All audiences
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
        </a>
      </div>

      <nav aria-label="Who we work with page links" className="sr-only">
        <ul className="m-0 list-none p-0">
          {WHO_WE_SERVE_AUDIENCES.map((cat) => (
            <li key={cat.href} className="list-none">
              <a href={cat.href} {...internalAnchorProps(cat.href)}>
                {cat.linkLabel}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ul
        className="mt-8 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 sm:[&>li:last-child:nth-child(2n+1)]:col-start-2 lg:grid-cols-3 lg:gap-5 lg:[&>li:last-child:nth-child(2n+1)]:col-start-auto lg:[&>li:last-child:nth-child(3n+1)]:col-start-2"
        role="list"
      >
        {WHO_WE_SERVE_AUDIENCES.map((cat, index) => {
          const Icon = cat.icon;
          const isBusinesses = cat.id === "businesses";
          const iconStyle = isBusinesses
            ? "bg-[#4CAF50] text-white"
            : ICON_STYLES[index % ICON_STYLES.length];

          return (
            <li key={cat.href} className="list-none">
              <a
                href={cat.href}
                {...internalAnchorProps(cat.href)}
                aria-label={cat.linkLabel}
                className="ha-lift group relative flex h-full flex-col items-center rounded-2xl border border-navy/10 bg-white p-5 text-center no-underline shadow-sm transition hover:border-[#d9f1d2] hover:bg-[#f6fdf3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green sm:p-6"
              >
                <ArrowUpRight
                  className="absolute right-4 top-4 h-4 w-4 text-navy/30 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#2a8c3e] sm:right-5 sm:top-5"
                  strokeWidth={2.25}
                  aria-hidden
                />
                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl ${iconStyle}`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </div>
                <h4
                  className={`who-we-work-with-trigger mt-4 font-heading font-semibold [text-wrap:balance] ${
                    isBusinesses ? "text-[#2a6b3a]" : "text-navy"
                  }`}
                >
                  {cat.title}
                </h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/70 [text-wrap:pretty]">
                  {cat.description}
                </p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
