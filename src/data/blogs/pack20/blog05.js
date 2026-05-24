import { blogPostPath } from "../../../constants/blogPaths.js";
import { REMOVE_NEGATIVE_SEARCH_RESULTS_PATH } from "../removeNegativeSearchResultsGuide.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "old-social-media-posts-showing-up-google-reputation360-guide";
export const PATH = blogPostPath(SLUG);

const SUPPRESS_FRAMEWORK_PATH = blogPostPath(
  "how-to-suppress-negative-search-results-reputation360-framework",
);

const REMOVAL_VS_SUPPRESSION_PATH = blogPostPath(
  "removal-vs-suppression-which-actually-works-reputation360",
);

const RANK_POSITIVE_PATH = blogPostPath(
  "rank-positive-content-above-negative-results-reputation360-strategy",
);

const TOC = [
  { id: "why-posts-appear", label: "01. Why old posts still appear in Google" },
  { id: "platform-cleanup", label: "02. Platform-by-platform cleanup" },
  { id: "url-removal-tool", label: "03. Google's URL removal tool" },
  { id: "third-party-content", label: "04. Content on someone else's account" },
  { id: "when-suppression", label: "05. When suppression is the smarter move" },
  { id: "prevention", label: "06. Prevention and ongoing hygiene" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "why-posts-appear", label: "Why posts persist" },
  { id: "platform-cleanup", label: "Your own accounts" },
  { id: "url-removal-tool", label: "URL removal tool" },
  { id: "third-party-content", label: "Others' accounts" },
  { id: "when-suppression", label: "Suppression strategy" },
  { id: "prevention", label: "Prevention" },
  { id: "start", label: "Next step" },
  { id: "faq", label: "FAQ" },
  { id: "related", label: "Related reading" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-social-posts-google",
    slug: SLUG,
    filter: "Suppression & Removal",
    category: "Suppression & Removal",
    title:
      "Dealing With Old Social Media Posts That Show Up in Google: The Reputation360 Guide",
    excerpt:
      "Deleted posts can linger in search. Learn platform controls, URL removal, third-party posts, and when to suppress instead of waiting for de-indexing.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "16 minutes",
    image: pack20Image("socialCleanup"),
    imageAlt: "Social media apps on a smartphone screen",
  },
  seoTitle:
    "Old Social Media Posts in Google: What to Do | Reputation360",
  metaDescription:
    "Old social media posts showing in Google? Reputation360's guide covers platform deletion, privacy settings, and when suppression is the smarter move.",
  hero: {
    badge: "Social & Google",
    title: "Old Social Media Posts That Show Up in Google",
    lead:
      "Something you posted years ago - or something posted about you on another account - can still rank for your name. This guide covers what you control, what you cannot, and when to build positive results instead of waiting for caches to clear.",
    meta: [
      { value: "1,100+", label: "Clients served" },
      { value: "5", label: "Major platforms covered" },
      { value: "7", label: "Years of experience" },
    ],
  },
  introBlocks: [
    {
      type: "p",
      text: "Something you posted eight years ago - a strong political opinion, a careless joke, an argument in a public thread - is now appearing in Google search results when someone types your name. It happens more often than most people realize, and it creates a specific kind of reputation problem: the content is technically yours, it may have been deleted from the platform, yet it persists in search.",
    },
    {
      type: "p",
      text: "But there is a second, equally damaging scenario that gets far less attention: content posted about you on someone else's account. You did not write it. You cannot delete it. And it is sitting on the first page of your name search. At Reputation360, we work with individuals and professionals across the US, Canada, Australia, and Europe on both problems - seven years of experience, more than 1,100 clients served.",
      parts: [
        {
          text: "But there is a second, equally damaging scenario that gets far less attention: ",
        },
        {
          text: "content posted about you on someone else's account",
          href: "https://www.thereputation360.com/blog/social-media-reputation-management-multi-platform-strategy-reputation360",
        },
        {
          text: ". You did not write it. You cannot delete it. And it is sitting on the first page of your name search. At Reputation360, we work with individuals and professionals across the US, Canada, Australia, and Europe on both problems - seven years of experience, more than 1,100 clients served.",
        },
      ],
    },
    {
      type: "lead",
      label: "What this guide covers",
      text: "You will learn why social posts linger in Google, how to clean up your own accounts platform by platform, how Google's URL removal tool works, what to do when someone else posted the content, and when suppression is the right primary strategy.",
    },
  ],
  toc: TOC,
  tocTitle: "What You'll Learn",
  tocAriaLabel: "What you'll learn",
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "why-posts-appear",
      number: "01",
      title: "Why old social media posts appear in Google",
      blocks: [
        {
          type: "p",
          text: "Google crawls publicly visible web content continuously. When a social media post is published on a public account, Google indexes it, sometimes within hours. Deleting the post from the platform removes it from that platform, but Google's cached version may persist until Google re-crawls and updates its index.",
          parts: [
            {
              text: "Google crawls publicly visible web content",
              href: "https://neilpatel.com/blog/social-networks-in-search/",
              external: true,
            },
            {
              text: " continuously. When a social media post is published on a public account, Google indexes it, sometimes within hours. Deleting the post from the platform removes it from that platform, but Google's cached version may persist until Google re-crawls and updates its index.",
            },
          ],
        },
        {
          type: "p",
          text: "The delay between deletion and de-indexing can range from a few days to several months, depending on how frequently Google crawls the page. High-traffic social accounts get re-crawled more often; low-activity pages may not be re-crawled for weeks or months.",
        },
        {
          type: "p",
          text: "Additionally, if another account screenshotted, shared, or quoted your post, that secondary content may have been indexed independently. Deleting your original post does not remove those derivative mentions. That is why many cases need both deletion hygiene and, when necessary, suppression.",
        },
      ],
    },
    {
      id: "platform-cleanup",
      number: "02",
      title: "Platform-by-platform: what you can do with your own content",
      blocks: [
        {
          type: "p",
          text: "Each platform handles visibility and indexing differently. Select a platform below for the highest-impact cleanup actions on your own accounts.",
          parts: [
            {
              text: "Each platform handles visibility and indexing differently",
              href: "https://www.thereputation360.com/blog/building-positive-google-presence-profile-claiming-guide-reputation360",
            },
            {
              text: ". Select a platform below for the highest-impact cleanup actions on your own accounts.",
            },
          ],
        },
        {
          type: "pills",
          pickerKey: "social-platform-cleanup",
          items: [
            {
              id: "x",
              label: "X / Twitter",
              title: "X / Twitter",
              body: "X's public posts are indexed by Google when the account is set to public. Deleting tweets removes them from the platform, but Google may cache them for a period. Switching your account to private prevents future indexing but does not immediately remove already-indexed content. For bulk tweet deletion, tools like Semiphemeral or TweetDelete can mass-delete historical tweets. After deletion, submitting the specific URL via Google's URL Removal Tool can accelerate de-indexing.",
            },
            {
              id: "facebook",
              label: "Facebook",
              title: "Facebook",
              body: "Facebook's privacy controls determine Google visibility. Posts set to Friends or more restrictive settings are not indexed by Google. If old public posts are indexed, change their audience to Only Me or delete them. Facebook's Activity Log allows bulk management of past posts. After changing privacy settings, Google will typically de-index within weeks as it re-crawls the page.",
            },
            {
              id: "linkedin",
              label: "LinkedIn",
              title: "LinkedIn",
              body: "LinkedIn posts and activity are publicly indexed unless your privacy settings restrict visibility. Delete problematic posts directly from your profile activity section. LinkedIn profile content is among the most aggressively indexed by Google - if you have made controversial comments in LinkedIn discussions, they may rank for your name. Deleting those comments and replacing profile sections with carefully written, professional content is the most effective LinkedIn clean-up strategy.",
            },
            {
              id: "instagram",
              label: "Instagram",
              title: "Instagram",
              body: "Public Instagram posts are indexed by Google. Switching to a private account prevents further indexing, and deleting posts removes them from the platform. Google's cache update speed for Instagram is inconsistent. If a specific Instagram post is ranking and has been deleted, using Google Search Console to request URL removal is the fastest path to de-indexing.",
            },
            {
              id: "reddit",
              label: "Reddit",
              title: "Reddit",
              body: "Reddit is one of the most challenging platforms for social content cleanup. Reddit posts and comments on public subreddits are aggressively indexed by Google. Deleting a Reddit comment replaces your text with [deleted] but does not remove the content from Google's index immediately. If a username is linked to your real name, this creates particular risk. In many cases where Reddit content is the reputation problem, suppression through positive content creation is more effective than waiting for de-indexing.",
            },
          ],
        },
      ],
    },
    {
      id: "url-removal-tool",
      number: "03",
      title: "Google's URL removal tool: what it does and doesn't do",
      blocks: [
        {
          type: "p",
          text: "Google's URL Removal Tool (available in Search Console) allows you to request temporary removal of a URL from search results - but only if the content has already been deleted or made private at the source. You cannot use it to remove content that still exists publicly.",
        },
        {
          type: "p",
          text: "If you have deleted the social post and updated privacy settings, you can then submit the URL for expedited removal, which typically takes effect within days and lasts for about six months, by which point Google should have re-crawled and confirmed the content is gone.",
        },
        {
          type: "keyBox",
          variant: "tip",
          title: "Order of operations",
          text: "Delete or privatize at the source first, then request removal in Search Console. Requesting removal while the post is still public will not succeed.",
        },
      ],
    },
    {
      id: "third-party-content",
      number: "04",
      title: "When the content is on someone else's account",
      blocks: [
        {
          type: "p",
          text: "The platform strategies above assume you control the account. A separate and increasingly common problem is negative content on accounts that are not yours - someone else's post naming you, a critical thread in a public group, a former colleague's public comment, or an anonymous account publishing damaging claims. Select each path below to see what it involves.",
        },
        {
          type: "steps",
          pickerKey: "third-party-social-paths",
          steps: [
            {
              n: 1,
              title: "Platform reporting",
              body: "Every major platform has a reporting mechanism for content that violates its policies. If the content about you is false, defamatory, or constitutes harassment, you can submit a report directly to the platform. Platforms will generally act on content that is clearly false and harmful, involves personal identifying information published without consent, constitutes targeted harassment, or violates their specific community standards. What platforms will not remove on request alone: opinions, criticism, negative reviews, or content that is factually accurate but damaging to your reputation.",
            },
            {
              n: 2,
              title: "Direct removal request",
              body: "If you know who posted the content, a direct, professional request for removal is sometimes the simplest path. This works most often when the poster is a known individual rather than an anonymous account, the content was posted impulsively rather than with intent to harm, and the relationship is not adversarial enough to make contact counterproductive. Keep the communication factual and without threat - escalating tone in an initial outreach typically hardens the other party's position.",
            },
            {
              n: 3,
              title: "Legal channels",
              titleParts: [
                {
                  text: "Legal channels",
                  href: "https://www.thereputation360.com/blog/remove-court-records-google-reputation360",
                },
              ],
              body: "If the content is demonstrably false and is causing material harm - affecting employment, business relationships, or public standing - defamation law may be relevant. An attorney specializing in online defamation can advise on whether the content meets the legal threshold and whether a formal demand letter is appropriate. In some cases, platforms respond to court orders where informal reporting did not succeed. This is a longer and costlier path, worth pursuing when content is clearly defamatory and prominently ranked.",
            },
            {
              n: 4,
              title: "Google's role",
              body: "Google will remove content from search results in specific circumstances: if a court order establishes the content is defamatory, if the content contains sensitive personal information such as financial data or intimate images published without consent, or if the content violates Google's own removal policies. Outside these conditions, Google does not intervene in reputation disputes between individuals and will defer to the platform hosting the content.",
            },
            {
              n: 5,
              title: "When removal is not available",
              titleParts: [
                {
                  text: "When removal is not available",
                  href: "https://www.thereputation360.com/blog/hidden-cost-ignoring-online-reputation-reputation360-analysis",
                },
              ],
              body: "Anonymous accounts, offshore platforms, and content that is critical but not technically removable all fall into a category where conventional removal fails. This is where suppression becomes the primary strategy - not because it is a second-best option, but because it directly addresses what matters most: what someone sees when they search your name.",
            },
          ],
        },
      ],
    },
    {
      id: "when-suppression",
      number: "05",
      title: "When deletion is not enough: the suppression strategy",
      blocks: [
        {
          type: "p",
          text: "Whether the content originated from your own account or someone else's, there are situations where deletion alone does not solve the problem. This includes cases where the post has been shared, archived, or quoted widely enough that derivative content exists across multiple sites, where the platform does not cooperate with de-indexing, or where the poster cannot be reached or compelled to act.",
        },
        {
          type: "p",
          text: "In all these cases, suppression is the appropriate strategy. Rather than focusing on what you cannot control, you focus on what you can build: positive, authoritative content that occupies the search positions above the problematic content. Reputation360 executes this by creating a combination of professional profiles, authored content, and optimized personal pages that claim the top positions for your name search, pushing the damaging social media content progressively lower.",
          parts: [
            { text: "In all these cases, " },
            {
              text: "suppression is the appropriate strategy",
              href: "https://www.thereputation360.com/blog/how-to-suppress-negative-content-professionals-guide",
            },
            {
              text: ". Rather than focusing on what you cannot control, you focus on what you can build: positive, authoritative content that occupies the search positions above the problematic content. Reputation360 executes this by creating a combination of professional profiles, authored content, and optimized personal pages that claim the top positions for your name search, pushing the damaging social media content progressively lower.",
            },
          ],
        },
        {
          type: "p",
          text: "A significant portion of our third-party content cases are resolved this way - not through removal, but through displacement.",
        },
        {
          type: "keyBox",
          variant: "insight",
          title: "Displacement vs. deletion",
          text: "Page one is what decision-makers see. Building six to ten strong positive assets often changes outcomes faster than waiting months for a single stubborn URL to de-index.",
          parts: [
            { text: "Page one is what decision-makers see. " },
            {
              text: "Building six to ten strong positive assets",
              href: "https://www.thereputation360.com/blog/own-your-first-page-control-google-results-reputation360",
            },
            {
              text: " often changes outcomes faster than waiting months for a single stubborn URL to de-index.",
            },
          ],
        },
      ],
    },
    {
      id: "prevention",
      number: "06",
      title: "Prevention: building a clean digital footprint going forward",
      blocks: [
        {
          type: "p",
          text: "The best time to manage your social media reputation is before a problem appears. Reputation360 recommends quarterly audits of all public social profiles - searching your own name in Google and reviewing what is indexed. A regular habit of managing your social media reputation makes cleanup easier when something changes.",
          parts: [
            {
              text: "The best time to manage your social media reputation is before a problem appears. Reputation360 recommends quarterly audits of all public social profiles - searching your own name in Google and reviewing what is indexed. A regular habit of ",
            },
            {
              text: "managing your social media reputation",
              href: "https://sproutsocial.com/insights/social-media-reputation-management/",
              external: true,
            },
            { text: " makes cleanup easier when something changes." },
          ],
        },
        {
          type: "bullets",
          items: [
            "Set personal social accounts to private where possible, and reserve public visibility for accounts you are actively managing with professional content.",
            "After any cleanup, submit removed URLs through Search Console to accelerate de-indexing.",
            "Document what you deleted or privatized so you can track which URLs still appear over the following weeks.",
          ],
        },
        {
          type: "p",
          text: "For executives and professionals in active job searches, partnership negotiations, or public-facing roles, we also recommend a pre-emptive suppression strategy: build positive search assets before there is a problem, so you are not starting from scratch when one arises.",
          parts: [
            { text: "For " },
            {
              text: "executives and professionals in active job searches",
              href: "https://www.thereputation360.com/blog/what-recruiters-google-about-you-reputation360-insider-report",
            },
            {
              text: ", partnership negotiations, or public-facing roles, we also recommend a pre-emptive suppression strategy: build positive search assets before there is a problem, so you are not starting from scratch when one arises.",
            },
          ],
        },
        {
          type: "lead",
          label: "Where to start",
          text: "Search your full name in Google today, list every social URL on page one and page two, and assign each URL an action: delete, privatize, report, request removal, or outrank.",
          parts: [
            {
              text: "Search your full name in Google today",
              href: "https://www.thereputation360.com/blog/monitoring-online-reputation-tools-tactics-reputation360",
            },
            {
              text: ", list every social URL on page one and page two, and assign each URL an action: delete, privatize, report, request removal, or outrank.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "I deleted a tweet years ago but it still shows in Google. Why?",
      a: "Google may have a cached version from when the tweet was public. If it is still indexed, use Google Search Console's URL removal tool to request expedited de-indexing. If the content was captured by third-party archiving sites, you will need to address those separately or consider suppression.",
    },
    {
      id: "faq-2",
      q: "Can old Facebook posts be removed from Google even if I no longer have access to the account?",
      a: "This is a more complex scenario. If you cannot access the account to change privacy settings, you can submit a removal request directly to Facebook to reclaim or close the account. You can also submit a Google removal request citing personal data concerns if the content qualifies.",
    },
    {
      id: "faq-3",
      q: "Does making my account private immediately remove it from Google?",
      a: "No. It prevents future content from being indexed and signals to Google that it should not display the content. But de-indexing only happens after Google re-crawls the page and confirms the content is now private. This can take days to weeks. Using Google Search Console's URL removal tool accelerates this significantly.",
    },
  ],
  cta: {
    title: "Take the next step",
    lead:
      "Find out exactly what social media content is currently indexed under your name. We will identify every indexing issue and outline a practical cleanup or suppression plan through our online reputation management services.",
    leadParts: [
      {
        text: "Find out exactly what social media content is currently indexed under your name. We will identify every indexing issue and outline a practical cleanup or suppression plan through ",
      },
      {
        text: "our online reputation management services",
        href: "https://www.thereputation360.com/services",
      },
      { text: "." },
    ],
  },
  relatedReading: [
    {
      title: "Removal vs. Suppression: Which Actually Works?",
      href: REMOVAL_VS_SUPPRESSION_PATH,
      category: "Removal vs. Suppression",
      readTime: "18 min read",
      image: pack20Image("removal"),
      imageAlt: "Legal scales representing removal and compliance decisions",
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
      title: "How to Rank Positive Content Above Negative Results",
      href: RANK_POSITIVE_PATH,
      category: "Content Strategy",
      readTime: "18 min read",
      image: pack20Image("rank"),
      imageAlt: "Professional reviewing content performance on a laptop",
    },
  ],
};
