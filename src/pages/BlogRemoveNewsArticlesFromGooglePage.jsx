import { useCallback, useEffect, useState } from "react";
import { Clock, Newspaper } from "lucide-react";
import { SeoHead } from "../components/SeoHead.jsx";
import {
  articleAdditionalJsonLdFromInput,
  guideListingToSchemaInput,
} from "../data/articleSchema.js";
import { cn } from "@/lib/utils";
import { FREE_RISK_SCAN_PATH } from "@/constants/freeRiskScan.js";
import { AUDIENCE_PATH } from "@/constants/whoWeServePaths.js";
import { BlogGuideCtaPanel } from "@/components/blog/BlogGuideCtaSection.jsx";
import { BlogFurtherReadingSection } from "../components/blog/BlogFurtherReadingSection.jsx";
import { BlogShareSection } from "../components/blog/BlogShareSection.jsx";
import {
  DiyAccordion,
  DiyAnswerBox,
  DiyInternalLink,
  DiyLeadHighlight,
  DiyKeyBox,
  DiySectionHeader,
  DiyGuideToc,
  MobileGuideNav,
  ReadingProgressRail,
} from "../components/blog/diy/DiyGuideUi.jsx";
import { BLOG_PATHS } from "../data/blogs/blogInternalPaths.js";
import { REMOVE_NEGATIVE_SEARCH_RESULTS_PATH } from "../data/blogs/removeNegativeSearchResultsGuide.js";
import { REPUTATION_REPAIR_TIMELINE_PATH } from "../data/blogs/reputationRepairTimelineGuide.js";
import { SUPPRESS_NEGATIVE_GUIDE_PATH } from "../data/blogs/suppressNegativeContentGuide.js";
import {
  REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH,
  removeNewsArticlesFromGoogleHero,
  removeNewsArticlesFromGoogleListing,
  removeNewsArticlesFromGoogleMetaDescription,
  removeNewsArticlesFromGoogleSeoTitle,
  removeNewsArticlesFromGoogleToc,
} from "../data/blogs/removeNewsArticlesFromGoogleGuide.js";
import {
  GOOGLE_REMOVAL_PATHS,
  GUIDE_NAV,
  LEGAL_ROUTE_ACCORDIONS,
  SCROLL_SPY_ORDER,
} from "../data/blogs/removeNewsArticlesFromGoogleInteractive.js";
import "../styles/r360-diy-interactive.css";

function LegalAccordion({ id, title, children, open, onToggle }) {
  return (
    <DiyAccordion id={id} title={title} open={open} onToggle={onToggle}>
      {children}
    </DiyAccordion>
  );
}

