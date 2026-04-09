import Hero from "../components/Hero";
import WhatWeBelieve from "../components/WhatWeBelieve";
import WhatWeDo from "../components/WhatWeDo";
import OurServices from "../components/OurServices";
import { Testimonials } from "../components/Testimonials";
import WhoWeWorkWith from "../components/WhoWeWorkWith";
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
        <section>
          <WhoWeWorkWith />
        </section>
        <section className="bg-white pb-10">
          <HowItWorks />
        </section>
        <section className="bg-offwhite">
          <WhyClientsChoose />
        </section>
        <section className="bg-white flex justify-center">
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
