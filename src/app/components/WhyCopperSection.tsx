import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Zap, Activity, ShieldAlert, Cpu } from 'lucide-react';

export default function WhyCopperSection() {
  const pillars = [
    {
      icon: <Zap className="text-copper size-6" />,
      title: 'Power Transmission & Grids',
      description: 'Ultra-low resistivity ensures minimal line losses over cross-country transmissions, supporting national energy distribution grids.',
    },
    {
      icon: <Activity className="text-copper size-6" />,
      title: 'Renewable Generation',
      description: 'Essential for wind turbine generators, solar photovoltaic cabling, and grid-scale battery storage facilities.',
    },
    {
      icon: <Cpu className="text-copper size-6" />,
      title: 'Precision Electronics',
      description: 'Ensures flawless thermal and electrical conductivity in microprocessors, heavy-duty switchgear, and motors.',
    },
    {
      icon: <ShieldAlert className="text-copper size-6" />,
      title: 'High-Stress Safety Systems',
      description: 'Superior tensile strength and ductility prevent fatigue failures in critical aerospace, defense, and traction systems.',
    },
  ];

  return (
    <section id="why-copper" className="bg-beige-warm py-24 md:py-32 text-navy-deep font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Intro Quote / Statement */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest text-copper font-bold block mb-4">
            The Foundation of Modern Power
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase leading-tight tracking-tight">
            Copper: The Conducting Backbone of Global Industrial Development
          </h2>
          <p className="mt-6 text-lg md:text-xl italic font-serif text-navy-deep/80 leading-relaxed pl-4 border-l-2 border-copper">
            "No element has shaped our power infrastructure or enabled the transition to smart grids as fundamentally as high-purity copper. It is the literal current running through civilization."
          </p>
        </div>

        {/* Editorial Layout: Grid Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Columns (Pillars Grid) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
              {pillars.map((pillar, index) => (
                <div 
                  key={index}
                  className="pl-6 border-l-2 border-copper hover:border-navy-deep transition-colors duration-300 flex flex-col gap-3"
                >
                  <div className="p-2 w-fit bg-navy-deep/5 mb-1">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wider">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-navy-deep/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Columns (Immersive Imagery) */}
          <div className="lg:col-span-5 relative group">
            {/* Outline Box Accent */}
            <div className="absolute -inset-4 border border-copper/30 translate-x-2 translate-y-2 pointer-events-none group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
            
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80"
                alt="High purity copper spooling wires and tubes"
                className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
