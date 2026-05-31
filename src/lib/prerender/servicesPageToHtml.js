import { SERVICES_FAQ_ITEMS } from "../../data/servicesFaqItems.js";
import { servicesRelatedContentToHtml } from "./servicesRelatedContentToHtml.js";
import { escapeHtml } from "./html.js";

const SERVICES_HERO_INTRO =
  "Every day a damaging result sits on page one, it costs you clients, deals, and trust. Reputation360 manages what people find when they search your name.";

export function servicesPageToHtml() {
  const faqHtml = SERVICES_FAQ_ITEMS.map(
    (item) => `
      <div class="faq-item">
        <h3>${escapeHtml(item.question)}</h3>
        <p>${escapeHtml(item.answer)}</p>
      </div>`
  ).join("\n");

  return `
    <header class="services-hero">
      <h1>Online Reputation Management Services</h1>
      <h2>You Worked Hard to Build Your Reputation. We Make Sure Google Reflects It.</h2>
      <p>${escapeHtml(SERVICES_HERO_INTRO)}</p>
      
      <div class="cost-of-inaction">
        <p><strong>The cost of doing nothing:</strong> A negative result in positions 1-3 can cause up to 60% of prospective clients to disengage before making contact. Every month without intervention compounds the damage - lost deals, declined introductions, abandoned applications.</p>
      </div>
    </header>

    <main>
      <section class="services-hub-navigation">
        <h2>Our Core Offerings</h2>
        <ul>
          <li><a href="/services/online-reputation-management">Online Reputation Management (ORM)</a></li>
          <li><a href="/services/negative-link-suppression">Negative Link Suppression</a></li>
          <li><a href="/services/reputation-building-services">Reputation Building Services</a></li>
        </ul>
      </section>

      <section class="what-we-do">
        <h2>What We Do</h2>
        <p>We identify what the internet says about you, reshape the narrative with content that reflects your truth, and build the kind of authority that makes the right story stick.</p>
        <ul>
          <li>
            <h3>Search & page-one recovery</h3>
            <p>We work to displace harmful links and improve what people see first when they search your name or business.</p>
          </li>
          <li>
            <h3>Positive Content Creation</h3>
            <p>We publish high-quality content across trusted channels to strengthen your reputation footprint.</p>
          </li>
          <li>
            <h3>Brand & Visibility Growth</h3>
            <p>From profile optimization to social proof, we help your brand look credible and discoverable.</p>
          </li>
        </ul>
      </section>

      <section class="our-results">
        <h2>Our Results</h2>
        <p>Every figure below comes from a completed engagement. We share them so you can walk in knowing what success looks like—and how long it realistically takes to get there.</p>
        <ul>
          <li>
            <h3>Page 1</h3>
            <p>Cleared for the majority of clients who complete a full campaign. Based on 200+ client engagements (2019-2024). Results vary by case complexity and source authority.</p>
          </li>
          <li>
            <h3>8-11 months</h3>
            <p>Typical time to meaningful page one displacement for most cases. High-authority sources or active media coverage may take longer.</p>
          </li>
        </ul>
      </section>

      <section class="flagship-offering">
        <h2>Online Reputation Management & Negative Link Suppression</h2>
        <p>Our primary service. We audit everything search engines surface about you, build a content strategy that outranks harmful results, and systematically push negative links beyond page one—where virtually no one will find them.</p>
        
        <h3>Example Page-One Transformations</h3>
        <div class="scenarios">
          <div class="individual-scenario">
            <h4>For Individuals:</h4>
            <ul>
              <li><strong>Before:</strong> Court filing resurfaces, anonymous threads, or one-sided reviews dominate the top search results.</li>
              <li><strong>After:</strong> Verified personal biography, professional LinkedIn profile, and trusted third-party directories outrank and push negative content deep to page 3+.</li>
            </ul>
          </div>
          <div class="company-scenario">
            <h4>For Companies & Brands:</h4>
            <ul>
              <li><strong>Before:</strong> High-ranking consumer complaints, viral forum controversies, or low Glassdoor scores.</li>
              <li><strong>After:</strong> Corporate website with clear positioning, optimized employee advocacy pages, and authoritative press coverage.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="removal-vs-suppression">
        <h2>Removal or Suppression?</h2>
        <p>Not every negative result can be permanently deleted. Here is an honest breakdown of both routes.</p>
        
        <div class="columns">
          <div class="direct-removal">
            <h3>Direct Removal</h3>
            <p>Permanent deletion of content from its source. Applicable for:</p>
            <ul>
              <li>Defamatory content (legal channel)</li>
              <li>Copyright or privacy violations</li>
              <li>Platform terms of service breaches</li>
              <li>Right to be forgotten (GDPR-eligible)</li>
              <li>Outdated or factually incorrect indexed content</li>
            </ul>
          </div>
          
          <div class="suppression-strategy">
            <h3>Suppression Strategy</h3>
            <p>The most reliable and broadly applicable method. We build content that outranks negative results and pushes them to page 3 and beyond. Effective for:</p>
            <ul>
              <li>Legacy negative press or articles</li>
              <li>Review-based complaints and forum threads</li>
              <li>Social media content outside your control</li>
              <li>Content that does not qualify for direct removal</li>
              <li>Any situation requiring long-term search control</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="timeline">
        <h2>How Long Does It Take?</h2>
        <ol>
          <li>
            <strong>Phase 1: Weeks 1-4 — Audit & Launch</strong>
            <p>We map search results, identify authority levels, lay out content plans, and submit early removal requests.</p>
          </li>
          <li>
            <strong>Phase 2: Months 2-4 — Early Movement</strong>
            <p>Your new content starts ranking. Positive results begin climbing and negative results show early movement downwards.</p>
          </li>
          <li>
            <strong>Phase 3: Months 5-8 — Significant Shift</strong>
            <p>For most clients, the main negative results drop off page one during this window while positive content solidifies its position.</p>
          </li>
          <li>
            <strong>Phase 4: Months 8-11 — Full Transformation</strong>
            <p>Unwanted content stays deep in search rankings, while page one reflects your professional priorities. Transition to ongoing defense.</p>
          </li>
        </ol>
      </section>

      <section class="services-faqs">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
          ${faqHtml}
        </div>
      </section>

      ${servicesRelatedContentToHtml()}
    </main>
  `;
}
