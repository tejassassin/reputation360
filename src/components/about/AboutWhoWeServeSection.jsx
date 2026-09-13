import {
  BarChart3,
  Building2,
  Gavel,
  Landmark,
  Stethoscope,
  User,
} from "lucide-react";
import {
  AUDIENCE_PATH,
} from "../../constants/whoWeServePaths.js";
import { internalAnchorProps } from "../../lib/internalLinkProps.js";

const WHO_WE_SERVE_CARDS = [
  {
    icon: User,
    heading: "Online Reputation Management for Individuals",
    description:
      "Personalized support for people addressing unwanted search results or building a stronger digital presence.",
    linkText: "Explore Individual Solutions →",
    href: AUDIENCE_PATH.individuals,
  },
  {
    icon: Landmark,
    heading: "Reputation Management for Financial Advisors",
    description:
      "Helping financial professionals protect the credibility and trust their work depends on.",
    linkText: "Explore Financial Advisor Solutions →",
    href: AUDIENCE_PATH.financialAdvisors,
  },
  {
    icon: Stethoscope,
    heading: "Reputation Management for Doctors",
    description:
      "Supporting physicians and healthcare professionals in protecting trust across search and review platforms.",
    linkText: "Explore Healthcare Solutions →",
    href: AUDIENCE_PATH.doctors,
  },
  {
    icon: Gavel,
    heading: "Reputation Management for Lawyers",
    description:
      "Helping attorneys strengthen the online credibility their clients and professional relationships depend on.",
    linkText: "Explore Legal Solutions →",
    href: AUDIENCE_PATH.lawyers,
  },
  {
    icon: BarChart3,
    heading: "Executive Reputation Management",
    description:
      "Building credible search visibility for executives, founders and C-suite leaders.",
    linkText: "Explore Executive Solutions →",
    href: AUDIENCE_PATH.executives,
  },
  {
    icon: Building2,
    heading: "Business Reputation Management",
    description:
      "Helping companies protect brand trust, address reputation risks and strengthen their online presence.",
    linkText: "Explore Business Solutions →",
    href: AUDIENCE_PATH.businesses,
  },
];

function WhoWeServeCard({ card }) {
  const Icon = card.icon;
  return (
    <a
      href={card.href}
      {...internalAnchorProps(card.href)}
      aria-label={`${card.linkText.replace(/\s→$/, "")} - ${card.heading}`}
      className="r360-about-who-we-serve-card group flex h-full min-w-0 flex-col items-start rounded-xl border border-slate-200/90 bg-white text-left no-underline shadow-sm"
    >
      <span
        className="r360-about-who-we-serve-card-icon flex shrink-0 items-center justify-center rounded-xl bg-[#1F3B64]/[0.06] text-[#1F3B64] ring-1 ring-[#1F3B64]/10"
        aria-hidden
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </span>
      <h3 className="r360-about-who-we-serve-card-heading font-heading text-lg font-bold leading-snug text-[#1F3B64]">
        {card.heading}
      </h3>
      <p className="r360-about-who-we-serve-card-desc mb-0 font-body text-sm leading-[1.6] text-[#6B7280] md:text-[15px]">
        {card.description}
      </p>
      <span className="r360-about-who-we-serve-card-link mt-auto font-heading text-sm font-semibold text-[#4CAF50]">
        <span className="r360-about-who-we-serve-card-link-text">{card.linkText}</span>
      </span>
    </a>
  );
}

export function AboutWhoWeServeSection() {
  return (
    <section
      id="who-we-serve"
      className="r360-about-who-we-serve-section relative bg-white scroll-mt-28 md:scroll-mt-32"
    >
      <div className="r360-about-who-we-serve-inner mx-auto w-full max-w-7xl px-6 lg:px-8">
        <header className="r360-about-who-we-serve-intro mx-auto text-center">
          <p className="mb-0 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#4CAF50]">
            WHO WE SERVE
          </p>
          <h2 className="r360-about-who-we-serve-heading mb-0 font-heading text-3xl font-extrabold leading-tight text-[#1F3B64] md:text-[2.1rem]">
            Reputation Management for People and Businesses
          </h2>
          <p className="r360-about-who-we-serve-lead mb-0 font-body text-base leading-[1.6] text-[#6B7280] md:text-lg">
            We develop personalized online reputation strategies for individuals, professionals and
            organizations facing distinct challenges across Google and AI-powered search.
          </p>
        </header>

        <ul className="r360-about-who-we-serve-grid m-0 list-none p-0">
          {WHO_WE_SERVE_CARDS.map((card) => (
            <li key={card.href} className="min-w-0">
              <WhoWeServeCard card={card} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
