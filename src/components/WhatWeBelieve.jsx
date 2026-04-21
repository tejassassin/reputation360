import { motion as Motion } from "motion/react";
import { Clock, Compass, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Clarity over noise",
    text: "Search should reflect who you are today - not outdated, misleading, or one-sided results.",
  },
  {
    icon: Clock,
    title: "Early beats late",
    text: "Negative content compounds and gains authority. Acting sooner cuts cost and timeline.",
  },
  {
    icon: Sparkles,
    title: "Own the narrative",
    text: "We help individuals and brands shape how their story shows up - strategically and sustainably.",
  },
];

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
            className="relative mb-10 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-950/5 p-1 shadow-lg shadow-slate-900/10 ring-1 ring-slate-900/5"
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
            <img
              src="/about-hero-search-mockup.png"
              alt="Search results showing positive profiles ranked above outdated listings, with ranking movement indicators."
              className="relative w-full rounded-[0.875rem] object-cover object-top"
              width={1200}
              height={750}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="relative border-t border-slate-200/80 bg-white/90 px-4 py-3 text-center font-body text-sm text-steel backdrop-blur-sm sm:px-5 sm:text-left">
              How you appear in search is the first impression many people trust—strategy and content should match who you are today.
            </figcaption>
          </Motion.figure>

          <ul className="relative space-y-0">
            <li
              className="pointer-events-none absolute left-[1.15rem] top-8 bottom-8 w-px bg-gradient-to-b from-[#4CAF50]/50 via-slate-200 to-[#4CAF50]/30 md:left-[1.25rem]"
              aria-hidden
            />
            {pillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <Motion.li
                  key={item.title}
                  className="relative flex gap-4 pb-10 last:pb-0 md:gap-5"
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#1F3B64] text-white shadow-md shadow-[#1F3B64]/20 ring-4 ring-white md:h-11 md:w-11">
                    <Icon className="h-5 w-5 md:h-[22px] md:w-[22px]" strokeWidth={1.75} aria-hidden />
                  </div>
                  <Motion.div
                    className="min-w-0 flex-1 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-shadow duration-300 hover:border-[#4CAF50]/35 hover:shadow-md md:p-6"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  >
                    <h3 className="font-heading mb-2 text-lg font-bold text-navy md:text-xl">
                      {item.title}
                    </h3>
                    <p className="font-body text-steel text-[15px] leading-relaxed md:text-base">
                      {item.text}
                    </p>
                  </Motion.div>
                </Motion.li>
              );
            })}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeBelieve;
