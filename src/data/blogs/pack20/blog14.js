import { blogPostPath } from "../../../constants/blogPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "hidden-cost-ignoring-online-reputation-reputation360-analysis";
export const PATH = blogPostPath(SLUG);

const PSYCHOLOGY_PATH = blogPostPath(
  "why-first-google-result-matters-psychology-reputation360",
);

const NEGATIVE_LINKS_PATH = blogPostPath(
  "negative-links-cost-jobs-deals-real-cases-reputation360",
);

const SUPPRESS_FRAMEWORK_PATH = blogPostPath(
  "how-to-suppress-negative-search-results-reputation360-framework",
);

const TOC = [
  { id: "career-cost", label: "01. The career cost" },
  { id: "business-cost", label: "02. The business cost" },
  { id: "compounding", label: "03. Why waiting makes it worse" },
  { id: "irreversibility", label: "04. The irreversibility threshold" },
  { id: "zero-presence", label: "05. The cost of zero presence" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "career-cost", label: "Career cost" },
  { id: "business-cost", label: "Business cost" },
  { id: "compounding", label: "Compounding damage" },
  { id: "irreversibility", label: "Irreversibility" },
  { id: "zero-presence", label: "Zero presence" },
  { id: "start", label: "Next step" },
  { id: "faq", label: "FAQ" },
  { id: "related", label: "Related reading" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-hidden-cost-reputation",
    slug: SLUG,
    filter: "ORM Strategy & Education",
    category: "ORM Strategy & Education",
    title: "The Hidden Cost of Ignoring Your Online Reputation (Reputation360 Analysis)",
    excerpt:
      "Ignoring your online reputation has a real cost - in deals that never close and roles you never hear about. Reputation360 breaks down what inaction actually costs.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "12 minutes",
    image: pack20Image("cases"),
    imageAlt: "Business professionals reviewing financial impact of reputation",
  },
  seoTitle:
    "The Hidden Cost of Ignoring Online Reputation | Reputation360",
  metaDescription:
    "Ignoring your online reputation has a real cost. Reputation360 breaks down what inaction costs professionals and businesses - and when it's irreversible.",
  hero: {
    badge: "Reputation Analysis",
    title: "The Hidden Cost of Ignoring Your Online Reputation",
    lead:
      "The cost of a bad online reputation is almost always invisible. No one sends you an invoice for the deal that did not close or the interview that ended without an offer. The cost is felt as absence - in opportunities that never materialize.",
    meta: [
      { value: "15%", label: "Salary premium with strong search" },
      { value: "74%", label: "Lower conversion below 3.5 stars" },
      { value: "1,100+", label: "Clients served" },
    ],
  },
  introBlocks: [
    {
      type: "p",
      text: "The cost of a bad online reputation is almost always invisible. No one sends you an invoice for the deal that did not close, the interview that ended without an offer, or the partnership that cooled after someone Googled your name. The cost is felt as absence - in the opportunities that never materialize rather than the ones that are explicitly declined.",
    },
    {
      type: "p",
      text: "After seven years working with more than 1,100 clients in the US, Canada, Australia, and Europe, Reputation360 has developed a clear picture of what reputation inaction actually costs. These numbers are not hypothetical.",
    },
    {
      type: "lead",
      label: "What this analysis covers",
      text: "Career and business financial impact, why damage compounds when you wait, the irreversibility threshold, and why an empty search presence carries its own cost.",
    },
  ],
  toc: TOC,
  tocTitle: "What You'll Learn",
  tocAriaLabel: "What you'll learn",
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "career-cost",
      number: "01",
      title: "The career cost",
      blocks: [
        {
          type: "p",
          text: "For professionals, the financial impact of a negative reputation in search is most directly felt in compensation. Research published by Harvard Business School found that executives with positive online reputations command salaries 10% to 20% higher than peers with comparable credentials but negative or mixed search results.",
        },
        {
          type: "p",
          text: "For a professional earning $250,000 annually, a 15% premium represents $37,500 per year - or $375,000 over a decade.",
        },
        {
          type: "stats",
          items: [
            { value: "10-20%", label: "Salary premium with positive search" },
            { value: "$37.5K", label: "Annual gap at $250K base (15%)" },
            { value: "Months", label: "To better opportunities post-fix" },
          ],
        },
        {
          type: "p",
          text: "Beyond compensation, negative reputation affects role access. Senior positions, board appointments, and high-profile engagements increasingly pass through informal online due diligence before formal processes begin. Reputation360 clients who have repaired their search landscape consistently report that they began receiving interest for better opportunities within months of the first-page transformation.",
        },
      ],
    },
    {
      id: "business-cost",
      number: "02",
      title: "The business cost",
      blocks: [
        {
          type: "p",
          text: "For businesses, reputation damage translates directly to revenue. A 2023 study by Uberall found that businesses with an average review rating below 3.5 stars see a conversion rate 74% lower than those above 4.0 stars. A 2022 BrightLocal study found that 87% of consumers will not use a business with a rating below three stars.",
        },
        {
          type: "p",
          text: "For professional services firms - law, consulting, financial advisory, healthcare - where the decision involves significant personal trust, the impact of negative search results is even more pronounced. A single negative first-page result can eliminate a meaningful percentage of warm leads who do not convert because of what they found in their research.",
        },
        {
          type: "keyBox",
          variant: "warning",
          title: "Trust-heavy categories",
          text: "In high-trust professional services, search is not a marketing channel - it is a qualification filter. What appears on page one often decides whether the conversation starts at all.",
        },
      ],
    },
    {
      id: "compounding",
      number: "03",
      title: "Why waiting makes it worse",
      blocks: [
        {
          type: "p",
          text: "Reputation damage compounds over time in search results. A negative article accumulates more inbound links as other sites reference it. A one-star review accumulates more views as it sits at the top of results. Each week of inaction increases the authority gap between the negative content and any positive assets you might build - making future suppression more difficult and more expensive.",
        },
        {
          type: "p",
          text: "Reputation360 regularly encounters clients who have known about a damaging result for one, two, or three years before taking action. In almost every case, the cost and timeline of suppression at that point are meaningfully higher than they would have been if work had begun when the issue first appeared. The algorithmic advantage compounds against you with every month of delay.",
        },
      ],
    },
    {
      id: "irreversibility",
      number: "04",
      title: "The irreversibility threshold",
      blocks: [
        {
          type: "p",
          text: "There is a point at which reputation damage becomes significantly harder to reverse. This is not a hard cutoff, but after two to three years of high-authority negative content sitting unchallenged on page one - continuing to accumulate links, engagement, and authority - the suppression task becomes substantially more resource-intensive.",
        },
        {
          type: "p",
          text: "Clients who have hit this threshold still achieve results, but at higher cost and longer timelines than those who act early. The corollary: earlier action is almost always more cost-effective. An initial assessment from Reputation360 costs nothing, and for many clients, a moderate-scale suppression engagement pays for itself within months in recovered opportunities and relationships.",
        },
      ],
    },
    {
      id: "zero-presence",
      number: "05",
      title: "The cost of zero presence: not just negative content",
      blocks: [
        {
          type: "p",
          text: "A common misconception is that reputation management is only relevant when there is active negative content. In reality, an empty or thin online presence carries its own cost.",
        },
        {
          type: "p",
          text: "Research from the Edelman Trust Barometer consistently shows that people interpret the absence of online information as a negative signal - particularly in high-trust contexts like executive hiring, professional partnerships, and major business contracts. A blank search result says this person has something to hide to a meaningful percentage of the people who look.",
        },
        {
          type: "p",
          text: "Building a proactive positive online presence - before any reputation threat exists - is the least expensive and most effective reputation investment a professional or business can make.",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "How do I calculate the financial impact of my reputation issue?",
      a: "A personalized assessment maps your role, revenue, deal size, and the severity of your current search results. Book a consultation and we will build a custom analysis of what inaction is likely costing you versus what improvement could recover.",
    },
    {
      id: "faq-2",
      q: "Is the cost of reputation management worth it?",
      a: "For the overwhelming majority of clients, the answer is yes - often significantly. For a senior professional, a single recovered job opportunity typically covers multiple years of reputation management investment. For a business, a modest improvement in conversion rate from improved search results can generate multiples of the engagement cost within the first year.",
    },
  ],
  cta: {
    title: "Take the next step",
    lead:
      "Estimate what your current search results are costing you, then book a consultation to see what can be done about it.",
  },
  relatedReading: [
    {
      title: "Why Your First Google Results Matter: Reputation360's Psychology Deep Dive",
      href: PSYCHOLOGY_PATH,
      category: "Reputation Psychology",
      readTime: "12 min read",
      image: pack20Image("suppress"),
      imageAlt: "Person considering search results on a laptop screen",
    },
    {
      title: "Negative Links That Cost Jobs and Deals: Real Cases Reputation360 Solved",
      href: NEGATIVE_LINKS_PATH,
      category: "Case Studies",
      readTime: "14 min read",
      image: pack20Image("cases"),
      imageAlt: "Professionals in a meeting discussing career outcomes",
    },
    {
      title: "How to Suppress Negative Search Results: The Reputation360 Framework",
      href: SUPPRESS_FRAMEWORK_PATH,
      category: "Suppression Strategy",
      readTime: "18 min read",
      image: pack20Image("suppress"),
      imageAlt: "Analytics dashboard representing search result monitoring",
    },
  ],
};
