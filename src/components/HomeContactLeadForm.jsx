"use client";

import { useId, useState } from "react";
import { Search } from "lucide-react";
import { submitContactInquiry } from "../constants/contact.js";
import { internalAnchorProps } from "../lib/internalLinkProps.js";
import { FREE_REPUTATION_SCAN_LABEL } from "../constants/freeRiskScan.js";

const PHONE_COUNTRIES = [
  { code: "+1", label: "US", flag: "🇺🇸" },
  { code: "+44", label: "UK", flag: "🇬🇧" },
  { code: "+1", label: "CA", flag: "🇨🇦", id: "ca" },
  { code: "+61", label: "AU", flag: "🇦🇺" },
  { code: "+91", label: "IN", flag: "🇮🇳" },
  { code: "+", label: "Other", flag: "🌐", id: "other" },
];

const fieldClass =
  "w-full rounded-lg border bg-white px-4 py-3.5 text-base text-charcoal outline-none transition placeholder:text-slate-400 focus:border-green focus:ring-2 focus:ring-green/25";

const labelClass =
  "mb-2 block font-heading text-xs font-bold uppercase tracking-[0.08em] text-navy";

function HomeContactLeadForm({ compact = false }) {
  const baseId = useId().replace(/[^a-zA-Z0-9_-]/g, "x");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryIdx, setCountryIdx] = useState("0");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const country = PHONE_COUNTRIES[Number(countryIdx)] ?? PHONE_COUNTRIES[0];

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const fn = firstName.trim();
    const ln = lastName.trim();
    const em = email.trim();
    const ph = phone.trim();
    if (!fn || !ln || !em || !ph) {
      setError("Please fill in your name, email, and phone number.");
      return;
    }
    setSubmitting(true);
    try {
      const dial = country.code === "+" ? "" : `${country.code} `;
      await submitContactInquiry({
        name: `${fn} ${ln}`,
        from: em,
        subject: "Homepage reputation analysis request",
        message: [
          `Name: ${fn} ${ln}`,
          `Email: ${em}`,
          `Phone: ${dial}${ph}`,
          "",
          "Source: Homepage contact form",
        ].join("\n"),
      });
      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not send your request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-white shadow-[0_24px_56px_-20px_rgba(8,18,36,0.55)] ring-1 ring-navy/10">
      <div
        className={`flex items-start gap-3 border-b border-slate-100 sm:px-7 ${compact ? "px-5 py-4" : "px-6 py-5"}`}
      >
        <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green text-white">
          <Search className="h-5 w-5" strokeWidth={2.25} aria-hidden />
        </span>
        <div>
          <p
            className={`font-heading font-bold text-navy ${compact ? "text-lg leading-snug" : "text-xl leading-snug sm:text-2xl"}`}
          >
            Get a Free Reputation Analysis
          </p>
          <p className="mt-1 font-body text-sm text-steel">
            A specialist responds within 2 business hours
          </p>
        </div>
      </div>

      {sent ? (
        <div className="px-6 py-10 text-center sm:px-8" role="status">
          <p className="font-heading text-lg font-bold text-navy">
            Thanks - we received your request.
          </p>
          <p className="mt-2 font-body text-sm leading-relaxed text-steel">
            A specialist will follow up shortly. You can also start a{" "}
            <a
              href="/free-reputation-scan"
              {...internalAnchorProps("/free-reputation-scan")}
              className="font-semibold text-green underline underline-offset-2"
            >
              {FREE_REPUTATION_SCAN_LABEL}
            </a>{" "}
            while you wait.
          </p>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          className={compact ? "px-5 py-5 sm:px-6 sm:py-5" : "px-6 py-7 sm:px-8 sm:py-8"}
        >
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${compact ? "gap-3" : "gap-4"}`}>
            <div>
              <label className={labelClass} htmlFor={`${baseId}-fn`}>
                First name <span className="text-red-600">*</span>
              </label>
              <input
                id={`${baseId}-fn`}
                name="firstName"
                autoComplete="given-name"
                required
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`${fieldClass} border-slate-200`}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor={`${baseId}-ln`}>
                Last name <span className="text-red-600">*</span>
              </label>
              <input
                id={`${baseId}-ln`}
                name="lastName"
                autoComplete="family-name"
                required
                placeholder="Smith"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`${fieldClass} border-slate-200`}
              />
            </div>
          </div>

          <div className={compact ? "mt-3" : "mt-4"}>
            <label className={labelClass} htmlFor={`${baseId}-em`}>
              Email address <span className="text-red-600">*</span>
            </label>
            <input
              id={`${baseId}-em`}
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${fieldClass} border-slate-200`}
            />
          </div>

          <div className={compact ? "mt-3" : "mt-4"}>
            <label className={labelClass} htmlFor={`${baseId}-ph`}>
              Phone number <span className="text-red-600">*</span>
            </label>
            <div className="flex gap-2">
              <label className="sr-only" htmlFor={`${baseId}-cc`}>
                Country code
              </label>
              <select
                id={`${baseId}-cc`}
                value={countryIdx}
                onChange={(e) => setCountryIdx(e.target.value)}
                className={`${fieldClass} w-[6.75rem] shrink-0 border-slate-200 px-2`}
              >
                {PHONE_COUNTRIES.map((c, i) => (
                  <option key={c.id ?? `${c.label}-${c.code}`} value={String(i)}>
                    {c.flag} {c.code}
                  </option>
                ))}
              </select>
              <input
                id={`${baseId}-ph`}
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="(201) 555-0123"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`${fieldClass} border-slate-200`}
              />
            </div>
          </div>

          {error ? (
            <p
              role="alert"
              className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-800"
            >
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className={`ha-pill w-full rounded-lg bg-green font-heading font-bold text-white shadow-sm transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70 ${compact ? "mt-4 py-3 text-[15px]" : "mt-6 py-4 text-lg"}`}
          >
            {submitting ? "Sending..." : "Get My Free Analysis"}
          </button>

          <p className="mt-3 text-center font-body text-sm font-medium text-navy">
            No obligation consultation · 100% confidential
          </p>

          <p className="mt-3 text-center font-body text-xs leading-relaxed text-steel">
            By submitting you agree to our{" "}
            <a
              href="/terms-of-service"
              {...internalAnchorProps("/terms-of-service")}
              className="font-semibold text-green underline underline-offset-2"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy-policy"
              {...internalAnchorProps("/privacy-policy")}
              className="font-semibold text-green underline underline-offset-2"
            >
              Privacy Policy
            </a>
            .
          </p>
        </form>
      )}
    </div>
  );
}

export default HomeContactLeadForm;
