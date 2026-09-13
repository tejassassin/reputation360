import { useEffect, useRef, useState } from "react";
import { motion as Motion } from "motion/react";
import {
  Clock,
  Globe2,
  MapPinned,
} from "lucide-react";
import { AboutHero } from "../components/about/AboutHero.jsx";
import { AboutOurStorySection } from "../components/about/AboutOurStorySection.jsx";
import { AboutWhoWeServeSection } from "../components/about/AboutWhoWeServeSection.jsx";
import { AboutHowWeWorkSection } from "../components/about/AboutHowWeWorkSection.jsx";
import { AboutOurStandardsSection } from "../components/about/AboutOurStandardsSection.jsx";
import { AboutClientExperiencesSection } from "../components/about/AboutClientExperiencesSection.jsx";
import { AboutFinalConsultationSection } from "../components/about/AboutFinalConsultationSection.jsx";
import { SeoHead } from "../components/SeoHead.jsx";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";
import { StatNumber } from "../components/StatNumber.jsx";

const whoWeAreStats = [
  { head: "Global", partA: "Time zones", partB: "covered", Icon: Globe2 },
  { head: "24/7", partA: "Coverage", partB: "always on", Icon: Clock },
  { countEnd: 30, countSuffix: "+", partA: "Countries", partB: "served", Icon: MapPinned },
];

const whoWeAreStatRow = [
  { end: 47, suffix: "", label: "Specialists" },
  { end: 1100, suffix: "+", label: "Clients" },
  { end: 7, suffix: "+", label: "Years" },
];

const headlineFont = "font-[Manrope,Inter,sans-serif]";

const aboutView = { once: true, amount: 0.22, margin: "0px 0px -8% 0px" };

const aboutScrollTargetClass = "scroll-mt-28 md:scroll-mt-32";

function AboutPage() {
  const whoWeAreRef = useRef(null);
  const [whoWeAreStatsLive, setWhoWeAreStatsLive] = useState(false);

  const seo = useLocalizedSeo("about");

  useEffect(() => {
    const el = whoWeAreRef.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setWhoWeAreStatsLive(true);
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.18 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <SeoHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.path}
      />
    <main className="relative flex-1 bg-[#f4f6fb] text-slate-800">
      <AboutHero />

      <AboutOurStorySection />

      <AboutWhoWeServeSection />

      <AboutHowWeWorkSection />

      <AboutOurStandardsSection />

      {/* Who Are We */}
      <section
        ref={whoWeAreRef}
        id="who-we-are"
        className={`relative overflow-hidden border-y border-slate-200/80 pb-20 pt-14 md:pb-24 md:pt-20 ${aboutScrollTargetClass}`}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,#f8fafc_0%,#eef6ff_40%,#f0fdf4_100%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <Motion.div
            className="r360-about-who-we-are-header mb-8 text-center md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={aboutView}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="r360-about-who-we-are-eyebrow mb-0 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#4CAF50]">
              THE REPUTATION360 TEAM
            </p>
            <h2
              className={`r360-about-who-we-are-heading mb-0 ${headlineFont} text-3xl font-extrabold text-[#1F3B64] md:text-[2.1rem]`}
            >
              The Experience and Expertise Behind Reputation360
            </h2>
            <p className="r360-about-who-we-are-lead mb-0 font-body text-slate-600">
              A coordinated team of specialists supporting clients through personalized strategy, careful execution and ongoing reputation management.
            </p>
          </Motion.div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {whoWeAreStats.map((row, i) => {
              const { head, countEnd, countSuffix, partA, partB, Icon } = row;
              return (
                <Motion.div
                  key={partA + partB}
                  className="group flex cursor-default items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-shadow duration-300 ease-out hover:border-[#4CAF50]/40 hover:shadow-lg hover:shadow-slate-900/10 will-change-transform md:p-6"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={aboutView}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 420, damping: 28 } }}
                >
                  <span
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4CAF50]/12 text-[#2d8a3e] ring-1 ring-[#4CAF50]/20 transition-all duration-300 will-change-transform group-hover:scale-105 group-hover:bg-[#4CAF50]/20 group-hover:ring-[#4CAF50]/40"
                    aria-hidden
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0 flex-1 text-left">
                    <p
                      className={`${headlineFont} text-2xl font-extrabold text-[#4CAF50] tabular-nums sm:text-[1.75rem]`}
                    >
                      {countEnd != null ? (
                        <StatNumber
                          className="inline"
                          end={countEnd}
                          suffix={countSuffix}
                          start={whoWeAreStatsLive}
                        />
                      ) : (
                        head
                      )}
                    </p>
                    <p className="text-[12px] leading-tight text-slate-600 md:text-[13px]">
                      <span className="font-extrabold uppercase tracking-wider text-slate-600">
                        {partA}
                      </span>{" "}
                      <span className="font-medium text-slate-500">{partB}</span>
                    </p>
                  </div>
                </Motion.div>
              );
            })}
          </div>

          <Motion.div
            className="mt-10 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_20px_50px_-32px_rgba(15,35,60,0.14)] md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={aboutView}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="grid grid-cols-1 divide-y divide-slate-200/80 md:grid-cols-3 md:divide-x md:divide-y-0">
              {whoWeAreStatRow.map((s) => (
                <Motion.div
                  key={s.label}
                  className="relative flex cursor-default flex-col items-center rounded-2xl px-5 py-7 text-center transition-shadow duration-300 will-change-transform hover:bg-gradient-to-b hover:from-white hover:to-[#f0fdf4] hover:shadow-md hover:ring-1 hover:ring-inset hover:ring-[#4CAF50]/20 md:px-3 md:py-9"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 420, damping: 30 }}
                >
                  <p
                    className={`${headlineFont} text-4xl font-extrabold tabular-nums text-[#4CAF50] transition-colors duration-200 md:text-[2.75rem]`}
                  >
                    <StatNumber
                      className="inline"
                      end={s.end}
                      suffix={s.suffix}
                      start={whoWeAreStatsLive}
                    />
                  </p>
                  <p
                    className={`${headlineFont} mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#1F3B64] md:text-[13px]`}
                  >
                    {s.label}
                  </p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      <AboutClientExperiencesSection />

      <AboutFinalConsultationSection />
    </main>
    </>
  );
}

export default AboutPage;
