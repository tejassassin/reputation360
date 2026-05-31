import { HOME_FAQ_ITEMS } from "../../data/homeFaqItems.js";
import { homeFromOurBlogSectionHtml } from "./homeFromOurBlogToHtml.js";
import { escapeHtml } from "./html.js";

export function homePageToHtml() {
  const faqHtml = HOME_FAQ_ITEMS.map(
    (item) => `
      <div class="faq-item">
        <h3>${escapeHtml(item.question)}</h3>
        <p>${escapeHtml(item.answer)}</p>
      </div>`
  ).join("\n");

  return `
    <header class="home-hero">
      <h1>Own Your First Page. Suppress Negative Content Legitimately.</h1>
      <p>A single search result shouldn't define your entire career, business, or life. We rebuild search results to ensure the first impression is both true and professional.</p>
      <ul>
        <li>Remove or suppress damaging results</li>
        <li>Build authoritative, permanent assets</li>
        <li>100% white-hat and permanent</li>
        <li>Free instant risk assessment</li>
      </ul>
    </header>

    <main>
      <section class="about-value">
        <h2>Reputation Is a Business Asset</h2>
        <p>Lack of information is a reputation problem. In the digital age, your reputation is largely defined by what appears on the first page of Google. If someone searches your name and finds nothing, or finds outdated or damaging content, they default to caution.</p>
        <p>Reputation360 helps you take control of your digital identity, ensuring that what people find is accurate, credible, and representative of who you actually are.</p>
      </section>

      <section class="what-we-do">
        <h2>How We Protect & Engineer Your Digital Identity</h2>
        <ul>
          <li>
            <h3>Online Reputation Management (ORM)</h3>
            <p>Complete control over what appears when someone searches your name or brand on Google. We systematically push down negative results and build an authoritative, positive presence.</p>
          </li>
          <li>
            <h3>Negative Link Suppression</h3>
            <p>Targeted campaigns to displace specific damaging links—such as forum complaints, outdated articles, or false reviews—by ranking credible assets above them.</p>
          </li>
          <li>
            <h3>Reputation Building Services</h3>
            <p>Proactive positioning for founders, executives, and professionals. Establish thought leadership, optimize LinkedIn, and build an online presence that inspires trust.</p>
          </li>
        </ul>
      </section>

      <section class="why-choose-us">
        <h2>Why Clients Choose Reputation360</h2>
        <ul>
          <li><strong>Completely transparent pricing and timelines</strong>: No hidden fees, clear milestones, and realistic projections from day one.</li>
          <li><strong>100% white-hat, search-engine-approved methodologies</strong>: We build durable, organic authority that stands up to algorithm changes.</li>
          <li><strong>Discretion and confidentiality</strong>: Standard non-disclosure agreements and absolute privacy for sensitive personal and professional cases.</li>
        </ul>
      </section>

      <section class="how-it-works">
        <h2>How Reputation360's Process Works</h2>
        <ol>
          <li>
            <h3>Phase 1: Deep Audit & Assessment</h3>
            <p>We audit your current search results to identify risks, authority signals, and prioritize what to fix—so every move is grounded in data, not guesswork.</p>
          </li>
          <li>
            <h3>Phase 2: Custom Strategy</h3>
            <p>We build a custom strategy covering removal requests, suppression targets, optimized assets, and strategic link building.</p>
          </li>
          <li>
            <h3>Phase 3: Execution & Content Creation</h3>
            <p>We build high-authority profiles, publish authoritative articles, optimize existing assets, and engineer strategic links on your behalf.</p>
          </li>
          <li>
            <h3>Phase 4: Ongoing Monitoring & Defense</h3>
            <p>We protect what has been built, tracking positions, alerting you to new search changes, and responding to new threats before they gain ground.</p>
          </li>
        </ol>
      </section>

      <section class="home-faqs">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
          ${faqHtml}
        </div>
      </section>

      ${homeFromOurBlogSectionHtml()}

      <section class="contact-cta">
        <h2>Take Control of Your Search Results Today</h2>
        <p>Get a comprehensive, confidential audit of your digital presence. See exactly where you stand and how we can help you rebuild trust.</p>
        <p>Email us at info@thereputation360.com or book a consultation call to get started.</p>
      </section>
    </main>
  `;
}
