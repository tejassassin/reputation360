import { blogPostPath } from "../../../constants/blogPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "why-first-google-result-matters-psychology-reputation360";
export const PATH = blogPostPath(SLUG);

const SUPPRESS_FRAMEWORK_PATH = blogPostPath(
  "how-to-suppress-negative-search-results-reputation360-framework",
);

const FIRST_PAGE_PATH = blogPostPath(
  "own-your-first-page-control-google-results-reputation360",
);

const HIDDEN_COST_PATH = blogPostPath(
  "hidden-cost-ignoring-online-reputation-reputation360-analysis",
);

const TOC = [
  { id: "anchoring", label: "01. The anchoring effect in search" },
  { id: "click-through", label: "02. Click-through rates: the math" },
  { id: "trust-heuristics", label: "03. Trust heuristics and social proof" },
  { id: "halo-effect", label: "04. The halo effect on the whole page" },
  { id: "in-practice", label: "05. What this means in practice" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "anchoring", label: "Anchoring" },
  { id: "click-through", label: "Click-through math" },
  { id: "trust-heuristics", label: "Trust heuristics" },
  { id: "halo-effect", label: "Halo effect" },
  { id: "in-practice", label: "In practice" },
  { id: "start", label: "Next step" },
  { id: "faq", label: "FAQ" },
  { id: "related", label: "Related reading" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-first-result-psychology",
    slug: SLUG,
    filter: "Personal",
    category: "Reputation Psychology",
    title:
      "Why Your First Google Results Matter: Reputation360's Psychology Deep Dive",
    excerpt:
      "The first Google result is cognitively privileged. Learn anchoring, click-through math, and why controlling position one is strategic - not vanity.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "12 minutes",
    image: pack20Image("suppress"),
    imageAlt: "Person considering search results on a laptop screen",
  },
  seoTitle:
    "Why Your First Google Result Matters (Psychology) | Reputation360",
  metaDescription:
    "The first Google result shapes every impression. Reputation360 explains the psychology behind first results - and why controlling it is worth it.",
  hero: {
    badge: "Psychology Deep Dive",
    title: "Why Your First Google Results Matter",
    lead:
      "The first result in a Google search is not just the most visible. It is cognitively privileged. Human beings give disproportionate weight to the first piece of information they receive - and in name searches, that first result sets the frame for everything else.",
    meta: [
      { value: "~31%", label: "Clicks on position 1" },
      { value: "75%", label: "Click drop pos. 1 to 6" },
      { value: "7 years", label: "Reputation360 experience" },
    ],
  },
  introBlocks: [
    {
      type: "p",
      text: "The first result in a Google search is not just the most visible. It is cognitively privileged. Human beings are wired to give disproportionate weight to the first piece of information they receive - a phenomenon psychologists call anchoring. In the context of online reputation, this means that whatever appears first when someone searches your name sets the frame through which everything else is interpreted.",
    },
    {
      type: "p",
      text: "At Reputation360, we have spent seven years understanding not just the mechanics of search ranking but the human psychology that makes that ranking so consequential. This is what we know.",
    },
    {
      type: "lead",
      label: "What this guide covers",
      text: "Anchoring in search, the mathematics of click-through rates by position, how algorithm trust amplifies results, the halo and horns effects on page one, and what it means for professionals and brands in practice.",
    },
  ],
  toc: TOC,
  tocTitle: "What You'll Learn",
  tocAriaLabel: "What you'll learn",
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "anchoring",
      number: "01",
      title: "The anchoring effect in search",
      blocks: [
        {
          type: "p",
          text: "Anchoring is one of the most robust and well-documented cognitive biases in psychology research. First described by Amos Tversky and Daniel Kahneman, anchoring shows that people make decisions by starting from an initial value - the anchor - and adjusting from there, but they typically adjust insufficiently.",
        },
        {
          type: "p",
          text: "In plain terms: the first thing you read about someone stays with you and colors how you interpret everything that comes after.",
        },
        {
          type: "keyBox",
          variant: "insight",
          title: "Applied to search results",
          text: "If the first result for your name is a positive, professional LinkedIn profile, subsequent results are interpreted through the lens of credible professional. If the first result is a critical news article, subsequent positive results are interpreted through the lens of did this happen? - and the positive content feels like the footnotes, not the story.",
        },
      ],
    },
    {
      id: "click-through",
      number: "02",
      title: "Click-through rates: the mathematical reality",
      blocks: [
        {
          type: "p",
          text: "Beyond psychology, there is a mathematical reality to first-position results. Research consistently shows that the first organic result in a Google search captures approximately 28% to 31% of all clicks. The second position captures roughly 15%. By position five, the click-through rate has dropped to under 7%. By position ten, it is below 2%.",
        },
        {
          type: "stats",
          items: [
            { value: "28-31%", label: "Clicks on position 1" },
            { value: "~15%", label: "Clicks on position 2" },
            { value: "<2%", label: "Clicks on position 10" },
          ],
        },
        {
          type: "p",
          text: "This means that if a negative result is in position 1, it receives clicks from roughly one in three searchers. If it is in position 5, it receives roughly one in 14. If it is pushed to position 10 or below, its practical impact on most searchers is minimal. The mathematics of suppression are stark: moving a negative result from position 1 to position 6 reduces its average click exposure by roughly 75%.",
        },
      ],
    },
    {
      id: "trust-heuristics",
      number: "03",
      title: "Trust heuristics and social proof in search",
      blocks: [
        {
          type: "p",
          text: "Search results also function as social proof. When something appears in a Google search - particularly on an authoritative news site or professional platform - it carries an implicit endorsement of credibility. People reason: Google showed me this; therefore it must be trustworthy. This heuristic, known as algorithm trust, means that even inaccurate or one-sided content carries persuasive weight simply by virtue of appearing prominently in search.",
        },
        {
          type: "p",
          text: "This also means that positive content in high positions carries the same trust premium. A LinkedIn profile in position 1 is not just informative - it is trusted. A press feature in position 3 is not just coverage - it is credible. Building authoritative positive assets into top positions does not just suppress negative content - it actively builds trust in the people who find those results.",
        },
      ],
    },
    {
      id: "halo-effect",
      number: "04",
      title: "The halo effect: how one result colors the whole page",
      blocks: [
        {
          type: "p",
          text: "The halo effect is the psychological tendency to extend a single positive (or negative) impression across an entire domain. Studies in social psychology consistently show that a single strong positive first impression leads people to rate subsequent information as more positive, and vice versa.",
        },
        {
          type: "compare",
          pickerKey: "halo-vs-horns",
          items: [
            {
              id: "halo",
              title: "Halo effect",
              tone: "after",
              body: "A strong positive first result - comprehensive LinkedIn, a respected publication feature, a professional website - creates a halo that improves how the viewer interprets everything else on the page. Neutral content reads as supportive; positive content reads as confirmation.",
            },
            {
              id: "horns",
              title: "Horns effect",
              tone: "before",
              body: "A negative first result creates a horns effect: it primes the viewer to interpret subsequent results with suspicion, looking for evidence that confirms the negative impression. Even neutral or positive content below a negative first result may be read as less credible or relevant.",
            },
          ],
        },
      ],
    },
    {
      id: "in-practice",
      number: "05",
      title: "What this means in practice",
      blocks: [
        {
          type: "p",
          text: "The psychology of search results reinforces what Reputation360 builds its strategy around: first position is not just one of ten positions - it is the frame for all the others. Controlling what appears first means controlling the cognitive context in which everything else is evaluated.",
        },
        {
          type: "p",
          text: "For professionals across the US, Canada, Australia, and Europe engaged in business development, career advancement, or public-facing activities, the first result when someone searches their name may be the single most influential determinant of how they are perceived - before they ever say a word. Investing in that result is not vanity. It is strategy.",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "Does the anchoring effect apply even when people know they should be objective?",
      a: "Yes. Anchoring is a pre-conscious process that operates before deliberate reasoning begins. Even people who know about the bias are subject to it. This is why research repeatedly shows that first impressions persist even when people are given corrective information afterward - the initial anchor does not fully clear.",
    },
    {
      id: "faq-2",
      q: "How does this apply to businesses, not just individuals?",
      a: "Identically. When a potential customer, partner, or investor searches a brand name, the first result sets the frame. A negative review site in position 1 is every bit as damaging for a business as it is for an individual. Reputation360 applies first-position strategy to both personal and brand searches.",
    },
  ],
  cta: {
    title: "Take the next step",
    lead:
      "See your current first result and what it would take to change it. We specialize in moving the right content to position 1 for your name.",
  },
  relatedReading: [
    {
      title: "Own Your First Page: Reputation360's Strategy to Control Google Results",
      href: FIRST_PAGE_PATH,
      category: "First Page Strategy",
      readTime: "18 min read",
      image: pack20Image("rank"),
      imageAlt: "Professional reviewing Google search results on a laptop",
    },
    {
      title: "How to Suppress Negative Search Results: The Reputation360 Framework",
      href: SUPPRESS_FRAMEWORK_PATH,
      category: "Suppression Strategy",
      readTime: "18 min read",
      image: pack20Image("suppress"),
      imageAlt: "Analytics dashboard representing search result monitoring",
    },
    {
      title: "The Hidden Cost of Ignoring Your Online Reputation",
      href: HIDDEN_COST_PATH,
      category: "Reputation Analysis",
      readTime: "12 min read",
      image: pack20Image("cases"),
      imageAlt: "Professionals in a meeting discussing business outcomes",
    },
  ],
};
