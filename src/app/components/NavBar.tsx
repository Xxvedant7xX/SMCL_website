import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#why-copper' },
    { name: 'Our Product', href: '#products' },
    { name: 'Contact', href: '#contact' },
    { name: 'Work With Us', href: '#contact' },
    { name: 'Careers', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(0, 0, 0, 0.45)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(184, 115, 51, 0.25)',
        boxShadow: '0 4px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '88px',
        }}
      >
        {/* Logo — fills full nav height */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, '#')}
          style={{ display: 'flex', alignItems: 'center', height: '88px', overflow: 'hidden' }}
        >
          <img
            src="/smcl-logo.png"
            alt="SMCL - Shree Mahalakshmi CCR Limited"
            style={{ height: '108px', width: 'auto', objectFit: 'contain', display: 'block', marginTop: '-30px' }}
          />
        </a>

        {/* Desktop Nav Links — centered with small gap */}
        <div
          className="hidden md:flex"
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2.8rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                color: '#b87333',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'color 0.2s',
                padding: '4px 0',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#e8a060')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#b87333')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
          style={{ color: '#b87333' }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className="md:hidden"
        style={{
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(184, 115, 51, 0.2)',
          overflow: 'hidden',
          maxHeight: isMobileMenuOpen ? '400px' : '0px',
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
          transition: 'max-height 0.3s ease, opacity 0.3s ease',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 1.5rem', gap: '0' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                color: '#b87333',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
