import { li, p, ul } from "./faqBlocks.js";

export const UNDERSTANDING_FAQ_ITEMS = [
  {
    id: "orm-what-is",
    question: "What is Online Reputation Management?",
    blocks: [
      p(
        "Online Reputation Management is the process of controlling what appears when someone searches your name or company on Google and other search engines. It covers three core areas:",
      ),
      ul([
        li("Monitoring", " - understanding what is being said and where it appears"),
        li("Suppression", " - pushing down content that is harmful or misleading"),
        li(
          "Promotion",
          " - building accurate, positive content that reflects who you are today",
        ),
      ]),
      p(
        "ORM is not about hiding the truth. It is about making sure a fair, complete picture is what people find, not the most outdated or sensational version of your story.",
      ),
    ],
  },
  {
    id: "removal-vs-suppression",
    question: "What is the difference between content removal and suppression?",
    blocks: [
      p("These are two distinct approaches, and knowing the difference matters."),
      ul([
        li(
          "Removal",
          " means getting content taken down from its source - the website, platform, or database where it lives. This is always pursued first where it is viable.",
        ),
        li(
          "Suppression",
          " means building enough strong, positive content that harmful results get pushed from page one of Google to page two, three, or beyond.",
        ),
        "Most people never click past page one, so suppressed results effectively disappear for the majority of searchers.",
      ]),
      p(
        "Suppression is the more reliable long-term tool and works even when removal is not possible.",
      ),
    ],
  },
  {
    id: "orm-vs-pr",
    question: "Is Online Reputation Management the same as PR?",
    blocks: [
      p("They overlap, but they are not the same thing."),
      ul([
        li(
          "PR",
          " focuses on media coverage, press releases, and shaping public narrative through journalists and publications.",
        ),
        li(
          "ORM",
          " focuses specifically on search engine results - what people find when they search your name.",
        ),
        "PR can contribute to ORM by creating positive coverage that ranks well, but ORM involves technical SEO strategy, content architecture, and digital asset building that falls outside traditional PR.",
      ]),
      p(
        "We work alongside PR professionals where needed, but our focus is on your search results.",
      ),
    ],
  },
  {
    id: "orm-difference",
    question:
      "Does ORM actually make a difference, or do people just find the negative content anyway?",
    blocks: [
      p("Yes, it makes a significant and measurable difference. Here is why:"),
      ul([
        "92% of all search traffic stays on the first visible page of Google.",
        "Content beyond page two is rarely seen by anyone.",
        "When negative results are pushed off page one, virtually no one finds them.",
      ]),
      p("Clients regularly see the difference in:"),
      ul([
        "Professional conversations that go more smoothly",
        "New business activity and inbound enquiries increasing",
        "Job interviews and due diligence processes that go further",
        "A general reduction in the anxiety of being searchable",
      ]),
    ],
  },
  {
    id: "who-needs-orm",
    question: "Who typically needs reputation management?",
    blocks: [
      p(
        "Anyone whose search results do not accurately or fairly represent who they are today. This includes:",
      ),
      ul([
        "Professionals facing outdated or misleading articles",
        "Executives dealing with negative press or an unfair narrative",
        "Doctors and lawyers whose practice is being affected by unfair reviews",
        "Individuals wrongfully associated with a case or incident",
        "Students and job seekers whose search results are costing them opportunities",
        "Businesses whose brand narrative has been shaped by others",
      ]),
      p(
        "If what people find when they search your name does not reflect who you are, we can help.",
      ),
    ],
  },
  {
    id: "positive-results-protected",
    question: "Will managing my reputation affect my existing positive search results?",
    blocks: [
      p("No. Your existing positive results are protected and built upon, not displaced."),
      ul([
        "Your LinkedIn, website, and positive press become the foundation we build on.",
        "Our strategies add authoritative content that strengthens your overall search presence.",
        "Nothing that is currently working in your favour is interfered with.",
      ]),
      p("The goal is always to reinforce and extend what is already positive."),
    ],
  },
  {
    id: "diy-vs-professional",
    question: "Can I manage my own online reputation, or do I need a professional?",
    blocks: [
      p("Some basics are absolutely doable yourself:"),
      ul([
        "Claiming your Google Business profile",
        "Setting up and completing your social media accounts",
        "Responding professionally to reviews",
      ]),
      p("But suppressing a negative result that is already sitting on page one requires:"),
      ul([
        "Deep SEO knowledge and technical strategy",
        "Publishing relationships on high-authority platforms",
        "Months of sustained, consistent effort",
      ]),
      p(
        "If the issue is already visible and actively affecting you, professional help is almost always the faster and more effective route.",
      ),
    ],
  },
];
