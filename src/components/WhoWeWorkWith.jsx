import { User, Briefcase, Scale, Building } from "lucide-react";

const categories = [
  {
    title: "Individuals",
    description:
      "Take control of what people find when they search your name online.",
    Icon: User,
  },
  {
    title: "Executives & C-Suite Leaders",
    description:
      "Protect your leadership reputation and ensure your vision and impact come through clearly.",
    Icon: Briefcase,
  },
  {
    title: "Doctors & Healthcare Professionals, Lawyers & Attorneys",
    description:
      "One negative article can damage your business. We help you build a positive brand online.",
    Icon: Scale,
  },
  {
    title: "Businesses & Brands",
    description:
      "Own your industry online through powerful branding and a strong search presence.",
    Icon: Building,
  },
];

function WhoWeWorkWith() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:py-20">
      <div className="mb-12 text-center md:mb-16">
        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-[#02254d] md:text-5xl">
          Who we work with
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map(({ title, description, Icon }) => (
          <div
            key={title}
            className="ha-lift group relative overflow-hidden rounded-xl border border-transparent bg-white p-8 transition-all duration-300 hover:border-[#dce2f7] hover:shadow-2xl hover:shadow-[#02254d]/5"
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
