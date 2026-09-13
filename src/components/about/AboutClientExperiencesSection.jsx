import { TestimonialsSection } from "../HomeTestimonials.jsx";

const aboutScrollTargetClass = "scroll-mt-28 md:scroll-mt-32";

const aboutTestimonialsSubheadingClass =
  "r360-about-testimonials-lead mx-auto mt-3 max-w-2xl font-body text-base leading-[1.55] text-slate-600 sm:text-[1.05rem]";

export function AboutClientExperiencesSection() {
  return (
    <TestimonialsSection
      id="client-stories"
      headingId="about-client-experiences-heading"
      eyebrow="CLIENT EXPERIENCES"
      heading="What Clients Say About Working With Reputation360"
      subheading="Experiences shared by clients we have supported through personalized online reputation management."
      sectionClassName={`r360-about-testimonials-section ${aboutScrollTargetClass}`}
      compactPadding={false}
      subheadingClassName={aboutTestimonialsSubheadingClass}
    />
  );
}
