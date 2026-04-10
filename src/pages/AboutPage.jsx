import { useEffect } from "react";
import {
  ShieldCheck,
  Lock,
  Network,
  CheckCircle2,
  Landmark,
  Stethoscope,
  Gavel,
  Building2,
} from "lucide-react";
import { calendlyNewTabProps } from "../constants/scheduling";

const skylineImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDFuOG9-w2ZZQdESOpWQNLPhhZ0Rtqn3ZhPA9rSRGp1yGAvsowBQkLxfwNqdYXTNMolIFO4cyyPLah9wO0_PhwJokPIIph_IHpvVbWJ48plfCys1CX8P4OexI_LsyzWv8QUdtw8GUCBE9zaOg3GeKXtDXLtlt2f0q8rSig128ia4NaUAfx-ZVCseb--IoGIyteiHcXimJ6dUSv-MphcdyDRZI0dv8e5o-3A1Mdt2dnZf-AdVpvbmBEQSUOQebieElsnXy8q70sdEP4";

const whatWeDoImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBRHmGYx5k8Y9IXmjz0qp0z0FrHQSilFyoFc3BwdyrViCUn7S5sV8WMamWnYcOD5voesOdWy0sidVp3Ip49wU01_CrxIsz2EB_WCWbmPDih4_E8spKuU9Uv4NeELrTkcZFwEv9_bbwZq0z-SI_R2qhggQuZXH3O9xLHlMX02BhtfXeiKflznBVJDSScOYq6gJR_dnr9Ij9iQFeJWVV1n2GOYoMIoBWb5SYPrXKhT6JP4-_l3B-5m0ZkpGIs2oMyntqHW2LMxhnZlw4";

function AboutPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "About Us | Reputation360";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="flex-1 bg-[#f9f9ff] pt-28 md:pt-32">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f1f3ff] px-4 pb-14 pt-10 md:px-8 md:pb-18 md:pt-14">
        <div className="relative z-10 mx-auto max-w-6xl">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#56b958] md:mb-5 md:text-xs">
            Established 2013
          </span>
          <h1 className="max-w-4xl font-heading text-[30px] font-bold leading-[1.1] tracking-tight text-[#02254d] md:text-[40px] lg:text-[44px]">
            We Have Been Protecting Reputations Since 2013.{" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-br from-[#02254d] to-[#35618e] bg-clip-text text-transparent">
              Here Is What We Have Learned.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] font-light leading-relaxed text-[#43474e] md:mt-8 md:text-[16px]">
            Reputation isn&apos;t just what people say about you; it&apos;s the
            digital shadow that precedes every handshake, meeting, and
            investment.
          </p>
        </div>
        <div
          className="pointer-events-none absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-[#02254d]/5 blur-3xl"
          aria-hidden
        />
        <div className="absolute bottom-0 right-0 h-px w-full bg-[#c4c6d0]/15" />
      </section>

      {/* The Genesis + stats + image */}
      <section className="bg-[#f9f9ff] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-12 md:gap-6 lg:gap-8">
          <div className="flex flex-col justify-center rounded-3xl bg-[#e9edff] p-8 md:col-span-8 md:p-10 lg:p-12">
            <h2 className="font-heading text-[24px] font-bold text-[#02254d] md:text-[28px]">
              The Genesis
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#43474e] md:text-[16px]">
              Reputation360 was founded on a singular observation: judgments are
              formed via search engines long before a conversation begins. In
              2013, we saw a gap between who leaders truly are and how the
              internet portrayed them.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#43474e] md:mt-5 md:text-[16px]">
              Over 13 years and more than 1,700 client engagements, we have built
              the expertise, methodology, and track record to change that. Our
              team works across reputation management, SEO, content strategy,
              branding, and digital growth — because lasting reputation health
              requires all of these working together.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-3xl bg-[#02254d] p-8 text-center text-white md:col-span-4 md:p-10">
            <span className="font-heading text-5xl font-extrabold text-[#78dc77] md:text-6xl">
              13
            </span>
            <span className="mt-2 text-[10px] font-semibold uppercase tracking-widest opacity-90 md:text-xs">
              Years of Expertise
            </span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-3xl bg-[#dce2f7] p-8 text-center md:col-span-4 md:p-10">
            <span className="font-heading text-5xl font-extrabold text-[#02254d] md:text-6xl">
              1,700+
            </span>
            <span className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-[#43474e] md:text-xs">
              Engagements Completed
            </span>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-3xl md:col-span-8 md:min-h-[300px]">
            <img
              alt="City skyline at dusk through office windows"
              className="absolute inset-0 h-full w-full object-cover"
              src={skylineImage}
            />
            <div className="absolute inset-0 bg-[#02254d]/20" aria-hidden />
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="bg-[#f1f3ff] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-heading text-[26px] font-bold text-[#02254d] md:text-[32px]">
            What We Stand For
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-[#78dc77] md:w-20" />
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-10 md:mt-14 md:grid-cols-3 md:gap-8 lg:gap-12">
          {[
            {
              icon: ShieldCheck,
              title: "Honesty above all",
              text: "We tell clients what is genuinely achievable, what realistic timelines look like, and when a situation is more complex than it appears. A difficult honest conversation early is always better than a disappointing one later.",
            },
            {
              icon: Lock,
              title: "Complete confidentiality",
              text: "Every client situation is treated with absolute discretion. We do not discuss engagements publicly, reference cases without permission, or share any client information with third parties.",
            },
            {
              icon: Network,
              title: "Work that holds",
              text: "Our methods are 100% white-hat. We do not use shortcuts that create short-term results and long-term risk. Everything we build is designed to last.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="group ha-lift rounded-2xl px-2 py-4 md:px-4 md:py-6">
              <div className="mb-6 flex justify-center md:mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg shadow-[#02254d]/5 transition-all duration-300 group-hover:bg-[#02254d] group-hover:text-white md:h-20 md:w-20 md:rounded-3xl">
                  <Icon className="h-8 w-8 text-[#02254d] transition-colors group-hover:text-white md:h-9 md:w-9" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-center font-heading text-lg font-bold text-[#02254d] md:text-xl lg:text-2xl">
                {title}
              </h3>
              <p className="mt-3 text-center text-[14px] leading-relaxed text-[#43474e] md:text-[15px]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-[#f9f9ff] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:gap-14 lg:gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <img
                alt="Abstract network visualization"
                className="h-full w-full object-cover"
                src={whatWeDoImage}
              />
              <div
                className="absolute inset-0 bg-gradient-to-tr from-[#02254d]/40 to-transparent"
                aria-hidden
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-heading text-[26px] font-bold text-[#02254d] md:text-[32px]">
              What We Do
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#43474e] md:mt-6 md:text-[16px] lg:text-lg">
              We don&apos;t just &ldquo;remove links.&rdquo; We take a holistic
              digital presence approach that recalibrates how you are perceived
              globally.
            </p>
            <ul className="mt-6 space-y-5 md:mt-8 md:space-y-6">
              {[
                {
                  title: "Strategic Suppression",
                  text: "Moving outdated or inaccurate information where it can no longer harm your trajectory.",
                },
                {
                  title: "Authority Building",
                  text: "Curation of a digital footprint that reflects your true professional standing.",
                },
                {
                  title: "Constant Monitoring",
                  text: "Real-time alerts and rapid response teams for emerging threats.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3 md:gap-4">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#56b958] md:h-6 md:w-6"
                    strokeWidth={2}
                  />
                  <div>
                    <h4 className="font-heading font-bold text-[#02254d]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[14px] text-[#43474e] md:text-[15px]">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who Trusts Us */}
      <section className="bg-[#02254d] px-4 py-14 text-white md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center md:mb-14">
            <h2 className="font-heading text-[26px] font-bold md:text-[32px]">
              Who Trusts Us
            </h2>
            <p className="mt-3 text-[15px] text-[#adc7f8] md:text-[16px] lg:text-lg">
              We serve high-stakes professionals whose digital legacy matters.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {[
              {
                icon: Landmark,
                label: "Financial Advisors",
                href: "/services/financial-advisors",
              },
              {
                icon: Stethoscope,
                label: "Physicians",
                href: "/services/doctors",
              },
              { icon: Gavel, label: "Lawyers", href: "/services/lawyers" },
              { icon: Building2, label: "CEOs", href: "/services/executives" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="ha-lift flex flex-col items-center rounded-xl border border-white/10 bg-[#1f3b64]/50 p-5 text-center backdrop-blur-sm hover:bg-[#1f3b64]/70 md:p-8"
              >
                <Icon
                  className="mb-3 h-7 w-7 text-[#78dc77] md:mb-4 md:h-8 md:w-8"
                  strokeWidth={2}
                />
                <h3 className="font-heading text-sm font-bold md:text-lg">
                  {label}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-[#dce2f7]/30 px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-[#c4c6d0]/10 bg-white p-8 shadow-2xl shadow-[#02254d]/5 md:p-12 lg:p-16">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-heading text-[26px] font-bold text-[#02254d] md:text-[32px]">
                Our Commitment
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-10 text-left md:mt-12 md:grid-cols-3 md:gap-8 lg:gap-12">
                {[
                  {
                    n: "01",
                    title: "Senior Attention",
                    text: "You work directly with veterans, not junior account managers.",
                  },
                  {
                    n: "02",
                    title: "Custom Strategy",
                    text: "No templates. We build bespoke solutions for every individual case.",
                  },
                  {
                    n: "03",
                    title: "Real Accountability",
                    text: "We provide detailed reporting and concrete milestones of progress.",
                  },
                ].map((item) => (
                  <div key={item.n}>
                    <div className="mb-3 font-heading text-4xl font-black text-[#78dc77] md:mb-4 md:text-5xl">
                      {item.n}
                    </div>
                    <h4 className="font-heading text-lg font-bold text-[#02254d] md:text-xl">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-[14px] text-[#43474e] md:text-[15px]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-14 md:px-8 md:py-18">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-[#e9edff] px-6 py-12 text-center md:px-12 md:py-16 lg:py-20">
          <div className="relative z-10">
            <h2 className="font-heading text-[26px] font-bold text-[#02254d] md:text-[34px] lg:text-[38px]">
              Ready to Talk?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#43474e] md:mt-6 md:text-[16px] lg:text-lg">
              Your digital reputation is your most valuable asset. Let&apos;s
              ensure it reflects the truth of your achievements.
            </p>
            <a
              {...calendlyNewTabProps}
              className="mt-8 inline-block rounded-full bg-[#02254d] px-10 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#02254d]/20 transition-all hover:bg-[#35618e] active:scale-[0.98] md:mt-10 md:px-12 md:py-4 md:text-base"
            >
              Book a Free Consultation
            </a>
          </div>
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 h-1 w-full max-w-md -translate-x-1/2 bg-gradient-to-r from-transparent via-[#78dc77] to-transparent"
            aria-hidden
          />
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
