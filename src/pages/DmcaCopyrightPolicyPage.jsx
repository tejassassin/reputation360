import { SeoHead } from "../components/SeoHead.jsx";
import { BulletList, Prose, Section, Subheading } from "../components/legal/LegalDocPrimitives.jsx";
import { SEO } from "../data/seoPageMeta.js";

const toc = [
  { id: "overview", label: "Overview and DMCA Compliance" },
  { id: "claims", label: "Copyright Infringement Claims" },
  { id: "notice-requirements", label: "DMCA Takedown Notice Requirements" },
  { id: "takedown", label: "Notice and Takedown Procedure" },
  { id: "counter", label: "Counter-Notification Procedures" },
  { id: "restoration", label: "Content Restoration" },
  { id: "repeat", label: "Repeat Infringer Policy" },
  { id: "ownership", label: "Copyright Ownership and Attribution" },
  { id: "fair-use", label: "Fair Use and Limitations" },
  { id: "contact", label: "Contact Information" },
  { id: "final-notice", label: "Final Notice" },
];

export default function DmcaCopyrightPolicyPage() {
  const seo = SEO.legal.dmcaCopyright;

  return (
    <>
      {seo ? (
        <SeoHead title={seo.title} description={seo.description} canonicalPath={seo.path} />
      ) : null}
      <main
        className="mx-auto max-w-3xl flex-1 px-4 py-28 md:px-6 md:py-32 lg:px-8"
        aria-labelledby="dmca-copyright-heading"
      >
        <h1
          id="dmca-copyright-heading"
          className="font-heading mb-3 text-3xl font-bold leading-tight text-navy md:text-4xl"
        >
          DMCA / Copyright Policy
        </h1>
        <p className="font-heading text-lg font-semibold text-navy/90">Reputation360</p>

        <div className="mt-10 space-y-10">
          <section className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 md:p-6">
            <Prose>
              <p>
                Reputation360 respects intellectual property rights and complies with the Digital Millennium Copyright Act
                (DMCA), 17 U.S.C. 512, and other applicable copyright laws. This policy outlines our procedures for handling
                copyright infringement claims, takedown notices, and counter-notification requests. It applies to all users
                of our services and platforms.
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

          <Section id="overview" n={1} title="Overview and DMCA Compliance">
            <Subheading>1.1 DMCA safe harbor</Subheading>
            <Prose>
              <p>
                Reputation360 complies with the Digital Millennium Copyright Act (DMCA), 17 U.S.C. 512. We qualify for safe
                harbor protection under the DMCA, which limits our liability for copyright infringement committed by users of
                our services, provided that we:
              </p>
            </Prose>
            <BulletList
              items={[
                "Designate a DMCA agent to receive infringement notices",
                "Implement policies that accommodate standard technical measures used to identify and protect copyrighted works",
                "Respond promptly to valid takedown notices by removing or disabling access to infringing content",
                "Provide a counter-notification mechanism for users who believe their content was wrongfully removed",
                "Terminate the accounts of repeat infringers",
              ]}
            />
            <Subheading>1.2 Our commitment</Subheading>
            <Prose>
              <p>
                Reputation360 respects the intellectual property rights of copyright holders. We investigate all valid
                copyright infringement claims and take appropriate action. We are committed to balancing the rights of
                copyright holders with the rights of our users.
              </p>
            </Prose>
          </Section>

          <Section id="claims" n={2} title="Copyright Infringement Claims">
            <Subheading>2.1 What constitutes infringement</Subheading>
            <Prose>
              <p>Copyright infringement occurs when someone uses copyrighted material without authorization. This includes:</p>
            </Prose>
            <BulletList
              items={[
                "Reproducing copyrighted works (text, images, videos, audio)",
                "Creating derivative works based on copyrighted material",
                "Distributing copyrighted material without permission",
                "Publicly displaying or performing copyrighted material",
                "Importing copyrighted works into the United States",
              ]}
            />
            <Subheading>2.2 DMCA agent designation</Subheading>
            <Prose>
              <p>Reputation360 has designated the following agent to receive notification of claimed copyright infringement:</p>
              <p>
                <span className="font-semibold text-navy">DMCA agent:</span> Reputation360 Legal Department
              </p>
              <p>
                <span className="font-semibold text-navy">Address:</span> Reputation360, India (primary jurisdiction)
              </p>
              <p>
                <span className="font-semibold text-navy">Email:</span>{" "}
                <a
                  href="mailto:dmca@thereputation360.com"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  dmca@thereputation360.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-navy">Telephone:</span> available by request at{" "}
                <a
                  href="mailto:support@thereputation360.com"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  support@thereputation360.com
                </a>
              </p>
              <p className="mt-4">
                Reputation360 has also registered its DMCA agent with the U.S. Copyright Office as required by law.
              </p>
            </Prose>
          </Section>

          <Section id="notice-requirements" n={3} title="DMCA Takedown Notice Requirements">
            <Subheading>3.1 What must be included</Subheading>
            <Prose>
              <p>
                A valid DMCA takedown notice must include the following information under penalty of perjury:
              </p>
            </Prose>
            <BulletList
              items={[
                "Identification of copyrighted work: a description of the copyrighted work claimed to have been infringed. If multiple copyrighted works are involved, provide a representative list.",
                "Identification of infringing material: a description of the material you claim is infringing and information reasonably sufficient to permit Reputation360 to locate the material (for example, specific URL, page location, or content description).",
                "Your contact information: information reasonably sufficient to permit Reputation360 to contact you, including your address, telephone number, and email address.",
                "Good faith belief: a statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, agent, or law.",
                "Accuracy statement: a statement that the information in the notice is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of the copyright that is allegedly being infringed.",
                "Signature: a physical or electronic signature (such as /s/Your Name) of the copyright owner or a person authorized to act on their behalf.",
              ]}
            />
            <Subheading>3.2 Incomplete notices</Subheading>
            <Prose>
              <p>
                Notices that do not substantially comply with these requirements may not be processed. If a notice is
                incomplete, we may request additional information. Failure to provide required information may result in no
                action being taken.
              </p>
            </Prose>
          </Section>

          <Section id="takedown" n={4} title="Notice and Takedown Procedure">
            <Subheading>4.1 Submitting a takedown notice</Subheading>
            <Prose>
              <p>To submit a DMCA takedown notice, send written notice to our DMCA agent at:</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:dmca@thereputation360.com"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  dmca@thereputation360.com
                </a>
              </p>
              <p>Mail your notice to our registered address (provide current address at the time of notice).</p>
              <p className="font-semibold text-navy">Important</p>
              <p>
                Email submission is preferred. Include the header &quot;DMCA TAKEDOWN NOTICE&quot; in the subject line.
              </p>
            </Prose>
            <Subheading>4.2 Our response timeline</Subheading>
            <Prose>
              <p>Upon receiving a valid DMCA takedown notice, Reputation360 will:</p>
            </Prose>
            <BulletList
              items={[
                "Receipt acknowledgment: acknowledge receipt of the notice and notify the affected user within 1-2 business days",
                "Investigation: investigate the claim to verify validity (typically 1-3 business days)",
                "Content removal: remove or disable access to the allegedly infringing content within 2-5 business days if the notice is valid",
                "User notification: notify the affected user of the action taken and their right to file a counter-notification",
                "Copyright Office notice: if applicable, notify the U.S. Copyright Office of the action taken",
              ]}
            />
            <Subheading>4.3 Content removal</Subheading>
            <Prose>
              <p>When we remove content, we will:</p>
            </Prose>
            <BulletList
              items={[
                "Remove the specific infringing content",
                "Disable access to the infringing material",
                "Archive a copy for legal compliance",
                "Notify the user of their right to counter-notify",
                "Apply the removal to all substantially similar locations",
              ]}
            />
          </Section>

          <Section id="counter" n={5} title="Counter-Notification Procedures">
            <Subheading>5.1 Right to counter-notify</Subheading>
            <Prose>
              <p>
                If your content was removed due to a DMCA takedown notice, you have the right to file a counter-notification.
                A counter-notification is a statement under penalty of perjury that you believe the removed content does not
                infringe copyright and was wrongfully removed.
              </p>
            </Prose>
            <Subheading>5.2 Counter-notification requirements</Subheading>
            <Prose>
              <p>Your counter-notification must include:</p>
            </Prose>
            <BulletList
              items={[
                "Identification of material: a description of the material that was removed and its previous location on our service.",
                "Your statement: a statement that you have a good faith belief that the material was removed in error or as a result of misidentification.",
                "Your information: your name, address, telephone number, email address, and a statement that you consent to jurisdiction in the Federal District Court for the district in which your address is located, or if your address is outside the U.S., in the U.S. District Court for the Northern District of California.",
                "Signature: your physical or electronic signature (such as /s/Your Name).",
                "Penalty of perjury: a statement made under penalty of perjury that the information in your counter-notification is accurate.",
              ]}
            />
            <Subheading>5.3 Submitting a counter-notification</Subheading>
            <Prose>
              <p>To submit a counter-notification, send it to:</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:dmca@thereputation360.com"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  dmca@thereputation360.com
                </a>
              </p>
              <p>Include &quot;DMCA COUNTER-NOTIFICATION&quot; in the subject line.</p>
            </Prose>
            <Subheading>5.4 Our response to counter-notification</Subheading>
            <Prose>
              <p>When we receive a valid counter-notification:</p>
            </Prose>
            <BulletList
              items={[
                "We acknowledge receipt and notify the copyright claimant",
                "We wait 10-14 business days for the copyright claimant to request an injunction",
                "If no injunction is sought, we may restore the content to your account",
                "If an injunction is sought, we keep the content removed pending court action",
              ]}
            />
          </Section>

          <Section id="restoration" n={6} title="Content Restoration">
            <Subheading>6.1 Conditions for restoration</Subheading>
            <Prose>
              <p>Content may be restored if:</p>
            </Prose>
            <BulletList
              items={[
                "A valid counter-notification is filed and no injunction is sought within 10-14 business days",
                "The copyright claimant withdraws the takedown notice",
                "A court determines the takedown was invalid",
                "We determine the notice was defective or improper",
              ]}
            />
            <Subheading>6.2 Restoration process</Subheading>
            <Prose>
              <p>When we restore content:</p>
            </Prose>
            <BulletList
              items={[
                "We restore it to its original location",
                "We notify you via email",
                "We notify the copyright claimant of the restoration",
                "Restoration typically occurs within 2-5 business days of the decision",
              ]}
            />
          </Section>

          <Section id="repeat" n={7} title="Repeat Infringer Policy">
            <Subheading>7.1 Account termination</Subheading>
            <Prose>
              <p>
                Reputation360 reserves the right to terminate the accounts of users who are determined to be repeat infringers.
                A repeat infringer is a user who:
              </p>
            </Prose>
            <BulletList
              items={[
                "Has received two or more valid DMCA takedown notices",
                "Has had content removed twice or more for copyright infringement",
                "Has demonstrated a pattern of infringing behavior",
                "Has violated copyright law despite warnings",
              ]}
            />
            <Subheading>7.2 Notice requirements</Subheading>
            <Prose>
              <p>Before terminating a repeat infringer&apos;s account, we will:</p>
            </Prose>
            <BulletList
              items={[
                "Provide written notice of termination",
                "Explain the reason for termination",
                "Provide an opportunity to appeal the decision (5 business days)",
                "Preserve evidence of the infringement for legal proceedings",
              ]}
            />
          </Section>

          <Section id="ownership" n={8} title="Copyright Ownership and Attribution">
            <Subheading>8.1 User content</Subheading>
            <Prose>
              <p>You retain all copyright ownership in content you create or upload to Reputation360. By using our services, you:</p>
            </Prose>
            <BulletList
              items={[
                "Warrant that you own or have permission to use all content you provide",
                "Warrant that your content does not infringe on third-party copyrights",
                "Grant Reputation360 a license to use your content to provide services",
              ]}
            />
            <Subheading>8.2 Reputation360 content</Subheading>
            <Prose>
              <p>Reputation360 retains all copyright ownership in:</p>
            </Prose>
            <BulletList
              items={[
                "Our platform, website, and software",
                "Our proprietary methodologies and strategies",
                "Our documentation and training materials",
                "Content we create specifically for you as part of services",
              ]}
            />
            <Subheading>8.3 Attribution</Subheading>
            <Prose>
              <p>When using third-party content, you must:</p>
            </Prose>
            <BulletList
              items={[
                "Provide proper attribution to the copyright owner",
                "Include copyright notices",
                "Link to the original source when appropriate",
                "Comply with license terms and conditions",
              ]}
            />
          </Section>

          <Section id="fair-use" n={9} title="Fair Use and Limitations">
            <Subheading>9.1 Fair use doctrine</Subheading>
            <Prose>
              <p>
                Not all use of copyrighted material is infringement. Fair use allows limited use of copyrighted works without
                permission under certain circumstances. Fair use includes:
              </p>
            </Prose>
            <BulletList
              items={[
                "Criticism and comment: using excerpts to critique or comment on the work",
                "News reporting: using portions of works for news purposes",
                "Teaching: educational use in classroom settings",
                "Scholarship: limited use for research and scholarship",
                "Parody: creating parody or satire of the original work",
              ]}
            />
            <Subheading>9.2 Fair use evaluation</Subheading>
            <Prose>
              <p>Whether use is fair use depends on four factors:</p>
            </Prose>
            <BulletList
              items={[
                "Purpose of use: is it transformative or commercial?",
                "Nature of work: is it factual or creative?",
                "Amount used: how much of the work was used?",
                "Market effect: does use harm the original's market value?",
              ]}
            />
            <Subheading>9.3 Disputed fair use</Subheading>
            <Prose>
              <p>
                Fair use is a complex legal concept that is sometimes disputed. If a takedown notice involves questionable fair
                use, we may investigate more thoroughly before removing content. We encourage users to raise fair use defenses
                in counter-notifications.
              </p>
            </Prose>
          </Section>

          <Section id="contact" n={10} title="Contact Information">
            <Subheading>10.1 DMCA agent</Subheading>
            <Prose>
              <p>For DMCA takedown notices, counter-notifications, or copyright inquiries:</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:dmca@thereputation360.com"
                  className="font-semibold text-[#4CAF50] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#3db846]"
                >
                  dmca@thereputation360.com
                </a>
              </p>
              <p>
                Subject line: &quot;DMCA TAKEDOWN NOTICE&quot;, &quot;DMCA COUNTER-NOTIFICATION&quot;, or &quot;COPYRIGHT INQUIRY&quot;
              </p>
              <p>
                <span className="font-semibold text-navy">Response time:</span> 1-2 business days for acknowledgment, full
                response within 5 business days.
              </p>
            </Prose>
            <Subheading>10.2 General support</Subheading>
            <Prose>
              <p>For general copyright questions or other issues:</p>
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
            </Prose>
          </Section>

          <section
            id="final-notice"
            className="scroll-mt-28 border-t border-slate-200/80 pt-10"
            aria-labelledby="dmca-final-heading"
          >
            <h2 id="dmca-final-heading" className="font-heading mb-5 text-xl font-bold text-navy md:text-2xl">
              Final notice
            </h2>
            <Prose>
              <p>
                This DMCA / Copyright Policy is binding and is an integral part of your agreement with Reputation360. False or
                misleading DMCA notifications may result in liability for damages. Reputation360 takes copyright seriously and
                enforces this policy consistently.
              </p>
              <p className="mt-8 text-sm text-slate-500">
                © 2026 Reputation360. This DMCA / Copyright Policy complies with the Digital Millennium Copyright Act, 17
                U.S.C. 512, and other applicable copyright laws. All rights reserved.
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
