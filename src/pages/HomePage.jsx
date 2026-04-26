import { SeoHead } from "../components/SeoHead.jsx";
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

const HOME_SEO = {
  title: "Online Reputation Management in India | Reputation360",
  description:
    "Reputation360 helps individuals and brands in India take control of search and social: online reputation management, brand monitoring, and crisis response—backed by 7+ years of experience.",
};

function HomePage() {
  return (
    <>
      <SeoHead
        title={HOME_SEO.title}
        description={HOME_SEO.description}
        canonicalPath="/"
      />
      <Hero />
      <main className="flex w-full flex-col gap-28 pt-16 md:gap-32 md:pt-24 lg:gap-40 lg:pt-28">
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
