import React from "react";
import { calendlyNewTabProps } from "@/constants/scheduling";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useState, useEffect, useRef } from "react";

function Hero() {
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsInView(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function StatNumber({ end, suffix = "", duration = 1500, start = false }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (!start) return;

      let startTimestamp;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const nextValue = Math.floor(progress * end);
        setValue(nextValue);
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      const id = requestAnimationFrame(step);
      return () => cancelAnimationFrame(id);
    }, [end, duration, start]);

    return (
      <>
        {value.toLocaleString()}
        {suffix}
      </>
    );
  }

  return (
    <section className="h-dvh flex flex-col bg-linear-to-br from-navy via-slate to-navy text-white overflow-hidden pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative flex-1 flex flex-col justify-evenly py-[2vh]">
        {/* Main Content - Centered */}
        <div className="flex flex-col justify-center items-center gap-[1.5vh] sm:gap-[2vh]">
          {/* Trust Badge */}
          <div className="inline-flex w-fit items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 self-center">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
            </span>
            <span className="font-body text-xs sm:text-sm text-white/90">
              Trusted by 1,700+ clients globally
            </span>
          </div>

          <HeroHighlight containerClassName="h-auto bg-transparent dark:bg-transparent">
            <h1 className="font-heading font-bold text-2xl sm:text-4xl lg:text-5xl mx-2 my-1 sm:my-3 sm:mx-4 leading-[1.3] tracking-tight">
              Take control of your
              <br className="hidden sm:block" />
              online reputation <Highlight>on your terms</Highlight>
              <span className="text-white/90">,</span>
              <br className="hidden sm:block" />
              <span className="text-white">not Google's</span>
            </h1>

            <p className="font-body text-white/90 text-sm sm:text-lg mx-2 mt-1 mb-1 sm:mx-4 sm:mb-3">
              Because one negative result can quietly undermine years of
              credibility.
            </p>
          </HeroHighlight>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-0">
            <a
              {...calendlyNewTabProps}
              className="ha-pill group relative w-full cursor-pointer rounded-xl bg-green px-8 py-3 text-center text-base font-heading font-semibold text-white shadow-lg shadow-green/25 transition-all duration-300 hover:bg-green/90 hover:shadow-xl hover:shadow-green/30 sm:w-auto sm:py-4 sm:text-lg"
            >
              <span className="flex items-center justify-center gap-2">
                Book a Free Consultation
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Stats - Pushed to bottom */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 max-w-4xl mx-auto w-full shrink-0"
        >
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-5 hover:bg-white/10 hover:border-green/30 transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-green/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="font-heading font-bold text-xl sm:text-3xl lg:text-5xl text-green mb-0.5 lg:mb-1">
                <StatNumber end={13} start={statsInView} />
              </p>
              <p className="font-heading font-semibold text-white text-[9px] sm:text-xs lg:text-sm uppercase tracking-wider mb-0.5">
                Years of Experience
              </p>
              <p className="font-body text-xs text-white/60 hidden sm:block">
                in online reputation management
              </p>
            </div>
          </div>
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-5 hover:bg-white/10 hover:border-green/30 transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-green/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="font-heading font-bold text-xl sm:text-3xl lg:text-5xl text-green mb-0.5 lg:mb-1">
                <StatNumber end={97} suffix="%" start={statsInView} />
              </p>
              <p className="font-heading font-semibold text-white text-[9px] sm:text-xs lg:text-sm uppercase tracking-wider mb-0.5">
                Success Rate
              </p>
              <p className="font-body text-xs text-white/60 hidden sm:block">
                in pushing negative links off page one
              </p>
            </div>
          </div>
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-5 hover:bg-white/10 hover:border-green/30 transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-green/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="font-heading font-bold text-xl sm:text-3xl lg:text-5xl text-green mb-0.5 lg:mb-1">
                <StatNumber end={1700} suffix="+" start={statsInView} />
              </p>
              <p className="font-heading font-semibold text-white text-[9px] sm:text-xs lg:text-sm uppercase tracking-wider mb-0.5">
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
