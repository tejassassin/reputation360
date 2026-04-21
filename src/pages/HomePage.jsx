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
      <main className="flex-1">
        <section>
          <WhatWeBelieve />
          <WhatWeDo />
        </section>
        <section>
          <OurServices />
        </section>
        <section className="bg-offwhite">
          <Testimonials />
        </section>
        <section className="bg-[#f9f9ff]">
          <WhoWeServeCards />
        </section>
        <section className="bg-white pb-10">
          <HowItWorks />
        </section>
        <section className="bg-offwhite">
          <WhyClientsChoose />
        </section>
        <section className="flex justify-center bg-white">
          <CaseStudies />
        </section>
        <section>
          <Contact />
        </section>
      </main>
    </>
  );
}

export default HomePage;
