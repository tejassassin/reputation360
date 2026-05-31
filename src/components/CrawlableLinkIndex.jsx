import { internalAnchorProps } from "../lib/internalLinkProps.js";

/**
 * Screen-reader / crawler-friendly link list (always in DOM on first paint when placed outside lazy shells).
 *
 * @param {object} props
 * @param {string} props.title Accessible name for the nav region
 * @param {{ href: string; label: string }[]} props.links
 * @param {string} [props.className] Defaults to sr-only
 */
export function CrawlableLinkIndex({ title, links, className = "sr-only" }) {
  if (!links.length) return null;

  return (
    <nav aria-label={title} className={className}>
      <p className="font-heading text-sm font-bold text-navy">{title}</p>
      <ul className="m-0 mt-2 list-none space-y-1 p-0">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              {...internalAnchorProps(link.href)}
              className="font-body text-sm text-navy underline decoration-navy/30 underline-offset-2 hover:text-[#2a6b3a]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
