import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Our Product', to: '/products' },
    { name: 'Contact', to: '/contact' },
    { name: 'Work With Us', to: '/work-with-us' },
    { name: 'Careers', to: '/careers' },
  ];

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
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', height: '88px', overflow: 'hidden' }}
        >
          <img
            src="/smcl-logo.png"
            alt="SMCL - Shree Mahalakshmi CCR Limited"
            style={{ height: '108px', width: 'auto', objectFit: 'contain', display: 'block', marginTop: '-30px' }}
          />
        </Link>

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
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? '#ffffff' : '#e8a060',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'color 0.2s',
                padding: '4px 0',
                borderBottom: isActive ? '2px solid #e8a060' : '2px solid transparent',
              })}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => {
                const active = e.currentTarget.getAttribute('aria-current') === 'page';
                e.currentTarget.style.color = active ? '#ffffff' : '#e8a060';
              }}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
          style={{ color: '#e8a060' }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Contact Info — pinned to far right, desktop only */}
      <div
        className="hidden md:flex"
        style={{
          position: 'absolute',
          right: '2rem',
          top: '0',
          height: '88px',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: '3px',
        }}
      >
        <a
          href="mailto:enquires.smcl@gmail.com"
          style={{ color: '#e8a060', fontSize: '12px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.04em' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#e8a060')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#e8a060')}
        >
          enquires.smcl@gmail.com
        </a>
        <a
          href="tel:+919425123165"
          style={{ color: '#e8a060', fontSize: '12px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.04em' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#e8a060')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#e8a060')}
        >
          +91-9425123165
        </a>
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
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ color: '#e8a060', fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
