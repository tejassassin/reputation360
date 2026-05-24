import { useState } from "react";
import { BadgeCheck, ArrowRight } from "lucide-react";
import { BlogGuideCtaPanel } from "../components/blog/BlogGuideCtaSection.jsx";
import { SeoHead } from "../components/SeoHead.jsx";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";
import {
  DIY_REPUTATION_GUIDE_PATH,
  DIY_REPUTATION_GUIDE_SLUG,
  diyReputationGuideHero,
  diyReputationGuideListing,
} from "../data/blogs/diyReputationGuide.js";
import {
  SUPPRESS_NEGATIVE_GUIDE_SLUG,
  suppressNegativeGuideListing,
} from "../data/blogs/suppressNegativeContentGuide.js";
import {
  REMOVE_NEGATIVE_SEARCH_RESULTS_SLUG,
  removeNegativeSearchResultsListing,
} from "../data/blogs/removeNegativeSearchResultsGuide.js";
import {
  REPUTATION_REPAIR_TIMELINE_SLUG,
  reputationRepairTimelineListing,
} from "../data/blogs/reputationRepairTimelineGuide.js";
import {
  REMOVE_NEWS_ARTICLES_FROM_GOOGLE_SLUG,
  removeNewsArticlesFromGoogleListing,
} from "../data/blogs/removeNewsArticlesFromGoogleGuide.js";
import {
  getPack20Listings,
} from "../data/blogs/pack20/catalog.js";
import { PACK20_SLUGS } from "../data/blogs/pack20/slugs.js";
import { article as socialPostsArticle } from "../data/blogs/pack20/blog05.js";
import { article as crisisPlaybookArticle } from "../data/blogs/pack20/blog08.js";
import { article as ormMethodologyArticle } from "../data/blogs/pack20/blog15.js";

const FEATURED_PACK_INSIGHTS = [
  socialPostsArticle.listing,
  crisisPlaybookArticle.listing,
  ormMethodologyArticle.listing,
];

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9RkcKxX1nZCRrBRIu6rOONYqsNVBW7ImSuvITVmOpUNdh9vHBQk72dRRSVg466yzV7FRLVAR74vtVn6mQM0qSQN7nwSKV5FRcqM2cRWLPZgV0I9AcJ4dx6eKagNgJmw90lkVLTGDucXhp4xEv1BziO3gnOT71pR9W2Me9zrfnNhsuERyYBIMHr21Picl79YYv-_eICE0qZQ-fU8O-bUpr5Nvt-K4QLuuTjb8c1GJuhLQBP1XrKDHjlV0QvXkwWydskHpIgIc5xa8";

const FILTER_LABELS = [
  "All",
  "ORM Strategy & Education",
  "Suppression & Removal",
  "Building Your Positive Presence",
  "Social Media, AI & Monitoring",
  "Career, Crisis & Case Studies",
];

const latestArticles = [
  ...getPack20Listings(),
  removeNewsArticlesFromGoogleListing,
  reputationRepairTimelineListing,
  removeNegativeSearchResultsListing,
  diyReputationGuideListing,
  suppressNegativeGuideListing,
];

function InsightsBlogsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const seo = useLocalizedSeo("blogs");

  const filteredArticles =
    activeFilter === "All"
      ? latestArticles
      : latestArticles.filter((a) => a.filter === activeFilter);

  return (
    <>
      <SeoHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.path}
      />
    <main className="insights-page flex-1 bg-[#f9f9ff] pt-28 text-[#141b2b] md:pt-32">
      {/* Hero */}
      <header className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-24 pt-12 md:px-8 md:pt-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#2a8c3e] px-3 py-1 text-xs font-bold tracking-widest text-white uppercase">
              <BadgeCheck className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span>Expert Insights</span>
            </div>
            <h1 className="font-insights-headline mb-8 text-5xl leading-tight font-extrabold tracking-tight text-[#02254d] md:text-6xl">
              Insights From Seven Years of <br />
              <span className="text-[#35618e]">Reputation Work</span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed font-light text-[#43474e]">
              No recycled advice. No generic lists. Every article here is
              written by practitioners with real client experience - covering the
              topics that matter most to professionals, executives, and
              businesses navigating online reputation in 2026.
            </p>
          </div>
          <div className="hidden lg:col-span-4 lg:block">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-[#78dc77]/20 blur-3xl" />
              <div className="relative z-10 ha-lift overflow-hidden rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35),0_12px_24px_-8px_rgba(0,0,0,0.2)]">
                <img
                  src={HERO_IMG}
                  alt="Professional consultants working"
                  className="w-full border-none grayscale-[0.2]"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Insights */}
      <section className="bg-[#f1f3ff] px-6 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-insights-headline mb-2 text-3xl font-bold text-[#02254d]">
                Featured Insights
              </h2>
              <p className="text-[#74777f]">
                The most critical shifts in the reputation landscape this
                quarter.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("latest-articles")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group ha-nudge flex items-center gap-2 self-start rounded-lg bg-[#02254d] px-4 py-2.5 font-semibold text-white transition-colors hover:bg-[#35618e] sm:self-auto"
            >
              <span>Browse all articles</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <a
              href={DIY_REPUTATION_GUIDE_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="group ha-lift relative flex min-h-[400px] flex-col justify-end overflow-hidden rounded-xl bg-[#02254d] p-8 text-white outline-none focus-visible:ring-2 focus-visible:ring-[#78dc77] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f1f3ff] md:col-span-2 md:row-span-2 md:min-h-[500px]"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={diyReputationGuideListing.image}
                  alt={diyReputationGuideListing.imageAlt}
                  className="h-full w-full object-cover opacity-40 transition-opacity duration-300 group-hover:opacity-50"
                />
              </div>
              <div className="relative z-10">
                <h3 className="font-insights-headline mb-6 text-3xl leading-tight font-bold text-white">
                  {diyReputationGuideHero.title}
                </h3>
                <div className="flex items-center justify-between gap-4 text-sm">
                  <div>
                    <p className="font-bold">{diyReputationGuideListing.author}</p>
                    <p className="opacity-70">{diyReputationGuideListing.date}</p>
                  </div>
                  <span className="shrink-0 opacity-80">{diyReputationGuideListing.readTime}</span>
                </div>
              </div>
            </a>

            {FEATURED_PACK_INSIGHTS.map((insight, index) => {
              const href = `/blog/${insight.slug}`;
              const isWide = index === 0;
              const isCrisis = index === 1;

              if (isWide) {
                return (
                  <a
                    key={insight.id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card group ha-lift flex flex-col justify-between rounded-xl border-none p-6 transition-colors hover:bg-[#e1e8fd] md:col-span-2 outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f1f3ff]"
                  >
                    <div>
                      <span className="mb-3 block text-xs font-bold tracking-widest text-[#35618e] uppercase">
                        {insight.category}
                      </span>
                      <h3 className="font-insights-headline mb-3 text-xl font-bold text-[#02254d] transition-colors group-hover:text-[#35618e]">
                        {insight.title}
                      </h3>
                      <p className="line-clamp-3 text-sm text-[#43474e]">
                        {insight.excerpt}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs text-[#74777f]">{insight.readTime}</span>
                      <ArrowRight className="h-5 w-5 text-[#35618e] opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </a>
                );
              }

              return (
                <a
                  key={insight.id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group ha-lift flex flex-col justify-between rounded-xl border-none p-6 transition-shadow hover:shadow-xl md:col-span-1 outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f1f3ff] ${
                    isCrisis ? "bg-[#f1f3ff]" : "bg-white"
                  }`}
                >
                  <div>
                    <span
                      className={`mb-3 block text-xs font-bold tracking-widest uppercase ${
                        isCrisis
                          ? "text-[#35618e]"
                          : "inline-block rounded bg-[#00450e] px-2 py-0.5 text-[10px] text-[#78dc77]"
                      }`}
                    >
                      {insight.category}
                    </span>
                    <h3 className="font-insights-headline mb-3 text-lg font-bold text-[#02254d] transition-colors group-hover:text-[#35618e]">
                      {insight.title}
                    </h3>
                    <p
                      className={`text-sm leading-snug text-[#43474e] ${
                        isCrisis ? "font-semibold" : "line-clamp-4"
                      }`}
                    >
                      {insight.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-[#74777f]">
                      {insight.date} · {insight.author}
                    </span>
                    <ArrowRight className="h-5 w-5 shrink-0 text-[#35618e] opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section
        id="latest-articles"
        className="mx-auto max-w-7xl px-6 py-24 md:px-8"
      >
        <div className="mb-16 flex flex-col gap-8">
          <h2 className="font-insights-headline text-4xl font-extrabold tracking-tight text-[#02254d]">
            Latest Articles
          </h2>
          <div className="flex flex-nowrap justify-start gap-1.5">
            {FILTER_LABELS.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setActiveFilter(label)}
                className={`ha-pill rounded-full px-2.5 py-2 text-[10px] font-semibold whitespace-nowrap transition-colors lg:px-3 lg:text-[11px] xl:px-4 xl:text-xs ${
                  activeFilter === label
                    ? "bg-[#02254d] text-white shadow-sm"
                    : "border border-[#d7e2ef] bg-white text-[#35618e] hover:border-[#35618e] hover:bg-[#eef4fb] hover:text-[#02254d]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {filteredArticles.length === 0 ? (
          <p className="text-center text-[#43474e]">
            More insights in this category are coming soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => {
              const cardInner = (
                <>
                <div className="ha-lift mb-6 aspect-video overflow-hidden rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35),0_12px_24px_-8px_rgba(0,0,0,0.2)]">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="mb-3 block text-xs font-bold tracking-widest text-[#35618e] uppercase">
                  {article.category}
                </span>
                <h3 className="font-insights-headline mb-4 text-xl font-bold text-[#02254d] transition-colors group-hover:text-[#35618e]">
                  {article.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-[#43474e]">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-[#74777f]">
                  <span>{article.date}</span>
                  <span className="h-1 w-1 rounded-full bg-[#c4c6d0]" />
                  <span>{article.author}</span>
                </div>
                </>
              );
              const slug = article.slug;
              const openBlogInNewTab =
                PACK20_SLUGS.has(slug) ||
                slug === SUPPRESS_NEGATIVE_GUIDE_SLUG ||
                slug === DIY_REPUTATION_GUIDE_SLUG ||
                slug === REMOVE_NEGATIVE_SEARCH_RESULTS_SLUG ||
                slug === REPUTATION_REPAIR_TIMELINE_SLUG ||
                slug === REMOVE_NEWS_ARTICLES_FROM_GOOGLE_SLUG;
              return slug ? (
                <a
                  key={article.id}
                  href={`/blog/${slug}`}
                  {...(openBlogInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f9f9ff]"
                >
                  {cardInner}
                </a>
              ) : (
                <article key={article.id} className="group rounded-xl">
                  {cardInner}
                </article>
              );
            })}
          </div>
        )}

        <div className="mt-16 flex justify-center">
          <button
            type="button"
            className="ha-pill rounded-xl bg-[#02254d] px-8 py-3 font-bold text-white transition-all duration-300 hover:bg-[#35618e]"
          >
            Load More Insights
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f9f9ff] px-6 py-24 md:px-8">
        <div className="mx-auto max-w-3xl">
          <BlogGuideCtaPanel />
        </div>
      </section>
    </main>
    </>
  );
}

export default InsightsBlogsPage;
