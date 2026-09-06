import { ArrowRight } from "lucide-react";
import { internalAnchorProps } from "../lib/internalLinkProps.js";

const cardClassName =
  "ha-lift group relative flex h-full min-h-[16.5rem] flex-col overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/12 to-white/5 p-5 text-left no-underline shadow-[0_10px_36px_-8px_rgba(8,18,36,0.55)] ring-1 ring-inset ring-white/10 backdrop-blur-md transition-all duration-300 sm:min-h-[17rem] sm:p-6 hover:-translate-y-0.5 hover:border-green/45 hover:from-white/16 hover:to-white/7 hover:shadow-[0_14px_42px_-10px_rgba(31,59,100,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy";

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
      <a href={href} {...internalAnchorProps(href)} className={cardClassName}>
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-bl-full bg-slate/20 transition-transform duration-500 group-hover:scale-150"
          aria-hidden
        />
        <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-navy/90 text-green shadow-sm shadow-navy/40 transition group-hover:border-green/40 sm:mb-4 sm:h-12 sm:w-12">
          <Icon className="h-5 w-5 stroke-[1.6] sm:h-6 sm:w-6" aria-hidden />
        </div>
        <h3 className="font-heading mb-0 min-h-0 flex-1 text-[1.05rem] font-bold leading-snug text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:text-lg">
          {title}
        </h3>
        <div className="mt-auto flex shrink-0 items-center justify-end border-t border-white/12 pt-3">
          <span
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/35 bg-transparent text-white transition duration-300 group-hover:scale-105 group-hover:border-green/60 group-hover:bg-green group-hover:text-navy sm:h-9 sm:w-9"
            aria-hidden
          >
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
        </div>
      </a>
    </li>
  );
}
