import React from "react";
import { ConsultationCtas } from "@/components/ConsultationCtas";
import { Highlight } from "@/components/ui/hero-highlight";
import { HeroHighlightLite } from "@/components/ui/hero-highlight-lite";
import { useState, useEffect, useRef } from "react";
import { StatNumber } from "@/components/StatNumber.jsx";

function Hero() {
  const sectionRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsInView(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col overflow-hidden bg-linear-to-br from-navy via-slate to-navy text-white max-md:min-h-0 max-md:pb-6 max-md:pt-[calc(env(safe-area-inset-top)+5.25rem)] md:min-h-[100dvh] md:pt-[calc(env(safe-area-inset-top)+7.25rem)] lg:pt-[calc(env(safe-area-inset-top)+8.5rem)]"
    >
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 pb-2 pt-0 text-center max-md:gap-3 md:min-h-0 md:flex-1 md:justify-evenly md:gap-0 md:px-6 md:py-[2vh] lg:px-8">
        {/* Main Content - Centered (shrink-0 keeps CTAs from being pushed below the fold) */}
        <div className="flex shrink-0 flex-col items-center justify-center gap-3 md:gap-[1.8vh]">
          {/* Trust Badge */}
          <div className="inline-flex w-fit items-center gap-2 self-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm max-md:mb-5 max-md:mt-6 sm:px-4 sm:py-2 md:mb-0 md:mt-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
            </span>
            <span className="font-body text-xs sm:text-sm text-white/90">
              Trusted by{" "}
              <StatNumber
                className="inline font-semibold tabular-nums text-white"
                end={1100}
                suffix="+"
                start={statsInView}
              />{" "}
              clients globally
            </span>
          </div>

          <HeroHighlightLite containerClassName="h-auto bg-transparent dark:bg-transparent">
            <h1 className="mx-auto flex w-full flex-col items-center gap-1 text-center font-heading font-bold tracking-tight md:mx-4 md:my-3 md:max-w-none md:gap-0 md:text-balance md:text-4xl md:leading-[1.3] lg:text-5xl">
              <span className="block max-w-[20rem] text-[1.375rem] leading-tight text-white md:max-w-none md:text-4xl md:leading-[1.35] lg:text-5xl lg:leading-[1.3]">
                Take control of your
              </span>
              <span className="block max-w-[20rem] text-[1.375rem] leading-tight text-white md:max-w-none md:text-4xl md:leading-[1.35] lg:text-5xl lg:leading-[1.3]">
                online reputation
              </span>
              <span className="block max-w-[21rem] text-[1.375rem] leading-snug text-white md:max-w-none md:text-4xl md:leading-[1.35] lg:text-5xl lg:leading-[1.3]">
                <Highlight className="max-md:!px-1 max-md:!pb-0">
                  on your terms
                </Highlight>
                <span className="text-white/90">,</span> not Google&apos;s
              </span>
            </h1>

            <p className="mx-auto mb-0 max-w-[20rem] text-pretty font-body text-sm leading-relaxed text-white/90 max-md:mb-5 max-md:mt-4 md:mx-4 md:mb-3 md:mt-3 md:max-w-none md:whitespace-nowrap md:text-lg">
              Because one negative result can quietly undermine years of credibility.
            </p>
          </HeroHighlightLite>

          <ConsultationCtas variant="hero" />
        </div>

        {/* Stats */}
        <div className="mx-auto grid w-full max-w-4xl shrink-0 grid-cols-3 gap-1.5 max-md:mt-6 md:mt-0 sm:gap-4 lg:gap-6">
          <div className="group relative rounded-lg border border-white/10 bg-white/5 p-2 backdrop-blur-sm transition-all duration-300 hover:border-green/30 hover:bg-white/10 sm:rounded-2xl sm:p-4 lg:p-5">
            <div className="absolute inset-0 rounded-lg bg-linear-to-br from-green/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 sm:rounded-2xl" />
            <div className="relative">
              <p className="mb-0.5 font-heading text-lg font-bold text-green sm:mb-0.5 sm:text-3xl lg:mb-1 lg:text-5xl">
                <StatNumber end={7} start={statsInView} />
              </p>
              <p className="mb-0 font-heading text-[0.625rem] font-semibold uppercase leading-tight tracking-wide text-white sm:mb-0.5 sm:text-xs lg:text-sm">
                Years of Experience
              </p>
              <p className="font-body text-xs text-white/60 hidden sm:block">
                in online reputation management
              </p>
            </div>
          </div>
          <div className="group relative rounded-lg border border-white/10 bg-white/5 p-2 backdrop-blur-sm transition-all duration-300 hover:border-green/30 hover:bg-white/10 sm:rounded-2xl sm:p-4 lg:p-5">
            <div className="absolute inset-0 rounded-lg bg-linear-to-br from-green/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 sm:rounded-2xl" />
            <div className="relative">
              <p className="mb-0.5 font-heading text-lg font-bold text-green sm:mb-0.5 sm:text-3xl lg:mb-1 lg:text-5xl">
                <StatNumber end={97} suffix="%" start={statsInView} />
              </p>
              <p className="mb-0 font-heading text-[0.625rem] font-semibold uppercase leading-tight tracking-wide text-white sm:mb-0.5 sm:text-xs lg:text-sm">
                Success Rate
              </p>
              <p className="font-body text-xs text-white/60 hidden sm:block">
                in pushing negative links off page one
              </p>
            </div>
          </div>
          <div className="group relative rounded-lg border border-white/10 bg-white/5 p-2 backdrop-blur-sm transition-all duration-300 hover:border-green/30 hover:bg-white/10 sm:rounded-2xl sm:p-4 lg:p-5">
            <div className="absolute inset-0 rounded-lg bg-linear-to-br from-green/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 sm:rounded-2xl" />
            <div className="relative">
              <p className="mb-0.5 font-heading text-lg font-bold text-green sm:mb-0.5 sm:text-3xl lg:mb-1 lg:text-5xl">
                <StatNumber end={1100} suffix="+" start={statsInView} />
              </p>
              <p className="mb-0 font-heading text-[0.625rem] font-semibold uppercase leading-tight tracking-wide text-white sm:mb-0.5 sm:text-xs lg:text-sm">
                Happy Clients
              </p>
              <p className="font-body text-xs text-white/60 hidden sm:block">
                with successful suppression outcomes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
