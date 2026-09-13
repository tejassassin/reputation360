import { CircleUserRound, Layers, Timer } from "lucide-react";
import WhatWeBelieveSearchMockup, {
  WHAT_WE_BELIEVE_SERP_MOCKUP_ALT,
} from "./WhatWeBelieveSearchMockup";

const insights = [
  {
    icon: CircleUserRound,
    title: "Your past shouldn't be the only story people see.",
    text: "Reputation management helps ensure that outdated or one-sided information does not overshadow who you are today.",
  },
  {
    icon: Layers,
    title: "Balanced search results protect your professional reputation.",
    text: "Your online presence should reflect who you are today, not an outdated, misleading or one-sided version of you.",
  },
  {
    icon: Timer,
    title: "The longer you wait, the harder it becomes to change.",
    text: "Left unaddressed, negative content can gain authority and become more difficult to displace. Acting early can shorten the path to stronger results.",
  },
];

/**
 * Typography matches What we do / About blocks: text-3xl/4xl headings, text-lg body (text-steel).
 * Full-width intro; SERP mockup sits beside the three insight pointers below.
 */
function WhatWeBelieve() {
  return (
    <section
      className="r360-what-we-believe-section border-t border-slate-200/80 bg-gradient-to-b from-offwhite to-white"
      data-r360-section="what-we-believe"
      data-r360-visual="serp-mockup"
      aria-labelledby="what-we-believe-heading"
    >
      <div className="r360-site-container r360-what-we-believe-shell">
        <div className="r360-what-we-believe-title-wrap">
          <h2
            id="what-we-believe-heading"
            className="r360-what-we-believe-title font-heading font-bold text-navy"
          >
            Why Online Reputation Management Matters
          </h2>
        </div>

        <div className="r360-what-we-believe-intro relative overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_1px_3px_rgba(31,59,100,0.06)]">
          <div
            className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#4CAF50]/8 blur-2xl"
            aria-hidden
          />
          <div className="relative r360-what-we-believe-intro-inner">
            <p className="r360-what-we-believe-intro-lead font-heading font-semibold text-navy">
              Your Google search results are your new résumé.
            </p>
            <p className="r360-what-we-believe-intro-body font-body text-steel">
              Before a client signs a contract, an investor takes a call, or an employer makes a
              decision, they search your name. What appears in the first ten results and in
              Google&apos;s AI Overviews shapes the story they believe. Not your résumé. Not your
              pitch deck. Your search results.
            </p>
          </div>
        </div>

        <div className="r360-what-we-believe-columns grid grid-cols-1 lg:items-start">
          <div className="flex min-w-0 flex-col">
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
              <ul className="divide-y divide-slate-200/80">
                {insights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title}>
                      <div className="r360-what-we-believe-point group relative flex border-l-[3px] border-transparent transition-colors duration-300 ease-out motion-reduce:transition-none hover:border-[#4CAF50] hover:bg-[#4CAF50]/[0.06]">
                        <div
                          className="r360-what-we-believe-point-icon flex shrink-0 items-center justify-center rounded-2xl bg-offwhite text-navy ring-1 ring-navy/10 transition-colors duration-300 group-hover:bg-[#4CAF50]/15 group-hover:ring-[#4CAF50]/35"
                          aria-hidden
                        >
                          <Icon className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="r360-what-we-believe-point-title font-heading font-bold text-navy">
                            {item.title}
                          </h3>
                          <p className="r360-what-we-believe-point-text font-body text-steel">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="flex w-full min-w-0 justify-center lg:justify-end">
            <div className="r360-what-we-believe-visual relative isolate w-full max-w-none">
              <div
                className="ha-lift relative z-10 rounded-2xl border border-slate-200/70 bg-slate-950/5 p-0.5 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.35)]"
              >
                <figure className="relative flex w-full flex-col overflow-hidden rounded-[0.875rem] bg-transparent">
                  <img
                    id="what-we-believe-serp-alt"
                    src="/what-we-believe-serp-mockup.png"
                    alt={WHAT_WE_BELIEVE_SERP_MOCKUP_ALT}
                    width={720}
                    height={640}
                    decoding="async"
                    className="sr-only"
                  />
                  <div
                    className="relative flex min-h-0 flex-col"
                    role="group"
                    aria-labelledby="what-we-believe-serp-alt"
                    onClickCapture={(e) => {
                      const t = e.target;
                      if (t instanceof Element && t.closest("a[href]")) {
                        e.preventDefault();
                        e.stopPropagation();
                      }
                    }}
                  >
                    <WhatWeBelieveSearchMockup />
                  </div>
                  <figcaption className="r360-what-we-believe-caption relative border-t border-slate-200/70 bg-white px-3.5 py-2 text-center font-body text-sm leading-snug text-slate-700 sm:px-4 sm:text-left">
                    How you appear in search is often the first impression people trust. It should reflect
                    who you are today.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeBelieve;
