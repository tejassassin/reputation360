import React from "react";
import { ServicesExpandable } from "./ui/expandable";

function OurServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
            Our Services
          </h2>
       
        </div>
        <ServicesExpandable />
      </div>
    </section>
  );
}

export default OurServices;
