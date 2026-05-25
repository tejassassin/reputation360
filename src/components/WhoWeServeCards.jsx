import {
  User,
  Landmark,
  UserSearch,
  Stethoscope,
  Gavel,
  Briefcase,
  Building,
  ArrowRight,
} from "lucide-react";
import BrandSectionBackdrop from "./BrandSectionBackdrop";
import { AUDIENCE_PATH } from "../constants/whoWeServePaths.js";

/** Header “Who We Serve?” links to /who-we-serve; each card links to its audience page. */
const categories = [
  {
    title: "Individuals",
    description:
      "Take control of what people find when they search your name online.",
    linkLabel: "Personal Reputation Management Services",
    href: AUDIENCE_PATH.individuals,
    icon: User,
  },
  {
    title: "Financial Advisors",
    description:
      "Strengthen trust and credibility when clients and regulators look you up.",
    linkLabel: "Online Reputation Management for Financial Advisors",
    href: AUDIENCE_PATH.financialAdvisors,
    icon: Landmark,
  },
  {
    title: "Executives & C-Suite Leaders",
    description:
      "Protect your leadership reputation and ensure your vision and impact come through clearly.",
    linkLabel: "Executive Reputation Repair Solutions",
    href: AUDIENCE_PATH.executives,
    icon: Briefcase,
  },
  {
    title: "Doctors & Healthcare Professionals",
    description:
      "Protect your practice where patient reviews, listings, and search results meet.",
    linkLabel: "Healthcare Reputation Management Services",
    href: AUDIENCE_PATH.doctors,
    icon: Stethoscope,
  },
  {
    title: "Lawyers & Attorneys",
    description:
      "Keep your professional standing clear when legal press and records surface in search.",
    linkLabel: "Lawyer Reputation Management Solutions",
    href: AUDIENCE_PATH.lawyers,
    icon: Gavel,
  },
  {
    title: "Job Seekers",
    description:
      "Put your best foot forward when employers and recruiters search your background.",
    linkLabel: "Personal Branding for Job Seekers",
    href: AUDIENCE_PATH.jobSeekers,
    icon: UserSearch,
  },
  {
    title: "Businesses & Companies",
    description:
      "Own your industry online through powerful branding and a strong search presence.",
    linkLabel: "Business Reputation Management Services",
    href: AUDIENCE_PATH.businesses,
    icon: Building,
  },
];

const audienceCardLinkClassName =
  "ha-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/6 p-6 text-left no-underline shadow-[0_8px_32px_-8px_rgba(10,20,40,0.5)] ring-1 ring-inset ring-white/10 backdrop-blur-md transition-all duration-300 sm:p-8 hover:-translate-y-0.5 hover:border-green/50 hover:from-white/18 hover:to-white/8 hover:shadow-[0_12px_40px_-10px_rgba(31,59,100,0.45),0_0_0_1px_rgba(76,175,80,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.linkLabel
 * @param {string} props.href
 * @param {import('lucide-react').LucideIcon} props.icon
 * @param {string} [props.className]
 */
function AudienceCard({ title, description, linkLabel, href, icon, className = "" }) {
  const IconComponent = icon;
  return (
    <li className={["list-none", className].filter(Boolean).join(" ")}>
      <a href={href} className={audienceCardLinkClassName}>
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-bl-full bg-slate/20 transition-transform duration-500 group-hover:scale-150"
          aria-hidden
        />
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-green/30 bg-navy/80 text-green shadow-sm shadow-navy/40 transition group-hover:border-green/55 group-hover:shadow-[0_0_24px_-6px_rgba(76,175,80,0.3)]">
          <IconComponent className="h-7 w-7 stroke-[1.75]" aria-hidden />
        </div>
        <h3 className="font-heading mb-3 text-xl leading-snug font-bold text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
          {title}
        </h3>
        <p className="mb-0 flex-1 text-[15px] font-medium leading-relaxed text-slate-100/95 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:text-base">
          {description}
        </p>
        <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/15 pt-5 sm:mt-7">
          <span className="min-w-0 flex-1 text-sm font-semibold leading-snug text-white [text-wrap:pretty] sm:text-[0.9375rem] sm:leading-normal">
            {linkLabel}
          </span>
          <span
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-white shadow-sm transition duration-300 group-hover:scale-105 group-hover:border-green/50 group-hover:bg-green group-hover:text-navy sm:h-11 sm:w-11"
            aria-hidden
          >
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.25} />
          </span>
        </div>
      </a>
    </li>
  );
}

export default function WhoWeServeCards() {
  const row2 = categories.slice(4);
  const lgColWidthClass =
    "w-full min-w-0 shrink-0 lg:w-[calc((100%-3*1.75rem)/4)]";

  return (
    <section
      className="relative overflow-hidden border-y border-white/[0.06] py-14 text-white md:py-20 lg:py-24"
      aria-labelledby="who-we-serve-heading"
    >
      <BrandSectionBackdrop />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-12 text-center md:mb-14">
          <h2
            id="who-we-serve-heading"
            className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Who we work with
          </h2>
          <div
            className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-green to-slate"
            aria-hidden
          />
        </div>

        <nav aria-label="Who we work with page links" className="sr-only">
          <ul className="m-0 list-none p-0">
            {categories.map((cat) => (
              <li key={cat.href} className="list-none">
                <a href={cat.href}>{cat.linkLabel}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="m-0 grid list-none grid-cols-1 items-stretch gap-6 p-0 sm:grid-cols-2 lg:hidden">
          {categories.map((cat) => (
            <AudienceCard key={cat.href} {...cat} />
          ))}
        </ul>

        <div className="hidden flex-col gap-7 lg:flex">
          <ul className="m-0 grid list-none grid-cols-4 items-stretch gap-7 p-0">
            {categories.slice(0, 4).map((cat) => (
              <AudienceCard key={cat.href} {...cat} />
            ))}
          </ul>
          <ul className="m-0 flex w-full list-none items-stretch justify-center gap-7 p-0">
            {row2.map((cat) => (
              <AudienceCard key={cat.href} {...cat} className={lgColWidthClass} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
