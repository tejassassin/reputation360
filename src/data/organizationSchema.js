import { METADATA_BASE } from "../constants/siteUrl.js";

/** Keep in sync with Organization JSON-LD in index.html (homepage initial HTML). */
export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${METADATA_BASE}/#organization`,
  name: "Reputation360",
  url: METADATA_BASE,
  logo: `${METADATA_BASE}/android-chrome-512x512.png`,
  image: `${METADATA_BASE}/about-hero-search-mockup.png`,
  description:
    "Reputation360 is a trusted online reputation management agency with 7+ years of experience. We help individuals and brands suppress negative search results and build credible, resilient digital reputations.",
  email: "hello@thereputation360.com",
  foundingDate: "2018",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  knowsAbout: [
    "Online Reputation Management",
    "Negative Link Suppression",
    "Brand Monitoring",
    "Crisis Management",
  ],
  sameAs: [
    "https://www.linkedin.com/company/reputation360online/",
    "https://www.instagram.com/reputation360_online",
    "https://www.facebook.com/profile.php?id=61572090900344",
  ],
};
