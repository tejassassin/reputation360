import React from "react";
import { ConsultationCtas } from "./ConsultationCtas";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-linear-to-br from-navy to-slate py-24 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading mb-4 text-3xl font-bold md:text-4xl">
          Ready to Fix Your Online Reputation?
        </h2>
        <p className="font-body mx-auto mb-10 max-w-2xl text-white/80">
          Your reputation took years to build. Don't let the internet decide its
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

export default Contact;
