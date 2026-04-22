import {
  User,
  Landmark,
  UserSearch,
  Stethoscope,
  Gavel,
  Briefcase,
  Building,
} from "lucide-react";

/** Mirrors Header “Who We Serve?” - one card per audience page. */
const categories = [
  {
    title: "Individuals",
    description:
      "Take control of what people find when they search your name online.",
    href: "/services/individuals",
    Icon: User,
  },
  {
    title: "Financial Advisors",
    description:
      "Strengthen trust and credibility when clients and regulators look you up.",
    href: "/services/financial-advisors",
    Icon: Landmark,
  },
  {
    title: "Job Seekers",
    description:
      "Put your best foot forward when employers and recruiters search your background.",
    href: "/services/job-seekers",
    Icon: UserSearch,
  },
  {
    title: "Doctors & Healthcare Professionals",
    description:
      "Protect your practice where patient reviews, listings, and search results meet.",
    href: "/services/doctors",
    Icon: Stethoscope,
  },
  {
    title: "Lawyers & Attorneys",
    description:
      "Keep your professional standing clear when legal press and records surface in search.",
    href: "/services/lawyers",
    Icon: Gavel,
  },
  {
    title: "Executives & C-Suite Leaders",
    description:
      "Protect your leadership reputation and ensure your vision and impact come through clearly.",
    href: "/services/executives",
    Icon: Briefcase,
  },
  {
    title: "Businesses & Companies",
    description:
      "Own your industry online through powerful branding and a strong search presence.",
    href: "/services/businesses",
    Icon: Building,
  },
];

/** Aligned with Our Services: dark cards, mint icon, white title, slate body, white/10 border. */
const audienceCardClassName =
  "ha-lift group relative block overflow-hidden rounded-xl border border-white/10 bg-[#0c2133] p-6 no-underline shadow-none transition-all duration-300 sm:p-8 hover:border-[#4ade80]/40 hover:bg-[#0f2a3f]";

function AudienceCard({
  title,
  description,
  href,
  Icon,
  className = "",
}) {
  return (
    <a
      href={href}
      className={`${audienceCardClassName} ${className} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ade80]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020911]`.trim()}
    >
      <div className="absolute -right-12 -top-12 h-24 w-24 rounded-bl-full bg-[#4ade80]/[0.08] transition-transform group-hover:scale-150" />
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(5,22,38,0.95)] text-[#4ade80] transition-colors group-hover:text-[#86efac]">
        <Icon className="h-7 w-7 stroke-[1.75]" aria-hidden />
      </div>
      <h3 className="font-heading mb-4 text-xl leading-snug font-bold text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[#94a3b8] md:text-[15px]">
        {description}
      </p>
    </a>
  );
}

export default function WhoWeServeCards() {
  const row2 = categories.slice(4);
  /** Matches one column of the lg 4-col grid: same width as row-1 cards */
  const lgColWidthClass =
    "w-full min-w-0 shrink-0 lg:w-[calc((100%-3*1.75rem)/4)]";

  return (
    <section
      className="relative overflow-hidden py-12 text-white md:py-16 lg:py-20"
      aria-labelledby="who-we-serve-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020911] via-[#051626] to-[#0a253e]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(10,40,60,0.5),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.12)_1px,transparent_0)] bg-[length:40px_40px] opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#4ade80]/[0.08] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-[#0a253e] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-10 text-center md:mb-12">
          <h2
            id="who-we-serve-heading"
            className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Who we work with
          </h2>
          <div
            className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4ade80] to-cyan-400/90"
            aria-hidden
          />
        </div>

      {/* sm–md: 2 cols; &lt;lg: stacked flow */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
        {categories.map((props) => (
          <AudienceCard key={props.title} {...props} />
        ))}
      </div>

      {/* lg+: 4 + 3 with last row centered */}
      <div className="hidden flex-col gap-7 lg:flex">
        <div className="grid grid-cols-4 gap-7">
          {categories.slice(0, 4).map((props) => (
            <AudienceCard key={props.title} {...props} />
          ))}
        </div>
        <div className="flex w-full justify-center gap-7">
          {row2.map((props) => (
            <AudienceCard key={props.title} {...props} className={lgColWidthClass} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
