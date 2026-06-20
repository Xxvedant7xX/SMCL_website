import React from 'react';

export default function Footer() {
  const productLinks = [
    { name: 'Copper CCR Rods', href: '#products' },
    { name: 'Copper Wires', href: '#products' },
    { name: 'Copper Bus Bars', href: '#products' },
  ];

  const companyLinks = [
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Quality Standards', href: '#quality' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact Sales', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-deep text-white/70 py-16 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        {/* Column 1: Brand & Description */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-display text-2xl font-extrabold tracking-wider text-white">
              SMCL
            </span>
            <span className="text-[10px] text-copper tracking-widest uppercase font-sans mt-0.5 font-semibold">
              Excellence in Copper
            </span>
          </div>
          <p className="text-sm text-white/50 leading-relaxed mt-2">
            Shree Mahalakshmi CCR Limited (SMCL) is a premier industrial copper manufacturer specializing in high-conductivity rods, wire, and structural bus bars for international and national markets.
          </p>
        </div>

        {/* Column 2: Products */}
        <div>
          <h4 className="font-display text-white text-lg font-bold tracking-wider uppercase mb-5">
            Products
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            {productLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-copper transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="font-display text-white text-lg font-bold tracking-wider uppercase mb-5">
            Company
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            {companyLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-copper transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact info */}
        <div>
          <h4 className="font-display text-white text-lg font-bold tracking-wider uppercase mb-5">
            Headquarters
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-white/50">
            <li>
              <span className="text-white block font-medium mb-0.5">Corporate Office</span>
              12th Floor, Industrial Growth Plaza, Sector 4, Gurugram, Haryana - 122001
            </li>
            <li>
              <span className="text-white block font-medium mb-0.5">Manufacturing Facility</span>
              Plot No. 45-48, Industrial Area Phase II, Alwar, Rajasthan - 301001
            </li>
            <li>
              <span className="text-white block font-medium mb-0.5">Contact Support</span>
              sales@smclcopper.com | +91 124 555 9800
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Certification and Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <p className="text-white/40">
          © {new Date().getFullYear()} Shree Mahalakshmi CCR Limited. All Rights Reserved.
        </p>
        <div className="flex flex-wrap gap-4 text-white/50 uppercase tracking-widest font-semibold text-[10px]">
          <span>ISO 9001:2015</span>
          <span className="text-white/20">|</span>
          <span>BIS Approved</span>
          <span className="text-white/20">|</span>
          <span>ASTM Compliant</span>
          <span className="text-white/20">|</span>
          <span>Export Quality</span>
        </div>
      </div>
    </footer>
  );
}
