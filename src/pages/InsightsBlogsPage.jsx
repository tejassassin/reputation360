import { useEffect, useState } from "react";
import { BadgeCheck, ArrowRight, ArrowUpRight } from "lucide-react";
import { calendlyNewTabProps } from "../constants/scheduling";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9RkcKxX1nZCRrBRIu6rOONYqsNVBW7ImSuvITVmOpUNdh9vHBQk72dRRSVg466yzV7FRLVAR74vtVn6mQM0qSQN7nwSKV5FRcqM2cRWLPZgV0I9AcJ4dx6eKagNgJmw90lkVLTGDucXhp4xEv1BziO3gnOT71pR9W2Me9zrfnNhsuERyYBIMHr21Picl79YYv-_eICE0qZQ-fU8O-bUpr5Nvt-K4QLuuTjb8c1GJuhLQBP1XrKDHjlV0QvXkwWydskHpIgIc5xa8";

const FEATURED_LARGE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD5QuhCjOmDdhtcEyUvdgWvUr7qktAkSFxHBYEU6AS-vSI8j9pN_Eevw_S8dgjzcEecOkIWMPnvGWpYi9DjKcFnAdO8fT0ScLFULrNtK5ifYgRvNqS-tKW6IgjVAcXO0mCY9fhQzGq2knD0zGDyTclbjhrKXsw0iYy9Sw6seRPc9LFTaff2OP-EAdl20a9bADaHc6JP1Yr5cRgEMwPghNMvc1SI8fC3TW5OR3Qk0GyUKdsXvcKSbGbnDwcI3Zr9MualNrPZiVrVpD8";

const AUTHOR_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAODSNNz_0-uPP1uxKjRDq9aXF2XeIw8VGRiIyWW3LXGZjSLkzDKcIFDZqyXteU9L-YNL2DMgCS0N6-RzwD6ROT2XSd2fN2Pv9Gm4A0cVF6MRmDVDlaUWKqLf07TDi9CiiDrCJhndAi262WZL1GwWoQhe8eniYp359bgxOb9iYMuc-7cm9ksue6NDOB4f-yZCAN14TP1UejDgnR2lswLFb1q_bY6dsLIgVse-gHpShUhfrIt6A168R97YZazI8nEyfQFf2N8k4Syj4";

const ARTICLE_IMAGES = {
  corp:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA9q7RQ1WtPClqHoz7wc6GkHOFW6TmClytSpSeoHcoxGWejXogVHwlgOHhA_J4Za10gVoNzv1wb8zSCG9akGHFWNRB-AUuQ4__42wtzoqT1FocHRCbj7FaPC_RnNacmJiHHHJIzFwy02TRPk0AL6dehQjyqCECmfTeXXCYj-FFig7fPIgR-0zfHNEp8PrbaeQLjfYoUWBppHGo58JPALOC_Jenrx3nbZeJCZ69JIj7UnskFP1GHo_jn-vbQWu2vR8Qg5QJyrzRsP5E",
  personal:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAI-hEmwZSSnM3sre-a-ql1cSWSn7CKWKSV2vLC3Ccev1mZVEfFFaIzlg6BeWyXIJC_3DggR6vgdxT6DYDX7-GhAHlCEFdZAXkb7-jNA3o_8OOE3uqTLAk4wSL29JCuxPRx5vpqzUw-8VL5XiUfR5BGXh3hVBZJkWtI3zPvNRTmRzn7qjZIEfPSB8i1Az34gwN558R9yb5AEGHGdZRmUKUR4tgi8ULPe-oeobaCWtzigGbAXzoQfMdltSpkWzekhAyskCxwStDdJzg",
  legal:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDPDLTDl517y16nT9ii79G4iU4t_BrteAxgzTk9lbGglde2xSrUlbyS7QYyaUY9SsCRC2RLQcA5qDlBWGEH5BQ0uWMXuFc7MF_WE4VvGIWkzS3_maq3-UKxCmujE64a3rNXPnH123eDXFdExAlJjP8GsOE6EH2J1rr3-3T6qVYo3d6Cu2DkJWbo0BjVogi6UH_XOPhRuMHPiPMZ-iQRdBN_aZbbT62bD3I-7zDnwvsyX47ZSDSuaRcDhAtwAYBBt8IJlJ-a1AcMq4c",
};

const FILTER_LABELS = ["All", "Corporate", "Personal", "Legal", "Tech"];

