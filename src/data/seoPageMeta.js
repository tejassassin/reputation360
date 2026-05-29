/**
 * Default meta descriptions for static routes (Vite SPA + SeoHead).
 * Keep in sync with document titles in each page where applicable.
 */
import { AUDIENCE_PATH } from "../constants/whoWeServePaths.js";
import { FREE_RISK_SCAN_PATH } from "../constants/freeRiskScan.js";

export const SEO = {
  home: {
    title: "Online Reputation Management Services | Reputation360",
    path: "/",
    description:
      "Negative results damaging your reputation? Reputation360 suppresses harmful links and builds a credible search presence for professionals. Get a free scan.",
  },
  services: {
    title: "ORM & Negative Link Suppression Services | Reputation360",
    path: "/services",
    description:
      "From negative link suppression to review management, Reputation360 builds a custom plan matched to your exact situation. See how we can help.",
  },
  onlineReputationManagement: {
    title: "Online Reputation Management Services | Reputation360",
    path: "/services/online-reputation-management",
    description:
      "Take control of what people find when they search your name. Reputation360 delivers proven online reputation management for executives, founders, and brands across the US, Canada, and Australia. Book a free consultation.",
  },
  whoWeServe: {
    title: "Who We Serve | Reputation360",
    path: "/who-we-serve",
    description:
      "Audiences Reputation360 works with: individuals, financial advisors, executives, doctors, lawyers, job seekers, and businesses. See how we tailor Online Reputation Management for each.",
  },
  caseStudies: {
    title: "Reputation Management Case Studies & Results | Reputation360",
    path: "/case-studies",
    description:
      "Real results for real clients. See how Reputation360 suppressed harmful content and rebuilt search presence for executives, lawyers, doctors, and businesses.",
  },
  blogs: {
    title: "ORM Insights & Reputation Management Advice | Reputation360",
    path: "/blog",
    description:
      "Expert articles on negative link suppression, crisis management, and long-term reputation strategy - written by ORM practitioners with 7+ years of experience.",
  },
  faqs: {
    title: "FAQs | Online Reputation Management Questions Answered",
    path: "/resources/faqs",
    description:
      "Online Reputation Management FAQs: How long does reputation repair take? What's the cost? Get answers to common reputation questions from Reputation360's global experts serving US, Europe & worldwide. Expert guidance around the world.",
  },
  legal: {
    privacy: {
      title: "Privacy Policy | Reputation360",
      path: "/privacy-policy",
      description:
        "Full Privacy Policy for Reputation360: what we collect, how we use and share data, your rights (including US, Canada, and Australia), security, cookies, retention, and how to contact us.",
    },
    terms: {
      title: "Terms of Service | Reputation360",
      path: "/terms-of-service",
      description:
        "Full Terms of Service for Reputation360: scope of Services, your responsibilities, fees, warranties and disclaimers, liability limits, IP, confidentiality, conduct, termination, governing law (India), and contact details.",
    },
    cookies: {
      title: "Cookie Policy | Reputation360",
      path: "/cookie-policy",
      description:
        "Full Cookie Policy for Reputation360: types of cookies, third-party tools, consent by region (GDPR, DPDPA, CCPA, PIPEDA, Australia), browser controls, opt-out links, and DNT.",
    },
    refund: {
      title: "Refund Policy | Reputation360",
      path: "/refund-policy",
      description:
        "Reputation360 refund policy: non-refundable services, limited eligibility, 7-day request window, how to request a refund, processing timelines, chargebacks, service credit, and contact details.",
    },
    acceptableUse: {
      title: "Acceptable Use Policy | Reputation360",
      path: "/acceptable-use-policy",
      description:
        "Reputation360 Acceptable Use Policy: prohibited conduct, account rules, content standards, IP and security, compliance, enforcement, suspension and termination, indemnification, and how to report violations.",
    },
    termsOfUse: {
      title: "Website Terms of Use | Reputation360",
      path: "/terms-of-use",
      description:
        "Website Terms of Use for thereputation360.com: access and eligibility, acceptable use, user content, IP, third-party content, disclaimers, liability cap, indemnification, modifications, accounts, termination, governing law (India), and contact.",
    },
    dmcaCopyright: {
      title: "DMCA / Copyright Policy | Reputation360",
      path: "/dmca-copyright-policy",
      description:
        "Reputation360 DMCA and copyright policy: safe harbor, takedown notice requirements, counter-notifications, repeat infringer policy, fair use, and contact for dmca@thereputation360.com.",
    },
  },
  contact: {
    title: "Contact Reputation360 | Free Reputation Consultation",
    path: "/contact",
    description:
      "Schedule a free, confidential consultation with Reputation360. We assess your situation honestly and recommend the right strategy. No pressure.",
  },
  freeRiskScan: {
    title: "Free Reputation Scan | See What Google Shows About You",
    path: FREE_RISK_SCAN_PATH,
    description:
      "Find out what appears when people Google your name or business. Reputation360's free scan identifies harmful results and shows what's possible to fix.",
  },
  freeScanAdmin: {
    title: "Free Reputation Scan Admin | Reputation360",
    path: "/free-scan-admin",
    description:
      "Protected admin view for free reputation scan submissions and exports.",
  },
  about: {
    title: "About Reputation360 | 7+ Years in Reputation Management",
    path: "/about",
    description:
      "7+ years solving real reputation problems for professionals and businesses. Honest strategies, no false guarantees. Learn how Reputation360 works.",
  },
  guide: {
    title: "Reputation Management Guides | Reputation360 Resources",
    path: "/resources/guide",
    description:
      "The Complete Guide to Online Reputation Management 2026: Monitor, control & improve your digital footprint globally. Essential strategies for founders & brands in US, Europe & worldwide. Resources for around the world.",
  },
  financialAdvisors: {
    title: "Reputation Management for Financial Advisors | Reputation360",
    path: AUDIENCE_PATH.financialAdvisors,
    description:
      "Negative content damaging client trust? Reputation360 helps financial advisors suppress harmful results and build credible online presence. Free scan.",
  },
  jobSeekers: {
    title: "Reputation Management for Job Seekers | Reputation360",
    path: AUDIENCE_PATH.jobSeekers,
    description:
      "Old incidents showing up before interviews? Reputation360 suppresses harmful content and strengthens your profile for recruiters and employers. Free scan.",
  },
  doctors: {
    title: "Doctor & Healthcare Reputation Management | Reputation360",
    path: AUDIENCE_PATH.doctors,
    description:
      "Negative patient reviews damaging your practice? Reputation360 suppresses harmful content and helps doctors rebuild patient trust. Free reputation scan.",
  },
  lawyers: {
    title: "Lawyer & Attorney Reputation Management | Reputation360",
    path: AUDIENCE_PATH.lawyers,
    description:
      "One negative result costs clients before they call. Reputation360 helps lawyers suppress harmful content and reclaim their search presence. Free scan.",
  },
  executives: {
    title: "Executive Reputation Management | Reputation360",
    path: AUDIENCE_PATH.executives,
    description:
      "One negative result can cost you a board seat or deal. Reputation360 protects C-suite leaders with discreet, strategic ORM. Free confidential scan.",
  },
  businesses: {
    title: "Business Reputation Management Services | Reputation360",
    path: AUDIENCE_PATH.businesses,
    description:
      "Negative reviews or damaging news harming your business? Reputation360 suppresses harmful content and rebuilds brand credibility for all sizes. Free scan.",
  },
  individuals: {
    title: "Personal Reputation Management Services | Reputation360",
    path: AUDIENCE_PATH.individuals,
    description:
      "Something harmful appearing when people Google your name? Reputation360 suppresses negative results and builds a stronger personal search presence. Free scan.",
  },
};
