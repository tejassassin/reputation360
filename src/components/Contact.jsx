import React from "react";
import { calendlyNewTabProps } from "../constants/scheduling";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-br from-navy to-slate text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
          Ready to Take the Next Step?{" "}
        </h2>
        <p className="font-body text-white/80 max-w-2xl mx-auto mb-10">
          Your reputation took years to build. Don’t let the internet decide its
          future.
        </p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 text-center">
          <a
            {...calendlyNewTabProps}
            className="ha-pill m-auto inline-block cursor-pointer rounded-lg bg-green px-6 py-3 font-heading font-semibold whitespace-nowrap text-white transition-colors hover:bg-green/90"
          >
            Book a Free Consultation Call
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact