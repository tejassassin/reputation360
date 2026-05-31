import { ArrowRight, Lock } from "lucide-react";
import { ConsultationCtas } from "@/components/ConsultationCtas";
import { calendlyCtaButtonClass } from "@/constants/scheduling";
import { cn } from "@/lib/utils";

export const BLOG_GUIDE_CTA_PANEL_TITLE =
  "Ready to Take Control of Your Online Reputation?";
export const BLOG_GUIDE_CTA_PANEL_LEAD =
  "We'll review your reputation and create a personalized plan to strengthen it.";

const consultButtonClass = cn(
  "ha-pill inline-flex w-full max-w-md items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-heading text-sm font-bold shadow-lg shadow-cta-consult/30 transition hover:brightness-95 sm:w-auto md:px-10 md:text-base",
  calendlyCtaButtonClass,
);

const freeScanButtonClass =
  "ha-pill inline-flex w-full max-w-md items-center justify-center rounded-xl border-2 border-white/35 bg-white/10 px-8 py-3.5 font-heading text-sm font-bold text-white backdrop-blur-sm transition hover:border-white/55 hover:bg-white/15 sm:w-auto md:px-10 md:text-base";

/**
 * Dark gradient CTA panel shared across blog guides and insights.
 */
export function BlogGuideCtaPanel({
  title = BLOG_GUIDE_CTA_PANEL_TITLE,
  lead = BLOG_GUIDE_CTA_PANEL_LEAD,
  className,
}) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-[linear-gradient(120deg,#08284f,#0f3f73)] px-6 py-10 text-center text-white shadow-lg md:px-12 md:py-12",
        className,
      )}
    >
      <h2 className="mb-3 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mx-auto mb-6 max-w-3xl font-body text-sm leading-relaxed text-white/85 sm:text-base">
        {lead}
      </p>
      <ConsultationCtas
        variant="onDark"
        freeScanLabel="Book a Free Reputation Scan"
        consultLabel="Book a Free Consultation"
        consultSuffix={<ArrowRight className="h-4 w-4 shrink-0" aria-hidden />}
        wrapperClassName="justify-center"
        consultClassName={consultButtonClass}
        freeScanClassName={freeScanButtonClass}
      />
      <p className="mt-5 flex items-center justify-center gap-2 font-body text-xs font-medium text-white/85 sm:text-sm">
        <Lock className="h-3 w-3 text-green" aria-hidden />
        Confidential
      </p>
    </div>
  );
}

/**
 * Full-width blog CTA section (tag, optional intro, standard panel).
 * @param {object} props
 * @param {string} [props.id]
 * @param {string} [props.sectionTag]
 * @param {string} [props.sectionTitle]
 * @param {string} [props.sectionLead]
 * @param {string} [props.panelTitle]
 * @param {string} [props.panelLead]
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 */
export function BlogGuideCtaSection({
  id = "start",
  sectionTag = "Next step",
  sectionTitle,
  sectionLead,
  panelTitle,
  panelLead,
  children,
  className,
}) {
  return (
    <section className={cn("mb-20 scroll-mt-36", className)} id={id}>
      {sectionTag ? <span className="diy-section-tag">{sectionTag}</span> : null}
      {sectionTitle ? (
        <p className="mb-6 font-heading text-3xl font-bold text-navy">{sectionTitle}</p>
      ) : null}
      {sectionLead ? (
        <p className="mb-8 font-body text-lg text-steel">{sectionLead}</p>
      ) : null}
      {children}
      <BlogGuideCtaPanel title={panelTitle} lead={panelLead} />
    </section>
  );
}
