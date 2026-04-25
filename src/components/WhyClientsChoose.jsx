import React from "react";
import { Calendar, PenTool, ShieldCheck, Lock, TrendingUp } from "lucide-react";
import BrandSectionBackdrop from "./BrandSectionBackdrop";

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
      className="relative w-full overflow-hidden border-y border-white/[0.06] py-14 text-white md:py-20 lg:py-24"
      aria-labelledby="why-clients-heading"
    >
      <BrandSectionBackdrop />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-12 text-center md:mb-14">
          <h2
            id="why-clients-heading"
            className="font-heading mx-auto max-w-[22rem] text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:max-w-none md:text-4xl"
          >
            Why Clients Choose Reputation360
          </h2>
          <div
            className="mx-auto mt-4 h-0.5 w-16 max-w-full rounded-full bg-gradient-to-r from-[#4CAF50] to-[#2E5B88]"
            aria-hidden
          />
        </div>

        <ul className="mx-auto grid w-full list-none max-w-5xl grid-cols-2 grid-rows-1 items-stretch justify-items-stretch gap-3.5 p-0 sm:gap-5 md:max-w-6xl md:gap-5 lg:max-w-none lg:grid-cols-5 lg:gap-4">
          {items.map(({ text, icon: Icon }, i) => {
            const oddLastInTwoCol =
              i === items.length - 1 && items.length % 2 === 1;
            return (
              <li
                key={text}
                className={
                  oddLastInTwoCol
                    ? "col-span-2 mx-auto w-full max-w-sm list-none justify-self-center lg:col-span-1 lg:max-w-none"
                    : "min-w-0 list-none"
                }
              >
                <div
                  className="group flex h-full min-h-[8.5rem] flex-col items-center justify-start rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/6 px-3.5 py-5 text-center shadow-[0_8px_32px_-8px_rgba(10,20,40,0.5)] ring-1 ring-inset ring-white/10 backdrop-blur-md transition-all duration-300 sm:min-h-0 sm:px-5 sm:py-6 md:py-7 hover:-translate-y-0.5 hover:border-[#4CAF50]/50 hover:from-white/18 hover:to-white/8 hover:shadow-[0_12px_40px_-10px_rgba(31,59,100,0.45),0_0_0_1px_rgba(76,175,80,0.12)]"
                >
                  <div
                    className="mb-3.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[#4CAF50]/30 bg-[#0f1c2c]/80 text-[#4CAF50] shadow-sm shadow-[#0d1825]/40 transition group-hover:border-[#4CAF50]/55 group-hover:shadow-[0_0_20px_-4px_rgba(76,175,80,0.35)] sm:mb-4"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </div>
                  <p
                    className="font-body text-[15px] font-medium leading-relaxed text-slate-100 [text-shadow:0_1px_2px_rgba(0,0,0,0.25)] [text-wrap:balance] sm:text-base sm:leading-relaxed"
                  >
                    {text}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default WhyClientsChoose;
