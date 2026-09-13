import {
  Compass,
  Layers,
  Lock,
  MessageSquare,
  Route,
  ShieldCheck,
} from "lucide-react";

const STANDARDS = [
  {
    heading: "Ethical Engagements",
    description:
      "We assess every inquiry carefully and work within clear professional and ethical standards.",
    Icon: ShieldCheck,
  },
  {
    heading: "Sustainable Strategies",
    description:
      "We focus on responsible, durable approaches rather than shortcuts that may create additional reputation risks.",
    Icon: Layers,
  },
  {
    heading: "Honest Expectations",
    description:
      "We explain what can reasonably be pursued, the factors that may affect progress and the timelines involved.",
    Icon: Compass,
  },
  {
    heading: "Personalized Planning",
    description:
      "Every reputation management strategy is shaped around the client's circumstances, priorities and goals.",
    Icon: Route,
  },
  {
    heading: "Privacy-First Support",
    description:
      "Every client situation is handled discreetly, with careful attention to privacy throughout the engagement.",
    Icon: Lock,
  },
  {
    heading: "Clear Communication",
    description:
      "We keep clients informed through clear milestones, progress updates and recommended next steps.",
    Icon: MessageSquare,
  },
];

function StandardsCard({ item }) {
  const { Icon } = item;
  return (
    <div className="r360-about-our-standards-card flex h-full min-w-0 flex-col items-start text-left">
      <span
        className="r360-about-our-standards-icon flex shrink-0 items-center justify-center text-[#4CAF50]"
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <h3 className="r360-about-our-standards-card-heading mb-0 font-heading text-lg font-bold leading-snug text-white">
        {item.heading}
      </h3>
      <p className="r360-about-our-standards-card-desc mb-0 font-body text-[15px] text-slate-300/95 md:text-base">
        {item.description}
      </p>
    </div>
  );
}

export function AboutOurStandardsSection() {
  return (
    <section
      id="what-we-dont"
      className="r360-about-our-standards-section relative overflow-x-clip scroll-mt-28 text-white md:scroll-mt-32"
      aria-labelledby="about-our-standards-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(175deg,#1F3B64_0%,#1a2f4d_38%,#223a58_70%,#2E5B88_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_65%_at_50%_-5%,rgba(46,91,136,0.45),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_0%_100%,rgba(76,175,80,0.12),transparent_52%)]"
        aria-hidden
      />

      <div className="relative z-10 r360-about-our-standards-inner mx-auto w-full max-w-7xl px-6 lg:px-8">
        <header className="r360-about-our-standards-intro mx-auto text-center">
          <p className="mb-0 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#4CAF50]">
            OUR STANDARDS
          </p>
          <h2
            id="about-our-standards-heading"
            className="r360-about-our-standards-heading mb-0 font-heading text-3xl font-extrabold leading-tight text-white md:text-[2.05rem]"
          >
            The Principles Behind Our Reputation Management Work
          </h2>
          <p className="r360-about-our-standards-lead mb-0 font-body text-base leading-[1.6] text-slate-100/90 md:text-lg">
            Our work is guided by ethical practices, personalized strategies, honest expectations and respect for every client&apos;s privacy.
          </p>
        </header>

        <ol className="r360-about-our-standards-list m-0 list-none p-0">
          {STANDARDS.map((item) => (
            <li key={item.heading} className="r360-about-our-standards-item min-w-0">
              <StandardsCard item={item} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
