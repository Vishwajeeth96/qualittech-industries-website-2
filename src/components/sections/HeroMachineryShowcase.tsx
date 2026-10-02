import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ArrowRight,
  Sparkles,
  Layers,
  Zap,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import { HERO_FLAGSHIP_MACHINE, HERO_REVEAL_MACHINES } from '../../data/machineryData';

interface HeroMachineryShowcaseProps {
  onNavigate?: (route: string) => void;
}

export const HeroMachineryShowcase: React.FC<HeroMachineryShowcaseProps> = ({ onNavigate }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNavigate = (route: string) => {
    if (onNavigate) {
      onNavigate(route);
    } else {
      window.location.hash = route;
    }
  };

  return (
    <div className="w-full mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-200/80">
      {/* Section Header / Intro Badge */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#017AC3]/10 border border-[#017AC3]/20 text-[11px] sm:text-xs font-mono font-bold text-[#017AC3] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#017AC3] shrink-0" />
            <span>Industrial Infrastructure &bull; 128+ Active Machines</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#061522] tracking-tight">
            Flagship Machinery & Advanced Production Units
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base mt-1 max-w-2xl leading-relaxed">
            Precision fiber laser profiling, 160-ton progressive stamping presses, robotic welding cells, and dedicated CNC toolroom machining at our Hosur plant.
          </p>
        </div>

        <a
          href="#capabilities"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#017AC3] hover:text-[#061522] transition-colors shrink-0 group self-start sm:self-end pb-1"
        >
          <span>Explore All 6 Capabilities</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>

      {/* Main Flagship Machine Card (Hero Machine) */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        {/* Subtle engineering corner marks */}
        <div className="absolute top-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-l-2 border-[#017AC3] z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-r-2 border-[#017AC3] z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-l-2 border-[#017AC3] z-20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-r-2 border-[#D71920] z-20 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          {/* Machine Image (Left/Top 7 Cols) - Clean, bright white background */}
          <div className="lg:col-span-7 relative bg-white flex items-center justify-center p-3 sm:p-6 lg:p-8 overflow-hidden group">
            {/* Subtle high-key lighting aura */}
            <div className="absolute inset-0 bg-radial from-slate-100/60 to-white pointer-events-none" />
            <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />

            {/* Badges on top of image */}
            <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10 flex flex-wrap gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/95 shadow-xs border border-slate-200/90 text-[10px] sm:text-xs font-mono font-bold text-[#017AC3]">
                <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#017AC3]" />
                {HERO_FLAGSHIP_MACHINE.badge}
              </span>
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] sm:text-[11px] font-mono font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Line
              </span>
            </div>

            <div className="relative w-full max-w-[620px] h-48 sm:h-64 md:h-72 lg:h-[340px] flex items-center justify-center">
              <img
                src={HERO_FLAGSHIP_MACHINE.image}
                alt={HERO_FLAGSHIP_MACHINE.name}
                className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
              />
            </div>
          </div>

          {/* Machine Details (Right/Bottom 5 Cols) */}
          <div className="lg:col-span-5 p-4 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200/80 bg-gradient-to-br from-slate-50/70 to-white/90">
            <div>
              <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-500 mb-1.5 sm:mb-2">
                <span className="font-bold text-[#017AC3]">{HERO_FLAGSHIP_MACHINE.category}</span>
                <span className="bg-slate-200/70 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold text-slate-700">
                  {HERO_FLAGSHIP_MACHINE.code}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#061522] leading-snug">
                {HERO_FLAGSHIP_MACHINE.name}
              </h3>

              <div className="mt-1.5 sm:mt-2 inline-block text-[11px] sm:text-xs font-mono font-bold text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">
                Make: <span className="text-[#017AC3]">{HERO_FLAGSHIP_MACHINE.make}</span> &bull; {HERO_FLAGSHIP_MACHINE.capacity}
              </div>

              <p className="mt-2.5 sm:mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {HERO_FLAGSHIP_MACHINE.description}
              </p>

              {/* Key Technical Specifications */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-5 border-t border-slate-200/80 grid grid-cols-2 gap-2 sm:gap-2.5">
                {HERO_FLAGSHIP_MACHINE.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white border border-slate-200/80 shadow-xs flex flex-col"
                  >
                    <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold truncate">
                      {spec.label}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-[#061522] mt-0.5 truncate">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action in Card */}
            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-mono text-slate-500">
                Hosur Plant &bull; Cell #01
              </span>
              <button
                type="button"
                onClick={() => handleNavigate(HERO_FLAGSHIP_MACHINE.targetSlug)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#017AC3] hover:text-[#061522] transition-colors cursor-pointer"
              >
                <span>Explore Laser Fleet & Specs</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive "View More" Toggle Button */}
      <div className="mt-5 sm:mt-6 flex flex-col items-center justify-center">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white hover:bg-slate-50 text-[#061522] hover:text-[#017AC3] border-2 border-[#017AC3]/30 hover:border-[#017AC3] shadow-md hover:shadow-lg transition-all duration-300 font-bold text-xs sm:text-sm select-none cursor-pointer"
          aria-expanded={isExpanded}
        >
          <span className="w-2 h-2 rounded-full bg-[#017AC3] group-hover:scale-125 transition-transform" />
          <span>{isExpanded ? 'Hide Key Machinery' : 'View More Machinery'}</span>
          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[11px] sm:text-xs font-mono text-slate-600 font-semibold group-hover:bg-[#017AC3]/10 group-hover:text-[#017AC3] transition-colors">
            4 Main Units
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#017AC3] transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      </div>

      {/* Smooth Reveal: 4 Row-Wise Proper Flex / Grid Machinery Cards */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-6 sm:pt-8">
              <div className="text-center mb-4 sm:mb-6">
                <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                  Key Production Pillars &bull; Hosur Facility
                </span>
                <h3 className="text-lg sm:text-2xl font-extrabold text-[#061522] mt-1">
                  High-Capacity Forming, Machining, Welding & Coating
                </h3>
              </div>

              {/* 4 Cards: Stacks cleanly on mobile, 2 cols on tablet, 4 cols on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {HERO_REVEAL_MACHINES.map((machine, index) => (
                  <motion.div
                    key={machine.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    className="flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-4 sm:p-5 group relative overflow-hidden"
                  >
                    {/* Top Machine Category & Code */}
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2">
                        <span className="font-bold text-[#017AC3] truncate max-w-[140px]">
                          {machine.category}
                        </span>
                        <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px] font-semibold text-slate-600">
                          {machine.code}
                        </span>
                      </div>

                      {/* Clean White Background Image Container */}
                      <div className="relative h-44 sm:h-48 w-full rounded-xl bg-white border border-slate-100 flex items-center justify-center p-2.5 overflow-hidden mb-3">
                        <img
                          src={machine.image}
                          alt={machine.name}
                          className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs border border-slate-200 text-[10px] font-mono font-bold text-slate-700 shadow-xs">
                          {machine.tag}
                        </span>
                      </div>

                      {/* Title & Make */}
                      <h4 className="text-sm sm:text-base font-extrabold text-[#061522] group-hover:text-[#017AC3] transition-colors leading-snug">
                        {machine.name}
                      </h4>

                      <div className="mt-1 text-xs font-mono text-slate-600 font-semibold">
                        Make: <span className="text-[#061522]">{machine.make}</span>
                      </div>
                      <div className="text-xs font-mono text-[#017AC3] font-bold mt-0.5">
                        {machine.capacity}
                      </div>

                      {/* Highlights */}
                      <div className="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-slate-100 space-y-1 sm:space-y-1.5">
                        {machine.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-center gap-1.5 text-xs text-slate-600 font-medium"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA to view details in full machinery section */}
                    <div className="mt-3.5 sm:mt-4 pt-3 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => handleNavigate(machine.targetSlug)}
                        className="inline-flex items-center justify-between w-full text-xs font-mono font-bold text-[#017AC3] group-hover:text-[#061522] transition-colors cursor-pointer"
                      >
                        <span>Explore {machine.category} Page</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View Full List Button Linking to Dedicated Section */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
                <a
                  href="#capabilities"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#017AC3] hover:bg-[#075985] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#017AC3]/25 hover:shadow-xl hover:shadow-[#017AC3]/35 transition-all duration-300 group"
                >
                  <Layers className="w-4 h-4 text-white/90" />
                  <span>View All 6 Core Capabilities</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <a
                  href="/data/List_of_Machines_2026-27.csv"
                  download="Qualitech_Industries_Machinery_List_2026-27.csv"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-[#017AC3] border border-slate-300 text-xs font-mono font-bold transition-all shadow-xs"
                >
                  <span>Download Registry (CSV)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroMachineryShowcase;
