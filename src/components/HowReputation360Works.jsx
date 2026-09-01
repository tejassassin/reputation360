import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { staticImageSrc } from "../lib/staticImageSrc.js";
import phase01 from "../assets/how-r360-works/phase-01.png";
import phase02 from "../assets/how-r360-works/phase-02.png";
import phase03 from "../assets/how-r360-works/phase-03.png";
import phase04 from "../assets/how-r360-works/phase-04.png";

/**
 * Interactive “How we work” stepper for the home page.
 * (Renamed from HowItWorks.jsx so Vite cannot serve a stale cached module.)
 */
const STEPS = [
  {
    num: "01",
    label: "Reputation Audit & Risk Assessment",
    text: "We assess your current search results and risks",
    detail:
      "You get a prioritized picture of what to fix first-so every later move is grounded in data, not guesswork.",
    square: "bg-[#1F3B64]",
    ring: "ring-[#1F3B64]/35",
    panelBorder: "border-l-4 border-l-[#1F3B64]",
    image: phase01,
    imageAlt:
      "Illustration of a search-results audit with a navy magnifying glass and green checkmarks",
  },
  {
    num: "02",
    label: "Custom Reputation Management Strategy",
    text: "A custom plan based on your goals and urgency",
    detail:
      "Your roadmap matches budget, timeline, and the outcomes you care about-whether that is speed, depth, or discretion.",
    square: "bg-[#4CAF50]",
    ring: "ring-[#4CAF50]/40",
    panelBorder: "border-l-4 border-l-[#4CAF50]",
    image: phase02,
    imageAlt:
      "Illustration of a navy strategy roadmap leading to a green destination pin",
  },
  {
    num: "03",
    label: "Campaign Execution & Content Creation",
    text: "SEO-driven content, authority building & asset control",
    detail:
      "We publish and amplify assets search engines trust, while steering attention toward accurate, helpful narratives.",
    square: "bg-[#2E5B88]",
    ring: "ring-[#2E5B88]/35",
    panelBorder: "border-l-4 border-l-[#2E5B88]",
    image: phase03,
    imageAlt:
      "Illustration of content being created and published into search results",
  },
  {
    num: "04",
    label: "Ongoing Monitoring & Reputation Defense",
    text: "Ongoing tracking and adjustments",
    detail:
      "Rankings and mentions evolve-we watch the SERPs and refine tactics so gains hold and new risks do not creep back in.",
    square: "bg-[#6CB359]",
    ring: "ring-[#6CB359]/40",
    panelBorder: "border-l-4 border-l-[#6CB359]",
    image: phase04,
    imageAlt:
      "Illustration of a navy shield and dashboard monitoring reputation signals",
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
      aria-labelledby="how-r360-works-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-10">
          <h2
            id="how-r360-works-heading"
            className="font-heading text-3xl font-bold tracking-tight text-[#02254d] sm:text-4xl md:text-[2.35rem]"
          >
            How Reputation360 works
          </h2>
        </div>

        <div className="flex flex-col gap-8 rounded-[1.75rem] border border-[#e5e7eb] bg-gradient-to-b from-[#f8fafc] to-white p-6 shadow-[0_24px_60px_-40px_rgba(15,35,60,0.18)] sm:p-8 md:p-10 lg:p-12">
          {/* Detail panel first - visually distinct from the old 4-column timeline */}
          <div className="relative min-h-[18rem] md:min-h-[16rem]">
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
                className={`rounded-2xl border border-navy/[0.08] bg-white p-6 shadow-md sm:p-8 md:p-10 ${step.panelBorder}`}
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#64748b]">
                    Phase {step.num}
                  </p>
                  <div className="flex gap-3">
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
                <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] lg:gap-10">
                  <div className="min-w-0">
                    <p className="font-heading text-xl font-bold text-[#02254d] md:text-2xl lg:text-3xl">
                      {step.label}
                    </p>
                    <p className="font-body mt-4 text-base font-semibold leading-relaxed text-[#43474e] md:text-lg">
                      {step.text}
                    </p>
                    <p className="font-body mt-3 text-[15px] leading-relaxed text-[#43474e] md:text-base">
                      {step.detail}
                    </p>
                  </div>
                  <figure className="m-0 overflow-hidden rounded-xl bg-[#F5F7FA] ring-1 ring-[#1F3B64]/10">
                    <img
                      src={staticImageSrc(step.image)}
                      alt={step.imageAlt}
                      width={1536}
                      height={1024}
                      decoding="async"
                      className="h-auto w-full object-cover"
                    />
                  </figure>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
            role="tablist"
            aria-label="Engagement steps"
          >
            {STEPS.map((s, i) => {
              const selected = active === i;
              return (
                <div
                  key={s.num}
                  role="tab"
                  id={`how-step-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="how-step-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActive(i);
                    }
                  }}
                  className={`flex cursor-pointer items-center justify-center gap-3 rounded-2xl border px-3 py-3 text-left transition-all duration-200 sm:px-4 md:py-4 ${
                    selected
                      ? `border-transparent bg-white shadow-[0_12px_28px_-12px_rgba(15,35,60,0.2)] ring-2 ${s.ring} scale-[1.02]`
                      : "border-[#e5e7eb] bg-white/50 hover:border-navy/15 hover:bg-white/90"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-heading text-sm font-bold text-white shadow-inner sm:h-11 sm:w-11 sm:text-base ${s.square}`}
                    aria-hidden
                  >
                    {s.num}
                  </span>
                  <h3
                    className={`font-heading m-0 text-sm font-bold sm:text-[15px] ${
                      selected ? "text-[#02254d]" : "text-navy/80"
                    }`}
                  >
                    {s.label}
                  </h3>
                </div>
              );
            })}
          </div>

          <div
            className="flex justify-center gap-2"
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
