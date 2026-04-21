import React from "react";

/** Homepage process: four steps with shared palette (navy / green / blue / teal). */
const STEPS = [
  {
    num: "01",
    label: "Audit",
    text: "We assess your current search results and risks",
    square: "bg-[#1d3557]",
    notchUp: "border-b-[#0f2438]",
  },
  {
    num: "02",
    label: "Strategy",
    text: "A custom plan based on your goals and urgency",
    square: "bg-[#5cb85c]",
    notchUp: "border-b-[#3a703a]",
  },
  {
    num: "03",
    label: "Execution",
    text: "SEO-driven content, authority building & asset control",
    square: "bg-[#1b75bb]",
    notchUp: "border-b-[#0f4a73]",
  },
  {
    num: "04",
    label: "Monitoring",
    text: "Ongoing tracking and adjustments",
    square: "bg-[#45b39d]",
    notchUp: "border-b-[#2a7a6b]",
  },
];

/** All steps link to the Services page for detail on deliverables and sequencing. */
const STEP_DESTINATION = "/services";

function StepMarker({ num, square, notchUp }) {
  return (
    <div className="relative flex justify-center">
      <div className="relative">
        <div
          className={`pointer-events-none absolute -top-px left-1/2 z-[8] h-0 w-0 -translate-x-1/2 border-x-[13px] border-t-0 border-b-[9px] border-x-transparent md:block ${notchUp}`}
          aria-hidden
        />
        <div
          className={`relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_8px_24px_-4px_rgba(15,35,60,0.35)] ring-4 ring-white sm:h-[5.25rem] sm:w-[5.25rem] ${square}`}
        >
          <span className="font-heading text-xl font-bold tracking-tight text-white sm:text-2xl">
            {num}
          </span>
        </div>
        <div
          className="pointer-events-none absolute -bottom-px left-1/2 z-[8] hidden h-0 w-0 -translate-x-1/2 border-x-[13px] border-b-0 border-t-[9px] border-x-transparent border-t-black/25 md:block"
          aria-hidden
        />
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#02254d] sm:text-4xl md:text-[2.35rem]">
            How Reputation360 works
          </h2>
        </div>

        <div className="rounded-[1.75rem] border border-[#e5e7eb] bg-gradient-to-b from-[#f8fafc] to-white px-5 py-10 shadow-[0_24px_60px_-40px_rgba(15,35,60,0.18)] sm:px-8 md:py-12">
          {/* Mobile / tablet: vertical timeline */}
          <ol className="relative space-y-0 md:hidden">
            <div
              className="absolute bottom-8 left-[1.125rem] top-8 w-px bg-gradient-to-b from-[#1d3557] via-[#5cb85c] via-[#1b75bb] to-[#45b39d]"
              aria-hidden
            />
            {STEPS.map((step) => (
              <li key={step.num} className="relative pb-10 last:pb-0">
                <a
                  href={STEP_DESTINATION}
                  className="group relative flex gap-4 rounded-xl p-2 no-underline outline-none transition-colors hover:bg-white/80 focus-visible:ring-2 focus-visible:ring-navy/30 focus-visible:ring-offset-2 -mx-2"
                  aria-label={`${step.label} — view Services page for details`}
                >
                  <div
                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl shadow-[0_6px_16px_-4px_rgba(15,35,60,0.35)] ring-2 ring-white transition-transform group-hover:scale-[1.02] ${step.square}`}
                  >
                    <span className="font-heading text-lg font-bold text-white">
                      {step.num}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="font-heading text-lg font-bold text-[#02254d] group-hover:text-navy">
                      {step.label}
                    </h3>
                    <p className="font-body mt-1.5 text-[15px] leading-relaxed text-[#43474e]">
                      {step.text}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ol>

          {/* Desktop: horizontal journey */}
          <div className="relative mx-auto hidden max-w-5xl md:block lg:max-w-none">
            <div
              className="pointer-events-none absolute left-6 right-6 top-[2.35rem] z-0 h-1.5 rounded-full bg-gradient-to-r from-[#1d3557] from-[-5%] via-[#5cb85c] via-[30%] via-[#1b75bb] via-[65%] to-[#45b39d] to-[105%] opacity-[0.92] shadow-inner lg:left-10 lg:right-10"
              aria-hidden
            />

            <ol className="relative z-10 grid grid-cols-4 gap-3 lg:gap-6">
              {STEPS.map((step) => (
                <li key={step.num}>
                  <a
                    href={STEP_DESTINATION}
                    className="group flex flex-col items-center rounded-2xl p-4 text-center no-underline outline-none transition-colors hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-navy/30 focus-visible:ring-offset-2 -m-2 md:-m-1"
                    aria-label={`${step.label} — view Services page for details`}
                  >
                    <div className="transition-transform group-hover:scale-[1.03]">
                      <StepMarker
                        num={step.num}
                        square={step.square}
                        notchUp={step.notchUp}
                      />
                    </div>
                    <h3 className="font-heading mt-7 text-xl font-bold leading-snug text-[#02254d] group-hover:text-navy lg:mt-8 lg:text-2xl">
                      {step.label}
                    </h3>
                    <p className="font-body mt-3 max-w-[14rem] text-[15px] leading-relaxed text-[#43474e] lg:max-w-[15rem] lg:text-base">
                      {step.text}
                    </p>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
