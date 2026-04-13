import { useEffect, useRef, useState } from "react";
import { calendlyNewTabProps } from "../constants/scheduling";
import {
  ShieldCheck,
  Search,
  AlertTriangle,
  UserRoundX,
  Newspaper,
  BadgeCheck,
  Hammer,
  Activity,
  Eye,
  UserSearch,
  FileText,
  Globe2,
  Scale,
  Star,
  MessagesSquare,
  History,
  RefreshCw,
  ShieldAlert,
} from "lucide-react";

const JOB_SEEKER_PROBLEM_TILES = [
  {
    id: "news-legal",
    label: "News & legal press",
    description:
      "News articles from a difficult period—a legal matter, a workplace dispute, a business failure—that still rank when someone searches your name.",
    Icon: Newspaper,
  },
  {
    id: "court",
    label: "Court records",
    description:
      "Court records and legal proceedings that are publicly indexed and surface ahead of your current professional story.",
    Icon: Scale,
  },
  {
    id: "social",
    label: "Old social posts",
    description:
      "Old social media content that no longer reflects who you are today but still appears in results and shapes first impressions.",
    Icon: History,
  },
  {
    id: "third-party",
    label: "Third-party content",
    description:
      "Content posted by former employers, colleagues, or people from your personal life that ranks for your name without context you control.",
    Icon: UserRoundX,
  },
  {
    id: "employer-reviews",
    label: "Employer reviews",
    description:
      "Negative Glassdoor, Indeed, or similar references if you were previously in a leadership or visible role—and they follow you in search.",
    Icon: Star,
  },
  {
    id: "same-name",
    label: "Mistaken identity",
    description:
      "Results for a different person who shares your name—creating confusion before a recruiter ever opens your profile.",
    Icon: UserSearch,
  },
  {
    id: "forums",
    label: "Forums & threads",
    description:
      "Blog posts, forum threads, or Reddit discussions mentioning you in an unflattering or outdated context.",
    Icon: MessagesSquare,
  },
  {
    id: "cached",
    label: "Cached results",
    description:
      "Removed but cached content that still appears in Google results or preview snippets long after you thought it was gone.",
    Icon: RefreshCw,
  },
];

const JOB_SEEKER_SCALE_METRICS = [
  {
    id: "recruiter-research",
    figure: "77%",
    blurb: "Recruiters research you before they decide",
    description:
      "77% of recruiters and hiring managers research candidates online before making a hiring decision.",
    Icon: UserSearch,
  },
  {
    id: "eliminated",
    figure: "56%",
    blurb: "Eliminated after something surfaced online",
    description:
      "56% say they have eliminated a candidate based on something they found online.",
    Icon: UserRoundX,
  },
  {
    id: "no-contact",
    figure: "47%",
    blurb: "Won't reach out if search raises concerns",
    description:
      "47% say they would not even contact a candidate if their online search raised concerns.",
    Icon: ShieldAlert,
  },
  {
    id: "self-search",
    figure: "Only 6%",
    blurb: "Candidates who search their own name first",
    description:
      "Only 6% of candidates ever think to search their own name before applying.",
    Icon: Eye,
  },
];

