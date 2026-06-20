import React from 'react';
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