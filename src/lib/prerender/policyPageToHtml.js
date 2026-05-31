import { escapeHtml } from "./html.js";

const POLICIES = {
  "/privacy-policy": {
    h1: "Privacy Policy",
    toc: [
      { id: "about", label: "About Reputation360" },
      { id: "collect", label: "What Information We Collect" },
      { id: "use", label: "How We Use Your Information" },
      { id: "share", label: "How We Share Your Information" },
      { id: "rights", label: "Your Data Rights and Choices" },
      { id: "security", label: "Data Security" },
      { id: "cookies", label: "Cookies and Tracking Technologies" },
      { id: "third-party", label: "Third-Party Websites and Links" },
      { id: "children", label: "Children's Privacy" },
      { id: "international", label: "International Data Transfers" },
      { id: "retention", label: "Data Retention" },
      { id: "changes", label: "Policy Changes" },
      { id: "contact", label: "Contact Us" },
    ],
    desc: "At Reputation360, we believe your privacy is paramount. We have built our reputation management and negative link suppression services on the foundation of protecting your information. This Privacy Policy explains how we collect, use, protect, and manage your information when you visit our website and use our Online Reputation Management services."
  },
  "/terms-of-service": {
    h1: "Terms of Service",
    toc: [
      { id: "about-these-terms", label: "About These Terms" },
      { id: "services-scope", label: "Services and Scope" },
      { id: "authorization", label: "Your Authorization and Responsibilities" },
      { id: "account", label: "Account Requirements" },
      { id: "payment", label: "Payment and Fees" },
      { id: "warranties", label: "Warranties and Disclaimers" },
      { id: "liability", label: "Limitation of Liability" },
      { id: "ip", label: "Intellectual Property Rights" },
      { id: "confidentiality", label: "Confidentiality" },
      { id: "conduct", label: "User Conduct and Prohibited Activities" },
      { id: "termination", label: "Termination and Cancellation" },
      { id: "dispute", label: "Dispute Resolution and Governing Law" },
      { id: "general", label: "General Provisions" },
      { id: "contact-info", label: "Contact information" },
    ],
    desc: "By purchasing or using any Reputation360 services, you agree to be bound by these Terms of Service. These Terms govern your purchase and use of our Online Reputation Management services, access to our website, and client portal."
  },
  "/cookie-policy": {
    h1: "Cookie Policy",
    toc: [
      { id: "what-are-cookies", label: "What Are Cookies?" },
      { id: "why-cookies", label: "Why We Use Cookies" },
      { id: "types", label: "Types of Cookies We Use" },
      { id: "third-party", label: "Third-Party Cookies" },
      { id: "consent", label: "Cookie Consent and Control" },
      { id: "managing", label: "Managing Your Cookie Preferences" },
      { id: "regional", label: "Regional Compliance" },
      { id: "dnt", label: "Do Not Track Signals" },
      { id: "contact", label: "Contact Us" },
    ],
    desc: "This Cookie Policy explains how Reputation360 uses cookies and similar tracking technologies on our website. This policy is part of our overall Privacy Policy and explains what cookies are, why we use them, and your rights regarding cookies."
  },
  "/refund-policy": {
    h1: "Refund Policy",
    toc: [
      { id: "overview", label: "Policy Overview and Key Principles" },
      { id: "non-refundable", label: "Non-Refundable Services" },
      { id: "eligibility", label: "Refund Eligibility" },
      { id: "timeframes", label: "Refund Timeframes" },
      { id: "how-to-request", label: "How to Request a Refund" },
      { id: "processing", label: "Refund Processing and Methods" },
      { id: "disputes", label: "Disputed Charges and Payment Issues" },
      { id: "special", label: "Special Circumstances" },
      { id: "credit", label: "Service Credit and Partial Refunds" },
      { id: "contact", label: "Contact Information" },
      { id: "policy-changes", label: "Policy Changes" },
    ],
    desc: "This Refund Policy outlines Reputation360's refund practices for services purchased through our website or through a formal Service Agreement. Please read this policy carefully to understand when refunds are available, what conditions apply, and how to request a refund."
  },
  "/acceptable-use-policy": {
    h1: "Acceptable Use Policy",
    toc: [
      { id: "overview", label: "Policy Overview" },
      { id: "prohibited", label: "Prohibited Activities" },
      { id: "account", label: "Account and Authentication Rules" },
      { id: "content", label: "Content and Communication Standards" },
      { id: "ip", label: "Intellectual Property and Copyright" },
      { id: "security", label: "Security and System Protection" },
      { id: "compliance", label: "Compliance and Legal Requirements" },
      { id: "enforcement", label: "Enforcement and Violations" },
      { id: "suspension", label: "Account Suspension and Termination" },
      { id: "indemnification", label: "Indemnification" },
      { id: "final-notice", label: "Final Notice" },
      { id: "questions", label: "Questions or Reports" },
    ],
    desc: "This Acceptable Use Policy establishes guidelines for acceptable use of Reputation360's services and platforms. By using our services, you agree to comply with this policy. Violation of any provision may result in account suspension, termination, or legal action."
  },
  "/terms-of-use": {
    h1: "Website Terms of Use",
    toc: [
      { id: "access", label: "Website Access and Use" },
      { id: "eligibility", label: "User Eligibility" },
      { id: "acceptable-use", label: "Acceptable Use Policy" },
      { id: "user-content", label: "User Content" },
      { id: "ip", label: "Intellectual Property Rights" },
      { id: "third-party", label: "Third-Party Links and Content" },
      { id: "disclaimers", label: "Disclaimers" },
      { id: "liability", label: "Limitation of Liability" },
      { id: "indemnification", label: "Indemnification" },
      { id: "modifications", label: "Website Modifications" },
      { id: "account-security", label: "Account Security" },
      { id: "termination", label: "Termination of Access" },
      { id: "governing-law", label: "Governing Law and Dispute Resolution" },
      { id: "additional", label: "Additional Provisions" },
      { id: "contact", label: "Contact Information" },
    ],
    desc: "Welcome to Reputation360's website. These Website Terms of Use govern your access to and use of our website. By accessing, browsing, or using our Website, you agree to comply with these terms. If you do not agree to these terms, please do not use the Website."
  },
  "/dmca-copyright-policy": {
    h1: "DMCA / Copyright Policy",
    toc: [
      { id: "overview", label: "Overview and DMCA Compliance" },
      { id: "claims", label: "Copyright Infringement Claims" },
      { id: "notice-requirements", label: "DMCA Takedown Notice Requirements" },
      { id: "takedown", label: "Notice and Takedown Procedure" },
      { id: "counter", label: "Counter-Notification Procedures" },
      { id: "restoration", label: "Content Restoration" },
      { id: "repeat", label: "Repeat Infringer Policy" },
      { id: "ownership", label: "Copyright Ownership and Attribution" },
      { id: "fair-use", label: "Fair Use and Limitations" },
      { id: "contact", label: "Contact Information" },
      { id: "final-notice", label: "Final Notice" },
    ],
    desc: "Reputation360 respects intellectual property rights and complies with the Digital Millennium Copyright Act (DMCA) and other applicable copyright laws. This policy outlines our procedures for handling copyright infringement claims, takedown notices, and counter-notification requests."
  }
};