function JobSeekersScaleSection() {
  const [active, setActive] = useState(0);
  const [entered, setEntered] = useState(false);
  const rootRef = useRef(null);
  const activeMetric = JOB_SEEKER_SCALE_METRICS[active];
  const ActiveIcon = activeMetric.Icon;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setEntered(true);
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      id="scale-of-the-problem-job-seekers"
      className="relative mt-12 scroll-mt-28 overflow-hidden rounded-[28px] border border-[#0a2748]/40 bg-[linear-gradient(148deg,#041528_0%,#082441_42%,#0c3054_100%)] px-5 py-9 text-white shadow-[0_28px_64px_-28px_rgba(4,21,40,0.65)] md:mt-16 md:px-9 md:py-11"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#4eab66]/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-[#3b82f6]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-heading text-[26px] font-bold leading-tight tracking-tight md:text-[32px]">
          The Scale of the Problem
        </h2>
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
          Tap a metric to explore
        </p>
      </div>

      <div className="relative mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-stretch">
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {JOB_SEEKER_SCALE_METRICS.map((m, i) => {
            const Icon = m.Icon;
            const selected = active === i;
            return (
              <button
                key={m.id}
                type="button"
                aria-pressed={selected}
                aria-label={`${m.figure}: ${m.description}`}
                onClick={() => setActive(i)}
                style={{
                  transitionDelay: entered ? `${i * 55}ms` : "0ms",
                }}
                className={`flex flex-col items-start rounded-2xl border px-4 py-4 text-left outline-none transition-all duration-300 motion-safe:hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#8ce596]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#041528] md:px-5 md:py-5 ${
                  entered
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                } ${
                  selected
                    ? "border-[#8ce596]/55 bg-white/[0.12] shadow-[0_16px_40px_-18px_rgba(0,0,0,0.45)] ring-1 ring-[#8ce596]/35"
                    : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0a2038] text-[#8ce596] shadow-inner shadow-black/20">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="mt-4 font-heading text-[28px] font-bold leading-none tracking-tight text-white tabular-nums md:text-[34px]">
                  {m.figure}
                </span>
                <span className="mt-2 text-[11px] font-semibold leading-snug text-white/70 md:text-xs">
                  {m.blurb}
                </span>
              </button>
            );
          })}
        </div>

        <aside
          className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#061a2e]/80 p-5 backdrop-blur-sm md:p-6 lg:sticky lg:top-28 lg:self-start"
          aria-live="polite"
        >
          <div>
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#8ce596]">
                <ActiveIcon className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  Selected insight
                </p>
                <p className="mt-1 font-heading text-2xl font-bold tabular-nums tracking-tight text-white md:text-3xl">
                  {activeMetric.figure}
                </p>
              </div>
            </div>
            <p className="mt-5 text-[14px] leading-relaxed text-white/85 md:text-[15px] md:leading-relaxed">
              {activeMetric.description}
            </p>
          </div>
          <p className="mt-6 border-t border-white/10 pt-4 text-[10px] leading-relaxed text-white/45 md:text-[11px]">
            <em>
              (Source: CareerBuilder Annual Candidate Behaviour Report; Jobvite
              Recruiter Nation Survey)
            </em>
          </p>
        </aside>
      </div>
    </section>
  );
}

function JobSeekersWhyDifficultSection() {
  return (
    <section
      id="why-particularly-difficult-job-seekers"
      className="mt-16 scroll-mt-28 rounded-[24px] border border-[#e4e6ec] bg-[#f9f9f9] px-6 py-10 md:mt-20 md:px-12 md:py-14"
    >
      <div className="mx-auto max-w-3xl text-left">
        <h2 className="font-serif text-[24px] font-bold leading-[1.2] text-[#141820] md:text-[30px] md:leading-[1.15]">
          Why This Is Particularly Difficult for Job Seekers
        </h2>
        <div className="mt-8 space-y-6 font-serif text-[16px] leading-[1.75] text-[#252830] md:text-[17px] md:leading-[1.78]">
          <p>
            Unlike a business that can invest in ongoing brand management, a job
            seeker is typically navigating this alone — often during an already
            stressful period of transition.
          </p>
          <p>
            There is also a timing problem. The damage is happening now, with
            every application you submit — but you will not receive clear feedback
            telling you that your search results are the issue. You may interpret
            silence as a skills gap or a competitive market, when the real obstacle
            is something Google is showing that you have never even looked at.
          </p>
          <p>
            Every week your search results remain unchanged is another set of
            opportunities quietly closing.
          </p>
        </div>
      </div>
    </section>
  );
}

function JobSeekersProblemSection() {
  const [active, setActive] = useState(0);
  const activeTile = JOB_SEEKER_PROBLEM_TILES[active];
  const ActiveIcon = activeTile.Icon;

  return (
    <section
      id="problem-job-seekers-face"
      className="mt-12 scroll-mt-28 rounded-[24px] border border-[#d9e3ea] bg-white px-5 py-9 shadow-[0_10px_28px_rgba(15,23,42,0.07)] md:mt-16 md:px-9 md:py-11"
    >
      <h2 className="font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">
        The Problem Job Seekers Face
      </h2>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8ecf7] text-[#1f3b64]">
          <Globe2 className="h-5 w-5" aria-hidden />
        </div>
        <p className="max-w-2xl text-[14px] leading-relaxed text-[#3f4f66] md:text-[15px] md:leading-[1.55]">
          Most people have no idea what appears when someone Googles their name.
          And most assume that if something is old, or resolved, or unfair, it no
          longer matters. It does.
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
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {JOB_SEEKER_PROBLEM_TILES.map((tile, i) => {
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
                  className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-sm transition-[transform,background-color,color,box-shadow] duration-200 md:h-12 md:w-12 ${
                    selected
                      ? "scale-105 bg-[#1f3b64] text-white shadow-[0_6px_16px_-4px_rgba(31,59,100,0.45)]"
                      : "bg-white text-[#1f3b64] group-hover:scale-105"
                  }`}
                >
                  <Icon
                    className="h-5 w-5 md:h-6 md:w-6"
                    aria-hidden
                    strokeWidth={selected ? 2.25 : 1.75}
                    absoluteStrokeWidth
                  />
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
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1f3b64] text-white shadow-md md:h-11 md:w-11">
              <ActiveIcon
                className="h-5 w-5 md:h-6 md:w-6"
                aria-hidden
                strokeWidth={2.25}
                absoluteStrokeWidth
              />
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
        Any one of these on page one when a recruiter searches your name can
        quietly remove you from consideration—often before you ever find out why.
      </p>
    </section>
  );
}

function JobSeekersPage() {
  return (
    <main className="flex-1 pt-28 md:pt-32 bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14 space-y-10">
        <section className="relative overflow-hidden rounded-[8px] bg-[linear-gradient(110deg,#ececf8_0%,#eef3f6_70%,#edf7f3_100%)] px-3 py-6 md:px-4 md:py-7 grid gap-5 md:grid-cols-[1.03fr_0.97fr] items-start">
          <div className="max-w-[570px]">
            <h1 className="font-heading text-[34px] md:text-[40px] leading-[1.02] text-[#0f2e58] font-bold tracking-tight max-w-[520px]">
              Recruiters Google You Before They Call. What Do They Find?
            </h1>
            <p className="mt-5 text-[#4f5f75] text-[15px] md:text-[16px] leading-[1.5] max-w-[520px]">
              Ensure your digital reputation reflects your true professional
              value before a recruiter ever hits 'Search'.
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
                text: "We help top-tier candidates regain control of their public narrative through ethical suppression.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Discretion Guaranteed",
                text: "Your career transition is handled with absolute confidentiality and professional care.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Career Authority",
                text: "We build high-authority profiles to ensure your best achievements rank at the very top.",
                icon: <Search className="h-5 w-5 text-[#6ee27d]" />,
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

        <section className="mt-12 md:mt-16 grid md:grid-cols-[1fr_1fr] overflow-hidden rounded-[24px] border border-[#123f70] shadow-[0_16px_34px_rgba(16,35,64,0.22)]">
          <div className="relative min-h-[340px] overflow-hidden bg-[#041a30] md:min-h-[500px]">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-[center_24%] bg-no-repeat"
              style={{ backgroundImage: "url('/job-seekers-moment-left.png')" }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[#041a30]/68"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,12,26,0.82)_0%,rgba(4,18,36,0.35)_28%,transparent_42%,rgba(4,18,36,0.4)_58%,rgba(3,12,24,0.92)_82%,#020a14_100%)]"
              aria-hidden
            />
            <div className="relative z-10 flex min-h-[340px] flex-col justify-end p-8 font-heading text-white antialiased md:min-h-[500px] md:p-10">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#4a1528] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                THE INVISIBLE BARRIER
              </div>
              <div className="mt-5 flex items-center gap-3">
                <UserSearch className="h-5 w-5 shrink-0 text-white/90" />
                <div className="h-px flex-1 bg-white/35" />
              </div>
              <h2 className="fa-invisible-leak-headline mt-5 w-full max-w-none font-heading text-[26px] font-bold leading-[1.08] tracking-tight sm:text-[30px] md:text-[34px]">
                <span className="block whitespace-nowrap">
                  A recruiter searches your name
                </span>
                <span className="block whitespace-nowrap">
                  before the first interview.
                </span>
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#072f5f] p-7 text-white md:p-9">
            <div className="rounded-2xl border border-white/10 bg-white/7 px-5 py-6 md:px-6 md:py-7">
              <div className="space-y-3 text-sm leading-relaxed text-white/90 md:text-[15px] md:leading-relaxed">
                <p>Your CV is strong.</p>
                <p>Your experience is relevant.</p>
                <p>Your references are solid.</p>
                <p>
                  But before any of that gets evaluated, something else happens first.
                </p>
                <p>
                  The hiring manager searches your name. In under a minute, they form a judgment based entirely on what Google shows.
                </p>
                <p className="text-[15px] font-semibold leading-snug text-white md:text-[17px]">
                  If that page shows anything uncomfortable, your application quietly moves to the bottom.
                </p>
              </div>
            </div>
            <div className="mt-5 rounded-xl border border-white/15 bg-[#061f3d]/60 px-4 py-4">
              <p className="text-[13px] font-semibold text-[#86e991] md:text-[14px]">
                No one tells you why.
              </p>
              <p className="mt-1.5 text-[14px] font-medium italic text-white md:text-[15px]">
                The opportunity simply vanishes.
              </p>
            </div>
            <p className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8ce596] md:text-[11px]">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
              Silence is the most expensive feedback
            </p>
          </div>
        </section>

        <JobSeekersProblemSection />

        <JobSeekersScaleSection />

        <JobSeekersWhyDifficultSection />

        <section className="mt-28 md:mt-32 grid md:grid-cols-[1.05fr_1fr] gap-10 md:gap-12 items-start">
          <div className="grid grid-cols-2 gap-4">
            <article className="ha-lift min-h-[210px] rounded-2xl border border-[#d8deea] bg-[#e6eaf8] p-7 md:p-8">
              <div className="h-8 w-8 rounded-full grid place-items-center text-[#1f3b64]">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="mt-8 font-heading text-[16px] md:text-[18px] leading-tight font-semibold text-[#1a2f4f]">
                Public &amp; Visible
              </h3>
              <p className="mt-5 text-[13px] md:text-[14px] leading-[1.45] text-[#4f5f75]">
                Search results shape recruiter perception before your resume is
                read in full.
              </p>
            </article>
            <article className="ha-lift min-h-[210px] rounded-2xl border border-[#d8deea] bg-[#e6eaf8] p-7 md:p-8">
              <div className="h-8 w-8 rounded-full grid place-items-center text-[#1f3b64]">
                <Search className="h-5 w-5" />
              </div>
              <h3 className="mt-8 font-heading text-[16px] md:text-[18px] leading-tight font-semibold text-[#1a2f4f]">
                Recruiter Indexed
              </h3>
              <p className="mt-5 text-[13px] md:text-[14px] leading-[1.45] text-[#4f5f75]">
                Employer-side checks often surface outdated links ahead of current
                professional achievements.
              </p>
            </article>
          </div>
          <div className="pt-1">
            <h2 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-[#0f2e58] font-bold">
              What Can Show Up Against You
            </h2>
            <p className="mt-5 text-[#3f4f66] text-[16px] md:text-[17px] leading-[1.6]">
              Old media mentions, forum commentary, and irrelevant profile links
              can rank unexpectedly and create doubt.
            </p>
            <p className="mt-6 text-[#3f4f66] text-[16px] md:text-[17px] leading-[1.6]">
              We focus on practical suppression and content elevation so recruiters
              see evidence of capability, not noise.
            </p>
          </div>
        </section>

        <section className="mt-20 md:mt-24 -mx-4 md:-mx-6 px-4 md:px-6 py-12 md:py-14 bg-[#edeef9]">
          <h3 className="text-center font-heading text-[24px] md:text-[30px] leading-[1.15] text-[#0f2e58] font-bold">
            What Can Show Up Against You
          </h3>
          <p className="text-center text-[#5a6780] mt-3 text-[12px] md:text-[13px] leading-[1.45] max-w-3xl mx-auto">
            Different search results can affect recruiter confidence before first
            contact.
          </p>

          <div className="mt-10 grid md:grid-cols-[2fr_1fr] gap-4">
            <article className="ha-lift flex min-h-[230px] flex-col rounded-3xl border border-[#d9dfeb] bg-white p-6 md:p-7">
              <Newspaper className="h-6 w-6 text-[#89e89a]" />
              <h4 className="mt-6 font-heading text-[17px] md:text-[20px] leading-[1.2] font-semibold text-[#17375f]">
                Old News &amp; Legal Records
              </h4>
              <p className="mt-4 text-[12px] md:text-[13px] leading-[1.55] text-[#4f5f75] max-w-[95%]">
                Historical stories or legal references that no longer represent
                who you are today.
              </p>
              <div className="mt-auto pt-6 border-t border-[#e6eaf2] text-[10px] md:text-[11px] tracking-[0.16em] uppercase font-semibold text-[#3d506d]">
                Visibility Level: High
              </div>
            </article>

            <article className="ha-lift min-h-[230px] rounded-3xl border border-[#0b3f79] bg-[#072f5f] p-6 text-white md:p-7">
              <UserRoundX className="h-6 w-6 text-[#8ce596]" />
              <h4 className="mt-6 font-heading text-[17px] md:text-[20px] leading-[1.2] font-semibold">
                Irrelevant Social Content
              </h4>
              <p className="mt-4 text-[12px] md:text-[13px] leading-[1.55] text-white/82">
                Personal posts or mismatched profiles that dilute professional
                credibility.
              </p>
            </article>
          </div>

          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <article className="ha-lift min-h-[190px] rounded-3xl border border-[#d9dfeb] bg-white p-6 md:p-7">
              <Activity className="h-6 w-6 text-[#1f3b64]" />
              <h4 className="mt-6 font-heading text-[16px] md:text-[18px] leading-[1.2] font-semibold text-[#17375f]">
                Mistaken Identity
              </h4>
              <p className="mt-3 text-[12px] md:text-[13px] leading-[1.5] text-[#4f5f75]">
                Similar-name profiles or records that create confusion in search
                results.
              </p>
            </article>

            <article className="ha-lift min-h-[190px] rounded-3xl border border-[#0b3f79] bg-[#072f5f] p-6 text-white md:p-7">
              <BadgeCheck className="h-6 w-6 text-[#8ce596]" />
              <h4 className="mt-6 font-heading text-[16px] md:text-[18px] leading-[1.2] font-semibold">
                Defamation and Fiction
              </h4>
              <p className="mt-3 text-[12px] md:text-[13px] leading-[1.5] text-white/82">
                False or misleading online material that does not reflect your real
                trajectory.
              </p>
            </article>

            <article className="ha-lift min-h-[190px] rounded-3xl border border-[#d9dfeb] bg-white p-6 md:p-7">
              <Hammer className="h-6 w-6 text-[#1f3b64]" />
              <h4 className="mt-6 font-heading text-[16px] md:text-[18px] leading-[1.2] font-semibold text-[#17375f]">
                Media Mentions
              </h4>
              <p className="mt-3 text-[12px] md:text-[13px] leading-[1.5] text-[#4f5f75]">
                Mentions that over-index a past issue and suppress your current
                achievements.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-20 md:mt-24 -mx-4 md:-mx-6 rounded-none bg-[#f9f9ff] px-6 py-14 md:px-10 md:py-16">
          <div className="mx-auto max-w-5xl text-center">
            <h3 className="font-heading text-[26px] font-bold leading-tight text-[#1d3557] md:text-[30px]">
              What We Do For You
            </h3>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#4caf50]" />
            <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {[
                {
                  num: "01",
                  title: "Audit",
                  text: "We run the same search a recruiter would run and show you exactly what they see-no filters, just reality.",
                },
                {
                  num: "02",
                  title: "Suppress",
                  text: "We push negative content down through strategic content creation, ensuring professional results appear first.",
                },
                {
                  num: "03",
                  title: "Build",
                  text: "We optimize your LinkedIn and supporting profiles to position you as a high-value candidate worth hiring.",
                },
              ].map((item) => (
                <article
                  key={item.num}
                  className="ha-lift flex flex-col items-center rounded-xl px-3 py-4 text-center"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-[#1d3557] text-lg font-bold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_4px_14px_rgba(29,53,87,0.35)]">
                    {item.num}
                  </div>
                  <h4 className="mt-5 font-heading text-lg font-bold text-[#1d3557] md:text-xl">
                    {item.title}
                  </h4>
                  <p className="mt-3 max-w-[280px] text-[14px] leading-[1.55] text-[#555555] md:max-w-[300px]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-12 text-center md:py-16">
          <h3 className="mx-auto max-w-3xl font-heading text-[28px] font-bold leading-tight text-[#1a365d] md:text-[36px] md:leading-[1.2] lg:text-[40px]">
            Your Search Results Should Open Doors, Not Close Them
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.6] text-[#4a5568] md:text-[16px]">
            A past chapter should not quietly block a future opportunity. If your
            search results are working against you, Reputation360 can change that
            narrative permanently.
          </p>
          <p className="mt-6 inline-flex items-center justify-center gap-2 text-[15px] font-semibold text-[#48bb78]">
            <ShieldCheck className="h-5 w-5 shrink-0" strokeWidth={2} />
            Professional &amp; Confidential Service
          </p>
        </section>

        <section className="px-4 pb-14 md:pb-16">
          <div
            className="mx-auto max-w-5xl rounded-[36px] px-6 py-12 text-center text-white shadow-[0_16px_40px_rgba(26,54,93,0.25)] md:px-12 md:py-14"
            style={{
              backgroundColor: "#1a365d",
              backgroundImage:
                "radial-gradient(circle, rgba(147, 197, 253, 0.22) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          >
            <h3 className="font-heading text-[30px] font-bold leading-tight md:text-[40px] lg:text-[44px]">
              Ready for a clean slate?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.55] text-white/95 md:text-[16px]">
              Start with a comprehensive audit of your digital presence. It&apos;s
              confidential, thorough, and free.
            </p>
            <a
              {...calendlyNewTabProps}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#48bb78] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(72,187,120,0.45)] transition-colors hover:bg-[#38a169]"
            >
              Book a Free Confidential Consultation
              <FileText className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default JobSeekersPage;
