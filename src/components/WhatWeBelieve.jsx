import { CircleUserRound, Layers, Timer } from "lucide-react";
import WhatWeBelieveSearchMockup from "./WhatWeBelieveSearchMockup";

const insights = [
  {
    icon: CircleUserRound,
    title: "Accuracy over distortion",
    text: "Your online impression should match who you are today—not outdated, misleading, or one-sided results.",
  },
  {
    icon: Layers,
    title: "Small issues snowball",
    text: "Ignored reputation problems compound, gain authority in search, and become harder to displace.",
  },
  {
    icon: Timer,
    title: "Earlier costs less",
    text: "Early intervention shortens timelines and total cost compared with waiting until damage spreads.",
  },
];

/**
 * Typography matches What we do / About blocks: text-3xl/4xl headings, text-lg body (text-steel).
 * Section title spans full width; the SERP mockup aligns with the “Reputation is clarity” card.
 */
function WhatWeBelieve() {
  return (
    <div
      className="border-t border-slate-200/80 bg-gradient-to-b from-offwhite to-white"
      data-r360-section="what-we-believe"
      data-r360-visual="serp-mockup"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 lg:mb-10">
          <p className="font-heading mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">
            Our philosophy
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-navy md:text-4xl">
            What we believe
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          <div className="flex min-w-0 flex-col lg:col-span-6">
            <div className="relative mb-6 overflow-hidden rounded-2xl border border-[#1F3B64]/12 bg-gradient-to-br from-white to-[#f0f4fa] p-5 shadow-sm ring-1 ring-slate-200/60 md:p-6">
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#4CAF50]/10 blur-2xl"
                aria-hidden
              />
              <p className="font-heading relative text-base font-semibold leading-relaxed text-navy md:text-lg">
                Reputation is clarity: people should see the{" "}
                <span className="text-[#2E5B88]">full, current story</span>
                —not a fragment left behind by old links or bad press.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-100/80">
              <ul className="divide-y divide-slate-200/90">
                {insights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title}>
                      <div
                        className="group relative flex gap-4 border-l-[3px] border-transparent p-5 transition-all duration-300 ease-out motion-reduce:transition-none sm:gap-5 sm:p-6 motion-reduce:hover:translate-y-0 hover:-translate-y-0.5 hover:border-[#4CAF50] hover:bg-gradient-to-r hover:from-[#4CAF50]/[0.08] hover:to-transparent hover:shadow-[0_8px_24px_-8px_rgba(31,59,100,0.15)]"
                      >
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f0f4fa] text-[#1F3B64] ring-1 ring-[#1F3B64]/10 transition-all duration-300 ease-out group-hover:scale-105 group-hover:bg-[#4CAF50]/15 group-hover:ring-[#4CAF50]/35 motion-reduce:group-hover:scale-100"
                          aria-hidden
                        >
                          <Icon
                            className="h-5 w-5 transition-transform duration-300 group-hover:rotate-3 motion-reduce:group-hover:rotate-0"
                            strokeWidth={1.75}
                          />
                        </div>
                        <div className="min-w-0 pt-0.5">
                          <p className="font-heading text-lg font-bold leading-snug text-navy transition-colors duration-300 group-hover:text-[#152f52]">
                            {item.title}
                          </p>
                          <p className="font-body mt-2 text-lg leading-relaxed text-steel transition-colors duration-300 group-hover:text-slate-600">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-[#4CAF50]/25 bg-[#4CAF50]/[0.06] p-4 md:p-5">
              <p className="font-body text-lg font-medium leading-relaxed text-navy">
                At <span className="font-semibold text-[#1F3B64]">Reputation360</span>, we help
                individuals and brands <span className="font-semibold">own their narrative</span>
                —strategically and sustainably.
              </p>
            </div>
          </div>

          <div className="flex w-full min-w-0 justify-center lg:col-span-6 lg:justify-end">
            <figure className="relative flex w-full max-w-none flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-950/5 p-1 shadow-lg shadow-slate-900/10 ring-1 ring-slate-900/5">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#4CAF50]/15 blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-[#1F3B64]/10 blur-3xl"
                  aria-hidden
                />
                <div className="relative flex flex-1 flex-col">
                  <WhatWeBelieveSearchMockup />
                </div>
                <figcaption className="relative border-t border-slate-200/80 bg-white/90 px-4 py-3 text-center font-body text-sm leading-relaxed text-slate-700 backdrop-blur-sm sm:px-5 sm:text-left">
                  How you appear in search is the first impression many people trust - it should match
                  who you are today.
                </figcaption>
              </figure>
            </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeBelieve;
