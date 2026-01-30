import "./App.css";
import logo from "./assets/Logo_360.png";
import { ServicesExpandable } from "@/components/ui/expandable";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatWeBelieve from "./components/WhatWeBelieve";
import WhatWeDo from "./components/WhatWeDo";
import OurServices from "./components/OurServices";
import WhoWeWorkWith from "./components/WhoWeWorkWith";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-offwhite">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        <section id="about">
          <WhatWeBelieve />
          <WhatWeDo />
        </section>

        <section id="services">
          <OurServices />
        </section>

        <section id="WhoWeworkWith">
          <WhoWeWorkWith />
        </section>

        <section id="HowWeWork" className=" bg-white">
          <HowItWorks />
        </section>

        <section id="Pricing" className="py-20 bg-pffwhite">
          <Pricing />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
