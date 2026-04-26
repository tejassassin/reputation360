import { useId, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
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

const HOME_SEO = {
  title: "Online Reputation Management in India | Reputation360",
  description:
    "Reputation360 helps individuals and brands in India take control of search and social: online reputation management, brand monitoring, and crisis response—backed by 7+ years of experience.",
};

const tFadeUp = (reduce) => ({
  initial: { opacity: 0, y: reduce ? 0 : 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15, margin: "0px 0px -8% 0px" },
  transition: { duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] },
});

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

function TScroller({ children }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const scroll = (dir) => {
    const el = ref.current;
    if (!el) return;
    const step = Math.min(el.clientWidth * 0.72, 420);
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };
  return (
    <div className="group/scroller relative">
      <div
        className="pointer-events-none absolute left-0 top-0 z-[1] h-full w-10 bg-gradient-to-r from-[#f0f2f6] to-transparent sm:w-12 md:from-offwhite"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 z-[1] h-full w-10 bg-gradient-to-l from-[#f0f2f6] to-transparent sm:w-12 md:from-offwhite"
        aria-hidden
      />
      <ul
        ref={ref}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto py-1 pl-1 [scrollbar-width:none] md:gap-6 [&::-webkit-scrollbar]:hidden"
        role="list"
        style={{ paddingRight: "max(0.5rem, env(safe-area-inset-right))" }}
        aria-label="Client testimonial stories"
      >
        {children}
      </ul>
      <div className="mt-3 flex justify-end gap-2 pr-0 sm:mt-4 sm:pr-0">
        <button
          type="button"
          onClick={() => scroll(-1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/90 bg-white text-navy shadow-sm transition hover:border-navy/15 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50]/40"
          aria-label="Scroll stories left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/90 bg-white text-navy shadow-sm transition hover:border-navy/15 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50]/40"
          aria-label="Scroll stories right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function TSpotlightCard({ t, quoteId, reduce }) {
  return (
    <motion.div {...tFadeUp(reduce)} className="relative">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy/90 via-navy to-[#152E52] p-[1px] shadow-[0_32px_64px_-32px_rgba(15,35,60,0.55)]">
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/40 to-[#0a1628] px-6 py-8 text-left sm:px-10 sm:py-10 md:px-12 md:py-12">
          <div
            className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full bg-[#4CAF50]/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-[#2E5B88]/30 blur-3xl"
            aria-hidden
          />
          <div className="relative z-[1] flex flex-col items-start gap-5 md:flex-row md:gap-10">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4CAF50]/30 to-navy/80 p-[2px] shadow-lg shadow-black/20 sm:h-24 sm:w-24">
              <div
                className="flex h-full w-full items-center justify-center rounded-2xl border border-white/10 bg-navy/80 text-xl font-bold tracking-tight text-white sm:text-2xl"
                aria-hidden
              >
                {getInitials(t.name)}
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-4 flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                  Spotlight
                </span>
                {t.label ? (
                  <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/80">
                    {t.label}
                  </span>
                ) : null}
              </div>
              <div className="mb-1 text-white/40" aria-hidden>
                <Quote className="h-8 w-8 -scale-x-100" strokeWidth={1.25} />
              </div>
              <p
                id={quoteId}
                className="font-body text-lg font-medium leading-[1.65] text-slate-100/95 [text-wrap:pretty] sm:text-xl md:text-2xl md:leading-[1.55]"
              >
                {t.quote}
              </p>
              <footer className="mt-8 border-t border-white/10 pt-5">
                <p className="font-heading text-lg font-bold text-white">
                  {t.name}
                </p>
                <p className="mt-0.5 font-body text-sm text-slate-300/95">
                  {t.role}
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TStreamCard({ t, reduce }) {
  return (
    <li className="w-[min(100%,20rem)] shrink-0 snap-start sm:min-w-[22rem]">
      <motion.article
        {...tFadeUp(reduce)}
        className="group relative flex h-full min-h-[17rem] flex-col rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-slate-900/10"
      >
        {t.label ? (
          <span className="mb-2.5 inline-block w-max rounded-md bg-navy/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
            {t.label}
          </span>
        ) : (
          <span
            className="mb-2.5 h-0.5 w-8 rounded-full bg-gradient-to-r from-[#4CAF50] to-slate-300/80"
            aria-hidden
          />
        )}
        <blockquote className="mb-4 flex-1 text-[0.95rem] leading-[1.58] text-slate-700 [text-wrap:pretty]">
          <span
            className="text-[#4CAF50]/50 transition group-hover:text-[#4CAF50]/70"
            aria-hidden
          >
            &ldquo;
          </span>
          {t.quote}
          <span
            className="text-[#4CAF50]/50 transition group-hover:text-[#4CAF50]/70"
            aria-hidden
          >
            &rdquo;
          </span>
        </blockquote>
        <div className="mt-auto flex items-center gap-3.5 border-t border-slate-100 pt-3.5">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy/90 to-slate-700/90 text-xs font-bold text-white ring-1 ring-inset ring-white/15"
            aria-hidden
          >
            {getInitials(t.name)}
          </div>
          <div className="min-w-0">
            <p className="font-heading text-[0.9rem] font-bold leading-tight text-navy">
              {t.name}
            </p>
            <p className="mt-0.5 line-clamp-2 font-body text-xs leading-snug text-slate-500">
              {t.role}
            </p>
          </div>
        </div>
      </motion.article>
    </li>
  );
}

function TMasonryCard({ t, reduce }) {
  return (
    <li className="mb-5 break-inside-avoid [page-break-inside:avoid]">
      <motion.article
        {...tFadeUp(reduce)}
        className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_2px_8px_rgba(15,35,60,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4CAF50]/25 to-transparent opacity-0 transition group-hover:opacity-100"
          aria-hidden
        />
        {t.label ? (
          <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            {t.label}
          </span>
        ) : null}
        <blockquote className="mb-4 text-[0.9rem] leading-[1.58] text-slate-700 [text-wrap:pretty] sm:text-[0.95rem]">
          {t.quote}
        </blockquote>
        <div className="mt-auto flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/90 bg-slate-50 text-[0.7rem] font-bold text-navy"
            aria-hidden
          >
            {getInitials(t.name)}
          </div>
          <div>
            <p className="font-heading text-sm font-bold text-navy">
              {t.name}
            </p>
            <p className="line-clamp-2 font-body text-xs text-slate-500">
              {t.role}
            </p>
          </div>
        </div>
      </motion.article>
    </li>
  );
}

/**
 * Inlined in HomePage (not a separate file) so a separate module cannot stay
 * stuck in a stale HMR / browser cache and keep serving the old Unsplash parallax.
 */
function HomeTestimonials() {
  const reduce = useReducedMotion();
  const baseId = useId().replace(/[^a-z0-9_-]/gi, "x");
  const quoteId = `testimonial-spotlight-body-${baseId}`;
  const underlineId = `r360-testimonials-underline-${baseId}`;
  const [spotlight, ...forStream] = homeTestimonials;
  const stream = forStream;

  return (
    <section
      id="testimonials"
      data-r360-build="home-page-inline-v3"
      className="relative overflow-hidden px-4 py-20 text-center md:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute -left-1/3 top-0 h-[32rem] w-[70%] rounded-full bg-gradient-to-r from-navy/8 to-transparent blur-3xl" />
        <div className="absolute -right-1/4 top-1/2 h-80 w-[50%] rounded-full bg-gradient-to-l from-[#2E5B88]/10 to-transparent blur-3xl" />
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTSAxMCwwIEwgMCwwIDAsMTAgIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EiKSIgb3BhY2l0eT0iLjA0Ii8+PC9zdmc+')] opacity-[0.65]"
        />
      </div>

      <div className="relative z-[2]">
        <p className="mb-2 font-body text-sm font-semibold tracking-wide text-[#2e7d32]">
          Text client quotes (no image gallery, no Unsplash)
        </p>
        <h2
          id="testimonials-heading"
          className="font-heading mx-auto mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
        >
          <span className="text-navy">Our Customers</span>{" "}
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
                stroke={`url(#${underlineId})`}
                strokeWidth="4"
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

        <p className="font-heading mx-auto mb-3 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
          Honest feedback from people who trusted us with their reputation.
        </p>
        <p className="mx-auto mb-10 max-w-xl text-sm text-slate-500 md:mb-12">
          {homeTestimonials.length} in-depth client stories — including legal,
          healthcare, finance, and more.
        </p>

        <div className="mx-auto max-w-6xl text-left">
          <div
            className="mb-12 sm:mb-16 md:mb-20"
            aria-describedby={quoteId}
          >
            <TSpotlightCard
              t={spotlight}
              quoteId={quoteId}
              reduce={reduce}
            />
          </div>

          <div className="mb-4 text-left sm:px-0">
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              More client stories
            </h3>
            <p className="mt-1.5 text-sm text-slate-500">
              Swipe on mobile or use arrows — or scroll the grid below.
            </p>
          </div>

          <div className="md:hidden">
            <TScroller>
              {stream.map((t) => (
                <TStreamCard key={t.id} t={t} reduce={reduce} />
              ))}
            </TScroller>
          </div>

          <ul
            className="mb-0 hidden w-full list-none columns-1 p-0 [column-fill:balance] [column-gap:1.5rem] md:block md:columns-2 md:[column-gap:1.5rem] xl:columns-3"
            role="list"
            aria-label="Testimonials in columns"
          >
            {stream.map((t) => (
              <TMasonryCard key={t.id} t={t} reduce={reduce} />
            ))}
          </ul>
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
