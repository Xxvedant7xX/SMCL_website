import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Check, ClipboardList, Download, ArrowRight } from 'lucide-react';

export default function ProductsSection() {
  const products = [
    {
      id: 'ccr-rod-12mm',
      name: 'Copper Rod 12mm',
      tagline: 'Continuous Cast CCR Rod — 12mm Diameter',
      image: 'https://images.unsplash.com/photo-1615840287214-7fe58a8b668f?auto=format&fit=crop&w=800&q=80',
      specs: [
        { label: 'Diameter', value: '12.0 mm' },
        { label: 'Electrolytic Purity', value: '99.90% Minimum' },
        { label: 'Electrical Conductivity', value: '101% IACS Minimum' },
        { label: 'Governing Standards', value: 'ASTM B49 / BS EN 1977' },
      ],
      detailedSpecs: {
        chemicalComposition: [
          { element: 'Copper (Cu)', percentage: '99.90% Min' },
          { element: 'Oxygen (O2)', percentage: '150 - 400 ppm' },
          { element: 'Lead (Pb)', percentage: '< 5 ppm' },
          { element: 'Bismuth (Bi)', percentage: '< 1 ppm' },
        ],
        mechanicalProperties: [
          { property: 'Tensile Strength', specification: '220 - 250 MPa' },
          { property: 'Elongation at Break', specification: '35% Minimum' },
          { property: 'Torsion Test', specification: '40 twists Min before fail' },
        ],
      },
    },
    {
      id: 'ccr-rod-8mm',
      name: 'Copper Rod 8mm',
      tagline: 'Continuous Cast CCR Rod — 8mm Diameter',
      image: 'https://images.unsplash.com/photo-1615840287214-7fe58a8b668f?auto=format&fit=crop&w=800&q=80',
      specs: [
        { label: 'Diameter', value: '8.0 mm' },
        { label: 'Electrolytic Purity', value: '99.90% Minimum' },
        { label: 'Electrical Conductivity', value: '101% IACS Minimum' },
        { label: 'Governing Standards', value: 'ASTM B49 / BS EN 1977' },
      ],
      detailedSpecs: {
        chemicalComposition: [
          { element: 'Copper (Cu)', percentage: '99.90% Min' },
          { element: 'Oxygen (O2)', percentage: '150 - 400 ppm' },
          { element: 'Lead (Pb)', percentage: '< 5 ppm' },
          { element: 'Bismuth (Bi)', percentage: '< 1 ppm' },
        ],
        mechanicalProperties: [
          { property: 'Tensile Strength', specification: '220 - 250 MPa' },
          { property: 'Elongation at Break', specification: '35% Minimum' },
          { property: 'Torsion Test', specification: '40 twists Min before fail' },
        ],
      },
    },
    {
      id: 'copper-wire-1.6mm',
      name: 'Copper Wire 1.6mm',
      tagline: 'Drawn Copper Wire — 1.6mm Diameter',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80',
      specs: [
        { label: 'Diameter', value: '1.6 mm' },
        { label: 'Electrolytic Purity', value: '99.90% Minimum' },
        { label: 'Elongation Value', value: '25% - 35%' },
        { label: 'Governing Standards', value: 'IS 8130 / IEC 60228' },
      ],
      detailedSpecs: {
        chemicalComposition: [
          { element: 'Copper (Cu)', percentage: '99.90% Min' },
          { element: 'Oxygen (O2)', percentage: '100 - 300 ppm' },
          { element: 'Lead (Pb)', percentage: '< 10 ppm' },
          { element: 'Iron (Fe)', percentage: '< 8 ppm' },
        ],
        mechanicalProperties: [
          { property: 'Ductility Class', specification: 'Class 1 (Solid)' },
          { property: 'Surface Finish', specification: 'Bright annealed, oxidation-free' },
          { property: 'Resistivity at 20°C', specification: '0.01724 Ω·mm²/m Maximum' },
        ],
      },
    },
  ];

  return (
    <section id="products" className="bg-beige-warm py-24 md:py-32 text-navy-deep font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest text-copper font-bold block mb-4">
            Industrial Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            Premium Product Specifications
          </h2>
          <p className="mt-4 text-navy-deep/70 text-sm md:text-base max-w-xl">
            We manufacture a comprehensive range of electrical grade copper products designed to withstand high temperatures and mechanical stress in power grids.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-black/10 flex flex-col h-full hover:border-copper group transition-colors duration-300 relative shadow-md"
            >
              {/* Product Aspect Image */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-navy-deep relative">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs text-white/90 font-medium tracking-wide uppercase flex items-center gap-1.5">
                    Click View Spec Sheet <ArrowRight size={12} className="text-copper" />
                  </span>
                </div>
              </div>

              {/* Card Main Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-wider text-navy-deep group-hover:text-copper transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-navy-deep/50 uppercase tracking-widest font-semibold mt-1 mb-6">
                  {product.tagline}
                </p>

                {/* Specs Table */}
                <div className="border-t border-b border-black/10 py-4 flex-grow">
                  <table className="w-full text-xs text-left">
                    <tbody>
                      {product.specs.map((spec, sIdx) => (
                        <tr key={sIdx} className="border-b last:border-0 border-black/5">
                          <td className="py-2.5 font-bold uppercase text-navy-deep/50 tracking-wider w-[40%]">
                            {spec.label}
                          </td>
                          <td className="py-2.5 font-semibold text-navy-deep pl-2">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Card Action Modal Button */}
                <div className="mt-8">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full rounded-none border border-navy-deep/20 bg-transparent text-navy-deep hover:bg-navy-deep hover:text-white hover:border-navy-deep transition-all duration-300 font-sans uppercase tracking-widest text-xs py-3 h-auto font-semibold">
                        View Full Specifications
                      </Button>
                    </DialogTrigger>
                    
                    <DialogContent className="max-w-2xl rounded-none border-2 border-copper bg-white text-navy-deep p-8 font-sans">
                      <DialogHeader className="border-b border-black/10 pb-4">
                        <div className="flex items-center gap-2 text-copper mb-1">
                          <ClipboardList size={20} />
                          <span className="text-[10px] tracking-widest uppercase font-bold">Technical Datasheet</span>
                        </div>
                        <DialogTitle className="font-display text-3xl font-extrabold uppercase text-navy-deep">
                          {product.name}
                        </DialogTitle>
                        <DialogDescription className="text-xs text-navy-deep/60 mt-1">
                          Standard compliance details, purity metrics, and testing specs for order batches.
                        </DialogDescription>
                      </DialogHeader>

                      {/* Modal Table Content */}
                      <div className="mt-6 flex flex-col gap-6 max-h-[400px] overflow-y-auto pr-2">
                        {/* Chem Composition */}
                        <div>
                          <h4 className="font-display text-base font-bold uppercase tracking-wider text-copper mb-3">
                            1. Chemical Composition Standards
                          </h4>
                          <table className="w-full text-xs text-left border border-black/10">
                            <thead>
                              <tr className="bg-navy-deep text-white uppercase tracking-wider">
                                <th className="p-3 font-semibold">Element</th>
                                <th className="p-3 font-semibold">Certified Specifications</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-black/10">
                              {product.detailedSpecs.chemicalComposition.map((item, idx) => (
                                <tr key={idx} className="hover:bg-black/5">
                                  <td className="p-3 font-bold">{item.element}</td>
                                  <td className="p-3 text-navy-deep/80">{item.percentage}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Mechanical properties */}
                        <div>
                          <h4 className="font-display text-base font-bold uppercase tracking-wider text-copper mb-3">
                            2. Mechanical & Physical Properties
                          </h4>
                          <table className="w-full text-xs text-left border border-black/10">
                            <thead>
                              <tr className="bg-navy-deep text-white uppercase tracking-wider">
                                <th className="p-3 font-semibold">Property</th>
                                <th className="p-3 font-semibold">Test Specification Range</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-black/10">
                              {product.detailedSpecs.mechanicalProperties.map((item, idx) => (
                                <tr key={idx} className="hover:bg-black/5">
                                  <td className="p-3 font-bold">{item.property}</td>
                                  <td className="p-3 text-navy-deep/80">{item.specification}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Quality Statement */}
                        <div className="bg-beige-warm/30 p-4 border-l-4 border-copper text-xs flex flex-col gap-1 leading-relaxed">
                          <span className="font-bold uppercase text-copper">Certified Batch Testing</span>
                          <p className="text-navy-deep/70">
                            All materials undergo micro-crack analysis and resistivity verification prior to dispatch. Mill test certificates are issued with every export batch under ISO regulations.
                          </p>
                        </div>
                      </div>

                      {/* Modal Footer */}
                      <div className="border-t border-black/10 pt-6 mt-6 flex justify-between items-center gap-4">
                        <span className="text-[10px] uppercase text-navy-deep/40 tracking-wider">
                          ASTM / IEC CERTIFIED PRODUCTS
                        </span>
                        <Button 
                          asChild
                          className="rounded-none bg-copper hover:bg-copper-light text-white transition-all font-sans uppercase tracking-widest text-xs px-6 py-2.5 h-auto"
                        >
                          <a href="#contact">
                            <Download size={14} className="mr-1.5 shrink-0" />
                            Request Specs PDF
                          </a>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Wire Drawing Note */}
        <div className="mt-12 border-l-4 border-copper bg-white/60 p-6 flex flex-col gap-1 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-copper">Custom Wire Drawing — Made to Order</span>
          <p className="text-sm text-navy-deep/70 leading-relaxed mt-1">
            As per your requirement, we also draw wire between <strong className="text-navy-deep">8mm to 1.6mm</strong> in any intermediate diameter. All custom sizes are manufactured to order — contact us with your specifications.
          </p>
        </div>

      </div>
    </section>
  );
}
