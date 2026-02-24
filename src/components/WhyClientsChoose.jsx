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
    <section className="w-full py-12 px-4">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy my-8 m-auto text-center">
        Why Clients Choose Reputation360
      </h2>
      <div className="max-w-3xl mx-auto grid grid-cols-2 md:flex md:flex-nowrap md:justify-center gap-5">
        {items.map(({ text, icon: Icon }, i) => (
          <div
            key={i}
            className={`cursor-pointer group rounded-xl border border-navy/10 bg-white px-5 py-5 text-center shadow-md transition-all duration-300 hover:border-green/30 hover:shadow-lg hover:-translate-y-0.5 md:w-55 md:shrink-0${i === items.length - 1 && items.length % 2 !== 0 ? " col-span-2 mx-auto w-full max-w-[calc(50%-10px)]" : ""}`}
          >
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-navy/8 text-green transition-colors group-hover:bg-green/15 group-hover:text-green">
              <Icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <p className="text-charcoal text-md font-medium leading-snug">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyClientsChoose;
