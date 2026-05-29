import { blogPostPath } from "../../../constants/blogPaths.js";
import { RECRUITERS_GOOGLE_FAQS } from "../blogFaqsRewritten.js";
import { BLOG_PATHS } from "../blogInternalPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "what-recruiters-google-about-you-reputation360-insider-report";
export const PATH = blogPostPath(SLUG);

const LINKEDIN_CHECKLIST_PATH = BLOG_PATHS.linkedinChecklist;
const NEGATIVE_LINKS_CASES_PATH = BLOG_PATHS.negativeLinksCases;
const SOCIAL_POSTS_PATH = BLOG_PATHS.oldSocialPosts;
const INTERVIEW_PREP_PATH = BLOG_PATHS.interviewPrep;

const TOC = [
  { id: "search-sequence", label: "01. The recruiter search sequence" },
  { id: "red-flags", label: "02. What raises red flags" },
  { id: "strong-presence", label: "03. What impresses recruiters" },
  { id: "prepare-before-search", label: "04. Prepare before you apply" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "search-sequence", label: "Search sequence" },
  { id: "red-flags", label: "Red flags" },
  { id: "strong-presence", label: "Strong presence" },
  { id: "prepare-before-search", label: "Prepare early" },
  { id: "start", label: "Next step" },
  { id: "faq", label: "FAQ" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-recruiters-google",
    slug: SLUG,
    filter: "Career, Crisis & Case Studies",
    category: "Career, Crisis & Case Studies",
    title: "What Do Recruiters Google About You? Reputation360's Insider Report",
    excerpt:
      "Recruiters run a sequence of searches, not just one. Learn what they look for, what stalls offers, and how to prepare your presence before you apply.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "12 minutes",
    image: pack20Image("recruiters"),
    imageAlt: "Candidate and recruiter in a professional interview setting",
  },
  seoTitle:
    "What Recruiters Google About You | Reputation360",
  metaDescription:
    "Recruiters Google every candidate. Reputation360's insider report reveals what they find, what raises red flags, and how to prepare your presence.",
  hero: {
    badge: "Insider Report",
    title:
      "What Do Recruiters Google About You? Reputation360's Insider Report",
    lead:
      "Roughly seven in ten employers use social and search screening; for senior and high-trust roles the practice is effectively universal. Before an offer, someone types your name - this is what they run and what they conclude.",
    meta: [
      { value: "70%", label: "Employers who screen online" },
      { value: "100%", label: "Executive roles screened" },
      { value: "1,100+", label: "Clients served" },
    ],
  },
  introBlocks: [
    {
      type: "p",
      text: "According to research by CareerBuilder, 70% of employers use social media and online searches to screen candidates before making hiring decisions. That screen shapes a first impression before you speak to anyone - which is why that first result carries so much weight. For senior roles - executive positions, board appointments, high-trust professional roles - that figure is effectively 100%. Before any offer is extended, someone is typing your name into a search bar.",
      parts: [
        { text: "According to " },
        {
          text: "research by CareerBuilder",
          href: "https://www.prnewswire.com/news-releases/more-than-half-of-employers-have-found-content-on-social-media-that-caused-them-not-to-hire-a-candidate-according-to-recent-careerbuilder-survey-300694437.html",
          external: true,
        },
        {
          text: ", 70% of employers use social media and online searches to screen candidates before making hiring decisions. That screen shapes a first impression before you speak to anyone. For senior roles - executive positions, board appointments, high-trust professional roles - that figure is effectively 100%. Before any offer is extended, someone is typing your name into a search bar.",
        },
      ],
    },
    {
      type: "p",
      text: "At Reputation360, we have spent seven years working with more than 1,100 professionals across the US, Canada, Australia, and Europe who discovered - often too late - that what showed up in that search was costing them opportunities. This is what we have learned about how recruiters actually conduct online research.",
    },
    {
      type: "lead",
      label: "What this report covers",
      text: "The four-search sequence recruiters use, the content that most often stalls hiring, what strong page-one presence looks like at senior levels, and how to prepare before you start applying.",
    },
  ],
  toc: TOC,
  tocTitle: "What You'll Learn",
  tocAriaLabel: "What you'll learn",
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
          text: "Recruiters and hiring managers do not conduct a single search. They conduct a sequence of searches, each designed to answer a specific question about you. For director-level roles and above, this sequence is standard practice in HR and talent acquisition - especially at executive search firms. Select each step below to see what they look for and what can go wrong.",
        },
        {
          type: "pills",
          pickerKey: "recruiter-search-sequence",
          items: [
            {
              id: "full-name",
              label: "Full name",
              title: "Search 1: Your full name",
              body: "The first search is straightforward: your full name. This surfaces your most prominent digital identity. Recruiters are looking for a strong LinkedIn profile, professional website or portfolio, news coverage (ideally positive), and overall professional credibility. Red flags at this stage: nothing coming up at all (suggests you are hiding something or have no professional presence), negative news coverage, court records, or consumer complaint content in the top five results.",
            },
            {
              id: "name-company",
              label: "Name + company",
              title: "Search 2: Your name plus company",
              body: "After the general name search, most recruiters search your name plus your current or most recent employer. This helps them verify the information on your resume and surface any news about your work in that context. It also sometimes surfaces internal company reviews on platforms like Glassdoor if you have been mentioned.",
            },
            {
              id: "past-companies",
              label: "Past employers",
              title: "Search 3: Your name plus previous companies",
              body: "Senior recruiters and executive search firms will search your name in combination with previous companies, looking for news coverage, public statements, or any issues associated with your tenure. This is where old news articles about a company during your watch - layoffs, regulatory issues, product failures - can resurface.",
            },
            {
              id: "social-direct",
              label: "Social review",
              title: "Search 4: Direct social media review",
              body: "Most recruiters also visit your LinkedIn directly (in addition to finding it in search), check Twitter/X for any public activity, and may look at any public Facebook or Instagram content. They are looking for professionalism, consistency between your online presence and resume, and any content that would create concerns about cultural fit or judgment.",
            },
          ],
        },
        {
          type: "keyBox",
          variant: "tip",
          title: "Run the sequence yourself",
          text: "In an incognito window, run all four searches before your next application. Screenshot page one for each. That is your recruiter's view - not what you hope they see.",
        },
      ],
    },
    {
      id: "red-flags",
      number: "02",
      title: "What raises red flags",
      blocks: [
        {
          type: "p",
          text: "Based on our work with professionals across multiple industries and geographies, the online content that most consistently causes hiring process stalls includes the following.",
        },
        {
          type: "bullets",
          items: [
            "News coverage of legal proceedings or regulatory inquiries, even when resolved.",
            "Highly visible negative reviews on employer review sites suggesting a pattern of interpersonal problems.",
            {
              text: "Public social media posts containing strong political, controversial, or unprofessional content - including old social media posts that still appear in Google.",
              parts: [
                {
                  text: "Public social media posts containing strong political, controversial, or unprofessional content - including ",
                },
                {
                  text: "old social media posts that still appear in Google",
                  href: SOCIAL_POSTS_PATH,
                },
                { text: "." },
              ],
            },
            "Consumer complaint content about businesses you have run.",
            "Discrepancies between your online presence and your resume.",
          ],
        },
        {
          type: "p",
          text: "What recruiters do not do is ignore what they find. Even if they like your qualifications, a concerning search result can quietly stall a process - which is when suppressing negative search results becomes urgent. Most candidates never know it happened; cases we've resolved show how page one can change when professionals act early.",
          parts: [
            {
              text: "What recruiters do not do is ignore what they find. Even if they like your qualifications, a concerning search result can quietly stall a process - which is when ",
            },
            {
              text: "suppressing negative search results",
              href: BLOG_PATHS.suppressFramework,
            },
            {
              text: " becomes urgent. Most candidates never know it happened; ",
            },
            {
              text: "cases we've resolved",
              href: "/case-studies",
            },
            { text: " show how page one can change when professionals act early." },
          ],
        },
      ],
    },
    {
      id: "strong-presence",
      number: "03",
      title: "What a strong online presence looks like to a recruiter",
      blocks: [
        {
          type: "p",
          text: "Recruiters are not just looking for the absence of problems - they are actively impressed by strong positive online presence. At senior levels, search results are increasingly a differentiator, not just a hygiene factor.",
        },
        {
          type: "bullets",
          items: [
            {
              text: "A comprehensive, well-written LinkedIn profile that confirms and expands on your resume - start with optimizing your LinkedIn profile for search.",
              parts: [
                {
                  text: "A comprehensive, well-written LinkedIn profile that confirms and expands on your resume - start with ",
                },
                {
                  text: "optimizing your LinkedIn profile for search",
                  href: LINKEDIN_CHECKLIST_PATH,
                },
                { text: "." },
              ],
            },
            "Positive news coverage or industry recognition.",
            "Published articles or thought leadership content.",
            "Clean and professional public social presence.",
            "A personal or professional website that tells a coherent career story.",
          ],
        },
        {
          type: "keyBox",
          variant: "insight",
          title: "Proactive transparency",
          text: "You can, and in some situations should, address a known issue proactively: \"I want to be transparent about X, which you may find if you search my name.\" That demonstrates self-awareness and gives you the opportunity to provide context. Reputation360 can advise on whether and how to approach this in your specific situation.",
        },
      ],
    },
    {
      id: "prepare-before-search",
      number: "04",
      title: "How to prepare your online presence before a job search",
      blocks: [
        {
          type: "p",
          text: "The best time to address your online reputation is before you start a job search, not after a process stalls. Here is what Reputation360 recommends.",
        },
        {
          type: "steps",
          pickerKey: "recruiter-prep-steps",
          steps: [
            {
              n: 1,
              title: "Google yourself thoroughly",
              body: "Search your full name, your name plus each of your past companies, and your name plus your city. Make a list of everything you find.",
            },
            {
              n: 2,
              title: "Label each result",
              body: "For every URL on page one and page two, ask: would this give a recruiter pause? Tag each as helpful, neutral, or concerning.",
            },
            {
              n: 3,
              title: "Maximize LinkedIn",
              body: "Optimize your LinkedIn profile to the fullest extent possible. This is the fastest lever for name-search improvement.",
            },
            {
              n: 4,
              title: "Clean up social media",
              body: "Address any obviously problematic public social content. Privatize personal accounts where appropriate.",
            },
            {
              n: 5,
              title: "Engage support early for serious issues",
              body: "If negative results would affect a senior search, start with fixing your reputation before an interview - or engage a reputation professional before you begin applying, not after a process stalls.",
              parts: [
                {
                  text: "If negative results would affect a senior search, start with ",
                },
                {
                  text: "fix your reputation before an interview",
                  href: INTERVIEW_PREP_PATH,
                },
                {
                  text: " - or engage a reputation professional before you begin applying, not after a process stalls.",
                },
              ],
            },
          ],
        },
        {
          type: "stats",
          items: [
            { value: "2-4 weeks", label: "LinkedIn and quick profile wins" },
            { value: "3-6 months", label: "Serious suppression timelines" },
            { value: "6 months", label: "Lead time for executive search" },
          ],
        },
        {
          type: "p",
          text: "The ranges above are typical windows, not guarantees. Our guide on realistic suppression timelines explains how asset mix and negative severity shift those clocks.",
          parts: [
            {
              text: "The ranges above are typical windows, not guarantees. Our guide on ",
            },
            {
              text: "realistic suppression timelines",
              href: BLOG_PATHS.repairTimeline,
            },
            {
              text: " explains how asset mix and negative severity shift those clocks.",
            },
          ],
        },
        {
          type: "lead",
          label: "Timing matters",
          text: "If you are planning a senior job search, we recommend beginning at least six months before you start actively applying when page-one negatives are involved.",
        },
      ],
    },
  ],
  faqs: RECRUITERS_GOOGLE_FAQS,
  cta: {
    title: "Take the next step",
    lead:
      "Find out exactly what a recruiter finds when they search your name. We will map your current results and show you what needs to change.",
  },
  relatedReading: [
    {
      title: "LinkedIn Profile Optimization for Search Results: The Reputation360 Checklist",
      href: LINKEDIN_CHECKLIST_PATH,
      category: "LinkedIn & Search",
      readTime: "15 min read",
      image: pack20Image("linkedin"),
      imageAlt: "Professional working on a laptop with LinkedIn branding context",
    },
    {
      title: "Negative Links That Cost Jobs and Deals: Real Cases Reputation360 Solved",
      href: NEGATIVE_LINKS_CASES_PATH,
      category: "Case Studies",
      readTime: "14 min read",
      image: pack20Image("cases"),
      imageAlt: "Professionals in a meeting discussing career outcomes",
    },
    {
      title: "Dealing With Old Social Media Posts That Show Up in Google",
      href: SOCIAL_POSTS_PATH,
      category: "Social & Search",
      readTime: "16 min read",
      image: pack20Image("social"),
      imageAlt: "Social media apps on a smartphone screen",
    },
  ],
};
