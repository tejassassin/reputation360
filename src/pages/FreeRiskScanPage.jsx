import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Circle,
  ExternalLink,
  FileDown,
  Loader2,
  Search,
  Shield,
  ShieldAlert,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { AnimatePresence, motion as Motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import { SeoHead } from "../components/SeoHead.jsx";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";
import { calendlyNewTabProps } from "../constants/scheduling";
import { cn } from "@/lib/utils";
import { buildReputationScanPdfBytes } from "@scan/freeScanPdfBuild.js";
import { buildOfflineFreeScanPayload } from "@/lib/freeScanClientFallback.js";
import {
  FREE_SCAN_GOOGLE_PAGES,
  FREE_SCAN_LINK_LIMIT,
} from "@scan/freeScanConstants.js";
import { letterGradeForReportedScore, reputationGradeBundle } from "@scan/scoreReputation.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const COUNTRIES = [
  { value: "USA", label: "USA" },
  { value: "UK", label: "UK" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "Other", label: "Other" },
];

const SCAN_FACTS = [
  "93% of people never go beyond the first page of Google results.",
  "A single negative result on Page 1 can significantly impact trust and credibility.",
  "Employers, investors, and clients often Google your name before making decisions.",
  "Your Google search results are your modern-day first impression.",
  "Most reputation damage comes from content people do not even know exists online.",
  "Positive media mentions can help strengthen long-term online credibility.",
  "Search engines heavily influence public perception - even before conversations happen.",
  "Personal branding is no longer optional in the digital age.",
  "Negative search results often receive more attention than positive ones.",
  "A strong online presence can increase trust before the first interaction even begins.",
  "Most people never monitor what appears about them on Google.",
  "Google search visibility directly affects professional reputation.",
  "Online reputation impacts hiring, partnerships, business growth, and investor confidence.",
  "Search results shape perception faster than social media profiles.",
  "Building positive digital authority takes time - but one negative result can impact perception instantly.",
  "Reputation management is not about hiding information - it is about improving perception and credibility.",
  "Public perception online is often formed within seconds of a Google search.",
  "Strong professional profiles help create trust and authority online.",
  "Search engines prioritize relevance and engagement - not necessarily fairness.",
  "Digital reputation is now one of the most valuable personal and business assets.",
];

const SCAN_STAGES = [
  "Connecting to Google Programmable Search",
  "Retrieving the first 3 pages of results (up to 30 links)",
  "Classifying each URL for sentiment signals",
  "Computing your reputation score and letter grade",
];

function freeScanEndpoint() {
  const base = import.meta.env.VITE_FREE_SCAN_API_URL?.replace(/\/$/, "") ?? "";
  return base ? `${base}/api/free-scan` : "/api/free-scan";
}

/**
 * @param {string} raw
 * @returns {{ firstName: string; lastName: string }}
 */
