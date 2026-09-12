"use client";

import { useId, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
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
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-[15px] text-charcoal outline-none transition placeholder:text-slate-400 focus:border-green focus:ring-2 focus:ring-green/20";

const labelClass =
  "mb-1.5 block font-heading text-[11px] font-bold uppercase tracking-[0.07em] text-navy";

function HomeContactLeadForm() {
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
    <div className="w-full min-w-0 overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-16px_rgba(0,0,0,0.45)] ring-1 ring-black/5">
      <div className="border-b-2 border-green px-5 pb-4 pt-5 sm:px-6 sm:pb-5 sm:pt-6">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green text-white sm:h-12 sm:w-12">
            <Search className="h-5 w-5" strokeWidth={2.25} aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-heading text-lg font-bold leading-snug text-navy sm:text-xl">
              Free Reputation Analysis
            </p>
            <p className="mt-0.5 font-body text-xs text-steel sm:text-sm">
              Free · Confidential · 2 business hours
            </p>
          </div>
        </div>
      </div>

      {sent ? (
        <div className="px-5 py-10 text-center sm:px-6" role="status">
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
          className="flex min-h-[22.5rem] flex-col px-5 py-5 sm:min-h-[23.5rem] sm:px-6 sm:py-6"
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="min-w-0">
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
                className={fieldClass}
              />
            </div>
            <div className="min-w-0">
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
                className={fieldClass}
              />
            </div>
          </div>

          <div className="mt-3.5">
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
              className={fieldClass}
            />
          </div>

          <div className="mt-3.5">
            <label className={labelClass} htmlFor={`${baseId}-ph`}>
              Phone number <span className="text-red-600">*</span>
            </label>
            <div className="flex min-w-0 gap-2">
              <label className="sr-only" htmlFor={`${baseId}-cc`}>
                Country code
              </label>
              <select
                id={`${baseId}-cc`}
                value={countryIdx}
                onChange={(e) => setCountryIdx(e.target.value)}
                className="w-[5.5rem] shrink-0 rounded-lg border border-slate-200 bg-white px-2 py-3 text-[15px] text-charcoal outline-none focus:border-green focus:ring-2 focus:ring-green/20"
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
                className={`${fieldClass} min-w-0 flex-1`}
              />
            </div>
          </div>

          {error ? (
            <p
              role="alert"
              className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800"
            >
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="ha-pill mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-green py-3.5 font-heading text-base font-bold text-white shadow-[0_8px_22px_-6px_rgba(76,175,80,0.55)] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70 sm:text-lg"
          >
            {submitting ? "Sending..." : "Get My Free Analysis"}
            {!submitting ? <ArrowRight className="h-5 w-5" aria-hidden /> : null}
          </button>
        </form>
      )}
    </div>
  );
}

export default HomeContactLeadForm;
