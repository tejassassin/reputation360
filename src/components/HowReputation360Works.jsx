import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Interactive “How we work” stepper for the home page.
 * (Renamed from HowItWorks.jsx so Vite cannot serve a stale cached module.)
 */
const STEPS = [
  {
    num: "01",
    label: "Audit",
    text: "We assess your current search results and risks",
    detail:
      "You get a prioritized picture of what to fix first—so every later move is grounded in data, not guesswork.",
    square: "bg-[#1d3557]",
    ring: "ring-[#1d3557]/35",
    panelBorder: "border-l-4 border-l-[#1d3557]",
  },
  {
    num: "02",
    label: "Strategy",
    text: "A custom plan based on your goals and urgency",
    detail:
      "Your roadmap matches budget, timeline, and the outcomes you care about—whether that is speed, depth, or discretion.",
    square: "bg-[#5cb85c]",
    ring: "ring-[#5cb85c]/40",
    panelBorder: "border-l-4 border-l-[#5cb85c]",
  },
  {
    num: "03",
    label: "Execution",
    text: "SEO-driven content, authority building & asset control",
    detail:
      "We publish and amplify assets search engines trust, while steering attention toward accurate, helpful narratives.",
    square: "bg-[#1b75bb]",
    ring: "ring-[#1b75bb]/35",
    panelBorder: "border-l-4 border-l-[#1b75bb]",
  },
  {
    num: "04",
    label: "Monitoring",
    text: "Ongoing tracking and adjustments",
    detail:
      "Rankings and mentions evolve—we watch the SERPs and refine tactics so gains hold and new risks do not creep back in.",
    square: "bg-[#45b39d]",
    ring: "ring-[#45b39d]/40",
    panelBorder: "border-l-4 border-l-[#45b39d]",
  },
];

export default function HowReputation360Works() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];
  const last = STEPS.length - 1;

  const go = useCallback(
    (dir) => {
      setActive((i) => {
        if (dir === "prev") return i <= 0 ? last : i - 1;
        if (dir === "next") return i >= last ? 0 : i + 1;
        return i;
      });
    },
    [last],
  );

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go("prev");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        go("next");
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <section
      id="how-r360-process-stepper"
      data-r360-component="process-stepper"
      className="py-10 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#02254d] sm:text-4xl md:text-[2.35rem]">
            How Reputation360 works
          </h2>
        </div>

        <div className="rounded-[1.75rem] border border-[#e5e7eb] bg-gradient-to-b from-[#f8fafc] to-white px-4 py-8 shadow-[0_24px_60px_-40px_rgba(15,35,60,0.18)] sm:px-6 md:py-10">
          {/* Detail panel first — visually distinct from the old 4-column timeline */}
          <div className="relative min-h-[13rem] md:min-h-[12rem]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={step.num}
                id="how-step-panel"
                role="tabpanel"
                aria-labelledby={`how-step-tab-${active}`}
                aria-live="polite"
                aria-label={`Step ${step.num} ${step.label}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-2xl border border-navy/[0.08] bg-white p-5 shadow-md sm:p-6 md:p-8 ${step.panelBorder}`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8">
                  <div className="min-w-0 flex-1">
                    <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#64748b]">
                      Phase {step.num}
                    </p>
                    <h3 className="font-heading mt-2 text-2xl font-bold text-[#02254d] md:text-3xl lg:text-4xl">
                      {step.label}
                    </h3>
                    <p className="font-body mt-4 text-base font-semibold leading-relaxed text-[#43474e] md:text-lg">
                      {step.text}
                    </p>
                    <p className="font-body mt-3 text-[15px] leading-relaxed text-[#43474e] md:text-base">
                      {step.detail}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center justify-end border-t border-slate-100 pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => go("prev")}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#e5e7eb] bg-white text-navy shadow-sm transition hover:bg-[#f8fafc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/30"
                        aria-label="Previous step"
                      >
                        <ChevronLeft className="h-5 w-5" aria-hidden />
                      </button>
                      <button
                        type="button"
                        onClick={() => go("next")}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#e5e7eb] bg-white text-navy shadow-sm transition hover:bg-[#f8fafc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/30"
                        aria-label="Next step"
                      >
                        <ChevronRight className="h-5 w-5" aria-hidden />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mb-3 mt-10 text-center font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#64748b]">
            Switch phase
          </p>

          <div
            className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3"
            role="tablist"
            aria-label="Engagement steps"
          >
            {STEPS.map((s, i) => {
              const selected = active === i;
              return (
                <button
                  key={s.num}
                  type="button"
                  role="tab"
                  id={`how-step-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="how-step-panel"
                  tabIndex={0}
                  onClick={() => setActive(i)}
                  className={`flex items-center justify-center gap-2 rounded-2xl border px-2 py-2.5 text-left transition-all duration-200 sm:px-3 md:py-3 ${
                    selected
                      ? `border-transparent bg-white shadow-[0_12px_28px_-12px_rgba(15,35,60,0.2)] ring-2 ${s.ring} scale-[1.02]`
                      : "border-[#e5e7eb] bg-white/50 hover:border-navy/15 hover:bg-white/90"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-heading text-sm font-bold text-white shadow-inner sm:h-11 sm:w-11 sm:text-base ${s.square}`}
                  >
                    {s.num}
                  </span>
                  <span
                    className={`font-heading text-sm font-bold sm:text-[15px] ${
                      selected ? "text-[#02254d]" : "text-navy/80"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="mt-5 flex justify-center gap-2"
            role="presentation"
            aria-hidden
          >
            {STEPS.map((s, i) => (
              <button
                key={s.num}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === i
                    ? `w-8 ${s.square}`
                    : "w-2 bg-navy/15 hover:bg-navy/25"
                }`}
                aria-label={`Show step ${s.num} ${s.label}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
