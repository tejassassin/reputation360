import { useEffect } from "react";
import {
  IndustryWhatReputation360Section,
  IndustryRealisticTimelineSection,
} from "../components/industry/IndustryReputation360Sections";
import { calendlyNewTabProps } from "../constants/scheduling";
import {
  ShieldCheck,
  Handshake,
  Users,
  Newspaper,
  Search,
} from "lucide-react";

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
    <main className="flex-1 bg-offwhite pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <section className="relative grid items-start gap-5 overflow-hidden rounded-[8px] bg-[linear-gradient(110deg,#ececf8_0%,#eef3f6_70%,#edf7f3_100%)] px-3 py-6 md:grid-cols-[1.03fr_0.97fr] md:px-4 md:py-7">
          <div className="max-w-[570px]">
            <h1 className="max-w-[520px] font-heading text-[34px] font-bold leading-[1.02] tracking-tight text-[#0f2e58] md:text-[40px]">
              <span className="block">
                Every board member will search your name.
              </span>
              <span className="mt-1 block md:mt-1.5">
                Is your digital presence ready for that moment?
              </span>
            </h1>
            <a
              {...calendlyNewTabProps}
              className="ha-pill mt-6 inline-flex items-center gap-2 rounded-[8px] bg-[#153f70] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(7,47,95,0.24)] hover:bg-[#0b3c75]"
            >
              Book a Free Confidential Consultation
            </a>
          </div>
          <div className="rounded-[6px] bg-[linear-gradient(180deg,#e8f5ef_0%,#e7f4ee_100%)] px-3 py-3 pt-1 space-y-3 md:px-4 md:py-4">
            {[
              {
                title: "Strategic Presence",
                text: "We help senior leaders shape what stakeholders see first — before diligence, press, or partnerships hinge on a search result.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Discretion Guaranteed",
                text: "Board-level work demands confidentiality. Your engagement and the nature of our work stay protected throughout.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Executive Authority",
                text: "We strengthen authoritative profiles and assets so your record and expertise rank before noise and outdated material.",
                icon: <Search className="h-5 w-5 text-[#6ee27d]" />,
              },
            ].map((item) => (
              <article
                key={item.title}
                className="ha-lift rounded-3xl border border-[#dbe3e8] bg-white px-4 py-4 shadow-[0_10px_24px_rgba(20,40,70,0.10)] md:px-5 md:py-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-[15px] font-semibold leading-tight text-[#1f3b64] md:text-[16px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] leading-[1.5] text-[#5d6c80] md:text-[13px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

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

      <section className="bg-white px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl">
          <IndustryWhatReputation360Section />
          <IndustryRealisticTimelineSection />
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
