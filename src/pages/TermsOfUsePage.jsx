import { SeoHead } from "../components/SeoHead.jsx";
import { BulletList, Prose, Section, Subheading } from "../components/legal/LegalDocPrimitives.jsx";
import { SEO } from "../data/seoPageMeta.js";

const toc = [
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
];

function EmphasisBlock({ title, children }) {
  return (
    <div className="mt-4 space-y-3 rounded-xl border border-slate-200/90 bg-slate-50/90 px-4 py-5 md:px-5 md:py-6">
      {title ? (
        <p className="font-heading text-sm font-bold uppercase tracking-wide text-navy md:text-base">{title}</p>
      ) : null}
      <div className="font-body text-sm leading-relaxed text-navy md:text-base">{children}</div>
    </div>
  );
}

export default function TermsOfUsePage() {
  const seo = SEO.legal.termsOfUse;

  return (
    <>
      {seo ? (
        <SeoHead title={seo.title} description={seo.description} canonicalPath={seo.path} />
      ) : null}
      <main
        className="mx-auto max-w-3xl flex-1 px-4 py-28 md:px-6 md:py-32 lg:px-8"
        aria-labelledby="terms-of-use-heading"
      >
        <h1
          id="terms-of-use-heading"
          className="font-heading mb-3 text-3xl font-bold leading-tight text-navy md:text-4xl"
        >
          Website Terms of Use
        </h1>
        <p className="font-heading text-lg font-semibold text-navy/90">Reputation360</p>

        <div className="mt-10 space-y-10">
          <section className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 md:p-6">
            <Prose>
              <p>
                Welcome to Reputation360&apos;s website (&quot;Website&quot;). These Website Terms of Use govern your access to and use
                of our website at{" "}
                <a
                  href="https://www.thereputation360.com"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  https://www.thereputation360.com
                </a>
                . By accessing, browsing, or using our Website, you agree to comply with these terms. If you do not agree to
                these terms, please do not use the Website.
              </p>
            </Prose>
          </section>

          <nav
            aria-label="Table of contents"
            className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm md:p-6"
          >
            <h2 className="font-heading mb-4 text-lg font-bold text-navy">Table of contents</h2>
            <ol className="list-decimal space-y-2 pl-5 font-body text-sm text-steel marker:font-semibold marker:text-navy md:text-base">
              {toc.map((row) => (
                <li key={row.id}>
                  <a
                    href={`#${row.id}`}
                    className="text-[#4CAF50] underline decoration-[#4CAF50]/35 underline-offset-2 transition-colors hover:text-[#3db846]"
                  >
                    {row.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <Section id="access" n={1} title="Website Access and Use">
            <Subheading>1.1 Grant of access</Subheading>
            <Prose>
              <p>
                Reputation360 grants you a non-exclusive, non-transferable, limited license to access and use the Website
                for lawful purposes. This license is revocable at any time for violation of these terms.
              </p>
            </Prose>
            <Subheading>1.2 Website availability</Subheading>
            <Prose>
              <p>
                The Website is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. Reputation360 does not guarantee the
                Website will be available at all times or free from errors. We reserve the right to modify, suspend, or
                discontinue the Website at any time.
              </p>
            </Prose>
            <Subheading>1.3 Acceptable browsers</Subheading>
            <Prose>
              <p>
                The Website is designed to work with current versions of major browsers (Chrome, Firefox, Safari, Edge).
                Compatibility with older browsers or non-standard clients is not guaranteed.
              </p>
            </Prose>
          </Section>

          <Section id="eligibility" n={2} title="User Eligibility">
            <Subheading>2.1 Age requirements</Subheading>
            <Prose>
              <p>
                You represent that you are at least 18 years old or the age of majority in your jurisdiction. If you are
                under 18, you may only use the Website with parental or guardian consent.
              </p>
            </Prose>
            <Subheading>2.2 Jurisdictional restrictions</Subheading>
            <Prose>
              <p>
                If you are located in a jurisdiction where access to or use of the Website is prohibited, you must not
                access or use the Website. Reputation360 does not knowingly offer services to prohibited jurisdictions.
              </p>
            </Prose>
          </Section>

          <Section id="acceptable-use" n={3} title="Acceptable Use Policy">
            <Prose>
              <p>
                Your use of the Website must also comply with our{" "}
                <a
                  href="/acceptable-use-policy"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  Acceptable Use Policy
                </a>
                , which forms part of your agreement with us.
              </p>
            </Prose>
            <Subheading>3.1 Prohibited activities</Subheading>
            <Prose>
              <p>You agree not to use the Website to:</p>
            </Prose>
            <BulletList
              items={[
                "Violate any applicable laws, regulations, or third-party rights",
                "Transmit viruses, malware, or harmful code",
                "Conduct hacking, phishing, or unauthorized access attempts",
                "Scrape, crawl, or extract Website content without permission",
                "Spam, harass, or abuse other Website users",
                "Conduct denial-of-service (DoS) or distributed DoS (DDoS) attacks",
                "Reverse engineer, decompile, or disassemble Website code",
                "Bypass security measures or access controls",
                "Copy or mimic the Website's design or functionality",
                "Use automated tools without permission",
              ]}
            />
            <Subheading>3.2 Monitoring</Subheading>
            <Prose>
              <p>
                Reputation360 reserves the right to monitor Website usage and take action against users who violate these
                terms, including account suspension or termination.
              </p>
            </Prose>
          </Section>

          <Section id="user-content" n={4} title="User Content">
            <Subheading>4.1 Content submission</Subheading>
            <Prose>
              <p>
                If you submit any content to the Website (comments, feedback, testimonials, or other materials), you retain
                ownership of that content but grant Reputation360 a worldwide, royalty-free, perpetual, irrevocable,
                non-exclusive license to use, reproduce, modify, and distribute the content.
              </p>
            </Prose>
            <Subheading>4.2 Your representations</Subheading>
            <Prose>
              <p>You represent and warrant that:</p>
            </Prose>
            <BulletList
              items={[
                "You own or have the right to submit the content",
                "The content does not infringe third-party intellectual property rights",
                "The content is accurate, truthful, and not misleading",
                "The content does not violate applicable laws or third-party rights",
              ]}
            />
            <Subheading>4.3 Content removal</Subheading>
            <Prose>
              <p>
                Reputation360 reserves the right to remove user content that violates these terms, applicable laws, or is
                otherwise objectionable. Content removal may occur without notice in urgent circumstances.
              </p>
            </Prose>
          </Section>

          <Section id="ip" n={5} title="Intellectual Property Rights">
            <Subheading>5.1 Website ownership</Subheading>
            <Prose>
              <p>
                The Website, including all content, design, graphics, text, images, videos, logos, and functionality, is the
                property of Reputation360 or its licensors. All rights are reserved.
              </p>
            </Prose>
            <Subheading>5.2 Limited license</Subheading>
            <Prose>
              <p>
                You are granted a limited, non-exclusive license to view and use the Website for personal, non-commercial
                purposes. You may not:
              </p>
            </Prose>
            <BulletList
              items={[
                "Reproduce, modify, or create derivative works",
                "Distribute, sell, or license Website content",
                "Use Website content for commercial purposes",
                "Remove copyright notices or attribution",
              ]}
            />
            <Subheading>5.3 Trademarks</Subheading>
            <Prose>
              <p>
                &quot;Reputation360&quot;, the Reputation360 logo, and other trademarks are the property of Reputation360. You may not
                use these trademarks without express written permission.
              </p>
            </Prose>
          </Section>

          <Section id="third-party" n={6} title="Third-Party Links and Content">
            <Subheading>6.1 External links</Subheading>
            <Prose>
              <p>
                The Website may contain links to third-party websites. Reputation360 does not endorse, control, or assume
                responsibility for these external sites. Your use of external sites is governed by their terms, not ours.
              </p>
            </Prose>
            <Subheading>6.2 Third-party content</Subheading>
            <Prose>
              <p>
                The Website may display search results, news, or other content from third-party sources. Reputation360 does
                not endorse or guarantee the accuracy of this content. Third-party content is subject to the terms of its
                original source.
              </p>
            </Prose>
          </Section>

          <Section id="disclaimers" n={7} title="Disclaimers">
            <Subheading>7.1 &quot;As-is&quot; disclaimer</Subheading>
            <EmphasisBlock title='THE WEBSITE IS PROVIDED "AS-IS" AND "AS-AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. REPUTATION360 DISCLAIMS ALL WARRANTIES, INCLUDING:'>
              <BulletList
                items={["Merchantability", "Fitness for a particular purpose", "Non-infringement", "Accuracy or completeness of content"]}
              />
            </EmphasisBlock>
            <Subheading>7.2 No professional advice</Subheading>
            <Prose>
              <p>
                The Website provides general information only and is not professional advice. Reputation360 does not provide
                legal, financial, business, or other professional advice. Do not rely on Website content for decisions
                without consulting qualified professionals.
              </p>
            </Prose>
            <Subheading>7.3 Availability disclaimer</Subheading>
            <Prose>
              <p>
                Reputation360 does not warrant that the Website will be uninterrupted, error-free, or secure. The Website may
                be unavailable for maintenance, updates, or technical issues.
              </p>
            </Prose>
          </Section>

          <Section id="liability" n={8} title="Limitation of Liability">
            <Subheading>8.1 Limitation</Subheading>
            <EmphasisBlock title="TO THE MAXIMUM EXTENT PERMITTED BY LAW, REPUTATION360 SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING:">
              <BulletList
                items={[
                  "Lost profits or revenue",
                  "Lost data or business interruption",
                  "Damages from viruses, malware, or security breaches",
                  "Damages from third-party conduct or content",
                ]}
              />
            </EmphasisBlock>
            <Subheading>8.2 Cap on liability</Subheading>
            <EmphasisBlock title={null}>
              <p className="font-semibold uppercase leading-snug tracking-wide">
                REPUTATION360&apos;S TOTAL LIABILITY FOR ANY CLAIM ARISING FROM OR RELATED TO THE WEBSITE SHALL NOT EXCEED $100 USD.
                SOME JURISDICTIONS DO NOT ALLOW LIABILITY LIMITATIONS, SO THIS MAY NOT APPLY TO YOU.
              </p>
            </EmphasisBlock>
          </Section>

          <Section id="indemnification" n={9} title="Indemnification">
            <Prose>
              <p>
                You agree to indemnify, defend, and hold harmless Reputation360 and its officers, employees, agents, and
                representatives from any claims, damages, losses, or expenses (including attorney&apos;s fees) arising from:
              </p>
            </Prose>
            <BulletList
              items={[
                "Your use of the Website",
                "Your violation of these terms",
                "Your violation of applicable laws",
                "Your infringement of intellectual property rights",
                "Your user content or submissions",
              ]}
            />
          </Section>

          <Section id="modifications" n={10} title="Website Modifications">
            <Subheading>10.1 Changes to Website</Subheading>
            <Prose>
              <p>
                Reputation360 reserves the right to modify, update, or discontinue the Website (or any portion thereof) at
                any time, with or without notice. You agree to accept such modifications.
              </p>
            </Prose>
            <Subheading>10.2 Changes to terms</Subheading>
            <Prose>
              <p>
                Reputation360 may modify these terms at any time. Changes will be effective immediately upon posting. Your
                continued use of the Website constitutes acceptance of modified terms.
              </p>
            </Prose>
          </Section>

          <Section id="account-security" n={11} title="Account Security">
            <Subheading>11.1 User accounts</Subheading>
            <Prose>
              <p>
                If you create an account on the Website, you are responsible for maintaining the confidentiality of your login
                credentials and for all activities that occur under your account.
              </p>
            </Prose>
            <Subheading>11.2 Unauthorized access</Subheading>
            <Prose>
              <p>
                You agree to notify Reputation360 immediately of any unauthorized access to your account or any other security
                breach.
              </p>
            </Prose>
          </Section>

          <Section id="termination" n={12} title="Termination of Access">
            <Subheading>12.1 Termination rights</Subheading>
            <Prose>
              <p>
                Reputation360 may suspend or terminate your access to the Website at any time, for any reason, including
                violation of these terms.
              </p>
            </Prose>
            <Subheading>12.2 Survival</Subheading>
            <Prose>
              <p>
                Provisions that by their nature should survive termination (indemnification, limitation of liability,
                intellectual property) will survive any termination of access.
              </p>
            </Prose>
          </Section>

          <Section id="governing-law" n={13} title="Governing Law and Dispute Resolution">
            <Subheading>13.1 Governing law</Subheading>
            <Prose>
              <p>
                These Website Terms of Use are governed by and construed in accordance with the laws of India, without regard
                to conflict of law principles.
              </p>
            </Prose>
            <Subheading>13.2 Jurisdiction</Subheading>
            <Prose>
              <p>
                You agree to submit to the exclusive jurisdiction of the courts located in India for resolution of any
                disputes arising from these terms or your use of the Website.
              </p>
            </Prose>
            <Subheading>13.3 Dispute resolution</Subheading>
            <Prose>
              <p>
                Before filing a legal claim, you agree to first attempt to resolve any dispute through good-faith negotiation
                with Reputation360 for at least 30 days.
              </p>
            </Prose>
            <Subheading>13.4 Injunctive relief</Subheading>
            <Prose>
              <p>
                You acknowledge that violation of these terms may cause irreparable harm for which monetary damages are
                insufficient. Reputation360 may seek injunctive relief without posting bond.
              </p>
            </Prose>
          </Section>

          <section
            id="additional"
            className="scroll-mt-28 border-t border-slate-200/80 pt-10"
            aria-labelledby="tou-additional-heading"
          >
            <h2 id="tou-additional-heading" className="font-heading mb-5 text-xl font-bold text-navy md:text-2xl">
              Additional provisions
            </h2>
            <Subheading>Entire agreement</Subheading>
            <Prose>
              <p>
                These Website Terms of Use, along with our{" "}
                <a
                  href="/privacy-policy"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="/acceptable-use-policy"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  Acceptable Use Policy
                </a>
                , constitute the entire agreement between you and Reputation360 regarding the Website.
              </p>
            </Prose>
            <Subheading>Severability</Subheading>
            <Prose>
              <p>
                If any provision of these terms is invalid or unenforceable, the remaining provisions will continue in full
                force and effect.
              </p>
            </Prose>
            <Subheading>Waiver</Subheading>
            <Prose>
              <p>
                Reputation360&apos;s failure to enforce any right does not constitute a waiver of that right.
              </p>
            </Prose>
            <Subheading>Assignment</Subheading>
            <Prose>
              <p>
                You may not assign these terms or your rights under them. Reputation360 may assign these terms without
                restriction.
              </p>
            </Prose>
          </section>

          <section
            id="contact"
            className="scroll-mt-28 border-t border-slate-200/80 pt-10"
            aria-labelledby="tou-contact-heading"
          >
            <h2 id="tou-contact-heading" className="font-heading mb-5 text-xl font-bold text-navy md:text-2xl">
              Contact information
            </h2>
            <Prose>
              <p>For questions about these Website Terms of Use:</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:support@thereputation360.com"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  support@thereputation360.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.thereputation360.com"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  https://www.thereputation360.com
                </a>
              </p>
              <p className="mt-8 text-sm text-slate-500">
                © 2026 Reputation360. These Website Terms of Use are binding on all users of our website. By using the
                Website, you acknowledge and agree to these terms.
              </p>
            </Prose>
          </section>
        </div>

        <p className="font-body mt-12 text-lg text-navy">
          <a href="/contact" className="font-semibold text-[#4CAF50] transition-colors hover:text-[#3db846]">
            Contact us
          </a>{" "}
          for other enquiries.
        </p>
      </main>
    </>
  );
}
