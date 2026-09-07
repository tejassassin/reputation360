import React, { useState, useEffect, useRef } from "react";
import HomeContactLeadForm from "@/components/HomeContactLeadForm.jsx";
import {
  FREE_REPUTATION_SCAN_LABEL,
  freeScanLinkProps,
} from "@/constants/freeRiskScan";

function useDesktopStats() {
  const [desktop, setDesktop] = useState(false);
  const [StatNumber, setStatNumber] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!desktop) return undefined;
    let cancelled = false;
    import("./StatNumber.jsx").then((mod) => {
      if (!cancelled) setStatNumber(() => mod.StatNumber);
    });
    return () => {
      cancelled = true;
    };
  }, [desktop]);

  return { desktop, StatNumber };
}

const HERO_TRUST_POINTS = [
  {
    end: 7,
    suffix: "",
    static: "7",
    title: "Years of Experience",
    detail: "in Online Reputation Management",
  },
  {
    end: 97,
    suffix: "%",
    static: "97%",
    title: "Success Rate",
    detail: "in suppressing negative content from page one",
  },
  {
    end: 1100,
    suffix: "+",
    static: "1,100+",
    title: "Happy Clients",
    detail: "with successful suppression outcomes",
  },
];

function HeroTrustPoints({ statsInView, desktop, StatNumber }) {
  const statValue = (node) => {
    if (!desktop || !StatNumber) {
      return node.static;
    }
    return (
      <StatNumber
        className="font-bold tabular-nums text-green"
        end={node.end}
        suffix={node.suffix}
        start={statsInView}
      />
    );
  };

  return (
    <div className="mt-6 border-t border-white/20 pt-6 lg:mt-7 lg:pt-7">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5 lg:gap-8">
        {HERO_TRUST_POINTS.map((point, index) => (
          <div
            key={point.title}
            className={
              index > 0
                ? "border-t border-white/15 pt-6 sm:border-t-0 sm:border-l sm:pl-5 sm:pt-0 lg:pl-8"
                : undefined
            }
          >
            <p className="font-heading text-[2.35rem] font-bold leading-none text-green sm:text-4xl lg:text-[2.75rem]">
              {statValue(point)}
            </p>
            <p className="mt-2 font-heading text-[13px] font-semibold uppercase leading-snug tracking-[0.1em] text-white sm:text-sm">
              {point.title}
            </p>
            <p className="mt-1 font-body text-[13px] leading-relaxed text-white/75 sm:text-sm sm:whitespace-nowrap">
              {point.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const sectionRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);
  const { desktop, StatNumber } = useDesktopStats();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsInView(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const badgeCount =
    desktop && StatNumber ? (
      <StatNumber
        className="inline font-semibold tabular-nums text-green"
        end={1100}
        suffix="+"
        start={statsInView}
      />
    ) : (
      <span className="inline font-semibold tabular-nums text-green">1,100+</span>
    );

  const headlineLine =
    "block text-[1.85rem] leading-[1.15] text-white md:text-[2.5rem] lg:text-[3rem] xl:text-[3.35rem]";

  return (
    <section
      ref={sectionRef}
      className="r360-hero-bg flex max-h-[100dvh] min-h-[100dvh] flex-col overflow-hidden text-white max-md:pt-[calc(env(safe-area-inset-top)+5rem)] md:pt-[calc(env(safe-area-inset-top)+6.5rem)] lg:pt-[calc(env(safe-area-inset-top)+7rem)]"
    >
      <div className="relative mx-auto flex w-full max-w-[calc(100vw-4rem)] flex-1 items-center px-5 py-4 text-left sm:max-w-[calc(100vw-6rem)] sm:px-6 md:max-w-[calc(100vw-9rem)] md:px-8 lg:max-w-[calc(100vw-12rem)] lg:px-10 xl:max-w-[calc(100vw-16rem)] xl:px-12 2xl:max-w-[calc(100vw-20rem)] 2xl:px-14">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_30rem] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_32rem] xl:gap-12">
          <div className="min-w-0">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-75 max-md:hidden animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
              </span>
              <span className="font-body text-sm font-medium text-green sm:text-base">
                Trusted by {badgeCount} clients across the U.S.
              </span>
            </div>

            <div className="relative mt-4 overflow-hidden md:mt-5">
              <div
                className="r360-hero-dot-grid pointer-events-none absolute inset-0 z-0 opacity-[0.38] md:opacity-[0.42]"
                aria-hidden
              />
              <h1 className="relative z-10 text-left font-heading font-bold tracking-tight">
                <span className={headlineLine}>Take control of your</span>
                <span className={`mt-1.5 block ${headlineLine} md:mt-2 lg:whitespace-nowrap`}>
                  Online Reputation{" "}
                  <span className="inline rounded-md bg-[#6d5bd0] px-2.5 py-0.5 text-white md:px-3 md:py-1">
                    on your terms
                  </span>
                </span>
                <span className={`mt-1.5 ${headlineLine} text-white/90 md:mt-2`}>
                  not Google&apos;s or AI&apos;s
                </span>
              </h1>
            </div>

            <p className="mb-0 mt-3 max-w-2xl font-body text-lg leading-relaxed text-white/90 md:mt-4 md:text-xl">
              Because one negative result can quietly undermine years of credibility.
            </p>

            <a
              {...freeScanLinkProps}
              className="ha-pill mt-4 inline-flex w-full max-w-md items-center justify-center rounded-xl bg-green px-8 py-3 text-center font-heading text-lg font-semibold text-white shadow-sm transition hover:brightness-95 sm:mt-5 sm:w-auto sm:px-9 sm:py-3.5"
            >
              {FREE_REPUTATION_SCAN_LABEL}
            </a>

            <HeroTrustPoints
              statsInView={statsInView}
              desktop={desktop}
              StatNumber={StatNumber}
            />
          </div>

          <div className="min-w-0 lg:justify-self-end lg:pr-0">
            <HomeContactLeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
