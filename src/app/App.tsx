import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import WhyCopperSection from './components/WhyCopperSection';
import ManufacturingSection from './components/ManufacturingSection';
import ProductsSection from './components/ProductsSection';
import IndustriesSection from './components/IndustriesSection';
import QualitySection from './components/QualitySection';
import CapacitySection from './components/CapacitySection';
import InquirySection from './components/InquirySection';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

export default function App() {
  useEffect(() => {
    const selectors = [
      'section h1', 'section h2', 'section h3',
      'section p', 'section li',
      'section [class*="card"]', 'section [class*="grid"] > div',
      'section [class*="flex"] > div', 'section img',
      'section button', 'section a[href]',
    ].join(',');

    const els = document.querySelectorAll<HTMLElement>(selectors);
    let delay = 0;
    let lastParent: Element | null = null;

    els.forEach((el) => {
      if (el.closest('nav') || el.closest('.no-sr') || el.closest('section:first-of-type')) return;
      el.classList.add('sr');
      if (el.parentElement !== lastParent) { delay = 0; lastParent = el.parentElement; }
      if (delay > 0) el.classList.add(`sr-delay-${Math.min(delay, 4)}`);
      delay++;
    });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('sr-visible'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-navy-deep text-white font-sans scroll-smooth">
      {/* Toast Notification Container */}
      <Toaster position="top-right" richColors closeButton theme="dark" />

      {/* Header Sticky Navigation */}
      <NavBar />

      {/* Main Core Layout Sections */}
      <main className="relative flex flex-col w-full">
        {/* 1. Hero Landing Section */}
        <HeroSection />

        {/* 2. Why Copper Matters Section */}
        <WhyCopperSection />

        {/* 3. Manufacturing Excellence Timeline Section */}
        <ManufacturingSection />

        {/* 4. Products Specification Portfolio Section */}
        <ProductsSection />

        {/* 5. Industries Covered Grid Section */}
        <IndustriesSection />

        {/* 6. Quality & Testing Certification Section */}
        <QualitySection />

        {/* 7. Facility Capacity & Scale Section */}
        <CapacitySection />

        {/* 8. Inquiry Contract Contact Form Section */}
        <InquirySection />
      </main>

      {/* Footer Navigation & Badges */}
      <Footer />
    </div>
  );
}