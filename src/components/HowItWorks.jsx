import React from "react";

/** Matches homepage infographic: bar + numbered squares + ribbon fold + copy */
const STEPS = [
  {
    num: "01",
    label: "1. Audit –",
    text: "We assess your current search results and risks",
    square: "bg-[#1d3557]",
    notchUp: "border-b-[#0f2438]",
  },
  {
    num: "02",
    label: "2. Strategy –",
    text: "A custom plan based on your goals and urgency",
    square: "bg-[#5cb85c]",
    notchUp: "border-b-[#3a703a]",
  },
  {
    num: "03",
    label: "3. Execution –",
    text: "SEO-driven content, authority building & asset control",
    square: "bg-[#1b75bb]",
    notchUp: "border-b-[#0f4a73]",
  },
  {
    num: "04",
    label: "4. Monitoring –",
    text: "Ongoing tracking and adjustments",
    square: "bg-[#45b39d]",
    notchUp: "border-b-[#2a7a6b]",
  },
];

function RibbonSquare({ num, square, notchUp }) {
  return (
    <div className="relative flex justify-center">
      <div className="relative">
        {/* Fold above bar (triangle points up into square) */}
        <div
          className={`pointer-events-none absolute -top-px left-1/2 z-[8] h-0 w-0 -translate-x-1/2 border-x-[13px] border-t-0 border-b-[9px] border-x-transparent ${notchUp}`}
          aria-hidden
        />
        <div
          className={`relative z-10 flex h-[5.75rem] w-[5.75rem] items-center justify-center sm:h-[6.25rem] sm:w-[6.25rem] ${square} shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_3px_8px_rgba(0,0,0,0.2)]`}
        >
          <span className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {num}
          </span>
        </div>
        {/* Fold into bar (triangle points down) */}
        <div
          className="pointer-events-none absolute -bottom-px left-1/2 z-[8] h-0 w-0 -translate-x-1/2 border-x-[13px] border-b-0 border-t-[9px] border-x-transparent border-t-black/30"
          aria-hidden
        />
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="py-8 md:py-14">
      <h2 className="font-heading mx-auto mb-10 px-4 text-center text-2xl font-bold text-[#1d3557] sm:mb-12 sm:text-3xl md:text-4xl">
        How Reputation360 works
      </h2>

      {/* Mobile: stacked, same copy */}
      <div className="mx-auto max-w-lg space-y-8 px-6 md:hidden">
        {STEPS.map((step) => (
          <div key={step.num} className="flex flex-col items-center text-center">
            <RibbonSquare
              num={step.num}
              square={step.square}
              notchUp={step.notchUp}
            />
            <h3 className="font-heading mt-5 text-base font-bold text-[#1d3557]">
              {step.label}
            </h3>
            <p className="font-body mt-2 max-w-xs text-sm leading-relaxed text-[#43474e]">
              {step.text}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop: horizontal bar + four columns */}
      <div className="relative mx-auto hidden max-w-6xl px-6 md:block lg:px-10">
        {/* Continuous track (same navy as step 01) */}
        {/* Bar centered on squares (sm: 6.25rem tall → center 3.125rem; bar h-4) */}
        <div
          className="pointer-events-none absolute left-8 right-8 top-[2.625rem] z-0 h-4 rounded-[2px] bg-[#1d3557] lg:left-12 lg:right-12"
          aria-hidden
        />

        <div className="relative z-10 grid grid-cols-4 gap-2 lg:gap-4">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="flex flex-col items-center text-center"
            >
              <RibbonSquare
                num={step.num}
                square={step.square}
                notchUp={step.notchUp}
              />
              <h3 className="font-heading mt-6 text-[15px] font-bold leading-snug text-[#1d3557] lg:text-base">
                {step.label}
              </h3>
              <p className="font-body mt-2 max-w-[11.5rem] text-[13px] leading-relaxed text-[#43474e] lg:max-w-[13rem] lg:text-sm">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
