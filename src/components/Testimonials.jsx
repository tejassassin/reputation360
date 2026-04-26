/* @refresh reset */
import { homeTestimonials } from "../data/homeTestimonials.js";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="px-4 py-20 text-center md:py-24"
      aria-labelledby="testimonials-heading"
    >
      <h2
        id="testimonials-heading"
        className="font-heading mx-auto mb-4 text-4xl font-bold leading-tight text-navy md:text-5xl lg:text-6xl"
      >
        Our Customers{" "}
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
            Love Us
          </span>
          <svg
            className="absolute -bottom-2 left-0 w-full"
            viewBox="0 0 200 12"
            fill="none"
            aria-hidden
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 8.5C50 2.5 150 2.5 198 8.5"
              stroke="url(#r360-testimonials-underline)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="r360-testimonials-underline"
                x1="2"
                y1="8.5"
                x2="198"
                y2="8.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F59E0B" />
                <stop offset="0.5" stopColor="#F97316" />
                <stop offset="1" stopColor="#F43F5E" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </h2>

      <p className="font-heading mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-600 md:mb-14 md:text-xl">
        Honest feedback from people who trusted us with their reputation.
      </p>

      <div className="mx-auto max-w-6xl text-left">
        <ul
          className="grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 md:gap-7 lg:gap-8"
          role="list"
        >
          {homeTestimonials.map((t) => (
            <li key={t.id} className="min-w-0">
              <article className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_1px_3px_rgba(15,35,60,0.06)] sm:p-7">
                {t.label ? (
                  <p className="mb-3 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    {t.label}
                  </p>
                ) : null}
                <blockquote
                  className="font-body mb-6 flex-1 text-[15px] leading-relaxed text-slate-800 sm:text-base [text-wrap:pretty]"
                >
                  <span className="text-[#4CAF50] opacity-80" aria-hidden>
                    &ldquo;
                  </span>
                  {t.quote}
                  <span className="text-[#4CAF50] opacity-80" aria-hidden>
                    &rdquo;
                  </span>
                </blockquote>
                <footer className="border-t border-slate-100 pt-4">
                  <p className="font-heading text-base font-semibold text-navy">
                    {t.name}
                  </p>
                  <p className="mt-0.5 font-body text-sm leading-snug text-slate-600">
                    {t.role}
                  </p>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
