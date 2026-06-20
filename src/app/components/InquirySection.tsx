import React, { useState } from 'react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Download, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

export default function InquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    product: 'ccr-rods',
    volume: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      toast.error('Please fill in all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Inquiry submitted successfully! Our sales engineers will contact you within 4 business hours.');
    }, 1800);
  };

  const handleDownloadCatalogue = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success('Starting catalogue download: SMCL_Copper_Catalogue_2026.pdf');
    // Simulate file download trigger
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'SMCL_Copper_Catalogue_2026.pdf');
    document.body.appendChild(link);
    // clean up
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  return (
    <section id="contact" className="bg-navy-industrial py-24 md:py-32 text-white font-sans relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Large Centered Headline */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-widest text-copper font-bold block mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight leading-tight">
            Partner with India's Premier Copper Manufacturer
          </h2>
          <p className="mt-4 text-white/50 text-sm md:text-base max-w-xl mx-auto">
            Discuss procurement volumes, customized dimensions, and contract pricing with our technical sales division.
          </p>
        </div>

        {/* Action Paths Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24">
          
          {/* Path 1: Request Quote */}
          <div className="bg-navy-deep/50 border border-white/10 p-8 flex flex-col justify-between hover:border-copper transition-colors duration-300">
            <div>
              <span className="text-[10px] font-bold text-copper uppercase tracking-wider block mb-2">Procurement</span>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-2">Request Quote</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Receive detailed custom pricing lists for high-tonnage monthly contracts and international shipments.
              </p>
            </div>
            <Button
              asChild
              className="rounded-none w-full bg-copper hover:bg-copper-light text-white transition-all font-sans uppercase tracking-widest text-xs py-3 h-auto font-semibold"
            >
              <a href="#inquiry-form">Go to Form</a>
            </Button>
          </div>

          {/* Path 2: Download Catalogue */}
          <div className="bg-navy-deep/50 border border-white/10 p-8 flex flex-col justify-between hover:border-copper transition-colors duration-300">
            <div>
              <span className="text-[10px] font-bold text-copper uppercase tracking-wider block mb-2">Documentation</span>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-2">Download Catalogue</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Access full dimensional parameters, mechanical tolerances, and alloy specifications in our standard brochure.
              </p>
            </div>
            <Button
              onClick={handleDownloadCatalogue}
              className="rounded-none w-full border border-white/30 bg-transparent text-white hover:bg-white hover:text-navy-deep hover:border-white transition-all font-sans uppercase tracking-widest text-xs py-3 h-auto font-semibold"
            >
              <Download size={14} className="mr-1.5 shrink-0" />
              Download PDF (12.4 MB)
            </Button>
          </div>

          {/* Path 3: Contact Sales */}
          <div className="bg-navy-deep/50 border border-white/10 p-8 flex flex-col justify-between hover:border-copper transition-colors duration-300">
            <div>
              <span className="text-[10px] font-bold text-copper uppercase tracking-wider block mb-2">Direct Channel</span>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-2">Contact Sales</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Call or email our headquarters directly to talk to a materials engineer about custom copper casting specifications.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 text-xs font-semibold uppercase tracking-wider">
              <a href="tel:+911245559800" className="flex items-center gap-2 hover:text-copper transition-colors">
                <Phone size={14} className="text-copper shrink-0" />
                +91 124 555 9800
              </a>
              <a href="mailto:sales@smclcopper.com" className="flex items-center gap-2 hover:text-copper transition-colors">
                <Mail size={14} className="text-copper shrink-0" />
                sales@smclcopper.com
              </a>
            </div>
          </div>

        </div>

        {/* Address and Interactive Form Grid */}
        <div id="inquiry-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-white/10 pt-16 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-4">Corporate Offices</h3>
              <ul className="flex flex-col gap-5 text-sm text-white/60">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-copper shrink-0 mt-1" />
                  <div>
                    <span className="text-white block font-medium">Shree Mahalakshmi CCR Ltd.</span>
                    12th Floor, Industrial Growth Plaza, Sector 4, Gurugram, Haryana - 122001, India.
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin size={18} className="text-copper shrink-0 mt-1" />
                  <div>
                    <span className="text-white block font-medium">Manufacturing Unit I</span>
                    Plot No. 45-48, Industrial Area Phase II, Alwar, Rajasthan - 301001, India.
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-4">Support Channels</h3>
              <ul className="flex flex-col gap-4 text-sm text-white/60">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-copper shrink-0" />
                  General Lines: +91 124 555 9801
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-copper shrink-0" />
                  General Queries: info@smclcopper.com
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Quotation Form */}
          <div className="lg:col-span-8 bg-navy-deep border border-white/10 p-8 md:p-10 relative">
            
            {/* Top Accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-copper" />

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                <CheckCircle2 size={56} className="text-copper" />
                <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                  Inquiry Received
                </h3>
                <p className="text-sm text-white/60 max-w-md leading-relaxed">
                  Thank you for contacting SMCL. A technical sales representative has been assigned to your request and will follow up with pricing options shortly.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="rounded-none border border-copper bg-transparent text-copper hover:bg-copper hover:text-white transition-all font-sans uppercase tracking-widest text-xs py-2 px-6 h-auto mt-4"
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white border-b border-white/10 pb-4 mb-2">
                  Request Specifications & Contract Quotation
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-wider text-white/50 font-bold">
                      Full Name <span className="text-copper">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar"
                      className="bg-navy-industrial border border-white/10 px-4 py-3 text-sm focus:border-copper focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-xs uppercase tracking-wider text-white/50 font-bold">
                      Company Name <span className="text-copper">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Tata Power Utilities"
                      className="bg-navy-industrial border border-white/10 px-4 py-3 text-sm focus:border-copper focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-wider text-white/50 font-bold">
                      Corporate Email <span className="text-copper">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. kumar@tata.com"
                      className="bg-navy-industrial border border-white/10 px-4 py-3 text-sm focus:border-copper focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Product Category */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="product" className="text-xs uppercase tracking-wider text-white/50 font-bold">
                      Material of Interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="bg-navy-industrial border border-white/10 px-4 py-3 text-sm focus:border-copper focus:outline-none transition-colors h-[46px]"
                    >
                      <option value="ccr-rods">Copper CCR Rods (8mm - 16mm)</option>
                      <option value="copper-wires">Copper Fine Wire (0.15mm - 3.2mm)</option>
                      <option value="bus-bars">Copper Flat Bus Bars (Structural)</option>
                      <option value="custom">Custom Casting Alloy Specification</option>
                    </select>
                  </div>
                </div>

                {/* Estimate Monthly Volume */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="volume" className="text-xs uppercase tracking-wider text-white/50 font-bold">
                    Estimated Monthly Volume (in Metric Tons)
                  </label>
                  <input
                    type="text"
                    id="volume"
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    placeholder="e.g., 50 MT - 200 MT"
                    className="bg-navy-industrial border border-white/10 px-4 py-3 text-sm focus:border-copper focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-wider text-white/50 font-bold">
                    Technical Specifications / Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe custom thickness, purity tests, wrapping tests or supply scheduling terms..."
                    className="bg-navy-industrial border border-white/10 px-4 py-3 text-sm focus:border-copper focus:outline-none transition-colors resize-y"
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-none bg-copper hover:bg-copper-light text-white transition-all font-sans uppercase tracking-widest text-xs py-4 h-auto font-semibold flex items-center justify-center gap-2 mt-2 shadow-lg shadow-copper/20"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin size-4" />
                      Transmitting Inquiry...
                    </>
                  ) : (
                    <>
                      Submit Technical Inquiry
                      <ArrowRight size={14} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
