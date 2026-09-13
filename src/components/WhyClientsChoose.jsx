import {
  CalendarClock,
  CircleDollarSign,
  Lock,
  SlidersHorizontal,
} from "lucide-react";

const SUPPORTING_BENEFITS = [
  {
    id: "confidential",
    title: "Confidential and Discreet",
    description:
      "Your privacy is protected from the first conversation through every stage of the engagement.",
    icon: Lock,
  },
  {
    id: "pricing",
    title: "Exceptional Service at Competitive Prices",
    description:
      "High-quality reputation management delivered by experienced specialists at highly competitive rates.",
    icon: CircleDollarSign,
  },
  {
    id: "timelines",
    title: "Clear Timelines and Honest Expectations",
    description:
      "Straightforward guidance on what can be improved, how the process works and what results are realistic.",
    icon: CalendarClock,
  },
  {
    id: "personalized",
    title: "Personalized for Your Reputation",
    description:
      "A focused strategy shaped around your search results, priorities and long-term visibility goals.",
    icon: SlidersHorizontal,
  },
];

function WhyChooseSerpIllustration() {
  return (
    <div className="r360-why-choose-serp" aria-hidden>
      <div className="r360-why-choose-serp-ai">
        <div className="r360-why-choose-serp-ai-head">
          <span className="r360-why-choose-serp-title">AI Overview</span>
          <span className="r360-why-choose-serp-check" aria-hidden>
            <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
              <path
                d="M2 6l3 3 5-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <span className="r360-why-choose-serp-line r360-why-choose-serp-line--green" />
        <span className="r360-why-choose-serp-line r360-why-choose-serp-line--blue" />
        <span className="r360-why-choose-serp-line r360-why-choose-serp-line--neutral" />
      </div>
      <div className="r360-why-choose-serp-google">
        <div className="r360-why-choose-serp-google-head">
          <span className="r360-why-choose-serp-title">Google Search</span>
          <span className="r360-why-choose-serp-check r360-why-choose-serp-check--lg" aria-hidden>
            <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
              <path
                d="M2 6l3 3 5-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <span className="r360-why-choose-serp-line r360-why-choose-serp-line--blue r360-why-choose-serp-line--wide" />
        <span className="r360-why-choose-serp-line r360-why-choose-serp-line--green" />
        <span className="r360-why-choose-serp-line r360-why-choose-serp-line--neutral" />
        <span className="r360-why-choose-serp-line r360-why-choose-serp-line--blue-soft" />
      </div>
      <div className="r360-why-choose-serp-trend">
        <svg viewBox="0 0 48 20" className="r360-why-choose-serp-trend-icon" fill="none" aria-hidden>
          <path
            d="M2 16l12-10 10 6 14-12"
            stroke="#4CAF50"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34 4l6-2v6"
            stroke="#4CAF50"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="r360-why-choose-serp-trend-label">Stronger visibility</span>
      </div>
    </div>
  );
}

function SupportingBenefitCard({ benefit }) {
  const Icon = benefit.icon;
  return (
    <div className="r360-why-choose-support-card flex h-full min-h-0 flex-col text-left">
      <div
        className="mb-2.5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#4CAF50]/30 bg-[#eef6ff] text-[#2E7D32] shadow-sm"
        aria-hidden
      >
        <Icon className="h-5 w-5 stroke-[2.25]" />
      </div>
      <h3 className="font-heading text-[0.98rem] font-bold leading-snug text-navy sm:text-base">
        {benefit.title}
      </h3>
      <p className="mt-1.5 flex-1 font-body text-sm leading-snug text-slate-600">{benefit.description}</p>
    </div>
  );
}

function WhyClientsChoose() {
  return (
    <section
      id="WhyClientsChoose"
      className="r360-why-choose-section relative w-full overflow-hidden border-b border-slate-200/80 py-9 text-navy md:py-11 lg:py-12"
      aria-labelledby="why-clients-heading"
    >
      <div className="r360-site-container r360-why-choose-shell relative">
        <div className="mb-4 text-center md:mb-5">
          <h2
            id="why-clients-heading"
            className="r360-why-choose-heading mx-auto max-w-4xl font-heading text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl lg:text-4xl"
          >
            Why Choose Reputation360 for Online Reputation Management
          </h2>
          <div
            className="mx-auto mt-2.5 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#1F3B64]"
            aria-hidden
          />
          <p className="r360-why-choose-subtitle mx-auto mt-3 font-body text-base leading-snug text-slate-600 sm:text-[1.05rem]">
            Specialist support, clear expectations and strategies built for lasting visibility
            across Google and AI Search.
          </p>
        </div>

        <div className="r360-why-choose-featured">
          <div className="r360-why-choose-featured-copy">
            <p className="r360-why-choose-featured-label font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-[#8fd99a] sm:text-xs">
              BUILT FOR GOOGLE AND AI SEARCH
            </p>
            <h3 className="mt-2 font-heading text-xl font-bold leading-snug text-white sm:text-2xl">
              Proven Across Google and AI Search
            </h3>
            <p className="r360-why-choose-featured-desc mt-2 max-w-xl font-body text-sm leading-relaxed sm:text-[0.95rem]">
              Strategies designed to strengthen how you appear in traditional search results and
              AI-powered experiences.
            </p>
          </div>
          <WhyChooseSerpIllustration />
        </div>

        <ul className="r360-why-choose-benefits-grid grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-4 lg:gap-4">
          {SUPPORTING_BENEFITS.map((benefit) => (
            <li key={benefit.id} className="flex min-w-0">
              <SupportingBenefitCard benefit={benefit} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyClientsChoose;
