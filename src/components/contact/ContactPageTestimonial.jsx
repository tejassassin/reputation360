import { Quote } from "lucide-react";

/**
 * @param {{ text: string; role: string; name: string }} props
 */
export function ContactPageTestimonial({ text, role, name }) {
  return (
    <section
      className="r360-contact-testimonial-section px-4 pb-8 pt-6 md:px-8 md:pb-10 md:pt-7 lg:pb-11 lg:pt-8"
      aria-label="Client testimonial"
    >
      <div className="mx-auto w-full max-w-[68.75rem]">
        <figure className="r360-contact-testimonial-card m-0 rounded-2xl border border-slate-200/90 bg-white px-5 py-7 text-center shadow-[0_16px_40px_-28px_rgba(15,35,60,0.18)] md:rounded-[1.25rem] md:px-8 md:py-8 lg:px-10">
          <span
            className="mx-auto mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#ecf8ec] text-[#4CAF50] md:mb-4"
            aria-hidden
          >
            <Quote className="h-4 w-4" strokeWidth={2.25} />
          </span>
          <blockquote className="m-0">
            <p className="r360-contact-testimonial-quote mx-auto mb-0 max-w-[56.25rem] font-heading font-medium italic leading-snug tracking-normal text-[#43474e]">
              {text}
            </p>
            <figcaption className="mt-4 font-heading text-[15px] font-semibold not-italic leading-relaxed text-[#02254d] md:mt-5 md:text-[16px]">
              <cite className="not-italic">{name}</cite>
              <span className="font-normal text-[#43474e]" aria-hidden>
                {" "}
                ·{" "}
              </span>
              <span className="font-normal text-[#43474e]">{role}</span>
            </figcaption>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
