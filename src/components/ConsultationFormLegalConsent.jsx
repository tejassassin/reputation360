import { internalAnchorProps } from "../lib/internalLinkProps.js";

const TERMS_PATH = "/terms-of-service";
const PRIVACY_PATH = "/privacy-policy";

const linkClass =
  "font-medium text-navy underline decoration-slate-300 underline-offset-2 transition hover:text-green hover:decoration-green/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm";

/**
 * Shared legal line under consultation lead forms (homepage hero + lower section).
 * @param {"default" | "hero"} [variant]
 */
export default function ConsultationFormLegalConsent({ className = "", variant = "default" }) {
  const copyClass =
    variant === "hero"
      ? "text-[11px] leading-[1.4] text-slate-500 min-[1280px]:text-xs"
      : "text-xs leading-[1.4] text-slate-500 sm:text-[0.8125rem]";

  return (
    <p
      className={`r360-form-consent mb-0 text-center font-body ${copyClass} ${className}`.trim()}
    >
      By submitting this form, you agree to our{" "}
      <a href={TERMS_PATH} {...internalAnchorProps(TERMS_PATH)} className={linkClass}>
        Terms of Service
      </a>{" "}
      and{" "}
      <a href={PRIVACY_PATH} {...internalAnchorProps(PRIVACY_PATH)} className={linkClass}>
        Privacy Policy
      </a>
      .
    </p>
  );
}
