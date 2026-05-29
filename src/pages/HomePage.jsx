import { SeoHead } from "../components/SeoHead.jsx";
import { faqAdditionalJsonLdFromItems, mapQuestionAnswerFaqs } from "../data/faqPageSchema.js";
import { HOME_FAQ_ITEMS } from "../data/homeFaqItems.js";
import { HOME_PAGE_JSON_LD } from "../data/organizationSchema.js";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";
import Hero from "../components/Hero";
import { HomeFromOurBlogSection } from "../components/home/HomeFromOurBlogSection.jsx";
import WhoWeServeCards from "../components/WhoWeServeCards";
import OurServices from "../components/OurServices";
import CaseStudies from "../components/CaseStudies";
import WhatWeBelieve from "../components/WhatWeBelieve";
import WhatWeDo from "../components/WhatWeDo";
import HowReputation360Works from "../components/HowReputation360Works";
import WhyClientsChoose from "../components/WhyClientsChoose";
import Contact from "../components/Contact";
import HomeFaq from "../components/HomeFaq";
import HomeTestimonials from "../components/HomeTestimonials.jsx";

function HomePage() {
  const homeSeo = useLocalizedSeo("home");

  return (
    <>
      <SeoHead
        title={homeSeo.title}
        description={homeSeo.description}
        canonicalPath={homeSeo.path}
        jsonLd={HOME_PAGE_JSON_LD}
        additionalJsonLd={faqAdditionalJsonLdFromItems(mapQuestionAnswerFaqs(HOME_FAQ_ITEMS))}
      />
      <Hero />
      <main className="flex w-full flex-col gap-12 pt-8 md:gap-16 md:pt-12 lg:gap-20 lg:pt-16">
        <section>
          <WhatWeBelieve />
        </section>
        <section>
          <WhatWeDo />
        </section>
        <OurServices />
        <section className="bg-offwhite">
          <HomeTestimonials />
        </section>
        <WhoWeServeCards />
        <section className="bg-white">
          <HowReputation360Works />
        </section>
        <WhyClientsChoose />
        <CaseStudies />
        <HomeFromOurBlogSection id="from-our-blog" />
        <section>
          <HomeFaq />
        </section>
        <Contact />
      </main>
    </>
  );
}

export default HomePage;
