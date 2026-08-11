import { SeoHead } from "../components/SeoHead.jsx";
import { BulletList, Prose, Section, Subheading } from "../components/legal/LegalDocPrimitives.jsx";
import { SEO } from "../data/seoPageMeta.js";

const LINK_CLS =
  "font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]";

const toc = [
  { id: "part-a", label: "Part A - Terms of Service", heading: true },
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

  { id: "part-b", label: "Part B - Acceptable Use Policy", heading: true },
  { id: "aup-overview", label: "Policy Overview" },
  { id: "aup-prohibited", label: "Prohibited Activities" },
  { id: "aup-account", label: "Account and Authentication Rules" },
  { id: "aup-content", label: "Content and Communication Standards" },
  { id: "aup-ip", label: "Intellectual Property and Copyright" },
  { id: "aup-security", label: "Security and System Protection" },
  { id: "aup-compliance", label: "Compliance and Legal Requirements" },
  { id: "aup-enforcement", label: "Enforcement and Violations" },
  { id: "aup-suspension", label: "Account Suspension and Termination" },
  { id: "aup-indemnification", label: "Indemnification" },

  { id: "part-c", label: "Part C - Website Terms of Use", heading: true },
  { id: "tou-access", label: "Website Access and Use" },
  { id: "tou-eligibility", label: "User Eligibility" },
  { id: "tou-acceptable-use", label: "Acceptable Use" },
  { id: "tou-user-content", label: "User Content" },
  { id: "tou-ip", label: "Intellectual Property Rights" },
  { id: "tou-third-party", label: "Third-Party Links and Content" },
  { id: "tou-disclaimers", label: "Disclaimers" },
  { id: "tou-liability", label: "Limitation of Liability" },
  { id: "tou-indemnification", label: "Indemnification" },
  { id: "tou-modifications", label: "Website Modifications" },
  { id: "tou-account-security", label: "Account Security" },
  { id: "tou-termination", label: "Termination of Access" },
  { id: "tou-governing-law", label: "Governing Law and Dispute Resolution" },
  { id: "tou-additional", label: "Additional Provisions" },

  { id: "contact-info", label: "Contact Information", heading: false },
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

function PartHeading({ id, children }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 border-b-2 border-navy/20 pb-3 font-heading text-2xl font-bold text-navy md:text-3xl"
    >
      {children}
    </h2>
  );
}

let sectionCounter = 0;
function N() {
  sectionCounter += 1;
  return sectionCounter;
}

