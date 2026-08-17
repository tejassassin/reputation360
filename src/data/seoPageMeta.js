/**
 * Default meta descriptions for static routes (Vite SPA + SeoHead).
 * Keep in sync with document titles in each page where applicable.
 */
import { AUDIENCE_PATH } from "../constants/whoWeServePaths.js";
import { FREE_RISK_SCAN_PATH } from "../constants/freeRiskScan.js";
import { ORM_GLOSSARY_PATH } from "../constants/resourcePaths.js";

export const SEO = {
  home: {
    title: "Reputation360 | Trusted Online Reputation Management Company",
    path: "/",
    description:
      "Take control of what Google shows about you. Reputation360 helps individuals and businesses across the US suppress harmful results and rebuild trust.",
  },
  services: {
    title: "Explore Our Reputation Management Services | Reputation360",
    path: "/services",
    description:
      "From Negative Link Suppression to review management, Reputation360 builds a custom plan matched to your exact situation. See how we can help.",
  },
  onlineReputationManagement: {
    title: "Online Reputation Management Services | Reputation360",
    path: "/services/online-reputation-management",
    description:
      "What shows up when someone searches your name shapes every decision they make about you. Reputation360 builds proven strategies to help you own that narrative.",
  },
  negativeLinkSuppression: {
    title: "Negative Link Suppression Services | Reputation360",
    path: "/services/negative-link-suppression",
    description:
      "Negative search results can cost you trust, clients and opportunities. Reputation360 helps push damaging content down and strengthen what people find online.",
  },
  reputationBuildingServices: {
    title: "Online Reputation Building Services for Individuals & Brands",
    path: "/services/reputation-building-services",
    description:
      "When suppression alone isn't enough, Reputation360 builds personal branding, LinkedIn authority, and thought leadership to strengthen your search presence.",
  },
  whoWeServe: {
    title: "Who We Serve | Reputation360",
    path: "/who-we-serve",
    description:
      "Audiences Reputation360 works with: individuals, financial advisors, executives, doctors, lawyers, job seekers, and businesses. See how we tailor Online Reputation Management for each.",
  },
  caseStudies: {
    title: "Online Reputation Management Case Studies | Reputation360",
    path: "/case-studies",
    description:
      "From executives to professionals, explore real Reputation360 case studies showing how damaging search results were suppressed and credible reputations rebuilt.",
  },
  blogs: {
    title: "Online Reputation Management Blog & Insights | Reputation360",
    path: "/blog",
    description:
      "Explore Reputation360’s online reputation management blog for insights on negative searches, suppression, Google visibility, AI search, and reputation building",
  },
  faqs: {
    title: "Online Reputation Management FAQs | Reputation360",
    path: "/resources/faqs",
    description:
      "Explore answers to common online reputation management questions, including timelines, costs, suppression, removal, and what to expect from the process.",
  },
  legal: {
    privacy: {
      title: "Privacy Policy | Reputation360",
      path: "/privacy-policy",
      description:
        "Read Reputation360's full privacy policy covering what data we collect, how it's used and shared, your rights across regions, security, and retention practices.",
    },
    terms: {
      title: "Terms of Service | Reputation360",
      path: "/terms-of-service",
      description:
        "Review Reputation360's terms of service, covering the scope of our services, fees, warranties, liability, confidentiality, and governing law.",
    },
    cookies: {
      title: "Cookie Policy | Reputation360",
      path: "/cookie-policy",
      description:
        "Reputation360's cookie policy explains the cookies we use, third-party tools, regional consent requirements, and how to manage your browser preferences.",
    },
    refund: {
      title: "Refund Policy | Reputation360",
      path: "/refund-policy",
      description:
        "Reputation360's refund policy outlines eligibility, the seven-day request window, processing timelines, and how to submit a refund request.",
    },
    acceptableUse: {
      title: "Acceptable Use Policy | Reputation360",
      path: "/acceptable-use-policy",
      description:
        "Read Reputation360's acceptable use policy covering prohibited conduct, content standards, enforcement, and how to report a violation.",
    },
    termsOfUse: {
      title: "Website Terms of Use | Reputation360",
      path: "/terms-of-use",
      description:
        "Reputation360's website terms of use cover access, acceptable use, user content, intellectual property, liability, and account terms for this site.",
    },
    dmcaCopyright: {
      title: "DMCA / Copyright Policy | Reputation360",
      path: "/dmca-copyright-policy",
      description:
        "Reputation360's DMCA and copyright policy explains our safe harbor process, takedown notice requirements, counter-notifications, and how to file a claim.",
    },
  },
  contact: {
    title: "Contact Reputation360 | Book a Confidential Consultation",
    path: "/contact",
    description:
      "Book a free, confidential consultation with Reputation360 to discuss your concerns, understand your options, and get a clear path forward for your reputation.",
  },
  freeRiskScan: {
    title: "Free Reputation Scan | See What Google Shows About You",
    path: FREE_RISK_SCAN_PATH,
    description:
      "Find out what appears when people Google your name. Reputation360's free scan identifies negative search results and shows how they can be addressed.",
  },
  freeScanAdmin: {
    title: "Free Reputation Scan Admin | Reputation360",
    path: "/free-scan-admin",
    description:
      "Protected admin view for free reputation scan submissions and exports.",
  },
  about: {
    title: "About Reputation360 | Online Reputation Management Experts",
    path: "/about",
    description:
      "Learn how Reputation360 helps professionals and businesses address complex online reputation challenges through transparent, realistic, and strategic solutions.",
  },
  guide: {
    title: "Reputation Management Guides | Reputation360 Resources",
    path: "/resources/guide",
    description:
      "Online reputation management strategies for 2026, with practical guidance to improve Google search results, strengthen visibility, and build lasting credibility.",
  },
  ormGlossary: {
    title: "Online Reputation Management Glossary | Reputation360",
    path: ORM_GLOSSARY_PATH,
    description:
      "Understand key online reputation management terms with Reputation360’s glossary, covering search suppression, brand SERPs, GEO, AI Overviews, and more.",
  },
  financialAdvisors: {
    title: "Financial Advisor Reputation Management | Reputation360",
    path: AUDIENCE_PATH.financialAdvisors,
    description:
      "Negative search results can damage a financial advisor’s credibility before a client calls. Reputation360 helps suppress them and strengthen online reputation.",
  },
  jobSeekers: {
    title: "Reputation Management for Job Seekers | Reputation360",
    path: AUDIENCE_PATH.jobSeekers,
    description:
      "Negative content appearing on Google search can hurt your job search. Reputation360 helps suppress negative results and strengthen your professional presence.",
  },
  doctors: {
    title: "Doctor & Healthcare Reputation Management | Reputation360",
    path: AUDIENCE_PATH.doctors,
    description:
      "Negative patient reviews hurting your practice's online reputation? Reputation360 suppresses harmful content and helps doctors rebuild lasting patient trust.",
  },
  lawyers: {
    title: "Lawyer & Attorney Reputation Management | Reputation360",
    path: AUDIENCE_PATH.lawyers,
    description:
      "A negative search result can damage client trust before they contact your firm. Reputation360 helps lawyers suppress negative content and strengthen their online reputation.",
  },
  executives: {
    title: "Executive Reputation Management | Reputation360",
    path: AUDIENCE_PATH.executives,
    description:
      "A negative search result can shape how boards, investors, and partners see you. Reputation360 helps executives protect and strengthen their online reputation.",
  },
  businesses: {
    title: "Business Reputation Management Services | Reputation360",
    path: AUDIENCE_PATH.businesses,
    description:
      "Negative reviews or damaging press hurting your business? Reputation360 suppresses harmful content and rebuilds brand credibility for companies of every size.",
  },
  individuals: {
    title: "Individual Reputation Management Services | Reputation360",
    path: AUDIENCE_PATH.individuals,
    description:
      "Something damaging appearing when people Google your name? Reputation360 suppresses harmful results and builds a stronger personal search presence.",
  },
  realEstate: {
    title: "Reputation Management for Real Estate Agents & Brokers",
    path: AUDIENCE_PATH.realEstate,
    description:
      "Negative search results costing you listings? Reputation360 helps real estate agents and brokers suppress harmful content and build a presence buyers trust.",
  },
};
