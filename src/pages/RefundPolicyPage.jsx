import { SeoHead } from "../components/SeoHead.jsx";
import { BulletList, Prose, Section, Subheading } from "../components/legal/LegalDocPrimitives.jsx";
import { SEO } from "../data/seoPageMeta.js";

const toc = [
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
];

export default function RefundPolicyPage() {
  const seo = SEO.legal.refund;

  return (
    <>
      {seo ? (
        <SeoHead title={seo.title} description={seo.description} canonicalPath={seo.path} />
      ) : null}
      <main
        className="mx-auto max-w-3xl flex-1 px-4 py-28 md:px-6 md:py-32 lg:px-8"
        aria-labelledby="refund-policy-heading"
      >
        <h1
          id="refund-policy-heading"
          className="font-heading mb-3 text-3xl font-bold leading-tight text-navy md:text-4xl"
        >
          Refund Policy
        </h1>
        <p className="font-heading text-lg font-semibold text-navy/90">Reputation360</p>

        <div className="mt-10 space-y-10">
          <section className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 md:p-6">
            <Prose>
              <p>
                This Refund Policy (&quot;Policy&quot;) outlines Reputation360&apos;s refund practices for services purchased through
                our website at{" "}
                <a
                  href="https://www.reputation360.in"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.reputation360.in
                </a>{" "}
                or through a formal Service Agreement. Please read this policy carefully to understand when refunds are
                available, what conditions apply, and how to request a refund.
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

          <Section id="overview" n={1} title="Policy Overview and Key Principles">
            <Subheading>1.1 General policy</Subheading>
            <Prose>
              <p>
                Reputation360 provides online reputation management services that are delivered continuously over the agreed
                service period. Because our services are:
              </p>
            </Prose>
            <BulletList
              items={[
                "Delivered immediately upon purchase",
                "Customized to each client's needs and reputation",
                "Non-reversible (work performed cannot be undone)",
                "Dependent on third-party websites and platforms",
              ]}
            />
            <Prose>
              <p className="mt-4">
                Most Reputation360 services are provided on a non-refundable basis. This policy explains the limited
                circumstances under which refunds may be available.
              </p>
            </Prose>

            <Subheading>1.2 Why services are non-refundable</Subheading>
            <Prose>
              <p>Our services are non-refundable because:</p>
            </Prose>
            <BulletList
              items={[
                "Immediate performance: services begin immediately upon purchase and payment. Work is commenced without delay.",
                "Irreversible work: our reputation management work (content creation, publishing, search optimization, suppression efforts) cannot be undone or returned. Published content and optimization efforts are permanent.",
                "Customization: services are highly customized to your specific reputation, brand, and goals. They cannot be resold or offered to other clients.",
                "Continuous delivery: many services are delivered continuously over weeks and months. You cannot request a refund for work already completed.",
                "No guarantee of results: per our Terms of Service, Reputation360 does not guarantee specific search ranking improvements or content removal. Our non-refundable policy reflects the inherent uncertainty of online reputation management.",
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
                for related limitations.
              </p>
            </Prose>
          </Section>

          <Section id="non-refundable" n={2} title="Non-Refundable Services">
            <Prose>
              <p>The following services are explicitly non-refundable under all circumstances:</p>
            </Prose>
            <BulletList
              items={[
                "Online reputation monitoring and reporting",
                "Negative content suppression and SEO optimization",
                "Content creation and publishing services",
                "Domain registration and website development",
                "Review management and response services",
                "Digital PR and link building",
                "Social media management and optimization",
                "Legal takedown and DMCA notices",
                "Negative link removal and de-indexing efforts",
              ]}
            />
            <Prose>
              <p className="mt-4 font-semibold text-navy">Exception</p>
              <p>
                Limited refunds may be available if service was not initiated within 7 days of payment (see Section 3 for
                eligibility requirements).
              </p>
            </Prose>
          </Section>

          <Section id="eligibility" n={3} title="Refund Eligibility">
            <Subheading>3.1 Conditions for refund eligibility</Subheading>
            <Prose>
              <p>A refund may be available only if all of the following conditions are met:</p>
            </Prose>
            <BulletList
              items={[
                "Service not initiated: no material work has been performed on your account. This means no reputation scans, content research, strategy development, or work on your behalf has commenced.",
                "Request within 7 days: refund request must be submitted within 7 calendar days of the original payment date.",
                "Valid reason: the refund request must be for one of the approved reasons listed in Section 3.2.",
                "No violation of terms: you have not violated our Terms of Service or Acceptable Use Policy in a way that led to service termination.",
              ]}
            />

            <Subheading>3.2 Valid reasons for refund</Subheading>
            <Prose>
              <p>Refunds may be issued if:</p>
            </Prose>
            <BulletList
              items={[
                "Duplicate charge: you were charged twice for the same service by error.",
                "Unauthorized purchase: the purchase was made without your authorization (you must file a dispute with your payment provider and Reputation360 simultaneously).",
                "Billing error: an incorrect amount was charged due to a system error or miscalculation.",
                "Service not provided: Reputation360 failed to initiate service within 7 days of payment without notifying you of a delay.",
              ]}
            />

            <Subheading>3.3 Ineligible reasons for refund</Subheading>
            <Prose>
              <p>Refunds will not be issued for the following reasons:</p>
            </Prose>
            <BulletList
              items={[
                "Dissatisfaction with service - not getting desired results, slow progress, or unmet expectations are not valid refund reasons",
                "Changed your mind - buyer's remorse or change of priority is not a valid reason",
                "Content not removed - failed removal of negative content due to third-party website policies is not a valid reason",
                "Rankings did not improve - lack of search ranking improvement is not a valid reason (we do not guarantee results)",
                "Poor communication - issues communicating with your reputation manager (beyond 8+ business days) may warrant service credit but not a refund",
                "Service discontinuation - you discontinued use of services before the contract term ended",
                "Financial hardship - personal financial circumstances are not a valid refund reason",
              ]}
            />
          </Section>

          <Section id="timeframes" n={4} title="Refund Timeframes">
            <Subheading>4.1 Request window</Subheading>
            <Prose>
              <p>
                All refund requests must be submitted within 7 calendar days from the date of payment. Requests submitted
                after this 7-day window will not be considered for refund and may only be eligible for service credit if
                circumstances warrant.
              </p>
            </Prose>

            <Subheading>4.2 Processing timeline</Subheading>
            <Prose>
              <p>Once a valid refund request is received:</p>
            </Prose>
            <BulletList
              items={[
                "Investigation: 3-5 business days to review and verify the refund claim",
                "Approval or denial: you will be notified of approval or denial within 5 business days",
                "Processing: if approved, the refund is processed within 3-5 business days",
                "Bank posting: the refund typically appears in your original payment method within 5-10 business days (depending on your bank)",
              ]}
            />
            <Prose>
              <p className="mt-4 font-semibold text-navy">Total timeline</p>
              <p>11-25 business days from request to bank posting.</p>
            </Prose>
          </Section>

          <Section id="how-to-request" n={5} title="How to Request a Refund">
            <Subheading>5.1 Formal refund request</Subheading>
            <Prose>
              <p>To request a refund, submit a formal written request to:</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:support@reputation360.in"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  support@reputation360.in
                </a>
              </p>
              <p>
                Subject line: &quot;Refund Request - [Your Name] - [Service Date]&quot;
              </p>
            </Prose>

            <Subheading>5.2 Required information</Subheading>
            <Prose>
              <p>Your refund request must include:</p>
            </Prose>
            <BulletList
              items={[
                "Full name",
                "Email address associated with the account",
                "Original payment date and amount",
                "Order ID or invoice number (if available)",
                "Reason for refund request (in detail)",
                "Payment method used (credit card ending in X, PayPal account, bank transfer, etc.)",
                "Any supporting documentation or evidence",
              ]}
            />
            <Prose>
              <p className="mt-4">
                Incomplete requests may be rejected and you will be asked to resubmit with full information.
              </p>
            </Prose>
          </Section>

          <Section id="processing" n={6} title="Refund Processing and Methods">
            <Subheading>6.1 Refund methods</Subheading>
            <Prose>
              <p>All approved refunds are issued to the original payment method:</p>
            </Prose>
            <BulletList
              items={[
                "Credit or debit card: refund appears as a credit within 5-10 business days",
                "PayPal: refund returned to PayPal account within 1-2 business days (appears in PayPal wallet immediately)",
                "Bank transfer: refund returned to the original bank account within 5-7 business days",
              ]}
            />
            <Prose>
              <p className="mt-4">
                We cannot issue refunds to different payment methods than the original payment. If you need a refund directed
                to a different method, contact support to discuss alternatives.
              </p>
            </Prose>
          </Section>

          <Section id="disputes" n={7} title="Disputed Charges and Payment Issues">
            <Subheading>7.1 Billing disputes</Subheading>
            <Prose>
              <p>If you believe you were charged incorrectly:</p>
            </Prose>
            <BulletList
              items={[
                "Contact Reputation360 first at support@reputation360.in with details of the dispute",
                "Provide invoice number, amount, date, and explanation of why you believe the charge is incorrect",
                "We will investigate within 5 business days",
              ]}
            />

            <Subheading>7.2 Chargebacks and payment provider disputes</Subheading>
            <Prose>
              <p>If you file a chargeback or dispute with your credit card company, PayPal, or bank:</p>
            </Prose>
            <BulletList
              items={[
                "Inform Reputation360: notify support@reputation360.in immediately of the dispute",
                "Cooperation required: we will cooperate with your payment provider's investigation and provide all relevant documentation",
                "Resolution: if the dispute is resolved in your favor by your payment provider, we will accept their decision",
                "Repeated disputes: multiple chargebacks or disputes may result in termination of your account and relationship with Reputation360",
              ]}
            />
          </Section>

          <Section id="special" n={8} title="Special Circumstances">
            <Subheading>8.1 Service termination by Reputation360</Subheading>
            <Prose>
              <p>If Reputation360 terminates your account due to:</p>
            </Prose>
            <BulletList
              items={[
                "Your violation of terms: no refund. You remain liable for all fees through the end of the contract term.",
                "Reputation360 service failure: may receive prorated refund of unused service period (see Section 9 on service credit)",
                "Technical issues beyond our control: may receive service credit or prorated refund based on severity",
              ]}
            />

            <Subheading>8.2 Account suspension</Subheading>
            <Prose>
              <p>If your account is suspended pending investigation:</p>
            </Prose>
            <BulletList
              items={[
                "You remain liable for fees during suspension (typically up to 30 days)",
                "If investigation results in account termination in your favor, you may be eligible for prorated refund of the suspension period",
              ]}
            />

            <Subheading>8.3 Force majeure</Subheading>
            <Prose>
              <p>
                In the event of force majeure (natural disasters, war, pandemic, etc.), Reputation360 may suspend services
                without issuing refunds. If services are suspended for more than 60 days, you may request a prorated refund
                of the suspension period.
              </p>
            </Prose>
          </Section>

          <Section id="credit" n={9} title="Service Credit and Partial Refunds">
            <Subheading>9.1 When service credit is offered</Subheading>
            <Prose>
              <p>
                While refunds are not typically available for dissatisfaction, Reputation360 may offer service credit in these
                circumstances:
              </p>
            </Prose>
            <BulletList
              items={[
                "Service quality issues: significant performance issues or missed deadlines",
                "Communication failure: lack of responsiveness beyond 8+ business days (excluding weekends)",
                "Partial service non-delivery: work was completed for only part of the agreed service period",
                "Early account termination by client: you cancel mid-contract; we may apply 20-30% of the remaining contract value as service credit toward future services",
              ]}
            />

            <Subheading>9.2 Service credit terms</Subheading>
            <BulletList
              items={[
                "Non-transferable: service credit applies only to your account and cannot be transferred to another person or entity",
                "Expiration: service credit expires 12 months from issuance if not applied",
                "Not refundable: service credit cannot be refunded as cash; it can only be applied to future services",
                "One-time offer: service credit is a one-time goodwill gesture and does not establish a pattern of refunds",
              ]}
            />
          </Section>

          <Section id="contact" n={10} title="Contact Information">
            <Prose>
              <p>For refund requests, billing questions, or to discuss payment disputes:</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:support@reputation360.in"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  support@reputation360.in
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.reputation360.in"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.reputation360.in
                </a>
              </p>
              <p>
                <span className="font-semibold text-navy">Response time:</span> We aim to acknowledge refund requests within
                24 business hours.
              </p>
              <p className="mt-8 text-sm text-slate-500">
                © 2026 Reputation360. This Refund Policy is part of our Terms of Service and is binding on all clients. By
                purchasing services from Reputation360, you acknowledge that you have read, understood, and agree to be bound
                by this Refund Policy.
              </p>
            </Prose>
          </Section>

          <section
            id="policy-changes"
            className="scroll-mt-28 border-t border-slate-200/80 pt-10"
            aria-labelledby="refund-policy-changes-heading"
          >
            <h2 id="refund-policy-changes-heading" className="font-heading mb-5 text-xl font-bold text-navy md:text-2xl">
              Policy changes
            </h2>
            <Prose>
              <p>
                Reputation360 reserves the right to modify this Refund Policy at any time. Changes will be posted on our
                website with an updated &quot;Last updated&quot; date. Continued use of our services after policy changes constitutes
                acceptance of the new policy.
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
