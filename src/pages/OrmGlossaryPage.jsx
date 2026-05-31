import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FaqAccordion } from "../components/FaqAccordion";
import { SeoHead } from "../components/SeoHead.jsx";
import { StatNumber } from "../components/StatNumber.jsx";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";
import {
  ORM_GLOSSARY_NAV,
  ORM_GLOSSARY_PAGE,
  ORM_GLOSSARY_SECTIONS,
  ORM_GLOSSARY_TERM_COUNT,
} from "../data/ormGlossaryData.js";

function GlossaryAnswer({ blocks }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        if (block.t === "p") {
          return (
            <p key={index}>
              {block.text}
            </p>
          );
        }

        if (block.t === "example") {
          return (
            <div
              key={index}
              className="rounded-xl border border-[#4CAF50]/18 bg-[linear-gradient(180deg,#f8fdf8_0%,#f3faf5_100%)] px-4 py-4 text-[#35516f]"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#4CAF50]">
                Example
              </p>
              <p className="mt-2 leading-relaxed">{block.text}</p>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

function GlossarySection({ id, title, description, items, defaultOpenFirst = false }) {
  return (
    <section id={id} className="scroll-mt-36">
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-0.5 w-12 bg-[#4CAF50]" />
            <h2 className="font-headline-faq text-3xl font-bold tracking-tight text-[#2E5B88]">
              {title}
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-relaxed text-[#6B7280] md:text-lg">
            {description}
          </p>
        </div>
        <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#dbe5f0] bg-white px-4 py-2 shadow-sm">
          <span className="font-headline-faq text-xl font-bold text-[#1F3B64]">
            {String(items.length).padStart(2, "0")}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6B7280]">
            terms
          </span>
        </div>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <FaqAccordion
            key={`${id}-${item.term}`}
            question={`${item.term}?`}
            defaultOpen={defaultOpenFirst && index === 0}
          >
            <GlossaryAnswer blocks={item.blocks} />
          </FaqAccordion>
        ))}
      </div>
    </section>
  );
}

const sidebarLinks = ORM_GLOSSARY_NAV.map((section) => ({
  href: `#${section.id}`,
  label: section.label,
}));

const glossarySectionIds = ORM_GLOSSARY_NAV.map((section) => section.id);
const GLOSSARY_SCROLL_SPY_OFFSET_PX = 148;

const heroStatCardClass =
  "group font-headline-faq cursor-default rounded-full border-2 border-[#2E5B88]/25 bg-[#2E5B88]/10 p-8 text-center text-[#1F3B64] transition-all duration-300 ease-out " +
  "hover:border-[#4CAF50] hover:bg-[#4CAF50]/18 hover:text-[#4CAF50] hover:shadow-md hover:ring-2 hover:ring-[#4CAF50]/40 hover:ring-offset-2 hover:ring-offset-[#F5F7FA]";

const heroStatCards = [
  { end: ORM_GLOSSARY_SECTIONS.length, suffix: "", label: "Categories" },
  { end: ORM_GLOSSARY_TERM_COUNT, suffix: "+", label: "Glossary Terms" },
  {
    end: ORM_GLOSSARY_SECTIONS.reduce(
      (sum, section) =>
        sum + section.items.filter((item) => item.blocks.some((block) => block.t === "example")).length,
      0,
    ),
    suffix: "+",
    label: "Examples",
  },
];

export default function OrmGlossaryPage() {
  const seo = useLocalizedSeo("ormGlossary");
  const heroStatsRef = useRef(null);
  const [heroStatsLive, setHeroStatsLive] = useState(false);
  const [activeSection, setActiveSection] = useState(glossarySectionIds[0] ?? "");
  const scrollRafRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return undefined;
    }

    const computeActiveSection = () => {
      let current = glossarySectionIds[0];
      for (const id of glossarySectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= GLOSSARY_SCROLL_SPY_OFFSET_PX) {
          current = id;
        }
      }
      return current;
    };

    const scheduleUpdate = () => {
      if (scrollRafRef.current) return;
      scrollRafRef.current = window.requestAnimationFrame(() => {
        scrollRafRef.current = 0;
        const next = computeActiveSection();
        setActiveSection((prev) => (prev === next ? prev : next));
      });
    };

    scheduleUpdate();
    const t1 = window.setTimeout(scheduleUpdate, 80);
    const t2 = window.setTimeout(scheduleUpdate, 300);

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    window.addEventListener("hashchange", scheduleUpdate, false);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      if (scrollRafRef.current) {
        window.cancelAnimationFrame(scrollRafRef.current);
        scrollRafRef.current = 0;
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    const el = heroStatsRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroStatsLive(true);
        }
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SeoHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.path}
      />
      <main className="flex-1 bg-[#F5F7FA] pt-28 text-[#1F3B64] selection:bg-[#4CAF50]/30 md:pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <section className="flex flex-col items-center py-24 text-center md:py-32">
            <span className="font-headline-faq mb-6 text-sm font-bold tracking-widest text-[#4CAF50] uppercase">
              {ORM_GLOSSARY_PAGE.eyebrow}
            </span>
            <h1 className="font-headline-faq mb-8 max-w-5xl text-4xl leading-[1.1] font-extrabold tracking-tighter text-[#1F3B64] md:text-6xl lg:text-7xl">
              {ORM_GLOSSARY_PAGE.title}
            </h1>
            {ORM_GLOSSARY_PAGE.lead.split("\n\n").map((para, i) => (
              <p
                key={i}
                className={cn(
                  "max-w-4xl text-lg leading-relaxed text-[#5c677b] md:text-xl",
                  i === 0 ? "mb-4" : "mb-12 font-semibold text-[#4CAF50]"
                )}
              >
                {para}
              </p>
            ))}

            <div
              ref={heroStatsRef}
              className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3"
              role="list"
              aria-label="ORM glossary at a glance"
            >
              {heroStatCards.map((card) => (
                <div
                  key={card.label}
                  role="listitem"
                  className={heroStatCardClass}
                >
                  <div className="mb-1 text-4xl font-extrabold tabular-nums transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100">
                    <StatNumber
                      className="inline"
                      end={card.end}
                      suffix={card.suffix}
                      start={heroStatsLive}
                    />
                  </div>
                  <div className="font-body text-sm font-medium tracking-wide text-[#6B7280]">
                    {card.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 gap-16 pb-24 lg:grid-cols-12">
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-32 space-y-2">
                <h3 className="font-headline-faq mb-6 text-xs font-bold tracking-widest text-[#6B7280] uppercase">
                  Quick Navigation
                </h3>
                {sidebarLinks.map((link) => {
                  const id = link.href.replace("#", "");
                  const isActive = activeSection === id;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "font-headline-faq ha-nudge block rounded-xl border border-transparent px-4 py-3 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-white text-[#1F3B64] shadow-sm ring-1 ring-[#4CAF50]/30"
                          : "text-[#6B7280] hover:border-slate-200/80 hover:bg-white hover:text-[#1F3B64]",
                      )}
                      aria-current={isActive ? "location" : undefined}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </aside>

            <div className="space-y-20 lg:col-span-9">
              {ORM_GLOSSARY_SECTIONS.map((section, index) => (
                <GlossarySection
                  key={section.id}
                  id={section.id}
                  title={section.title}
                  description={section.description}
                  items={section.items}
                  defaultOpenFirst={index === 0}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
