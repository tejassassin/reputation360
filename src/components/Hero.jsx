import React, { useState, useEffect, useRef } from "react";
import { ConsultationCtas } from "@/components/ConsultationCtas";
import { Highlight } from "@/components/ui/hero-highlight-mark";
import { HeroHighlightLite } from "@/components/ui/hero-highlight-lite";

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

function HeroStats({ statsInView, desktop, StatNumber }) {
  const statValue = (node) => {
    if (!desktop || !StatNumber) {
      return node.static;
    }
    return <StatNumber end={node.end} suffix={node.suffix} start={statsInView} />;
  };

  return (
    <div className="mx-auto grid w-full max-w-6xl shrink-0 grid-cols-3 gap-1.5 max-md:mt-6 md:mt-0 sm:gap-4 lg:max-w-7xl lg:gap-6">
      <div className="group relative rounded-lg border border-white/10 bg-white/5 p-2 max-md:backdrop-blur-none backdrop-blur-sm transition-all duration-300 hover:border-green/30 hover:bg-white/10 sm:rounded-2xl sm:p-4 lg:p-5">
        <div className="absolute inset-0 rounded-lg bg-linear-to-br from-green/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 sm:rounded-2xl" />
        <div className="relative">
          <p className="mb-1 font-heading text-2xl font-bold text-green sm:mb-1 sm:text-4xl lg:mb-1.5 lg:text-6xl">
            {statValue({ end: 7, static: "7" })}
          </p>
          <p className="mb-0.5 font-heading text-xs font-semibold uppercase leading-tight tracking-wide text-white sm:mb-1 sm:text-sm lg:text-base">
            Years of Experience
          </p>
          <p className="font-body hidden whitespace-nowrap text-sm text-white/70 sm:block sm:text-base">
            in Online Reputation Management
          </p>
        </div>
      </div>
      <div className="group relative rounded-lg border border-white/10 bg-white/5 p-2 max-md:backdrop-blur-none backdrop-blur-sm transition-all duration-300 hover:border-green/30 hover:bg-white/10 sm:rounded-2xl sm:p-4 lg:p-5">
        <div className="absolute inset-0 rounded-lg bg-linear-to-br from-green/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 sm:rounded-2xl" />
        <div className="relative">
          <p className="mb-1 font-heading text-2xl font-bold text-green sm:mb-1 sm:text-4xl lg:mb-1.5 lg:text-6xl">
            {statValue({ end: 97, suffix: "%", static: "97%" })}
          </p>
          <p className="mb-0.5 font-heading text-xs font-semibold uppercase leading-tight tracking-wide text-white sm:mb-1 sm:text-sm lg:text-base">
            Success Rate
          </p>
          <p className="font-body hidden whitespace-nowrap text-sm text-white/70 sm:block sm:text-base">
            in suppressing negative content from page one
          </p>
        </div>
      </div>
      <div className="group relative rounded-lg border border-white/10 bg-white/5 p-2 max-md:backdrop-blur-none backdrop-blur-sm transition-all duration-300 hover:border-green/30 hover:bg-white/10 sm:rounded-2xl sm:p-4 lg:p-5">
        <div className="absolute inset-0 rounded-lg bg-linear-to-br from-green/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 sm:rounded-2xl" />
        <div className="relative">
          <p className="mb-1 font-heading text-2xl font-bold text-green sm:mb-1 sm:text-4xl lg:mb-1.5 lg:text-6xl">
            {statValue({ end: 1100, suffix: "+", static: "1,100+" })}
          </p>
          <p className="mb-0.5 font-heading text-xs font-semibold uppercase leading-tight tracking-wide text-white sm:mb-1 sm:text-sm lg:text-base">
            Happy Clients
          </p>
          <p className="font-body hidden whitespace-nowrap text-sm text-white/70 sm:block sm:text-base">
            with successful suppression outcomes
          </p>
        </div>
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
        className="inline font-semibold tabular-nums text-white"
        end={1100}
        suffix="+"
        start={statsInView}
      />
    ) : (
      <span className="inline font-semibold tabular-nums text-white">1,100+</span>
    );

  return (
    <section
      ref={sectionRef}
      className="flex flex-col overflow-hidden bg-navy text-white max-md:min-h-0 max-md:pb-6 max-md:pt-[calc(env(safe-area-inset-top)+5.25rem)] md:min-h-[100dvh] md:pt-[calc(env(safe-area-inset-top)+7.25rem)] lg:pt-[calc(env(safe-area-inset-top)+8.5rem)]"
    >
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 pb-2 pt-0 text-center max-md:gap-3 md:min-h-0 md:flex-1 md:justify-evenly md:gap-0 md:px-6 md:py-[2vh] lg:px-8">
        <div className="flex shrink-0 flex-col items-center justify-center gap-3 md:gap-[1.8vh]">
          <div className="inline-flex w-fit items-center gap-2 self-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 max-md:mb-2 max-md:mt-6 max-md:backdrop-blur-none backdrop-blur-sm sm:px-4 sm:py-2 md:mb-0 md:mt-0">
            <span className="flex h-2 w-2 relative max-md:static">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-75 max-md:hidden animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
            </span>
            <span className="font-body text-sm sm:text-base text-white/90">
              Trusted by {badgeCount} clients across the U.S.
            </span>
          </div>

          <div className="relative w-full max-w-[22rem] overflow-hidden px-2 py-4 sm:max-w-xl md:max-w-5xl md:px-6 md:py-5 lg:max-w-6xl">
            <div
              className="r360-hero-dot-grid pointer-events-none absolute inset-0 z-0 opacity-[0.38] md:opacity-[0.42]"
              aria-hidden
            />
            <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4">
              <HeroHighlightLite containerClassName="h-auto bg-transparent dark:bg-transparent">
                <h1 className="mx-auto flex w-full flex-col items-center gap-1 text-center font-heading font-bold tracking-tight md:mx-4 md:my-3 md:max-w-none md:gap-0 md:text-balance md:text-5xl md:leading-[1.25] lg:text-6xl">
                  <span className="block max-w-[20rem] text-2xl leading-tight text-white md:max-w-none md:text-5xl md:leading-[1.25] lg:text-6xl lg:leading-[1.2]">
                    Take control of your
                  </span>
                  <span className="block max-w-[20rem] text-2xl leading-tight text-white md:max-w-none md:text-5xl md:leading-[1.25] lg:text-6xl lg:leading-[1.2]">
                    Online Reputation{" "}
                    <Highlight className="max-md:!px-1 max-md:!pb-0">
                      on your terms
                    </Highlight>
                  </span>
                  <span className="block max-w-[21rem] text-2xl leading-snug text-white md:max-w-none md:text-5xl md:leading-[1.25] lg:text-6xl lg:leading-[1.2]">
                    <span className="text-white/90">not Google&apos;s or AI&apos;s</span>
                  </span>
                </h1>

                <p className="mx-auto mb-0 max-w-[20rem] text-pretty font-body text-base leading-relaxed text-white/90 max-md:mb-0 max-md:mt-4 md:mx-4 md:mb-0 md:mt-4 md:max-w-3xl md:text-xl lg:max-w-none lg:whitespace-nowrap">
                  Because one negative result can quietly undermine years of credibility.
                </p>
              </HeroHighlightLite>

              <ConsultationCtas variant="hero" />
            </div>
          </div>
        </div>

        <HeroStats
          statsInView={statsInView}
          desktop={desktop}
          StatNumber={StatNumber}
        />
      </div>
    </section>
  );
}

export default Hero;
