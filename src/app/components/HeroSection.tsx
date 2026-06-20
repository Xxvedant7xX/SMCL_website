import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShieldCheck, Cpu, Globe } from 'lucide-react';

export default function HeroSection() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy-deep overflow-hidden pt-20">
      {/* Background Image with Fallback and Dark Industrial Tint */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80"
          alt="SMCL Industrial Copper Manufacturing Welder Sparks"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.35] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy-deep/60 to-navy-deep" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full pt-12 pb-24 text-left flex flex-col justify-center min-h-[calc(100vh-80px)]">
        <div className="max-w-4xl flex flex-col gap-6 md:gap-8">
          {/* Subtle Tagline */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-copper" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-copper uppercase">
              Global Metal Leadership
            </span>
          </div>

          {/* Two-Line Barlow Condensed Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white leading-[1.05] uppercase">
            Precision in Every Purity. <br />
            <span className="text-copper">Excellence in Every Rod.</span>
          </h1>

          {/* Precise Modern Subheadline */}
          <p className="font-sans text-base md:text-xl text-white/70 max-w-2xl leading-relaxed">
            Shree Mahalakshmi CCR Limited manufactures premium Continuous Cast Copper Rods, wires, and bus bars engineered for ultra-high conductivity power systems, grid infrastructures, and exports worldwide.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Button
              asChild
              className="rounded-none bg-copper hover:bg-copper-light text-white transition-all duration-300 font-sans uppercase tracking-widest text-xs px-8 py-4 h-auto font-semibold shadow-lg shadow-copper/20"
            >
              <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>
                Request Technical Quote
              </a>
            </Button>
            <Button
              asChild
              className="rounded-none border border-white/40 bg-transparent text-white hover:bg-white hover:text-navy-deep hover:border-white transition-all duration-300 font-sans uppercase tracking-widest text-xs px-8 py-4 h-auto font-semibold"
            >
              <a href="#products" onClick={(e) => handleScrollTo(e, '#products')}>
                Explore Product Catalog
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Floating Stats Panel */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-navy-industrial/90 backdrop-blur-md border-t border-white/10 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {/* Stat 1 */}
          <div className="flex items-center gap-4 md:justify-center pt-4 md:pt-0">
            <Cpu className="text-copper size-8 shrink-0" />
            <div>
              <div className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-wider">
                99.95%
              </div>
              <div className="text-xs text-white/50 uppercase tracking-widest font-sans mt-0.5">
                Minimum Electrolytic Purity
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 md:justify-center pt-4 md:pt-0">
            <Globe className="text-copper size-8 shrink-0" />
            <div>
              <div className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-wider">
                50,000 MT
              </div>
              <div className="text-xs text-white/50 uppercase tracking-widest font-sans mt-0.5">
                Annual Manufacturing Capacity
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 md:justify-center pt-4 md:pt-0">
            <ShieldCheck className="text-copper size-8 shrink-0" />
            <div>
              <div className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-wider">
                ISO & BIS
              </div>
              <div className="text-xs text-white/50 uppercase tracking-widest font-sans mt-0.5">
                Certified Quality Standards
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
