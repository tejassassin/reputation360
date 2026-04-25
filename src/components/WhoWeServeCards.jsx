import {
  User,
  Landmark,
  UserSearch,
  Stethoscope,
  Gavel,
  Briefcase,
  Building,
} from "lucide-react";
import BrandSectionBackdrop from "./BrandSectionBackdrop";

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

/** Matches “Why clients…”: frosted card, growth green on icon ring only. */
const audienceCardClassName =
  "ha-lift group relative block overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/6 p-6 no-underline shadow-[0_8px_32px_-8px_rgba(10,20,40,0.5)] ring-1 ring-inset ring-white/10 backdrop-blur-md transition-all duration-300 sm:p-8 hover:-translate-y-0.5 hover:border-[#4CAF50]/50 hover:from-white/18 hover:to-white/8 hover:shadow-[0_12px_40px_-10px_rgba(31,59,100,0.45),0_0_0_1px_rgba(76,175,80,0.12)]";

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
      className={`${audienceCardClassName} ${className} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A3354]`.trim()}
    >
      <div className="absolute -right-12 -top-12 h-24 w-24 rounded-bl-full bg-[#2E5B88]/[0.15] transition-transform group-hover:scale-150" />
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#4CAF50]/30 bg-[#0f1c2c]/80 text-[#4CAF50] shadow-sm shadow-[#0d1825]/40 transition group-hover:border-[#4CAF50]/55 group-hover:shadow-[0_0_24px_-6px_rgba(76,175,80,0.3)]">
        <Icon className="h-7 w-7 stroke-[1.75]" aria-hidden />
      </div>
      <h3 className="font-heading mb-4 text-xl leading-snug font-bold text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
        {title}
      </h3>
      <p className="text-[15px] font-medium leading-relaxed text-slate-100 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:text-base">
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
            className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#2E5B88]"
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
