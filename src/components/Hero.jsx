import React from "react";
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
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
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
    <section className="bg-linear-to-br from-navy via-slate to-navy text-white py-8 lg:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
          </span>
          <span className="font-body text-sm text-white/90">
            Trusted by 1,700+ businesses worldwide
          </span>
        </div>

        <HeroHighlight containerClassName="h-auto bg-transparent dark:bg-transparent">
          <h1 className="font-heading font-bold text-4xl md:text-3xl lg:text-5xl m-8  tracking-tight leading-tight">
            Take control of your
            <br className="hidden sm:block" />
            online reputation <Highlight>on your terms</Highlight>
            ,
            <br className="hidden sm:block" />
            <span className="text-white">not Google's.</span>
          </h1>
        </HeroHighlight>

        <p className="font-body text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed mt-5">
          Comprehensive reputation management solutions to help businesses and
          individuals maintain a positive online presence and build lasting
          trust.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className=" cursor-pointer group relative bg-green hover:bg-green/90 text-white font-heading font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-lg shadow-lg shadow-green/25 hover:shadow-xl hover:shadow-green/30 hover:-translate-y-0.5">
            <span className="flex items-center gap-2">
              Start Free Trial
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
          </button>
          <button className="cursor-pointer group border-2 border-white/30 hover:border-white/50 hover:bg-white/5 text-white font-heading font-medium px-8 py-4 rounded-xl transition-all duration-300 text-lg backdrop-blur-sm">
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Watch Demo
            </span>
          </button>
        </div>

        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-green/30 transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-green/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="font-heading font-bold text-4xl md:text-5xl text-green mb-2">
                <StatNumber end={13} start={statsInView} />
              </p>
              <p className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-1">
                Years Experience
              </p>
              <p className="font-body text-xs text-white/60">
                Online reputation management
              </p>
            </div>
          </div>
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-green/30 transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-green/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="font-heading font-bold text-4xl md:text-5xl text-green mb-2">
                <StatNumber end={97} suffix="%" start={statsInView} />
              </p>
              <p className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-1">
                Success Rate
              </p>
              <p className="font-body text-xs text-white/60">
                Pushing negative links off page one
              </p>
            </div>
          </div>
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-green/30 transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-green/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="font-heading font-bold text-4xl md:text-5xl text-green mb-2">
                <StatNumber end={1700} suffix="+" start={statsInView} />
              </p>
              <p className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-1">
                Happy Clients
              </p>
              <p className="font-body text-xs text-white/60">
                Successful suppression outcomes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
