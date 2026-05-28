import { WHO_WE_SERVE_SEE_IT_IN_ACTION } from "../../data/whoWeServeSeeItInAction.js";
import { internalAnchorProps } from "../../lib/internalLinkProps.js";

/**
 * Case study links shown above the bottom consultation CTA on audience pages.
 * @param {{ audiencePath: string; className?: string }} props
 */
export function SeeItInActionSection({ audiencePath, className = "" }) {
  const config = WHO_WE_SERVE_SEE_IT_IN_ACTION[audiencePath];
  if (!config) return null;

  return (
    <section
      className={`case-study-links scroll-mt-28 rounded-[24px] border border-[#dce3ec] bg-[#f8f9fc] px-5 py-8 shadow-[0_10px_28px_rgba(15,23,42,0.04)] md:px-9 md:py-10 ${className}`.trim()}
      aria-labelledby="see-it-in-action-heading"
    >
      <h3
        id="see-it-in-action-heading"
        className="font-heading text-[22px] font-bold leading-[1.12] text-[#0f2e58] md:text-[26px]"
      >
        See It In Action
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-[#4f5f75] md:text-[16px]">
        {config.intro}
      </p>
      <ul className="mt-5 list-none space-y-3 p-0">
        {config.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              {...internalAnchorProps(link.href)}
              className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#0f2e58] underline-offset-2 transition-colors hover:text-[#1a4d8f] hover:underline md:text-[16px]"
            >
              {link.label}
              <span aria-hidden>→</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
