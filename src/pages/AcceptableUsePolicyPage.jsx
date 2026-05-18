import { SeoHead } from "../components/SeoHead.jsx";
import { BulletList, Prose, Section, Subheading } from "../components/legal/LegalDocPrimitives.jsx";
import { SEO } from "../data/seoPageMeta.js";

const toc = [
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
];

export default function AcceptableUsePolicyPage() {
  const seo = SEO.legal.acceptableUse;

  return (
    <>
      {seo ? (
        <SeoHead title={seo.title} description={seo.description} canonicalPath={seo.path} />
      ) : null}
      <main
        className="mx-auto max-w-3xl flex-1 px-4 py-28 md:px-6 md:py-32 lg:px-8"
        aria-labelledby="acceptable-use-policy-heading"
      >
        <h1
          id="acceptable-use-policy-heading"
          className="font-heading mb-3 text-3xl font-bold leading-tight text-navy md:text-4xl"
        >
          Acceptable Use Policy
        </h1>
        <p className="font-heading text-lg font-semibold text-navy/90">Reputation360</p>

        <div className="mt-10 space-y-10">
          <section className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 md:p-6">
            <Prose>
              <p>
                This Acceptable Use Policy (&quot;Policy&quot;) establishes guidelines for acceptable use of Reputation360&apos;s
                services and platforms. By using our services, you agree to comply with this policy. Violation of any
                provision may result in account suspension, termination, or legal action.
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

          <Section id="overview" n={1} title="Policy Overview">
            <Subheading>1.1 Purpose</Subheading>
            <Prose>
              <p>
                This Acceptable Use Policy protects Reputation360, its users, and the broader internet community by
                establishing clear rules for how our services may and may not be used. This policy complements our{" "}
                <a
                  href="/terms-of-service"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-policy"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </Prose>

            <Subheading>1.2 Scope</Subheading>
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

            <Subheading>1.3 Responsibility</Subheading>
            <Prose>
              <p>
                You are solely responsible for your use of our services. Reputation360 may investigate and take action
                against any account for violation of this policy. This may include immediate suspension or termination
                without prior notice in cases of severe violations.
              </p>
            </Prose>
          </Section>

          <Section id="prohibited" n={2} title="Prohibited Activities">
            <Subheading>2.1 Illegal and fraudulent activities</Subheading>
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

            <Subheading>2.2 Defamation and harmful content</Subheading>
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

            <Subheading>2.3 Child safety</Subheading>
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

            <Subheading>2.4 Misuse of our services</Subheading>
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

            <Subheading>2.5 Spam and manipulation</Subheading>
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

          <Section id="account" n={3} title="Account and Authentication Rules">
            <Subheading>3.1 Account ownership</Subheading>
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

            <Subheading>3.2 Account information</Subheading>
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

          <Section id="content" n={4} title="Content and Communication Standards">
            <Subheading>4.1 Content you provide</Subheading>
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

            <Subheading>4.2 Content Reputation360 creates</Subheading>
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
            <Prose>
              <p className="mt-4">
                See our{" "}
                <a
                  href="/terms-of-service"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  Terms of Service
                </a>{" "}
                for approval and delivery terms.
              </p>
            </Prose>

            <Subheading>4.3 Communications</Subheading>
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

          <Section id="ip" n={5} title="Intellectual Property and Copyright">
            <Subheading>5.1 Respecting intellectual property</Subheading>
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

            <Subheading>5.2 Reputation360 intellectual property</Subheading>
            <Prose>
              <p>You may not:</p>
            </Prose>
            <BulletList
              items={[
                "Copy, modify, or create derivative works from our platform, software, or methodologies",
                "Reverse engineer, decompile, or disassemble our services",
                "Use our trademarks, logos, or brand name without express permission",
                "Scrape or extract our proprietary data or methodologies",
              ]}
            />

            <Subheading>5.3 DMCA compliance</Subheading>
            <Prose>
              <p>
                Reputation360 respects the Digital Millennium Copyright Act (DMCA) and other copyright laws. If you believe
                copyright infringement has occurred, you must report it to our DMCA agent with complete information. False
                DMCA claims may result in account termination.
              </p>
            </Prose>
          </Section>

          <Section id="security" n={6} title="Security and System Protection">
            <Subheading>6.1 Unauthorized access</Subheading>
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

            <Subheading>6.2 Malware and harmful code</Subheading>
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

            <Subheading>6.3 Data protection</Subheading>
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

          <Section id="compliance" n={7} title="Compliance and Legal Requirements">
            <Subheading>7.1 Regulatory compliance</Subheading>
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

            <Subheading>7.2 Reputation management ethics</Subheading>
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

          <Section id="enforcement" n={8} title="Enforcement and Violations">
            <Subheading>8.1 Monitoring and investigation</Subheading>
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

            <Subheading>8.2 Violation response</Subheading>
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

            <Subheading>8.3 Severity levels</Subheading>
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

          <Section id="suspension" n={9} title="Account Suspension and Termination">
            <Subheading>9.1 Suspension</Subheading>
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

            <Subheading>9.2 Termination</Subheading>
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

            <Subheading>9.3 Effects of termination</Subheading>
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

          <Section id="indemnification" n={10} title="Indemnification">
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

          <section
            id="final-notice"
            className="scroll-mt-28 border-t border-slate-200/80 pt-10"
            aria-labelledby="aup-final-notice-heading"
          >
            <h2 id="aup-final-notice-heading" className="font-heading mb-5 text-xl font-bold text-navy md:text-2xl">
              Final notice
            </h2>
            <Prose>
              <p>
                This Acceptable Use Policy is binding and is an integral part of your agreement with Reputation360.
                Violation of this policy may result in civil or criminal liability. By continuing to use our services, you
                confirm your understanding and acceptance of these terms.
              </p>
            </Prose>
          </section>

          <section
            id="questions"
            className="scroll-mt-28 border-t border-slate-200/80 pt-10"
            aria-labelledby="aup-questions-heading"
          >
            <h2 id="aup-questions-heading" className="font-heading mb-5 text-xl font-bold text-navy md:text-2xl">
              Questions or reports
            </h2>
            <Prose>
              <p>If you have questions about this policy or wish to report a violation:</p>
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.thereputation360.com
                </a>
              </p>
              <p className="mt-8 text-sm text-slate-500">
                © 2026 Reputation360. This Acceptable Use Policy is binding on all users. Violations may result in legal
                action, account termination, and cooperation with law enforcement.
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
