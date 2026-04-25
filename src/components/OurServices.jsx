import { OUR_SERVICES_SECTION_INTRO } from "../data/reputationServices";
import { OurServicesGrid } from "./OurServicesGrid";

function OurServices() {
  return (
    <div id="r3-home-our-services-wrap" className="w-full">
      <section
        id="r3-home-our-services-root"
        className="relative w-full overflow-hidden bg-transparent py-12 md:py-16 lg:py-20"
        aria-labelledby="our-services-heading"
      >
        <div className="relative mx-auto w-full max-w-[min(100%,1720px)] px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
          <div className="mx-auto mb-5 max-w-5xl text-center md:mb-6 lg:max-w-6xl">
            <h2
              id="our-services-heading"
              className="r3-our-services-main-heading font-heading text-4xl font-bold tracking-tight text-white md:text-5xl"
            >
              Our Services
            </h2>
            <div
              className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4caf50] to-sky-300/90"
              aria-hidden
            />
            <p className="r3-our-services-intro mx-auto mt-4 max-w-4xl px-2 font-body text-base leading-relaxed text-white/80 md:text-lg md:leading-relaxed">
              {OUR_SERVICES_SECTION_INTRO}
            </p>
          </div>

          <div className="w-full p-4 sm:p-5 md:p-6 lg:p-8">
            <OurServicesGrid />
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurServices;
