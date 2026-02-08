import React from 'react'

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
          <button className="cursor-pointer m-auto bg-green hover:bg-green/90 text-white font-heading font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
            Book a Free Consultation Call
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact