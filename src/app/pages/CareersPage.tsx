import React from 'react';
import { Link } from 'react-router';

export default function CareersPage() {
  const openings = [
    { role: 'Production Supervisor', dept: 'Manufacturing', location: 'Pithampur, Dhar, MP' },
    { role: 'Quality Control Engineer', dept: 'QC & Testing', location: 'Pithampur, Dhar, MP' },
    { role: 'Sales Executive — B2B', dept: 'Sales', location: 'Pan India' },
    { role: 'Mechanical Maintenance Technician', dept: 'Engineering', location: 'Pithampur, Dhar, MP' },
  ];

  return (
    <section className="min-h-screen bg-navy-deep text-white font-sans pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="text-center flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest font-bold" style={{ color: '#e8a060' }}>
            Join Our Team
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight">
            Careers at <span style={{ color: '#e8a060' }}>SMCL</span>
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto">
            Be part of India's growing copper manufacturing industry. We look for dedicated professionals who take pride in quality and precision.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {openings.map((job) => (
            <div
              key={job.role}
              className="border border-white/10 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:border-[#e8a060] transition-colors duration-300"
            >
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">{job.role}</h3>
                <p className="text-xs text-white/50 uppercase tracking-wider mt-1">{job.dept} · {job.location}</p>
              </div>
              <Link
                to="/contact"
                className="text-xs uppercase tracking-widest font-semibold px-6 py-3 border transition-colors duration-300 whitespace-nowrap"
                style={{ borderColor: '#e8a060', color: '#e8a060' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e8a060'; e.currentTarget.style.color = '#071426'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#e8a060'; }}
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>

        <div className="border-l-4 p-6 bg-white/5 text-sm text-white/60 leading-relaxed" style={{ borderColor: '#e8a060' }}>
          Don't see your role? Send your resume to{' '}
          <a href="mailto:enquires.smcl@gmail.com" style={{ color: '#e8a060' }}>
            enquires.smcl@gmail.com
          </a>{' '}
          and we'll be in touch.
        </div>
      </div>
    </section>
  );
}
