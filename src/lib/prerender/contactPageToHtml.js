import { escapeHtml } from "./html.js";

export function contactPageToHtml() {
  return `
    <header class="contact-hero">
      <h1>Contact Reputation360</h1>
      <p class="hero-intro">How to reach us</p>
      <p class="hero-description">Reach out through whichever channel feels most convenient to you. We are dedicated to providing responsive, confidential support.</p>
    </header>

    <main>
      <section class="contact-channels">
        <h2>Contact Our Reputation Management Team</h2>
        <ul>
          <li>
            <h3>Book a Call</h3>
            <p>Every reputation challenge is different. Book a call with us, and we'll take the time to understand your situation, your concerns, and the outcome you're hoping to achieve.</p>
            <p>Schedule a confidential meeting directly via our calendar scheduler.</p>
          </li>
          <li>
            <h3>WhatsApp</h3>
            <p>When something needs immediate attention, this is the fastest way to reach us.</p>
            <p>Send a direct secure WhatsApp message to our rapid response team.</p>
          </li>
          <li>
            <h3>Email</h3>
            <p>Reach out at info@thereputation360.com. Expect a detailed response within 8 hours.</p>
          </li>
        </ul>
      </section>

      <section class="what-happens-next">
        <h2>What Happens Next (Our Process Journey)</h2>
        <p>A transparent roadmap of your journey from first contact to a thriving digital reputation:</p>
        <ol>
          <li>
            <strong>01 — Discovery & Assessment</strong>
            <p>We get on a confidential call to understand your situation—the reputation damage, your goals, and everything we need to know.</p>
          </li>
          <li>
            <strong>02 — Digital Audit</strong>
            <p>We conduct a thorough audit of your digital footprint, identifying exactly what needs to be addressed.</p>
          </li>
          <li>
            <strong>03 — Tailored Strategy & Proposal</strong>
            <p>We present a clear, personalised plan built around your needs and send a formal proposal for your review.</p>
          </li>
          <li>
            <strong>04 — Contract & Onboarding</strong>
            <p>Once you're happy, we sign the contract, gather everything we need, and set the foundation for your campaign.</p>
          </li>
          <li>
            <strong>05 — Ecosystem Build</strong>
            <p>We build or rebuild your digital presence—social media profiles, websites, and your full online ecosystem.</p>
          </li>
          <li>
            <strong>06 — Active Execution & Reporting</strong>
            <p>Your strategy goes live. We execute across all channels, manage your content, and keep you updated with regular progress reports.</p>
          </li>
          <li>
            <strong>07 — Reputation Restored</strong>
            <p>A stronger, cleaner, and more authoritative digital presence—and a client who moves forward with confidence.</p>
          </li>
        </ol>
      </section>

      <section class="confidentiality">
        <h2>Everything Is Confidential</h2>
        <p>Everything you share with us stays with us—no exceptions. We do not discuss client situations with third parties, reference engagements publicly, or share any information you provide. Our security architecture ensures your data remains protected at all times. Your privacy is a commitment we stand behind unconditionally.</p>
      </section>
    </main>
  `;
}
