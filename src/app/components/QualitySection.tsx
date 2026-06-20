import React from 'react';
import { Award, ShieldCheck, Microscope, Landmark } from 'lucide-react';

export default function QualitySection() {
  const pillars = [
    {
      metric: '99.95%',
      label: 'Electrolytic Purity',
      icon: <Award className="text-copper size-5" />,
      description: 'Our CCR copper rods guarantee a minimum purity level of 99.95%, verified through regular optical emission spectrometry.',
    },
    {
      metric: '101%',
      label: 'IACS Conductivity',
      icon: <ShieldCheck className="text-copper size-5" />,
      description: 'Exceeding the International Annealed Copper Standard conductivity values, perfect for low-impedance power grids.',
    },
    {
      metric: 'Zero',
      label: 'Surface Defects',
      icon: <Microscope className="text-copper size-5" />,
      description: 'Continuous eddy-current inspection and online defect classification algorithms reject any material with micro-voids or fissures.',
    },
    {
      metric: '5-Step',
      label: 'Lab Certification',
      icon: <Landmark className="text-copper size-5" />,
      description: 'Testing includes chemical analysis, wrap tests, elongation tests, reverse torsion tests, and electrical resistivity measurements.',
    },
  ];

  const badges = [
    { name: 'ISO 9001:2015', desc: 'Quality Management Systems' },
    { name: 'ISO 14001:2015', desc: 'Environmental Compliance' },
    { name: 'BIS Standard Mark', desc: 'IS 1897 / IS 8130 Approved' },
    { name: 'ASTM B49 Standard', desc: 'Electrolytic Copper Rod Specification' },
    { name: 'LME Grade A Equivalent', desc: 'Purity Matching International Metals Exchange' },
  ];

  return (
    <section id="quality" className="bg-navy-deep py-24 md:py-32 text-white border-t border-b border-white/5 font-sans relative overflow-hidden">
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Intro */}
        <div className="max-w-3xl mb-20 md:mb-24">
          <span className="text-xs uppercase tracking-widest text-copper font-bold block mb-4">
            Quality Assurance
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            Every Rod Tested. Every Batch Certified.
          </h2>
          <p className="mt-4 text-white/60 text-sm md:text-base max-w-xl">
            We operate state-of-the-art testing facilities equipped with optical emission spectrometers and oxygen analyzers to certify quality before delivery.
          </p>
        </div>

        {/* 2x2 Grid of Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-20">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-navy-industrial/50 border border-white/10 p-8 md:p-10 hover:border-copper transition-all duration-300 flex flex-col gap-4 relative group"
            >
              {/* Top Accent Indicator */}
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-copper/30 group-hover:bg-copper group-hover:w-16 transition-all duration-300" />
              
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-copper tracking-wide leading-none">
                  {pillar.metric}
                </span>
                <div className="p-2 bg-white/5 rounded-none">
                  {pillar.icon}
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wider text-white">
                  {pillar.label}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mt-2">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Badges Section */}
        <div className="border-t border-white/10 pt-12">
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold mb-8">
            Compliance & Certification Badges
          </h4>
          <div className="flex flex-wrap gap-4">
            {badges.map((badge, idx) => (
              <div 
                key={idx}
                className="bg-navy-industrial border border-white/10 px-5 py-3 hover:border-copper/40 transition-colors flex flex-col gap-0.5"
              >
                <span className="text-sm font-bold text-white tracking-wide">
                  {badge.name}
                </span>
                <span className="text-[10px] text-white/40 uppercase tracking-wider">
                  {badge.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
