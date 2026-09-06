import React from "react";
import { ConsultationCtas } from "./ConsultationCtas";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-linear-to-br from-navy to-slate py-24 text-white md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
          Ready to Fix Your Online Reputation?
        </h2>
        <p className="font-body text-white/80 max-w-2xl mx-auto mb-10">
          Your reputation took years to build. Don’t let the internet decide its
          future.
        </p>
        <div className="mx-auto max-w-md text-center">
          <ConsultationCtas
            variant="compact"
            consultLabel="Book a Free Consultation Call"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact