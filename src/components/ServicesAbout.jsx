import { calendlyNewTabProps } from "../constants/scheduling";
import { FileText, TrendingUp, WandSparkles, Settings } from "lucide-react";
import {
  CircleCheck,
  BadgeX,
  EyeOff,
  Circle,
  UserCircle2,
  MessageSquareText,
  ArrowUpRight,
  Newspaper,
  BrainCog,
} from "lucide-react";

const whatWeDoCards = [
  {
    title: "Negative Link Suppression",
    text: "We push harmful links down and improve what people see first when they search your name or business.",
    icon: <WandSparkles className="h-4 w-4" />,
    iconClass: "bg-[#1f3b64] text-white",
  },
  {
    title: "Positive Content Creation",
    text: "We publish high-quality content across trusted channels to strengthen your reputation footprint.",
    icon: <FileText className="h-4 w-4" />,
    iconClass: "bg-[#1f3b64] text-white",
  },
  {
    title: "Brand & Visibility Growth",
    text: "From profile optimization to social proof, we help your brand look credible and discoverable.",
    icon: <TrendingUp className="h-4 w-4" />,
    iconClass: "bg-[#2a8c3e] text-white",
  },
];

const timeline = [
  {
    month: "Weeks 1 to 4",
    text: "Audit complete, strategy live, initial content published and indexed.",
    icon: "1",
    iconClass: "bg-[#1f3b64] text-white",
  },
  {
    month: "Months 2 to 4",
    text: "Measurable movement in rankings. Positive properties gaining traction.",
    icon: "2",
    iconClass: "bg-[#7fb4e6] text-white",
  },
  {
    month: "Months 5 to 8",
    text: "Significant displacement of primary negative results for most cases.",
    icon: "3",
    iconClass: "bg-[#6f92bf] text-white",
  },
  {
    month: "Months 8 to 12",
    text: "Substantial transformation complete. Negative content pushed well beyond visible search pages.",
    icon: "4",
    iconClass: "bg-[#2a8c3e] text-white",
  },
];

function ServicesAbout() {
  return (
    <section className="bg-offwhite">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 space-y-16 md:space-y-20">
        <div className="rounded-3xl bg-[#f2f5ff] px-6 py-10 md:px-12 md:py-14">
          <h2 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-navy md:text-5xl">
            You Worked Hard to Build Your Reputation. We Make Sure Google
            Reflects It.
          </h2>
          <p className="mt-5 max-w-2xl text-navy/75 leading-relaxed">
            When someone searches your name, your company, or your brand, your
            first impression should reflect your authority and integrity, not
            outdated or unfair results.
          </p>
          <a
            {...calendlyNewTabProps}
            className="ha-pill mt-7 inline-flex rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy/90"
          >
            BOOK YOUR FREE CONSULTATION
          </a>
        </div>

        <div>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <h3 className="font-heading text-3xl text-navy font-bold">
                What We Do
              </h3>
              <p className="mt-3 max-w-2xl text-navy/70">
                We blend search management, strategic content, and authority
                building to make your reputation work for your business.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-[#1e4627] px-4 py-2 text-sm font-semibold text-white">
              <Settings className="h-4 w-4" />
              <span>98% success clearing page 1</span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {whatWeDoCards.map((card) => (
              <article
                key={card.title}
                className="ha-lift rounded-2xl border border-navy/10 bg-white p-5 shadow-sm hover:bg-[#f6fdf3] hover:border-[#d9f1d2]"
              >
                <div
                  className={`h-12 w-12 rounded-xl text-sm font-semibold grid place-items-center ${card.iconClass}`}
                >
                  {card.icon}
                </div>
                <h4 className="mt-4 font-heading text-lg text-navy font-semibold">
                  {card.title}
                </h4>
                <p className="mt-2 text-sm text-navy/70 leading-relaxed">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-center font-heading text-3xl text-navy font-bold tracking-tight">
            Removal vs. Suppression
          </h3>
          <p className="text-center text-navy/70 mt-2 text-base">
            The Honest Answer about Digital Deletion
          </p>
          <div className="mt-10 overflow-hidden rounded-4xl shadow-[0_20px_45px_rgba(15,23,42,0.15)] grid md:grid-cols-2">
            <article className="ha-lift bg-white p-10 md:p-12 hover:bg-[#f8fff5]">
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-[#fff3f2] text-[#c73f3a] grid place-items-center">
                  <BadgeX className="h-5 w-5" />
                </div>
                <p className="text-[2rem] font-heading font-bold text-navy">
                  Direct Removal
                </p>
              </div>
              <p className="mt-8 text-lg leading-relaxed text-navy/80">
                The permanent deletion of content from its source. While ideal,
                this is often restricted to specific legal circumstances or
                platform policy violations.
              </p>
              <ul className="mt-10 space-y-6 text-lg text-navy/85">
                <li className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5" />
                  Defamatory content (Legal Channel)
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5" />
                  Copyright or Privacy violations
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5" />
                  Terms of Service breaches
                </li>
              </ul>
            </article>
            <article className="ha-lift bg-[#072f5f] p-10 text-white md:p-12">
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-[#1f5c67] text-[#90f08f] grid place-items-center">
                  <EyeOff className="h-5 w-5" />
                </div>
                <p className="text-[2rem] font-heading font-bold">
                  Suppression Strategy
                </p>
              </div>
              <p className="mt-8 text-lg leading-relaxed text-white/90">
                The process of pushing negative results beyond the first page
                (where 95% of traffic stops). This is the most reliable method
                for legacy content.
              </p>
              <ul className="mt-10 space-y-6 text-lg text-white/95">
                <li className="flex items-center gap-3">
                  <Circle className="h-5 w-5 text-[#95ef9e] fill-[#95ef9e]" />
                  Multi-layered content architecture
                </li>
                <li className="flex items-center gap-3">
                  <Circle className="h-5 w-5 text-[#95ef9e] fill-[#95ef9e]" />
                  Search engine authority building
                </li>
                <li className="flex items-center gap-3">
                  <Circle className="h-5 w-5 text-[#95ef9e] fill-[#95ef9e]" />
                  Long-term search landscape control
                </li>
              </ul>
            </article>
          </div>
        </div>

        <div>
          <h3 className="text-center font-heading text-3xl text-navy font-bold tracking-tight">
            How Long Does It Take?
          </h3>
          <p className="mx-auto mt-3 max-w-4xl text-center text-base leading-relaxed text-navy/70">
            Search results do not reorganise overnight. Here is an honest timeline
            for most situations.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {timeline.map((step) => (
              <article key={step.month} className="ha-lift px-1">
                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl text-lg font-semibold ${step.iconClass}`}
                >
                  {step.icon}
                </div>
                <p className="mt-6 text-lg font-semibold text-navy">
                  {step.month}
                </p>
                <div className="mt-2 h-px w-full bg-navy/20" />
                <p className="mt-4 text-base leading-relaxed text-navy/75">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-center font-heading text-3xl text-navy font-bold">
            Services
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <article className="ha-lift md:col-span-2 rounded-[26px] border border-navy/10 bg-[#dfe5f6] p-6 hover:border-[#d9f1d2] hover:bg-[#f6fdf3]">
              <Newspaper className="h-6 w-6 text-[#1f3b64]" />
              <h4 className="mt-4 font-heading text-[22px] md:text-[18px] leading-[1.2] font-semibold text-[#0f2343]">
                Employer Branding &amp; Talent Reputation
              </h4>
              <p className="mt-7 text-[15px] md:text-[13px] leading-[1.45] text-[#1a2c48]/85 max-w-[92%]">
                Make your company the first choice for elite talent through positive
                narrative control.
              </p>
            </article>

            <article className="ha-lift rounded-[26px] border border-navy/10 bg-white p-6 hover:border-[#d9f1d2] hover:bg-[#f6fdf3]">
              <UserCircle2 className="h-6 w-6 text-[#3b6488]" />
              <h4 className="mt-10 font-heading text-[22px] md:text-[18px] leading-[1.2] font-semibold text-[#142844]">
                LinkedIn Branding
              </h4>
              <p className="mt-7 text-[14px] md:text-[13px] leading-[1.45] text-[#1a2c48]/85 max-w-[95%]">
                Elevating executive profiles to industry-leader status.
              </p>
            </article>

            <article className="ha-lift flex flex-col rounded-[26px] border border-navy/20 bg-[#0b376a] p-6 text-white md:row-span-2">
              <BrainCog className="ml-auto h-20 w-20 text-white/20" />
              <div className="mt-auto">
                <h4 className="font-heading text-[24px] md:text-[18px] leading-[1.1] font-semibold">
                  Thought
                  <br />
                  Leadership
                </h4>
                <p className="mt-4 text-[14px] md:text-[13px] leading-[1.45] text-white/85">
                  Curated editorial placements in high-authority professional
                  publications.
                </p>
              </div>
            </article>

            <article className="ha-lift rounded-[26px] border border-[#b8dfc0] bg-[#d7f0db] p-6 hover:border-[#d9f1d2] hover:bg-[#f6fdf3]">
              <ArrowUpRight className="h-6 w-6 text-[#123d1e]" />
              <h4 className="mt-9 font-heading text-[22px] md:text-[18px] leading-[1.18] font-semibold text-[#13273f]">
                Performance
                <br />
                Marketing
              </h4>
              <p className="mt-6 text-[14px] md:text-[13px] leading-[1.45] text-[#1a2c48]/85 max-w-[95%]">
                Targeted campaigns to boost specific positive assets.
              </p>
            </article>

            <article className="ha-lift md:col-span-2 rounded-[26px] border border-navy/10 bg-white p-6 hover:border-[#d9f1d2] hover:bg-[#f6fdf3]">
              <MessageSquareText className="h-6 w-6 text-[#1f3b64]" />
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h4 className="font-heading text-[22px] md:text-[18px] leading-[1.2] font-semibold text-[#111f37]">
                    Consultation &amp; Branding
                  </h4>
                  <p className="mt-3 text-[14px] md:text-[13px] leading-[1.45] text-[#1a2c48]/85 max-w-[92%]">
                    One-on-one strategic advisory for high-net-worth individuals and
                    crisis-ready corporations.
                  </p>
                </div>
                <div className="mt-2 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#072f5f] text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="rounded-3xl bg-[linear-gradient(120deg,#08284f,#0f3f73)] px-6 py-10 md:px-12 md:py-12 text-white shadow-lg">
          <h3 className="text-center font-heading text-3xl md:text-4xl font-bold">
            Ready to See What Is Possible?
          </h3>
          <p className="mt-4 text-center text-white/85 max-w-3xl mx-auto">
            Book a free strategy session and get a practical roadmap for your
            reputation goals, growth timeline, and next best actions.
          </p>
          <div className="mt-7 flex justify-center">
            <a
              {...calendlyNewTabProps}
              className="ha-pill inline-flex rounded-md bg-green px-5 py-3 text-sm font-semibold text-white hover:bg-green/90"
            >
              BOOK YOUR FREE CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesAbout;
