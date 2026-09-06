import React from "react";
import { Calendar, PenTool, ShieldCheck, Lock, TrendingUp } from "lucide-react";

const items = [
  {
    text: "Confidential and discreet from first call to final result",
    icon: Lock,
  },
  {
    text: "Proven results across Google Search and AI-powered search",
    icon: ShieldCheck,
  },
  {
    text: "Premium reputation solutions at highly competitive prices",
    icon: PenTool,
  },
  {
    text: "Transparent timelines and honest expectations, no overpromising",
    icon: Calendar,
  },
  { text: "Custom-built plans designed for long-term visibility", icon: TrendingUp },
];

function WhyClientsChoose() {
  return (
    <section
      id="WhyClientsChoose"
      className="relative w-full overflow-hidden border-y border-slate-200/80 bg-white py-14 text-navy md:py-20 lg:py-24"
      aria-labelledby="why-clients-heading"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-12 text-center md:mb-14">
          <h2
            id="why-clients-heading"
            className="font-heading mx-auto max-w-[22rem] text-balance text-3xl font-bold leading-tight tracking-tight text-navy sm:max-w-none md:text-4xl"
          >
            Why Clients Choose Reputation360 as Their ORM Company
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
                  className="group flex h-full min-h-[8.5rem] flex-col items-center justify-start rounded-2xl border border-slate-200/90 bg-white px-3.5 py-5 text-center shadow-sm transition-all duration-300 sm:min-h-0 sm:px-5 sm:py-6 md:py-7 hover:-translate-y-0.5 hover:border-[#4CAF50]/45 hover:shadow-md"
                >
                  <div
                    className="mb-3.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[#4CAF50]/30 bg-[#f6fdf3] text-[#4CAF50] transition group-hover:border-[#4CAF50]/55 sm:mb-4"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </div>
                  <p
                    className="font-body text-[15px] font-medium leading-relaxed text-navy [text-wrap:balance] sm:text-base sm:leading-relaxed"
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
