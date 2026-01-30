import React from 'react'
import { Calendar, PenTool, ShieldCheck, Lock, TrendingUp } from 'lucide-react'

const items = [
  { text: 'Clear timelines & realistic expectations', icon: Calendar },
  { text: 'Fully customized plans (no templates)', icon: PenTool },
  { text: '100% white-hat SEO', icon: ShieldCheck },
  { text: 'Confidential and discreet handling', icon: Lock },
  { text: 'Built for long-term visibility and protection', icon: TrendingUp },
]

function WhyClientsChoose() {
  return (
    <section className="w-full py-12 px-4">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy my-8 m-auto text-center">
        Why clients choose Reputation360
      </h2>
      <div className="max-w-7xl mx-auto flex flex-nowrap justify-center gap-5 overflow-x-auto pb-2">
        {items.map(({ text, icon: Icon }, i) => (
          <div
            key={i}
            className="group w-55 shrink-0 rounded-xl border border-navy/10 bg-white px-5 py-5 text-center shadow-md transition-all duration-300 hover:border-green/30 hover:shadow-lg hover:-translate-y-0.5"
          >
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-navy/8 text-green transition-colors group-hover:bg-green/15 group-hover:text-green">
              <Icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <p className="text-charcoal text-sm font-medium leading-snug">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyClientsChoose