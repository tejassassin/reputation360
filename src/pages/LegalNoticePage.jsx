import { SeoHead } from "../components/SeoHead.jsx";
import { SEO } from "../data/seoPageMeta.js";

const NOTICES = {
  privacy: {
    title: "Privacy Policy",
    paragraphs: [
      "Reputation360 respects your privacy. This policy describes how we handle information when you visit our website, request information, or work with us as a client.",
      "We collect only what we need to respond to enquiries, deliver our services, and meet legal obligations. We do not sell your personal information. Data may be processed by trusted vendors who assist with hosting, email, or scheduling, under agreements that require appropriate safeguards.",
      "You may request access, correction, or deletion of personal information we hold, subject to applicable law and legitimate business needs. For privacy-related requests, use the contact options on our Contact page.",
      "We may update this policy from time to time. Continued use of the site after changes constitutes acceptance of the revised policy.",
    ],
  },
  terms: {
    title: "Terms of Service",
    paragraphs: [
      "By using this website and engaging Reputation360, you agree to these terms. If you do not agree, please do not use our services or site.",
      "Content on this site is for general information. It is not legal advice. Engagements are governed by separate written agreements that define scope, fees, deliverables, and limitations.",
      "You agree not to misuse the site, attempt unauthorized access, or use our services for unlawful purposes. We may suspend or terminate access where necessary to protect our systems or comply with law.",
      "To the fullest extent permitted by law, Reputation360 is not liable for indirect or consequential damages arising from use of the site. Some jurisdictions do not allow certain limitations; in those cases, our liability is limited to the maximum permitted.",
    ],
  },
  cookies: {
    title: "Cookie Policy",
    paragraphs: [
      "This site may use cookies and similar technologies to operate the site, remember preferences, measure traffic, and improve experience.",
      "Essential cookies are required for basic functionality. Analytics or marketing cookies, if used, are applied in line with your choices and applicable law.",
      "You can control cookies through your browser settings. Blocking some cookies may affect how the site works.",
      "For questions about this policy or your choices, contact us via the Contact page.",
    ],
  },
};

function LegalNoticePage({ variant }) {
  const content = NOTICES[variant];
  const seo = SEO.legal[variant];

  if (!content) {
    return null;
  }

  return (
    <>
      {seo ? (
        <SeoHead
          title={seo.title}
          description={seo.description}
          canonicalPath={seo.path}
        />
      ) : null}
    <main
      className="mx-auto max-w-3xl flex-1 px-4 py-28 md:px-6 md:py-32 lg:px-8"
      aria-labelledby="legal-notice-heading"
    >
      <h1
        id="legal-notice-heading"
        className="font-heading mb-8 text-3xl font-bold leading-tight text-navy md:text-4xl"
      >
        {content.title}
      </h1>
      <div className="font-body space-y-5 text-lg leading-relaxed text-steel">
        {content.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <p className="font-body mt-10 text-lg text-navy">
        <a href="/contact" className="font-semibold text-[#4CAF50] transition-colors hover:text-[#3db846]">
          Contact us
        </a>{" "}
        with questions about this notice.
      </p>
    </main>
    </>
  );
}

export default LegalNoticePage;
