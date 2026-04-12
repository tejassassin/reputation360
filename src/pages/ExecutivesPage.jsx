import { useEffect } from "react";
import { calendlyNewTabProps } from "../constants/scheduling";
import {
  BarChart3,
  Shield,
  Star,
  ShieldCheck,
  Handshake,
  Users,
  Newspaper,
  ArrowRight,
} from "lucide-react";

/* Reference imagery (AIDA exports) - same assets as provided HTML */
const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDGa7p06z_2IPtxtlwdSmPcAYw1vGdkQs4ZB9-JThiL4ULvzVIiZtiHrt_BkuNBpnoNnZb69DUDcgcCDPZIGpszaKn3S0tzQ7tM-Z2ZGGjYCG4CxDTyO3Gh8MmoVSgSc99sYjivVzoI32DRfY7YVLjtksQEgUeyA1ZVHbsp80NRg847rPim2gcG1VDpitr-KxKOUx-iqGmqhwyxGfZrifVChfoFZBuzD8mUe-jNjH1ZjyNS0IOpxS6TwfmvhOodgs8KBUAg9YpMmUI";
const narrativeImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAXR5jfeoIOVRqrWX2aYRGdKzHFPco6ILXJCSObSw2mq2o5bmp5qktKN4oIYbAXTfG20odb4mDhGhxuu-x37L6SV4yF60-j5SB7RU-j8o6Mapd0X-tQzn4_UCx3wWuNYtklZjqLwe3Q7Zq5RrGgU539WeVsm12meNFJa7teyh1YM1dLUtpFdWeC7WiQ3uKhYA0uG9iZZIMwWuzv8U2jmbBqfLw7CveFQ-GWoNdRKvOrXTX2LV25jKcu7bxpLg5A9nYDGrDpKF-TikE";

function ExecutivesPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Executives | Reputation360";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="flex-1 bg-[#f9f9ff] pt-28 md:pt-32">
      {/* Hero - type scale aligned with Lawyers / other industry pages */}
      <section className="relative flex min-h-[58vh] items-center overflow-hidden py-10 md:min-h-[62vh] md:py-14">
        <div className="absolute inset-0 z-0">
          <img
            alt="Modern glass skyscrapers"
            className="h-full w-full object-cover brightness-[0.97]"
            src={heroImage}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f9f9ff] via-[#f9f9ff]/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-8">
          <div className="max-w-3xl space-y-5 md:space-y-6">
            <div className="inline-flex items-center rounded-full bg-[#1f3b64] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
              Executive Series
            </div>
            <h1 className="font-heading text-[30px] font-bold leading-[1.1] text-[#02254d] md:text-[40px] lg:text-[44px]">
              Your Name is Your <br className="hidden sm:block" />
              Most Strategic Asset.
            </h1>
            <p className="max-w-2xl text-[15px] font-medium leading-[1.65] text-[#43474e] md:text-[16px]">
              In the upper tiers of leadership, personal and corporate reputation
              are one and the same. We ensure yours reflects your authority.
            </p>
            <div className="pt-1">
              <a
                {...calendlyNewTabProps}
                className="group ha-pill inline-flex items-center gap-2 rounded-md bg-[#02254d] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(2,37,77,0.22)] hover:bg-[#35618e] active:scale-[0.98]"
              >
                Book a Confidential Consultation
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2.25}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative / The Inseparable Link */}
      <section className="relative overflow-hidden border-y border-[#c4c6d0]/30 bg-white">
        <div className="flex min-h-[480px] flex-col md:min-h-[520px] md:flex-row">
          <div className="relative min-h-[280px] w-full overflow-hidden bg-[#02254d] md:w-1/2 md:min-h-0">
            <img
              alt="Executive in professional setting"
              className="h-full min-h-[280px] w-full object-cover opacity-80 mix-blend-overlay md:min-h-[520px]"
              src={narrativeImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02254d]/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10">
              <div className="mb-1.5 font-heading text-[15px] font-bold text-[#78dc77] md:text-base">
                The Inseparable Link
              </div>
              <div className="h-0.5 w-14 rounded-full bg-[#78dc77] md:h-1 md:w-16" />
            </div>
          </div>
          <div className="flex w-full items-center bg-[#f9f9ff] px-6 py-12 md:w-1/2 md:px-12 md:py-16 lg:px-14">
            <div className="space-y-6 md:space-y-8">
              <h2 className="font-heading text-[24px] font-bold leading-tight text-[#02254d] md:text-[28px] lg:text-[30px]">
                For Executives, Personal Reputation and Business Reputation Are
                Inseparable.
              </h2>
              <div className="space-y-4 text-[15px] leading-[1.75] text-[#43474e] md:space-y-5 md:text-[16px]">
                <p>
                  When investors, partners, board members, or press search your
                  name, what they find shapes their view of everything you
                  represent.
                </p>
                <p>
                  A clean, authoritative digital presence builds confidence
                  before a conversation starts. Anything else creates friction in
                  exactly the situations where you can least afford it.
                </p>
                <div className="relative rounded-xl border-l-4 border-[#78dc77] bg-white p-6 shadow-sm md:p-7">
                  <p className="font-heading text-[15px] font-semibold italic leading-snug text-[#02254d] md:text-[16px]">
                    &ldquo;Reputation360 works with founders, CEOs, and senior
                    leaders who understand that their name is a strategic asset
                    &mdash; and who want to manage it accordingly.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is at Stake */}
      <section className="bg-[#f1f3ff] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl md:mb-12">
            <h2 className="mb-3 font-heading text-[26px] font-bold text-[#02254d] md:text-[32px]">
              What Is at Stake
            </h2>
            <p className="text-[15px] leading-[1.65] text-[#43474e] md:text-[16px]">
              In the high-stakes environment of executive leadership, your
              digital footprint is your first introduction.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Board and investor confidence",
                text: "Directors and shareholders search you before major decisions. What they find shapes their trust in your leadership.",
              },
              {
                icon: Handshake,
                title: "Deal flow and partnerships",
                text: "Strategic partners research your background. Anything damaging they find creates a conversation you did not want to have.",
              },
              {
                icon: Users,
                title: "Talent acquisition",
                text: "Senior candidates you are trying to recruit research you. A strong digital presence attracts exceptional people.",
              },
              {
                icon: Newspaper,
                title: "Media interactions",
                text: "Journalists research your background before interviews. Old controversies resurface when your name is prominent and unprotected.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="ha-lift flex flex-col gap-5 rounded-xl border border-[#c4c6d0]/20 bg-white p-6 shadow-sm md:gap-6 md:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1f3b64] text-[#78dc77] md:h-12 md:w-12 md:rounded-xl">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-[#02254d] md:text-xl">
                    {title}
                  </h3>
                  <p className="text-[14px] leading-[1.65] text-[#43474e] md:text-[15px]">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What Reputation360 Provides */}
      <section className="relative overflow-hidden bg-[#02254d] px-4 py-14 md:px-8 md:py-18">
        <div className="absolute top-0 right-0 h-full w-1/3 opacity-10">
          <img
            alt=""
            className="h-full w-full object-cover"
            src={narrativeImage}
            aria-hidden
          />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-10 md:mb-12">
            <h2 className="mb-3 font-heading text-[26px] font-bold text-white md:text-[32px]">
              What Reputation360 Provides
            </h2>
            <div className="h-1 w-16 rounded-full bg-[#78dc77] md:h-1.5 md:w-20" />
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {[
              {
                icon: BarChart3,
                title: "Full digital audit",
                text: "We analyse your complete search footprint - name, company associations, past ventures, media coverage - and map every threat and opportunity.",
              },
              {
                icon: Shield,
                title: "Negative suppression",
                text: "We displace damaging content from visible search pages using proven strategies built for lasting results.",
              },
              {
                icon: Star,
                title: "Executive presence building",
                text: "LinkedIn optimisation, thought leadership content, media profile building - we build a digital presence that reflects your authority and status.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="space-y-4 md:space-y-5">
                <Icon className="h-8 w-8 text-[#78dc77] md:h-9 md:w-9" strokeWidth={2} />
                <h3 className="font-heading text-lg font-bold text-white md:text-xl">
                  {title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[#8ca6d5] md:text-[15px]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#f9f9ff] px-4 py-16 text-center md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 font-heading text-[26px] font-bold leading-tight tracking-tight text-[#02254d] md:text-[34px]">
            Lead With Confidence. <br />
            <span className="text-[#56b958]">
              Let Your Reputation Precede You.
            </span>
          </h2>
          <p className="mb-8 text-[15px] leading-[1.7] text-[#43474e] md:mb-10 md:text-[16px]">
            The right online presence does not just protect you. It opens doors.
            Reputation360 builds the kind of executive profile that works for you
            in every room you enter.
          </p>
          <a
            {...calendlyNewTabProps}
            className="ha-pill inline-flex items-center justify-center rounded-lg bg-[#02254d] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(2,37,77,0.25)] hover:bg-[#35618e] md:text-base"
          >
            Book a Confidential Executive Consultation
          </a>
        </div>
      </section>
    </main>
  );
}

export default ExecutivesPage;
