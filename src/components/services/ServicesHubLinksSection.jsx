import { ArrowUpRight } from "lucide-react";
import { SERVICE_HUB_LINKS } from "../../data/serviceHubLinks.js";
import { internalAnchorProps } from "../../lib/internalLinkProps.js";

/**
 * Visible links to dedicated service pages on /services.
 */
export function ServicesHubLinksSection() {
  return (
    <section
      className="scroll-mt-28"
      aria-labelledby="services-hub-heading"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/45">
        Service guides
      </p>
      <h2
        id="services-hub-heading"
        className="mt-2 font-heading text-2xl font-bold tracking-tight text-navy md:text-3xl"
      >
        Explore our services in depth
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-navy/70">
        Each guide walks through strategy, delivery, and what to expect - the same
        interactive format as our reputation insights.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-5">
        {SERVICE_HUB_LINKS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              {...internalAnchorProps(item.href)}
              className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_16px_48px_-24px_rgba(15,35,60,0.18)] transition hover:border-[#79df86]/45 hover:shadow-[0_20px_56px_-20px_rgba(26,74,122,0.22)] md:p-7"
            >
              <span className="inline-flex w-fit items-center rounded-full border border-[#1a5c38]/20 bg-[#f0faf3] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#1a5c38]">
                {item.badge}
              </span>
              <span className="mt-4 font-heading text-xl font-bold leading-snug text-navy group-hover:text-[#1a4a7a] md:text-2xl">
                {item.title}
              </span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-navy/70 md:text-[15px]">
                {item.description}
              </span>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-[#1a4a7a]">
                Open guide
                <ArrowUpRight
                  className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
