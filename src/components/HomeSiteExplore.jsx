import { PRIORITY_COMMERCIAL_LINKS } from "../data/siteCrawlLinks.js";
import { internalAnchorProps } from "../lib/internalLinkProps.js";

/**
 * Visible homepage hub links to priority commercial sections (crawl + UX).
 */
export default function HomeSiteExplore() {
  return (
    <nav
      aria-label="Explore Reputation360"
      className="border-b border-slate-200/80 bg-offwhite"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 sm:px-6">
        {PRIORITY_COMMERCIAL_LINKS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            {...internalAnchorProps(item.href)}
            className="font-heading text-sm font-semibold text-navy underline decoration-[#4CAF50]/40 underline-offset-4 transition hover:text-[#2a6b3a] hover:decoration-[#4CAF50]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
