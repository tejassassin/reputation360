import { motion as Motion } from "motion/react";
import WhatWeBelieveSearchMockup from "./WhatWeBelieveSearchMockup";

function WhatWeBelieve() {
  return (
    <div className="border-t border-slate-200/80 bg-gradient-to-b from-offwhite to-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
          <Motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-heading mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">
              Our philosophy
            </p>
            <h2 className="font-heading mb-6 text-3xl font-bold leading-tight text-navy md:text-4xl">
              What we believe
            </h2>
            <p className="font-body text-steel mb-5 text-lg leading-relaxed">
              Your impression online should reflect who you truly are today, not
              outdated, misleading, or one-sided search results. Ignoring
              reputation issues allows negative content to compound, gain
              authority, and become harder to displace. Early intervention reduces
              both cost and timeline.
            </p>
            <p className="font-body border-l-2 border-[#4CAF50]/70 pl-5 text-lg font-medium leading-relaxed text-navy">
              At Reputation360, we help individuals and brands own their narrative
              - strategically and sustainably.
            </p>
          </Motion.div>

          <div className="lg:col-span-7">
            <Motion.figure
              className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-950/5 p-1 shadow-lg shadow-slate-900/10 ring-1 ring-slate-900/5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#4CAF50]/15 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#1F3B64]/10 blur-3xl"
                aria-hidden
              />
              <div className="relative w-full">
                <WhatWeBelieveSearchMockup />
              </div>
              <figcaption className="relative border-t border-slate-200/80 bg-white/90 px-4 py-3 text-center font-body text-sm text-steel backdrop-blur-sm sm:px-5 sm:text-left">
                How you appear in search is the first impression many people trust—strategy and content should match who you are today.
              </figcaption>
            </Motion.figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeBelieve;
