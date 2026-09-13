import { OurServicesGrid } from "./OurServicesGrid";
import BrandSectionBackdrop from "./BrandSectionBackdrop";

const SERVICES_SUPPORTING_LINE =
  "Solutions designed to protect, repair and strengthen how you appear online.";

function OurServices() {
  return (
    <section
      id="r3-home-our-services-root"
      className="relative w-full overflow-hidden border-y border-white/[0.06] py-10 text-white md:py-11 lg:py-12"
      aria-labelledby="our-services-heading"
    >
      <BrandSectionBackdrop />

      <div className="r360-site-container r360-our-services-shell relative">
        <div className="r3-our-services-intro text-center">
          <h2
            id="our-services-heading"
            className="font-heading text-4xl font-bold tracking-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] md:text-5xl"
          >
            Online Reputation Management Services
          </h2>
          <div
            className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#1F3B64]"
            aria-hidden
          />
          <p className="r3-our-services-supporting mx-auto mt-3 max-w-3xl px-2 font-body text-sm font-medium leading-snug [text-shadow:0_1px_2px_rgba(0,0,0,0.15)] sm:text-base md:mt-3.5">
            {SERVICES_SUPPORTING_LINE}
          </p>
        </div>

        <div className="w-full">
          <OurServicesGrid />
        </div>
      </div>
    </section>
  );
}

export default OurServices;
