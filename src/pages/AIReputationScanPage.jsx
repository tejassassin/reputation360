import { useCallback, useId, useState } from "react";
import {
  AlertTriangle,
  ExternalLink,
  Loader2,
  Search,
  Sparkles,
} from "lucide-react";
import { SeoHead } from "../components/SeoHead.jsx";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";
import { cn } from "@/lib/utils";
import { AI_REPUTATION_SCAN_PATH } from "../constants/reputationAgent.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function agentEndpoint() {
  const base = import.meta.env.VITE_REPUTATION_AGENT_API_URL?.replace(/\/$/, "") ?? "";
  return base ? `${base}/api/reputation-agent` : "/api/reputation-agent";
}

function sentimentTone(sentiment) {
  const s = String(sentiment ?? "").toLowerCase();
  if (s === "positive") return "text-emerald-700 bg-emerald-50 border-emerald-200";
  if (s === "negative") return "text-rose-700 bg-rose-50 border-rose-200";
  if (s === "mixed") return "text-amber-800 bg-amber-50 border-amber-200";
  return "text-slate-700 bg-slate-50 border-slate-200";
}

export default function AIReputationScanPage() {
  const consentId = useId();
  const seo = useLocalizedSeo({
    title: "AI Reputation Scan | Reputation360",
    description:
      "AI-powered reputation scan using live web search and page analysis with sentiment summary.",
    path: AI_REPUTATION_SCAN_PATH,
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [phase, setPhase] = useState("form");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const runScan = useCallback(async () => {
    setError("");
    if (!firstName.trim() || !lastName.trim()) {
      setError("First and last name are required.");
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }
    if (!consent) {
      setError("Please confirm consent to run this scan.");
      return;
    }

    setPhase("loading");
    try {
      const res = await fetch(agentEndpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          consentGiven: true,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || `Scan failed (${res.status})`);
      }
      setResult(data);
      setPhase("results");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Scan failed. Try again.");
      setPhase("form");
    }
  }, [consent, email, firstName, lastName]);

  const report = result?.report;

  return (
    <main className="flex-1 bg-[#f4f7fb] pt-28 md:pt-32">
      <SeoHead {...seo} />
      <section className="mx-auto max-w-3xl px-4 pb-20 md:px-6">
        <header className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2E5B88]/25 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#2E5B88]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            AI agent
          </span>
          <h1 className="mt-4 font-heading text-3xl font-bold text-navy md:text-4xl">
            AI reputation scan
          </h1>
          <p className="mt-3 text-base text-slate-600 md:text-lg">
            Our agent searches the web, reads the top results about you, and returns a
            summary with sentiment analysis.
          </p>
        </header>

        {phase === "form" && (
          <form
            className="mt-10 space-y-5 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-lg md:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              runScan();
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                First name
                <input
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 focus:border-[#4CAF50]/60 focus:outline focus:outline-2 focus:outline-[#4CAF50]/30"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Last name
                <input
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 focus:border-[#4CAF50]/60 focus:outline focus:outline-2 focus:outline-[#4CAF50]/30"
                />
              </label>
            </div>
            <label className="block text-sm font-medium text-slate-700">
              Email
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 focus:border-[#4CAF50]/60 focus:outline focus:outline-2 focus:outline-[#4CAF50]/30"
              />
            </label>
            <label
              htmlFor={consentId}
              className="flex cursor-pointer items-start gap-3 text-sm text-slate-600"
            >
              <input
                id={consentId}
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300"
              />
              <span>
                I consent to an automated scan of publicly available web pages about my
                name for a reputation summary. Results are informational, not legal advice.
              </span>
            </label>
            {error ? (
              <p className="flex items-center gap-2 text-sm text-rose-700" role="alert">
                <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden />
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              className="ha-pill flex w-full items-center justify-center gap-2 rounded-xl bg-cta-consult py-3.5 font-heading text-base font-bold text-white shadow-md hover:brightness-95"
            >
              <Search className="h-5 w-5" aria-hidden />
              Run AI scan
            </button>
          </form>
        )}

        {phase === "loading" && (
          <div
            className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-md"
            aria-live="polite"
          >
            <Loader2 className="h-10 w-10 animate-spin text-[#2E5B88]" aria-hidden />
            <p className="font-heading text-lg font-semibold text-navy">
              Agent is researching...
            </p>
            <p className="max-w-md text-sm text-slate-600">
              Searching the web, fetching up to 10 pages, and analyzing sentiment. This
              can take 30-90 seconds.
            </p>
          </div>
        )}

        {phase === "results" && report && (
          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-heading text-xl font-bold text-navy">
                  {result.subject?.fullName}
                </h2>
                <span
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide",
                    sentimentTone(report.overallSentiment),
                  )}
                >
                  {report.overallSentiment}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-500">
                Sentiment score:{" "}
                <span className="font-semibold tabular-nums text-slate-800">
                  {report.sentimentScore}
                </span>
                {" "}
                / 100 · Confidence: {report.confidence}
              </p>
              {report.primarySearchQuery ? (
                <p className="mt-2 text-xs text-slate-500">
                  Searched the web for:{" "}
                  <span className="font-medium text-slate-700">
                    {report.primarySearchQuery}
                  </span>
                  {typeof report.linksReviewed === "number"
                    ? ` · ${report.linksReviewed} links reviewed`
                    : null}
                </p>
              ) : null}
              <p className="mt-6 whitespace-pre-wrap text-[15px] leading-relaxed text-slate-700">
                {report.summary}
              </p>
            </div>

            {(report.risks?.length > 0 || report.positives?.length > 0) && (
              <div className="grid gap-4 md:grid-cols-2">
                {report.positives?.length > 0 && (
                  <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-5">
                    <h3 className="font-heading font-bold text-emerald-900">Positives</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-emerald-950/90">
                      {report.positives.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {report.risks?.length > 0 && (
                  <div className="rounded-2xl border border-rose-200/80 bg-rose-50/50 p-5">
                    <h3 className="font-heading font-bold text-rose-900">Risks</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-rose-950/90">
                      {report.risks.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {report.sources?.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-navy">Sources reviewed</h3>
                <ul className="mt-4 space-y-3">
                  {report.sources.map((s, i) => (
                    <li
                      key={s.url || `${s.title}-${i}`}
                      className="rounded-xl border border-slate-100 bg-slate-50/60 p-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#2E5B88] hover:underline"
                        >
                          {s.title || s.url}
                          <ExternalLink className="ml-1 inline h-3.5 w-3.5" aria-hidden />
                        </a>
                        <span
                          className={cn(
                            "rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase",
                            sentimentTone(s.sentiment),
                          )}
                        >
                          {s.sentiment}
                        </span>
                      </div>
                      {s.note ? (
                        <p className="mt-2 text-sm text-slate-600">{s.note}</p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              type="button"
              onClick={() => {
                setPhase("form");
                setResult(null);
              }}
              className="text-sm font-semibold text-[#2E5B88] hover:underline"
            >
              Run another scan
            </button>
          </div>
        )}
      </section>
    </main>
  );
}