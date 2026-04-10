import { calendlyNewTabProps } from "../constants/scheduling";
import {
  EyeOff,
  Gavel,
  ShieldCheck,
  AlertTriangle,
  Check,
} from "lucide-react";

function DoctorsPage() {
  return (
    <main className="flex-1 bg-offwhite pt-28 md:pt-32">
      <section className="bg-[#f8f9fa] px-4 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <div>
            <p className="inline-flex rounded-full bg-[#d6e8f7] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1a2b4b]">
              Healthcare Elite
            </p>
            <h1 className="mt-5 font-heading text-[32px] font-bold leading-[1.08] text-[#1a2b4b] md:text-[42px] lg:text-[46px]">
              One Unfair Review Can{" "}
              <span className="text-[#4caf50]">Quietly Cost</span> Your Practice
              Patients Every Week.
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.55] text-[#5c6570] md:text-[16px]">
              Ensure your digital reputation reflects your true clinical excellence
              before a patient ever hits &apos;Book Appointment&apos;.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                {...calendlyNewTabProps}
                className="ha-pill inline-flex items-center justify-center rounded-lg bg-[#1a2b4b] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#243a5c]"
              >
                Get a Free Reputation Audit
              </a>
              <span className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-[#e2e6ea] bg-white px-5 py-3.5 text-sm font-semibold text-[#1a2b4b] shadow-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4caf50] text-white">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                HIPAA Compliant Protocols
              </span>
            </div>
          </div>
          <div className="rounded-2xl bg-[#1a2b4b] p-6 text-white shadow-[0_24px_48px_rgba(26,43,75,0.28)] md:p-8">
            <p className="inline-block rounded-md bg-[#5c2430] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white">
              The Moment of Truth
            </p>
            <blockquote className="mt-5 border-l-[3px] border-[#4caf50] pl-4 text-[15px] italic leading-[1.55] text-white md:text-[16px]">
              &ldquo;Your credentials are impeccable. But before a word is spoken,
              something else happens first.&rdquo;
            </blockquote>
            <p className="mt-5 text-[14px] leading-[1.6] text-white/65 md:text-[15px]">
              They find a single, visceral negative review. They don&apos;t call to
              ask you about it.
            </p>
            <p className="mt-3 text-[15px] font-bold leading-snug text-white md:text-[16px]">
              They quietly move to a competitor clinic.
            </p>
            <div className="my-6 border-t border-white/15" />
            <p className="inline-flex items-start gap-2 text-[12px] italic leading-snug text-[#4caf50] md:text-[13px]">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#4caf50]" />
              Silence is the most expensive feedback you&apos;ll never receive.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0f2e58] px-4 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <div className="rounded-2xl border border-white/20 bg-white/5 px-6 py-8 backdrop-blur-sm md:px-8 md:py-10">
              <p className="font-heading text-[48px] font-bold leading-none text-[#5cdb7a] md:text-[56px]">
                84%
              </p>
              <p className="mt-4 text-[14px] leading-[1.55] text-white/90 md:text-[15px]">
                of patients trust online reviews as much as a personal
                recommendation from a friend.
              </p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/5 px-6 py-8 backdrop-blur-sm md:px-8 md:py-10">
              <p className="font-heading text-[48px] font-bold leading-none text-[#5cdb7a] md:text-[56px]">
                77%
              </p>
              <p className="mt-4 text-[14px] leading-[1.55] text-white/90 md:text-[15px]">
                of people use search engines as their primary tool before booking
                a healthcare appointment.
              </p>
            </div>
          </div>
          <p className="mt-6 text-right text-[10px] font-medium uppercase tracking-[0.1em] text-white/40">
            Source: BrightLocal Healthcare Report
          </p>
        </div>
      </section>

      <section className="bg-[#f7f8fc] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-[28px] font-bold text-[#0f2e58] md:text-[34px]">
            What Reputation360 Does
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-[#4caf50]" />
          <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-8">
              <article className="ha-lift flex gap-4 rounded-xl border border-transparent p-3 hover:border-[#e3ecf7] hover:bg-white">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e3ecf7] text-[#1f3b64]">
                  <EyeOff className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#0f2e58] md:text-xl">
                    Negative Review Page Suppression
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.55] text-[#4f5f75]">
                    We utilize ethical, high-authority content creation to move
                    unfair negative reviews to page 2 and beyond where they lose
                    95% of their visibility.
                  </p>
                </div>
              </article>
              <article className="ha-lift flex gap-4 rounded-xl border border-transparent p-3 hover:border-[#e3ecf7] hover:bg-white">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e3ecf7] text-[#1f3b64]">
                  <Gavel className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#0f2e58] md:text-xl">
                    News &amp; Regulatory Suppression
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.55] text-[#4f5f75]">
                    Outdated medical board actions or sensationalist local news
                    stories are buffered by a wall of current, professional, and
                    positive digital assets.
                  </p>
                </div>
              </article>
              <article className="ha-lift flex gap-4 rounded-xl border border-transparent p-3 hover:border-[#e3ecf7] hover:bg-white">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e3ecf7] text-[#1f3b64]">
                  <ShieldCheck className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#0f2e58] md:text-xl">
                    Stronger Digital Presence
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.55] text-[#4f5f75]">
                    We optimize and manage medical directories and professional
                    profiles to ensure your highest-impact credentials are what
                    patients see first.
                  </p>
                </div>
              </article>
            </div>
            <div className="flex w-full shrink-0 justify-center md:justify-end">
              <img
                src="/doctors-hud-card.png"
                alt="Clinical excellence — safe protocols and 100% client confidentiality"
                width={705}
                height={634}
                className="block h-auto w-full max-w-[440px]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E8EBF7] px-4 py-16 text-center md:py-20">
        <h2 className="mx-auto max-w-[640px] font-heading text-[28px] font-bold leading-[1.2] text-[#1D3557] md:text-[34px] lg:text-[36px]">
          Your Professional Reputation is Your Most Valuable Asset.
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-[15px] leading-[1.6] text-[#505E70] md:text-[16px]">
          Protect your practice from the &ldquo;quiet cost&rdquo; of unfair digital
          narratives. Start with a confidential evaluation of your current search
          profile.
        </p>
        <a
          {...calendlyNewTabProps}
          className="ha-pill mt-10 inline-flex items-center justify-center rounded-lg bg-[#1D3557] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(29,53,87,0.28)] hover:bg-[#152a45]"
        >
          Book a Free Confidential Consultation
        </a>
        <p
          className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-2 text-[13px] font-medium leading-snug text-[#415a77] sm:text-sm"
          role="note"
        >
          <ShieldCheck
            className="h-4 w-4 shrink-0 text-[#1D3557]"
            strokeWidth={2}
            aria-hidden
          />
          Strictly Confidential &amp; HIPAA Aware
        </p>
      </section>
    </main>
  );
}

export default DoctorsPage;
