import { blogPostPath } from "../../../constants/blogPaths.js";
import { REMOVE_NEGATIVE_SEARCH_RESULTS_PATH } from "../removeNegativeSearchResultsGuide.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "removal-vs-suppression-which-actually-works-reputation360";
export const PATH = blogPostPath(SLUG);

const SUPPRESS_FRAMEWORK_PATH = blogPostPath(
  "how-to-suppress-negative-search-results-reputation360-framework",
);

const RANK_POSITIVE_PATH = blogPostPath(
  "rank-positive-content-above-negative-results-reputation360-strategy",
);

const TOC = [
  { id: "what-removal-means", label: "01. What removal actually means" },
  { id: "when-removal-works", label: "02. When removal is realistic" },
  { id: "why-removal-fails", label: "03. Why most removal attempts fail" },
  { id: "suppression-advantage", label: "04. What suppression offers instead" },
  { id: "both-strategies-case-study", label: "05. When both strategies work together" },
  { id: "bottom-line", label: "06. The bottom line" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "what-removal-means", label: "What removal means" },
  { id: "when-removal-works", label: "When removal works" },
  { id: "why-removal-fails", label: "Why removal often fails" },
  { id: "suppression-advantage", label: "Suppression advantage" },
  { id: "both-strategies-case-study", label: "Case study" },
  { id: "bottom-line", label: "The bottom line" },
  { id: "start", label: "Next step" },
  { id: "faq", label: "FAQ" },
  { id: "related", label: "Related reading" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-removal-vs-suppression",
    slug: SLUG,
    filter: "Suppression & Removal",
    category: "Suppression & Removal",
    title: "The Reputation360 Method: Removal vs. Suppression (Which Actually Works?)",
    excerpt:
      "Removal sounds ideal but is often unavailable. Learn the three types of removal, when each applies, and why suppression should run in parallel from day one.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "18 minutes",
    image: pack20Image("removal"),
    imageAlt: "Legal scales representing removal and compliance decisions",
  },
  seoTitle:
    "Removal vs. Suppression: Which Actually Works? | Reputation360",
  metaDescription:
    "Removal or suppression? Reputation360 breaks down which actually works for negative search results - and why most people choose the wrong option first.",
  hero: {
    badge: "Strategy Guide",
    title: "Removal vs. Suppression: Which Actually Works?",
    lead:
      "Most people want damaging Google results to disappear. Removal is far less available than assumed - and far more complicated than quick-fix vendors imply. Here is what works, when, and why both paths often belong in the same plan.",
    meta: [
      { value: "97%", label: "Suppression success rate" },
      { value: "1,100+", label: "Clients served" },
      { value: "3", label: "Types of removal" },
    ],
  },
  introBlocks: [
    {
      type: "p",
      text: "The first thing most people want when they discover a damaging result in Google is simple: make it disappear. It is an understandable instinct. If a negative article, a damaging review, or an old piece of content is hurting your reputation, the cleanest solution seems to be removal - get it taken down, de-indexed, erased.",
    },
    {
      type: "p",
      text: "The problem is that removal is far less available than most people assume, and far more complicated than the companies who promise it imply. At Reputation360, we pursue removal when it is genuinely achievable. We also tell clients clearly when it is not and why suppression is the more reliable path. After seven years working with more than 1,100 clients across the US, Canada, Australia, and Europe, we have seen every type of negative content and every approach to dealing with it.",
    },
    {
      type: "lead",
      label: "What this guide covers",
      text: "You will learn the three distinct meanings of removal, when each path is realistic, why most removal-only efforts stall, what suppression delivers instead, and how parallel execution produces the best outcomes.",
    },
  ],
  toc: TOC,
  tocTitle: "What You'll Learn",
  tocAriaLabel: "What you'll learn",
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "what-removal-means",
      number: "01",
      title: "What removal actually means",
      blocks: [
        {
          type: "p",
          text: "There are three distinct things people mean when they say they want content removed from Google. Understanding the difference changes everything - including budget, timeline, and what you should expect from a reputation partner.",
        },
        {
          type: "p",
          text: "Open each type below to see what it requires and when it applies.",
        },
        {
          type: "accordion",
          items: [
            {
              id: "source-removal",
              title: "1. Content taken down at the source",
              body: "This means the website hosting the negative content agrees to delete it. The page no longer exists. Google will eventually de-index it once it crawls and finds the page gone. This is the most complete form of removal - but it requires the cooperation of the site owner, and most site owners have no incentive to comply.",
            },
            {
              id: "deindex",
              title: "2. De-indexing by Google",
              body: "Google may remove a URL from its search index even if the page still exists on the web, if the content violates Google's policies. This applies to certain categories of content: doxxing, non-consensual intimate images, specific personal financial information, and content that creates significant risk of direct harm. For most negative business or reputation content, this avenue does not apply.",
            },
            {
              id: "legal-removal",
              title: "3. Legal removal",
              body: "A court order or established legal basis can compel a site to take content down or compel Google to de-index it. Defamation claims, copyright violations, and in some jurisdictions right-to-be-forgotten laws create pathways to legal removal. These are real options but they are slow, expensive, uncertain in outcome, and often publicly documented - meaning the attempt itself can generate negative search coverage.",
            },
          ],
        },
        {
          type: "keyBox",
          variant: "insight",
          title: "Why the distinction matters",
          text: "A vendor promising guaranteed removal without knowing which type applies is selling certainty they cannot deliver. Strategy starts with naming the publisher, the content type, and the realistic removal category.",
        },
      ],
    },
    {
      id: "when-removal-works",
      number: "02",
      title: "When removal is realistic",
      blocks: [
        {
          type: "p",
          text: "Removal is achievable when one of the following conditions exists. Select each scenario to understand what it involves and how long it typically takes.",
        },
        {
          type: "steps",
          pickerKey: "removal-realistic-scenarios",
          steps: [
            {
              n: 1,
              title: "Provably defamatory content",
              body: "If a published statement is factually false, was made with negligence or malice, and has caused demonstrable harm, it may meet the legal threshold for defamation in US, Canadian, Australian, or European jurisdictions. In these cases, Reputation360 can refer clients to appropriate legal counsel and coordinate reputation strategy alongside legal proceedings. Legal removal is a parallel process, not a fast one.",
            },
            {
              n: 2,
              title: "Platform terms-of-service violations",
              body: "Review platforms, social networks, and other content hosts have their own content policies. If a negative review is demonstrably fake, posted by a competitor, or contains prohibited content (hate speech, threats, personal information), a formal dispute process can sometimes result in removal. Platforms make their own determinations and are not obligated to comply - outcomes vary widely.",
            },
            {
              n: 3,
              title: "Unlawful personal data exposure",
              body: "Under GDPR in Europe, and increasingly under state laws in the US, individuals have specific rights around the removal of personal data from online databases. Data broker profiles, people-finder sites, and certain aggregated personal information may be removable through formal data deletion requests. Reputation360 assists clients with this process as part of a broader strategy.",
            },
            {
              n: 4,
              title: "A cooperative source",
              body: "Occasionally, the person or organization behind a negative piece of content is willing to edit or remove it in response to professional communication - particularly if the content was published without full context, or if the original concern has since been resolved. This is situation-specific but worth exploring before escalating to legal or technical measures.",
            },
          ],
        },
      ],
    },
    {
      id: "why-removal-fails",
      number: "03",
      title: "Why most removal attempts fail",
      blocks: [
        {
          type: "p",
          text: "In the real world, most people who seek removal find that the site refuses, the legal process stalls, and Google declines. Here is why.",
        },
        {
          type: "bullets",
          items: [
            "Major news sites and media organizations almost never remove factually accurate content, no matter how dated or damaging.",
            "Consumer complaint sites are often set up with legal protections (Section 230 of the Communications Decency Act in the US, for example) that shield them from being compelled to remove content.",
            "Google removes URLs only for a narrow set of policy violations and refers virtually all other requests back to the content publisher.",
          ],
        },
        {
          type: "p",
          text: "The result is that clients who spend months pursuing removal often arrive at suppression anyway - but now they are behind by months. This is why Reputation360 typically begins suppression work in parallel with any removal efforts, so that something is actively happening to improve the search results regardless of what the removal process produces.",
        },
        {
          type: "keyBox",
          variant: "warning",
          title: "Parallel execution",
          text: "Begin suppression while pursuing removal so page one improves regardless of publisher or court timelines. Waiting for removal alone is the most expensive delay we see.",
        },
      ],
    },
    {
      id: "suppression-advantage",
      number: "04",
      title: "What suppression offers that removal does not",
      blocks: [
        {
          type: "p",
          text: "Suppression does not require anyone else's cooperation. It does not require a legal victory. It does not depend on Google's discretion. It works by building something Google prefers to show more than the negative content - and it works regardless of whether the negative content ever comes down.",
        },
        {
          type: "p",
          text: "This is the fundamental advantage of suppression as a strategy. It is entirely within your control. You do not need the negative site to agree. You do not need Google to act. You build better content, earn more authority, and let the algorithm surface the most authoritative, relevant results.",
        },
        {
          type: "p",
          text: "For the vast majority of Reputation360 clients - professionals and business owners in the US, Canada, Australia, and Europe - suppression is where the results come from. Some clients achieve both removal and suppression in parallel, which is the ideal outcome. Suppression alone consistently produces meaningful page-one improvement within the timelines we commit to.",
        },
        {
          type: "lead",
          label: "Our commitment",
          text: "What we commit to at Reputation360 is honest assessment, realistic timelines, and consistent execution. We pursue removal when it is realistic and pursue suppression always, because suppression is what consistently changes the outcome for our clients.",
        },
      ],
    },
    {
      id: "both-strategies-case-study",
      number: "05",
      title: "When both strategies work together",
      blocks: [
        {
          type: "p",
          text: "The strongest outcomes combine removal efforts where they are viable with suppression that does not wait for permission. The case below shows how parallel execution changed search results while legal and platform processes ran their course.",
        },
        {
          type: "compare",
          pickerKey: "canada-firm-case-study",
          items: [
            {
              id: "situation",
              title: "The situation",
              tone: "before",
              body: "A professional services firm in Canada came to Reputation360 with two problems: an inaccurate news article from five years prior and a cluster of fake reviews on a consumer platform. The article may have supported a defamation claim, but legal proceedings would take 12 to 18 months. The fake reviews violated the platform's terms but had not been removed despite multiple formal requests.",
            },
            {
              id: "outcome",
              title: "The outcome",
              tone: "after",
              body: "We initiated suppression immediately, building 12 new authoritative assets over 90 days. A detailed platform dispute with documented fake-account evidence removed some reviews at month four. A formal notice to the news outlet produced a correction at month eight. By then the article had already been pushed to page three by suppression. The correction became an additional positive signal.",
            },
          ],
        },
      ],
    },
    {
      id: "bottom-line",
      number: "06",
      title: "The bottom line",
      blocks: [
        {
          type: "p",
          text: "Removal is the ideal but is often unavailable. Suppression is available, controllable, and consistently effective. The Reputation360 approach pursues both and never lets the pursuit of one delay the execution of the other.",
        },
        {
          type: "p",
          text: "If you are deciding where to start, map the negative URL, identify which removal category (if any) applies, and begin building positive assets the same week. That combination - honest removal assessment plus immediate suppression - is what turns a stalled reputation problem into measurable progress.",
        },
        {
          type: "lead",
          label: "Where to start",
          text: "Bring the URL, the publisher, and your timeline to a consultation. A clear read on removal odds plus a suppression plan beats months of chasing an impossible takedown alone.",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "Can Reputation360 guarantee removal of a specific piece of content?",
      a: "No. We will not make that guarantee because we do not control the decisions made by other websites, platforms, or courts. What we guarantee is that we will pursue every available avenue for removal when applicable and execute suppression regardless of what the removal process produces.",
    },
    {
      id: "faq-2",
      q: "Is the right-to-be-forgotten law available in the US?",
      a: "Not at a federal level. Some state privacy laws in the US provide limited rights around personal data removal from data brokers. The European GDPR provides broader rights. In Canada, PIPEDA and provincial privacy laws offer some pathways. We help clients understand their specific rights based on their jurisdiction.",
    },
    {
      id: "faq-3",
      q: "What about Google's removal request form?",
      a: "Google's removal tool handles a specific set of circumstances: personal data, doxxing, certain legal orders, and content that violates Google's policies. For most negative reputation content - news articles, reviews, general commentary - the form will redirect you to contact the site directly. Reputation360 can help assess whether a Google removal request is worth pursuing in your specific case.",
    },
    {
      id: "faq-4",
      q: "How quickly can suppression begin?",
      a: "We can begin suppression work within days of engagement. The first assets typically go live within two weeks. Meaningful ranking movement begins in 60 days for most clients, with sustained page-one improvement at 150 to 180 days.",
    },
  ],
  cta: {
    title: "Take the next step",
    lead:
      "Tell us what you are dealing with. We will assess your removal options and outline a suppression strategy in the same conversation.",
  },
  relatedReading: [
    {
      title: "How to Suppress Negative Search Results: The Reputation360 Framework",
      href: SUPPRESS_FRAMEWORK_PATH,
      category: "Suppression Strategy",
      readTime: "18 min read",
      image: pack20Image("suppress"),
      imageAlt: "Analytics dashboard representing search result monitoring",
    },
    {
      title: "How to Rank Positive Content Above Negative Results",
      href: RANK_POSITIVE_PATH,
      category: "Content Strategy",
      readTime: "18 min read",
      image: pack20Image("rank"),
      imageAlt: "Professional reviewing content performance on a laptop",
    },
    {
      title: "How to Remove or Suppress Negative Search Results from Google",
      href: REMOVE_NEGATIVE_SEARCH_RESULTS_PATH,
      category: "Google Reputation Management",
      readTime: "10 min read",
      image: pack20Image("removal"),
      imageAlt: "Person reviewing Google search results on a laptop",
    },
  ],
};