export const POLICY_PATHS = Object.keys(POLICIES);

export function policyPageToHtml(path) {
  const policy = POLICIES[path];
  if (!policy) return null;

  const tocHtml = policy.toc
    .map((item) => `<li><a href="#${item.id}">${escapeHtml(item.label)}</a></li>`)
    .join("\n");

  const sectionsHtml = policy.toc
    .map((item) => `
      <section id="${item.id}" class="policy-section">
        <h2>${escapeHtml(item.label)}</h2>
        <p>This section governs the ${escapeHtml(item.label.toLowerCase())} for using Reputation360's online reputation management and search results suppression services.</p>
        <p>Please contact hello@thereputation360.com or support@thereputation360.com if you have any questions or require clarification on this clause.</p>
      </section>`)
    .join("\n");

  return `
    <header class="policy-hero">
      <h1>${escapeHtml(policy.h1)}</h1>
      <p class="hero-intro">Reputation360 Legal Document</p>
      <p class="hero-description">${escapeHtml(policy.desc)}</p>
    </header>

    <main>
      <nav aria-label="Table of contents" class="policy-toc">
        <h2>Table of Contents</h2>
        <ol>
          ${tocHtml}
        </ol>
      </nav>

      <div class="policy-content">
        ${sectionsHtml}
      </div>
    </main>
  `;
}
