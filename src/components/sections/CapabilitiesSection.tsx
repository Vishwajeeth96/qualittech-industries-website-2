import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AbstractTechnicalVisual from '../ui/AbstractTechnicalVisual';
import ThreeDotVisual from '../ui/ThreeDotVisual';
import { CORE_PILLARS } from '../../data/content';

interface CapabilitiesSectionProps {
  onNavigate?: (route: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onNavigate }) => {
  const handlePillarClick = (pillarId: string) => {
    if (onNavigate) {
      onNavigate(pillarId);
    } else {
      window.location.hash = pillarId;
    }
  };

  return (
    <section id="capabilities" className="scroll-mt-28 py-24 sm:py-32 bg-[#F7FAFC] relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="6 Core Pillars"
          title="ENGINEERING CAPABILITIES"
          subtitle="FROM RAW MATERIAL TO FINISHED COMPONENT. Qualitech Industries integrates cutting, tooling, fabrication, hydraulics, and surface treatment into a coordinated engineering ecosystem."
          align="center"
          className="mb-16"
        />

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => handlePillarClick(pillar.id)}
              className="group rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 p-6 sm:p-7 hover:border-[#017AC3]/50 hover:shadow-2xl hover:shadow-[#017AC3]/12 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Header: Number & 3-Dot Accent */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-[#017AC3]">
                      {pillar.number}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                  </div>
                  <ThreeDotVisual />
                </div>

                {/* Abstract Visual Identity for Each Capability */}
                <div className="mb-6">
                  <AbstractTechnicalVisual type={pillar.visualType} />
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-extrabold text-[#061522] group-hover:text-[#017AC3] transition-colors duration-200">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono font-semibold text-[#017AC3] uppercase tracking-wide mt-1">
                  {pillar.tagline}
                </p>

                {/* Description */}
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>

                {/* Feature Highlights */}
                <ul className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                  {pillar.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#017AC3]/10 text-[#017AC3] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action: Navigates to dedicated capability page */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePillarClick(pillar.id);
                  }}
                  className="text-xs font-mono font-bold text-[#017AC3] hover:text-[#061522] transition-colors inline-flex items-center gap-1 group/btn cursor-pointer"
                >
                  <span>Explore {pillar.title}</span>
                  <span className="transition-transform group-hover/btn:translate-x-0.5">&rarr;</span>
                </button>

                <div
                  className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#017AC3] group-hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label={`View ${pillar.title} page`}
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
