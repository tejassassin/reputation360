import { useCallback, useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { SeoHead } from "../components/SeoHead.jsx";
import { cn } from "@/lib/utils";
import {
  DiyGuideToc,
  MobileGuideNav,
  ReadingProgressRail,
  DiyRelatedReading,
} from "../components/blog/diy/DiyGuideUi.jsx";
import { Pack20CtaSection } from "../components/blog/pack20/Pack20CtaSection.jsx";
import {
  Pack20Blocks,
  Pack20ContentSection,
  Pack20FaqSection,
} from "../components/blog/pack20/Pack20Blocks.jsx";
import { getPack20Article, getPack20RelatedArticles } from "../data/blogs/pack20/index.js";
import "../styles/r360-diy-interactive.css";

/**
 * @param {{ slug: string }} props
 */
export default function BlogPack20ArticlePage({ slug }) {
  const article = getPack20Article(slug);
  const [readingPct, setReadingPct] = useState(0);
  const [activeNavId, setActiveNavId] = useState("");
  const [pickerState, setPickerState] = useState({});
  const [pillState, setPillState] = useState({});
  const [accordionState, setAccordionState] = useState({});

  const setPicker = useCallback((key, value) => {
    setPickerState((prev) => ({ ...prev, [key]: value }));
  }, []);

  const setPill = useCallback((key, value) => {
    setPillState((prev) => ({ ...prev, [key]: value }));
  }, []);

  const toggleAccordion = useCallback((key) => {
    setAccordionState((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  useEffect(() => {
    if (!article) return undefined;
    const onScroll = () => {
      const doc = document.documentElement;
      const height = doc.scrollHeight - doc.clientHeight;
      setReadingPct(height > 0 ? (doc.scrollTop / height) * 100 : 0);

      const y = window.scrollY;
      let current = "";
      for (const sid of article.scrollSpyOrder) {
        const el = document.getElementById(sid);
        if (!el) continue;
        if (y >= el.offsetTop - 160) current = sid;
      }
      setActiveNavId(article.nav.some((g) => g.id === current) ? current : "");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [article]);

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    return () => document.documentElement.classList.remove("scroll-smooth");
  }, []);

  if (!article) {
    return null;
  }

  const blockProps = {
    pickerState,
    setPickerState: setPicker,
    pillState,
    setPillState: setPill,
    accordionState,
    toggleAccordion,
  };

  const related = getPack20RelatedArticles(article);

  return (
    <>
      <SeoHead
        title={article.seoTitle}
        description={article.metaDescription}
        canonicalPath={article.path}
        ogImage={article.listing.image}
      />

      <div className="r360-diy-interactive scroll-smooth pb-1 font-body text-jet antialiased">
        <div className="diy-hero-band" id="intro">
          <span className="diy-hero-badge">{article.hero.badge}</span>
          <h1 className="diy-hero-title">{article.hero.title}</h1>
          <p className="diy-hero-lead">{article.hero.lead}</p>
          {article.hero.meta?.length ? (
            <div className="diy-meta-grid">
              {article.hero.meta.map((item) => (
                <div key={item.label}>
                  <div className="diy-meta-value">{item.value}</div>
                  <div className="diy-meta-label">{item.label}</div>
                </div>
              ))}
            </div>
          ) : null}
          <p className="mt-8 flex items-center justify-center gap-2 font-body text-sm text-steel">
            <Clock className="h-4 w-4 text-navy" aria-hidden />
            {article.listing.readTime} read
          </p>
        </div>

        <div
          className="pointer-events-none fixed right-0 bottom-0 left-0 z-40 h-1.5 overflow-hidden bg-slate-200"
          aria-hidden
        >
          <div
            className="absolute inset-0 bg-green transition-[clip-path] duration-150 ease-out"
            style={{
              clipPath: `inset(0 0 ${100 - Math.min(100, Math.max(0, readingPct))}% 0)`,
            }}
          />
        </div>

        <div className="mx-auto max-w-[min(100%,90rem)] px-4 pb-4 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
          <div className="flex flex-col gap-8 pb-4 lg:flex-row lg:gap-0">
            <aside className="hidden w-64 shrink-0 lg:sticky lg:top-28 lg:block lg:h-[calc(100dvh-8rem)] lg:overflow-y-auto lg:border-r lg:border-slate-200/80 lg:pr-6 lg:pt-2">
              <h4 className="mb-4 font-heading text-xs font-bold tracking-widest text-steel uppercase">
                Guide Index
              </h4>
              <nav className="flex flex-col gap-1 text-sm text-steel" aria-label="Guide index">
                {article.nav.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={cn(
                      "border-l-2 py-2 pl-3 font-body no-underline transition-all hover:text-navy",
                      activeNavId === id
                        ? "border-green font-bold text-navy"
                        : "border-transparent",
                    )}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </aside>

            <main className="min-w-0 flex-1 px-0 pb-20 sm:px-2 lg:max-w-[52rem] lg:px-10">
              <MobileGuideNav nav={article.nav} activeNavId={activeNavId} readingPct={readingPct} />

              <DiyGuideToc
                items={article.toc}
                title={article.tocTitle ?? "What You'll Learn"}
                ariaLabel={article.tocAriaLabel ?? "What you'll learn"}
              />

              {article.introBlocks?.length ? (
                <div className="mb-16">
                  <Pack20Blocks
                    blocks={article.introBlocks}
                    sectionId="intro-body"
                    {...blockProps}
                  />
                </div>
              ) : null}

              {article.sections.map((section) => (
                <Pack20ContentSection key={section.id} section={section} {...blockProps} />
              ))}

              <Pack20CtaSection title={article.cta.title} lead={article.cta.lead} />

              <Pack20FaqSection
                faqs={article.faqs}
                accordionState={accordionState}
                toggleAccordion={toggleAccordion}
              />

              <div className="mb-16 mt-10 border-t border-slate-200/80 pt-10" id="related">
                <DiyRelatedReading articles={related} />
              </div>
            </main>

            <aside className="hidden w-56 shrink-0 lg:sticky lg:top-28 lg:flex lg:h-[calc(100dvh-8rem)] lg:max-h-[calc(100dvh-8rem)] lg:min-h-0 lg:flex-col lg:overflow-hidden lg:border-l lg:border-slate-200/80 lg:pl-6 lg:pt-2">
              <ReadingProgressRail pct={readingPct} />
            </aside>
          </div>
        </div>

      </div>
    </>
  );
}
