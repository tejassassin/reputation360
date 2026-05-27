import { p, ul } from "./faqBlocks.js";

export const COSTS_FAQ_ITEMS = [
  {
    id: "orm-cost",
    question: "How much does Online Reputation Management cost?",
    blocks: [
      p(
        "ORM is not a commodity service, so there is no one-size-fits-all price. The cost depends on:",
      ),
      ul([
        "How many harmful results exist and how authoritative their sources are",
        "How competitive the search landscape is for your name or business",
        "How quickly results are needed",
        "Whether removal attempts are required alongside suppression",
      ]),
      p(
        "We provide a detailed assessment and a tailored proposal after understanding your situation in the initial consultation. We do not offer fixed packages because fixed packages do not work in ORM.",
      ),
    ],
  },
  {
    id: "one-time-or-ongoing",
    question: "Is Online Reputation Management a one-time project or an ongoing service?",
    blocks: [
      p("It can be either, depending on your situation."),
      ul([
        "Some clients need an intensive push to shift a specific result and then manage their reputation independently from there.",
        "Others, particularly executives, public figures, and businesses in competitive industries, benefit from ongoing monitoring and content maintenance to stay ahead of new threats.",
      ]),
      p(
        "We work with you to identify which model fits your needs and budget, and we are honest about when ongoing support is and is not necessary.",
      ),
    ],
  },
  {
    id: "guarantee-results",
    question: "Do you guarantee results?",
    blocks: [
      p(
        "We do not make guarantees about specific outcomes, and you should be cautious of any ORM company that does.",
      ),
      ul([
        "Search engine results are influenced by many variables outside our full control.",
        "What we can guarantee is rigorous work, transparent reporting, ethical methods, and honest communication throughout.",
        "We will tell you clearly what is realistic before you engage, and we will not take on work we do not believe we can deliver.",
      ]),
      p(
        "Our track record speaks for itself. We are happy to share relevant case studies during your consultation.",
      ),
    ],
  },
];
