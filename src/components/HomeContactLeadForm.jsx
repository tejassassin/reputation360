"use client";

import { useId, useRef, useState } from "react";
import {
  ArrowRight,
  Calendar,
  Check,
  ClipboardCheck,
  Route,
  Search,
} from "lucide-react";
import { submitContactInquiry } from "../constants/contact.js";
import { internalAnchorProps } from "../lib/internalLinkProps.js";
import {
  FREE_CONSULTATION_HEADING_ID,
  FREE_CONSULTATION_ID,
  HOME_CLOSING_LEAD_HEADING_ID,
  HOME_CLOSING_LEAD_ID,
  ABOUT_HERO_CONSULTATION_HEADING_ID,
  ABOUT_HERO_CONSULTATION_ID,
  ABOUT_BOTTOM_CONSULTATION_HEADING_ID,
  ABOUT_BOTTOM_CONSULTATION_ID,
  CONTACT_HERO_CONSULTATION_HEADING_ID,
  CONTACT_HERO_CONSULTATION_ID,
} from "../constants/homeConsultation.js";
import { trackHomeLeadFormSubmit } from "../lib/conversionAnalytics.js";
import { validateConsultationLead } from "../lib/consultationLeadValidation.js";
import { R360_CTA_CONSULTATION_SOLID } from "../lib/ctaVariants.js";

const FIELD_ORDER = ["firstName", "lastName", "email", "phone", "message"];

const PHONE_COUNTRIES = [
  { code: "+1", label: "US", flag: "🇺🇸" },
  { code: "+44", label: "UK", flag: "🇬🇧" },
  { code: "+1", label: "CA", flag: "🇨🇦", id: "ca" },
  { code: "+61", label: "AU", flag: "🇦🇺" },
  { code: "+91", label: "IN", flag: "🇮🇳" },
  { code: "+", label: "Other", flag: "🌐", id: "other" },
];

const fieldClass = "r360-form-field w-full min-w-0";

const phoneCountryClass =
  "r360-form-field r360-form-field-select r360-phone-country w-[5.75rem] shrink-0";

const phoneInputClass = "r360-form-field r360-phone-input min-w-0 flex-1";

const labelClass =
  "mb-2 block font-heading text-[11px] font-bold uppercase tracking-[0.07em] text-navy";

/**
 * @param {object} props
 * @param {"hero" | "home_closing" | "about-hero" | "about-bottom" | "contact-hero"} [props.instance]
 * @param {boolean} [props.showHeader]
 * @param {string} [props.submitLabel]
 * @param {boolean} [props.showBenefitsFooter]
 */
function HomeContactLeadForm({
  instance = "hero",
  showHeader = true,
  submitLabel,
  showBenefitsFooter = true,
}) {
  const reactGeneratedBaseId = useId().replace(/[^a-zA-Z0-9_-]/g, "x");
  const stableBaseIdByInstance = {
    home_closing: "r360-home-closing-lead",
    "about-hero": "r360-about-hero-lead",
    "about-bottom": "r360-about-bottom-lead",
    "contact-hero": "r360-contact-hero-lead",
  };
  const baseId = stableBaseIdByInstance[instance] ?? reactGeneratedBaseId;
  const successRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const submitLockRef = useRef(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryIdx, setCountryIdx] = useState("0");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState(
    /** @type {Partial<Record<string, string>>} */ ({}),
  );
  const [sent, setSent] = useState(false);

  const isClosing = instance === "home_closing";
  const isAboutHero = instance === "about-hero";
  const isAboutBottom = instance === "about-bottom";
  const isContactHero = instance === "contact-hero";
  const phoneCountryClassName = isClosing
    ? "r360-form-field r360-form-field-select r360-phone-country r360-phone-country--closing shrink-0"
    : phoneCountryClass;
  const wrapperId = isClosing
    ? HOME_CLOSING_LEAD_ID
    : isAboutHero
      ? ABOUT_HERO_CONSULTATION_ID
      : isAboutBottom
        ? ABOUT_BOTTOM_CONSULTATION_ID
        : isContactHero
          ? CONTACT_HERO_CONSULTATION_ID
          : FREE_CONSULTATION_ID;
  const headerHeadingId = isClosing
    ? HOME_CLOSING_LEAD_HEADING_ID
    : isAboutHero
      ? ABOUT_HERO_CONSULTATION_HEADING_ID
      : isAboutBottom
        ? ABOUT_BOTTOM_CONSULTATION_HEADING_ID
        : isContactHero
          ? CONTACT_HERO_CONSULTATION_HEADING_ID
          : FREE_CONSULTATION_HEADING_ID;
  const statusHeadingId = isClosing
    ? `${HOME_CLOSING_LEAD_ID}-status`
    : isAboutHero
      ? `${ABOUT_HERO_CONSULTATION_ID}-status`
      : isAboutBottom
        ? `${ABOUT_BOTTOM_CONSULTATION_ID}-status`
        : isContactHero
          ? `${CONTACT_HERO_CONSULTATION_ID}-status`
          : FREE_CONSULTATION_HEADING_ID;
  const formId = `${baseId}-lead-form`;
  const buttonLabel =
    submitLabel ?? "Request My Free Consultation";
  const formHeaderSubline = "Free · Confidential · 15 minutes";
  const inquirySubject = "Free Consultation Request";
  const sourceLine = isClosing
    ? "Source: Homepage lower consultation form (homepage_lower_consultation)"
    : isAboutHero
      ? "Source: About page hero consultation form (about-page-hero)"
      : isAboutBottom
        ? "Source: About page bottom consultation form (about-page-bottom)"
        : isContactHero
          ? "Source: Contact page hero consultation form (contact-page-hero)"
          : "Source: Homepage contact form";

  const country = PHONE_COUNTRIES[Number(countryIdx)] ?? PHONE_COUNTRIES[0];

  const fieldRefMap = {
    firstName: firstNameRef,
    lastName: lastNameRef,
    email: emailRef,
    phone: phoneRef,
    message: messageRef,
  };

  function clearFieldError(field) {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function focusFirstInvalid(errors) {
    for (const field of FIELD_ORDER) {
      if (errors[field]) {
        fieldRefMap[field]?.current?.focus();
        break;
      }
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (submitLockRef.current || submitting) return;

    setError("");
    const validation = validateConsultationLead(
      {
        firstName,
        lastName,
        email,
        phone,
        message,
      },
      { countryCode: country.code },
    );

    if (!validation.ok) {
      setFieldErrors(validation.errors);
      focusFirstInvalid(validation.errors);
      return;
    }

    setFieldErrors({});
    submitLockRef.current = true;
    setSubmitting(true);
    try {
      const { data } = validation;
      await submitContactInquiry({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        countryCode: country.code,
        phone,
        message: data.message,
        subject: inquirySubject,
        sourceLine,
      });
      trackHomeLeadFormSubmit(instance);
      setSent(true);
      requestAnimationFrame(() => {
        successRef.current?.focus({ preventScroll: true });
      });
    } catch (err) {
      const fieldErrs =
        err &&
        typeof err === "object" &&
        "fieldErrors" in err &&
        err.fieldErrors &&
        typeof err.fieldErrors === "object"
          ? /** @type {Partial<Record<string, string>>} */ (err.fieldErrors)
          : null;
      if (fieldErrs) {
        setFieldErrors(fieldErrs);
        focusFirstInvalid(fieldErrs);
        setError("");
      } else {
        setError(
          err instanceof Error
            ? err.message
            : "Could not send your request. Please try again.",
        );
      }
    } finally {
      setSubmitting(false);
      submitLockRef.current = false;
    }
  }

  function renderFieldError(fieldKey, errorId) {
    const msg = fieldErrors[fieldKey];
    if (!msg) return null;
    return (
      <p id={errorId} className="r360-form-field-error mb-0 font-body" role="alert">
        {msg}
      </p>
    );
  }

  return (
    <div
      id={wrapperId}
      className={`r360-hero-lead-form min-w-0 bg-white ${isClosing ? "r360-home-closing-lead-form r360-home-closing-lead-form--compact overflow-hidden" : "overflow-hidden"} ${sent ? "r360-hero-lead-form--submitted" : ""}`}
    >
      {sent ? (
        <div
          className={`successState${isClosing ? " successState--closing" : ""}`}
          role="status"
          aria-live="polite"
        >
          <div className="successIcon" aria-hidden="true">
            <span className="successIconRing" aria-hidden="true" />
            <span className="successIconCore">
              <Check strokeWidth={2.5} aria-hidden="true" />
            </span>
          </div>
          <h2
            ref={successRef}
            id={statusHeadingId}
            tabIndex={-1}
            className="r360-form-header-title mb-0 font-heading font-bold outline-none"
          >
            Thank You for Reaching Out
          </h2>
          <p className="mb-0 font-body">
            We&apos;ve received your consultation request. A Reputation360 specialist will review
            your details and contact you shortly.
          </p>
          <p className="secondaryText mb-0 font-body">
            While you wait, you can also request a free analysis of your current Google search
            results.
          </p>
          <a
            href="/free-reputation-scan"
            {...internalAnchorProps("/free-reputation-scan")}
            className="scanButton ha-pill font-heading font-semibold"
          >
            Start Your Free Reputation Scan
          </a>
        </div>
      ) : (
        <>
      {showHeader ? (
        <div className="r360-form-header-wrap">
          <div className="flex items-start gap-3.5 sm:gap-4">
            <span className="r360-form-icon shrink-0" aria-hidden="true">
              <span className="r360-form-icon-pulse" aria-hidden="true"></span>
              <span className="r360-form-icon-core">
                <Calendar strokeWidth={2.3} />
              </span>
            </span>
            <div className="min-w-0 flex-1">
              <p
                id={headerHeadingId}
                tabIndex={-1}
                className="r360-form-header-title font-heading font-bold text-navy outline-none"
              >
                Get a Free Consultation
              </p>
              <p className="r360-form-header-sub mt-1 font-body text-steel">
                {formHeaderSubline}
              </p>
            </div>
          </div>
          <hr className="r360-form-header-divider" />
        </div>
      ) : null}

        <form
          id={formId}
          onSubmit={onSubmit}
          className={`r360-form-body flex flex-col ${isClosing ? "r360-form-body--closing" : ""}`}
          noValidate
        >
          <div
            className={`r360-form-field-grid grid ${isClosing ? "grid-cols-1 md:grid-cols-2" : "grid-cols-2"}`}
          >
            <div className="min-w-0">
              <label className={labelClass} htmlFor={`${baseId}-fn`}>
                First name <span className="text-red-600">*</span>
              </label>
              <input
                id={`${baseId}-fn`}
                ref={firstNameRef}
                name="firstName"
                autoComplete="given-name"
                required
                maxLength={50}
                placeholder="Michael"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  clearFieldError("firstName");
                }}
                className={fieldClass}
                aria-invalid={fieldErrors.firstName ? "true" : undefined}
                aria-describedby={
                  fieldErrors.firstName ? `${baseId}-fn-error` : undefined
                }
              />
              {renderFieldError("firstName", `${baseId}-fn-error`)}
            </div>
            <div className="min-w-0">
              <label className={labelClass} htmlFor={`${baseId}-ln`}>
                Last name <span className="text-red-600">*</span>
              </label>
              <input
                id={`${baseId}-ln`}
                ref={lastNameRef}
                name="lastName"
                autoComplete="family-name"
                required
                maxLength={50}
                placeholder="Carter"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  clearFieldError("lastName");
                }}
                className={fieldClass}
                aria-invalid={fieldErrors.lastName ? "true" : undefined}
                aria-describedby={
                  fieldErrors.lastName ? `${baseId}-ln-error` : undefined
                }
              />
              {renderFieldError("lastName", `${baseId}-ln-error`)}
            </div>
          </div>

          <div className="r360-form-field-group">
            <label className={labelClass} htmlFor={`${baseId}-em`}>
              Email address <span className="text-red-600">*</span>
            </label>
            <input
              id={`${baseId}-em`}
              ref={emailRef}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="michael.carter@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearFieldError("email");
              }}
              className={fieldClass}
              aria-invalid={fieldErrors.email ? "true" : undefined}
              aria-describedby={fieldErrors.email ? `${baseId}-em-error` : undefined}
            />
            {renderFieldError("email", `${baseId}-em-error`)}
          </div>

          <div className="r360-form-field-group">
            <label className={labelClass} htmlFor={`${baseId}-ph`}>
              Phone number <span className="text-red-600">*</span>
            </label>
            <div className="r360-phone-group flex min-w-0 gap-2">
              <label className="sr-only" htmlFor={`${baseId}-cc`}>
                Country code
              </label>
              <select
                id={`${baseId}-cc`}
                value={countryIdx}
                onChange={(e) => setCountryIdx(e.target.value)}
                className={phoneCountryClassName}
              >
                {PHONE_COUNTRIES.map((c, i) => (
                  <option key={c.id ?? `${c.label}-${c.code}`} value={String(i)}>
                    {c.flag} {c.code}
                  </option>
                ))}
              </select>
              <input
                id={`${baseId}-ph`}
                ref={phoneRef}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel-national"
                required
                maxLength={24}
                placeholder="(212) 555-0147"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  clearFieldError("phone");
                }}
                className={phoneInputClass}
                aria-invalid={fieldErrors.phone ? "true" : undefined}
                aria-describedby={fieldErrors.phone ? `${baseId}-ph-error` : undefined}
              />
            </div>
            {renderFieldError("phone", `${baseId}-ph-error`)}
          </div>

          {isClosing ? (
            <div className="r360-form-field-group">
              <label className={labelClass} htmlFor={`${baseId}-msg`}>
                Message <span className="text-[#64748b]">(optional)</span>
              </label>
              <textarea
                id={`${baseId}-msg`}
                ref={messageRef}
                name="message"
                rows={3}
                maxLength={4000}
                placeholder="Tell us briefly about your situation."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  clearFieldError("message");
                }}
                className="r360-form-field r360-form-textarea r360-form-textarea--closing-compact w-full min-w-0 resize-y"
                aria-invalid={fieldErrors.message ? "true" : undefined}
                aria-describedby={
                  fieldErrors.message ? `${baseId}-msg-error` : undefined
                }
              />
              {renderFieldError("message", `${baseId}-msg-error`)}
            </div>
          ) : isAboutBottom ? null : (
            <div className="r360-form-field-group">
              <label className={labelClass} htmlFor={`${baseId}-msg`}>
                Message <span className="text-[#64748b]">(optional)</span>
              </label>
              <textarea
                id={`${baseId}-msg`}
                ref={messageRef}
                name="message"
                rows={3}
                maxLength={4000}
                placeholder="Tell us briefly about your situation."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  clearFieldError("message");
                }}
                className="r360-form-field r360-form-textarea r360-form-textarea--hero w-full min-w-0"
                aria-invalid={fieldErrors.message ? "true" : undefined}
                aria-describedby={
                  fieldErrors.message ? `${baseId}-msg-error` : undefined
                }
              />
              {renderFieldError("message", `${baseId}-msg-error`)}
            </div>
          )}

          {error ? (
            <p
              role="alert"
              className="r360-form-field-group rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-800"
            >
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className={`r360-form-submit ${R360_CTA_CONSULTATION_SOLID} ha-pill r360-form-field-group mt-0 flex w-full items-center justify-center gap-2.5 font-heading font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-70 ${isClosing ? "r360-form-submit--closing" : ""}`}
          >
            {submitting ? "Sending..." : buttonLabel}
            {!submitting ? (
              <ArrowRight
                className={`shrink-0 text-white ${isClosing ? "h-[1.375rem] w-[1.375rem]" : "h-5 w-5"}`}
                aria-hidden
              />
            ) : null}
          </button>

          {isClosing ? (
            <p className="r360-form-consent r360-form-field-group mb-0 text-center font-body text-xs leading-relaxed text-slate-500 sm:text-[0.8125rem]">
              By submitting this form, you agree to our{" "}
              <a
                href="/terms-of-service"
                {...internalAnchorProps("/terms-of-service")}
                className="font-medium text-navy underline decoration-slate-300 underline-offset-2 transition hover:text-green hover:decoration-green/40"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy-policy"
                {...internalAnchorProps("/privacy-policy")}
                className="font-medium text-navy underline decoration-slate-300 underline-offset-2 transition hover:text-green hover:decoration-green/40"
              >
                Privacy Policy
              </a>
              .
            </p>
          ) : null}

          {showBenefitsFooter ? (
            <div className="r360-form-benefits-footer">
              <ul className="r360-form-benefits">
                <li className="r360-form-benefit">
                  <Search strokeWidth={2} aria-hidden="true" />
                  <span className="r360-form-benefit-label">
                    <span aria-hidden="true">
                      Search Results
                      <br />
                      Review
                    </span>
                    <span className="sr-only">Search Results Review</span>
                  </span>
                </li>
                <li className="r360-form-benefit">
                  <ClipboardCheck strokeWidth={2} aria-hidden="true" />
                  <span className="r360-form-benefit-label">
                    <span aria-hidden="true">
                      Practical
                      <br />
                      Recommendations
                    </span>
                    <span className="sr-only">Practical Recommendations</span>
                  </span>
                </li>
                <li className="r360-form-benefit">
                  <Route strokeWidth={2} aria-hidden="true" />
                  <span className="r360-form-benefit-label">
                    <span aria-hidden="true">
                      Clear Action
                      <br />
                      Plan
                    </span>
                    <span className="sr-only">Clear Action Plan</span>
                  </span>
                </li>
              </ul>
            </div>
          ) : null}
        </form>
        </>
      )}
    </div>
  );
}

export default HomeContactLeadForm;
