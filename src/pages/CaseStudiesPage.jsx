import { useEffect } from "react";
import {
  AlertTriangle,
  Target,
  Stethoscope,
  Monitor,
  CheckCircle2,
} from "lucide-react";

const case01Image =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDIw5emNnB4e2MmRFAADZOqnx8MTS3Ub41fhDl4ak4FuSeLgdLcJHRuCmLcnaSyXMNlDkkIcud_yRMlKDdsSAsGqba9TiayM-O2FQpzyRn3MtQIJcvz-sLKK0jLUZ2SIbQI90RcnffEvY7wBWkLc8GKsgMSN0GmsFA-pY9OaohIpGyA_4SGC8gOLGF86J1s9PN6zQergg-pV15v1vWpd1-mYm2wq4ap_pvjWcuO3h1J7WqmjCgtRXQYFllgrnz64WuP5mQRtifZ7Ww";

function CaseStudiesPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Case Studies | Reputation360";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="flex-1 bg-[#f9f9ff] pt-28 md:pt-32">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f1f3ff] px-4 py-14 md:px-8 md:py-18">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="font-heading text-[30px] font-bold leading-tight tracking-tight text-[#02254d] md:text-[40px] lg:text-[44px]">
              Real Clients. <br className="hidden sm:block" />
              Real Outcomes. <br className="hidden sm:block" />
              <span className="text-[#78dc77]">Real Search Results.</span>
            </h1>
            <p className="mt-6 text-[15px] font-light leading-relaxed text-[#43474e] md:mt-8 md:text-[16px] lg:text-[17px]">
              Every case is different. The threat, the industry, the timeline —
              all unique. What is consistent is our commitment to results that
              hold and our absolute commitment to protecting every client&apos;s
              confidentiality.
            </p>
            <p className="mt-5 border-l-4 border-[#78dc77] pl-4 text-[14px] font-medium italic text-[#35618e] md:text-[15px]">
              The cases below are drawn from real engagements with all
              identifying details anonymised.
            </p>
          </div>
        </div>
        <div
          className="pointer-events-none absolute top-0 right-0 h-[min(800px,120vw)] w-[min(800px,120vw)] translate-x-1/4 -translate-y-1/2 rounded-full bg-[#1f3b64]/5 blur-3xl"
          aria-hidden
        />
      </section>

      {/* Case studies */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-18">
        <div className="flex flex-col gap-12 md:gap-16">
          {/* Case 01 */}
          <article className="flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0px_20px_40px_rgba(20,27,43,0.06)] lg:flex-row lg:rounded-[2rem]">
            <div className="relative min-h-[280px] lg:w-1/3 lg:min-h-[400px]">
              <img
                alt="Corporate architecture"
                className="absolute inset-0 h-full w-full object-cover"
                src={case01Image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02254d]/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white md:bottom-8 md:left-8">
                <span className="mb-2 inline-block rounded-full bg-[#78dc77] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#02254d]">
                  Case Study 01
                </span>
                <h3 className="font-heading text-xl font-bold md:text-2xl lg:text-3xl">
                  Restoring Professional Standing
                </h3>
              </div>
            </div>
            <div className="flex flex-1 flex-col space-y-8 p-6 md:p-10 lg:w-2/3 lg:space-y-10 lg:p-12">
              <div className="grid grid-cols-1 gap-6 border-b border-[#c4c6d0]/20 pb-8 md:grid-cols-3 md:gap-8">
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#74777f]">
                    Profile
                  </p>
                  <p className="font-semibold text-[#02254d]">
                    Senior Financial Professional
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#74777f]">
                    Duration
                  </p>
                  <p className="font-semibold text-[#02254d]">15 Months</p>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#74777f]">
                    Outcome
                  </p>
                  <p className="font-bold text-[#78dc77]">SEC Content Suppressed</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 font-heading text-base font-bold text-[#02254d] md:text-lg">
                    <AlertTriangle
                      className="h-5 w-5 shrink-0 text-[#adc7f8]"
                      strokeWidth={2}
                    />
                    The Situation
                  </h4>
                  <p className="text-[14px] leading-relaxed text-[#43474e] md:text-[15px]">
                    A senior financial professional had SEC-linked content
                    appearing prominently in search results for their name. The
                    content referenced proceedings that had been resolved, but it
                    ranked on the first page and was affecting professional
                    relationships.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 font-heading text-base font-bold text-[#02254d] md:text-lg">
                    <Target
                      className="h-5 w-5 shrink-0 text-[#adc7f8]"
                      strokeWidth={2}
                    />
                    The Approach
                  </h4>
                  <p className="text-[14px] leading-relaxed text-[#43474e] md:text-[15px]">
                    We built a comprehensive digital presence strategy —
                    optimising LinkedIn, creating a professional website, and
                    publishing authored content on respected financial platforms
                    with complete discretion.
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-[#f1f3ff] p-5 md:p-6">
                <h4 className="mb-2 font-heading text-base font-bold text-[#02254d] md:text-lg">
                  The Outcome
                </h4>
                <p className="text-[14px] leading-relaxed text-[#43474e] md:text-[15px]">
                  Within 15 months, SEC-linked content moved beyond page two. The
                  top results were entirely professional and positive. New
                  business activity resumed without search results derailing
                  conversations.
                </p>
              </div>
            </div>
          </article>

          {/* Cases 02 & 03 */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Case 02 */}
            <article className="flex flex-col justify-between rounded-[1.75rem] bg-white p-6 shadow-[0px_20px_40px_rgba(20,27,43,0.06)] md:rounded-[2rem] md:p-10">
              <div>
                <div className="mb-6 flex items-start justify-between md:mb-8">
                  <div className="rounded-2xl bg-[#02254d]/5 p-3">
                    <Stethoscope
                      className="h-7 w-7 text-[#02254d] md:h-8 md:w-8"
                      strokeWidth={2}
                    />
                  </div>
                  <span className="rounded-full bg-[#d1e4ff] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#02254d]">
                    Case Study 02
                  </span>
                </div>
                <h3 className="mb-4 font-heading text-xl font-bold text-[#02254d] md:text-2xl">
                  Medical Reputation Management
                </h3>
                <div className="mb-6 grid grid-cols-2 gap-3 md:mb-8 md:gap-4">
                  <div className="rounded-xl bg-[#f9f9ff] p-3 md:p-4">
                    <p className="text-[10px] font-bold uppercase text-[#74777f]">
                      Profile
                    </p>
                    <p className="text-sm font-semibold text-[#02254d]">
                      Practicing Doctor
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#f9f9ff] p-3 md:p-4">
                    <p className="text-[10px] font-bold uppercase text-[#74777f]">
                      Duration
                    </p>
                    <p className="text-sm font-semibold text-[#02254d]">
                      11 Months
                    </p>
                  </div>
                </div>
                <div className="space-y-5 md:space-y-6">
                  <div>
                    <p className="mb-2 text-sm font-bold text-[#02254d]">
                      The Situation
                    </p>
                    <p className="text-sm leading-relaxed text-[#43474e]">
                      A practicing doctor had a healthcare aggregator featuring
                      negative patient ratings ranking above their own clinic
                      website.
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-bold text-[#02254d]">
                      The Approach
                    </p>
                    <p className="text-sm leading-relaxed text-[#43474e]">
                      Built an authoritative content ecosystem, optimized the
                      clinic website and directory profiles, and published
                      patient education content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-[#c4c6d0]/10 pt-6">
                <p className="text-sm font-bold text-[#78dc77]">
                  OUTCOME: Verified medical profiles prioritised in search; new
                  patient bookings increased.
                </p>
              </div>
            </article>

            {/* Case 03 */}
            <article className="flex flex-col justify-between rounded-[1.75rem] bg-[#02254d] p-6 text-white shadow-[0px_20px_40px_rgba(20,27,43,0.1)] md:rounded-[2rem] md:p-10">
              <div>
                <div className="mb-6 flex items-start justify-between md:mb-8">
                  <div className="rounded-2xl bg-white/10 p-3">
                    <Monitor
                      className="h-7 w-7 text-[#78dc77] md:h-8 md:w-8"
                      strokeWidth={2}
                    />
                  </div>
                  <span className="rounded-full bg-[#78dc77] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#02254d]">
                    Case Study 03
                  </span>
                </div>
                <h3 className="mb-4 font-heading text-xl font-bold md:text-2xl">
                  Brand Trust Recovery
                </h3>
                <div className="mb-6 grid grid-cols-2 gap-3 md:mb-8 md:gap-4">
                  <div className="rounded-xl bg-white/5 p-3 md:p-4">
                    <p className="text-[10px] font-bold uppercase text-[#adc7f8]">
                      Profile
                    </p>
                    <p className="text-sm font-semibold">Electronics Brand</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3 md:p-4">
                    <p className="text-[10px] font-bold uppercase text-[#adc7f8]">
                      Duration
                    </p>
                    <p className="text-sm font-semibold">14 Months</p>
                  </div>
                </div>
                <div className="space-y-5 md:space-y-6">
                  <div>
                    <p className="mb-2 text-sm font-bold text-[#78dc77]">
                      The Situation
                    </p>
                    <p className="text-sm leading-relaxed text-white/80">
                      Coordinated negative content in search results—a mix of
                      press coverage, review-based content, and competitor-driven
                      material.
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-bold text-[#78dc77]">
                      The Approach
                    </p>
                    <p className="text-sm leading-relaxed text-white/80">
                      Multi-channel suppression and brand presence strategy
                      including press mentions, social profile optimization, and
                      SEO reinforcement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm font-bold text-[#78dc77]">
                  OUTCOME: 92% negative results removed from Pages 1 to 3;
                  Brand website returned to #1.
                </p>
              </div>
            </article>
          </div>

          {/* Case 04 */}
          <article className="flex flex-col items-stretch gap-10 rounded-[1.75rem] bg-[#f1f3ff] p-6 md:flex-row md:gap-12 md:rounded-[2rem] md:p-10 lg:p-12">
            <div className="w-full space-y-5 md:w-1/2 md:space-y-6">
              <span className="inline-block rounded-full bg-[#c4c6d0]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#02254d]">
                Case Study 04
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#02254d] md:text-3xl lg:text-4xl">
                Founder Reputation Management
              </h3>
              <p className="text-[15px] leading-relaxed text-[#43474e] md:text-lg">
                Critical opinion content was appearing in search results, creating
                friction in investor conversations during fundraising.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium text-[#35618e] md:text-base">
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-[#78dc77]"
                    strokeWidth={2}
                  />
                  Profile: SaaS Founder | Duration: 12 Months
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#35618e] md:text-base">
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-[#78dc77]"
                    strokeWidth={2}
                  />
                  Outcome: Critical content removed from Pages 1 to 2
                </li>
              </ul>
            </div>
            <div className="w-full rounded-3xl border border-[#c4c6d0]/10 bg-white p-6 shadow-sm md:w-1/2 md:p-8">
              <div className="space-y-6">
                <div>
                  <h5 className="mb-2 text-[10px] font-bold uppercase text-[#74777f]">
                    The Approach
                  </h5>
                  <p className="text-sm leading-relaxed text-[#141b2b]">
                    Developed a personal brand strategy including LinkedIn, a
                    personal website, and guest-published thought leadership,
                    alongside direct outreach for removal of egregious content.
                  </p>
                </div>
                <div className="rounded-2xl border-l-4 border-[#78dc77] bg-[#78dc77]/10 p-5 md:p-6">
                  <h5 className="mb-1 text-sm font-bold text-[#02254d]">
                    Final Outcome
                  </h5>
                  <p className="text-sm italic text-[#02254d]/80">
                    &ldquo;The founder&apos;s results were led by their
                    professional profiles and published articles—a narrative that
                    supported their fundraising conversations.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#02254d] px-4 py-14 md:px-8 md:py-18">
        <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden>
          <div className="absolute top-0 left-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#78dc77] blur-[100px]" />
          <div className="absolute right-0 bottom-0 h-72 w-72 translate-x-1/2 translate-y-1/2 rounded-full bg-[#d1e4ff] blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <h2 className="font-heading text-[26px] font-bold text-white md:text-[36px] lg:text-[40px]">
            Start Your Own Success Story
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] text-[#adc7f8] md:mt-6 md:text-[17px] lg:text-xl">
            Begin with a free consultation. We will review your search results,
            tell you what we see, and give you an honest picture of what is
            achievable.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#78dc77] px-10 py-3.5 text-sm font-bold text-[#02254d] shadow-lg transition-all hover:bg-white active:scale-[0.98] md:mt-10 md:px-12 md:py-4 md:text-base lg:text-lg"
          >
            Book Your Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}

export default CaseStudiesPage;
