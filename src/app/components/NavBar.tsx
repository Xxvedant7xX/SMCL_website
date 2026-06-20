import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Quality', href: '#quality' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-deep/95 backdrop-blur-md border-b border-white/10 shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <a href="#" className="flex flex-col group">
          <span className="font-display text-2xl md:text-3xl font-extrabold tracking-wider text-white transition-colors group-hover:text-copper">
            SMCL
          </span>
          <span className="text-[10px] text-white/60 tracking-widest uppercase font-sans mt-0.5 group-hover:text-white transition-colors duration-300">
            Copper CCR Rods | Wire | Bus Bars
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-white/80 hover:text-copper transition-colors duration-200 uppercase tracking-wider text-[12px]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-none border border-copper bg-transparent text-copper hover:bg-copper hover:text-white transition-all duration-300 font-sans uppercase tracking-wider text-xs px-5 py-2 h-auto"
          >
            <a href="#contact">Request Quote</a>
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-copper transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-navy-deep border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[350px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-white/80 hover:text-copper transition-colors duration-200 uppercase tracking-wider py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <Button
            asChild
            className="rounded-none border border-copper bg-transparent text-copper hover:bg-copper hover:text-white transition-all duration-300 font-sans uppercase tracking-wider text-xs py-2.5 w-full mt-2"
          >
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Request Quote
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
