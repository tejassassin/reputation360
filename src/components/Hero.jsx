import HomeContactLeadForm from "@/components/HomeContactLeadForm.jsx";
import {
  FREE_REPUTATION_SCAN_LABEL,
  freeScanLinkProps,
} from "@/constants/freeRiskScan";

const HERO_STATS = [
  { value: "7", label: "Years of Experience", detail: "in Online Reputation Management" },
  { value: "97%", label: "Success Rate", detail: "suppressing negative page-one results" },
  { value: "1,100+", label: "Happy Clients", detail: "across the U.S." },
];

function Hero() {
  const headlineLine =
    "r360-hero-headline-line max-w-full leading-[1.08] text-white max-lg:text-[1.75rem] sm:max-lg:text-[2.35rem]";

  const scanButtonClass =
    "ha-pill inline-flex w-full items-center justify-center rounded-xl bg-green px-7 py-3.5 text-center font-heading text-base font-semibold text-white shadow-[0_8px_24px_-8px_rgba(76,175,80,0.65)] transition hover:brightness-95 sm:w-auto";

  return (
    <section className="r360-hero-bg flex min-h-[100dvh] flex-col overflow-x-clip text-white max-md:pt-[calc(env(safe-area-inset-top)+5rem)] md:pt-[calc(env(safe-area-inset-top)+6.5rem)] lg:min-h-[calc(100dvh-0px)] lg:pt-[calc(env(safe-area-inset-top)+7rem)]">
      <div className="relative mx-auto flex w-full min-w-0 max-w-[1180px] flex-1 flex-col justify-center px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid w-full min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-stretch lg:gap-10 xl:gap-12">
          <div className="r360-hero-copy-column order-1 flex min-w-0 flex-col lg:order-none lg:min-h-full">
            <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-green/35 bg-green/10 px-3 py-1.5 text-[13px] font-medium text-green sm:px-4 sm:py-2 sm:text-sm">
              <span aria-hidden className="text-green">
                ★
              </span>
              Trusted by 1,100+ clients across the U.S.
            </div>

            <div className="relative mt-4 lg:mt-5">
              <div
                className="r360-hero-dot-grid pointer-events-none absolute inset-0 z-0 opacity-[0.35]"
                aria-hidden
              />
              <h1 className="relative z-10 max-w-[18ch] text-left font-heading font-bold tracking-tight lg:max-w-none">
                <span className={`block ${headlineLine}`}>Take control of your</span>
                <span className={`mt-1 block ${headlineLine}`}>
                  Online Reputation{" "}
                  <span className="text-green">on your terms</span>
                </span>
                <span className={`mt-1 block ${headlineLine} text-white/90`}>
                  not Google&apos;s or AI&apos;s
                </span>
              </h1>
            </div>

            <p className="mb-0 mt-4 max-w-lg font-body text-base leading-relaxed text-white/80 lg:text-[17px]">
              Because one negative result can quietly undermine years of credibility.
            </p>

            <div className="mt-6 hidden lg:block">
              <a {...freeScanLinkProps} className={scanButtonClass}>
                {FREE_REPUTATION_SCAN_LABEL}
              </a>
            </div>

            <div className="mt-8 hidden border-t border-white/15 pt-8 lg:mt-auto lg:block">
              <div className="grid grid-cols-3 gap-4 xl:gap-6">
                {HERO_STATS.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={
                      index > 0
                        ? "border-l border-white/15 pl-4 xl:pl-6"
                        : undefined
                    }
                  >
                    <p className="font-heading text-3xl font-bold leading-none text-green xl:text-[2.75rem]">
                      {stat.value}
                    </p>
                    <p className="mt-2 font-heading text-[11px] font-semibold uppercase leading-snug tracking-[0.08em] text-white xl:text-xs">
                      {stat.label}
                    </p>
                    <p className="mt-1 hidden font-body text-xs leading-snug text-white/70 xl:block">
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-20 order-2 min-w-0 w-full lg:order-none lg:flex lg:flex-col lg:justify-center">
            <HomeContactLeadForm />
          </div>

          <div className="order-3 flex flex-col gap-5 border-t border-white/15 pt-6 lg:order-none lg:hidden">
            <a {...freeScanLinkProps} className={scanButtonClass}>
              {FREE_REPUTATION_SCAN_LABEL}
            </a>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {HERO_STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className={
                    index > 0 ? "border-l border-white/15 pl-2 sm:pl-4" : undefined
                  }
                >
                  <p className="font-heading text-xl font-bold leading-none text-green sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-heading text-[9px] font-semibold uppercase leading-snug tracking-[0.06em] text-white sm:text-[10px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
