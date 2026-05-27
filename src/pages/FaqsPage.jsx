import { useEffect, useRef, useState } from "react";
import { FaqAccordion } from "../components/FaqAccordion";
import { FaqRichAnswer } from "../components/FaqRichAnswer.jsx";
import { BlogGuideCtaPanel } from "../components/blog/BlogGuideCtaSection.jsx";
import { SeoHead } from "../components/SeoHead.jsx";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";
import { StatNumber } from "../components/StatNumber.jsx";
import { RESOURCES_FAQ_SECTIONS } from "../data/resourcesFaqs/index.js";
import { cn } from "@/lib/utils";

function FaqSection({ id, title, children }) {
  return (
    <div className="scroll-mt-36" id={id}>
      <div className="mb-8 flex items-center gap-4">
        <span className="h-0.5 w-12 bg-[#4CAF50]" />
        <h2 className="font-headline-faq text-3xl font-bold tracking-tight text-[#2E5B88]">
          {title}
        </h2>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

const sidebarLinks = RESOURCES_FAQ_SECTIONS.map((section) => ({
  href: `#${section.id}`,
  label: section.title,
}));

const faqSectionIds = RESOURCES_FAQ_SECTIONS.map((section) => section.id);

/** Section title is "active" once its top crosses this many px from the top of the viewport (below the sticky area). */
const FAQ_SCROLL_SPY_OFFSET_PX = 148;

/** Stat pills: plain presentation; green only while hovered (not clickable). */
const heroStatCardClass =
  "group font-headline-faq cursor-default rounded-full border-2 border-[#2E5B88]/25 bg-[#2E5B88]/10 p-8 text-center text-[#1F3B64] transition-all duration-300 ease-out " +
  "hover:border-[#4CAF50] hover:bg-[#4CAF50]/18 hover:text-[#4CAF50] hover:shadow-md hover:ring-2 hover:ring-[#4CAF50]/40 hover:ring-offset-2 hover:ring-offset-[#F5F7FA]";

const heroStatCards = [
  { end: 7, suffix: "+", label: "Years Experience" },
  { end: 1100, suffix: "+", label: "Client Engagements" },
  { end: 97, suffix: "%", label: "Success Rate" },
];

function FaqsPage() {
  const heroStatsRef = useRef(null);
  const [heroStatsLive, setHeroStatsLive] = useState(false);
  const [activeFaqSection, setActiveFaqSection] = useState("section-1");
  const faqScrollRafRef = useRef(0);
  const seo = useLocalizedSeo("faqs");

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return undefined;
    }

    const computeActiveFaqSection = () => {
      let current = faqSectionIds[0];
      for (const id of faqSectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= FAQ_SCROLL_SPY_OFFSET_PX) {
          current = id;
        }
      }
      return current;
    };

    const scheduleFaqActiveUpdate = () => {
      if (faqScrollRafRef.current) return;
      faqScrollRafRef.current = window.requestAnimationFrame(() => {
        faqScrollRafRef.current = 0;
        const next = computeActiveFaqSection();
        setActiveFaqSection((prev) => (prev === next ? prev : next));
      });
    };

    scheduleFaqActiveUpdate();
    const t1 = window.setTimeout(scheduleFaqActiveUpdate, 80);
    const t2 = window.setTimeout(scheduleFaqActiveUpdate, 300);

    window.addEventListener("scroll", scheduleFaqActiveUpdate, { passive: true });
    window.addEventListener("resize", scheduleFaqActiveUpdate, { passive: true });
    window.addEventListener("hashchange", scheduleFaqActiveUpdate, false);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      if (faqScrollRafRef.current) {
        window.cancelAnimationFrame(faqScrollRafRef.current);
        faqScrollRafRef.current = 0;
      }
      window.removeEventListener("scroll", scheduleFaqActiveUpdate);
      window.removeEventListener("resize", scheduleFaqActiveUpdate);
      window.removeEventListener("hashchange", scheduleFaqActiveUpdate);
    };
  }, []);

  useEffect(() => {
    const el = heroStatsRef.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setHeroStatsLive(true);
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0.15 },
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
      <main className="faq-page flex-1 bg-[#F5F7FA] pt-28 text-[#1F3B64] selection:bg-[#4CAF50]/30 md:pt-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Hero */}
          <section className="flex flex-col items-center py-24 text-center md:py-32">
            <span className="font-headline-faq mb-6 text-sm font-bold tracking-widest text-[#4CAF50] uppercase">
              Honest Answers to the Questions We Hear Most
            </span>
            <h1 className="font-headline-faq mb-8 max-w-5xl text-4xl leading-[1.1] font-extrabold tracking-tighter text-[#1F3B64] md:text-6xl lg:text-7xl">
              Your online reputation is not something that just happens to you.{" "}
              <span className="text-[#2E5B88]">It is built</span> - either
              deliberately or by default.
            </h1>
            <p className="mb-12 max-w-2xl text-lg font-light text-[#6B7280] md:text-xl">
              Everything you need to know about protecting your reputation
              online. Not sure if this applies to you? Book a free call -
              we&apos;ll figure it out together.
            </p>
            <div
              ref={heroStatsRef}
              className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3"
              role="list"
              aria-label="Reputation360 at a glance"
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

          {/* FAQ grid */}
          <section className="grid grid-cols-1 gap-16 pb-24 lg:grid-cols-12">
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-32 space-y-2">
                <h3 className="font-headline-faq mb-6 text-xs font-bold tracking-widest text-[#6B7280] uppercase">
                  Quick Navigation
                </h3>
                {sidebarLinks.map((link) => {
                  const id = link.href.replace("#", "");
                  const isActive = activeFaqSection === id;
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
              {RESOURCES_FAQ_SECTIONS.map((section, sectionIndex) => (
                <FaqSection key={section.id} id={section.id} title={section.title}>
                  {section.items.map((item, itemIndex) => (
                    <FaqAccordion
                      key={item.id}
                      question={item.question}
                      defaultOpen={sectionIndex === 0 && itemIndex === 0}
                    >
                      <FaqRichAnswer blocks={item.blocks} />
                    </FaqAccordion>
                  ))}
                </FaqSection>
              ))}
            </div>
          </section>

          {/* Final CTA - same centered panel pattern as Services and blog guides */}
          <section className="mb-24">
            <BlogGuideCtaPanel
              title="Still have questions?"
              lead="Your situation is specific. So is our answer. Every reputation challenge requires a unique architecture. Let's discuss your path forward in a private, expert-led 30-minute consultation."
            />
          </section>
        </div>
      </main>
    </>
  );
}

export default FaqsPage;
