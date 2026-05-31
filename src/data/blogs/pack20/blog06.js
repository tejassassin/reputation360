import { blogPostPath } from "../../../constants/blogPaths.js";
import { NEGATIVE_LINKS_CASES_FAQS } from "../blogFaqsRewritten.js";
import { BLOG_PATHS } from "../blogInternalPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "negative-links-cost-jobs-deals-real-cases-reputation360";
export const PATH = blogPostPath(SLUG);

const SUPPRESS_FRAMEWORK_PATH = BLOG_PATHS.suppressFramework;
const REMOVAL_VS_SUPPRESSION_PATH = BLOG_PATHS.removalVsSuppression;
const RANK_POSITIVE_PATH = BLOG_PATHS.rankPositive;
const SERVICES_PATH = "/services";

const TOC = [
  { id: "invisible-cost", label: "01. The invisible cost of negative links" },
  { id: "case-patterns", label: "02. Four case patterns we see repeatedly" },
  { id: "pattern-across-cases", label: "03. The pattern across every case" },
  { id: "what-works", label: "04. What actually produced results" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "invisible-cost", label: "Invisible cost" },
  { id: "case-patterns", label: "Case patterns" },
  { id: "pattern-across-cases", label: "Common pattern" },
  { id: "what-works", label: "What works" },
  { id: "start", label: "Next step" },
  { id: "faq", label: "FAQ" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-negative-links-cases",
    slug: SLUG,
    filter: "Career, Crisis & Case Studies",
    category: "Career, Crisis & Case Studies",
    title: "Negative Links That Cost Jobs and Deals: Real Cases Reputation360 Solved",
    excerpt:
      "Deals stall and offers pause when search results raise doubt. Representative cases show how structured suppression changed outcomes.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "14 minutes",
    image: pack20Image("cases"),
    imageAlt: "Professionals in a meeting discussing career outcomes",
  },
  seoTitle:
    "Negative Links That Cost Jobs and Deals | Reputation360",
  metaDescription:
    "Negative results cost real opportunities. Reputation360 shares the cases we solve and the results achieved for clients across the US and beyond.",
  hero: {
    badge: "Real Outcomes",
    title:
      "Negative Links That Cost Jobs and Deals: Real Cases Reputation360 Solved",
    lead:
      "No one tells you the Google result killed the deal. The email stops, the offer goes on hold, and the link between search and opportunity stays invisible. These patterns appear again and again across our client work.",
    meta: [
      { value: "97%", label: "Suppression success rate" },
      { value: "1,100+", label: "Clients served" },
      { value: "7", label: "Years of experience" },
    ],
  },
  introBlocks: [
    {
      type: "p",
      text: "No one sits across a table and tells you that the Google result is why the deal fell through. The email just stops coming. The job offer is put on hold. The investment call that was going well suddenly ends with we need to take some time to review. The connection between what shows up in a search and what does not happen in your career or business is almost always invisible - but it is real.",
    },
    {
      type: "p",
      text: "After seven years and more than 1,100 clients served across the US, Canada, Australia, and Europe, Reputation360 has seen exactly how this plays out. The situations differ by country and industry; the framework that resolves them stays consistent. CareerBuilder research documents how widely employers use search screening before offers.",
      parts: [
        {
          text: "After seven years and more than 1,100 clients served across the US, Canada, Australia, and Europe, Reputation360 has seen exactly how this plays out. The situations differ by country and industry; the framework that resolves them stays consistent. ",
        },
        {
          text: "CareerBuilder research",
          href: "https://www.careerbuilder.com",
          external: true,
        },
        {
          text: " documents how widely employers use search screening before offers.",
        },
      ],
    },
    {
      type: "lead",
      label: "What this guide covers",
      text: "You will see four representative case types, what we did in each engagement, the timelines and positions that moved, and why structured suppression - not hoping the problem fades - is what produced results.",
    },
  ],
  toc: TOC,
  tocTitle: "What You'll Learn",
  tocAriaLabel: "What you'll learn",
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "invisible-cost",
      number: "01",
      title: "The invisible cost of negative links",
      blocks: [
        {
          type: "p",
          text: "Warm introductions go cold. Due diligence pauses. Candidates rarely learn a search result was the reason. What they notice instead is momentum dying without explanation - a finalist role that stalls, a partnership review that never schedules, a recruiter who was enthusiastic and then goes quiet.",
        },
        {
          type: "p",
          text: "Decision-makers Google names early in the process. One negative URL in position 2 or 3 can outweigh years of résumé credibility. The content is often factually accurate but context-poor: old news, resolved inquiries, past disputes, or someone else who shares your name. For hiring and deal contexts, see what recruiters search for when they run that sequence.",
          parts: [
            {
              text: "Decision-makers Google names early in the process. One negative URL in position 2 or 3 can outweigh years of résumé credibility. The content is often factually accurate but context-poor: old news, resolved inquiries, past disputes, or someone else who shares your name. For hiring and deal contexts, see ",
            },
            {
              text: "what recruiters search for",
              href: BLOG_PATHS.recruitersReport,
            },
            { text: " when they run that sequence." },
          ],
        },
        {
          type: "stats",
          items: [
            { value: "Pos. 2", label: "Where old news often ranks" },
            { value: "4.8→3.1", label: "Rating hit from fake reviews" },
            { value: "Page 2", label: "Where harm was displaced" },
          ],
        },
      ],
    },
    {
      id: "case-patterns",
      number: "02",
      title: "Four case patterns we see repeatedly",
      blocks: [
        {
          type: "p",
          text: "Select a case type below for a representative engagement: the search problem, what we built, and how positions changed over time. Names and identifying details are omitted; the mechanics are what repeat across our work.",
        },
        {
          type: "pills",
          pickerKey: "negative-links-case-patterns",
          items: [
            {
              id: "executive",
              label: "Executive inquiry",
              title: "Case Type 1: The executive blocked by an old inquiry",
              body: "A senior operations executive in the US had been through a regulatory inquiry several years prior. The inquiry was resolved without findings or penalties, but the news coverage remained on a major financial news site. When his name was searched, that article appeared in position 2, immediately below his LinkedIn profile. He had been a finalist for a C-suite role at a publicly traded company. The process stalled during due diligence. He suspected the article was the reason. Reputation360 ran a nine-month program: full audit of every indexed asset, two press releases on recent advisory work, expert placements on two finance platforms, an optimized personal website, LinkedIn rebuilt headline-to-skills, Twitter/X and industry forum presence, and professional directory listings - each maintained and monitored, not published once and left static. At 90 days the article dropped to position 8. At five months it was on page two. Six months after we began, he was contacted for a comparable C-suite opportunity and due diligence moved forward without interruption.",
            },
            {
              id: "reviews",
              label: "Fake reviews",
              title: "Case Type 2: The business owner hurt by fake reviews",
              body: "A small business owner in Canada received a coordinated wave of negative reviews across multiple platforms, likely from competitor activity. The reviews were demonstrably inaccurate, but platforms were slow to act. Average rating fell from 4.8 to 3.1, and a Google search for the business name returned review aggregators on page one. We ran parallel tracks over ten months. Track one: documented evidence for each fake review - cross-referencing profiles, posting patterns, and timeline anomalies - with formal disputes and full follow-up through resolution. Track two: rebuilt Google Business Profile, regional news features on community involvement, and a friction-free review generation program for genuine customers. Brand presences on Facebook, Instagram, and LinkedIn added positive signals; social monitoring flagged new negative content immediately. At 120 days the average rating recovered to 4.3. At ten months it stood at 4.7. Two of three negative review sites moved to page two. Eleven fake reviews were formally removed.",
            },
            {
              id: "name-collision",
              label: "Name collision",
              title: "Case Type 3: A professional whose name shared a criminal record",
              body: "A professional in Australia shared a full name with someone subject to criminal proceedings. When her name was searched, court documents and news about the other person appeared on page one. Every introduction was followed by an awkward conversation about someone she had nothing to do with. There was no wrongdoing to dispute and no content to remove - only building a presence dominant enough to structurally displace the unrelated results. Over eight months we built a personal website optimized for her full name, comprehensively rebuilt LinkedIn for indexing, developed and published a Wikipedia-eligible biography through the full review process, distributed three press releases and placed two industry byline features, and built optimized presences on LinkedIn, Twitter/X, Facebook, and professional Instagram with consistent posting and cross-linking. Weekly monitoring tracked position movement. By month eight her positive assets occupied positions 1 through 7 for her full name search. The court-related content for the other individual moved to page two, where it has remained.",
            },
            {
              id: "arrest",
              label: "Old arrest story",
              title: "Case Type 4: The job seeker with a decade-old mistake",
              body: "A marketing professional in the UK had been arrested for a minor offense a decade earlier. Charges were dropped, but a local news article about the arrest continued to rank for his name and had cost him at least two job opportunities he was aware of. The article was factually accurate, so removal was not realistic. Suppression required a professional presence substantial enough to outrank years of indexing history. Over eleven months we built a personal website around his marketing expertise, a professional blog with consistent industry articles, three expert media placements, fully restructured LinkedIn, maintained Twitter/X, and cross-linked directory and content platform profiles. Weekly monitoring tracked search and social; strategy evolved as positions shifted. At 120 days the news article moved to position 9. At six months it was on page two. Within eleven months he accepted a senior role at a major agency.",
            },
          ],
        },
        {
          type: "compare",
          pickerKey: "executive-case-timeline",
          items: [
            {
              id: "before",
              title: "Before engagement",
              tone: "before",
              body: "Resolved regulatory inquiry still ranked in position 2 below LinkedIn. C-suite due diligence stalled. No coordinated positive assets beyond a static profile.",
            },
            {
              id: "after",
              title: "After nine months",
              tone: "after",
              body: "Article on page two. Press, website, LinkedIn, and social footprint maintained and monitored. Comparable C-suite process advanced through due diligence without interruption.",
            },
          ],
        },
      ],
    },
    {
      id: "pattern-across-cases",
      number: "03",
      title: "The pattern across all these cases",
      blocks: [
        {
          type: "p",
          text: "In every situation, the person involved knew the negative result was costing opportunities but had no clear path to address it. They had tried platform disputes or ignored the problem hoping it would resolve itself. None of those approaches produced ranking movement on their own.",
        },
        {
          type: "p",
          text: "What produced results was a structured, professional suppression strategy executed by people who understand both SEO mechanics and reputation dynamics. The cases above are representative - situations differ across the US, Canada, Australia, and Europe, but the framework that resolves them is consistent.",
          parts: [
            { text: "What produced results was a " },
            {
              text: "suppression strategy",
              href: BLOG_PATHS.suppressProfessionals,
            },
            {
              text: " executed by people who understand both SEO mechanics and reputation dynamics. The cases above are representative - situations differ across the US, Canada, Australia, and Europe, but the framework that resolves them is consistent.",
            },
          ],
        },
        {
          type: "bullets",
          items: [
            "Audit everything indexed for the name before choosing tactics.",
            "Build multiple authoritative assets in parallel, not one blog post and hope.",
            "Maintain and refresh assets so search engines see ongoing relevance.",
            {
              text: "Use reputation monitoring weekly and adjust when positions shift or new URLs appear.",
              parts: [
                { text: "Use " },
                {
                  text: "reputation monitoring",
                  href: BLOG_PATHS.monitoring,
                },
                {
                  text: " weekly and adjust when positions shift or new URLs appear.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "what-works",
      number: "04",
      title: "What actually produced results",
      blocks: [
        {
          type: "p",
          text: "Platform disputes alone, passive waiting, or one-off profile updates rarely moved page-one results. Structured suppression - audit, asset creation, legitimate links, continuous monitoring - did. That holds whether the underlying story is accurate, outdated, or false.",
        },
        {
          type: "keyBox",
          variant: "insight",
          title: "Accurate but unfair content",
          text: "Most engagements involve factually accurate but context-poor material: old news, resolved legal matters, past business disputes. Suppression works whether the original content is true or false - because page one is what decision-makers see.",
        },
        {
          type: "lead",
          label: "Where to start",
          text: "Search your full name in an incognito window, list every negative URL on page one, and note the stakes attached to each (job, deal, partnership, or public role). That map is the baseline for a realistic strategy conversation.",
        },
      ],
    },
  ],
  faqs: NEGATIVE_LINKS_CASES_FAQS,
  cta: {
    title: "Start Managing Your Online Reputation Today",
    lead:
      "Describe the negative link and what it is costing you. We will assess what movement is realistic and on what timeline through our Online Reputation Management services.",
    leadParts: [
      {
        text: "Describe the negative link and what it is costing you. We will assess what movement is realistic and on what timeline through ",
      },
      {
        text: "our Online Reputation Management services",
        href: SERVICES_PATH,
      },
      { text: "." },
    ],
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
      title: "The Reputation360 Method: Removal vs. Suppression (Which Actually Works?)",
      href: REMOVAL_VS_SUPPRESSION_PATH,
      category: "Removal vs. Suppression",
      readTime: "18 min read",
      image: pack20Image("removal"),
      imageAlt: "Legal scales representing removal and compliance decisions",
    },
    {
      title: "How to Rank Positive Content Above Negative Results",
      href: RANK_POSITIVE_PATH,
      category: "Content Strategy",
      readTime: "18 min read",
      image: pack20Image("rank"),
      imageAlt: "Professional reviewing content performance on a laptop",
    },
  ],
};
