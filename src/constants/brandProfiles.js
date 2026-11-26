/** Canonical founding year used across schema, copy, and experience claims. */
export const FOUNDING_YEAR = 2019;

export const LINKEDIN_COMPANY_URL = "https://www.linkedin.com/company/thereputation360";

export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/thereputation360/";

export const GOOGLE_REVIEW_URL = "https://g.page/r/CRYmeiA2xgQBEBM/review";

/** Every spelling people use for the brand (schema.org alternateName). */
export const BRAND_ALTERNATE_NAMES = [
  "Reputation 360",
  "TheReputation360",
  "The Reputation360",
  "The Reputation 360",
  "Reputation-360",
];

export const X_PROFILE_URL = "https://x.com/Reputation360_";
export const FACEBOOK_PAGE_URL = "https://www.facebook.com/thereputation360";
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@Reputation360";

/**
 * Official brand-owned profiles, grouped for display. Single source for the
 * About page list, the footer icons and schema.org sameAs. Company/brand pages only.
 */
export const OFFICIAL_PROFILE_GROUPS = [
  {
    title: "Social media",
    profiles: [
      { name: "LinkedIn", url: LINKEDIN_COMPANY_URL },
      { name: "X (Twitter)", url: X_PROFILE_URL },
      { name: "Instagram", url: INSTAGRAM_PROFILE_URL },
      { name: "Facebook", url: FACEBOOK_PAGE_URL },
      { name: "YouTube", url: YOUTUBE_CHANNEL_URL },
      { name: "Vimeo", url: "https://vimeo.com/reputation360" },
      { name: "Pinterest", url: "https://in.pinterest.com/reputation360/" },
      { name: "Tumblr", url: "https://www.tumblr.com/reputation360" },
    ],
  },
  {
    title: "Agency directories and reviews",
    profiles: [
      { name: "Clutch", url: "https://clutch.co/profile/reputation360" },
      { name: "The Manifest", url: "https://themanifest.com/company/reputation360" },
      { name: "DesignRush", url: "https://www.designrush.com/agency/profile/reputation360" },
      { name: "Sortlist", url: "https://www.sortlist.co.uk/agency/reputation360" },
      { name: "TechBehemoths", url: "https://techbehemoths.com/company/reputation360" },
      { name: "SelectedFirms", url: "https://selectedfirms.co/agency/reputation360" },
      { name: "Wellfound", url: "https://wellfound.com/company/reputation360" },
      { name: "F6S", url: "https://www.f6s.com/thereputation360" },
      { name: "Muck Rack", url: "https://muckrack.com/reputation-360" },
      { name: "Google Business Profile", url: GOOGLE_REVIEW_URL },
    ],
  },
  {
    title: "Publishing",
    profiles: [
      { name: "Medium", url: "https://medium.com/@Reputation360" },
      {
        name: "Vocal Media",
        url: "https://vocal.media/authors/reputation-360-online-reputation-management",
      },
      { name: "Blogger", url: "https://reputation360online.blogspot.com/" },
      { name: "WordPress", url: "https://reputation360.wordpress.com/" },
      { name: "Strikingly", url: "https://reputation360.mystrikingly.com/" },
      { name: "Behance", url: "https://www.behance.net/thereputation360" },
      { name: "Issuu", url: "https://issuu.com/reputation360" },
    ],
  },
];

/** Flat URL list for schema.org sameAs. */
export const OFFICIAL_PROFILE_URLS = OFFICIAL_PROFILE_GROUPS.flatMap((g) =>
  g.profiles.map((p) => p.url),
);
