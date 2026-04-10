import { User, Briefcase, Scale, Building } from "lucide-react";

const categories = [
  {
    title: "Individuals",
    description:
      "Personal brand protection for high-net-worth individuals seeking to reclaim their search narrative.",
    Icon: User,
  },
  {
    title: "Founders, CEOs & Senior Executives",
    description:
      "Safeguarding leadership legacy through strategic content promotion and crisis suppression.",
    Icon: Briefcase,
  },
  {
    title: "Doctors, lawyers & professionals",
    description:
      "Industry-specific compliance-ready strategies to maintain impeccable professional standing.",
    Icon: Scale,
  },
  {
    title: "Brands and companies of all sizes",
    description:
      "Scalable solutions for corporate entities to dominate their industry search landscape globally.",
    Icon: Building,
  },
];

function WhoWeWorkWith() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:py-20">
      <div className="mb-12 text-center md:mb-16">
        <span className="mb-4 block text-xs font-bold tracking-widest text-[#78dc77] uppercase">
          Tailored Strategies
        </span>
        <h2 className="font-heading mb-5 text-4xl font-extrabold tracking-tight text-[#02254d] md:text-5xl">
          Who we work with
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#43474e]">
          Precision reputation management crafted for those whose digital
          footprint is their most valuable asset.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map(({ title, description, Icon }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-xl border border-transparent bg-white p-8 transition-all duration-300 hover:border-[#dce2f7] hover:shadow-2xl hover:shadow-[#02254d]/5"
          >
            <div className="absolute -top-12 -right-12 h-24 w-24 rounded-bl-full bg-[#78dc77]/5 transition-transform group-hover:scale-150" />
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f1f3ff] text-[#78dc77]">
              <Icon className="h-7 w-7 stroke-[1.75]" aria-hidden />
            </div>
            <h3 className="font-heading mb-4 text-xl leading-snug font-bold text-[#02254d]">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-[#43474e]">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhoWeWorkWith;
