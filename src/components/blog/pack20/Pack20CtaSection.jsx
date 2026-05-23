import { ArrowRight, Lock } from "lucide-react";
import { ConsultationCtas } from "@/components/ConsultationCtas";
import { calendlyCtaButtonClass } from "@/constants/scheduling";
import { cn } from "@/lib/utils";

/** Standard pack-20 CTA (matches other interactive blog guides). */
export function Pack20CtaSection({ title, lead }) {
  return (
    <section className="mb-20 scroll-mt-36" id="start">
      <span className="diy-section-tag">Next step</span>
      <h2 className="mb-6 font-heading text-3xl font-bold text-navy">{title}</h2>
      {lead ? <p className="mb-8 font-body text-lg text-steel">{lead}</p> : null}
      <div className="rounded-3xl bg-[linear-gradient(120deg,#08284f,#0f3f73)] px-6 py-10 text-center text-white shadow-lg md:px-12 md:py-12">
        <h3 className="mb-3 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
          Prefer expert help?
        </h3>
        <p className="mx-auto mb-6 max-w-3xl font-body text-sm leading-relaxed text-white/85 sm:text-base">
          Book a consultation: we review your search landscape and outline practical next steps.
        </p>
        <ConsultationCtas
          variant="onDark"
          consultLabel="Book a Free Consultation"
          consultSuffix={<ArrowRight className="h-4 w-4 shrink-0" aria-hidden />}
          wrapperClassName="justify-center"
          consultClassName={cn(
            "ha-pill inline-flex w-full max-w-md items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-heading text-sm font-bold shadow-lg shadow-cta-consult/30 transition hover:brightness-95 sm:w-auto md:px-10 md:text-base",
            calendlyCtaButtonClass,
          )}
          freeScanClassName="ha-pill inline-flex w-full max-w-md items-center justify-center rounded-xl border-2 border-white/35 bg-white/10 px-8 py-3.5 font-heading text-sm font-bold text-white backdrop-blur-sm transition hover:border-white/55 hover:bg-white/15 sm:w-auto md:px-10 md:text-base"
        />
        <p className="mt-5 flex items-center justify-center gap-2 font-body text-xs font-medium text-white/85 sm:text-sm">
          <Lock className="h-3 w-3 text-green" aria-hidden />
          Confidential
        </p>
      </div>
    </section>
  );
}
