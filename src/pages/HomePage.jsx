import { useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { SeoHead } from "../components/SeoHead.jsx";
import Hero from "../components/Hero";
import WhatWeBelieve from "../components/WhatWeBelieve";
import WhatWeDo from "../components/WhatWeDo";
import OurServices from "../components/OurServices";
import WhoWeServeCards from "../components/WhoWeServeCards";
import HowReputation360Works from "../components/HowReputation360Works";
import WhyClientsChoose from "../components/WhyClientsChoose";
import CaseStudies from "../components/CaseStudies";
import Contact from "../components/Contact";
import { homeTestimonials } from "../data/homeTestimonials.js";
import { testimonialPortraitUrl } from "../data/testimonialPortraits.js";

const HOME_SEO = {
  title: "Online Reputation Management in India | Reputation360",
  description:
    "Reputation360 helps individuals and brands in India take control of search and social: online reputation management, brand monitoring, and crisis response—backed by 7+ years of experience.",
};

function getInitials(fullName) {
  const n = fullName
    .replace(/^(dr\.?|prof\.?|mr\.?|mrs\.?|ms\.?)\s+/i, "")
    .trim();
  const parts = n.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    const a = parts[0][0];
    const b = parts[parts.length - 1][0];
    return (a + b).toUpperCase();
  }
  return (parts[0]?.slice(0, 2) ?? "?").toUpperCase();
}

const SCROLL_PAD = 0.9;

