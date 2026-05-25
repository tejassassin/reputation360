import { SeoHead } from "../components/SeoHead.jsx";
import { BulletList, Prose, Section, Subheading } from "../components/legal/LegalDocPrimitives.jsx";
import { SEO } from "../data/seoPageMeta.js";

const toc = [
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

export default function TermsOfServicePage() {
  const seo = SEO.legal.terms;

  return (
    <>
      {seo ? (
        <SeoHead title={seo.title} description={seo.description} canonicalPath={seo.path} />
      ) : null}
      <main
        className="mx-auto max-w-3xl flex-1 px-4 py-28 md:px-6 md:py-32 lg:px-8"
        aria-labelledby="terms-of-service-heading"
      >
        <h1
          id="terms-of-service-heading"
          className="font-heading mb-3 text-3xl font-bold leading-tight text-navy md:text-4xl"
        >
          Terms of Service
        </h1>
        <p className="font-heading text-lg font-semibold text-navy/90">Reputation360</p>

        <div className="mt-10 space-y-10">
          <section className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 md:p-6">
            <h2 className="font-heading mb-3 text-lg font-bold text-navy">Please read these Terms of Service carefully</h2>
            <Prose>
              <p>
                By purchasing or using any Reputation360 services (&quot;Services&quot;), you agree to be bound by these Terms of
                Service. If you do not agree to these terms, do not purchase or use our Services.
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

          <Section id="about-these-terms" n={1} title="About These Terms">
            <Prose>
              <p>
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Client&quot;,
                &quot;you&quot;, or &quot;User&quot;) and Reputation360 (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms govern:
              </p>
            </Prose>
            <BulletList
              items={[
                "Your purchase and use of our online reputation management services",
                "Your access to our website at https://www.thereputation360.com and related platforms",
                "Any associated client portals, tools, reports, and communications",
                "Your relationship with Reputation360",
              ]}
            />
            <Prose>
              <p className="mt-4">
                These Terms work together with our{" "}
                <a
                  href="/privacy-policy"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  Privacy Policy
                </a>{" "}
                and any specific Service Agreement or Statement of Work you sign. If there is a conflict, the specific
                Service Agreement or Statement of Work will take precedence.
              </p>
            </Prose>
          </Section>

          <Section id="services-scope" n={2} title="Services and Scope">
            <Subheading>2.1 Description of Services</Subheading>
            <Prose>
              <p>Reputation360 provides online reputation management services, including but not limited to:</p>
            </Prose>
            <BulletList
              items={[
                "Monitoring of search results and online mentions of you or your brand",
                "Suppression of negative or unwanted search results",
                "Content creation and publication to improve search visibility",
                "SEO optimization strategies",
                "Review management and monitoring",
                "Digital PR and brand positioning",
                "Negative link remediation and takedown efforts",
              ]}
            />
            <Prose>
              <p className="mt-4">
                The specific services you have purchased are described in your Service Agreement or Statement of Work. All
                services are subject to the limitations and disclaimers in these Terms.
              </p>
            </Prose>
          </Section>

          <Section id="authorization" n={3} title="Your Authorization and Responsibilities">
            <Subheading>3.1 Authorization as Your Advocate</Subheading>
            <Prose>
              <p>
                By engaging our Services, you authorize Reputation360 to act as your reputation management advocate. You
                authorize us to:
              </p>
            </Prose>
            <BulletList
              items={[
                "Search the internet and publicly available databases for information about you or your brand",
                "Take appropriate actions to manage your online reputation",
                "Contact websites and content platforms on your behalf",
                "Create accounts and publish content in your name or on your behalf",
                "Use SEO techniques and optimization methods to promote positive content",
                "Implement strategies designed to reduce visibility of unwelcome content",
              ]}
            />
            <Prose>
              <p className="mt-4 font-semibold text-navy">Important</p>
              <p>
                Reputation360 is not your lawyer and does not provide legal advice. While we may pursue legal remedies (such
                as DMCA takedowns or defamation claims), you should consult an attorney for legal matters.
              </p>
            </Prose>

            <Subheading>3.2 Your Cooperation and Responsibilities</Subheading>
            <Prose>
              <p>The quality of our Services depends on your active participation. You agree to:</p>
            </Prose>
            <BulletList
              items={[
                "Provide accurate, complete, and truthful information",
                "Review and timely approve proposed content and actions",
                "Respond promptly to requests for information and approvals",
                "Cooperate in creating domain names, accounts, and online profiles",
                "Maintain confidentiality of strategies and techniques shared with you",
                "Keep your login credentials and account information secure",
              ]}
            />
            <Prose>
              <p className="mt-4">Delays or failures to respond may impede our ability to provide Services and achieve desired results.</p>
            </Prose>
          </Section>

          <Section id="account" n={4} title="Account Requirements">
            <Subheading>4.1 Eligibility</Subheading>
            <Prose>
              <p>
                By using our Services, you represent and warrant that you are at least 18 years of age (or the legal age of
                majority in your jurisdiction) and are legally authorized to enter into this Agreement. If you are using our
                Services on behalf of a company or entity, you represent that you have the legal authority to bind that
                entity to these Terms.
              </p>
            </Prose>

            <Subheading>4.2 Account Security</Subheading>
            <Prose>
              <p>
                You are responsible for maintaining the confidentiality of your login credentials and for all activities
                conducted through your account. You agree to:
              </p>
            </Prose>
            <BulletList
              items={[
                "Choose a strong password and keep it confidential",
                "Not share your account with anyone else",
                "Notify us immediately if you suspect unauthorized access",
                "Accept responsibility for all actions taken through your account",
              ]}
            />
          </Section>

          <Section id="payment" n={5} title="Payment and Fees">
            <Subheading>5.1 Fee Structure</Subheading>
            <Prose>
              <p>
                Fees for Services are specified in your Service Agreement or invoice. You agree to pay all fees in full by
                the due date. You are responsible for all sales, use, and other applicable taxes (except taxes on
                Reputation360&apos;s income).
              </p>
            </Prose>

            <Subheading>5.2 Payment Terms</Subheading>
            <BulletList
              items={[
                "Non-Refundable: All fees paid are non-refundable. Once Services commence, you cannot cancel and receive a refund, even if results are not met.",
                "Non-Cancellable: You cannot cancel your Service commitment early. You remain obligated to pay all fees for the agreed term.",
                "Auto-Renewal: If your Service Agreement includes auto-renewal, the Services will automatically renew at the end of each term at the same rate unless you provide written cancellation notice before the renewal date.",
                "Late Payment: If payment is not received within 30 days of the due date, Reputation360 may suspend or terminate Services and pursue collection.",
              ]}
            />

            <Subheading>5.3 Payment Methods</Subheading>
            <Prose>
              <p>
                By providing your payment method (credit card, bank account, etc.), you authorize Reputation360 to charge
                it for all fees. You represent that you have the legal right to use that payment method. We use secure
                third-party payment processors and do not store your full payment card information.
              </p>
            </Prose>

            <Subheading>5.4 Disputes and Billing Errors</Subheading>
            <Prose>
              <p>
                If you believe there is a billing error or unauthorized charge, contact us immediately at{" "}
                <a
                  href="mailto:support@thereputation360.com"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  support@thereputation360.com
                </a>{" "}
                or by phone. You must report disputes prior to the next billing cycle.
              </p>
            </Prose>
          </Section>

          <Section id="warranties" n={6} title="Warranties and Disclaimers">
            <Subheading>6.1 Disclaimers</Subheading>
            <EmphasisBlock title="REPUTATION360 DOES NOT GUARANTEE:">
              <BulletList
                items={[
                  "Identification or removal of any specific negative content",
                  "Suppression or de-indexing of unwanted search results",
                  "That published content will appear in search results",
                  "Specific ranking positions or placement of content",
                  "That Services will achieve desired results or outcomes",
                  "That Services will be error-free or uninterrupted",
                  "That negative content will not reappear or be re-published",
                ]}
              />
            </EmphasisBlock>
            <Prose>
              <p className="mt-4">
                The internet is complex and constantly changing. Search algorithms evolve. Websites publish new content
                daily. Reputation360&apos;s ability to identify, remove, suppress, or manage content is subject to the actions
                and policies of third parties, which Reputation360 cannot control.
              </p>
            </Prose>

            <Subheading>6.2 &quot;As Is&quot; Service</Subheading>
            <EmphasisBlock title={null}>
              <p className="font-semibold uppercase leading-snug tracking-wide">
                To the maximum extent permitted by law, Services are provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;.
                Reputation360 makes no other warranties, express or implied, including warranties of merchantability, fitness
                for a particular purpose, non-infringement, accuracy, or completeness.
              </p>
            </EmphasisBlock>

            <Subheading>6.3 Third-Party Actions</Subheading>
            <Prose>
              <p>
                Reputation360 is not responsible for actions or inactions of third parties, including website owners,
                search engines, content platforms, data brokers, or any other entities. We cannot control whether websites
                honor removal requests, content takedowns, or other remediation efforts.
              </p>
            </Prose>
          </Section>

          <Section id="liability" n={7} title="Limitation of Liability">
            <Subheading>7.1 Exclusion of Damages</Subheading>
            <EmphasisBlock title="TO THE MAXIMUM EXTENT PERMITTED BY LAW, REPUTATION360 SHALL NOT BE LIABLE FOR ANY:">
              <BulletList
                items={[
                  "Loss of profits, revenue, data, or business opportunities",
                  "Loss of reputation or goodwill",
                  "Indirect, incidental, special, consequential, or punitive damages",
                  "Business interruption or failed search results",
                  "Damages arising from third-party actions or inactions",
                ]}
              />
            </EmphasisBlock>
            <Prose>
              <p className="mt-4">This limitation applies even if Reputation360 has been advised of the possibility of such damages.</p>
            </Prose>

            <Subheading>7.2 Cap on Liability</Subheading>
            <EmphasisBlock title={null}>
              <p className="font-semibold uppercase leading-snug tracking-wide">
                REPUTATION360&apos;S MAXIMUM LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU TO
                REPUTATION360 DURING THE 12 MONTHS IMMEDIATELY PRECEDING THE CLAIM.
              </p>
            </EmphasisBlock>
            <Prose>
              <p className="mt-4">
                These limitations of liability are fundamental to this Agreement and the pricing of Services. Reputation360
                would not offer Services without these limitations.
              </p>
            </Prose>
          </Section>

          <Section id="ip" n={8} title="Intellectual Property Rights">
            <Subheading>8.1 Your Content</Subheading>
            <Prose>
              <p>
                You retain ownership of any information or content you provide to Reputation360 (&quot;Your Content&quot;). You grant
                Reputation360 a worldwide, royalty-free license to use Your Content solely for the purpose of providing
                Services.
              </p>
            </Prose>

            <Subheading>8.2 Content Created by Reputation360</Subheading>
            <Prose>
              <p>
                Reputation360 retains ownership of all content, strategies, methods, and works created by or on behalf of
                Reputation360 in connection with Services (&quot;Reputation360 Content&quot;), including blog posts, social media
                content, SEO strategies, and optimization techniques. However, following the end of Services and upon payment
                of all fees, ownership of published content that directly represents your brand shall transfer to you.
              </p>
            </Prose>

            <Subheading>8.3 Reputation360 Intellectual Property</Subheading>
            <Prose>
              <p>
                Reputation360 retains all intellectual property rights in our website, platforms, tools, methodologies, and
                any trademarks. You may not copy, modify, reverse engineer, or reproduce our intellectual property.
              </p>
            </Prose>
          </Section>

          <Section id="confidentiality" n={9} title="Confidentiality">
            <Prose>
              <p>
                Both you and Reputation360 agree to keep confidential all non-public information shared during our
                relationship, including strategies, techniques, pricing, and the existence of this Agreement. You agree not
                to disclose Reputation360&apos;s strategies without written permission. Reputation360 will not disclose the details
                of your case without your consent, except as required by law or to service providers who are bound by
                confidentiality.
              </p>
            </Prose>
          </Section>

          <Section id="conduct" n={10} title="User Conduct and Prohibited Activities">
            <Prose>
              <p>You agree not to use Services for any of the following:</p>
            </Prose>
            <BulletList
              items={[
                "Any illegal, fraudulent, or deceptive activities",
                "Misrepresenting facts or providing false information",
                "Harassment, abuse, threats, or defamation of others",
                "Infringement of intellectual property rights",
                "Unauthorized access to systems or data",
                "Transmitting malware, viruses, or harmful code",
                "Attempting to gain unauthorized access",
                "Using automated scraping or data mining tools",
                "Reselling or redistributing Services without permission",
              ]}
            />
            <Prose>
              <p className="mt-4">
                Reputation360 reserves the right to terminate Services immediately if you violate these conduct standards.
              </p>
            </Prose>
          </Section>

          <Section id="termination" n={11} title="Termination and Cancellation">
            <Subheading>11.1 Term</Subheading>
            <Prose>
              <p>
                Services commence on the date Reputation360 receives your initial payment and continue for the term specified
                in your Service Agreement (&quot;Initial Term&quot;). If your Agreement includes auto-renewal, Services will
                automatically renew for successive periods unless cancelled.
              </p>
            </Prose>

            <Subheading>11.2 No Early Termination</Subheading>
            <Prose>
              <p>
                You may NOT terminate or cancel Services early for convenience. You remain obligated to pay all fees for the
                full Initial Term and any Renewal Term, regardless of results or circumstances.
              </p>
            </Prose>

            <Subheading>11.3 Cancellation for Auto-Renewal</Subheading>
            <Prose>
              <p>
                If your Services include auto-renewal, you may cancel renewal by providing written notice at least 30 days
                before the end of the current term. Contact:{" "}
                <a
                  href="mailto:support@thereputation360.com"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  support@thereputation360.com
                </a>{" "}
                or call our office.
              </p>
            </Prose>

            <Subheading>11.4 Effect of Termination</Subheading>
            <Prose>
              <p>Upon termination:</p>
            </Prose>
            <BulletList
              items={[
                "All rights granted to you under this Agreement immediately cease",
                "Reputation360 will stop providing Services",
                "Published content may be removed or allowed to lapse at Reputation360's discretion",
                "You must pay all outstanding fees",
                "Sections regarding warranties, liability, confidentiality, and dispute resolution survive termination",
              ]}
            />
          </Section>

          <Section id="dispute" n={12} title="Dispute Resolution and Governing Law">
            <Subheading>12.1 Governing Law</Subheading>
            <Prose>
              <p>
                These Terms shall be governed by and construed under the laws of India, without regard to its conflict of law
                principles. The United Nations Convention on Contracts for the International Sale of Goods shall not apply.
              </p>
            </Prose>

            <Subheading>12.2 Dispute Resolution</Subheading>
            <Prose>
              <p>
                Any dispute, claim, or controversy arising out of or relating to this Agreement shall first be addressed
                through good faith negotiation between the parties. If negotiation fails, the parties agree to submit to
                binding arbitration or litigation as may be permitted under applicable law in India.
              </p>
            </Prose>

            <Subheading>12.3 Limitations on Claims</Subheading>
            <Prose>
              <p>
                Any legal action arising from this Agreement must be filed within one year of when the cause of action arose.
                After one year, claims are barred.
              </p>
            </Prose>
          </Section>

          <Section id="general" n={13} title="General Provisions">
            <Subheading>13.1 Entire Agreement</Subheading>
            <Prose>
              <p>
                This Agreement, together with your Service Agreement and our{" "}
                <a
                  href="/privacy-policy"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  Privacy Policy
                </a>
                , constitutes the entire agreement between you and Reputation360. All prior discussions and understandings are
                superseded.
              </p>
            </Prose>

            <Subheading>13.2 Amendments</Subheading>
            <Prose>
              <p>
                Reputation360 may modify these Terms at any time. We will provide notice of material changes via email or on
                our website. Your continued use of Services constitutes acceptance of modified Terms.
              </p>
            </Prose>

            <Subheading>13.3 Notices</Subheading>
            <Prose>
              <p>
                Any notices required under this Agreement should be sent to{" "}
                <a
                  href="mailto:support@thereputation360.com"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  support@thereputation360.com
                </a>{" "}
                or by mail to our registered address in India.
              </p>
            </Prose>

            <Subheading>13.4 Assignment</Subheading>
            <Prose>
              <p>
                You may not assign these Terms or your rights without written consent. Reputation360 may assign these Terms to
                affiliates or successors.
              </p>
            </Prose>

            <Subheading>13.5 Severability</Subheading>
            <Prose>
              <p>If any provision of this Agreement is found unenforceable, the remaining provisions shall continue in effect.</p>
            </Prose>

            <Subheading>13.6 Relationship</Subheading>
            <Prose>
              <p>
                Reputation360 and you are independent parties. Neither party is an agent, employee, or partner of the other,
                and neither has authority to represent the other.
              </p>
            </Prose>

            <Subheading>13.7 No Publicity</Subheading>
            <Prose>
              <p>
                Neither party may use the other&apos;s name, logo, or brand in marketing or publicity without prior written consent.
              </p>
            </Prose>
          </Section>

          <section
            id="contact-info"
            className="scroll-mt-28 border-t border-slate-200/80 pt-10"
            aria-labelledby="terms-contact-heading"
          >
            <h2 id="terms-contact-heading" className="font-heading mb-5 text-xl font-bold text-navy md:text-2xl">
              Contact information
            </h2>
            <Prose>
              <p>For questions about these Terms or to report violations:</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@thereputation360.com"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  hello@thereputation360.com
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
                © 2026 Reputation360. These Terms of Service are binding on all users. By using our Services, you acknowledge
                that you have read, understood, and agree to be bound by these Terms.
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
