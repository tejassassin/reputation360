import { SeoHead } from "../components/SeoHead.jsx";
import { BulletList, Prose, Section, Subheading } from "../components/legal/LegalDocPrimitives.jsx";
import { SEO } from "../data/seoPageMeta.js";

const toc = [
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
];

export default function PrivacyPolicyPage() {
  const seo = SEO.legal.privacy;

  return (
    <>
      {seo ? (
        <SeoHead title={seo.title} description={seo.description} canonicalPath={seo.path} />
      ) : null}
      <main
        className="mx-auto max-w-3xl flex-1 px-4 py-28 md:px-6 md:py-32 lg:px-8"
        aria-labelledby="privacy-policy-heading"
      >
        <h1
          id="privacy-policy-heading"
          className="font-heading mb-3 text-3xl font-bold leading-tight text-navy md:text-4xl"
        >
          Privacy Policy
        </h1>
        <p className="font-heading text-lg font-semibold text-navy/90">Reputation360</p>

        <div className="mt-10 space-y-10">
          <section className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 md:p-6">
            <h2 className="font-heading mb-3 text-lg font-bold text-navy">A quick note about your privacy</h2>
            <Prose>
              <p>
                At Reputation360, we believe your privacy is paramount. We have built our reputation management and
                negative link suppression services on the foundation of protecting your information. Unlike many digital
                marketing companies, we do not sell, rent, or lease your personal data to third parties for profit.
                This Privacy Policy explains how we collect, use, protect, and manage your information when you visit our
                website at{" "}
                <a
                  href="https://www.thereputation360.com"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  https://www.thereputation360.com
                </a>{" "}
                (the &quot;Site&quot;) and use our online reputation management services (our &quot;Services&quot;).
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

          <Section id="about" n={1} title="About Reputation360">
            <Prose>
              <p>
                Reputation360 is an online reputation management company headquartered in India and operating across the
                United States, Canada, and Australia. With over seven years of hands-on experience, we specialize in:
              </p>
            </Prose>
            <BulletList
              items={[
                "Online Reputation Management (ORM) - helping individuals and brands take control of how they are perceived online",
                "Negative Link Suppression - reducing the visibility of harmful, misleading, or outdated content",
                "Content Strategy and Digital Marketing - building credible, resilient, and lasting reputations",
                "SEO and Branding Services - enhancing positive search results and strengthening brand visibility",
              ]}
            />
            <Prose>
              <p className="mt-4">
                This Privacy Policy applies to our website, all associated subdomains, mobile applications, customer
                portals, and all services we provide (collectively, the &quot;Services&quot;). By accessing or using our Site
                and Services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </Prose>
          </Section>

          <Section id="collect" n={2} title="What Information We Collect">
            <Subheading>A. Information you provide directly</Subheading>
            <Prose>
              <p>When you interact with Reputation360, you may voluntarily provide personal information, including:</p>
            </Prose>
            <BulletList
              items={[
                "Account registration: name, email address, phone number, company or business name, and account credentials",
                "Service inquiries: details about your reputation concerns, content you want managed or suppressed, business objectives, and target markets",
                "Contact forms and surveys: information submitted through website contact forms, consultation requests, feedback forms, or surveys",
                "Payment information: billing address, payment method details, and invoice information (processed securely through third-party payment processors - we do not store full credit card numbers)",
                "Service content: URLs, social media profiles, review platforms, search keywords, and other details related to your online reputation management needs",
              ]}
            />

            <Subheading>B. Information collected automatically</Subheading>
            <Prose>
              <p>When you use our Site, we automatically collect certain technical and usage information:</p>
            </Prose>
            <BulletList
              items={[
                "Device and browser information: IP address, browser type and version, operating system, device type, and device identifiers",
                "Usage data: pages visited, time spent on each page, referral sources, links clicked, search queries, and user interactions with our Services",
                "Location information: general geographic location (country or region) based on IP address, but not precise GPS location unless explicitly permitted",
                "Cookies and tracking: data collected through cookies, pixels, web beacons, and similar tracking technologies (detailed in Section 7)",
              ]}
            />

            <Subheading>C. Information from third parties</Subheading>
            <Prose>
              <p>To deliver our services effectively, we may collect or receive information from:</p>
            </Prose>
            <BulletList
              items={[
                "Search engines and indexing services: publicly available search results, cached pages, and indexed content relevant to monitoring your reputation",
                "Public records and data brokers: publicly accessible information from government records, business directories, and public databases",
                "Social media platforms: publicly available information from social networks (when you authorize us or as publicly indexed)",
                "Review platforms and forums: public reviews, comments, and discussions relevant to your brand monitoring",
                "Analytics and advertising partners: Google Analytics, advertising networks, and other analytics providers",
                "Referral partners: partner agencies, resellers, or affiliates who refer clients to us",
              ]}
            />
          </Section>

          <Section id="use" n={3} title="How We Use Your Information">
            <Prose>
              <p>Reputation360 uses your information for the following business purposes:</p>
            </Prose>
            <BulletList
              items={[
                "Service delivery: monitoring your online reputation, managing search results, suppressing negative content, creating positive brand content, and tracking campaign progress",
                "Account management: processing payments, sending invoices, managing your account, and providing access to client dashboards and reporting tools",
                "Customer communication: responding to inquiries, providing customer support, sending service updates, campaign reports, and periodic progress reviews",
                "Marketing and outreach: sending promotional materials, industry insights, service announcements, and newsletters (you can opt out anytime)",
                "Analytics and improvement: analyzing usage patterns to improve website functionality, refine our Services, and enhance user experience",
                "Compliance and legal: complying with legal obligations, enforcing our Terms of Service, preventing fraud, and protecting against illegal activities",
                "Reputation monitoring: conducting ongoing scans of the internet (search results, social media, review sites, news articles, forums) to track mentions and identify threats to your reputation",
              ]}
            />
          </Section>

          <Section id="share" n={4} title="How We Share Your Information">
            <Prose>
              <p>
                We share your information only as necessary to operate our Services and as legally permitted. We do not
                sell your personal data to third parties for profit.
              </p>
            </Prose>

            <Subheading>A. Service providers and vendors</Subheading>
            <Prose>
              <p>We share information with trusted third parties who provide services on our behalf, including:</p>
            </Prose>
            <BulletList
              items={[
                "Cloud hosting, storage, and data processing providers",
                "Payment processors and financial institutions",
                "Email and communication service providers",
                "Analytics and web analytics tools",
                "Customer support and help desk platforms",
                "Content creation, SEO, and digital marketing service providers",
                "Security and fraud detection providers",
              ]}
            />
            <Prose>
              <p className="mt-4">
                All service providers are bound by confidentiality agreements and are prohibited from using your
                information for any purpose other than providing services to Reputation360.
              </p>
            </Prose>

            <Subheading>B. As required by law</Subheading>
            <Prose>
              <p>
                We may disclose your information when required by law, court order, government authority, or legal process
                (including subpoenas). We may also disclose information to protect the safety, rights, property, or
                security of Reputation360, our clients, or the public.
              </p>
            </Prose>

            <Subheading>C. Business transfers</Subheading>
            <Prose>
              <p>
                If Reputation360 is involved in a merger, acquisition, bankruptcy, or sale of assets, your information may
                be transferred as part of that transaction. We will notify you of such changes and ensure continued privacy
                protection.
              </p>
            </Prose>

            <Subheading>D. With your consent</Subheading>
            <Prose>
              <p>
                We only share your information with third parties with your explicit consent, unless otherwise required by
                law or necessary to provide our Services.
              </p>
            </Prose>
          </Section>

          <Section id="rights" n={5} title="Your Data Rights and Choices">
            <Prose>
              <p>
                Depending on your location, you have various rights regarding your personal information. Reputation360
                extends these rights to all users, regardless of jurisdiction:
              </p>
            </Prose>

            <Subheading>A. Right to access</Subheading>
            <Prose>
              <p>
                You have the right to request and obtain a copy of all personal information we hold about you, including
                how we collect, use, and share it.
              </p>
            </Prose>

            <Subheading>B. Right to correct</Subheading>
            <Prose>
              <p>
                You can request that we correct, update, or amend any inaccurate or incomplete personal information we have
                about you. You can update your account information directly through your client portal.
              </p>
            </Prose>

            <Subheading>C. Right to delete</Subheading>
            <Prose>
              <p>
                You have the right to request deletion (erasure) of your personal information, subject to certain exceptions
                (for example, if we need to retain it for legal compliance or to provide ongoing services).
              </p>
            </Prose>

            <Subheading>D. Right to opt out</Subheading>
            <Prose>
              <p>You can opt out of:</p>
            </Prose>
            <BulletList
              items={[
                "Marketing emails and promotional communications",
                "Personalized advertising and interest-based targeting",
                "Cookie-based tracking (though some site functionality may be affected)",
                "Certain analytics activities",
              ]}
            />

            <Subheading>E. Right to restrict or object</Subheading>
            <Prose>
              <p>
                You can request that we restrict how we process your data or object to processing based on legitimate
                interests.
              </p>
            </Prose>

            <Subheading>F. Right to data portability</Subheading>
            <Prose>
              <p>
                You have the right to receive a portable copy of your personal information in a structured, commonly used,
                machine-readable format.
              </p>
            </Prose>

            <Subheading>G. How to exercise your rights</Subheading>
            <Prose>
              <p>To exercise any of these rights, please contact us at:</p>
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
              <p>
                We will respond to your request within 30 days (or as required by applicable law). For security purposes,
                we may verify your identity before processing your request.
              </p>
            </Prose>

            <Subheading>H. Region-specific rights</Subheading>
            <Prose>
              <p className="font-semibold text-navy">United States (CCPA / CPRA)</p>
              <p>
                California and other U.S. state residents have rights under CCPA, CPRA, and similar state laws. We respect
                all applicable U.S. privacy laws and provide the rights outlined above.
              </p>
              <p className="mt-4 font-semibold text-navy">Canada (PIPEDA)</p>
              <p>
                Under Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA), you have the
                right to access, correct, and request deletion of your information.
              </p>
              <p className="mt-4 font-semibold text-navy">Australia (Privacy Act)</p>
              <p>
                Under the Australian Privacy Act 1988, you have the right to access and correct your information. You may
                also lodge a complaint with the Office of the Australian Information Commissioner (OAIC).
              </p>
            </Prose>
          </Section>

          <Section id="security" n={6} title="Data Security">
            <Prose>
              <p>
                We implement comprehensive security measures to protect your information from unauthorized access, loss,
                alteration, or disclosure:
              </p>
            </Prose>

            <Subheading>Technical safeguards</Subheading>
            <BulletList
              items={[
                "SSL/TLS encryption for all data in transit",
                "AES 256-bit encryption for sensitive stored data",
                "Firewalls, intrusion detection systems, and data loss prevention",
                "Regular security patches and software updates",
                "Secure authentication mechanisms and multi-factor authentication options",
              ]}
            />

            <Subheading>Administrative safeguards</Subheading>
            <BulletList
              items={[
                "Strict access controls and role-based permissions",
                "Background checks and security vetting for employees",
                "Regular security and privacy training for staff",
                "Confidentiality agreements and data protection policies",
              ]}
            />

            <Subheading>Physical safeguards</Subheading>
            <BulletList
              items={[
                "Secure data centers with controlled access",
                "Secure destruction of physical media containing personal data",
                "Clean desk policies and secure storage for sensitive materials",
              ]}
            />

            <Prose>
              <p className="mt-6 font-semibold text-navy">Important disclaimer</p>
              <p>
                While we use industry-standard security measures, no method of transmission over the internet or electronic
                storage is completely secure. We cannot guarantee absolute security, though we maintain reasonable
                precautions. If you believe your information has been compromised, please contact us immediately at{" "}
                <a
                  href="mailto:security@thereputation360.com"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  security@thereputation360.com
                </a>
                .
              </p>
            </Prose>
          </Section>

          <Section id="cookies" n={7} title="Cookies and Tracking Technologies">
            <Prose>
              <p>
                We use cookies and similar technologies to enhance user experience, maintain security, and analyze website
                performance.
              </p>
              <p className="font-semibold text-navy">Types of cookies</p>
            </Prose>
            <BulletList
              items={[
                "Essential cookies: required for basic functionality (login, security, preference storage)",
                "Performance cookies: collect analytics data on how visitors use our site (via Google Analytics)",
                "Marketing cookies: enable retargeting and personalized advertising across platforms",
                "Web beacons or pixels: track user engagement and email opening rates",
              ]}
            />
            <Subheading>Managing your cookie preferences</Subheading>
            <Prose>
              <p>
                You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert
                you when they are being sent. Disabling cookies may affect website functionality. You can also:
              </p>
            </Prose>
            <BulletList
              items={[
                "Opt out of Google Analytics tracking via the Google Analytics Opt-out Browser Add-on",
                "Opt out of interest-based advertising via the DAA (Digital Advertising Alliance) or NAI (Network Advertising Initiative)",
                'Set your browser to "Do Not Track" (though we do not currently respond to DNT signals)',
              ]}
            />
          </Section>

          <Section id="third-party" n={8} title="Third-Party Websites and Links">
            <Prose>
              <p>
                Our Site may contain links to third-party websites, applications, and services that we do not control.
                This Privacy Policy applies only to information collected through our Site. We are not responsible for the
                privacy practices of third-party sites. We encourage you to review their privacy policies before providing
                any information.
              </p>
            </Prose>
          </Section>

          <Section id="children" n={9} title="Children's Privacy">
            <Prose>
              <p>
                Our Services are intended for individuals aged 18 and older. We do not knowingly collect personal
                information from children under 13 (or under 16 in some jurisdictions). If we discover that a child has
                provided information to us, we will promptly delete such information and terminate the child&apos;s
                account. If you are aware of a child providing information, please contact us immediately.
              </p>
            </Prose>
          </Section>

          <Section id="international" n={10} title="International Data Transfers">
            <Prose>
              <p>
                Reputation360 is headquartered in India and operates internationally. Your information may be transferred
                to, stored in, and processed in India and other countries, which may have different data protection laws
                than your home country. By using our Services, you consent to the transfer of your information to these
                jurisdictions and acknowledge that data may be subject to lawful disclosure requests by government
                authorities.
              </p>
            </Prose>
          </Section>

          <Section id="retention" n={11} title="Data Retention">
            <Prose>
              <p>
                We retain your personal information for as long as necessary to provide our Services, fulfill your
                requests, comply with legal obligations, resolve disputes, and enforce our agreements. Typically:
              </p>
            </Prose>
            <BulletList
              items={[
                "Active accounts: we retain your information for the duration of your account and as long as needed to provide Services",
                "Closed accounts: we may retain certain information for up to 7 years for backup, archival, legal, or accounting purposes",
                "Marketing data: we retain marketing preferences until you opt out, then delete after 2 years",
                "Legal obligations: we may retain information as required by law (for example, for tax purposes)",
              ]}
            />
          </Section>

          <Section id="changes" n={12} title="Policy Changes">
            <Prose>
              <p>
                Reputation360 may update this Privacy Policy periodically to reflect changes in our practices, technology,
                legal requirements, or other factors. We will notify you of material changes via email or by posting a notice
                on our Site. The posted policy will show the date of the most recent revision.
                Your continued use of our Services following policy changes constitutes your acceptance of the updated
                Privacy Policy.
              </p>
            </Prose>
          </Section>

          <Section id="contact" n={13} title="Contact Us">
            <Prose>
              <p>If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices:</p>
              <p className="font-semibold text-navy">Reputation360</p>
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
              <p>
                <span className="font-semibold text-navy">Response time:</span> We aim to respond to all privacy inquiries
                within 5-7 business days. For data access or deletion requests, we will respond within 30 days or as
                required by applicable law.
              </p>
              <p className="mt-8 text-sm text-slate-500">
                © 2026 Reputation360. All rights reserved. This Privacy Policy is confidential and proprietary. Unauthorized
                reproduction or distribution is prohibited.
              </p>
            </Prose>
          </Section>
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
