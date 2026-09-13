import { ArrowRight } from "lucide-react";
import { internalAnchorProps } from "../lib/internalLinkProps.js";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.href
 * @param {import('lucide-react').LucideIcon} props.icon
 * @param {string} [props.className]
 */
export function WhoWeServeAudienceCard({
  title,
  href,
  icon: Icon,
  className = "",
}) {
  return (
    <li className={["list-none h-full min-w-0", className].filter(Boolean).join(" ")}>
      <a
        href={href}
        {...internalAnchorProps(href)}
        className="r360-who-we-serve-card group relative flex h-full min-h-0 w-full min-w-0 cursor-pointer flex-row items-center gap-3 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/12 to-white/5 p-3.5 text-left no-underline shadow-[0_10px_36px_-8px_rgba(8,18,36,0.55)] ring-1 ring-inset ring-white/10 backdrop-blur-md sm:p-4 lg:flex-col lg:items-stretch lg:gap-2.5 lg:p-4 lg:pb-11"
        aria-label={`${title}, learn more`}
      >
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-bl-full bg-slate/20 transition-transform duration-500 group-hover:scale-150"
          aria-hidden
        />
        <div className="flex min-w-0 flex-1 flex-row items-center gap-3 lg:flex-col lg:items-start lg:gap-2">
          <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-navy/90 text-green shadow-sm shadow-navy/40 transition group-hover:border-green/40 lg:h-11 lg:w-11">
            <Icon className="h-5 w-5 stroke-[1.6] lg:h-[1.35rem] lg:w-[1.35rem]" aria-hidden />
          </div>
          <h3 className="font-heading min-w-0 flex-1 text-[0.95rem] font-bold leading-snug text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] line-clamp-2 lg:flex-none lg:line-clamp-none lg:pr-2 lg:text-[1.02rem] lg:leading-snug">
            {title}
          </h3>
        </div>
        <span
          className="r360-who-we-serve-card-arrow grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/35 bg-white/[0.06] text-white transition duration-200 group-hover:border-green/60 group-hover:bg-green group-hover:text-navy lg:absolute lg:bottom-3.5 lg:right-3.5"
          aria-hidden
        >
          <ArrowRight className="h-4 w-4 stroke-[2.25] lg:h-[1.05rem] lg:w-[1.05rem]" />
        </span>
      </a>
    </li>
  );
}
