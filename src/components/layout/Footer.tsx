import React from 'react';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';
import Logo from '../ui/Logo';
import SkewButton from '../ui/SkewButton';
import { COMPANY_INFO } from '../../data/content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#061522] relative overflow-hidden pt-16 pb-12 border-t border-slate-200/80">
      {/* Background blueprint grid & subtle lighting */}
      <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#017AC3]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-200/80">
          {/* Column 1 & 2: Brand Information */}
          <div className="lg:col-span-2 flex flex-col">
            <Logo variant="light" size="lg" className="mb-4" />
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mt-3">
              Precision machined and sheet metal fabricated components, tooling, hydraulic machines, and surface finishing manufactured with engineering discipline in Hosur, Tamil Nadu.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#017AC3]" />
                Est. August 2003
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#D71920]" />
                Hosur, TN, India
              </div>
            </div>

            <div className="mt-8">
              <SkewButton
                href="#contact"
                variant="white"
                className="!text-xs !py-2.5 !px-6 shadow-sm"
                icon={<ArrowUpRight className="w-4 h-4 text-[#017AC3]" />}
              >
                Start an Enquiry
              </SkewButton>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="text-xs font-mono font-bold text-[#017AC3] uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {[
                { label: 'About Qualitech', href: '#about' },
                { label: 'Why QTI', href: '#why-qti' },
                { label: 'Core Capabilities', href: '#capabilities' },
                { label: 'Our Achievements', href: '#achievements' },
                { label: 'Our Customers', href: '#customers' },
                { label: 'Industries Served', href: '#industries' },
                { label: 'Engineering Process', href: '#process' },
                { label: 'Contact & Location', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#017AC3] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Production Capabilities */}
          <div>
            <h3 className="text-xs font-mono font-bold text-[#017AC3] uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {[
                { label: 'Laser Cutting', href: '#laser-cutting' },
                { label: 'Tool Making & Tooling', href: '#tool-making' },
                { label: 'Hydraulic Machines', href: '#hydraulic-machines' },
                { label: 'Welding & Assembly', href: '#welding' },
                { label: 'Powder Coating', href: '#powder-coating' },
                { label: 'Phosphating Pre-Treatment', href: '#phosphating' },
              ].map((cap) => (
                <li key={cap.label}>
                  <a
                    href={cap.href}
                    className="flex items-center gap-2 hover:text-[#017AC3] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#017AC3]" />
                    <span>{cap.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Location & Verified Coordinates */}
          <div>
            <h3 className="text-xs font-mono font-bold text-[#017AC3] uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
              Works Location
            </h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#017AC3] shrink-0 mt-1" />
                <address className="not-italic leading-relaxed">
                  <strong className="text-[#061522] block font-semibold">QUALITECH INDUSTRIES</strong>
                  {COMPANY_INFO.location.addressLine1},<br />
                  {COMPANY_INFO.location.addressLine2},<br />
                  {COMPANY_INFO.location.country}
                </address>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#017AC3] hover:text-[#061522] transition-colors group"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-3.5 h-3.5 text-[#017AC3]" />
                <span>{COMPANY_INFO.contact.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Technical Tag */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#017AC3] animate-pulse" />
            <span>&copy; {currentYear} Qualitech Industries. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-500 font-mono">Hosur Industrial Belt &bull; Tamil Nadu</span>
            <span className="text-slate-600 font-semibold">Engineered for Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
