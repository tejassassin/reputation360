import { OUR_SERVICES_SECTION_INTRO } from "../data/reputationServices";
import { OurServicesGrid } from "./OurServicesGrid";
import BrandSectionBackdrop from "./BrandSectionBackdrop";

const serviceQuickLinks = [
  { href: "/services/online-reputation-management", label: "Online Reputation Management" },
  { href: "/services/negative-link-suppression", label: "Negative Link Suppression" },
  { href: "/services/brand-monitoring", label: "Brand Monitoring" },
  { href: "/services/crisis-management", label: "Crisis Management" },
];

function OurServices() {
  return (
    <section
      id="r3-home-our-services-root"
      className="relative w-full overflow-hidden border-y border-white/[0.06] py-14 text-white md:py-20 lg:py-24"
      aria-labelledby="our-services-heading"
    >
      <BrandSectionBackdrop />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-12 text-center md:mb-14">
          <h2
            id="our-services-heading"
            className="font-heading text-4xl font-bold tracking-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] md:text-5xl"
          >
            Our Services
          </h2>
          <div
            className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#2E5B88]"
            aria-hidden
          />
          <p className="mx-auto mt-5 max-w-4xl px-2 font-body text-base font-medium leading-relaxed text-white/85 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:mt-6 sm:text-lg sm:leading-relaxed">
            {OUR_SERVICES_SECTION_INTRO}
          </p>
          <nav
            className="mx-auto mt-7 flex max-w-4xl flex-wrap items-center justify-center gap-x-3 gap-y-2.5 px-1 sm:mt-8"
            aria-label="Core service areas"
          >
            {serviceQuickLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-center text-[13px] font-semibold text-white/95 ring-1 ring-inset ring-white/10 transition hover:border-[#4CAF50]/55 hover:bg-[#4CAF50]/20 hover:text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="w-full">
          <OurServicesGrid />
        </div>
      </div>
    </section>
  );
}

export default OurServices;
