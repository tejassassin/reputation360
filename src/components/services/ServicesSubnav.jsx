import { ChevronRight } from "lucide-react";
import {
  NEGATIVE_LINK_SUPPRESSION_PATH,
  ONLINE_REPUTATION_MANAGEMENT_PATH,
} from "../../constants/servicePaths.js";
import { internalAnchorProps } from "../../lib/internalLinkProps.js";
import { useDocumentPathname } from "../../hooks/useDocumentPathname.js";

const SERVICES_OVERVIEW_PATH = "/services";

const links = [
  { href: SERVICES_OVERVIEW_PATH, label: "Services overview" },
  {
    href: ONLINE_REPUTATION_MANAGEMENT_PATH,
    label: "Online Reputation Management",
  },
  {
    href: NEGATIVE_LINK_SUPPRESSION_PATH,
    label: "Negative Link Suppression",
  },
];

/**
 * Always-visible sub-navigation for /services and dedicated service pages.
 */
export function ServicesSubnav() {
  const pathname = useDocumentPathname();
  const onServices =
    pathname === SERVICES_OVERVIEW_PATH ||
    pathname === ONLINE_REPUTATION_MANAGEMENT_PATH ||
    pathname === NEGATIVE_LINK_SUPPRESSION_PATH;

  if (!onServices) return null;

  return (
    <nav
      aria-label="Services pages"
      className="border-b border-navy/10 bg-white shadow-[0_1px_0_rgba(31,59,100,0.04)]"
    >
      <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3 md:px-8">
        {links.map((item) => {
          const active = pathname === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              {...internalAnchorProps(item.href)}
              aria-current={active ? "page" : undefined}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "bg-navy text-white shadow-sm"
                  : "border border-navy/12 bg-[#f4f7fb] text-navy hover:border-navy/25 hover:bg-white"
              }`}
            >
              {item.label}
              {!active && <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
