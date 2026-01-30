import React from 'react'

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-navy to-slate text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
          Ready to Transform Your Reputation?
        </h2>
        <p className="font-body text-white/80 max-w-xl mx-auto mb-10">
          Join thousands of businesses that trust Reputation360 to manage and
          enhance their online presence.
        </p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 font-body focus:outline-none focus:ring-2 focus:ring-green"
          />
          <button className="bg-green hover:bg-green/90 text-white font-heading font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
            Get Free Audit
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact