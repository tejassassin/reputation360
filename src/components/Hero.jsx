import HomeContactLeadForm from "@/components/HomeContactLeadForm.jsx";
import { Highlight } from "@/components/ui/hero-highlight-mark";
import { HERO_FREE_REPUTATION_SCAN_CTA } from "@/constants/homeConsultation.js";
import { freeScanLinkProps } from "@/constants/freeRiskScan";
import { trackFreeReputationScanClick } from "@/lib/conversionAnalytics.js";

const HERO_STATS = [
  { value: "7", label: "Years of Experience", detail: "in Online Reputation Management" },
  { value: "97%", label: "Success Rate", detail: "suppressing negative page-one results" },
  { value: "1,100+", label: "Happy Clients", detail: "across the U.S." },
];

function HeroStatsRow({ compact = false }) {
  return (
    <div
      className={
        compact
          ? "flex min-w-0 gap-4 overflow-x-auto pb-1 sm:gap-6"
          : "r360-hero-stats-row"
      }
    >
      {HERO_STATS.map((stat, index) => (
        <div
          key={stat.label}
          className={
            compact
              ? index > 0
                ? "min-w-[7.5rem] shrink-0 border-l border-white/15 pl-4 sm:min-w-[8.5rem]"
                : "min-w-[7.5rem] shrink-0 sm:min-w-[8.5rem]"
              : index > 0
                ? "min-w-0 border-l border-white/15 pl-4 lg:pl-5"
                : "min-w-0"
          }
        >
          <p className="r360-hero-stat-value font-heading text-green">{stat.value}</p>
          <p className="mt-1.5 font-heading text-[10px] font-semibold uppercase leading-snug tracking-[0.08em] text-white sm:text-[11px]">
            {stat.label}
          </p>
          {!compact ? (
            <p className="mt-1 font-body text-[11px] leading-snug text-white/70 sm:text-xs">
              {stat.detail}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function Hero() {
  const headlineLine = "r360-hero-headline-line text-white";

  const scanButtonClass =
    "r360-hero-cta ha-pill inline-flex w-full items-center justify-center rounded-xl bg-green px-7 text-center font-heading text-white shadow-[0_8px_24px_-8px_rgba(76,175,80,0.55)] transition hover:brightness-95 sm:w-auto";

  return (
    <section className="r360-hero-bg r360-hero-section overflow-x-clip text-white">
      <div className="r360-site-container r360-hero-inner">
        <div className="r360-hero-grid">
          <div className="r360-hero-copy-column order-1 flex min-w-0 flex-col lg:order-none">
            <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-green/35 bg-green/10 px-3 py-1.5 text-[13px] font-medium text-white sm:px-4 sm:py-2 sm:text-sm">
              <span aria-hidden className="text-white">
                ★
              </span>
              Trusted by 1,100+ clients across the U.S.
            </div>

            <div className="relative r360-hero-headline-block">
              <div className="r360-hero-dot-grid pointer-events-none absolute inset-0 z-0" aria-hidden />
              <h1 className="r360-hero-headline relative z-10 text-left font-heading">
                <span className={headlineLine}>Take control of your</span>
                <span className={headlineLine}>
                  Online Reputation{" "}
                  <Highlight className="r360-hero-headline-terms max-md:!px-1 max-md:!pb-0">
                    on your terms
                  </Highlight>
                </span>
                <span className={`${headlineLine} text-white/90`}>
                  not Google&apos;s or AI&apos;s
                </span>
              </h1>
            </div>

            <p className="r360-hero-lead mb-0 font-body text-white/85">
              Because one negative result can quietly undermine years of credibility.
            </p>

            <div className="r360-hero-cta-wrap hidden lg:block">
              <a
                {...freeScanLinkProps}
                onClick={() => trackFreeReputationScanClick("hero")}
                className={scanButtonClass}
              >
                {HERO_FREE_REPUTATION_SCAN_CTA}
              </a>
            </div>

            <div className="r360-hero-stats-block hidden border-t border-white/15 lg:block">
              <HeroStatsRow />
            </div>
          </div>

          <div className="r360-hero-form-column relative z-20 order-2 min-w-0 lg:order-none">
            <div className="r360-hero-form-wrap">
              <HomeContactLeadForm />
            </div>
          </div>

          <div className="order-3 flex w-full min-w-0 flex-col gap-6 border-t border-white/15 pt-6 lg:hidden">
            <a
              {...freeScanLinkProps}
              onClick={() => trackFreeReputationScanClick("hero_mobile")}
              className={scanButtonClass}
            >
              {HERO_FREE_REPUTATION_SCAN_CTA}
            </a>
            <HeroStatsRow compact />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
