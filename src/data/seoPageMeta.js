/**
 * Default meta descriptions for static routes (Vite SPA + SeoHead).
 * Keep in sync with document titles in each page where applicable.
 */
import { AUDIENCE_PATH } from "../constants/whoWeServePaths.js";

export const SEO = {
  home: {
    title: "Reputation360 | Online Reputation Management in the US",
    path: "/",
    description:
      "Suppress negative search results & control your online reputation globally. Trusted by founders & brands in the US, Europe & worldwide. Build credible digital reputations worldwide. Get your free audit today.",
  },
  services: {
    title:
      "Our Services | Online Reputation Management, Negative Link Suppression & More",
    path: "/services",
    description:
      "Online reputation management & negative link suppression services around the world. Employer branding & content trusted across US, Europe & worldwide. Expert solutions for founders & businesses globally.",
  },
  whoWeServe: {
    title: "Who We Serve | Reputation360",
    path: "/who-we-serve",
    description:
      "Audiences Reputation360 works with: individuals, financial advisors, executives, doctors, lawyers, job seekers, and businesses. See how we tailor online reputation management for each.",
  },
  caseStudies: {
    title:
      "Case Studies | Real Online Reputation Management Results by Reputation360",
    path: "/case-studies",
    description:
      "See how Reputation360 fixed damaged reputations worldwide. Real case studies from US, Europe & worldwide clients showing negative removal & ranking growth. Proven online reputation management solutions across industries around the world.",
  },
  blogs: {
    title:
      "Online Reputation Management Blog | Strategy & Industry Insights",
    path: "/blog",
    description:
      "Online reputation management insights from 7 years of global reputation work. Expert blog posts on suppressing negatives, managing crises & building credible brands around the world. Industry trends serving US, Europe & worldwide.",
  },
  faqs: {
    title: "FAQs | Online Reputation Management Questions Answered",
    path: "/resources/faqs",
    description:
      "Online reputation management FAQs: How long does reputation repair take? What's the cost? Get answers to common reputation questions from Reputation360's global experts serving US, Europe & worldwide. Expert guidance around the world.",
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
    title:
      "Contact Reputation360 | Get a Free Online Reputation Management Consultation",
    path: "/contact",
    description:
      "Schedule your free online reputation management consultation with Reputation360. Get expert guidance from our global team serving US, Europe & worldwide. Custom strategies to suppress negatives & strengthen your brand worldwide.",
  },
  about: {
    title:
      "About Reputation360 | 7+ Years in Online Reputation Management & Digital Reputation",
    path: "/about",
    description:
      "Meet Reputation360: 7+ years protecting reputations globally across the US. Expert online reputation management through negative suppression & positive amplification. Industry-leading success rates. Trusted worldwide.",
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
      "Online reputation management for financial advisors globally. Build trust with clients across US, Europe & worldwide by suppressing negative content & strengthening your credible online presence. Expert solutions for your practice.",
  },
  jobSeekers: {
    title: "Reputation Management for Job Seekers | Reputation360",
    path: AUDIENCE_PATH.jobSeekers,
    description:
      "Personal reputation management for job seekers globally. Remove negative search results & improve your online profile to impress employers across US, Europe & worldwide. Expert career reputation solutions.",
  },
  doctors: {
    title:
      "Reputation Management for Doctors & Healthcare Professionals | Reputation360",
    path: AUDIENCE_PATH.doctors,
    description:
      "Healthcare professional reputation management for doctors & medical practices globally. Suppress negative reviews, build patient trust across US, Europe & worldwide. HIPAA-compliant online reputation management solutions. Expert support for practitioners.",
  },
  lawyers: {
    title:
      "Online Reputation Management for Lawyers & Attorneys | Reputation360",
    path: AUDIENCE_PATH.lawyers,
    description:
      "Attorney reputation management & online presence solutions worldwide. Reputation360 suppresses negative search results & builds credibility for legal professionals across US, Canada & Australia. Ethical online reputation management for lawyers.",
  },
  executives: {
    title:
      "Online Reputation Management for Executives & C-Suite Leaders | Reputation360",
    path: AUDIENCE_PATH.executives,
    description:
      "Executive reputation management for C-suite leaders worldwide. Reputation360 protects & enhances your professional brand across US, Europe & worldwide. Control your digital narrative. Expert online reputation management for leadership.",
  },
  businesses: {
    title:
      "Online Reputation Management for Businesses & Companies | Reputation360",
    path: AUDIENCE_PATH.businesses,
    description:
      "Business reputation management & negative link suppression globally. Reputation360 helps companies across US, Europe & worldwide control their online presence, remove harmful content & strengthen brand credibility. Expert online reputation management.",
  },
  individuals: {
    title:
      "Online Reputation Management for Individuals | Protect Your Personal Reputation Online",
    path: AUDIENCE_PATH.individuals,
    description:
      "Protect your personal reputation online. Reputation360 helps individuals in the US, Europe & worldwide to suppress negative search results & build credible digital identities. Start your free reputation audit today.",
  },
};
