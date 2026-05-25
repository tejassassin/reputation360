import { SeoHead } from "../components/SeoHead.jsx";
import { BulletList, Prose, Section, Subheading } from "../components/legal/LegalDocPrimitives.jsx";
import { SEO } from "../data/seoPageMeta.js";

const toc = [
  { id: "what-are-cookies", label: "What Are Cookies?" },
  { id: "why-cookies", label: "Why We Use Cookies" },
  { id: "types", label: "Types of Cookies We Use" },
  { id: "third-party", label: "Third-Party Cookies" },
  { id: "consent", label: "Cookie Consent and Control" },
  { id: "managing", label: "Managing Your Cookie Preferences" },
  { id: "regional", label: "Regional Compliance" },
  { id: "dnt", label: "Do Not Track Signals" },
  { id: "contact", label: "Contact Us" },
];

export default function CookiePolicyPage() {
  const seo = SEO.legal.cookies;

  return (
    <>
      {seo ? (
        <SeoHead title={seo.title} description={seo.description} canonicalPath={seo.path} />
      ) : null}
      <main
        className="mx-auto max-w-3xl flex-1 px-4 py-28 md:px-6 md:py-32 lg:px-8"
        aria-labelledby="cookie-policy-heading"
      >
        <h1
          id="cookie-policy-heading"
          className="font-heading mb-3 text-3xl font-bold leading-tight text-navy md:text-4xl"
        >
          Cookie Policy
        </h1>
        <p className="font-heading text-lg font-semibold text-navy/90">Reputation360</p>

        <div className="mt-10 space-y-10">
          <section className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 md:p-6">
            <Prose>
              <p>
                This Cookie Policy explains how Reputation360 (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or &quot;Company&quot;) uses cookies and
                similar tracking technologies on our website at{" "}
                <a
                  href="https://www.thereputation360.com"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  https://www.thereputation360.com
                </a>{" "}
                (the &quot;Site&quot;). This policy is part of our overall{" "}
                <a
                  href="/privacy-policy"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  Privacy Policy
                </a>{" "}
                and explains what cookies are, why we use them, and your rights regarding cookies.
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

          <Section id="what-are-cookies" n={1} title="What Are Cookies?">
            <Prose>
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, mobile phone) when you
                visit a website. They contain information about your browsing activity and are sent back to the server
                with each subsequent request. Cookies help websites remember information about you, such as your preferences
                and login status.
              </p>
            </Prose>
            <Subheading>How cookies work</Subheading>
            <Prose>
              <p>
                When you visit our Site, your browser receives a cookie from our server. When you visit the Site again,
                your browser sends the cookie back to us, allowing us to recognize you and remember your preferences or
                activities.
              </p>
            </Prose>
            <Subheading>Session vs. persistent cookies</Subheading>
            <BulletList
              items={[
                "Session cookies: temporary files that expire when you close your browser. Used to maintain your session while you browse the Site.",
                "Persistent cookies: remain on your device for a specified period (days, months, or years) to remember your preferences across multiple visits.",
              ]}
            />
          </Section>

          <Section id="why-cookies" n={2} title="Why We Use Cookies">
            <Prose>
              <p>Reputation360 uses cookies for the following legitimate business purposes:</p>
            </Prose>
            <BulletList
              items={[
                "Authentication and security: to verify your identity, maintain your login session, and protect your account from unauthorized access",
                "Functionality: to enable essential website features such as remembering your language preference, form data, and navigation state",
                "Performance and analytics: to understand how users interact with our Site, analyze traffic patterns, and improve website performance",
                "Marketing and advertising: to deliver targeted advertisements, track campaign effectiveness, and understand user interests",
                "User preferences: to save your settings, preferences, and other choices to enhance your user experience",
              ]}
            />
          </Section>

          <Section id="types" n={3} title="Types of Cookies We Use">
            <Subheading>A. Strictly necessary (essential) cookies</Subheading>
            <Prose>
              <p>
                <span className="font-semibold text-navy">Purpose:</span> required for the Site to function properly and
                safely.
              </p>
              <p>
                <span className="font-semibold text-navy">Examples:</span> user authentication, session management, security
                tokens, form data, CSRF protection.
              </p>
              <p>
                <span className="font-semibold text-navy">Consent required:</span> no - these cookies are essential and will
                be set regardless of user consent. However, we inform users of their use.
              </p>
              <p>
                <span className="font-semibold text-navy">Retention:</span> deleted when you close your browser (session
                cookies) or expire after a set period.
              </p>
            </Prose>

            <Subheading>B. Functionality cookies</Subheading>
            <Prose>
              <p>
                <span className="font-semibold text-navy">Purpose:</span> enhance user experience by remembering preferences
                and choices.
              </p>
              <p>
                <span className="font-semibold text-navy">Examples:</span> language preference, time zone, page
                customization, saved filters.
              </p>
              <p>
                <span className="font-semibold text-navy">Consent required:</span> yes (in GDPR/DPDPA jurisdictions); no (in
                CCPA jurisdictions with opt-out available).
              </p>
            </Prose>

            <Subheading>C. Performance and analytics cookies</Subheading>
            <Prose>
              <p>
                <span className="font-semibold text-navy">Purpose:</span> collect anonymous data about how users interact
                with the Site.
              </p>
              <p>
                <span className="font-semibold text-navy">Examples:</span> Google Analytics (tracking pages visited, time on
                site, bounce rate), heatmap tracking, error logging.
              </p>
              <p>
                <span className="font-semibold text-navy">Consent required:</span> yes (in GDPR/DPDPA); opt-out available (in
                CCPA).
              </p>
              <p>
                <span className="font-semibold text-navy">Retention:</span> typically 12-24 months.
              </p>
            </Prose>

            <Subheading>D. Marketing and advertising cookies</Subheading>
            <Prose>
              <p>
                <span className="font-semibold text-navy">Purpose:</span> track user interests and deliver personalized
                advertisements across websites.
              </p>
              <p>
                <span className="font-semibold text-navy">Examples:</span> Facebook Pixel, Google Ads, LinkedIn conversion
                tracking, retargeting cookies.
              </p>
              <p>
                <span className="font-semibold text-navy">Consent required:</span> yes (in GDPR/DPDPA); opt-out available (in
                CCPA).
              </p>
            </Prose>
          </Section>

          <Section id="third-party" n={4} title="Third-Party Cookies">
            <Prose>
              <p>
                Our Site uses third-party services that place their own cookies on your device. These include:
              </p>
            </Prose>
            <BulletList
              items={[
                "Google Analytics: analyzes website traffic and user behavior (Privacy Policy: https://policies.google.com/privacy)",
                "Google Ads: delivers targeted advertisements and tracks conversions",
                "Facebook Pixel: tracks website visitors for targeted Facebook advertising",
                "LinkedIn conversion tracking: measures the effectiveness of LinkedIn advertising campaigns",
                "Other analytics and marketing partners: various service providers for website optimization, customer feedback, and performance monitoring",
              ]}
            />
            <Prose>
              <p className="mt-4">
                We are not responsible for the privacy practices of third parties. We encourage you to review their privacy
                policies.
              </p>
            </Prose>
          </Section>

          <Section id="consent" n={5} title="Cookie Consent and Control">
            <Subheading>5.1 How we obtain consent</Subheading>
            <Prose>
              <p>
                When you first visit our Site, you will see a cookie consent banner informing you about our use of cookies.
                Depending on your location:
              </p>
            </Prose>
            <BulletList
              items={[
                "EU/EEA and UK (GDPR): you must explicitly opt in to non-essential cookies. We request granular consent for different cookie categories.",
                "India (DPDPA): you must explicitly opt in before we set any cookies. General consent for all cookie types is sufficient.",
                "United States (CCPA/CPRA): we provide an opt-out option for non-essential cookies. You can withdraw your consent and opt out of sale or sharing of information.",
                "Canada (PIPEDA): similar to GDPR requirements with explicit opt-in for non-essential cookies",
              ]}
            />

            <Subheading>5.2 Consent preferences</Subheading>
            <Prose>
              <p>You can accept or reject cookies through:</p>
            </Prose>
            <BulletList
              items={[
                "Cookie consent banner at the bottom or top of our Site",
                "Cookie preferences link on our website",
                "Your browser settings (see Section 6 below)",
              ]}
            />
          </Section>

          <Section id="managing" n={6} title="Managing Your Cookie Preferences">
            <Subheading>6.1 Browser controls</Subheading>
            <Prose>
              <p>Most web browsers allow you to control cookies through their settings. You can:</p>
            </Prose>
            <BulletList
              items={[
                "View cookies stored on your device",
                "Block cookies from specific websites",
                "Delete all cookies from your browser",
                "Disable cookies entirely",
              ]}
            />
            <Prose>
              <p className="mt-4 font-semibold text-navy">Instructions for popular browsers</p>
            </Prose>
            <BulletList
              items={[
                "Google Chrome: Settings - Privacy and security - Cookies and other site data",
                "Mozilla Firefox: Preferences - Privacy and security - Cookies and site data",
                "Apple Safari: Preferences - Privacy - Cookies and website data",
                "Microsoft Edge: Settings - Privacy, search, and services - Clear browsing data",
              ]}
            />

            <Subheading>6.2 Opt-out tools</Subheading>
            <Prose>
              <p>You can opt out of interest-based advertising using:</p>
              <p>
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
              </p>
              <p>
                <a
                  href="https://optout.aboutads.info"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Digital Advertising Alliance (DAA)
                </a>
              </p>
              <p>
                <a
                  href="https://optout.networkadvertising.org"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Network Advertising Initiative (NAI)
                </a>
              </p>
            </Prose>

            <Subheading>6.3 Important note</Subheading>
            <Prose>
              <p>
                Disabling cookies may affect website functionality and your user experience. Essential cookies cannot be
                disabled as the Site will not function properly without them.
              </p>
            </Prose>
          </Section>

          <Section id="regional" n={7} title="Regional Compliance">
            <Subheading>7.1 European Union (GDPR)</Subheading>
            <Prose>
              <p>
                We comply with the General Data Protection Regulation (GDPR). EU/EEA visitors must explicitly consent to
                non-essential cookies before they are set. Consent is specific, granular, and can be withdrawn at any time.
              </p>
            </Prose>

            <Subheading>7.2 India (DPDPA)</Subheading>
            <Prose>
              <p>
                We comply with India&apos;s Digital Personal Data Protection Act (DPDPA). Indian visitors must provide explicit
                consent before we set any cookies. We obtain general consent (not granular) for cookie use.
              </p>
            </Prose>

            <Subheading>7.3 United States (CCPA/CPRA)</Subheading>
            <Prose>
              <p>
                We comply with the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA).
                California residents have the right to opt out of the sale or sharing of personal information collected by
                cookies. We provide &quot;Do Not Sell or Share My Personal Information&quot; and &quot;Limit the Use of My Sensitive
                Personal Information&quot; links on our website.
              </p>
            </Prose>

            <Subheading>7.4 Canada (PIPEDA)</Subheading>
            <Prose>
              <p>
                We comply with Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA). Canadian
                visitors should expect similar privacy protections as EU visitors, including opt-in consent for non-essential
                cookies.
              </p>
            </Prose>

            <Subheading>7.5 Australia (Privacy Act)</Subheading>
            <Prose>
              <p>
                We comply with Australia&apos;s Privacy Act 1988. Australian visitors have the right to access and correct personal
                information collected through cookies.
              </p>
            </Prose>
          </Section>

          <Section id="dnt" n={8} title="Do Not Track Signals">
            <Prose>
              <p>
                Some browsers include a &quot;Do Not Track&quot; (DNT) feature. Our Site does not currently respond to DNT signals. If
                you have enabled DNT in your browser, we recommend using the cookie controls in your browser settings to
                manage your cookie preferences.
              </p>
            </Prose>
          </Section>

          <Section id="contact" n={9} title="Contact Us">
            <Prose>
              <p>If you have questions about our Cookie Policy, please contact us:</p>
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
                <span className="font-semibold text-navy">Response time:</span> We aim to respond within a business day.
              </p>
              <p className="mt-8 text-sm text-slate-500">
                © 2026 Reputation360. This Cookie Policy is part of our overall Privacy Policy. For more information about
                how we handle your data, please review our full{" "}
                <a
                  href="/privacy-policy"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  Privacy Policy
                </a>
                .
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
