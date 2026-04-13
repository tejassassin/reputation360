import { useState } from "react";
import { calendlyNewTabProps } from "../constants/scheduling";
import {
  ShieldCheck,
  FileWarning,
  Search,
  AlertTriangle,
  Star,
  Eye,
  Activity,
  ChevronRight,
  Map,
  BadgeCheck,
  Zap,
  EyeOff,
  Scale,
  Landmark,
  Newspaper,
  ClipboardList,
  MessagesSquare,
  Linkedin,
  Globe2,
  History,
} from "lucide-react";

const FINANCIAL_ADVISOR_PROBLEM_TILES = [
  {
    id: "finra",
    label: "FINRA BrokerCheck",
    description:
      "FINRA BrokerCheck disclosures and enforcement actions",
    Icon: ShieldCheck,
  },
  {
    id: "sec",
    label: "SEC records",
    description:
      "SEC investigation records and administrative proceedings",
    Icon: Scale,
  },
  {
    id: "cftc",
    label: "CFTC & state",
    description:
      "CFTC and state securities regulator disciplinary records",
    Icon: Landmark,
  },
  {
    id: "press",
    label: "Financial press",
    description:
      "Wall Street Journal, Bloomberg, Reuters, and MarketWatch coverage of regulatory proceedings",
    Icon: Newspaper,
  },
  {
    id: "cfpb",
    label: "CFPB & portals",
    description:
      "Complaints filed on CFPB, state attorney general portals, and consumer forums",
    Icon: ClipboardList,
  },
  {
    id: "reviews",
    label: "Reviews & listings",
    description:
      "Negative client reviews on Google Business, Yelp, and financial aggregator directories",
    Icon: Star,
  },
  {
    id: "forums",
    label: "Forums",
    description:
      "Forum discussions on Reddit, Bogleheads, and financial communities mentioning your name",
    Icon: MessagesSquare,
  },
  {
    id: "linkedin",
    label: "LinkedIn & social",
    description:
      "LinkedIn posts or articles by disgruntled former clients or colleagues",
    Icon: Linkedin,
  },
  {
    id: "news",
    label: "Archived news",
    description:
      "Old news coverage of market events where your name or firm was mentioned critically",
    Icon: History,
  },
];

function FinancialAdvisorsProblemSection() {
  const [active, setActive] = useState(0);
  const activeTile = FINANCIAL_ADVISOR_PROBLEM_TILES[active];
  const ActiveIcon = activeTile.Icon;

  return (
    <section
      id="problem-financial-professionals-face"
      className="mt-12 scroll-mt-28 rounded-[24px] border border-[#d9e3ea] bg-white px-5 py-9 shadow-[0_10px_28px_rgba(15,23,42,0.07)] md:mt-16 md:px-9 md:py-11"
    >
      <h2 className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        The Problem Financial Professionals Face
      </h2>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8ecf7] text-[#1f3b64]">
          <Globe2 className="h-5 w-5" aria-hidden />
        </div>
        <p className="max-w-2xl text-[14px] leading-relaxed text-[#3f4f66] md:text-[15px] md:leading-[1.55]">
          Your reputation lives in places you do not control. Regulatory
          databases, financial news archives, complaint portals, and aggregator
          sites all rank prominently for advisor names — and all of them are
          indexed by Google.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-[#e2e8f0] pb-4">
        <h3 className="font-heading text-base font-semibold text-[#0f2e58] md:text-lg">
          Where damaging content typically appears:
        </h3>
        <p className="text-xs font-medium text-[#5d6c80] md:text-[13px]">
          Tap an icon to see the full context
        </p>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_minmax(280px,360px)] lg:items-start">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {FINANCIAL_ADVISOR_PROBLEM_TILES.map((tile, i) => {
            const Icon = tile.Icon;
            const selected = active === i;
            return (
              <button
                key={tile.id}
                type="button"
                aria-pressed={selected}
                aria-label={`${tile.label}. ${selected ? "Showing details" : "Show details"}`}
                onClick={() => setActive(i)}
                className={`group flex flex-col items-center gap-2.5 rounded-2xl border px-2.5 py-3.5 text-center outline-none transition-[border-color,box-shadow,background-color,transform] duration-200 focus-visible:ring-2 focus-visible:ring-navy/35 focus-visible:ring-offset-2 motion-safe:active:scale-[0.98] md:px-3 md:py-4 ${
                  selected
                    ? "border-[#1f3b64] bg-[#eef2ff] shadow-[0_10px_26px_-12px_rgba(31,59,100,0.35)] ring-2 ring-[#1f3b64]/15"
                    : "border-[#dfe6ee] bg-[#fafbfd] hover:border-[#1f3b64]/28 hover:bg-white hover:shadow-[0_8px_22px_-14px_rgba(31,59,100,0.18)]"
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#1f3b64] shadow-sm transition-transform duration-200 md:h-12 md:w-12 ${
                    selected ? "scale-105" : "group-hover:scale-105"
                  }`}
                >
                  <Icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
                </span>
                <span className="text-[11px] font-semibold leading-snug text-[#0f2e58] md:text-xs">
                  {tile.label}
                </span>
              </button>
            );
          })}
        </div>

        <aside
          className="rounded-2xl border border-[#1f3b64]/12 bg-[linear-gradient(160deg,#f4f6fc_0%,#eef2fb_55%,#e8edf8_100%)] p-5 md:p-6 lg:sticky lg:top-28"
          aria-live="polite"
          aria-label="Selected risk source"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#1f3b64] shadow-sm">
              <ActiveIcon className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy/45">
                Selected source
              </p>
              <p className="mt-1 font-heading text-sm font-semibold text-[#0f2e58] md:text-base">
                {activeTile.label}
              </p>
            </div>
          </div>
          <p className="mt-4 text-[14px] leading-relaxed text-[#3f4f66] md:text-[15px] md:leading-relaxed">
            {activeTile.description}
          </p>
        </aside>
      </div>

      <p className="mt-8 rounded-xl border border-[#1f3b64]/10 bg-[#f8fafc] px-4 py-3.5 text-center text-[14px] font-semibold leading-snug text-[#0f2e58] md:px-6 md:text-[15px]">
        Any one of these, sitting on page one of Google for your name, is silently
        redirecting clients away from you every day.
      </p>
    </section>
  );
}

function FinancialAdvisorsPage() {
  return (
    <main className="flex-1 pt-28 md:pt-32 bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14 space-y-10">
        <section className="rounded-[8px] bg-[linear-gradient(110deg,#ececf8_0%,#eef3f6_70%,#edf7f3_100%)] px-3 py-6 md:px-4 md:py-7 grid gap-5 md:grid-cols-[1.03fr_0.97fr] items-start">
          <div className="max-w-[570px]">
            <p className="inline-flex rounded-xl bg-[#2a8c3e] px-3.5 py-1.5 text-[10px] tracking-[0.14em] font-semibold uppercase text-white shadow-[0_2px_6px_rgba(42,140,62,0.35)]">
              Who we serve?
            </p>
            <h1 className="mt-4 font-heading text-[34px] md:text-[40px] leading-[1.02] text-[#0f2e58] font-bold tracking-tight max-w-[520px]">
              Your Clients Research You Before Every Meeting. What Are They
              Finding?
            </h1>
            <p className="mt-5 text-[#4f5f75] text-[15px] md:text-[16px] leading-[1.5] max-w-[520px]">
              The wrong answer to that question costs more than you think.
            </p>
            <a
              {...calendlyNewTabProps}
              className="ha-pill mt-6 inline-flex items-center gap-2 rounded-[8px] bg-[#153f70] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(7,47,95,0.24)] hover:bg-[#0b3c75]"
            >
              Book a Free Confidential Consultation
            </a>
          </div>
          <div className="rounded-[6px] bg-[linear-gradient(180deg,#e8f5ef_0%,#e7f4ee_100%)] px-3 py-3 md:px-4 md:py-4 space-y-3 pt-1">
            {[
              {
                title: "Trust Restored",
                text: "We help financial professionals regain control of their public narrative through ethical suppression.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Discretion Guaranteed",
                text: "Your privacy is our priority throughout the entire suppression process.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "SEO Authority",
                text: "We leverage high-authority networks to ensure long-term ranking stability.",
                icon: <Activity className="h-5 w-5 text-[#6ee27d]" />,
              },
            ].map((item) => (
              <article
                key={item.title}
                className="ha-lift rounded-3xl border border-[#dbe3e8] bg-white px-4 py-4 shadow-[0_10px_24px_rgba(20,40,70,0.10)] md:px-5 md:py-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-[15px] md:text-[16px] leading-tight font-semibold text-[#1f3b64]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] md:text-[13px] leading-[1.5] text-[#5d6c80]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 md:mt-14 grid md:grid-cols-[1fr_1fr] overflow-hidden rounded-[24px] border border-[#123f70] shadow-[0_16px_34px_rgba(16,35,64,0.22)]">
          {/* Same layering pattern as Job Seekers “moment” panel: image + wash + HTML pill (no text baked into art showing through) */}
          <div className="relative min-h-[360px] md:min-h-[520px]">
            <div
              className="absolute inset-0 bg-cover bg-[center_22%]"
              style={{ backgroundImage: "url('/finra-invisible-leak.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041a30]/95 via-[#072f5f]/80 to-[#0d4a7a]/65" />
            <div className="relative flex min-h-[360px] flex-col justify-end p-8 text-white md:min-h-[520px] md:p-10">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#4a1528] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                THE INVISIBLE LEAK
              </div>
            </div>
          </div>
          <div className="bg-[#072f5f] text-white p-8 md:p-10">
            <div className="rounded-2xl border border-white/10 bg-white/7 px-5 py-6 md:px-6 md:py-7">
              <div className="space-y-3 text-sm leading-relaxed text-white/90 md:text-[15px] md:leading-relaxed">
                <p>
                  A prospective client searches your name before taking your call.
                </p>
                <p>In under sixty seconds, they have formed a judgment.</p>
                <p>
                  Not based on your track record. Not based on your certifications
                  or your years in practice.
                </p>
                <p>Based entirely on what Google decided to show them.</p>
              </div>
              <div className="mt-6 space-y-3 border-t border-white/15 pt-6 text-sm font-semibold leading-relaxed text-[#86e991] md:text-[15px] md:leading-relaxed">
                <p>
                  If what appears is a regulatory disclosure, a news article covering
                  an investigation, or a complaint on a financial forum — they
                  quietly move on.
                </p>
                <p>You never find out.</p>
                <p className="text-base font-semibold italic text-white/90 md:text-[17px]">
                  But it keeps happening.
                </p>
              </div>
            </div>
            <p className="mt-7 inline-flex items-center gap-2 text-[#8ce596] tracking-[0.14em] uppercase text-[10px] font-semibold">
              <AlertTriangle className="h-3 w-3" />
              Silence is the most expensive feedback
            </p>
          </div>
        </section>

        <FinancialAdvisorsProblemSection />

        <section className="mt-28 md:mt-32 grid md:grid-cols-[1.05fr_1fr] gap-10 md:gap-12 items-start">
          <div className="grid grid-cols-2 gap-4">
            <article className="ha-lift min-h-[210px] rounded-2xl border border-[#d8deea] bg-[#e6eaf8] p-7 md:p-8">
              <div className="h-8 w-8 rounded-full grid place-items-center text-[#1f3b64]">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="mt-8 font-heading text-[16px] md:text-[18px] leading-tight font-semibold text-[#1a2f4f]">
                Public &amp; Permanent
              </h3>
              <p className="mt-5 text-[13px] md:text-[14px] leading-[1.45] text-[#4f5f75]">
                BrokerCheck records are indexed by search engines, making them the
                first thing prospects see.
              </p>
            </article>
            <article className="ha-lift min-h-[210px] rounded-2xl border border-[#d8deea] bg-[#e6eaf8] p-7 md:p-8">
              <div className="h-8 w-8 rounded-full grid place-items-center text-[#1f3b64]">
                <Search className="h-5 w-5" />
              </div>
              <h3 className="mt-8 font-heading text-[16px] md:text-[18px] leading-tight font-semibold text-[#1a2f4f]">
                Google Indexed
              </h3>
              <p className="mt-5 text-[13px] md:text-[14px] leading-[1.45] text-[#4f5f75]">
                Regulatory filings often outrank your personal or firm website in
                organic search results.
              </p>
            </article>
          </div>
          <div className="pt-1">
            <h2 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-[#0f2e58] font-bold">
              The FINRA BrokerCheck Problem
            </h2>
            <p className="mt-5 text-[#3f4f66] text-[16px] md:text-[17px] leading-[1.6]">
              For financial advisors, FINRA BrokerCheck is more than a regulatory
              requirement - it is a public storefront. When a disclosure appears,
              it often lingers as a permanent stain on the first page of Google,
              regardless of the context or age of the incident.
            </p>
            <p className="mt-6 text-[#3f4f66] text-[16px] md:text-[17px] leading-[1.6]">
              Reputation360 specializes in neutralizing these threats. We don't
              just complain to regulators; we leverage strategic, authoritative
              content to push negative disclosures beyond the first page,
              reclaiming your digital identity.
            </p>
          </div>
        </section>

        <section className="mt-20 md:mt-24 -mx-4 md:-mx-6 px-4 md:px-6 py-12 md:py-14 bg-[#edeef9]">
          <h3 className="text-center font-heading text-[24px] md:text-[30px] leading-[1.15] text-[#0f2e58] font-bold">
            Other Reputation Threats
          </h3>
          <p className="text-center text-[#5a6780] mt-3 text-[12px] md:text-[13px] leading-[1.45] max-w-3xl mx-auto">
            Beyond BrokerCheck, the digital landscape for financial professionals
            is fraught with regulatory and social pitfalls.
          </p>

          <div className="mt-10 grid md:grid-cols-[2fr_1fr] gap-4">
            <article className="ha-lift flex min-h-[230px] flex-col rounded-3xl border border-[#d9dfeb] bg-white p-6 md:p-7">
              <Search className="h-6 w-6 text-[#89e89a]" />
              <h4 className="mt-6 font-heading text-[17px] md:text-[20px] leading-[1.2] font-semibold text-[#17375f]">
                SEC Enforcement &amp; Proceedings
              </h4>
              <p className="mt-4 text-[12px] md:text-[13px] leading-[1.55] text-[#4f5f75] max-w-[95%]">
                Public notices of SEC enforcement actions can be devastating for
                institutional credibility and retail trust alike. We create a
                buffer of positive authority.
              </p>
              <div className="mt-auto pt-6 border-t border-[#e6eaf2] text-[10px] md:text-[11px] tracking-[0.16em] uppercase font-semibold text-[#3d506d]">
                Vulnerability Level: Critical
              </div>
            </article>

            <article className="rounded-3xl bg-[#072f5f] border border-[#0b3f79] p-6 md:p-7 text-white min-h-[230px]">
              <Star className="h-6 w-6 text-[#8ce596]" />
              <h4 className="mt-6 font-heading text-[17px] md:text-[20px] leading-[1.2] font-semibold">
                Negative Reviews
              </h4>
              <p className="mt-4 text-[12px] md:text-[13px] leading-[1.55] text-white/82">
                Unfair client reviews on third-party platforms that bypass
                traditional compliance channels.
              </p>
            </article>
          </div>

          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <article className="ha-lift min-h-[190px] rounded-3xl border border-[#d9dfeb] bg-white p-6 md:p-7">
              <Activity className="h-6 w-6 text-[#1f3b64]" />
              <h4 className="mt-6 font-heading text-[16px] md:text-[18px] leading-[1.2] font-semibold text-[#17375f]">
                Outdated News Stories
              </h4>
              <p className="mt-3 text-[12px] md:text-[13px] leading-[1.5] text-[#4f5f75]">
                Decades-old regulatory proceedings that no longer reflect your
                current practice or standards.
              </p>
            </article>

            <article className="ha-lift min-h-[190px] rounded-3xl border border-[#d9dfeb] bg-white p-6 md:p-7">
              <FileWarning className="h-6 w-6 text-[#1f3b64]" />
              <h4 className="mt-6 font-heading text-[16px] md:text-[18px] leading-[1.2] font-semibold text-[#17375f]">
                Competitor Content
              </h4>
              <p className="mt-3 text-[12px] md:text-[13px] leading-[1.5] text-[#4f5f75]">
                Aggressive marketing tactics or SEO-driven articles designed to
                capitalize on your name search.
              </p>
            </article>

            <article className="ha-lift min-h-[190px] rounded-3xl border border-[#d9dfeb] bg-white p-6 md:p-7">
              <AlertTriangle className="h-6 w-6 text-[#1f3b64]" />
              <h4 className="mt-6 font-heading text-[16px] md:text-[18px] leading-[1.2] font-semibold text-[#17375f]">
                Media Mentions
              </h4>
              <p className="mt-3 text-[12px] md:text-[13px] leading-[1.5] text-[#4f5f75]">
                Regulatory reports picked up by local or industry news outlets
                that dominate your name's SERP.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-20 md:mt-24">
          <h3 className="font-heading text-[24px] md:text-[26px] leading-[1.15] text-[#0f2e58] font-bold">
            What Reputation360 Does
          </h3>
          <div className="mt-3 h-1.5 w-20 rounded-full bg-[#79df86]" />
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <Map className="h-4 w-4 stroke-[2.2]" />,
                title: "01. Audit",
                text: "We perform a comprehensive mapping of all Google, Bing, and industry-specific results impacting your name.",
              },
              {
                icon: <BadgeCheck className="h-4 w-4 stroke-[2.2]" />,
                title: "02. Strategy",
                text: "Custom suppression campaigns designed to push negative links to the second or third page of search results.",
              },
              {
                icon: <Zap className="h-4 w-4 stroke-[2.2]" />,
                title: "03. Execution",
                text: "We build high-authority digital assets and editorial content that outrank and bury regulatory disclosures.",
              },
              {
                icon: <EyeOff className="h-4 w-4 stroke-[2.2]" />,
                title: "04. Discretion",
                text: "Our work is invisible. We work quietly in the background to ensure your reputation shift feels organic and permanent.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="ha-lift rounded-2xl bg-transparent px-2 py-3"
              >
                <div className="h-12 w-12 rounded-xl bg-[#edf0ff] grid place-items-center text-[#123a66]">
                  {item.icon}
                </div>
                <h4 className="mt-4 font-heading text-[18px] md:text-[20px] leading-[1.2] font-semibold text-[#17375f]">
                  {item.title}
                </h4>
                <p className="mt-3 text-[13px] md:text-[14px] leading-[1.55] text-[#4f5f75]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 md:mt-16 -mx-4 md:-mx-6 rounded-none bg-[#244a7d] px-6 py-14 md:py-16 text-center text-white">
          <p className="font-heading text-[32px] md:text-[56px] leading-[1.12] font-semibold max-w-5xl mx-auto">
            Exceptional client service takes years to build. A single disclosure
            should not define it.
          </p>
          <p className="mt-5 text-[#7fe08b] tracking-[0.2em] text-[13px] md:text-[16px] font-semibold uppercase">
            Reputation360 Makes Sure It Does Not.
          </p>
        </section>

        <section className="rounded-2xl bg-white border border-navy/10 px-6 py-10 text-center">
          <h3 className="font-heading text-3xl md:text-4xl text-navy font-bold">
            You Deserve to Be Judged on Your Work
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-navy/75">
            A single disclosure should not hide your full professional track
            record. Let us build your visibility with compliance and confidence.
          </p>
          <a
            {...calendlyNewTabProps}
            className="ha-pill mt-6 inline-flex items-center gap-2 rounded-md bg-[#072f5f] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0b3c75]"
          >
            Book a Free Advisor Consultation
            <ChevronRight className="h-4 w-4" />
          </a>
        </section>
      </div>
    </main>
  );
}

export default FinancialAdvisorsPage;
