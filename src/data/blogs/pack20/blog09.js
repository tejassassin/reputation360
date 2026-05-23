import { blogPostPath } from "../../../constants/blogPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "linkedin-profile-optimization-search-results-reputation360-checklist";
export const PATH = blogPostPath(SLUG);

const TOC = [
  { id: "why-linkedin-ranks", label: "01. Why LinkedIn ranks for name searches" },
  { id: "optimization-checklist", label: "02. The optimization checklist" },
  { id: "profile-ecosystem", label: "03. Beyond LinkedIn: the profile ecosystem" },
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
    id: "pack20-linkedin-checklist",
    slug: SLUG,
    filter: "Personal",
    category: "LinkedIn & Search",
    title:
      "LinkedIn Profile Optimization for Search Results: The Reputation360 Checklist",
    excerpt:
      "LinkedIn is often the fastest path to page one. A field-by-field checklist to rank for your name and push negative results down.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "11 minutes",
    image: pack20Image("linkedin"),
    imageAlt: "Professional working on a laptop with LinkedIn branding context",
  },
  seoTitle:
    "LinkedIn Profile Optimization for Google Search | Reputation360",
  metaDescription:
    "LinkedIn is your most powerful reputation asset. Reputation360's checklist shows how to make it rank #1 for your name and push negative results down.",
  hero: {
    badge: "LinkedIn Checklist",
    title: "LinkedIn Profile Optimization for Search Results",
    lead:
      "If one action produces fast, reliable improvement for a personal name search, it is a fully optimized LinkedIn profile. High domain authority, quick indexing, and full control make it the first move in most suppression campaigns.",
  },
  toc: TOC,
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "why-linkedin-ranks",
      number: "01",
      title: "Why LinkedIn ranks so well for name searches",
      blocks: [
        {
          type: "p",
          text: "LinkedIn carries exceptional domain authority. Google treats person-specific LinkedIn URLs as credible matches for name queries. A complete, keyword-aware profile often lands in the top three positions - and every positive slot you hold is one a negative cannot occupy.",
        },
        {
          type: "stats",
          items: [
            { value: "98", label: "Domain authority (typical scale)" },
            { value: "2-4 wk", label: "Time to top-3 movement" },
            { value: "50", label: "Skills to add (max)" },
          ],
        },
      ],
    },
    {
      id: "optimization-checklist",
      number: "02",
      title: "The Reputation360 LinkedIn optimization checklist",
      blocks: [
        {
          type: "p",
          text: "Work through each item. Skipping headline or About sections leaves ranking power on the table.",
        },
        {
          type: "accordion",
          items: [
            {
              id: "li-photo-banner",
              title: "Photo, banner, and custom URL",
              body: "Use a professional headshot and on-brand banner. Set linkedin.com/in/your-name (add middle initial or credential if needed) for an exact-match URL signal.",
            },
            {
              id: "li-headline-about",
              title: "Headline and About (500+ words)",
              body: "Headline: title, specialty, sector - no vague labels. About: first-person narrative with full name, geography, expertise, and outcomes. Both fields are heavily indexed.",
            },
            {
              id: "li-experience-skills",
              title: "Experience, skills, recommendations",
              body: "3-5 sentences per role with real accomplishments. Add up to 50 skills; prioritize top 10. Secure five-plus specific recommendations mentioning your name and work.",
            },
            {
              id: "li-activity-network",
              title: "Activity, location, and network",
              body: "Post at least twice weekly. Complete location and industry fields. Grow toward 500+ relevant connections to boost internal visibility and post reach.",
            },
          ],
        },
      ],
    },
    {
      id: "profile-ecosystem",
      number: "03",
      title: "Beyond LinkedIn: the profile ecosystem",
      blocks: [
        {
          type: "p",
          text: "LinkedIn works best alongside Crunchbase, X, company About pages, and industry directories - each another indexed positive URL. If LinkedIn is not the right fit, the same ranking principles apply across personal sites, press, and alternate professional platforms.",
        },
        {
          type: "keyBox",
          variant: "tip",
          title: "Privacy-conscious clients",
          body: "Strong outcomes are possible without LinkedIn using websites, press, and other high-authority profiles. The checklist logic - completeness, keywords, activity, links - transfers to whichever platforms you choose.",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "How quickly will an optimized profile rank?",
      a: "Most people see top-three placement for exact name searches within 2-4 weeks after a full optimization. Brand-new profiles may need slightly longer to accumulate signals.",
    },
    {
      id: "faq-2",
      q: "Can LinkedIn outrank major news sites?",
      a: "Often yes for personal name queries, especially combined with other positive assets. News remains harder but LinkedIn is a direct competitor on page one.",
    },
    {
      id: "faq-3",
      q: "What if I do not want a LinkedIn presence?",
      a: "Build suppression through personal sites, press, directories, and other platforms using the same completeness and keyword discipline.",
    },
  ],
  cta: {
    title: "Audit your profile like a recruiter",
    lead:
      "Search your exact name in an incognito window, open your LinkedIn URL, and compare what Google shows versus what your profile delivers. Close the gaps field by field.",
  },
  relatedSlugs: [
    "what-recruiters-google-about-you-reputation360-insider-report",
    "rank-positive-content-above-negative-results-reputation360-strategy",
    "old-social-media-posts-showing-up-google-reputation360-guide",
  ],
};