export default function BlogRemoveNewsArticlesFromGooglePage() {
  const [readingPct, setReadingPct] = useState(0);
  const [activeNavId, setActiveNavId] = useState("");
  const [openAccordion, setOpenAccordion] = useState({});
  const [removalPathId, setRemovalPathId] = useState(GOOGLE_REMOVAL_PATHS[0].id);

  const toggleAccordion = useCallback((key) => {
    setOpenAccordion((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const height = doc.scrollHeight - doc.clientHeight;
      setReadingPct(height > 0 ? (doc.scrollTop / height) * 100 : 0);

      const y = window.scrollY;
      let current = "";
      for (const sid of SCROLL_SPY_ORDER) {
        const el = document.getElementById(sid);
        if (!el) continue;
        if (y >= el.offsetTop - 160) current = sid;
      }
      setActiveNavId(GUIDE_NAV.some((g) => g.id === current) ? current : "");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    return () => document.documentElement.classList.remove("scroll-smooth");
  }, []);

  const removalPath =
    GOOGLE_REMOVAL_PATHS.find((p) => p.id === removalPathId) ?? GOOGLE_REMOVAL_PATHS[0];

  return (
    <>
      <SeoHead
        title={removeNewsArticlesFromGoogleSeoTitle}
        description={removeNewsArticlesFromGoogleMetaDescription}
        canonicalPath={REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH}
        ogImage={removeNewsArticlesFromGoogleListing.image}
        additionalJsonLd={articleAdditionalJsonLdFromInput(
          guideListingToSchemaInput(
            REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH,
            removeNewsArticlesFromGoogleListing,
            removeNewsArticlesFromGoogleMetaDescription,
          ),
        )}
      />

      <div className="r360-diy-interactive scroll-smooth pb-1 font-body text-jet antialiased">
        <div className="diy-hero-band" id="intro">
          <span className="diy-hero-badge">{removeNewsArticlesFromGoogleHero.badge}</span>
          <h1 className="diy-hero-title">{removeNewsArticlesFromGoogleHero.title}</h1>
          <p className="diy-hero-lead">{removeNewsArticlesFromGoogleHero.lead}</p>
          <p className="mt-8 flex items-center justify-center gap-2 font-body text-sm text-steel">
            <Clock className="h-4 w-4 text-navy" aria-hidden />
            {removeNewsArticlesFromGoogleListing.readTime} read
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
                {GUIDE_NAV.map(({ id, label }) => (
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
              <MobileGuideNav nav={GUIDE_NAV} activeNavId={activeNavId} readingPct={readingPct} />

              <div className="mb-10 font-body text-lg text-steel">
                <p className="mb-6">
                  A news article surfaces in Google. It&apos;s about you - or your business - and it&apos;s not
                  accurate, it&apos;s years out of date, or it&apos;s damaging in a way that simply doesn&apos;t
                  reflect who you are today. The first instinct for most people is to ask: <em>can I get this removed?</em>
                </p>
                <p>
                  It&apos;s the right question. But the honest answer is more nuanced than most people expect - and the
                  path forward depends on what the article says, where it&apos;s published, how long it&apos;s been
                  ranking, and what your{" "}
                  <DiyInternalLink href={BLOG_PATHS.removalVsSuppression}>removal vs. suppression</DiyInternalLink>{" "}
                  strategy looks like. In this guide, we
                  walk through exactly when removal is possible, when it isn&apos;t, and what
                  actually works when Google seems like it won&apos;t budge.
                </p>
              </div>

              <DiyGuideToc
                items={removeNewsArticlesFromGoogleToc}
                title="What You'll Learn"
                ariaLabel="What you'll learn"
              />

              <section className="mb-20 scroll-mt-36" id="how-google-works">
                <DiySectionHeader number="01" title="Why Google Shows News Articles - And Why That Matters" />
                <p className="mb-6 font-body text-lg text-steel">
                  Google doesn&apos;t decide what&apos;s true or fair. It decides what&apos;s relevant and authoritative.
                  A news article on an established media outlet carries significant domain authority - combined with
                  backlinks, social shares, and engagement that keep it visible for months or years after publication.
                </p>
                <p className="mb-6 font-body text-lg text-steel">
                  Google is not the publisher - it&apos;s the index. Removing an article from Google search and removing
                  it from the internet entirely are two very different things. Even if Google dereferences a page, the
                  article can still be found on the publication&apos;s website - and crawlers can re-index it if the
                  publisher keeps it live.
                </p>
                <p className="font-body text-lg text-steel">
                  The most effective approach to{" "}
                  <DiyInternalLink href={REMOVE_NEGATIVE_SEARCH_RESULTS_PATH}>
                    removing or suppressing negative search results
                  </DiyInternalLink>{" "}
                  works on two parallel tracks: getting the article removed or altered at the source, and building enough
                  authoritative positive content that the article no longer dominates what people find when they search
                  your name.
                </p>
              </section>

              <section className="mb-20 scroll-mt-36" id="when-google-removes">
                <DiySectionHeader number="02" title="When Google Will Actually Remove Content" />
                <p className="mb-6 font-body text-lg text-steel">
                  Google intervenes to remove content from its index directly only in a narrow, defined set of
                  circumstances - without requiring action from the original publisher. When a formal request is
                  required, use{" "}
                  <DiyInternalLink href="https://support.google.com/legal/answer/3110420">
                    Google&apos;s official content removal request form
                  </DiyInternalLink>
                  . Select a scenario:
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {GOOGLE_REMOVAL_PATHS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setRemovalPathId(p.id)}
                      className={cn(
                        "ha-pill rounded-full px-4 py-2 font-body text-sm font-semibold transition-colors",
                        removalPathId === p.id
                          ? "bg-navy text-white"
                          : "bg-slate-100 text-navy hover:bg-slate-200",
                      )}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
                <DiyAnswerBox
                  label="Google removal path"
                  verdict={removalPath.verdict}
                  verdictLabel={removalPath.verdictLabel}
                >
                  {removalPath.body}
                </DiyAnswerBox>
                <DiyKeyBox variant="insight" title="The hard truth">
                  For the vast majority of news articles - including ones that are unfair, inaccurate, one-sided, or
                  simply damaging - Google will not remove content based on those grounds alone. Truthful journalism,
                  even when it reflects badly on you, falls outside what Google&apos;s removal tools can address. The
                  path to resolution lies elsewhere.
                </DiyKeyBox>
              </section>

              <section className="mb-20 scroll-mt-36" id="publisher-removal">
                <DiySectionHeader number="03" title="Going to the Source: Requesting Publisher Removal" />
                <p className="mb-6 font-body text-lg text-steel">
                  If Google itself won&apos;t act, the most direct route is to approach the publisher - the editor,
                  journalist, or webmaster - and make a formal request for removal or correction.
                </p>
                <p className="mb-6 font-body text-lg text-steel">
                  This works far more often than people expect when the article contains factual errors you can
                  demonstrate clearly, or when coverage is significantly out of date - a resolved legal matter, changed
                  business circumstances, or personal situations that no longer apply. Smaller publications are often
                  more receptive than major nationals protective of their published record.
                </p>
                <p className="mb-6 font-body text-lg text-steel">
                  The key is tone and documentation. A request that is professional, specific, and evidenced - rather
                  than threatening or emotional - is far more likely to succeed. Identify inaccuracies, provide evidence,
                  propose a clear resolution, and direct your request to someone with editorial authority.
                </p>
                <p className="mb-6 font-body text-lg text-steel">
                  For regional media, industry blogs, and online-only outlets, direct publisher engagement can be the
                  fastest path available - sometimes resolving in days when handled correctly.
                </p>
                <DiyKeyBox variant="tip" title="After publisher removal">
                  Once a publisher removes or significantly alters an article, submit a request via Google&apos;s Remove
                  Outdated Content tool to clear the cached version from Google&apos;s index. Publisher removal and Google
                  cache clearance need to happen in sequence for the result to disappear from search entirely.
                </DiyKeyBox>
              </section>

              <section className="mb-20 scroll-mt-36" id="legal-routes">
                <DiySectionHeader
                  number="04"
                  title="Legal Routes: Defamation, DMCA, and the Right to Be Forgotten"
                />
                <p className="mb-8 font-body text-lg text-steel">
                  When direct publisher engagement doesn&apos;t work, legal mechanisms become the next consideration. A
                  more complex and slower path - but decisive in the right circumstances. For{" "}
                  <DiyInternalLink href={BLOG_PATHS.courtRecords}>court records</DiyInternalLink> and similar legal
                  coverage indexed in search, removal paths differ from standard news outreach. Expand each option:
                </p>
                <div className="space-y-4">
                  {LEGAL_ROUTE_ACCORDIONS.map((item) => (
                    <LegalAccordion
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      open={!!openAccordion[item.id]}
                      onToggle={toggleAccordion}
                    >
                      <p>{item.body}</p>
                      {item.id === "defamation" ? (
                        <p className="mt-4">
                          Legal professionals and others in regulated industries should seek specialist counsel before
                          pursuing this route, as standards of proof and strategic implications vary by jurisdiction.
                        </p>
                      ) : null}
                    </LegalAccordion>
                  ))}
                </div>
                <DiyLeadHighlight className="mt-8">
                  <p>
                    The legal route takes time and carries no guarantee of success. But for content that is provably
                    false and demonstrably damaging, it changes the conversation with publishers in a way that nothing
                    else does.
                  </p>
                </DiyLeadHighlight>
              </section>

              <section className="mb-20 scroll-mt-36" id="when-removal-fails">
                <DiySectionHeader number="05" title="When Removal Isn't Possible: What Actually Works Instead" />
                <p className="mb-6 font-body text-lg text-steel">
                  Many news articles cannot be removed. Factually accurate journalism about things that actually
                  happened is protected - no legal mechanism, platform policy, or outreach will compel removal simply
                  because you&apos;d prefer it wasn&apos;t there.
                </p>
                <p className="mb-6 font-body text-lg text-steel">
                  In these circumstances, the most effective strategy shifts from removal to{" "}
                  <DiyInternalLink href={SUPPRESS_NEGATIVE_GUIDE_PATH}>
                    professional negative content suppression
                  </DiyInternalLink>
                  . The goal is not to erase the article but to ensure it is no longer the first, second, or third thing
                  people find - because fewer than 1% of people ever look past page one of Google.
                </p>
                <p className="mb-6 font-body text-lg text-steel">
                  Suppression works by building enough authoritative, well-optimised positive content across
                  high-credibility platforms that it outranks the negative article for the searches that matter -
                  thought leadership, optimised profiles, press, SEO content, and strategic backlinks. When executed
                  correctly, a damaging article can move to page two within 60 to 120 days, depending on publication
                  authority and how entrenched the ranking has become.
                </p>
                <p className="mb-6 font-body text-lg text-steel">
                  It&apos;s not about hiding the truth. It&apos;s about ensuring one article from one moment doesn&apos;t
                  permanently define what people find. Positive, accurate content deserves to be seen too - and a
                  well-executed reputation strategy makes that happen.
                </p>
                <DiyKeyBox variant="insight" title="How long does suppression take?">
                  For a single article on a mid-authority site, meaningful page-one displacement often begins within
                  60-90 days. High-authority national publications often take 4-8 months because ranking signals are
                  deeply established. The earlier you start, the faster and less costly the outcome. See our{" "}
                  <DiyInternalLink href={REPUTATION_REPAIR_TIMELINE_PATH}>
                    reputation repair timeline guide
                  </DiyInternalLink>{" "}
                  for a full breakdown - or{" "}
                  <DiyInternalLink href={FREE_RISK_SCAN_PATH}>run a free scan</DiyInternalLink> to understand what
                  you&apos;re working with.
                </DiyKeyBox>
              </section>

              <section className="mb-20 scroll-mt-36" id="who-this-affects">
                <DiySectionHeader number="06" title="Who This Affects Most" />
                <p className="mb-6 font-body text-lg text-steel">
                  Damaging news articles affect everyone differently, but some individuals and organisations face
                  particularly high stakes.
                </p>
                <ul className="mb-8 space-y-4">
                  <li className="rounded-xl border border-slate-200 bg-white p-4 font-body text-lg text-steel shadow-sm">
                    <Newspaper className="mb-2 h-5 w-5 text-navy" aria-hidden />
                    For{" "}
                    <DiyInternalLink href={AUDIENCE_PATH.executives}>executives and C-suite leaders</DiyInternalLink>,
                    a single article can derail board appointments, investor conversations, and public speaking
                    opportunities. The first thing any investor, partner, or journalist does is Google your name.
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4 font-body text-lg text-steel shadow-sm">
                    For{" "}
                    <DiyInternalLink href={AUDIENCE_PATH.doctors}>doctors and healthcare professionals</DiyInternalLink>
                    , coverage tied to complaints or regulatory proceedings - even when resolved - affects patient
                    confidence for years. The same is true for{" "}
                    <DiyInternalLink href={AUDIENCE_PATH.lawyers}>lawyers and attorneys</DiyInternalLink> facing
                    high-profile case coverage.
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4 font-body text-lg text-steel shadow-sm">
                    For{" "}
                    <DiyInternalLink href={AUDIENCE_PATH.businesses}>businesses</DiyInternalLink>, prominent negative
                    coverage can suppress conversion, complicate hiring, and raise partner red flags. For{" "}
                    <DiyInternalLink href={AUDIENCE_PATH.individuals}>private individuals</DiyInternalLink>, the impact
                    hits employment, relationships, and everyday searchability.
                  </li>
                </ul>
                <p className="font-body text-lg text-steel">
                  The common thread: the problem compounds over time. An article that is merely uncomfortable today,
                  left unaddressed, becomes significantly harder and more expensive to manage in twelve months. Acting
                  early - even before you&apos;ve decided on a strategy - is almost always the right call.
                </p>
              </section>

              <section className="mb-20 scroll-mt-36" id="start">
                <span className="diy-section-tag">Next step</span>
                <h2 className="mb-6 font-heading text-3xl font-bold text-navy">What to do next</h2>
                <p className="mb-6 font-body text-lg text-steel">
                  If a news article ranks prominently when people search your name or business, audit the full search
                  picture - not just the one article you&apos;re aware of - across the first two pages for every relevant
                  query. You may find other content, positive assets to build on, or a gap that&apos;s easier to close
                  than expected.
                </p>
                <p className="mb-6 font-body text-lg text-steel">
                  At Reputation360, we start every engagement with this audit: what&apos;s ranking, how entrenched it
                  is, what realistic options look like, and what recovery would involve. No surprises - just a clear view
                  of where you stand.
                </p>
                <p className="mb-8 font-body text-lg text-steel">
                  Whether the article is removable, suppressible, or somewhere in between, knowing your options clearly
                  is the necessary first step. Our{" "}
                  <DiyInternalLink href={FREE_RISK_SCAN_PATH}>free reputation scan</DiyInternalLink> gives you that
                  starting point - and our team is ready to talk through what we find, in plain language, without
                  obligation.
                </p>
                <BlogGuideCtaPanel />
              </section>

              <BlogShareSection
                title={removeNewsArticlesFromGoogleListing.title}
                canonicalPath={REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH}
                className="mb-10"
              />

              <BlogFurtherReadingSection
                blogPath={REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH}
                className="mb-10"
              />
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
