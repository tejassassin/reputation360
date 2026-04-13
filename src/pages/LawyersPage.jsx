import { useEffect } from "react";
import {
  IndustryWhatReputation360Section,
  IndustryRealisticTimelineSection,
} from "../components/industry/IndustryReputation360Sections";
import { calendlyNewTabProps } from "../constants/scheduling";
import {
  EyeOff,
  Search,
  Shield,
  BadgeCheck,
  Gavel,
  Newspaper,
  AlertTriangle,
  MessagesSquare,
  Scale,
  Target,
  Check,
  Lock,
  FileCheck,
  Landmark,
} from "lucide-react";

function LawyersPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Lawyers and Attorneys | Reputation360";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="flex-1 bg-offwhite pt-28 md:pt-32">
      <section className="bg-[#eef1f8] px-4 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <div className="text-left">
            <p className="inline-flex rounded-full bg-[#4caf50] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
              Reputation intelligence for counsel
            </p>
            <h1 className="mt-5 font-heading text-[30px] font-bold leading-[1.1] text-[#1a2b4b] md:text-[40px] lg:text-[44px]">
              Before a Prospective Client Calls Your Firm, They Search Your Name.{" "}
              <span className="font-heading font-bold italic text-[#1a2b4b]">
                What Do They Find?
              </span>
            </h1>
            <div className="mt-5 flex w-full max-w-md items-center gap-3 rounded-md border border-[#7cb98f] bg-[#ecf8ef] px-4 py-3">
              <EyeOff className="h-[18px] w-[18px] shrink-0 text-[#14532d]" strokeWidth={2} />
              <span className="text-[13px] font-normal leading-snug text-[#14532d] md:text-[14px]">
                You may never know it is happening.
              </span>
            </div>
            <a
              {...calendlyNewTabProps}
              className="ha-pill mt-6 inline-flex w-full max-w-md items-center justify-center rounded-md bg-[#1a2b4b] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(26,43,75,0.22)] hover:bg-[#243a5c]"
            >
              Book a Free Confidential Consultation
            </a>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 shrink-0 text-[#4caf50]" strokeWidth={2.5} />
              <p className="font-heading text-[15px] font-bold text-[#1a2b4b] md:text-base">
                The Moment of Truth
              </p>
            </div>
            <p className="mt-3 text-[14px] font-medium leading-[1.6] text-[#1a2b4b] md:text-[15px]">
              Prospective clients and referral sources search your name first.
              What they see-bar complaints, unflattering case coverage, or thin
              directory profiles-often decides whether you ever get the
              conversation.
            </p>
            <div className="mt-8 space-y-3">
              <div className="ha-lift flex items-start gap-3 rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-[0_4px_14px_rgba(26,43,75,0.06)] md:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e8f0f8] text-[#1a2b4b]">
                  <Gavel className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-[#1a2b4b] md:text-[15px]">
                    Legal Authority
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#5c6570] md:text-[13px]">
                    Protecting your digital footprint and professional standing in
                    search results.
                  </p>
                </div>
              </div>
              <div className="ha-lift flex items-start gap-3 rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-[0_4px_14px_rgba(26,43,75,0.06)] md:p-5">
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e8f0f8] text-[#1a2b4b]">
                  <Shield className="h-5 w-5" strokeWidth={2} />
                  <Lock className="absolute h-3 w-3 text-[#1a2b4b]" strokeWidth={2.75} />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-[#1a2b4b] md:text-[15px]">
                    Discretion Guaranteed
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#5c6570] md:text-[13px]">
                    Strict confidentiality protocols for all reputational management
                    engagements.
                  </p>
                </div>
              </div>
              <div className="ha-lift flex items-start gap-3 rounded-xl border border-[#e2e8f0] border-b-[3px] border-b-[#4caf50] bg-white p-4 shadow-[0_4px_14px_rgba(26,43,75,0.06)] md:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e8f5e9] text-[#2e7d32]">
                  <BadgeCheck className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-[#1a2b4b] md:text-[15px]">
                    Trust Restored
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#5c6570] md:text-[13px]">
                    Ensuring prospective clients see your professional integrity, not
                    outdated disclosures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f3f9] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-heading text-[26px] font-bold text-[#1a2b4b] md:text-[32px]">
            Reputation Threats Specific to Legal Professionals
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-[#4caf50]" />
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {[
            {
              icon: AlertTriangle,
              title: "Bar Association Complaints",
              body: "Publicly listed disciplinary actions are often Google-indexed, becoming the first things clients see.",
            },
            {
              icon: Newspaper,
              title: "Negative Media Coverage",
              body: "Case outcomes covered negatively by legal or mainstream news media can linger in search results for decades.",
            },
            {
              icon: MessagesSquare,
              title: "Client Disputes",
              body: "Public disputes posted on prominent legal directories can undermine years of successful practice.",
            },
            {
              icon: Scale,
              title: "Contentious Opposing Parties",
              body: "Aggressive content posted by opposing parties in high-stakes cases designed to damage your standing.",
            },
            {
              icon: Target,
              title: "Competitor Targeting",
              body: "Rival firms publishing strategic content targeting your name and practice in local search results.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="ha-lift rounded-2xl border border-[#e8eaf2] bg-white p-5 shadow-[0_4px_20px_rgba(26,43,75,0.07)] md:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fde8ea]">
                <Icon className="h-5 w-5 text-[#c62828]" strokeWidth={2} />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-[#1a2b4b] md:text-lg">
                {title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.65] text-[#5a6578] md:text-[14px] md:leading-[1.7]">
                {body}
              </p>
            </div>
          ))}
          <a
            {...calendlyNewTabProps}
            className="ha-lift relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#1a2b4b] p-8 text-center shadow-[0_8px_28px_rgba(26,43,75,0.2)] hover:bg-[#243a5c] sm:min-h-0 lg:min-h-[280px]"
          >
            <Shield
              className="pointer-events-none absolute left-1/2 top-1/2 h-[min(85%,200px)] w-[min(85%,200px)] -translate-x-1/2 -translate-y-1/2 text-white/[0.06]"
              strokeWidth={1}
              aria-hidden
            />
            <p className="relative z-[1] max-w-[240px] font-heading text-[15px] font-bold leading-snug text-white md:text-base">
              Don&apos;t leave your reputation to chance.
            </p>
            <span className="relative z-[1] mt-5 font-heading text-[13px] font-bold uppercase tracking-[0.14em] text-[#7fe08a] md:text-sm uppercase">
              Take command now
            </span>
          </a>
        </div>
      </section>

      <section className="bg-[#eef1f8] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl">
          <IndustryWhatReputation360Section />
          <IndustryRealisticTimelineSection />
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-center md:px-8 md:py-24">
        <h2 className="mx-auto max-w-3xl font-heading text-[28px] font-bold leading-[1.2] text-[#1a2b4b] md:text-[36px] lg:text-[38px]">
          Your Legal Expertise Deserves a Reputation to Match
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-[16px] italic leading-[1.65] text-[#5a6578] md:text-[17px] md:leading-[1.7]">
          Years of experience and results deserve to be the first thing a
          prospective client sees. Reputation360 makes sure they are.
        </p>
        <div className="mx-auto mt-10 flex max-w-xl items-center gap-4 md:mt-12 md:max-w-2xl md:gap-5">
          <div className="h-px min-w-[48px] flex-1 bg-[#d8dee6]" aria-hidden />
          <p className="shrink-0 text-[11px] font-bold tracking-wide text-[#1a2b4b] md:text-xs">
            LexGuard Authority Protocol
          </p>
          <div className="h-px min-w-[48px] flex-1 bg-[#d8dee6]" aria-hidden />
        </div>
      </section>

      <section className="px-4 pb-16 md:px-8 md:pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#1a2b4b] px-6 py-12 text-center shadow-xl md:px-12 md:py-14">
          <h2 className="font-heading text-[26px] font-bold text-white md:text-[34px]">
            Secure Your Professional Legacy Today.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.6] text-white/80 md:text-[16px]">
            Join elite legal practitioners who trust Reputation360 to manage their
            digital standing with absolute discretion and precision.
          </p>
          <a
            {...calendlyNewTabProps}
            className="ha-pill mt-8 inline-flex items-center justify-center rounded-lg bg-[#4caf50] px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-[#43a047]"
          >
            Book a Free Confidential Consultation
          </a>
          <div className="mx-auto mt-10 flex max-w-lg flex-col items-center justify-center gap-6 text-white/90 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em]">
              <Lock className="h-4 w-4 text-[#7fe08a]" />
              100% Confidential
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em]">
              <FileCheck className="h-4 w-4 text-[#7fe08a]" />
              NDA Protected
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em]">
              <Landmark className="h-4 w-4 text-[#7fe08a]" />
              Legacy Focused
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LawyersPage;
