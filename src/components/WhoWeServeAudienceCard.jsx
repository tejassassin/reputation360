import { ArrowRight } from "lucide-react";
import { internalAnchorProps } from "../lib/internalLinkProps.js";

const cardClassName =
  "ha-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/6 p-6 text-left no-underline shadow-[0_8px_32px_-8px_rgba(10,20,40,0.5)] ring-1 ring-inset ring-white/10 backdrop-blur-md transition-all duration-300 sm:p-7 hover:-translate-y-0.5 hover:border-green/50 hover:from-white/18 hover:to-white/8 hover:shadow-[0_12px_40px_-10px_rgba(31,59,100,0.45),0_0_0_1px_rgba(76,175,80,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.linkLabel
 * @param {string} props.href
 * @param {import('lucide-react').LucideIcon} props.icon
 * @param {string} [props.className]
 */
export function WhoWeServeAudienceCard({
  title,
  description,
  linkLabel,
  href,
  icon: Icon,
  className = "",
}) {
  return (
    <li className={["list-none", className].filter(Boolean).join(" ")}>
      <a href={href} {...internalAnchorProps(href)} className={cardClassName}>
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-bl-full bg-slate/20 transition-transform duration-500 group-hover:scale-150"
          aria-hidden
        />
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-green/30 bg-navy/80 text-green shadow-sm shadow-navy/40 transition group-hover:border-green/55 group-hover:shadow-[0_0_24px_-6px_rgba(76,175,80,0.3)] sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl">
          <Icon className="h-6 w-6 stroke-[1.75] sm:h-7 sm:w-7" aria-hidden />
        </div>
        <h3 className="font-heading mb-2.5 text-lg font-bold leading-snug text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:mb-3 sm:text-xl">
          {title}
        </h3>
        <p className="mb-0 flex-1 text-sm font-medium leading-relaxed text-slate-100/95 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:text-[15px]">
          {description}
        </p>
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/15 pt-4 sm:mt-6 sm:pt-5">
          <span className="min-w-0 flex-1 text-xs font-semibold leading-snug text-white/95 [text-wrap:pretty] sm:text-sm sm:leading-normal">
            {linkLabel}
          </span>
          <span
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-white shadow-sm transition duration-300 group-hover:scale-105 group-hover:border-green/50 group-hover:bg-green group-hover:text-navy sm:h-10 sm:w-10"
            aria-hidden
          >
            <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
          </span>
        </div>
      </a>
    </li>
  );
}
