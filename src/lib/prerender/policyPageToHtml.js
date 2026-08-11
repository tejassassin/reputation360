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
    h1: "Terms, Policies & Conditions",
    toc: [
      { id: "part-a", label: "Part A - Terms of Service" },
      { id: "part-b", label: "Part B - Acceptable Use Policy" },
      { id: "part-c", label: "Part C - Website Terms of Use" },
      { id: "contact-info", label: "Contact Information" },
    ],
    desc: "Reputation360 Terms of Service, Acceptable Use Policy, and Website Terms of Use in one document. Covers service scope, fees, warranties, liability, IP, conduct, security, compliance, website access, and contact details."
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
