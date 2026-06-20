import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Cpu, Globe } from 'lucide-react';

const fadeUp = {
  animation: 'heroFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
};

function useCountUp(target: number, duration = 1800, decimals = 0, trigger: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [trigger]);
  return value;
}

export default function HeroSection() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const purity = useCountUp(99.90, 1800, 2, statsVisible);
  const capacity = useCountUp(12000, 2000, 0, statsVisible);

  const openPDF = async () => {
    const res = await fetch('/tc-report.pdf');
    const blob = await res.blob();
    const url = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy-deep overflow-hidden pt-20">
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes heroSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{ animation: 'heroFadeIn 1.4s ease both' }}
      >
        <ImageWithFallback
          src="/smcl hero photo.jpeg"
          alt="SMCL Industrial Copper Manufacturing"
          className="w-full h-full object-contain object-center filter brightness-[0.6] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy-deep/60 to-navy-deep" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full pt-12 pb-48 text-left flex flex-col justify-center min-h-[calc(100vh-80px)]">
        <div className="max-w-4xl flex flex-col gap-6 md:gap-8">

          {/* Headline */}
          <h1
            className="font-display text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white leading-[1.05] uppercase"
            style={{ ...fadeUp, animationDelay: '0.1s' }}
          >
            Precision in Every Purity. <br />
            <span style={{ color: '#e8a060' }}>Excellence in Every Rod.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="font-sans text-base md:text-xl text-white/70 max-w-2xl leading-relaxed"
            style={{ ...fadeUp, animationDelay: '0.3s' }}
          >
            Shree Mahalakshmi CCR Limited manufactures premium Continuous Cast Copper Rods and wires engineered for ultra-high conductivity power systems, grid infrastructures, and exports.
          </p>

          {/* Button */}
          <div
            className="flex flex-wrap items-center gap-4 mt-4"
            style={{ ...fadeUp, animationDelay: '0.5s' }}
          >
            <Button
              onClick={openPDF}
              className="rounded-none text-white transition-all duration-300 font-sans uppercase tracking-widest text-xs px-8 py-4 h-auto font-semibold shadow-lg"
              style={{ backgroundColor: '#e8a060' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d4905a')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e8a060')}
            >
              Request Technical Specifications
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Floating Stats Panel */}
      <div
        ref={statsRef}
        className="absolute bottom-0 left-0 right-0 z-20 bg-navy-industrial/90 backdrop-blur-md border-t border-white/10 py-6 md:py-8"
        style={{ animation: 'heroSlideUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.7s both' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {/* Stat 1 */}
          <div className="flex items-center gap-4 md:justify-center pt-4 md:pt-0">
            <Cpu size={32} style={{ color: '#e8a060', flexShrink: 0 }} />
            <div>
              <div className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-wider">
                {purity.toFixed(2)}%
              </div>
              <div className="text-xs text-white/50 uppercase tracking-widest font-sans mt-0.5">
                Copper Purity
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 md:justify-center pt-4 md:pt-0">
            <Globe size={32} style={{ color: '#e8a060', flexShrink: 0 }} />
            <div>
              <div className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-wider">
                {capacity.toLocaleString()} MT
              </div>
              <div className="text-xs text-white/50 uppercase tracking-widest font-sans mt-0.5">
                Annual Manufacturing Capacity
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
