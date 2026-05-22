import { useState } from "react";
import { BadgeCheck, ArrowRight, ArrowUpRight } from "lucide-react";
import { ConsultationCtas } from "../components/ConsultationCtas";
import { SeoHead } from "../components/SeoHead.jsx";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";
import {
  DIY_REPUTATION_GUIDE_PATH,
  DIY_REPUTATION_GUIDE_SLUG,
  diyReputationGuideListing,
} from "../data/blogs/diyReputationGuide.js";
import {
  SUPPRESS_NEGATIVE_GUIDE_SLUG,
  suppressNegativeGuideListing,
} from "../data/blogs/suppressNegativeContentGuide.js";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9RkcKxX1nZCRrBRIu6rOONYqsNVBW7ImSuvITVmOpUNdh9vHBQk72dRRSVg466yzV7FRLVAR74vtVn6mQM0qSQN7nwSKV5FRcqM2cRWLPZgV0I9AcJ4dx6eKagNgJmw90lkVLTGDucXhp4xEv1BziO3gnOT71pR9W2Me9zrfnNhsuERyYBIMHr21Picl79YYv-_eICE0qZQ-fU8O-bUpr5Nvt-K4QLuuTjb8c1GJuhLQBP1XrKDHjlV0QvXkwWydskHpIgIc5xa8";

const FILTER_LABELS = ["All", "Corporate", "Personal", "Legal", "Tech"];

const latestArticles = [diyReputationGuideListing, suppressNegativeGuideListing];

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
              className="group ha-nudge flex items-center gap-2 self-start rounded-lg bg-[#02254d] px-4 py-2.5 font-semibold text-white transition-colors hover:bg-[#35618e] sm:self-auto"
            >
              <span>View all features</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <a
              href={DIY_REPUTATION_GUIDE_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="group ha-lift relative flex min-h-[500px] flex-col justify-end overflow-hidden rounded-xl bg-[#02254d] p-8 text-white outline-none focus-visible:ring-2 focus-visible:ring-[#78dc77] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f1f3ff] md:col-span-2 md:row-span-2"
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
                  {diyReputationGuideListing.title}
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

            <div className="glass-card group ha-lift flex flex-col justify-between rounded-xl border-none p-6 transition-colors hover:bg-[#e1e8fd] md:col-span-2">
              <div>
                <span className="mb-3 block text-xs font-bold tracking-widest text-[#35618e] uppercase">
                  Crisis Management
                </span>
                <h3 className="font-insights-headline mb-3 text-xl font-bold text-[#02254d]">
                  Responding to Viral Misinformation in the First 120 Minutes
                </h3>
                <p className="line-clamp-2 text-sm text-[#43474e]">
                  Speed used to be the only metric. Now, accuracy and narrative
                  control are the only things that save your stock price.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-[#74777f]">8 min read</span>
                <ArrowUpRight className="h-5 w-5 text-[#35618e] opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>

            <div className="group ha-lift flex flex-col justify-between rounded-xl border-none bg-white p-6 transition-shadow hover:shadow-xl md:col-span-1">
              <div>
                <span className="mb-3 inline-block rounded bg-[#00450e] px-2 py-0.5 text-[10px] font-bold tracking-widest text-[#78dc77] uppercase">
                  Legal
                </span>
                <h3 className="font-insights-headline mb-3 text-lg font-bold text-[#02254d]">
                  {"Google's New 'Right to be Forgotten' Policies"}
                </h3>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-[#74777f]">5 min read</span>
                <ArrowUpRight className="h-5 w-5 text-[#35618e] opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>

            <div className="group ha-lift flex flex-col justify-between rounded-xl border-none bg-white p-6 transition-shadow hover:shadow-xl md:col-span-1">
              <div>
                <span className="mb-3 block text-xs font-bold tracking-widest text-[#35618e] uppercase">
                  Corporate
                </span>
                <h3 className="font-insights-headline mb-3 text-lg font-bold text-[#02254d]">
                  ESG and the Reputation Paradox
                </h3>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-[#74777f]">12 min read</span>
                <ArrowUpRight className="h-5 w-5 text-[#35618e] opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <h2 className="font-insights-headline text-4xl font-extrabold tracking-tight text-[#02254d]">
            Latest Articles
          </h2>
          <div className="flex flex-wrap gap-2">
            {FILTER_LABELS.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setActiveFilter(label)}
                className={`ha-pill rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  activeFilter === label
                    ? "bg-[#02254d] text-white"
                    : "bg-[#35618e] text-white hover:bg-[#02254d]"
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
                slug === SUPPRESS_NEGATIVE_GUIDE_SLUG || slug === DIY_REPUTATION_GUIDE_SLUG;
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
      <section className="bg-[#f9f9ff] px-6 py-24 text-center md:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-insights-headline mb-6 text-4xl font-bold text-[#02254d]">
            Ready to Take the Next Step?
          </h2>
          <p className="mb-12 text-xl font-light text-[#43474e]">
            Your reputation took years to build. Don&apos;t let the internet decide its
            future.
          </p>
          <ConsultationCtas
            variant="onLight"
            consultLabel="Book a Free Consultation"
            consultClassName="ha-pill rounded-xl bg-cta-consult px-10 py-5 text-lg font-bold text-white shadow-xl shadow-cta-consult/30 transition hover:brightness-95"
            freeScanClassName="ha-pill rounded-xl border-2 border-[#02254d]/25 bg-white px-10 py-5 text-lg font-bold text-[#02254d] shadow-sm transition hover:border-[#02254d]/45 hover:bg-slate-50"
            wrapperClassName="justify-center gap-4"
          />
        </div>
      </section>
    </main>
    </>
  );
}

export default InsightsBlogsPage;
