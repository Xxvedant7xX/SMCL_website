import React from 'react';
import { Link } from 'react-router';

export default function WorkWithUsPage() {
  return (
    <section className="min-h-screen bg-navy-deep text-white font-sans flex items-center justify-center pt-24 pb-16 px-6">
      <div className="max-w-3xl w-full text-center flex flex-col gap-8">
        <span className="text-xs uppercase tracking-widest font-bold" style={{ color: '#e8a060' }}>
          Partner With Us
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight">
          Work With <span style={{ color: '#e8a060' }}>SMCL</span>
        </h1>
        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          We are always open to building long-term supply partnerships, dealer networks, and B2B procurement agreements for copper rods and wires. Reach out to our sales team to discuss terms, volumes, and pricing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 text-left">
          {[
            { title: 'Dealers & Distributors', desc: 'Join our authorized dealer network across India and expand your copper product portfolio.' },
            { title: 'Bulk Procurement', desc: 'Long-term supply contracts with assured quality, consistent delivery schedules, and competitive pricing.' },
            { title: 'OEM Partnerships', desc: 'Custom specifications manufactured to your product requirements with dedicated account management.' },
          ].map((item) => (
            <div key={item.title} className="border border-white/10 p-6 hover:border-[#e8a060] transition-colors duration-300">
              <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-3" style={{ color: '#e8a060' }}>
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <Link
          to="/contact"
          className="inline-block mt-4 px-10 py-4 font-sans text-xs uppercase tracking-widest font-semibold text-white transition-all duration-300"
          style={{ backgroundColor: '#e8a060' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d4905a')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e8a060')}
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