const latestArticles = [
  {
    id: "1",
    filter: "Corporate",
    category: "Corporate Identity",
    title: "Why Your Wikipedia Page is Your Biggest Liability in 2026",
    excerpt:
      "Internal data shows that Wikipedia remains the #1 source for LLMs. If yours is outdated, your AI reputation is already compromised.",
    date: "Jan 12, 2026",
    author: "Sarah Jenkins",
    image: ARTICLE_IMAGES.corp,
    imageAlt: "Corporate meeting",
  },
  {
    id: "2",
    filter: "Personal",
    category: "Personal Branding",
    title:
      "The Invisible Wall: How Hidden Metadata Affects High-Net-Worth Individuals",
    excerpt:
      "Beyond what you see on Google, there's a world of data brokers and metadata that dictates your privacy and security status.",
    date: "Jan 08, 2026",
    author: "David Chen",
    image: ARTICLE_IMAGES.personal,
    imageAlt: "Digital data",
  },
  {
    id: "3",
    filter: "Legal",
    category: "Legal Strategy",
    title:
      "Defamation vs. Free Speech: The Evolving Legal Landscape of Online Reviews",
    excerpt:
      "Recent court rulings have shifted the burden of proof for online criticism. Here is what business owners need to know now.",
    date: "Dec 22, 2025",
    author: "Elena Rodriguez",
    image: ARTICLE_IMAGES.legal,
    imageAlt: "Legal Gavel",
  },
];

function InsightsBlogsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const previous = document.title;
    document.title = "Insights From Seven Years of Reputation Work | Reputation360";
    return () => {
      document.title = previous;
    };
  }, []);

  const filteredArticles =
    activeFilter === "All"
      ? latestArticles
      : latestArticles.filter((a) => a.filter === activeFilter);

  function handleNewsletterSubmit(e) {
    e.preventDefault();
  }

  return (
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
            <div className="group ha-lift relative flex min-h-[500px] flex-col justify-end overflow-hidden rounded-xl bg-[#02254d] p-8 text-white md:col-span-2 md:row-span-2">
              <div className="absolute inset-0 z-0">
                <img
                  src={FEATURED_LARGE_IMG}
                  alt="Executive desk"
                  className="h-full w-full object-cover opacity-30"
                />
              </div>
              <div className="relative z-10">
                <span className="mb-4 block text-xs font-bold tracking-widest text-[#78dc77] uppercase">
                  Executive Reputation
                </span>
                <h3 className="font-insights-headline mb-4 text-3xl leading-tight font-bold">
                  The 2026 CEO Playbook: Why Personal SEO is Dead and Identity
                  Authority is Everything
                </h3>
                <p className="mb-6 line-clamp-3 text-lg text-[#8ca6d5]">
                  In a world of generative AI search, traditional link-building for
                  executives no longer works. We break down the new hierarchy of
                  digital trust.
                </p>
                <div className="flex items-center gap-4">
                  <div className="ha-lift h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-[#1f3b64] shadow-[0_12px_28px_-10px_rgba(0,0,0,0.25)]">
                    <img src={AUTHOR_IMG} alt="Marcus Thorne" className="h-full w-full object-cover" />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold">Marcus Thorne</p>
                    <p className="opacity-70">Managing Partner</p>
                  </div>
                </div>
              </div>
            </div>

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
            {filteredArticles.map((article) => (
              <article key={article.id} className="group rounded-xl">
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
              </article>
            ))}
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

      {/* Newsletter */}
      <section className="px-6 py-24 md:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#1f3b64] p-12 md:p-20">
          <div className="absolute top-0 right-0 h-full w-1/3 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#78dc77]/5 blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-insights-headline mb-6 text-4xl font-extrabold text-white">
                Join &apos;The Authority&apos;
              </h2>
              <p className="text-lg leading-relaxed font-light text-[#8ca6d5]">
                Our weekly briefing for the C-Suite. No fluff, just 3
                high-impact strategies for protecting and growing your digital
                authority.
              </p>
            </div>
            <div>
              <form
                className="flex flex-col space-y-4"
                onSubmit={handleNewsletterSubmit}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Professional email address"
                  className="border-b-2 border-[#c4c6d0]/20 bg-[#02254d]/30 px-0 py-4 text-white outline-none transition-colors placeholder:text-[#8ca6d5]/50 focus:border-[#78dc77]"
                />
                <button
                  type="submit"
                  className="ha-pill rounded-xl bg-[#78dc77] py-4 text-lg font-bold text-white active:scale-[0.98]"
                >
                  Subscribe to the Briefing
                </button>
                <p className="text-center text-[10px] tracking-tighter text-[#8ca6d5]/60 uppercase">
                  Join 12,000+ industry leaders. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f9f9ff] px-6 py-24 text-center md:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-insights-headline mb-6 text-4xl font-bold text-[#02254d]">
            Ready to Own Your Narrative?
          </h2>
          <p className="mb-12 text-xl font-light text-[#43474e]">
            Our practitioners are ready to audit your digital presence and
            provide a custom roadmap for growth.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              {...calendlyNewTabProps}
              className="ha-pill rounded-xl bg-cta-consult px-10 py-5 text-lg font-bold text-white shadow-xl shadow-cta-consult/30 transition hover:brightness-95"
            >
              Book a Free Consultation
            </a>
            <a
              {...calendlyNewTabProps}
              className="ha-pill rounded-xl bg-cta-consult px-10 py-5 text-lg font-bold text-white shadow-xl shadow-cta-consult/30 transition hover:brightness-95"
            >
              Speak with a Partner
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default InsightsBlogsPage;
