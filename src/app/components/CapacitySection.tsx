import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function CapacitySection() {
  const stats = [
    { value: '50,000 MT', label: 'Annual Capacity' },
    { value: '45,000 m²', label: 'Total Plant Area' },
    { value: '4 Lines', label: 'Continuous Production' },
    { value: '2 Units', label: 'Metallurgical Labs' },
  ];

  return (
    <section id="capacity" className="bg-beige-warm py-24 md:py-32 text-navy-deep font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-16 md:gap-20">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-copper font-bold block mb-4">
            Infrastructure Scale
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            Manufacturing Capacity & Facilities
          </h2>
          <p className="mt-4 text-navy-deep/70 text-sm md:text-base max-w-xl">
            We operate automated furnaces, drawing mills, and structural lines designed to guarantee reliable supply for massive infrastructure tenders.
          </p>
        </div>

        {/* Large Plant Image (Full-Width, Wide-Aspect) */}
        <div className="relative group overflow-hidden shadow-xl border border-black/5 aspect-[21/9]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
            alt="SMCL Industrial Copper Smelting Plant exterior"
            className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05] group-hover:scale-101 transition-transform duration-700"
          />
          {/* Subtle logo overlay on plant */}
          <div className="absolute bottom-6 right-6 bg-navy-deep/80 text-white px-4 py-2 text-xs uppercase tracking-widest font-bold">
            SMCL Unit 1 - Rajasthan
          </div>
        </div>

        {/* 4 Stats in a row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y-0 divide-x-0 md:divide-x divide-black/10 border-t border-b border-black/10 py-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-1 text-center md:px-4">
              <span className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-copper tracking-wide">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-xs text-navy-deep/60 uppercase tracking-widest font-semibold mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Supporting Facility Column Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Info */}
          <div className="lg:col-span-7 flex flex-col gap-5 pr-0 lg:pr-8">
            <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-wider text-navy-deep">
              Global Scale Production & Distribution Ready
            </h3>
            <p className="text-sm md:text-base text-navy-deep/70 leading-relaxed">
              Located within a premier industrial corridor, our manufacturing plant incorporates continuous casting and hot rolling machinery under licensing from world-renowned metallurgy designers.
            </p>
            <p className="text-sm md:text-base text-navy-deep/70 leading-relaxed">
              Equipped with private rail links and container loading docks, SMCL guarantees frictionless logistics to major ports. We have established partnerships with power utility boards in 12 states and export to international distributors across Asia-Pacific and Europe.
            </p>
          </div>

          {/* Secondary Facility Detail Image */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-3 border border-copper/20 pointer-events-none translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
            <div className="relative aspect-[4/3] overflow-hidden shadow-lg bg-navy-deep">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
                alt="Automated smelting machine monitoring control room"
                className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05] group-hover:scale-103 transition-all duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
