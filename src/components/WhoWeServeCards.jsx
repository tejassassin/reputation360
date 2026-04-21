import {
  User,
  Landmark,
  UserSearch,
  Stethoscope,
  Gavel,
  Briefcase,
  Building,
} from "lucide-react";

/** Mirrors Header “Who We Serve?” — one card per audience page. */
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

export default function WhoWeServeCards() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:py-20">
      <div className="mb-12 text-center md:mb-16">
        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-[#02254d] md:text-5xl">
          Who we work with
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-7">
        {categories.map(({ title, description, Icon, href }) => (
          <a
            key={title}
            href={href}
            className="ha-lift group relative block overflow-hidden rounded-xl border border-transparent bg-white p-8 no-underline transition-all duration-300 hover:border-[#dce2f7] hover:shadow-2xl hover:shadow-[#02254d]/5"
          >
            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-bl-full bg-[#78dc77]/5 transition-transform group-hover:scale-150" />
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f1f3ff] text-[#78dc77]">
              <Icon className="h-7 w-7 stroke-[1.75]" aria-hidden />
            </div>
            <h3 className="font-heading mb-4 text-xl leading-snug font-bold text-[#02254d]">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-[#43474e]">{description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
