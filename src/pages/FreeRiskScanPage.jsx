import { useCallback, useId, useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Circle,
  ExternalLink,
  FileDown,
  Loader2,
  Search,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";
import { SeoHead } from "../components/SeoHead.jsx";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";
import { calendlyNewTabProps } from "../constants/scheduling";
import { cn } from "@/lib/utils";
import { buildOfflineFreeScanPayload } from "@/lib/freeScanClientFallback.js";
import { buildReputationScanPdfBytes } from "@scan/freeScanPdfBuild.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const COUNTRIES = [
  { value: "US", label: "US" },
  { value: "UK", label: "UK" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "Others", label: "Others" },
];

function freeScanEndpoint() {
  const base = import.meta.env.VITE_FREE_SCAN_API_URL?.replace(/\/$/, "") ?? "";
  return base ? `${base}/api/free-scan` : "/api/free-scan";
}

/**
 * @param {number} s
 */
function letterForReportedScore(s) {
  if (s >= 72) return "A";
  if (s >= 60) return "B";
  if (s >= 48) return "C";
  if (s >= 36) return "D";
  return "F";
}

/**
 * @param {{ linkCount: number; counts: { positive: number; neutral: number; negative: number }; reported: number; presenceLabel: string }} p
 */
function ScanSummaryBanner({ linkCount, counts, reported, presenceLabel }) {
  return (
    <div className="mt-4 w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md ring-1 ring-slate-100/80">
      <div className="border-b border-slate-100 bg-gradient-to-r from-sky-50/90 via-white to-indigo-50/50 px-5 py-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[15px] font-medium leading-snug text-slate-800 sm:text-base">
            We reviewed the first three pages of search results for your name.
          </p>
          <span className="inline-flex w-fit shrink-0 items-center rounded-full bg-navy px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
            {linkCount} links analyzed
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 divide-x divide-slate-100 bg-slate-50/40">
        <div
          title="Positive-tagged results in this scan"
          className={cn(
            "cursor-default select-none px-2 py-4 text-center transition-[background-color,box-shadow,transform] duration-200 ease-out",
            "hover:bg-emerald-100/70 hover:shadow-sm hover:-translate-y-px sm:px-4",
          )}
        >
          <p className="font-heading text-2xl font-bold tabular-nums text-emerald-700 sm:text-3xl">{counts.positive}</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-emerald-800/80 sm:text-xs">Positive</p>
        </div>
        <div
          title="Neutral-tagged results in this scan"
          className={cn(
            "cursor-default select-none px-2 py-4 text-center transition-[background-color,box-shadow,transform] duration-200 ease-out",
            "hover:bg-slate-200/60 hover:shadow-sm hover:-translate-y-px sm:px-4",
          )}
        >
          <p className="font-heading text-2xl font-bold tabular-nums text-slate-700 sm:text-3xl">{counts.neutral}</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 sm:text-xs">Neutral</p>
        </div>
        <div
          title="Negative-tagged results in this scan"
          className={cn(
            "cursor-default select-none px-2 py-4 text-center transition-[background-color,box-shadow,transform] duration-200 ease-out",
            "hover:bg-rose-100/70 hover:shadow-sm hover:-translate-y-px sm:px-4",
          )}
        >
          <p className="font-heading text-2xl font-bold tabular-nums text-rose-700 sm:text-3xl">{counts.negative}</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-rose-800/80 sm:text-xs">Negative</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 border-t border-slate-100 bg-white px-5 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-6">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Reputation score</p>
          <p className="mt-1 font-heading text-3xl font-bold tabular-nums text-slate-900">
            {reported}
            <span className="text-lg font-semibold text-slate-500">/100</span>
          </p>
        </div>
        <div className="shrink-0 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 sm:min-w-[12rem] sm:text-right">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Overall presence</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{presenceLabel}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * @param {object} p
 * @param {{ rank: number; title: string; link: string; displayLink: string; snippet: string; sentiment: string }} p.item
 * @param {number} p.rank
 * @param {number} p.total
 */
function ResultRow({ item, rank, total }) {
  const tone =
    item.sentiment === "negative"
      ? "border-rose-200/80 bg-rose-50/40"
      : item.sentiment === "positive"
        ? "border-emerald-200/80 bg-emerald-50/35"
        : "border-slate-200/90 bg-white";

  return (
    <article className={cn("rounded-2xl border p-4 shadow-sm sm:p-5", tone)}>
      <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all text-left text-sm font-semibold text-sky-700 underline decoration-sky-700/30 underline-offset-2 hover:text-sky-900"
        >
          {item.displayLink || item.link}
        </a>
        <span className="shrink-0 rounded-full bg-white/80 px-2 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200/80">
          Rank {rank} of {total}
        </span>
      </div>
      <h3 className="font-heading text-base font-bold text-slate-900 sm:text-lg">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.snippet}</p>
      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-500">
        Model tag:{" "}
        <span className="text-slate-800 capitalize">{item.sentiment}</span>
      </p>
    </article>
  );
}

export default function FreeRiskScanPage() {
  const baseId = useId().replace(/[^a-z0-9_-]/gi, "x");
  const seo = useLocalizedSeo("freeRiskScan");

  const [phase, setPhase] = useState("form");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("US");
  const [consentGiven, setConsentGiven] = useState(true);
  const [formError, setFormError] = useState(null);
  const [scanPayload, setScanPayload] = useState(null);
  const [filter, setFilter] = useState("negative");

  const fullName = useMemo(
    () => `${firstName.trim()} ${lastName.trim()}`.trim(),
    [firstName, lastName],
  );

  const googleHref = useMemo(() => {
    const q = fullName || "your name";
    return `https://www.google.com/search?q=${encodeURIComponent(q)}`;
  }, [fullName]);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setFormError(null);

      const fn = firstName.trim();
      const ln = lastName.trim();
      const em = email.trim().toLowerCase();

      if (!fn || !ln) {
        setFormError("Please enter your first and last name.");
        return;
      }
      if (!EMAIL_RE.test(em)) {
        setFormError("Please enter a valid email address.");
        return;
      }

      setPhase("generating");

      try {
        const res = await fetch(freeScanEndpoint(), {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            firstName: fn,
            lastName: ln,
            email: em,
            country,
            consentGiven,
          }),
        });

        const parsed = await res.json().catch(() => null);

        let data = null;
        if (res.ok && parsed && parsed.ok !== false && typeof parsed.reportedScore === "number") {
          data = parsed;
        } else {
          data = buildOfflineFreeScanPayload({
            firstName: fn,
            lastName: ln,
            email: em,
            country,
            consentGiven,
          });
        }

        setFilter("negative");
        setScanPayload(data);
        setPhase("results");
      } catch {
        const data = buildOfflineFreeScanPayload({
          firstName: fn,
          lastName: ln,
          email: em,
          country,
          consentGiven,
        });
        setFilter("negative");
        setScanPayload(data);
        setPhase("results");
      }
    },
    [firstName, lastName, email, country, consentGiven],
  );

  const reset = () => {
    setPhase("form");
    setScanPayload(null);
    setFormError(null);
    setFilter("negative");
  };

  const onDownloadPdf = useCallback(() => {
    if (!scanPayload) return;
    try {
      const bytes = buildReputationScanPdfBytes({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim().toLowerCase(),
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
      const safe =
        `${firstName.trim()}-${lastName.trim()}`.replace(/[^\w.-]+/g, "-").replace(/^-+|-+$/g, "") || "scan";
      const blob = new Blob([bytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `reputation360-scan-${safe}.pdf`;
      a.rel = "noopener";
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    }
  }, [scanPayload, firstName, lastName, email]);

  const filterLinkClass = (key, active) =>
    cn(
      "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition",
      active ? "bg-slate-100 font-semibold text-slate-900" : "text-slate-700 hover:bg-slate-50",
    );

  const rows = useMemo(() => {
    if (!scanPayload) return [];
    const all = [
      ...(scanPayload.negative ?? []),
      ...(scanPayload.neutral ?? []),
      ...(scanPayload.positive ?? []),
    ];
    return all.sort((a, b) => (a.rank ?? 0) - (b.rank ?? 0));
  }, [scanPayload]);

  const counts = useMemo(() => {
    return {
      negative: scanPayload?.negative?.length ?? 0,
      neutral: scanPayload?.neutral?.length ?? 0,
      positive: scanPayload?.positive?.length ?? 0,
    };
  }, [scanPayload]);

  const filtered = useMemo(() => {
    if (filter === "all") return rows;
    return rows.filter((r) => r.sentiment === filter);
  }, [rows, filter]);

  const reported = scanPayload?.reportedScore ?? 0;
  const letter = letterForReportedScore(reported);

  return (
    <main className="relative flex-1 overflow-x-hidden pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-100" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_120%_70%_at_50%_-18%,rgba(56,189,248,0.2),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_85%_55%_at_100%_15%,rgba(99,102,241,0.14),transparent_52%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-transparent to-sky-50/25"
        aria-hidden
      />
      <SeoHead title={seo.title} description={seo.description} canonicalPath={seo.path} />

      {phase === "form" ? (
        <div className="relative z-0 mx-auto max-w-lg px-4 pb-16 pt-8 md:pt-12">
          <div className="mb-8 text-center">
            <h1 className="font-heading text-balance text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Free Google reputation scan
            </h1>
            <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-slate-600 md:text-base">
              We analyze the first three pages of results for your name, score what we find, and email you a reputation
              report card.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-lg shadow-slate-200/50 backdrop-blur-sm sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-semibold text-slate-800" htmlFor={`${baseId}-fn`}>
                  First name <span className="text-rose-600">*</span>
                </label>
                <input
                  id={`${baseId}-fn`}
                  name="firstName"
                  required
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-base text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-semibold text-slate-800" htmlFor={`${baseId}-ln`}>
                  Last name <span className="text-rose-600">*</span>
                </label>
                <input
                  id={`${baseId}-ln`}
                  name="lastName"
                  required
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-base text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-semibold text-slate-800" htmlFor={`${baseId}-em`}>
                Email address <span className="text-rose-600">*</span>
              </label>
              <input
                id={`${baseId}-em`}
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-base text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              />
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-semibold text-slate-800" htmlFor={`${baseId}-ct`}>
                Country <span className="text-rose-600">*</span>
              </label>
              <select
                id={`${baseId}-ct`}
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-base text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              >
                {COUNTRIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            <label className="mt-5 flex cursor-pointer gap-3 text-sm leading-relaxed text-slate-600">
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
              <a href="/terms-of-service" className="font-medium text-sky-700 underline underline-offset-2">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="font-medium text-sky-700 underline underline-offset-2">
                Privacy Policy
              </a>
              .
            </p>

            {formError ? (
              <p
                role="alert"
                className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900"
              >
                {formError}
              </p>
            ) : null}

            <button
              type="submit"
              className="ha-pill mt-6 w-full rounded-xl bg-navy py-3.5 text-base font-heading font-bold text-white shadow-md transition hover:brightness-110"
            >
              Run my free scan
            </button>
          </form>
        </div>
      ) : null}

      {phase === "generating" ? (
        <div className="relative z-0 mx-auto max-w-md px-4 py-24 text-center md:py-32">
          <Loader2 className="mx-auto h-10 w-10 animate-spin text-sky-600" aria-hidden />
          <p className="mt-6 font-heading text-xl font-bold text-slate-900">Your report is being generated...</p>
          <p className="mt-2 text-sm text-slate-600">
            We are querying Google results, scoring what we find, saving your scan, and sending your report card
            to your inbox.
          </p>
        </div>
      ) : null}

      {phase === "results" && scanPayload ? (
        <section className="relative z-0 mx-auto max-w-6xl px-4 pb-16 pt-6 md:pt-10">
          <div className="mb-6 space-y-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
              <h1 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl">
                Your reputation report
              </h1>
              <div className="flex shrink-0 flex-wrap gap-2 md:pt-1">
                <a
                  href={googleHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
                >
                  <Search className="h-4 w-4" aria-hidden />
                  Open Google
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
                </a>
                <button
                  type="button"
                  onClick={onDownloadPdf}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
                >
                  <FileDown className="h-4 w-4" aria-hidden />
                  Download PDF
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  New scan
                </button>
              </div>
            </div>
            <ScanSummaryBanner
              linkCount={rows.length}
              counts={counts}
              reported={reported}
              presenceLabel={scanPayload.presenceLabel}
            />
            {scanPayload.emailSent ? (
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                Report sent to {email.trim().toLowerCase()}
              </p>
            ) : null}
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,260px)_1fr]">
            <aside className="space-y-5 lg:sticky lg:top-32 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Reputation score</p>
                <p className="mt-2 font-heading text-6xl font-extrabold leading-none text-lime-600">{letter}</p>
                <p className="mt-2 text-2xl font-bold tabular-nums text-slate-900">
                  {reported}
                  <span className="text-base font-semibold text-slate-500">/100</span>
                </p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-lime-500 transition-all"
                    style={{ width: `${Math.min(100, (reported / 100) * 100)}%` }}
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-800">{scanPayload.presenceLabel}</p>
              </div>

              <nav className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm" aria-label="Filter results">
                <button
                  type="button"
                  className={filterLinkClass("negative", filter === "negative")}
                  onClick={() => setFilter("negative")}
                >
                  <span className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-rose-600" aria-hidden />
                    Negative
                  </span>
                  <span className="tabular-nums text-slate-500">{counts.negative}</span>
                </button>
                <button
                  type="button"
                  className={filterLinkClass("neutral", filter === "neutral")}
                  onClick={() => setFilter("neutral")}
                >
                  <span className="flex items-center gap-2">
                    <Circle className="h-4 w-4 fill-amber-400 text-amber-500" aria-hidden />
                    Neutral
                  </span>
                  <span className="tabular-nums text-slate-500">{counts.neutral}</span>
                </button>
                <button
                  type="button"
                  className={filterLinkClass("positive", filter === "positive")}
                  onClick={() => setFilter("positive")}
                >
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden />
                    Positive
                  </span>
                  <span className="tabular-nums text-slate-500">{counts.positive}</span>
                </button>
                <button
                  type="button"
                  className={filterLinkClass("all", filter === "all")}
                  onClick={() => setFilter("all")}
                >
                  <span className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-slate-500" aria-hidden />
                    All
                  </span>
                  <span className="tabular-nums text-slate-500">{rows.length}</span>
                </button>
              </nav>

              <a
                {...calendlyNewTabProps}
                className="ha-pill flex w-full items-center justify-center rounded-xl bg-cta-consult py-3 text-center text-sm font-heading font-bold text-white shadow-md"
              >
                Book a free consultation
              </a>
            </aside>

            <div>
              <h2 className="font-heading text-lg font-bold capitalize text-slate-900">
                {filter === "all" ? "All analyzed results" : `${filter} results`}
              </h2>
              <ul className="mt-5 space-y-4">
                {filtered.length === 0 ? (
                  <li className="rounded-2xl border border-dashed border-slate-200 bg-white px-5 py-10 text-center text-sm text-slate-600">
                    No results in this filter.
                  </li>
                ) : (
                  filtered.map((it) => (
                    <li key={`${it.rank}-${it.link}`}>
                      <ResultRow item={it} rank={it.rank} total={rows.length} />
                    </li>
                  ))
                )}
              </ul>

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                <div className="relative overflow-hidden rounded-2xl border border-rose-100/90 bg-gradient-to-b from-rose-50/95 to-white shadow-lg shadow-rose-900/5 ring-1 ring-rose-100/60">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400" />
                  <div className="p-6 sm:p-7">
                    <div className="mb-5 flex items-start gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-700 shadow-inner shadow-rose-200/50">
                        <ShieldAlert className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-rose-950">What may be hurting you</h3>
                        <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-rose-700/80">
                          Flagged risks in your scan
                        </p>
                      </div>
                    </div>
                    <div className="rounded-xl border border-rose-100/80 bg-white/70 py-4 pl-5 pr-4 shadow-sm">
                      <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700">{scanPayload.hurting}</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-emerald-100/90 bg-gradient-to-b from-emerald-50/95 to-white shadow-lg shadow-emerald-900/5 ring-1 ring-emerald-100/60">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-400" />
                  <div className="p-6 sm:p-7">
                    <div className="mb-5 flex items-start gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 shadow-inner shadow-emerald-200/50">
                        <TrendingUp className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-emerald-950">What can improve</h3>
                        <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-emerald-800/80">
                          Clear steps you can take next
                        </p>
                      </div>
                    </div>
                    <div className="rounded-xl border border-emerald-100/80 bg-white/70 py-4 pl-5 pr-4 shadow-sm">
                      <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700">
                        {scanPayload.improving}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