function splitFullName(raw) {
  const t = raw.trim().replace(/\s+/g, " ");
  if (!t) return { firstName: "", lastName: "" };
  const parts = t.split(" ");
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

/**
 * @param {string} letter
 */
function gradeAccent(letter) {
  switch (letter) {
    case "A":
      return {
        bar: "from-emerald-500 via-teal-400 to-sky-400",
        glow: "shadow-emerald-500/25",
        chip: "bg-emerald-500/15 text-emerald-900 ring-emerald-500/25",
      };
    case "B":
      return {
        bar: "from-sky-500 via-indigo-400 to-violet-400",
        glow: "shadow-sky-500/20",
        chip: "bg-sky-500/12 text-sky-950 ring-sky-500/25",
      };
    case "C":
      return {
        bar: "from-amber-500 via-orange-400 to-rose-400",
        glow: "shadow-amber-500/25",
        chip: "bg-amber-500/15 text-amber-950 ring-amber-500/30",
      };
    default:
      return {
        bar: "from-rose-600 via-rose-500 to-rose-400",
        glow: "shadow-rose-600/30",
        chip: "bg-rose-500/15 text-rose-950 ring-rose-500/30",
      };
  }
}

/**
 * @param {{ progress: number; stageIndex: number; factIndex: number }} p
 */
function ScanGeneratingScreen({ progress, stageIndex, factIndex }) {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative z-0 mx-auto max-w-lg px-4 py-16 md:py-24">
      <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-8 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-100/80 backdrop-blur-sm sm:p-10">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2E5B88] to-[#1F3B64] text-white shadow-lg">
            <Sparkles className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Live scan in progress</p>
            <h2 className="font-heading text-xl font-bold text-slate-900">Analyzing your search footprint</h2>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between gap-3 text-xs font-semibold text-slate-600">
            <span>Progress</span>
            <span className="tabular-nums text-slate-900">{Math.round(progress)}%</span>
          </div>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200/80">
            <Motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#2E5B88] via-sky-500 to-[#4CAF50]"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(100, progress)}%` }}
              transition={
                reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 120, damping: 22 }
              }
            />
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3">
          <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Current step</p>
          <p className="mt-1 min-h-[2.75rem] text-sm font-semibold leading-snug text-slate-800">
            {SCAN_STAGES[Math.min(SCAN_STAGES.length - 1, stageIndex)]}
          </p>
        </div>

        <div className="relative mt-8 min-h-[5.5rem] overflow-hidden rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50/90 via-white to-indigo-50/40 px-4 py-4 sm:px-5">
          <AnimatePresence mode="wait">
            <Motion.p
              key={factIndex}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.35 }}
              className="text-sm leading-relaxed text-slate-700"
            >
              {SCAN_FACTS[factIndex % SCAN_FACTS.length]}
            </Motion.p>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-start gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2.5 text-xs text-slate-500">
          <Shield className="mt-0.5 h-4 w-4 shrink-0 text-[#2E5B88]" aria-hidden />
          <p>
            We request up to {FREE_SCAN_LINK_LIMIT} ranked URLs from Google (first {FREE_SCAN_GOOGLE_PAGES} pages) for
            the exact name and country context you provided. Typical runtime is 30-90 seconds including quality checks.
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-slate-500">
          <Loader2 className="h-5 w-5 animate-spin text-sky-600" aria-hidden />
          <span className="text-sm font-medium">Securing your results...</span>
        </div>
      </div>
    </div>
  );
}

/**
 * @param {object} p
 * @param {{ rank: number; title: string; link: string; displayLink: string; snippet: string; sentiment: string }} p.item
 */
function ResultLinkCard({ item }) {
  const tone =
    item.sentiment === "negative"
      ? "border-rose-200/90 bg-rose-50/50"
      : item.sentiment === "positive"
        ? "border-emerald-200/90 bg-emerald-50/40"
        : "border-slate-200/90 bg-white";
  const page = item.rank <= 10 ? 1 : item.rank <= 20 ? 2 : 3;

  return (
    <article className={cn("rounded-xl border p-3.5 shadow-sm sm:p-4", tone)}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-500 ring-1 ring-slate-200/80">
          Page {page}, rank {item.rank}
        </span>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-full break-all text-left text-xs font-semibold text-sky-700 underline decoration-sky-600/30 underline-offset-2 hover:text-sky-900 sm:text-sm"
        >
          {item.displayLink || item.link}
        </a>
      </div>
      <h3 className="mt-2 font-heading text-sm font-bold leading-snug text-slate-900 sm:text-base">{item.title}</h3>
      <p className="mt-1.5 line-clamp-4 text-xs leading-relaxed text-slate-600 sm:text-sm">{item.snippet}</p>
    </article>
  );
}

/**
 * @param {{ positive: number; neutral: number; negative: number; total: number }} p
 */
function SentimentDistributionBar({ positive, neutral, negative, total }) {
  const safe = Math.max(1, total);
  const p = (positive / safe) * 100;
  const n = (neutral / safe) * 100;
  const neg = (negative / safe) * 100;
  return (
    <div className="mt-4 space-y-2">
      <div className="flex h-4 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200/80">
        <div className="h-full bg-gradient-to-b from-emerald-400 to-emerald-600" style={{ width: `${p}%` }} title="Positive share" />
        <div className="h-full bg-gradient-to-b from-slate-300 to-slate-500" style={{ width: `${n}%` }} title="Neutral share" />
        <div className="h-full bg-gradient-to-b from-rose-400 to-rose-600" style={{ width: `${neg}%` }} title="Negative share" />
      </div>
      <div className="flex flex-wrap justify-between gap-2 text-[11px] font-semibold text-slate-600">
        <span className="text-emerald-800">Positive {positive}</span>
        <span className="text-slate-700">Neutral {neutral}</span>
        <span className="text-rose-800">Negative {negative}</span>
      </div>
    </div>
  );
}

