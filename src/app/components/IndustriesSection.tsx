import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';

export default function IndustriesSection() {
  const sectors = [
    {
      id: 'transmission',
      name: 'Power & Transmission',
      description: 'Supplying national grids with low-resistance CCR copper rods for overhead conductors, substation bus bars, and high-voltage cables.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
      gridClass: 'lg:col-span-2 lg:row-span-2 h-[350px] lg:h-[620px]',
    },
    {
      id: 'renewables',
      name: 'Renewable Energy',
      description: 'High conductivity copper wires for wind turbine generators, solar panels, and battery terminals.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
      gridClass: 'lg:col-span-1 lg:row-span-1 h-[290px]',
    },
    {
      id: 'electrical',
      name: 'Electrical Equipment',
      description: 'Standard sizing for industrial motors, power transformers, switchgears, and wiring devices.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      gridClass: 'lg:col-span-1 lg:row-span-1 h-[290px]',
    },
    {
      id: 'infrastructure',
      name: 'Infrastructure & Construction',
      description: 'Structural earthing bars and corrosion-resistant piping for major commercial and municipal developments.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      gridClass: 'lg:col-span-1 lg:row-span-1 h-[290px]',
    },
    {
      id: 'manufacturing',
      name: 'Industrial Manufacturing',
      description: 'OEM copper drawing rods and bars for automotive, machinery windings, and defense components.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      gridClass: 'lg:col-span-2 lg:row-span-1 h-[290px]',
    },
  ];

  return (
    <section id="industries" className="bg-graphite py-24 md:py-32 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest text-copper font-bold block mb-4">
            Market Sectors
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            Industries Powered by SMCL
          </h2>
          <p className="mt-4 text-white/50 text-sm md:text-base max-w-xl">
            Our high-spec copper products act as crucial electrical and structural components in critical sectors globally.
          </p>
        </div>

        {/* Asymmetric Assembled Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className={`relative overflow-hidden group border border-white/5 hover:border-copper/50 transition-colors duration-500 flex flex-col justify-end p-6 md:p-8 ${sector.gridClass}`}
            >
              {/* Background image component */}
              <div className="absolute inset-0 z-0">
                <ImageWithFallback
                  src={sector.image}
                  alt={sector.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 filter brightness-[0.4] contrast-[1.1] group-hover:brightness-[0.45]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/40 to-transparent" />
              </div>

              {/* Accent corner line */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[10px] border-r-[10px] border-t-transparent border-r-transparent group-hover:border-t-copper group-hover:border-r-copper transition-all duration-300" />

              {/* Text Overlays */}
              <div className="relative z-10 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white group-hover:text-copper transition-colors">
                    {sector.name}
                  </h3>
                  <ArrowUpRight size={18} className="text-white/30 group-hover:text-copper group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <p className="text-sm text-white/70 max-w-xl leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
