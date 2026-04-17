import { useState } from "react";
import {
  Map,
  Target,
  Layers,
  BarChart3,
  RefreshCw,
  CalendarRange,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

/** Default five steps for industry pages that do not pass a custom `steps` prop. */
export const REPUTATION360_FA_STEPS = [
  {
    step: 1,
    headline: "Step 1 - Complete Search Audit (Week 1)",
    body: "We map every result appearing for your name, your firm name, and common search combinations. We assess the strength of each negative entry and identify exactly what we are working with.",
    Icon: Map,
  },
  {
    step: 2,
    headline: "Step 2 - Suppression Strategy Design (Weeks 1-2)",
    body: "We design a content and SEO strategy specific to your situation, built to push negative results beyond page two - where fewer than 0.5% of searchers ever look.",
    Icon: Target,
  },
  {
    step: 3,
    headline: "Step 3 - Content and Presence Building (Months 1-4)",
    body: "We build your authoritative digital footprint: LinkedIn profile optimization, a professional website or thought leadership hub, financial commentary and expert articles on high-authority platforms, optimized profiles on financial directories, and supporting professional properties.",
    Icon: Layers,
  },
  {
    step: 4,
    headline: "Step 4 - Ranking Displacement (Months 3-8)",
    body: "As your positive properties gain authority, they begin outranking the negative content. We monitor rankings weekly and adjust strategy as results move.",
    Icon: BarChart3,
  },
  {
    step: 5,
    headline: "Step 5 - Long-Term Maintenance (Month 8 onward)",
    body: "Once negative content is displaced, we maintain the presence that replaced it - ensuring it holds position and continues working in your favor.",
    Icon: RefreshCw,
  },
];

/** Financial Advisors page only; other industries use REPUTATION360_FA_STEPS. */
export const REPUTATION360_FINANCIAL_ADVISOR_STEPS = [
  {
    step: 1,
    headline: "Step 1 - Complete Search Audit (Week 1)",
    body: "We run the same search your clients run. We map every result appearing for your name, your firm name, and common search combinations. We assess the strength of each negative entry and identify exactly what we are working with before any strategy is designed.",
    Icon: Map,
  },
  {
    step: 2,
    headline: "Step 2 - Suppression Strategy Design (Weeks 1-2)",
    body: "We design a content and SEO strategy specific to your situation, built to push negative results beyond page two — where fewer than 0.5% of searchers ever look. You receive a clear brief on what we are building and why.",
    Icon: Target,
  },
  {
    step: 3,
    headline: "Step 3 - Content and Presence Building (Months 1-4)",
    body: "We build your authoritative digital footprint: LinkedIn profile optimization, a professional website or thought leadership hub, financial commentary and expert articles on high-authority platforms, and optimized profiles on financial directories. All of it built to rank for your name.",
    Icon: Layers,
  },
  {
    step: 4,
    headline: "Step 4 - Ranking Displacement (Months 3-8)",
    body: "As your positive properties gain authority, they begin outranking the negative content. We monitor rankings weekly, adjust strategy as results move, and keep you informed of progress throughout.",
    Icon: BarChart3,
  },
  {
    step: 5,
    headline: "Step 5 - Long-Term Maintenance (Months 8-12)",
    body: "Once negative content is displaced, we maintain the presence that replaced it — ensuring it holds position and continues working in your favor. A strong search presence, once built, becomes a permanent professional asset.",
    Icon: RefreshCw,
  },
];

/** Job Seekers page only; other industries use REPUTATION360_FA_STEPS or their own steps prop. */
export const REPUTATION360_JOB_SEEKER_STEPS = [
  {
    step: 1,
    headline: "Step 1 - Your Reputation Audit (Week 1)",
    body: "We run the search a recruiter would run — your name, name plus city, name plus industry, name plus previous employer. We show you exactly what they see and identify precisely what is working against you.",
    Icon: Map,
  },
  {
    step: 2,
    headline: "Step 2 - Strategy and Priority Setting (Week 2)",
    body: "We identify which results are causing the most damage, which can potentially be removed, and what content strategy will most effectively displace what cannot be removed. You get a clear plan before any work begins.",
    Icon: Target,
  },
  {
    step: 3,
    headline: "Step 3 - Building Your Professional Presence (Months 1-3)",
    body: "We build a positive, authoritative digital footprint that outranks the damaging content — LinkedIn optimization, a personal professional website or portfolio, published professional commentary, and supporting profiles designed to rank for your name.",
    Icon: Layers,
  },
  {
    step: 4,
    headline: "Step 4 - Displacement and Monitoring (Months 2-8)",
    body: "As your positive presence gains ranking strength, damaging content moves down. We monitor progress weekly and adjust the strategy to maintain momentum — and we keep you informed throughout so you always know where things stand.",
    Icon: BarChart3,
  },
  {
    step: 5,
    headline: "Step 5 - Resolution (Months 8-12)",
    body: "For most clients, negative content has moved well beyond visible search pages by this point. The professional presence we have built continues to hold its position and work in your favor long after the engagement ends.",
    Icon: Sparkles,
  },
];

/** Doctors & Healthcare page only. */
export const REPUTATION360_DOCTOR_STEPS = [
  {
    step: 1,
    headline: "Step 1 - Full Digital Presence Audit (Week 1)",
    body: "We map every search result for your name, your practice name, and your specialty plus location — every review platform, directory listing, news reference, and social mention. We identify where the damage is concentrated and what approach each situation requires.",
    Icon: Map,
  },
  {
    step: 2,
    headline: "Step 2 - Suppression and Presence Strategy (Weeks 1-2)",
    body: "We design a strategy to displace negative results using content creation, directory optimization, and SEO. Where direct removal is viable — fake reviews, policy-violating content, de-indexing candidates — we pursue those in parallel.",
    Icon: Target,
  },
  {
    step: 3,
    headline: "Step 3 - Review Platform and Directory Optimization (Months 1-2)",
    body: "We optimize your profiles on Google Business, Vitals, WebMD, and relevant medical directories — ensuring your official presence is comprehensive, current, and ranking prominently. A well-optimized profile on a high-authority platform consistently outranks a negative review aggregator.",
    Icon: Layers,
  },
  {
    step: 4,
    headline: "Step 4 - Authoritative Content Building (Months 1-5)",
    body: "We build your thought leadership and professional presence — health articles published under your name, a professional website or blog, interview features, and educational content that positions you as the credible, trusted expert in your specialty. This content is built to rank for your name and hold that position over time.",
    Icon: BarChart3,
  },
  {
    step: 5,
    headline: "Step 5 - Negative Result Displacement and Maintenance (Months 3-12)",
    body: "As your authoritative content gains ranking strength, it displaces negative results from visible search pages. We monitor rankings weekly, adjust strategy as results move, and maintain the presence we have built so that your search results continue working in your favor long after primary displacement is achieved.",
    Icon: RefreshCw,
  },
];

/** Executives & C-Suite Leaders page only. */
export const REPUTATION360_EXECUTIVE_STEPS = [
  {
    step: 1,
    headline: "Step 1 - Executive Search Footprint Audit (Week 1)",
    body: "We conduct a comprehensive audit of your complete digital footprint — your name, company associations, past ventures, past directorships, and media coverage across all of them. We map every threat and every opportunity in what people currently find when they search your name.",
    Icon: Map,
  },
  {
    step: 2,
    headline: "Step 2 - Strategic Brief and Priority Setting (Week 2)",
    body: "We present our findings and agree on a clear priority order — which results need to be displaced first, which present the highest risk, and what the realistic outcome looks like for your specific situation.",
    Icon: Target,
  },
  {
    step: 3,
    headline: "Step 3 - Executive Presence Architecture (Months 1–3)",
    body: "We build the digital presence your position demands: LinkedIn strategy and optimization at board-level visibility, a personal professional website built to rank, a thought leadership program placing your commentary in relevant business publications, and speaker and interview profiles on high-authority platforms.",
    Icon: Layers,
  },
  {
    step: 4,
    headline: "Step 4 - Negative Result Displacement (Months 2–8)",
    body: "As your authoritative presence gains ranking strength, damaging content is displaced from visible search pages. The goal is to ensure the first full page of results for your name is entirely composed of content that reflects your leadership, expertise, and standing.",
    Icon: BarChart3,
  },
  {
    step: 5,
    headline: "Step 5 - Ongoing Reputation Maintenance (Months 8–12)",
    body: "Executive reputation management is not a project. It is a function. We monitor your search results continuously, respond to new content threats as they emerge, and ensure your presence grows in authority over time.",
    Icon: RefreshCw,
  },
];

/** Businesses & Companies page only. */
export const REPUTATION360_BUSINESS_STEPS = [
  {
    step: 1,
    headline: "Step 1 - Business Reputation Audit (Week 1)",
    body: "We audit your complete search picture — company name, founder names, product names, and competitive search terms. We map every negative result and identify the right combination of removal and suppression for your situation.",
    Icon: Map,
  },
  {
    step: 2,
    headline: "Step 2 - Strategy Design (Weeks 1-2)",
    body: "We build a strategy around your specific business type and the nature of the damaging content. A SaaS company's approach looks different from a restaurant group's, which looks different from a healthcare firm's.",
    Icon: Target,
  },
  {
    step: 3,
    headline: "Step 3 - Content and Brand Presence Building (Months 1-4)",
    body: "We create the authoritative brand content that displaces negative results — press features, thought leadership, company profiles on high-authority platforms, and owned media. Built to rank and stay ranked.",
    Icon: Layers,
  },
  {
    step: 4,
    headline: "Step 4 - Competitor Content Response and Review Management (Months 2-6)",
    body: "Where competitors are targeting your brand name in search, we deploy content that outranks their efforts. In parallel, we pursue removal of policy-violating reviews and build the positive review volume that shifts your aggregate rating upward.",
    Icon: BarChart3,
  },
  {
    step: 5,
    headline: "Step 5 - Displacement and Monitoring (Months 2-12)",
    body: "We track your search results throughout the engagement, adjust as results move, and transition into ongoing maintenance once primary displacement is achieved.",
    Icon: RefreshCw,
  },
];

/** Lawyers & Attorneys page only. */
export const REPUTATION360_LAWYER_STEPS = [
  {
    step: 1,
    headline: "Step 1 - Legal Reputation Audit (Week 1)",
    body: "We run a comprehensive search across your name, your firm name, and relevant practice area combinations — identifying every damaging result, assessing its ranking authority, and mapping the full picture of what prospective clients encounter.",
    Icon: Map,
  },
  {
    step: 2,
    headline: "Step 2 - Strategy Design (Weeks 1-2)",
    body: "We design a suppression and presence strategy calibrated to your specific situation — the nature of the damaging content, the authority of the sources, and the competitive picture for your name in search. You receive a clear brief before any work begins.",
    Icon: Target,
  },
  {
    step: 3,
    headline: "Step 3 - Legal Directory Optimization (Month 1)",
    body: "Profiles on Avvo, FindLaw, Martindale-Hubbell, Justia, and legal aggregators frequently rank prominently for attorney names. We ensure yours are fully built, optimized, and working to your advantage from the earliest stage of the engagement.",
    Icon: Layers,
  },
  {
    step: 4,
    headline: "Step 4 - Thought Leadership and Authority Content (Months 1-5)",
    body: "We publish authoritative legal commentary, case analysis, and professional insight under your name — on high-authority platforms that rank well for legal professional names. This positions you as the credible expert in your practice area and builds the ranking authority that displaces negative content.",
    Icon: BarChart3,
  },
  {
    step: 5,
    headline: "Step 5 - Displacement and Maintenance (Months 3-12)",
    body: "As your positive presence gains authority, negative results are displaced from visible search pages. We monitor rankings throughout, adjust the strategy as results move, and maintain the presence we have built so your search results keep working in your favor long after primary displacement is complete.",
    Icon: RefreshCw,
  },
];

export const REALISTIC_TIMELINE_PHASES = [
  {
    id: "weeks-1-4",
    window: "Weeks 1-4",
    body: "Audit complete. Strategy live. Initial content published and indexed.",
    Icon: CalendarRange,
  },
  {
    id: "months-2-4",
    window: "Months 2-4",
    body: "Measurable ranking movement. Positive properties gaining traction.",
    Icon: TrendingUp,
  },
  {
    id: "months-4-7",
    window: "Months 4-7",
    body: "Primary negative results displaced for most cases.",
    Icon: CheckCircle2,
  },
  {
    id: "months-8-12",
    window: "Months 8-12",
    body: "Substantial transformation complete. Negative content pushed well beyond visible pages.",
    Icon: Sparkles,
  },
];

export const REALISTIC_TIMELINE_DISCLAIMER =
  "Results vary based on the authority of the negative content and the number of negative results; we will give you an honest assessment in your first consultation.";

/** Title after "Step N -" for compact step tiles; falls back to full headline. */
function faWhatWeDoStepLabel(headline) {
  const m = headline.match(/^Step\s+\d+\s+-\s*(.+)$/);
  return m ? m[1].trim() : headline;
}

export function IndustryWhatReputation360Section({
  sectionId = "what-reputation360-does",
  steps = REPUTATION360_FA_STEPS,
  footer = null,
}) {
  const [active, setActive] = useState(0);
  const item = steps[active];
  const ActiveIcon = item.Icon;

  return (
    <section
      id={sectionId}
      className="mt-16 scroll-mt-28 rounded-[24px] border border-[#dce3ec] bg-[#f8f9fc] px-5 py-9 md:mt-20 md:px-9 md:py-11"
    >
      <h3 className="max-w-4xl font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        What Reputation360 Does
      </h3>
      <div className="mt-3 h-1.5 w-20 rounded-full bg-[#79df86]" />
      <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-[#5d6c80] md:text-[14px] md:leading-relaxed">
        Tap a step to read the full headline and description in the panel.
      </p>

      <div className="mt-8 grid max-w-5xl gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-stretch lg:gap-8">
        <div>
          <ul className="flex list-none flex-row gap-2 overflow-x-auto pb-1 pl-0 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:gap-2.5 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
            {steps.map((stepItem, i) => {
              const Icon = stepItem.Icon;
              const selected = active === i;
              const shortLabel = faWhatWeDoStepLabel(stepItem.headline);
              return (
                <li
                  key={stepItem.step}
                  className="min-w-0 shrink-0 lg:w-full lg:shrink"
                >
                  <button
                    type="button"
                    aria-pressed={selected}
                    aria-label={`${stepItem.headline}. ${selected ? "Details shown in panel" : "Show this step in panel"}`}
                    onClick={() => setActive(i)}
                    className={`flex w-[min(280px,88vw)] items-center gap-3 rounded-2xl border px-3.5 py-3 text-left outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#1f3b64]/30 focus-visible:ring-offset-2 lg:w-full lg:px-4 lg:py-3.5 ${
                      selected
                        ? "border-[#1f3b64] bg-white shadow-[0_12px_28px_-14px_rgba(31,59,100,0.22)] ring-1 ring-[#1f3b64]/15"
                        : "border-[#dfe6ee] bg-white/70 hover:border-[#1f3b64]/25 hover:bg-white"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-[color,box-shadow,background-color] duration-200 ${
                        selected
                          ? "bg-[#e8eef9] text-[#0f2e58] shadow-[inset_0_0_0_2px_#0f2e58]"
                          : "bg-[#f0f2f7] text-[#1f3b64]/80"
                      }`}
                    >
                      <Icon
                        className="h-5 w-5"
                        aria-hidden
                        strokeWidth={selected ? 2.25 : 1.75}
                        absoluteStrokeWidth
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="font-heading text-[11px] font-bold tracking-wide text-[#1f3b64]/65 md:text-xs">
                        Step {stepItem.step}
                      </span>
                      <span className="mt-0.5 block font-heading text-[13px] font-semibold leading-snug text-[#0f2e58] md:text-sm">
                        {shortLabel}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="mt-2 text-left text-[11px] text-[#5d6c80] lg:hidden">
            Swipe horizontally to see all steps
          </p>
        </div>

        <aside
          className="flex flex-col rounded-2xl border border-[#1f3b64]/10 bg-white p-5 shadow-sm md:p-6 lg:sticky lg:top-28 lg:self-start"
          aria-live="polite"
        >
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8eef9] text-[#0f2e58] shadow-[inset_0_0_0_2px_#0f2e58] md:h-12 md:w-12">
              <ActiveIcon
                className="h-5 w-5 text-[#0f2e58] md:h-6 md:w-6"
                aria-hidden
                strokeWidth={2.25}
                absoluteStrokeWidth
              />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1f3b64]/45">
                This step
              </p>
              <h4 className="mt-1 font-heading text-[15px] font-bold leading-snug text-[#0f2e58] md:text-base">
                {item.headline}
              </h4>
            </div>
          </div>
          <p className="mt-4 text-[14px] leading-relaxed text-[#3f4f66] md:mt-5 md:text-[15px] md:leading-relaxed">
            {item.body}
          </p>
        </aside>
      </div>

      {footer ? (
        <div className="mt-8 max-w-5xl border-t border-[#dce3ec] pt-8">{footer}</div>
      ) : null}
    </section>
  );
}

export function IndustryRealisticTimelineSection({
  sectionId = "realistic-timeline",
  headingId = "realistic-timeline-heading",
}) {
  const [active, setActive] = useState(0);
  const n = REALISTIC_TIMELINE_PHASES.length;
  const phase = REALISTIC_TIMELINE_PHASES[active];
  const ActiveIcon = phase.Icon;

  return (
    <section
      id={sectionId}
      className="mt-14 scroll-mt-28 rounded-[24px] border border-[#dce3ec] bg-white px-5 py-9 shadow-[0_10px_28px_rgba(15,23,42,0.04)] md:mt-16 md:px-9 md:py-11"
    >
      <h3
        id={headingId}
        className="max-w-4xl font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]"
      >
        Realistic Timeline
      </h3>
      <div className="mt-3 h-1.5 w-20 rounded-full bg-[#79df86]" />
      <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-[#5d6c80] md:text-[14px] md:leading-relaxed">
        Tap a phase, use{" "}
        <span className="whitespace-nowrap font-medium text-[#3f4f66]">
          Previous / Next
        </span>
        , or focus the timeline below and press arrow keys, Home, or End.
      </p>

      <div
        role="group"
        aria-labelledby={headingId}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            e.preventDefault();
            setActive((i) => Math.min(n - 1, i + 1));
          }
          if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            e.preventDefault();
            setActive((i) => Math.max(0, i - 1));
          }
          if (e.key === "Home") {
            e.preventDefault();
            setActive(0);
          }
          if (e.key === "End") {
            e.preventDefault();
            setActive(n - 1);
          }
        }}
        className="mt-8 max-w-5xl rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#1f3b64]/30 focus-visible:ring-offset-2 md:rounded-2xl"
      >
        <div className="relative -mx-1 overflow-x-auto pb-2 pl-1 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-[min(100%,560px)] flex-row flex-nowrap items-center px-1 md:min-w-0 md:px-0">
            {REALISTIC_TIMELINE_PHASES.flatMap((p, i) => {
              const Icon = p.Icon;
              const selected = active === i;
              const btn = (
                <button
                  key={`${sectionId}-rt-node-${p.id}`}
                  type="button"
                  aria-pressed={selected}
                  aria-label={`${p.window}: ${p.body}`}
                  onClick={() => setActive(i)}
                  className={`group flex shrink-0 flex-col items-center rounded-2xl px-2 py-2 outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-[#1f3b64]/35 focus-visible:ring-offset-2 md:px-3 md:py-2 ${
                    selected ? "" : "opacity-[0.88] hover:opacity-100"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-[color,box-shadow,background-color] duration-200 md:h-11 md:w-11 ${
                      selected
                        ? "bg-[#e8eef9] text-[#0f2e58] shadow-[inset_0_0_0_2px_#0f2e58]"
                        : "bg-[#f0f2f7] text-[#1f3b64]/75 group-hover:text-[#1f3b64]"
                    }`}
                  >
                    <Icon
                      className="h-6 w-6 md:h-5 md:w-5"
                      aria-hidden
                      strokeWidth={selected ? 2.25 : 1.75}
                      absoluteStrokeWidth
                    />
                  </span>
                  <span
                    className={`mt-2 max-w-[7.5rem] text-center font-heading text-[10px] font-bold leading-tight tracking-wide md:max-w-none md:text-[11px] ${
                      selected ? "text-[#0f2e58]" : "text-[#5d6c80]"
                    }`}
                  >
                    {p.window}
                  </span>
                </button>
              );
              if (i >= n - 1) {
                return [btn];
              }
              const seg = (
                <div
                  key={`${sectionId}-rt-seg-${p.id}`}
                  className={`mx-1.5 h-1 min-w-[1.25rem] flex-1 rounded-full transition-colors duration-300 md:mx-3 ${
                    active > i ? "bg-[#0f2e58]" : "bg-[#e5eaf2]"
                  }`}
                  aria-hidden
                />
              );
              return [btn, seg];
            })}
          </div>
        </div>
        <p className="mt-1 text-left text-[11px] text-[#5d6c80] md:hidden">
          Swipe the timeline to see every phase. Bars fill as you advance.
        </p>

        <aside
          aria-live="polite"
          aria-labelledby={headingId}
          className="mt-5 rounded-2xl border border-[#1f3b64]/10 bg-[#f8f9fc] p-5 shadow-sm md:mt-8 md:p-7"
        >
          <div className="flex flex-wrap items-center gap-3 border-b border-[#dfe6ee] pb-4 md:gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8eef9] text-[#0f2e58] shadow-[inset_0_0_0_2px_#0f2e58] md:h-14 md:w-14">
              <ActiveIcon
                className="h-6 w-6 md:h-7 md:w-7"
                aria-hidden
                strokeWidth={2.25}
                absoluteStrokeWidth
              />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1f3b64]/45">
                Selected phase
              </p>
              <p className="mt-1 font-heading text-[18px] font-bold leading-snug text-[#0f2e58] md:text-xl">
                {phase.window}
              </p>
            </div>
            <span className="rounded-full bg-white px-3 py-1 font-heading text-xs font-bold text-[#1f3b64] ring-1 ring-[#dfe6ee] tabular-nums md:ml-auto">
              {active + 1} / {n}
            </span>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-[#3f4f66] md:mt-5 md:text-[16px] md:leading-relaxed">
            {phase.body}
          </p>
        </aside>

        <div className="mt-5 flex flex-wrap items-center justify-start gap-3 md:mt-6">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#dfe6ee] bg-white px-4 py-2.5 text-sm font-semibold text-[#0f2e58] shadow-sm transition-colors hover:border-[#1f3b64]/30 hover:bg-[#f8f9fc] disabled:pointer-events-none disabled:opacity-40"
            disabled={active === 0}
            onClick={() => setActive((i) => Math.max(0, i - 1))}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            Previous phase
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#dfe6ee] bg-white px-4 py-2.5 text-sm font-semibold text-[#0f2e58] shadow-sm transition-colors hover:border-[#1f3b64]/30 hover:bg-[#f8f9fc] disabled:pointer-events-none disabled:opacity-40"
            disabled={active === n - 1}
            onClick={() => setActive((i) => Math.min(n - 1, i + 1))}
          >
            Next phase
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      <p className="mt-6 w-full min-w-0 overflow-x-auto whitespace-nowrap pb-1 text-left text-[12px] leading-relaxed text-[#5d6c80] [scrollbar-width:thin] md:mt-8 md:text-[13px]">
        {REALISTIC_TIMELINE_DISCLAIMER}
      </p>
    </section>
  );
}