/**
 * @param {{ hurting: string }} p
 */
function HurtingSummaryBody({ hurting }) {
  const lines = hurting
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  const proseOnly = lines.length === 1 && lines[0].startsWith("We did not flag");
  if (proseOnly) {
    return <p className="text-sm leading-relaxed text-slate-700">{lines[0]}</p>;
  }
  return (
    <ul className="list-none space-y-3.5">
      {lines.map((line, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-700">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500 shadow-[0_0_0_3px_rgba(244,63,94,0.18)]"
            aria-hidden
          />
          <span className="min-w-0 pt-0.5">{line}</span>
        </li>
      ))}
    </ul>
  );
}

export default function FreeRiskScanPage() {
  const baseId = useId().replace(/[^a-z0-9_-]/gi, "x");
  const seo = useLocalizedSeo("freeRiskScan");
  const reduceMotion = useReducedMotion();

  const [phase, setPhase] = useState("form");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("USA");
  const [consentGiven, setConsentGiven] = useState(true);
  const [formError, setFormError] = useState(null);
  const [scanPayload, setScanPayload] = useState(null);
  /** Snapshot for PDF + display after scan (decoupled from form edits). */
  const [scanSubject, setScanSubject] = useState({ firstName: "", lastName: "", email: "" });

  const [genProgress, setGenProgress] = useState(0);
  const [genStage, setGenStage] = useState(0);
  const [genFact, setGenFact] = useState(0);

  const timersRef = useRef(/** @type {ReturnType<typeof setInterval>[]} */ ([]));

  const displayFullName = useMemo(() => fullName.trim().replace(/\s+/g, " "), [fullName]);

  const googleHref = useMemo(() => {
    const q =
      scanSubject.firstName && scanSubject.lastName
        ? `${scanSubject.firstName} ${scanSubject.lastName}`.trim()
        : displayFullName || "your name";
    return `https://www.google.com/search?q=${encodeURIComponent(q)}`;
  }, [scanSubject.firstName, scanSubject.lastName, displayFullName]);

  const clearGenTimers = useCallback(() => {
    for (const t of timersRef.current) clearInterval(t);
    timersRef.current = [];
  }, []);

  useEffect(() => () => clearGenTimers(), [clearGenTimers]);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setFormError(null);

      const nameTrim = displayFullName;
      const { firstName: fn, lastName: ln } = splitFullName(nameTrim);
      const em = email.trim().toLowerCase();

      if (!fn || !ln) {
        setFormError("Please enter your full legal name (first and last name at minimum).");
        return;
      }
      if (!EMAIL_RE.test(em)) {
        setFormError("Please enter a valid email address.");
        return;
      }

      setPhase("generating");
      setGenProgress(0);
      setGenStage(0);
      setGenFact(0);
      clearGenTimers();

      const minEngagementMs = 30_000 + Math.random() * 60_000;
      const started = Date.now();

      const tick = setInterval(() => {
        const elapsed = Date.now() - started;
        const pct = Math.min(92, (elapsed / minEngagementMs) * 92);
        setGenProgress(pct);
        setGenStage(
          Math.min(
            SCAN_STAGES.length - 1,
            Math.floor((elapsed / minEngagementMs) * SCAN_STAGES.length),
          ),
        );
      }, 420);
      const factTimer = setInterval(() => {
        setGenFact((f) => (f + 1) % SCAN_FACTS.length);
      }, 6_800);
      timersRef.current.push(tick, factTimer);

      try {
        const [res] = await Promise.all([
          fetch(freeScanEndpoint(), {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              firstName: fn,
              lastName: ln,
              email: em,
              country,
              consentGiven,
            }),
          }),
          new Promise((resolve) => setTimeout(resolve, minEngagementMs)),
        ]);

        const parsed = await res.json().catch(() => null);

        clearGenTimers();
        setGenProgress(100);
        setGenStage(SCAN_STAGES.length - 1);

        if (res.ok && parsed && parsed.ok !== false && typeof parsed.reportedScore === "number") {
          setScanSubject({ firstName: fn, lastName: ln, email: em });
          setScanPayload(parsed);
          setPhase("results");
          return;
        }

        const code =
          parsed && typeof parsed.code === "string"
            ? parsed.code
            : "";
        if (
          code === "GOOGLE_CSE_NOT_CONFIGURED" ||
          code === "TAVILY_NOT_CONFIGURED" ||
          code === "OPENROUTER_NOT_CONFIGURED"
        ) {
          const fallback = buildOfflineFreeScanPayload({
            firstName: fn,
            lastName: ln,
            email: em,
            country,
            consentGiven,
          });
          setScanSubject({ firstName: fn, lastName: ln, email: em });
          setScanPayload(fallback);
          setPhase("results");
          return;
        }

        const apiMsg =
          parsed && typeof parsed.error === "string" && parsed.error.trim()
            ? parsed.error.trim()
            : `Scan could not complete (${res.status}).`;
        setFormError(apiMsg);
        setPhase("form");
      } catch {
        clearGenTimers();
        const fallback = buildOfflineFreeScanPayload({
          firstName: fn,
          lastName: ln,
          email: em,
          country,
          consentGiven,
        });
        setScanSubject({ firstName: fn, lastName: ln, email: em });
        setScanPayload(fallback);
        setPhase("results");
      }
    },
    [clearGenTimers, consentGiven, country, displayFullName, email],
  );

  const reset = () => {
    setPhase("form");
    setScanPayload(null);
    setFormError(null);
    setGenProgress(0);
    setScanSubject({ firstName: "", lastName: "", email: "" });
    clearGenTimers();
  };

  const onDownloadPdf = useCallback(() => {
    if (!scanPayload) return;
    const { firstName: fn, lastName: ln, email: em } = scanSubject;
    try {
      const bytes = buildReputationScanPdfBytes({
        firstName: fn,
        lastName: ln,
        email: em,
        searchQueryUsed: scanPayload.searchQueryUsed,
        reportedScore: scanPayload.reportedScore,
        presenceLabel: scanPayload.presenceLabel,
        summary: scanPayload.summary,
        hurting: scanPayload.hurting,
        improving: scanPayload.improving,
        positive: scanPayload.positive ?? [],
        neutral: scanPayload.neutral ?? [],
        negative: scanPayload.negative ?? [],
      });
      const safeName =
        `${fn} ${ln}`.replace(/\s+/g, " ").trim() || "Reputation Scan";
      const blob = new Blob([bytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${safeName} Reputation Scan by Reputation360.pdf`;
      a.rel = "noopener";
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    }
  }, [scanPayload, scanSubject]);

  const { pos, neu, neg, rows, counts, totalLinks } = useMemo(() => {
    if (!scanPayload) {
      return {
        pos: [],
        neu: [],
        neg: [],
        rows: [],
        counts: { positive: 0, neutral: 0, negative: 0 },
        totalLinks: 0,
      };
    }
    const p = scanPayload.positive ?? [];
    const n = scanPayload.neutral ?? [];
    const ne = scanPayload.negative ?? [];
    const r = [...ne, ...n, ...p].sort((a, b) => (a.rank ?? 0) - (b.rank ?? 0));
    const c = { positive: p.length, neutral: n.length, negative: ne.length };
    const total =
      typeof scanPayload.totalLinksScanned === "number"
        ? scanPayload.totalLinksScanned
        : c.positive + c.neutral + c.negative;
    return { pos: p, neu: n, neg: ne, rows: r, counts: c, totalLinks: total };
  }, [scanPayload]);

  const reported = scanPayload?.reportedScore ?? 0;
  const letter =
    scanPayload?.letterGrade ?? letterGradeForReportedScore(reported);
  const statusLine =
    scanPayload?.reputationStatus ??
    reputationGradeBundle(reported).label;
  const accent = gradeAccent(letter);

  return (
    <main className="relative flex-1 overflow-x-hidden pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-100" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_120%_70%_at_50%_-18%,rgba(56,189,248,0.18),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_85%_55%_at_100%_12%,rgba(99,102,241,0.12),transparent_52%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/75 via-transparent to-sky-50/20"
        aria-hidden
      />
      <SeoHead title={seo.title} description={seo.description} canonicalPath={seo.path} />

      {phase === "form" ? (
        <div className="relative z-0 mx-auto max-w-xl px-4 pb-20 pt-8 md:pt-14">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2E5B88]/20 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#2E5B88] shadow-sm">
              <Shield className="h-3.5 w-3.5" aria-hidden />
              Google Programmable Search
            </span>
            <h1 className="mt-5 font-heading text-balance text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Free reputation scan
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-sm leading-relaxed text-slate-600 md:text-base">
              We analyze the first {FREE_SCAN_GOOGLE_PAGES} pages of Google-style results for your name and country
              context (up to {FREE_SCAN_LINK_LIMIT} links), classify each URL, and email a polished report card.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-100/90 backdrop-blur-sm sm:p-9"
          >
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-900" htmlFor={`${baseId}-name`}>
                Full name <span className="text-rose-600">*</span>
              </label>
              <input
                id={`${baseId}-name`}
                name="fullName"
                required
                autoComplete="name"
                placeholder="e.g. Jane Smith"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-base text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15"
              />
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                Use the name people search when they look you up. We query Google with this exact string plus your
                country for localized context.
              </p>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-bold text-slate-900" htmlFor={`${baseId}-ct`}>
                Country <span className="text-rose-600">*</span>
              </label>
              <select
                id={`${baseId}-ct`}
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-base text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15"
              >
                {COUNTRIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-bold text-slate-900" htmlFor={`${baseId}-em`}>
                Get your detailed reputation report at:
              </label>
              <input
                id={`${baseId}-em`}
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-base text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15"
              />
              <p className="mt-2 text-xs text-slate-500">
                We will send your PDF summary here when email delivery is enabled on this deployment.
              </p>
            </div>

            <label className="mt-7 flex cursor-pointer gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3 text-sm leading-relaxed text-slate-600">
              <input
                type="checkbox"
                checked={consentGiven}
                onChange={(e) => setConsentGiven(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-navy focus:ring-navy/30"
              />
              <span>
                I agree to receive news, tips, and offers from Reputation360. I can unsubscribe anytime.
              </span>
            </label>

            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              By continuing you agree to our{" "}
              <a href="/terms-of-service" className="font-semibold text-sky-700 underline underline-offset-2">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="font-semibold text-sky-700 underline underline-offset-2">
                Privacy Policy
              </a>
              .
            </p>

            {formError ? (
              <p
                role="alert"
                className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900"
              >
                {formError}
              </p>
            ) : null}

            <button
              type="submit"
              className="ha-pill mt-8 w-full rounded-2xl bg-gradient-to-r from-[#2E5B88] to-[#1F3B64] py-4 text-base font-heading font-bold text-white shadow-lg shadow-[#1F3B64]/25 transition hover:brightness-110"
            >
              Start my free scan
            </button>
          </form>
        </div>
      ) : null}

      {phase === "generating" ? (
        <ScanGeneratingScreen progress={genProgress} stageIndex={genStage} factIndex={genFact} />
      ) : null}

      {phase === "results" && scanPayload ? (
        <section className="relative z-0 mx-auto max-w-6xl px-4 pb-20 pt-6 md:pt-10">
          {scanPayload.offlineDemoScan || scanPayload.dataSource === "dev_offline_serp_fallback" ? (
            <div
              role="status"
              className="mb-6 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50/95 px-4 py-3 text-sm text-amber-950 shadow-sm sm:px-5 sm:py-4"
            >
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden />
              <div>
                <p className="font-bold text-amber-950">Demo mode (no Google API keys)</p>
                <p className="mt-1 leading-relaxed text-amber-900/90">
                  This report uses illustrative links so you can test the UI. Add{" "}
                  <code className="rounded bg-amber-100/80 px-1 py-0.5 text-xs">GOOGLE_CSE_API_KEY</code> and{" "}
                  <code className="rounded bg-amber-100/80 px-1 py-0.5 text-xs">GOOGLE_CSE_CX</code> to{" "}
                  <code className="rounded bg-amber-100/80 px-1 py-0.5 text-xs">.env.local</code>, set{" "}
                  <code className="rounded bg-amber-100/80 px-1 py-0.5 text-xs">FREE_SCAN_RELAXED_CONFIG=0</code>, restart{" "}
                  <code className="rounded bg-amber-100/80 px-1 py-0.5 text-xs">npm run dev</code>, and run the scan again for live Google results.
                </p>
              </div>
            </div>
          ) : null}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Reputation intelligence</p>
              <h1 className="mt-2 font-heading text-3xl font-bold text-slate-900 md:text-4xl">
                Scan results for{" "}
                <span className="bg-gradient-to-r from-[#2E5B88] to-sky-600 bg-clip-text text-transparent">
                  {`${scanSubject.firstName} ${scanSubject.lastName}`.trim()}
                </span>
              </h1>
              {scanPayload.dataSource === "google_live_empty" ? (
                <p className="mt-2 max-w-2xl text-sm text-amber-700 md:text-base">
                  Google returned no organic links for this query.
                </p>
              ) : null}
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <a
                href={googleHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
              >
                <Search className="h-4 w-4" aria-hidden />
                Open Google
                <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
              </a>
              <button
                type="button"
                onClick={onDownloadPdf}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
              >
                <FileDown className="h-4 w-4" aria-hidden />
                Download PDF
              </button>
              <button
                type="button"
                onClick={reset}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                New scan
              </button>
            </div>
          </div>

          {/* Sentiment + grade hero */}
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-2xl ring-1 ring-slate-100/80",
              accent.glow,
            )}
          >
            <div className={cn("absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r", accent.bar)} />
            <div className="grid gap-8 p-6 md:grid-cols-[1fr_280px] md:items-center md:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {totalLinks} links analyzed
                  </span>
                </div>
                <h2 className="mt-4 font-heading text-2xl font-bold text-slate-900 md:text-3xl">{statusLine}</h2>
                <SentimentDistributionBar
                  positive={counts.positive}
                  neutral={counts.neutral}
                  negative={counts.negative}
                  total={Math.max(1, totalLinks)}
                />
              </div>
              <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-100 bg-slate-50/80 px-6 py-8 text-center shadow-inner">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Reputation score</p>
                <Motion.p
                  className="mt-2 font-heading text-7xl font-extrabold leading-none text-slate-900 md:text-8xl"
                  initial={reduceMotion ? false : { scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                  {reported}
                  <span className="text-2xl font-bold text-slate-400">/100</span>
                </Motion.p>
                <p
                  className={cn(
                    "mt-3 rounded-full border px-4 py-2 text-center text-sm font-bold shadow-sm",
                    accent.chip,
                  )}
                >
                  Grade {letter} - {statusLine}
                </p>
                <div className="mt-5 h-3 w-full max-w-[12rem] overflow-hidden rounded-full bg-slate-200/90">
                  <Motion.div
                    className={cn("h-full rounded-full bg-gradient-to-r", accent.bar)}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, reported)}%` }}
                    transition={{ duration: reduceMotion ? 0 : 0.9, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {scanPayload.emailSent ? (
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-900">
              <CheckCircle2 className="h-4 w-4" aria-hidden />
              Report sent to {scanSubject.email}
            </p>
          ) : null}

          {/* Metric strip */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {[
              { label: "Total links", value: totalLinks, className: "text-slate-900" },
              { label: "Positive", value: counts.positive, className: "text-emerald-700" },
              { label: "Neutral", value: counts.neutral, className: "text-slate-700" },
              { label: "Negative", value: counts.negative, className: "text-rose-700" },
              { label: "Letter grade", value: letter, className: "text-[#2E5B88]" },
              { label: "Pages scanned", value: String(scanPayload.googlePagesAnalyzed ?? FREE_SCAN_GOOGLE_PAGES), className: "text-slate-800" },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-slate-200/90 bg-white/95 px-4 py-4 text-center shadow-sm"
              >
                <p className={cn("font-heading text-2xl font-extrabold tabular-nums sm:text-3xl", m.className)}>
                  {m.value}
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Three-column categorized links */}
          <div className="mt-12">
            <h2 className="font-heading text-xl font-bold text-slate-900 md:text-2xl">Full link breakdown</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {[
                {
                  key: "positive",
                  title: "Positive",
                  items: [...pos].sort((a, b) => a.rank - b.rank),
                  icon: CheckCircle2,
                  head: "from-emerald-600 to-teal-600",
                  border: "border-emerald-200/90",
                },
                {
                  key: "neutral",
                  title: "Neutral",
                  items: [...neu].sort((a, b) => a.rank - b.rank),
                  icon: Circle,
                  head: "from-slate-600 to-slate-500",
                  border: "border-slate-200/90",
                },
                {
                  key: "negative",
                  title: "Negative",
                  items: [...neg].sort((a, b) => a.rank - b.rank),
                  icon: AlertTriangle,
                  head: "from-rose-600 to-orange-500",
                  border: "border-rose-200/90",
                },
              ].map((col) => (
                <div
                  key={col.key}
                  className={cn(
                    "flex max-h-[min(70vh,52rem)] flex-col overflow-hidden rounded-3xl border bg-white shadow-lg",
                    col.border,
                  )}
                >
                  <div
                    className={cn(
                      "flex shrink-0 items-center justify-between gap-2 bg-gradient-to-r px-5 py-4 text-white",
                      col.head,
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <col.icon className="h-5 w-5 opacity-95" aria-hidden />
                      <span className="font-heading text-lg font-bold">{col.title}</span>
                    </div>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold tabular-nums">
                      {col.items.length}
                    </span>
                  </div>
                  <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
                    {col.items.length === 0 ? (
                      <p className="rounded-xl border border-dashed border-slate-200 px-3 py-8 text-center text-sm text-slate-500">
                        No URLs in this bucket.
                      </p>
                    ) : (
                      col.items.map((it) => <ResultLinkCard key={`${col.key}-${it.rank}-${it.link}`} item={it} />)
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              {...calendlyNewTabProps}
              className="ha-pill inline-flex min-w-[min(100%,20rem)] items-center justify-center rounded-2xl bg-cta-consult px-8 py-4 text-center text-base font-heading font-bold text-white shadow-lg"
            >
              Book a free consultation
            </a>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-rose-100/90 bg-gradient-to-b from-rose-50/95 to-white shadow-xl ring-1 ring-rose-100/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400" />
              <div className="p-6 sm:p-8">
                <div className="mb-5 flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-700 shadow-inner">
                    <ShieldAlert className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-rose-950">What may be hurting you</h3>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-rose-700/80">
                      Flagged risks in your scan
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-rose-100/80 bg-white/90 py-5 pl-5 pr-4 shadow-inner sm:pl-6">
                  <HurtingSummaryBody hurting={scanPayload.hurting} />
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-emerald-100/90 bg-gradient-to-b from-emerald-50/95 to-white shadow-xl ring-1 ring-emerald-100/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-400" />
              <div className="p-6 sm:p-8">
                <div className="mb-5 flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 shadow-inner">
                    <TrendingUp className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-emerald-950">What can improve</h3>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-emerald-800/80">
                      Practical next steps
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-emerald-100/80 bg-white/90 py-5 pl-5 pr-4 shadow-inner sm:pl-6">
                  <ul className="list-none space-y-3.5">
                    {scanPayload.improving
                      .split("\n")
                      .map((line) => line.trim())
                      .filter(Boolean)
                      .map((line, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.18)]"
                            aria-hidden
                          />
                          <span className="min-w-0 pt-0.5">{line}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SERP order */}
          <div className="mt-14">
            <h2 className="font-heading text-xl font-bold text-slate-900">All results in Google rank order</h2>
            <ul className="mt-5 space-y-3">
              {rows.map((it) => (
                <li key={`all-${it.rank}-${it.link}`}>
                  <ResultLinkCard item={it} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </main>
  );
}