/** Filled star row, centered. */
function ReviewStars() {
  return (
    <div className="flex w-full justify-center" role="img" aria-label="5 out of 5 stars">
      <div className="inline-flex items-center gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className="h-4 w-4 text-amber-500 sm:h-[1.05rem] sm:w-[1.05rem]"
            fill="currentColor"
            strokeWidth={0}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Optional per-row `portrait`, else a fixed map from `testimonialPortraits.js` (one URL per
 * `id` — not duplicate pravatar). Last resort: pravatar. Falls back to initials on error.
 */
function TestimonialAvatar({ id, name, portraitUrl }) {
  const [useFallback, setUseFallback] = useState(false);
  const explicit =
    typeof portraitUrl === "string" && portraitUrl.trim() !== "" ? portraitUrl : null;
  const mapped = testimonialPortraitUrl(id);
  const src = explicit || mapped || `https://i.pravatar.cc/200?u=${encodeURIComponent(id)}`;

  if (useFallback) {
    return (
      <div
        className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-slate-100 text-xs font-semibold text-slate-600 sm:h-11 sm:w-11 sm:text-sm"
        aria-hidden
      >
        {getInitials(name)}
      </div>
    );
  }
  return (
    <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-slate-200/90 bg-slate-100 sm:h-11 sm:w-11">
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover object-top"
        loading="lazy"
        decoding="async"
        onError={() => setUseFallback(true)}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

/**
 * Inlined in HomePage — hero-style heading + B2B review cards (stars, horizontal scroller).
 */
function HomeTestimonials() {
  const reduce = useReducedMotion();
  const scrollerRef = useRef(null);
  const baseId = useId().replace(/[^a-z0-9_-]/gi, "x");
  const underlineId = `r360-testimonials-underline-${baseId}`;

  const scroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = Math.min(el.clientWidth * SCROLL_PAD, 520);
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  const navClass =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/90 bg-white text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/50 active:scale-[0.98] sm:h-12 sm:w-12";

  return (
    <section
      id="testimonials"
      className="relative border-y border-slate-200/80 bg-offwhite py-16 sm:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="relative z-[1] mx-auto max-w-3xl px-4 text-center sm:px-5">
        <h2
          id="testimonials-heading"
          className="font-heading text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
        >
          <span className="text-navy">Our Customers</span>{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              Love Us
            </span>
            <svg
              className="absolute -bottom-1.5 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
              aria-hidden
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8.5C50 2.5 150 2.5 198 8.5"
                stroke={`url(#${underlineId})`}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id={underlineId}
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
        <p className="mx-auto mt-3 max-w-2xl font-body text-base leading-relaxed text-slate-600 sm:mt-4 sm:text-lg">
          Honest feedback from people who trusted us with their reputation.
        </p>
      </div>

      <div className="relative z-[1] mx-auto mt-8 max-w-7xl px-3 sm:mt-10 sm:px-5">
        <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3">
          <button
            type="button"
            onClick={() => scroll(-1)}
            className={`${navClass} hidden flex-shrink-0 md:inline-flex`}
            aria-label="Show previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.25} />
          </button>
          <ul
            ref={scrollerRef}
            className="mx-auto flex min-w-0 flex-1 list-none items-stretch gap-3 overflow-x-auto scroll-px-4 [scrollbar-width:none] snap-x snap-mandatory [scroll-snap-type:x_mandatory] sm:gap-4 sm:px-0 md:px-0 [&::-webkit-scrollbar]:hidden"
            style={{
              paddingLeft: "max(1.25rem, env(safe-area-inset-left))",
              paddingRight: "max(1.25rem, env(safe-area-inset-right))",
            }}
            role="list"
            aria-label="Testimonials, scroll horizontally"
          >
            {homeTestimonials.map((t) => (
                <motion.li
                  key={t.id}
                  className="w-[min(30rem,calc(100vw-2.5rem))] max-w-full shrink-0 snap-start pl-0 pr-1 last:pr-0 md:max-w-none md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)]"
                  initial={reduce ? false : { opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
                  }
                >
                  <article className="flex w-full min-w-0 max-w-full flex-1 flex-col overflow-hidden rounded-lg border border-slate-200/90 bg-white text-left shadow-sm transition hover:shadow">
                    <div className="flex flex-1 flex-col p-4 sm:p-5 sm:px-6 sm:py-5 md:p-4 md:px-5 md:py-5 lg:px-4 lg:py-4">
                      <div className="flex w-full flex-col items-center text-center">
                        {t.label ? (
                          <span className="inline-flex max-w-full rounded border border-slate-200/90 bg-slate-50/90 px-2.5 py-0.5 text-xs font-medium text-slate-600 sm:text-[0.8rem]">
                            {t.label}
                          </span>
                        ) : null}
                        <div
                          className={
                            t.label
                              ? "mt-2.5 w-full sm:mt-3"
                              : "w-full"
                          }
                        >
                          <ReviewStars />
                        </div>
                      </div>
                      <h3 className="sr-only">Client review: {t.name}</h3>
                      <blockquote className="min-w-0 border-none pt-3 sm:pt-3.5">
                        <p className="font-body text-[0.98rem] leading-[1.72] text-slate-800 [text-wrap:pretty] sm:text-base sm:leading-[1.7]">
                          {t.quote}
                        </p>
                      </blockquote>
                      <div
                        className="my-5 h-px w-full bg-slate-200/90"
                        aria-hidden
                      />
                      <footer className="flex w-full min-w-0 items-start gap-3 sm:items-center sm:gap-3.5">
                        <TestimonialAvatar
                          id={t.id}
                          name={t.name}
                          portraitUrl={t.portrait}
                        />
                        <div className="min-w-0 flex-1">
                          <p className="font-heading text-sm font-bold leading-tight text-navy sm:text-[0.98rem]">
                            {t.name}
                          </p>
                          <p className="mt-0.5 min-w-0 break-words text-sm leading-relaxed text-slate-600">
                            {t.role}
                          </p>
                        </div>
                      </footer>
                    </div>
                  </article>
                </motion.li>
            ))}

          </ul>
          <button
            type="button"
            onClick={() => scroll(1)}
            className={`${navClass} hidden flex-shrink-0 md:inline-flex`}
            aria-label="Show next testimonials"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.25} />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 md:mt-5 md:hidden">
          <button
            type="button"
            onClick={() => scroll(-1)}
            className={navClass}
            aria-label="Show previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.25} />
          </button>
          <div
            className="mx-1 h-1 w-12 rounded-full bg-slate-200/90"
            aria-hidden
          />
          <button
            type="button"
            onClick={() => scroll(1)}
            className={navClass}
            aria-label="Show next testimonials"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <SeoHead
        title={HOME_SEO.title}
        description={HOME_SEO.description}
        canonicalPath="/"
      />
      <Hero />
      <main className="flex w-full flex-col gap-28 pt-16 md:gap-32 md:pt-24 lg:gap-40 lg:pt-28">
        <section>
          <WhatWeBelieve />
        </section>
        <section>
          <WhatWeDo />
        </section>
        <OurServices />
        <section className="bg-offwhite">
          <HomeTestimonials />
        </section>
        <WhoWeServeCards />
        <section className="bg-white">
          <HowReputation360Works />
        </section>
        <WhyClientsChoose />
        <CaseStudies />
        <Contact />
      </main>
    </>
  );
}

export default HomePage;
