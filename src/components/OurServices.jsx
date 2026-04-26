import { OUR_SERVICES_SECTION_INTRO } from "../data/reputationServices";
import { OurServicesGrid } from "./OurServicesGrid";
import BrandSectionBackdrop from "./BrandSectionBackdrop";

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
        </div>

        <div className="w-full">
          <OurServicesGrid />
        </div>
      </div>
    </section>
  );
}

export default OurServices;
