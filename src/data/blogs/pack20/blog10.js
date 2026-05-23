import { blogPostPath } from "../../../constants/blogPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "what-recruiters-google-about-you-reputation360-insider-report";
export const PATH = blogPostPath(SLUG);

const TOC = [
  { id: "search-sequence", label: "01. The recruiter search sequence" },
  { id: "red-flags", label: "02. What raises red flags" },
  { id: "strong-presence", label: "03. What impresses recruiters" },
  { id: "prepare-before-search", label: "04. Prepare before you apply" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  ...TOC,
  { id: "start", label: "Next step" },
  { id: "faq", label: "FAQ" },
  { id: "related", label: "Related reading" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-recruiters-google",
    slug: SLUG,
    filter: "Personal",
    category: "Job Search & Reputation",
    title: "What Do Recruiters Google About You? Reputation360's Insider Report",
    excerpt:
      "Recruiters run a sequence of searches, not just one. Learn what they look for, what stalls offers, and how to prepare your presence before you apply.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "8 minutes",
    image: pack20Image("recruiters"),
    imageAlt: "Candidate and recruiter in a professional interview setting",
  },
  seoTitle:
    "What Recruiters Google About You | Reputation360",
  metaDescription:
    "Recruiters Google every candidate. Reputation360's insider report reveals what they find, what raises red flags, and how to prepare your presence.",
  hero: {
    badge: "Insider Report",
    title: "What Do Recruiters Google About You?",
    lead:
      "Roughly seven in ten employers use social and search screening; for senior and high-trust roles the practice is effectively universal. Before an offer, someone types your name - this is what they run and what they conclude.",
  },
  toc: TOC,
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "search-sequence",
      number: "01",
      title: "The recruiter search sequence",
      blocks: [
        {
          type: "p",
          text: "Recruiters do not stop at one query. They run a sequence, each answering a different risk question.",
        },
        {
          type: "steps",
          pickerKey: "recruiter-search-sequence",
          steps: [
            {
              n: 1,
              title: "Full name",
              body: "Baseline identity: LinkedIn, website, news, court or complaint content in the top five. Empty or alarming page one is a problem either way.",
            },
            {
              n: 2,
              title: "Name plus current company",
              body: "Verifies resume claims and surfaces company-linked news or Glassdoor mentions tied to your tenure.",
            },
            {
              n: 3,
              title: "Name plus past employers",
              body: "Executive search especially: layoffs, regulatory issues, or product failures from prior roles can resurface.",
            },
            {
              n: 4,
              title: "Direct social review",
              body: "LinkedIn depth, public X activity, and any visible Facebook or Instagram - checked for professionalism and consistency with the resume.",
            },
          ],
        },
      ],
    },
    {
      id: "red-flags",
      number: "02",
      title: "What raises red flags",
      blocks: [
        {
          type: "bullets",
          items: [
            "News about legal or regulatory matters, even when resolved",
            "Visible negative employer reviews suggesting interpersonal patterns",
            "Public controversial or unprofessional social posts",
            "Consumer complaints about businesses you led",
            "Resume inconsistencies versus online profiles",
          ],
        },
        {
          type: "p",
          text: "Recruiters rarely ignore concerning results. You may get a direct question - or quiet disqualification without feedback.",
        },
      ],
    },
    {
      id: "strong-presence",
      number: "03",
      title: "What a strong online presence looks like",
      blocks: [
        {
          type: "p",
          text: "At senior levels, strong search is a differentiator, not hygiene. Recruiters notice comprehensive LinkedIn, positive press, published thought leadership, coherent career storytelling on a personal site, and clean public social tone.",
        },
        {
          type: "keyBox",
          variant: "insight",
          title: "Proactive transparency",
          body: "For known issues, controlled context - 'You may see X; here is the accurate background' - can beat discovery without explanation. Strategy depends on severity and timing.",
        },
      ],
    },
    {
      id: "prepare-before-search",
      number: "04",
      title: "Prepare before you start applying",
      blocks: [
        {
          type: "p",
          text: "Google your full name, name plus each past employer, and name plus city. Label every result: helpful, neutral, or concerning. Maximize LinkedIn, fix obvious social issues, and engage reputation support before a senior search if serious negatives sit on page one.",
        },
        {
          type: "p",
          text: "LinkedIn and quick profile wins can show in 2-4 weeks. Suppressing serious negatives often needs 3-6 months for meaningful page-one change - start at least six months before a planned executive search when possible.",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "At what level is deep online research standard?",
      a: "Common from senior individual contributor upward; essentially universal for executive and board roles.",
    },
    {
      id: "faq-2",
      q: "Can I ask recruiters what they found?",
      a: "Sometimes. Proactive, factual disclosure of a known issue can demonstrate judgment when done carefully.",
    },
    {
      id: "faq-3",
      q: "How long to improve before a job search?",
      a: "Quick wins in weeks; serious suppression in months. Plan ahead for high-stakes searches.",
    },
  ],
  cta: {
    title: "Search yourself like a recruiter",
    lead:
      "Run the four-step sequence in incognito, screenshot page one, and fix or outrank anything you would not want explained in a final-round interview.",
  },
  relatedSlugs: [
    "linkedin-profile-optimization-search-results-reputation360-checklist",
    "old-social-media-posts-showing-up-google-reputation360-guide",
    "negative-links-cost-jobs-deals-real-cases-reputation360",
  ],
};
