import Hero from "../components/Hero";
import WhatWeBelieve from "../components/WhatWeBelieve";
import WhatWeDo from "../components/WhatWeDo";
import OurServices from "../components/OurServices";
import { Testimonials } from "../components/Testimonials";
import WhoWeServeCards from "../components/WhoWeServeCards";
import HowItWorks from "../components/HowItWorks";
import WhyClientsChoose from "../components/WhyClientsChoose";
import CaseStudies from "../components/CaseStudies";
import Contact from "../components/Contact";

function HomePage() {
  return (
    <>
      <Hero />
      <main className="flex flex-1 flex-col gap-16 pt-10 md:gap-20 md:pt-14 lg:gap-24 lg:pt-16">
        <section>
          <WhatWeBelieve />
        </section>
        <section>
          <WhatWeDo />
        </section>
        <OurServices />
        <section className="bg-offwhite">
          <Testimonials />
        </section>
        <section className="bg-[#f9f9ff]">
          <WhoWeServeCards />
        </section>
        <section className="bg-white pb-14 md:pb-16">
          <HowItWorks />
        </section>
        <section className="bg-offwhite">
          <WhyClientsChoose />
        </section>
        <CaseStudies />
        <Contact />
      </main>
    </>
  );
}

export default HomePage;