export default function TermsOfServicePage() {
  const seo = SEO.legal.terms;
  sectionCounter = 0;

  return (
    <>
      {seo ? (
        <SeoHead title={seo.title} description={seo.description} canonicalPath={seo.path} />
      ) : null}
      <main
        className="mx-auto max-w-3xl flex-1 px-4 py-28 md:px-6 md:py-32 lg:px-8"
        aria-labelledby="terms-heading"
      >
        <h1
          id="terms-heading"
          className="font-heading mb-3 text-3xl font-bold leading-tight text-navy md:text-4xl"
        >
          Terms, Policies & Conditions
        </h1>
        <p className="font-heading text-lg font-semibold text-navy/90">Reputation360</p>

        <div className="mt-10 space-y-10">
          <section className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 md:p-6">
            <h2 className="font-heading mb-3 text-lg font-bold text-navy">Please read carefully</h2>
            <Prose>
              <p>
                This document combines our Terms of Service, Acceptable Use Policy, and Website Terms
                of Use into a single binding agreement. By purchasing, accessing, or using any
                Reputation360 services or website, you agree to all parts of this document. If you do
                not agree, do not use our services or website.
              </p>
            </Prose>
          </section>

          {/* --- Table of Contents --- */}
          <nav
            aria-label="Table of contents"
            className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm md:p-6"
          >
            <h2 className="font-heading mb-4 text-lg font-bold text-navy">Table of contents</h2>
            <ol className="list-decimal space-y-2 pl-5 font-body text-sm text-steel marker:font-semibold marker:text-navy md:text-base">
              {toc.map((row) => (
                <li key={row.id} className={row.heading ? "list-none -ml-5 mt-4 first:mt-0" : ""}>
                  <a
                    href={`#${row.id}`}
                    className={
                      row.heading
                        ? "font-heading text-base font-bold text-navy no-underline md:text-lg"
                        : "text-[#4CAF50] underline decoration-[#4CAF50]/35 underline-offset-2 transition-colors hover:text-[#3db846]"
                    }
                  >
                    {row.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ================================================================
              PART A - TERMS OF SERVICE
             ================================================================ */}
          <PartHeading id="part-a">Part A - Terms of Service</PartHeading>

          <Section id="about-these-terms" n={N()} title="About These Terms">
            <Prose>
              <p>
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Client&quot;,
                &quot;you&quot;, or &quot;User&quot;) and Reputation360 (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms govern:
              </p>
            </Prose>
            <BulletList
              items={[
                "Your purchase and use of our Online Reputation Management services",
                "Your access to our website at https://www.thereputation360.com and related platforms",
                "Any associated client portals, tools, reports, and communications",
                "Your relationship with Reputation360",
              ]}
            />
            <Prose>
              <p className="mt-4">
                These Terms work together with our{" "}
                <a href="/privacy-policy" className={LINK_CLS}>Privacy Policy</a>{" "}
                and any specific Service Agreement or Statement of Work you sign. If there is a conflict, the specific
                Service Agreement or Statement of Work will take precedence.
              </p>
            </Prose>
          </Section>

          <Section id="services-scope" n={N()} title="Services and Scope">
            <Subheading>Description of Services</Subheading>
            <Prose>
              <p>Reputation360 provides Online Reputation Management services, including but not limited to:</p>
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

          <Section id="authorization" n={N()} title="Your Authorization and Responsibilities">
            <Subheading>Authorization as Your Advocate</Subheading>
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
            <Subheading>Your Cooperation and Responsibilities</Subheading>
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

          <Section id="account" n={N()} title="Account Requirements">
            <Subheading>Eligibility</Subheading>
            <Prose>
              <p>
                By using our Services, you represent and warrant that you are at least 18 years of age (or the legal age of
                majority in your jurisdiction) and are legally authorized to enter into this Agreement. If you are using our
                Services on behalf of a company or entity, you represent that you have the legal authority to bind that
                entity to these Terms.
              </p>
            </Prose>
            <Subheading>Account Security</Subheading>
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

          <Section id="payment" n={N()} title="Payment and Fees">
            <Subheading>Fee Structure</Subheading>
            <Prose>
              <p>
                Fees for Services are specified in your Service Agreement or invoice. You agree to pay all fees in full by
                the due date. You are responsible for all sales, use, and other applicable taxes (except taxes on
                Reputation360&apos;s income).
              </p>
            </Prose>
            <Subheading>Payment Terms</Subheading>
            <BulletList
              items={[
                "Non-Refundable: All fees paid are non-refundable. Once Services commence, you cannot cancel and receive a refund, even if results are not met.",
                "Non-Cancellable: You cannot cancel your Service commitment early. You remain obligated to pay all fees for the agreed term.",
                "Auto-Renewal: If your Service Agreement includes auto-renewal, the Services will automatically renew at the end of each term at the same rate unless you provide written cancellation notice before the renewal date.",
                "Late Payment: If payment is not received within 30 days of the due date, Reputation360 may suspend or terminate Services and pursue collection.",
              ]}
            />
            <Subheading>Payment Methods</Subheading>
            <Prose>
              <p>
                By providing your payment method (credit card, bank account, etc.), you authorize Reputation360 to charge
                it for all fees. You represent that you have the legal right to use that payment method. We use secure
                third-party payment processors and do not store your full payment card information.
              </p>
            </Prose>
            <Subheading>Disputes and Billing Errors</Subheading>
            <Prose>
              <p>
                If you believe there is a billing error or unauthorized charge, contact us immediately at{" "}
                <a href="mailto:support@thereputation360.com" className={LINK_CLS}>
                  support@thereputation360.com
                </a>{" "}
                or by phone. You must report disputes prior to the next billing cycle.
              </p>
            </Prose>
          </Section>

          <Section id="warranties" n={N()} title="Warranties and Disclaimers">
            <Subheading>Disclaimers</Subheading>
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
            <Subheading>&quot;As Is&quot; Service</Subheading>
            <EmphasisBlock title={null}>
              <p className="font-semibold uppercase leading-snug tracking-wide">
                To the maximum extent permitted by law, Services are provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;.
                Reputation360 makes no other warranties, express or implied, including warranties of merchantability, fitness
                for a particular purpose, non-infringement, accuracy, or completeness.
              </p>
            </EmphasisBlock>
            <Subheading>Third-Party Actions</Subheading>
            <Prose>
              <p>
                Reputation360 is not responsible for actions or inactions of third parties, including website owners,
                search engines, content platforms, data brokers, or any other entities. We cannot control whether websites
                honor removal requests, content takedowns, or other remediation efforts.
              </p>
            </Prose>
          </Section>

          <Section id="liability" n={N()} title="Limitation of Liability">
            <Subheading>Exclusion of Damages</Subheading>
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
            <Subheading>Cap on Liability</Subheading>
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

          <Section id="ip" n={N()} title="Intellectual Property Rights">
            <Subheading>Your Content</Subheading>
            <Prose>
              <p>
                You retain ownership of any information or content you provide to Reputation360 (&quot;Your Content&quot;). You grant
                Reputation360 a worldwide, royalty-free license to use Your Content solely for the purpose of providing
                Services.
              </p>
            </Prose>
            <Subheading>Content Created by Reputation360</Subheading>
            <Prose>
              <p>
                Reputation360 retains ownership of all content, strategies, methods, and works created by or on behalf of
                Reputation360 in connection with Services (&quot;Reputation360 Content&quot;), including blog posts, social media
                content, SEO strategies, and optimization techniques. However, following the end of Services and upon payment
                of all fees, ownership of published content that directly represents your brand shall transfer to you.
              </p>
            </Prose>
            <Subheading>Reputation360 Intellectual Property</Subheading>
            <Prose>
              <p>
                Reputation360 retains all intellectual property rights in our website, platforms, tools, methodologies, and
                any trademarks. You may not copy, modify, reverse engineer, or reproduce our intellectual property.
              </p>
            </Prose>
          </Section>

          <Section id="confidentiality" n={N()} title="Confidentiality">
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

          <Section id="conduct" n={N()} title="User Conduct and Prohibited Activities">
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

          <Section id="termination" n={N()} title="Termination and Cancellation">
            <Subheading>Term</Subheading>
            <Prose>
              <p>
                Services commence on the date Reputation360 receives your initial payment and continue for the term specified
                in your Service Agreement (&quot;Initial Term&quot;). If your Agreement includes auto-renewal, Services will
                automatically renew for successive periods unless cancelled.
              </p>
            </Prose>
            <Subheading>No Early Termination</Subheading>
            <Prose>
              <p>
                You may NOT terminate or cancel Services early for convenience. You remain obligated to pay all fees for the
                full Initial Term and any Renewal Term, regardless of results or circumstances.
              </p>
            </Prose>
            <Subheading>Cancellation for Auto-Renewal</Subheading>
            <Prose>
              <p>
                If your Services include auto-renewal, you may cancel renewal by providing written notice at least 30 days
                before the end of the current term. Contact:{" "}
                <a href="mailto:support@thereputation360.com" className={LINK_CLS}>
                  support@thereputation360.com
                </a>{" "}
                or call our office.
              </p>
            </Prose>
            <Subheading>Effect of Termination</Subheading>
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

          <Section id="dispute" n={N()} title="Dispute Resolution and Governing Law">
            <Subheading>Governing Law</Subheading>
            <Prose>
              <p>
                These Terms shall be governed by and construed under the laws of India, without regard to its conflict of law
                principles. The United Nations Convention on Contracts for the International Sale of Goods shall not apply.
              </p>
            </Prose>
            <Subheading>Dispute Resolution</Subheading>
            <Prose>
              <p>
                Any dispute, claim, or controversy arising out of or relating to this Agreement shall first be addressed
                through good faith negotiation between the parties. If negotiation fails, the parties agree to submit to
                binding arbitration or litigation as may be permitted under applicable law in India.
              </p>
            </Prose>
            <Subheading>Limitations on Claims</Subheading>
            <Prose>
              <p>
                Any legal action arising from this Agreement must be filed within one year of when the cause of action arose.
                After one year, claims are barred.
              </p>
            </Prose>
          </Section>

          <Section id="general" n={N()} title="General Provisions">
            <Subheading>Entire Agreement</Subheading>
            <Prose>
              <p>
                This Agreement, together with your Service Agreement and our{" "}
                <a href="/privacy-policy" className={LINK_CLS}>Privacy Policy</a>
                , constitutes the entire agreement between you and Reputation360. All prior discussions and understandings are
                superseded.
              </p>
            </Prose>
            <Subheading>Amendments</Subheading>
            <Prose>
              <p>
                Reputation360 may modify these Terms at any time. We will provide notice of material changes via email or on
                our website. Your continued use of Services constitutes acceptance of modified Terms.
              </p>
            </Prose>
            <Subheading>Notices</Subheading>
            <Prose>
              <p>
                Any notices required under this Agreement should be sent to{" "}
                <a href="mailto:support@thereputation360.com" className={LINK_CLS}>
                  support@thereputation360.com
                </a>{" "}
                or by mail to our registered address in India.
              </p>
            </Prose>
            <Subheading>Assignment</Subheading>
            <Prose>
              <p>
                You may not assign these Terms or your rights without written consent. Reputation360 may assign these Terms to
                affiliates or successors.
              </p>
            </Prose>
            <Subheading>Severability</Subheading>
            <Prose>
              <p>If any provision of this Agreement is found unenforceable, the remaining provisions shall continue in effect.</p>
            </Prose>
            <Subheading>Relationship</Subheading>
            <Prose>
              <p>
                Reputation360 and you are independent parties. Neither party is an agent, employee, or partner of the other,
                and neither has authority to represent the other.
              </p>
            </Prose>
            <Subheading>No Publicity</Subheading>
            <Prose>
              <p>
                Neither party may use the other&apos;s name, logo, or brand in marketing or publicity without prior written consent.
              </p>
            </Prose>
          </Section>

          {/* ================================================================
              PART B - ACCEPTABLE USE POLICY
             ================================================================ */}
          <PartHeading id="part-b">Part B - Acceptable Use Policy</PartHeading>

          <Section id="aup-overview" n={N()} title="Policy Overview">
            <Subheading>Purpose</Subheading>
            <Prose>
              <p>
                This Acceptable Use Policy protects Reputation360, its users, and the broader internet community by
                establishing clear rules for how our services may and may not be used.
              </p>
            </Prose>
            <Subheading>Scope</Subheading>
            <Prose>
              <p>This policy applies to all users of Reputation360&apos;s services, including:</p>
            </Prose>
            <BulletList
              items={[
                "Individual clients purchasing services",
                "Business entities and corporations",
                "Authorized representatives and employees of client organizations",
                "Any individual accessing our platforms, portals, or services",
              ]}
            />
            <Subheading>Responsibility</Subheading>
            <Prose>
              <p>
                You are solely responsible for your use of our services. Reputation360 may investigate and take action
                against any account for violation of this policy. This may include immediate suspension or termination
                without prior notice in cases of severe violations.
              </p>
            </Prose>
          </Section>

          <Section id="aup-prohibited" n={N()} title="Prohibited Activities">
            <Subheading>Illegal and fraudulent activities</Subheading>
            <Prose>
              <p>You may not use our services for any illegal or fraudulent purpose, including:</p>
            </Prose>
            <BulletList
              items={[
                "Illegal activities: any activity that violates applicable laws, regulations, or ordinances in any jurisdiction",
                "Fraud and deception: misrepresenting facts, creating false identities, or deceiving others for financial gain",
                "Money laundering: using our services to hide, transfer, or conceal illegally obtained funds",
                "Terrorist activities: financing, planning, or conducting terrorist acts or activities",
                "Sanctions violations: violating export controls, trade embargoes, or sanctions programs (for example, OFAC)",
              ]}
            />
            <Subheading>Defamation and harmful content</Subheading>
            <Prose>
              <p>You may not use our services to:</p>
            </Prose>
            <BulletList
              items={[
                "Publish false or defamatory content: create, publish, or distribute knowingly false, misleading, or defamatory statements about individuals or organizations",
                "Harassment and abuse: harass, threaten, intimidate, bully, or abuse any person or group",
                "Hate speech: promote hatred, violence, or discrimination based on race, ethnicity, religion, gender, sexual orientation, disability, or other protected characteristics",
                "Privacy violations: publish private information (doxxing), intimate images without consent, or violate anyone's privacy rights",
                "Revenge porn: publish sexually explicit images without the subject's consent",
              ]}
            />
            <Subheading>Child safety</Subheading>
            <Prose>
              <p>You may not:</p>
            </Prose>
            <BulletList
              items={[
                "Use our services in any way that exploits, harms, or endangers children",
                "Create, distribute, or access child sexual abuse material (CSAM) in any form",
                "Groom, solicit, or facilitate any form of child exploitation",
                "Share content that sexualizes minors in any way",
              ]}
            />
            <Subheading>Misuse of our services</Subheading>
            <Prose>
              <p>You may not use our services to:</p>
            </Prose>
            <BulletList
              items={[
                "Violate platform terms: violate the terms of service of third-party websites, social platforms, or search engines",
                "Misrepresent authority: falsely represent yourself as someone you are not or claim authority you do not possess",
                "Impersonation: impersonate Reputation360 staff, other clients, or any third party",
                "Competitive misuse: use our services to harm, compete unfairly against, or conduct reconnaissance on competitors",
                "Resale or redistribution: resell, redistribute, or provide our services to third parties without authorization",
              ]}
            />
            <Subheading>Spam and manipulation</Subheading>
            <Prose>
              <p>You may not:</p>
            </Prose>
            <BulletList
              items={[
                "Send unsolicited commercial email, SMS, or messages (spam)",
                "Create fake reviews, ratings, or testimonials",
                "Engage in coordinated inauthentic behavior or manipulation",
                "Artificially inflate engagement metrics through bots, automation, or fake accounts",
                "Violate CAN-SPAM Act, GDPR email requirements, or anti-spam laws",
              ]}
            />
          </Section>

          <Section id="aup-account" n={N()} title="Account and Authentication Rules">
            <Subheading>Account ownership</Subheading>
            <Prose>
              <p>You may not:</p>
            </Prose>
            <BulletList
              items={[
                "Create multiple accounts to circumvent suspensions or bans",
                "Share your account credentials with others or allow unauthorized access",
                "Sell, trade, or transfer your account to another person",
                "Access another person's account without authorization",
              ]}
            />
            <Subheading>Account information</Subheading>
            <Prose>
              <p>You must:</p>
            </Prose>
            <BulletList
              items={[
                "Provide accurate, current, and truthful information when creating your account",
                "Update your account information if it changes",
                "Use your real name or your legal business name (not fake or misleading names)",
                "Maintain the confidentiality of your password and login credentials",
              ]}
            />
          </Section>

          <Section id="aup-content" n={N()} title="Content and Communication Standards">
            <Subheading>Content you provide</Subheading>
            <Prose>
              <p>
                For any content you provide to Reputation360 (client materials, information, testimonials, etc.), you must
                ensure:
              </p>
            </Prose>
            <BulletList
              items={[
                "Truthfulness: content is accurate, truthful, and not misleading",
                "Ownership: you own the content or have permission to provide it",
                "No infringement: content does not infringe on any intellectual property rights",
                "No violation: content does not violate any laws or third-party rights",
                "Professional: content is appropriate for professional business communication",
              ]}
            />
            <Subheading>Content Reputation360 creates</Subheading>
            <Prose>
              <p>When Reputation360 creates content on your behalf:</p>
            </Prose>
            <BulletList
              items={[
                "All content must be truthful, accurate, and not misleading",
                "Content must not misrepresent you, your company, or your services",
                "You approve all content before publication (as per our Terms of Service)",
                "You retain responsibility for the accuracy and legality of published content",
              ]}
            />
            <Subheading>Communications</Subheading>
            <Prose>
              <p>
                All communications with Reputation360 staff, other clients, or through our platforms must be:
              </p>
            </Prose>
            <BulletList
              items={[
                "Professional and respectful",
                "Free of threats, harassment, or abuse",
                "Honest and truthful",
                "Compliant with applicable laws (CAN-SPAM, GDPR, etc.)",
              ]}
            />
          </Section>

          <Section id="aup-ip" n={N()} title="Intellectual Property and Copyright">
            <Subheading>Respecting intellectual property</Subheading>
            <Prose>
              <p>You may not:</p>
            </Prose>
            <BulletList
              items={[
                "Infringe on copyrights, trademarks, patents, or trade secrets",
                "Use copyrighted content without proper attribution or permission",
                "Plagiarize or pass off others' work as your own",
                "Use trademarked logos or brand names without authorization",
                "Violate digital rights management (DRM) or access controls",
              ]}
            />
            <Subheading>DMCA compliance</Subheading>
            <Prose>
              <p>
                Reputation360 respects the Digital Millennium Copyright Act (DMCA) and other copyright laws. If you believe
                copyright infringement has occurred, you must report it to our DMCA agent with complete information. False
                DMCA claims may result in account termination.
              </p>
            </Prose>
          </Section>

          <Section id="aup-security" n={N()} title="Security and System Protection">
            <Subheading>Unauthorized access</Subheading>
            <Prose>
              <p>You may not attempt to:</p>
            </Prose>
            <BulletList
              items={[
                "Gain unauthorized access to our systems, networks, or databases",
                "Hack, exploit vulnerabilities, or circumvent security measures",
                "Conduct security testing without written permission",
                "Access others' data without authorization",
              ]}
            />
            <Subheading>Malware and harmful code</Subheading>
            <Prose>
              <p>You may not:</p>
            </Prose>
            <BulletList
              items={[
                "Transmit viruses, worms, malware, trojans, or other harmful code",
                "Create or distribute ransomware or extortion threats",
                "Conduct denial-of-service (DoS) attacks or distributed DoS (DDoS) attacks",
                "Use our services to attack third-party systems",
              ]}
            />
            <Subheading>Data protection</Subheading>
            <Prose>
              <p>You must:</p>
            </Prose>
            <BulletList
              items={[
                "Protect the confidentiality of client data and sensitive information",
                "Comply with data protection laws (GDPR, CCPA, DPDPA, etc.)",
                "Report any security breaches or data leaks immediately",
                "Not store, retain, or backup data beyond what is necessary",
              ]}
            />
          </Section>

          <Section id="aup-compliance" n={N()} title="Compliance and Legal Requirements">
            <Subheading>Regulatory compliance</Subheading>
            <Prose>
              <p>You must comply with all applicable laws, regulations, and requirements, including:</p>
            </Prose>
            <BulletList
              items={[
                "GDPR (EU) - data protection and privacy",
                "CCPA/CPRA (California) - consumer privacy rights",
                "DPDPA (India) - digital personal data protection",
                "PIPEDA (Canada) - personal information protection",
                "CAN-SPAM Act (US) - email marketing requirements",
                "HIPAA - if handling protected health information",
                "FTC regulations - unfair and deceptive practices",
                "Export controls and sanctions - OFAC and similar programs",
              ]}
            />
            <Subheading>Reputation management ethics</Subheading>
            <Prose>
              <p>When using our reputation management services, you must:</p>
            </Prose>
            <BulletList
              items={[
                "Not knowingly publish false or misleading information about yourself or others",
                "Disclose paid sponsorships, endorsements, or material connections when required by law",
                "Not pay for fake reviews or manipulated ratings",
                "Not violate third-party website terms when creating content or accounts",
                "Not use our services to manipulate search results through black-hat SEO",
              ]}
            />
          </Section>

          <Section id="aup-enforcement" n={N()} title="Enforcement and Violations">
            <Subheading>Monitoring and investigation</Subheading>
            <Prose>
              <p>Reputation360 reserves the right to:</p>
            </Prose>
            <BulletList
              items={[
                "Monitor your use of our services for violations",
                "Investigate suspected violations",
                "Review account activity, communications, and published content",
                "Cooperate with law enforcement and legal authorities",
                "Preserve evidence related to violations",
              ]}
            />
            <Subheading>Violation response</Subheading>
            <Prose>
              <p>Upon discovering a violation, Reputation360 may:</p>
            </Prose>
            <BulletList
              items={[
                "Warning: issue a warning and request corrective action",
                "Restriction: limit or restrict your access to certain features",
                "Content removal: remove violating content from our systems",
                "Suspension: temporarily suspend your account pending investigation",
                "Termination: terminate your account and relationship with Reputation360",
                "Legal action: pursue legal remedies, including lawsuits and criminal referrals",
              ]}
            />
            <Subheading>Severity levels</Subheading>
            <Prose>
              <p>
                Some violations may result in immediate account termination without warning, including:
              </p>
            </Prose>
            <BulletList
              items={[
                "Child safety violations",
                "Terrorist financing or sanctions violations",
                "Hacking, malware, or system attacks",
                "Defamation, hate speech, or severe harassment",
                "Repeated policy violations despite warnings",
              ]}
            />
          </Section>

          <Section id="aup-suspension" n={N()} title="Account Suspension and Termination">
            <Subheading>Suspension</Subheading>
            <Prose>
              <p>
                Your account may be temporarily suspended during investigation or as a disciplinary measure (typically 7-30
                days).
              </p>
              <p className="mt-4 font-semibold text-navy">During suspension</p>
            </Prose>
            <BulletList
              items={[
                "You lose access to your account and all services",
                "You remain liable for all fees",
                "Published content may be removed at our discretion",
                "Reinstatement is not guaranteed",
              ]}
            />
            <Subheading>Termination</Subheading>
            <Prose>
              <p>Reputation360 may terminate your account and relationship at any time for:</p>
            </Prose>
            <BulletList
              items={[
                "Violation of this Acceptable Use Policy",
                "Violation of our Terms of Service",
                "Non-payment or payment disputes",
                "Inactivity for 12+ months",
                "Breach of law or regulation",
                "Harm to Reputation360 or other users",
              ]}
            />
            <Subheading>Effects of termination</Subheading>
            <Prose>
              <p>Upon termination:</p>
            </Prose>
            <BulletList
              items={[
                "Your account access is permanently revoked",
                "All services cease immediately",
                "You remain liable for all fees through the contract end date",
                "Published content may be removed or left online at our discretion",
                "We may report violations to law enforcement if applicable",
                "You waive any claim to refund or compensation",
              ]}
            />
          </Section>

          <Section id="aup-indemnification" n={N()} title="Indemnification">
            <Prose>
              <p>
                You agree to indemnify, defend, and hold harmless Reputation360 and its officers, employees, agents, and
                representatives from any claims, damages, losses, liabilities, or expenses (including attorney&apos;s fees)
                arising from:
              </p>
            </Prose>
            <BulletList
              items={[
                "Your use of our services",
                "Your violation of this policy or any laws",
                "Content you provide or approve",
                "Your infringement of third-party intellectual property rights",
                "Defamation or other claims arising from your use of services",
              ]}
            />
          </Section>

          {/* ================================================================
              PART C - WEBSITE TERMS OF USE
             ================================================================ */}
          <PartHeading id="part-c">Part C - Website Terms of Use</PartHeading>

          <Section id="tou-access" n={N()} title="Website Access and Use">
            <Subheading>Grant of access</Subheading>
            <Prose>
              <p>
                Reputation360 grants you a non-exclusive, non-transferable, limited license to access and use the Website
                for lawful purposes. This license is revocable at any time for violation of these terms.
              </p>
            </Prose>
            <Subheading>Website availability</Subheading>
            <Prose>
              <p>
                The Website is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. Reputation360 does not guarantee the
                Website will be available at all times or free from errors. We reserve the right to modify, suspend, or
                discontinue the Website at any time.
              </p>
            </Prose>
            <Subheading>Acceptable browsers</Subheading>
            <Prose>
              <p>
                The Website is designed to work with current versions of major browsers (Chrome, Firefox, Safari, Edge).
                Compatibility with older browsers or non-standard clients is not guaranteed.
              </p>
            </Prose>
          </Section>

          <Section id="tou-eligibility" n={N()} title="User Eligibility">
            <Subheading>Age requirements</Subheading>
            <Prose>
              <p>
                You represent that you are at least 18 years old or the age of majority in your jurisdiction. If you are
                under 18, you may only use the Website with parental or guardian consent.
              </p>
            </Prose>
            <Subheading>Jurisdictional restrictions</Subheading>
            <Prose>
              <p>
                If you are located in a jurisdiction where access to or use of the Website is prohibited, you must not
                access or use the Website. Reputation360 does not knowingly offer services to prohibited jurisdictions.
              </p>
            </Prose>
          </Section>

          <Section id="tou-acceptable-use" n={N()} title="Acceptable Use">
            <Prose>
              <p>
                Your use of the Website must also comply with the Acceptable Use Policy in Part B of this document.
              </p>
            </Prose>
            <Subheading>Prohibited activities</Subheading>
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
            <Subheading>Monitoring</Subheading>
            <Prose>
              <p>
                Reputation360 reserves the right to monitor Website usage and take action against users who violate these
                terms, including account suspension or termination.
              </p>
            </Prose>
          </Section>

          <Section id="tou-user-content" n={N()} title="User Content">
            <Subheading>Content submission</Subheading>
            <Prose>
              <p>
                If you submit any content to the Website (comments, feedback, testimonials, or other materials), you retain
                ownership of that content but grant Reputation360 a worldwide, royalty-free, perpetual, irrevocable,
                non-exclusive license to use, reproduce, modify, and distribute the content.
              </p>
            </Prose>
            <Subheading>Your representations</Subheading>
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
            <Subheading>Content removal</Subheading>
            <Prose>
              <p>
                Reputation360 reserves the right to remove user content that violates these terms, applicable laws, or is
                otherwise objectionable. Content removal may occur without notice in urgent circumstances.
              </p>
            </Prose>
          </Section>

          <Section id="tou-ip" n={N()} title="Intellectual Property Rights">
            <Subheading>Website ownership</Subheading>
            <Prose>
              <p>
                The Website, including all content, design, graphics, text, images, videos, logos, and functionality, is the
                property of Reputation360 or its licensors. All rights are reserved.
              </p>
            </Prose>
            <Subheading>Limited license</Subheading>
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
            <Subheading>Trademarks</Subheading>
            <Prose>
              <p>
                &quot;Reputation360&quot;, the Reputation360 logo, and other trademarks are the property of Reputation360. You may not
                use these trademarks without express written permission.
              </p>
            </Prose>
          </Section>

          <Section id="tou-third-party" n={N()} title="Third-Party Links and Content">
            <Subheading>External links</Subheading>
            <Prose>
              <p>
                The Website may contain links to third-party websites. Reputation360 does not endorse, control, or assume
                responsibility for these external sites. Your use of external sites is governed by their terms, not ours.
              </p>
            </Prose>
            <Subheading>Third-party content</Subheading>
            <Prose>
              <p>
                The Website may display search results, news, or other content from third-party sources. Reputation360 does
                not endorse or guarantee the accuracy of this content. Third-party content is subject to the terms of its
                original source.
              </p>
            </Prose>
          </Section>

          <Section id="tou-disclaimers" n={N()} title="Disclaimers">
            <Subheading>&quot;As-is&quot; disclaimer</Subheading>
            <EmphasisBlock title='THE WEBSITE IS PROVIDED "AS-IS" AND "AS-AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. REPUTATION360 DISCLAIMS ALL WARRANTIES, INCLUDING:'>
              <BulletList
                items={["Merchantability", "Fitness for a particular purpose", "Non-infringement", "Accuracy or completeness of content"]}
              />
            </EmphasisBlock>
            <Subheading>No professional advice</Subheading>
            <Prose>
              <p>
                The Website provides general information only and is not professional advice. Reputation360 does not provide
                legal, financial, business, or other professional advice. Do not rely on Website content for decisions
                without consulting qualified professionals.
              </p>
            </Prose>
            <Subheading>Availability disclaimer</Subheading>
            <Prose>
              <p>
                Reputation360 does not warrant that the Website will be uninterrupted, error-free, or secure. The Website may
                be unavailable for maintenance, updates, or technical issues.
              </p>
            </Prose>
          </Section>

          <Section id="tou-liability" n={N()} title="Limitation of Liability">
            <Subheading>Limitation</Subheading>
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
            <Subheading>Cap on liability</Subheading>
            <EmphasisBlock title={null}>
              <p className="font-semibold uppercase leading-snug tracking-wide">
                REPUTATION360&apos;S TOTAL LIABILITY FOR ANY CLAIM ARISING FROM OR RELATED TO THE WEBSITE SHALL NOT EXCEED $100 USD.
                SOME JURISDICTIONS DO NOT ALLOW LIABILITY LIMITATIONS, SO THIS MAY NOT APPLY TO YOU.
              </p>
            </EmphasisBlock>
          </Section>

          <Section id="tou-indemnification" n={N()} title="Indemnification">
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

          <Section id="tou-modifications" n={N()} title="Website Modifications">
            <Subheading>Changes to Website</Subheading>
            <Prose>
              <p>
                Reputation360 reserves the right to modify, update, or discontinue the Website (or any portion thereof) at
                any time, with or without notice. You agree to accept such modifications.
              </p>
            </Prose>
            <Subheading>Changes to terms</Subheading>
            <Prose>
              <p>
                Reputation360 may modify these terms at any time. Changes will be effective immediately upon posting. Your
                continued use of the Website constitutes acceptance of modified terms.
              </p>
            </Prose>
          </Section>

          <Section id="tou-account-security" n={N()} title="Account Security">
            <Subheading>User accounts</Subheading>
            <Prose>
              <p>
                If you create an account on the Website, you are responsible for maintaining the confidentiality of your login
                credentials and for all activities that occur under your account.
              </p>
            </Prose>
            <Subheading>Unauthorized access</Subheading>
            <Prose>
              <p>
                You agree to notify Reputation360 immediately of any unauthorized access to your account or any other security
                breach.
              </p>
            </Prose>
          </Section>

          <Section id="tou-termination" n={N()} title="Termination of Access">
            <Subheading>Termination rights</Subheading>
            <Prose>
              <p>
                Reputation360 may suspend or terminate your access to the Website at any time, for any reason, including
                violation of these terms.
              </p>
            </Prose>
            <Subheading>Survival</Subheading>
            <Prose>
              <p>
                Provisions that by their nature should survive termination (indemnification, limitation of liability,
                intellectual property) will survive any termination of access.
              </p>
            </Prose>
          </Section>

          <Section id="tou-governing-law" n={N()} title="Governing Law and Dispute Resolution">
            <Subheading>Governing law</Subheading>
            <Prose>
              <p>
                These terms are governed by and construed in accordance with the laws of India, without regard
                to conflict of law principles.
              </p>
            </Prose>
            <Subheading>Jurisdiction</Subheading>
            <Prose>
              <p>
                You agree to submit to the exclusive jurisdiction of the courts located in India for resolution of any
                disputes arising from these terms or your use of the Website.
              </p>
            </Prose>
            <Subheading>Dispute resolution</Subheading>
            <Prose>
              <p>
                Before filing a legal claim, you agree to first attempt to resolve any dispute through good-faith negotiation
                with Reputation360 for at least 30 days.
              </p>
            </Prose>
            <Subheading>Injunctive relief</Subheading>
            <Prose>
              <p>
                You acknowledge that violation of these terms may cause irreparable harm for which monetary damages are
                insufficient. Reputation360 may seek injunctive relief without posting bond.
              </p>
            </Prose>
          </Section>

          <section
            id="tou-additional"
            className="scroll-mt-28 border-t border-slate-200/80 pt-10"
            aria-labelledby="tou-additional-heading"
          >
            <h2 id="tou-additional-heading" className="font-heading mb-5 text-xl font-bold text-navy md:text-2xl">
              Additional Provisions
            </h2>
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

          {/* --- Contact --- */}
          <section
            id="contact-info"
            className="scroll-mt-28 border-t border-slate-200/80 pt-10"
            aria-labelledby="terms-contact-heading"
          >
            <h2 id="terms-contact-heading" className="font-heading mb-5 text-xl font-bold text-navy md:text-2xl">
              Contact Information
            </h2>
            <Prose>
              <p>For questions about these terms and policies or to report violations:</p>
              <p>
                Email:{" "}
                <a href="mailto:hello@thereputation360.com" className={LINK_CLS}>
                  hello@thereputation360.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a href="https://www.thereputation360.com" className={LINK_CLS}>
                  https://www.thereputation360.com
                </a>
              </p>
              <p className="mt-8 text-sm text-slate-500">
                &copy; 2026 Reputation360. These Terms, Policies &amp; Conditions are binding on all users. By using our
                services or website, you acknowledge that you have read, understood, and agree to be bound by this entire document.
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
