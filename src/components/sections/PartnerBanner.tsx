import React from 'react';
import ThreeDotVisual from '../ui/ThreeDotVisual';
import { COMPANY_OVERVIEW } from '../../data/content';

export const PartnerBanner: React.FC = () => {
  return (
    <section className="py-20 bg-white text-[#061522] relative overflow-hidden border-y border-slate-200/80">
      {/* Background blueprint grid & soft blue illumination */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#017AC3]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm text-xs font-mono text-[#017AC3] uppercase tracking-widest mb-6">
          <ThreeDotVisual />
          <span>Integrated Manufacturing Architecture</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight text-[#061522]">
          {COMPANY_OVERVIEW.onePartnerStatement}
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          {COMPANY_OVERVIEW.onePartnerSubtitle}
        </p>

        {/* 6 Core Capabilities Tags linking directly to capability sections */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
          {[
            { label: 'Laser Cutting', href: '#laser-cutting' },
            { label: 'Tool Making & Tooling', href: '#tool-making' },
            { label: 'Hydraulic Machines', href: '#hydraulic-machines' },
            { label: 'Welding', href: '#welding' },
            { label: 'Powder Coating', href: '#powder-coating' },
            { label: 'Phosphating', href: '#phosphating' },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/90 text-xs sm:text-sm font-mono font-bold text-slate-700 hover:border-[#017AC3] hover:bg-[#017AC3]/5 hover:text-[#017AC3] shadow-sm transition-all group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#017AC3] group-hover:scale-125 transition-transform" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBanner;
