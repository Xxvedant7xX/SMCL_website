import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import WorkWithUsPage from './pages/WorkWithUsPage';
import CareersPage from './pages/CareersPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function ScrollReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    const selectors = [
      'section h1', 'section h2', 'section h3',
      'section p', 'section li',
      'section [class*="grid"] > div',
      'section [class*="flex"] > div', 'section img',
      'section button', 'section a[href]',
    ].join(',');

    const els = document.querySelectorAll<HTMLElement>(selectors);
    let delay = 0;
    let lastParent: Element | null = null;

    els.forEach((el) => {
      if (el.closest('nav') || el.closest('.no-sr') || el.closest('section:first-of-type')) return;
      el.classList.remove('sr', 'sr-visible', 'sr-delay-1', 'sr-delay-2', 'sr-delay-3', 'sr-delay-4');
      el.classList.add('sr');
      if (el.parentElement !== lastParent) { delay = 0; lastParent = el.parentElement; }
      if (delay > 0) el.classList.add(`sr-delay-${Math.min(delay, 4)}`);
      delay++;
    });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('sr-visible');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div className="min-h-screen bg-navy-deep text-white font-sans">
      <Toaster position="top-right" richColors closeButton theme="dark" />
      <NavBar />
      <ScrollToTop />
      <ScrollReveal />
      <main className="relative flex flex-col w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/work-with-us" element={<WorkWithUsPage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
