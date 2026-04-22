import Hero from "../components/Hero";
import WhatWeBelieve from "../components/WhatWeBelieve";
import WhatWeDo from "../components/WhatWeDo";
import OurServices from "../components/OurServices";
import { Testimonials } from "../components/Testimonials";
import WhoWeServeCards from "../components/WhoWeServeCards";
import HowReputation360Works from "../components/HowReputation360Works";
import WhyClientsChoose from "../components/WhyClientsChoose";
import CaseStudies from "../components/CaseStudies";
import Contact from "../components/Contact";

function HomePage() {
  return (
    <>
      <Hero />
      <main className="flex flex-1 flex-col gap-28 pt-16 md:gap-32 md:pt-24 lg:gap-40 lg:pt-28">
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
        <WhoWeServeCards />
        <section className="bg-white">
          <HowReputation360Works />
        </section>
        <WhyClientsChoose />
        <CaseStudies />
        <Contact />
      </main>
    </>
  );
}

export default HomePage;
