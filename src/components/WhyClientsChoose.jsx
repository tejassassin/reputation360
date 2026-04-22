import React from "react";
import { Calendar, PenTool, ShieldCheck, Lock, TrendingUp } from "lucide-react";

const items = [
  { text: "Confidential and discreet handling", icon: Lock },
  { text: "Clear timelines & realistic expectations", icon: Calendar },
  { text: "100% white-hat SEO", icon: ShieldCheck },
  { text: "Fully customized plans (no templates)", icon: PenTool },
  { text: "Built for long-term visibility and protection", icon: TrendingUp },
];

function WhyClientsChoose() {
  return (
    <section
      id="WhyClientsChoose"
      className="relative w-full overflow-hidden py-12 text-white md:py-16 lg:py-20"
      aria-labelledby="why-clients-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020911] via-[#051626] to-[#0a253e]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(10,40,60,0.5),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.12)_1px,transparent_0)] bg-[length:40px_40px] opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#4ade80]/[0.08] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-[#0a253e] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-10 text-center md:mb-12">
          <h2
            id="why-clients-heading"
            className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Why Clients Choose Reputation360
          </h2>
          <div
            className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4ade80] to-cyan-400/90"
            aria-hidden
          />
        </div>

        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 justify-items-stretch gap-4 sm:gap-5 md:max-w-6xl lg:max-w-none lg:grid-cols-5">
          {items.map(({ text, icon: Icon }, i) => {
            const oddLastInTwoCol =
              i === items.length - 1 && items.length % 2 === 1;
            return (
              <div
                key={text}
                className={`ha-lift group flex min-h-0 flex-col items-center justify-start rounded-xl border border-white/10 bg-[#0c2133] px-3 py-5 text-center shadow-none transition-all duration-300 sm:px-4 sm:py-5 md:py-6 hover:-translate-y-0.5 hover:border-[#4ade80]/40 hover:bg-[#0f2a3f] ${
                  oddLastInTwoCol
                    ? "col-span-2 mx-auto w-full max-w-sm justify-self-center lg:col-span-1 lg:max-w-none"
                    : ""
                } `}
              >
                <div className="mb-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(5,22,38,0.95)] text-[#4ade80] transition-colors group-hover:text-[#86efac]">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <p className="font-body text-sm font-medium leading-snug text-[#94a3b8] sm:text-[15px]">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyClientsChoose;
