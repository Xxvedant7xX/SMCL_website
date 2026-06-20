import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function ManufacturingSection() {
  const steps = [
    {
      num: '01',
      title: 'Continuous Smelting & Casting',
      subtitle: 'Pure cathode smelting under controlled atmospheres',
      description: 'LME Grade A copper cathodes are charged into our modern shaft furnace. The molten copper flows continuously into a casting machine, forming a solid bar of uniform crystalline structure.',
      image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '02',
      title: 'Precision Rolling & Reduction',
      subtitle: 'Hot-rolling to custom millimeter diameter rods',
      description: 'The cast copper bar is immediately processed through a multi-pass hot rolling mill. It undergoes high-pressure reduction to shape it into continuous 8mm, 12mm, or 16mm rods with high tensile consistency.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '03',
      title: 'Traction Drawing & Processing',
      subtitle: 'Cold drawing for high conductivity wires',
      description: 'Using high-speed multi-wire drawing lines, the rods are cold-reduced to micro-fine wires or flattened into structural bus bars. Custom annealing heat treatments optimize copper elasticity.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '04',
      title: 'Continuous Quality Assurance',
      subtitle: 'In-line eddy-current testing & oxygen analysis',
      description: 'Every batch is monitored in real-time. In-line laser diameter gauges, eddy-current sensors, and optical scanners check for surface micro-cracks, ensuring compliance with ASTM B49 standards.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="manufacturing" className="bg-navy-deep py-24 md:py-32 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <span className="text-xs uppercase tracking-widest text-copper font-bold block mb-4">
            Advanced Operations
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            Our Manufacturing Excellence
          </h2>
          <p className="mt-4 text-white/60 text-sm md:text-base max-w-xl">
            Transitioning raw copper cathodes into ultra-high conductivity electrical products requires extreme temperature controls, mechanical precision, and automated monitoring.
          </p>
        </div>

        {/* Timeline Process Steps */}
        <div className="relative flex flex-col gap-20 md:gap-32">
          
          {/* Subtle connecting vertical line down the center for desktop */}
          <div className="absolute left-1/2 top-10 bottom-10 w-[1px] bg-copper/20 -translate-x-1/2 hidden lg:block" />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={step.num}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10"
              >
                
                {/* Text Content - Column Left on Even, Column Right on Odd for Desktop */}
                <div className={`lg:col-span-6 flex flex-col gap-4 ${isEven ? 'lg:order-1 lg:pr-12' : 'lg:order-2 lg:pl-12'}`}>
                  {/* Number Badge and Header */}
                  <div className="flex items-center gap-4">
                    <span className="font-display text-4xl md:text-5xl font-extrabold text-copper/20 border-b border-copper/30 pb-1">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-wider text-white">
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold text-copper tracking-wider uppercase mt-0.5">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-white/70 leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>

                {/* Image Showcase - Column Right on Even, Column Left on Odd for Desktop */}
                <div className={`lg:col-span-6 relative group ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Offset Decorative Copper Border */}
                  <div className={`absolute -inset-3 border border-copper/20 pointer-events-none group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ${isEven ? 'translate-x-2 translate-y-2' : '-translate-x-2 translate-y-2'}`} />
                  
                  <div className="relative aspect-[16/10] overflow-hidden shadow-2xl bg-navy-industrial">
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05] group-hover:scale-105 group-hover:brightness-[0.95] transition-all duration-700"
                    />
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
