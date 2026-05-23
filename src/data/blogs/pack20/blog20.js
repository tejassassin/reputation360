import { blogPostPath } from "../../../constants/blogPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG =
  "ai-search-changes-reputation-chatgpt-beyond-reputation360-guide";
export const PATH = blogPostPath(SLUG);

const FIRST_PAGE_PATH = blogPostPath(
  "own-your-first-page-control-google-results-reputation360",
);

const METHODOLOGY_PATH = blogPostPath(
  "online-reputation-management-best-practices-reputation360-methodology",
);

const RECRUITERS_PATH = blogPostPath(
  "what-recruiters-google-about-you-reputation360-insider-report",
);

const TOC = [
  { id: "how-ai-works", label: "01. How AI search works" },
  { id: "training-data", label: "02. Training data problem" },
  { id: "ai-overviews", label: "03. Google AI Overviews" },
  { id: "perplexity", label: "04. Perplexity" },
  { id: "four-principles", label: "05. Four principles" },
  { id: "checklist", label: "06. AI readiness checklist" },
  { id: "future", label: "07. The future" },
  { id: "ai-era-now", label: "08. Working in the AI era" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "how-ai-works", label: "How AI works" },
  { id: "training-data", label: "Training data" },
  { id: "ai-overviews", label: "AI Overviews" },
  { id: "perplexity", label: "Perplexity" },
  { id: "four-principles", label: "Four principles" },
  { id: "checklist", label: "Checklist" },
  { id: "future", label: "Future" },
  { id: "ai-era-now", label: "AI era now" },
  { id: "start", label: "Next step" },
  { id: "faq", label: "FAQ" },
  { id: "related", label: "Related reading" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-ai-search-reputation",
    slug: SLUG,
    filter: "Social Media, AI & Monitoring",
    category: "Social Media, AI & Monitoring",
    title:
      "How AI Search Changes Reputation: Reputation360's Guide to ChatGPT & Beyond",
    excerpt:
      "AI search changes how people research names and brands. Reputation360 explains how ChatGPT, Perplexity, and AI Overviews affect your reputation.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "16 minutes",
    image: pack20Image("aiSearch"),
    imageAlt: "AI search interface representing reputation in the AI era",
  },
  seoTitle: "AI Search and Online Reputation | Reputation360",
  metaDescription:
    "AI search changes how people research names and brands. Reputation360 explains how ChatGPT, Perplexity, and AI Overviews affect your reputation.",
  hero: {
    badge: "AI & Search",
    title: "How AI Search Changes Reputation",
    lead:
      "For most of the last two decades, online reputation management was synonymous with Google search management. That is still largely true - but it is no longer the complete picture.",
    meta: [
      { value: "4", label: "Core AI principles" },
      { value: "Quarterly", label: "Recommended check cadence" },
      { value: "7 years", label: "Tracking AI impact" },
    ],
  },
  introBlocks: [
    {
      type: "p",
      text: "For most of the last two decades, online reputation management was synonymous with Google search management. If your first page looked good, your reputation was in reasonable shape. That is still largely true - but it is no longer the complete picture. The emergence of AI-powered search tools - ChatGPT, Google's AI Overviews, Perplexity, Microsoft Copilot, and others - has introduced a fundamentally new channel through which people research names, brands, and companies.",
    },
    {
      type: "p",
      text: "At Reputation360, we have been tracking how AI search affects our clients across the US, Canada, Australia, and Europe since the earliest days of mainstream AI tool adoption. This is what we know - and what we recommend doing about it.",
    },
    {
      type: "lead",
      label: "What this guide covers",
      text: "How AI tools generate answers about people and brands, the training data problem, Google AI Overviews and Perplexity, our four-principle AI strategy, and a practical readiness checklist.",
    },
  ],
  toc: TOC,
  tocTitle: "What You'll Learn",
  tocAriaLabel: "What you'll learn",
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "how-ai-works",
      number: "01",
      title: "How AI search engines generate answers about people and brands",
      blocks: [
        {
          type: "p",
          text: "Unlike traditional search engines that return a list of links, AI search tools synthesize information from multiple sources and generate a natural language answer. When someone asks ChatGPT to tell them about a name or prompts Google's AI Overview for information about a person or brand, the AI constructs a response based on the sources it has access to, their relative authority, and how consistently information appears across them.",
        },
        {
          type: "p",
          text: "This process introduces three dynamics that matter for reputation management. Select each to see how it affects you.",
        },
        {
          type: "pills",
          pickerKey: "ai-search-three-dynamics",
          items: [
            {
              id: "newsworthy-bias",
              label: "Newsworthy bias",
              title: "Prominence skews negative",
              body: "AI summaries may reflect the most prominent information in training data or current web access - which often skews negative because newsworthy events tend to be negative.",
            },
            {
              id: "implied-authority",
              label: "Implied authority",
              title: "Confidence without verification",
              body: "AI tools often present answers with implied confidence, making them appear authoritative even when underlying sources are partial or outdated.",
            },
            {
              id: "no-click-through",
              label: "No click-through",
              title: "The summary is the impression",
              body: "A person receiving a negative AI summary about you may not click through to verify the sources - the summary itself shapes the first impression.",
            },
          ],
        },
      ],
    },
    {
      id: "training-data",
      number: "02",
      title: "The AI training data problem",
      blocks: [
        {
          type: "p",
          text: "ChatGPT and similar large language model tools have training data cutoffs - dates beyond which they have not been updated. This creates a specific reputation risk: if your reputation suffered a damaging event before the model's training cutoff, the model's answers about you may reflect that damage even if your current search presence has been fully rehabilitated.",
        },
        {
          type: "keyBox",
          variant: "warning",
          title: "Rehabilitation lag",
          text: "A person who repaired their Google reputation in 2024 may still receive negative AI responses if the model's training data includes the pre-rehabilitation content. Addressing this requires ensuring positive, authoritative content is so widespread and well-documented that it outweighs historical negative content in any model's weighted assessment.",
        },
        {
          type: "p",
          text: "This is exactly what comprehensive reputation management builds - but it must be built with AI training data in mind, not just Google ranking.",
        },
      ],
    },
    {
      id: "ai-overviews",
      number: "03",
      title: "Google AI Overviews: what they mean for your reputation",
      blocks: [
        {
          type: "p",
          text: "Google's AI Overviews (formerly Search Generative Experience) appear at the top of Google search results for many queries and provide an AI-synthesized summary before the traditional link results appear. For name and brand searches, AI Overviews increasingly appear and can shape the first impression even before a user clicks any result.",
        },
        {
          type: "p",
          text: "The sources that Google's AI Overview cites are drawn from the same authoritative, highly-ranked content that traditional Google results favor - but the synthesis process means that a mix of positive and negative sources can produce a summary that is more negative than any individual source. Reputation360 monitors AI Overviews as part of our active client management and has identified specific content strategies that improve AI Overview sentiment for client names.",
        },
      ],
    },
    {
      id: "perplexity",
      number: "04",
      title: "Perplexity and real-time AI search",
      blocks: [
        {
          type: "p",
          text: "Unlike ChatGPT's training data model, Perplexity and similar real-time AI search tools actively crawl the web as part of generating answers. This means their responses are more current - and more directly influenced by current search rankings. Improving your traditional Google search presence directly improves your Perplexity representation.",
        },
        {
          type: "p",
          text: "Perplexity is increasingly popular among sophisticated users - investors, senior executives, due diligence researchers - who prefer its citation-rich format over standard search. For clients whose audiences include these groups, Perplexity representation is particularly important.",
        },
      ],
    },
    {
      id: "four-principles",
      number: "05",
      title: "The Reputation360 AI search strategy",
      blocks: [
        {
          type: "p",
          text: "Our approach to AI search reputation is built on four principles. Select each to see how it applies.",
        },
        {
          type: "pills",
          pickerKey: "ai-search-four-principles",
          items: [
            {
              id: "dominance",
              label: "1. Multi-source dominance",
              title: "Own ten good sources, not one great one",
              body: "AI tools synthesize across sources - so owning one great source is less effective than owning ten good sources consistently saying the same positive things. The first-page ownership strategy we outlined in our guide to controlling Google results is also the foundation of AI reputation strategy. When positive information appears on LinkedIn, Wikipedia, company websites, news features, industry publications, and multiple social profiles, AI tools receive consistent positive signals. Contradictory information (some positive, some negative) produces inconsistent AI answers; consistent positive information produces reliable positive summaries.",
            },
            {
              id: "wikipedia",
              label: "2. Reference-quality content",
              title: "Wikipedia and neutral authority",
              body: "AI language models heavily weight Wikipedia and similarly authoritative reference content in their training and generation processes. For eligible clients, a well-documented Wikipedia entry is arguably more important in the AI era than it was in the traditional search era. Reference-quality content - information documented in multiple neutral, authoritative sources, linked and cross-referenced - is the gold standard that AI models trust most.",
            },
            {
              id: "fact-dense",
              label: "3. Fact-dense content",
              title: "Specificity beats vague praise",
              body: "AI models favor content that contains specific, verifiable facts: dates, figures, professional achievements, credentialed accomplishments. Thin or vague positive content ('John is a leading professional in his field') carries less weight than fact-dense content ('John's advisory work at X led to a 40% increase in Y, as reported by Z publication'). When building content for AI search reputation, specificity and verifiability matter more than they do for traditional search.",
            },
            {
              id: "schema",
              label: "4. Structured data",
              title: "Person and Organization schema",
              body: "Structured data - specifically Person schema and Organization schema markup on websites - helps AI tools correctly identify and understand who you are and what your professional identity is. A personal website or company site with well-implemented structured data provides machine-readable clarity that AI systems can use directly when generating answers about you. Reputation360 implements structured data as a standard component of personal website builds and optimizations.",
            },
          ],
        },
      ],
    },
    {
      id: "checklist",
      number: "06",
      title: "What to do right now: AI search reputation checklist",
      blocks: [
        {
          type: "steps",
          pickerKey: "ai-reputation-checklist",
          steps: [
            {
              n: 1,
              title: "Ask ChatGPT",
              body: "Using GPT-4 or later, ask what it says about your name and your business. Document the answer and note any negative framing.",
            },
            {
              n: 2,
              title: "Ask Perplexity",
              body: "Run the same query in Perplexity. Note which sources it cites - these are the pages influencing real-time AI answers today.",
            },
            {
              n: 3,
              title: "Check Google AI Overviews",
              body: "Search your professional background and brand name. Document whether an AI Overview appears and what it summarizes.",
            },
            {
              n: 4,
              title: "Assess the gap",
              body: "Compare how these tools describe you versus how you want to be described. Identify which authoritative sources are missing or inconsistent.",
            },
            {
              n: 5,
              title: "Build the fix",
              body: "Prioritize multi-source positive content, reference-quality documentation, fact-dense bios, and structured data on owned properties. Reputation360 can tell you exactly which changes to your digital presence will have the most impact on AI-generated answers.",
            },
          ],
        },
      ],
    },
    {
      id: "future",
      number: "07",
      title: "The future of AI search and reputation",
      blocks: [
        {
          type: "p",
          text: "AI search is evolving rapidly. Models are being updated more frequently. Real-time web access is becoming standard rather than exceptional. New AI search tools continue to emerge. Voice search through AI assistants - Siri, Google Assistant, Alexa, and newer conversational AI tools - is increasingly important for brand reputation in consumer markets.",
        },
        {
          type: "p",
          text: "The fundamental dynamic is consistent across these developments: AI search tools reward breadth, consistency, authority, and specificity. The more thoroughly your positive professional identity is documented across a wide range of authoritative, specific, consistent sources, the better you will be represented - in whatever form AI search takes over the coming years.",
        },
        {
          type: "keyBox",
          variant: "insight",
          title: "Same strategy, higher stakes",
          text: "This is not a new strategy - it is the same comprehensive positive presence strategy that Reputation360 has been executing for clients across the US, Canada, Australia, and Europe for seven years. The AI era makes it more important, not different.",
        },
      ],
    },
    {
      id: "ai-era-now",
      number: "08",
      title: "Reputation360 is already working in the AI era",
      blocks: [
        {
          type: "p",
          text: "The shift to AI search is not a future challenge - it is a present one. And it is one that Reputation360's comprehensive positive presence strategy is well-equipped to address. The same breadth, authority, and consistency that we build for Google search is exactly what AI tools need to represent you accurately and positively.",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "Can I ask AI tools to correct wrong information about me?",
      a: "You can submit feedback to most AI tools, but this does not reliably update the model's outputs. The most effective way to correct inaccurate AI-generated information about you is to create and promote accurate, authoritative content in the sources the AI draws from - not to engage with the AI tool directly.",
    },
    {
      id: "faq-2",
      q: "If my Google search results are positive, will my AI representation automatically be positive?",
      a: "Generally yes - particularly for real-time AI search tools like Perplexity. But there are exceptions: LLM tools with older training data may not reflect your current Google improvement; some AI tools weight Wikipedia and reference content higher than standard web pages; and AI synthesis can produce unexpected results when positive and negative sources both exist, even if the positive content dominates search rankings.",
    },
    {
      id: "faq-3",
      q: "How often should I check my AI search reputation?",
      a: "Quarterly is a reasonable baseline for most professionals and businesses. For executives and brands with high public visibility, monthly checks are appropriate. Reputation360 includes AI search monitoring in our professional monitoring programs.",
    },
    {
      id: "faq-4",
      q: "Does AI search matter more for some industries than others?",
      a: "It matters most for: high-trust professional services (finance, law, healthcare, consulting), executives and public figures who are frequently researched, brands in sectors where due diligence is thorough, and anyone whose primary audience includes technically sophisticated users who prefer AI tools to traditional search. That covers a large and growing segment of the professional world.",
    },
  ],
  cta: {
    title: "Take the next step",
    lead:
      "Find out what AI tools say about you today and what it would take to improve it. Reputation360 offers a comprehensive AI search reputation assessment.",
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
      title: "Online Reputation Management Best Practices: The Reputation360 Methodology",
      href: METHODOLOGY_PATH,
      category: "ORM Methodology",
      readTime: "18 min read",
      image: pack20Image("default"),
      imageAlt: "Team collaborating on reputation management strategy",
    },
    {
      title: "What Do Recruiters Google About You? Reputation360's Insider Report",
      href: RECRUITERS_PATH,
      category: "Job Search & Reputation",
      readTime: "12 min read",
      image: pack20Image("recruiters"),
      imageAlt: "Candidate and recruiter in a professional interview setting",
    },
  ],
};
