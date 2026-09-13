import { Route, Search, ShieldCheck } from "lucide-react";

const PROCESS_STEPS = [
  {
    number: "01",
    label: "UNDERSTAND",
    heading: "Reputation Audit and Risk Assessment",
    description:
      "We review your current search results, digital presence and reputation concerns to identify risks, gaps and opportunities before recommending a course of action.",
    Icon: Search,
  },
  {
    number: "02",
    label: "STRATEGIZE",
    heading: "Customized Reputation Management Strategy",
    description:
      "Based on our findings, we develop a personalized plan with clear priorities, recommended actions, realistic timelines and measurable milestones.",
    Icon: Route,
  },
  {
    number: "03",
    label: "IMPLEMENT",
    heading: "Execute, Monitor and Strengthen",
    description:
      "Our specialists implement the approved strategy, monitor progress and refine the approach as search results and AI-powered platforms evolve.",
    Icon: ShieldCheck,
  },
];

function ProcessStepCard({ step }) {
  const { Icon } = step;
  return (
    <div className="r360-about-how-we-work-card flex h-full min-w-0 flex-col items-start rounded-xl border border-slate-200/90 bg-white shadow-sm">
      <div className="r360-about-how-we-work-card-head flex w-full items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="r360-about-how-we-work-number mb-0 font-heading font-bold leading-none text-[#4CAF50]">
            {step.number}
          </p>
          <p className="r360-about-how-we-work-label mb-0 font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-[#4CAF50]">
            {step.label}
          </p>
        </div>
        <span
          className="r360-about-how-we-work-icon flex shrink-0 items-center justify-center rounded-lg bg-[#1F3B64]/[0.06] text-[#1F3B64] ring-1 ring-[#1F3B64]/10"
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
      </div>
      <div className="r360-about-how-we-work-card-heading-wrap w-full min-w-0">
        <h3 className="r360-about-how-we-work-card-heading mb-0 font-heading text-lg font-bold leading-snug text-[#1F3B64]">
          {step.heading}
        </h3>
      </div>
      <p className="r360-about-how-we-work-card-desc mb-0 font-body text-[15px] leading-[1.6] text-[#6B7280] md:text-base">
        {step.description}
      </p>
    </div>
  );
}

export function AboutHowWeWorkSection() {
  return (
    <section
      id="how-we-work"
      className="r360-about-how-we-work-section relative overflow-x-clip scroll-mt-28 md:scroll-mt-32"
      aria-labelledby="how-we-work-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_40%,#f8fafc_100%)]"
        aria-hidden
      />

      <div className="relative z-10 r360-about-how-we-work-inner mx-auto w-full max-w-7xl px-6 lg:px-8">
        <header className="r360-about-how-we-work-intro mx-auto text-center">
          <p className="mb-0 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#4CAF50]">
            HOW WE WORK
          </p>
          <h2
            id="how-we-work-heading"
            className="r360-about-how-we-work-heading mb-0 font-heading text-3xl font-extrabold leading-tight text-[#1F3B64] md:text-[2.05rem]"
          >
            A Clear, Personalized Reputation Management Process
          </h2>
          <p className="r360-about-how-we-work-lead mb-0 font-body text-base leading-[1.6] text-[#6B7280] md:text-lg">
            Every engagement begins with understanding the client&apos;s situation, followed by a
            customized strategy and ongoing work across Google and AI-powered search.
          </p>
        </header>

        <div className="r360-about-how-we-work-steps">
          <ol className="r360-about-how-we-work-list m-0 list-none p-0">
            {PROCESS_STEPS.map((step) => (
              <li key={step.number} className="r360-about-how-we-work-item min-w-0">
                <ProcessStepCard step={step} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
