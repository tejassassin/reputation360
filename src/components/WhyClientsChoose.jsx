import {
  CalendarClock,
  CircleDollarSign,
  Lock,
  Search,
  SlidersHorizontal,
} from "lucide-react";

const WHY_CHOOSE_CARD_ICON_CLASS = "h-[1.125rem] w-[1.125rem] stroke-[2.25]";

const WHY_CHOOSE_CARDS = [
  {
    id: "proven",
    title: "Proven Across Google and AI Search",
    description:
      "Strategies designed to strengthen how you appear across traditional search results and AI-powered experiences.",
    icon: Search,
  },
  {
    id: "confidential",
    title: "Confidential and Discreet",
    description:
      "Your privacy is protected from the first conversation through every stage of the engagement.",
    icon: Lock,
  },
  {
    id: "pricing",
    title: "Exceptional Service at Competitive Prices",
    description:
      "High-quality reputation management delivered by experienced specialists at highly competitive rates.",
    icon: CircleDollarSign,
  },
  {
    id: "timelines",
    title: "Clear Timelines and Honest Expectations",
    description:
      "Straightforward guidance on what can be improved, how the process works and what results are realistic.",
    icon: CalendarClock,
  },
  {
    id: "personalized",
    title: "Personalized for Your Reputation",
    description:
      "A focused strategy shaped around your search results, priorities and long-term visibility goals.",
    icon: SlidersHorizontal,
  },
];

function WhyChooseCardIcon({ icon: Icon }) {
  return <Icon className={WHY_CHOOSE_CARD_ICON_CLASS} aria-hidden />;
}

function WhyChooseCard({ card }) {
  return (
    <article className="r360-why-choose-card flex h-full min-h-0 flex-col text-left">
      <div className="r360-why-choose-card-content">
        <div className="r360-why-choose-card-icon">
          <WhyChooseCardIcon icon={card.icon} />
        </div>
        <h3 className="r360-why-choose-card-title">{card.title}</h3>
        <p className="r360-why-choose-card-desc">{card.description}</p>
      </div>
    </article>
  );
}

function WhyClientsChoose() {
  return (
    <section
      id="WhyClientsChoose"
      className="r360-why-choose-section relative w-full overflow-hidden border-b border-slate-200/80 text-navy"
      aria-labelledby="why-clients-heading"
    >
      <div className="r360-site-container r360-why-choose-shell relative">
        <header className="r360-why-choose-intro text-center">
          <h2
            id="why-clients-heading"
            className="r360-why-choose-heading mx-auto max-w-4xl font-heading text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl lg:text-4xl"
          >
            Why Choose Reputation360 for Online Reputation Management
          </h2>
          <div
            className="r360-why-choose-intro-rule mx-auto mt-2 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#1F3B64]"
            aria-hidden
          />
          <p className="r360-why-choose-subtitle mx-auto mt-4 font-body text-base leading-snug text-slate-600 sm:text-[1.05rem]">
            Specialist support, clear expectations and strategies built for lasting visibility
            across Google and AI Search.
          </p>
        </header>

        <ul className="r360-why-choose-cards-grid m-0 list-none p-0">
          {WHY_CHOOSE_CARDS.map((card) => (
            <li key={card.id} className="flex min-h-0 min-w-0">
              <WhyChooseCard card={card} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyClientsChoose;
