import { calendlyCtaButtonClass, calendlyNewTabProps } from "@/constants/scheduling";
import {
  FREE_REPUTATION_SCAN_LABEL,
  freeScanNewTabProps,
} from "@/constants/freeRiskScan";
import { cn } from "@/lib/utils";

const VARIANTS = {
  hero: {
    wrapper:
      "flex w-full max-w-md shrink-0 flex-col items-stretch justify-center gap-2.5 px-0 max-md:mt-2 sm:max-w-none sm:flex-row sm:items-center sm:gap-3 sm:px-0 md:mt-0",
    freeScan:
      "ha-pill w-full rounded-xl border-2 border-white/35 bg-white/10 px-6 py-2.5 text-center text-sm font-heading font-semibold text-white backdrop-blur-sm transition hover:border-white/55 hover:bg-white/15 sm:w-auto sm:px-8 sm:py-4 sm:text-lg",
    consult:
      "ha-pill group relative w-full cursor-pointer rounded-xl bg-cta-consult px-6 py-2.5 text-center text-sm font-heading font-semibold text-white shadow-lg shadow-cta-consult/30 transition-all duration-300 hover:brightness-95 hover:shadow-xl hover:shadow-cta-consult/35 sm:w-auto sm:px-8 sm:py-4 sm:text-lg",
    consultShowArrow: true,
  },
  onDark: {
    wrapper: "flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap",
    freeScan:
      "ha-pill inline-flex items-center justify-center rounded-xl border-2 border-white/35 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white/55 hover:bg-white/15 md:px-10 md:text-base",
    consult: cn(
      "ha-pill inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-heading text-sm font-bold shadow-lg shadow-cta-consult/30 transition hover:brightness-95 sm:w-auto md:px-10 md:text-base",
      calendlyCtaButtonClass,
    ),
  },
  onLight: {
    wrapper: "flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center",
    freeScan:
      "ha-pill inline-flex items-center justify-center rounded-xl border-2 border-[#02254d]/25 bg-white px-6 py-3 text-sm font-bold text-[#02254d] shadow-sm transition hover:border-[#02254d]/45 hover:bg-slate-50 md:px-8 md:py-4 md:text-base",
    consult:
      "ha-pill inline-flex items-center justify-center rounded-xl bg-cta-consult px-8 py-3 text-sm font-bold text-white shadow-md shadow-cta-consult/25 transition hover:brightness-95 md:px-10 md:py-4 md:text-base",
  },
  inlineLight: {
    wrapper: "flex flex-wrap items-center gap-3",
    freeScan:
      "ha-pill inline-flex items-center gap-2 rounded-[8px] border-2 border-cta-consult/50 bg-white px-5 py-3 text-sm font-semibold text-[#02254d] shadow-sm transition hover:bg-cta-consult/10",
    consult:
      "ha-pill inline-flex items-center gap-2 rounded-[8px] bg-cta-consult px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cta-consult/25 transition hover:brightness-95",
  },
  inlineDarkFooter: {
    wrapper: "flex flex-wrap items-center justify-center gap-3",
    freeScan:
      "ha-pill inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/35 bg-white/10 px-5 py-3 text-sm font-heading font-medium text-white backdrop-blur-sm transition hover:border-white/55 hover:bg-white/15",
    consult:
      "ha-pill inline-flex items-center justify-center gap-2 rounded-lg bg-cta-consult px-5 py-3 text-sm font-heading font-medium text-white shadow-sm transition-all duration-200 hover:brightness-95 hover:shadow-lg hover:shadow-cta-consult/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#072f5f]",
  },
  compact: {
    wrapper: "flex flex-col gap-4 sm:flex-row sm:items-center",
    freeScan:
      "ha-pill m-auto inline-block cursor-pointer rounded-lg border-2 border-white/35 bg-white/10 px-6 py-3 font-heading font-semibold whitespace-nowrap text-white backdrop-blur-sm transition hover:border-white/55 hover:bg-white/15",
    consult:
      "ha-pill m-auto inline-block cursor-pointer rounded-lg bg-cta-consult px-6 py-3 font-heading font-semibold whitespace-nowrap text-white shadow-md shadow-cta-consult/25 transition-colors hover:brightness-95",
  },
};

function ConsultArrow() {
  return (
    <svg
      className="h-5 w-5 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

/**
 * Free Reputation Scan first, then book-a-consultation (Calendly). Use wherever consultation CTAs appear.
 */
export function ConsultationCtas({
  variant = "onLight",
  consultLabel = "Book a Free Consultation",
  consultHref,
  consultLinkProps,
  className,
  wrapperClassName,
  freeScanClassName,
  consultClassName,
  consultSuffix,
}) {
  const styles = VARIANTS[variant] ?? VARIANTS.onLight;
  const consultProps = consultHref
    ? { href: consultHref, ...consultLinkProps }
    : calendlyNewTabProps;

  return (
    <div className={cn(styles.wrapper, wrapperClassName, className)}>
      <a {...freeScanNewTabProps} className={cn(styles.freeScan, freeScanClassName)}>
        {FREE_REPUTATION_SCAN_LABEL}
      </a>
      <a {...consultProps} className={cn(styles.consult, consultClassName)}>
        {styles.consultShowArrow ? (
          <span className="flex items-center justify-center gap-2">
            {consultLabel}
            <ConsultArrow />
          </span>
        ) : (
          <>
            {consultLabel}
            {consultSuffix}
          </>
        )}
      </a>
    </div>
  );
}
