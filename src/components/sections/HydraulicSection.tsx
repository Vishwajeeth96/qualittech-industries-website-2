import React from 'react';
import { Gauge, ShieldCheck } from 'lucide-react';
import SkewButton from '../ui/SkewButton';

export const HydraulicSection: React.FC = () => {
  return (
    <section id="hydraulic-machines" className="scroll-mt-28 py-24 sm:py-32 bg-white text-[#061522] relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-12 w-96 h-96 bg-[#017AC3]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Technical Crossbar */}
      <div className="absolute top-12 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#017AC3]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Authentic 80-Ton Komatsu Press Showcase */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Precision Machine Housing Frame */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-gradient-to-br from-white/95 via-slate-50/90 to-white/80 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(1,122,195,0.18)] group">
              {/* L-Corner Precision Blueprint Brackets */}
              <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#017AC3] rounded-tl-sm pointer-events-none" />
              <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#017AC3] rounded-tr-sm pointer-events-none" />
              <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#017AC3] rounded-bl-sm pointer-events-none" />
              <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#D71920] rounded-br-sm pointer-events-none" />

              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 shadow-inner ring-1 ring-[#017AC3]/20">
                <img
                  src="/images/hydraulic-hero.jpg"
                  alt="Qualitech Industries 80-Ton Komatsu Hydraulic & Power Press in Press Shop"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Frosted Glass Edge & Subtle Vignette */}
                <div className="absolute inset-0 pointer-events-none rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/20" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/55 via-transparent to-black/20" />

                {/* Top-Left: Machine ID Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/15 text-white text-xs font-mono shadow-md pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse" />
                  <span className="font-bold tracking-wider text-white">80-TON KOMATSU</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-[#017AC3] font-semibold">QTI/P-MC/04</span>
                </div>

                {/* Top-Right: Status Indicator */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-800 text-[11px] font-mono font-bold shadow-sm pointer-events-none">
                  <Gauge className="w-3.5 h-3.5 text-[#017AC3]" />
                  <span>PRESS SHOP</span>
                </div>

                {/* Bottom Overlay: Description & Plant Tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono text-xs pointer-events-none">
                  <div className="flex items-center gap-2 bg-slate-950/75 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                    <span className="text-[#017AC3] font-bold">HYDRAULIC FORMING &amp; STAMPING</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-300 text-[11px]">HOSUR PLANT</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 bg-slate-950/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[11px] text-slate-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#017AC3]" />
                    <span>ISO 9001:2015</span>
                  </div>
                </div>
              </div>

              {/* Bottom Technical Spec Bar */}
              <div className="mt-2.5 pt-2 px-1 flex items-center justify-between border-t border-slate-200/70 text-[10px] font-mono text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#017AC3]" />
                  <span className="font-bold text-slate-700 tracking-wider">PRESS SPEC:</span>
                  <span className="text-slate-600">80-TON HEAVY DUTY FORMING &amp; COLD DRAWING</span>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-[9px] text-slate-400 tracking-wider">
                  <span>HIGH-REPEATABILITY THRUST</span>
                </div>
              </div>
            </div>

            {/* Performance Indicators */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-center font-mono">
              <div className="p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Press Force</span>
                <span className="text-xs font-bold text-[#061522] mt-0.5 block">80-Ton Rated</span>
              </div>
              <div className="p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Fluid Circuit</span>
                <span className="text-xs font-bold text-[#017AC3] mt-0.5 block">Controlled Valves</span>
              </div>
              <div className="p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Bed Rigidity</span>
                <span className="text-xs font-bold text-[#061522] mt-0.5 block">Cast Iron Frame</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hydraulic Story */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#017AC3]/10 border border-[#017AC3]/20 text-xs font-mono text-[#017AC3] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
              PILLAR 03 &bull; SPECIAL PURPOSE HYDRAULICS
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#061522] leading-tight">
              HYDRAULIC ENGINEERING
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Beyond individual parts, Qualitech Industries applies its manufacturing capabilities to engineer and develop specialized hydraulic machinery, heavy forming presses like our <strong className="text-[#061522]">80-Ton Komatsu press line</strong>, hydraulic cylinders, and power packs tailored to high-volume industrial production needs.
            </p>

            <div className="space-y-4 pt-1">
              {[
                {
                  label: 'CONTROL',
                  desc: 'Precision hydraulic valves and regulated manifold routing ensuring measured motion and stroke accuracy.',
                },
                {
                  label: 'FORCE',
                  desc: 'Robust 80-ton pressing capacity engineered for sustained high-tonnage sheet metal stamping and forming.',
                },
                {
                  label: 'PRECISION',
                  desc: 'Ultra-rigid cast frame construction preventing deflection during heavy die engagement.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm">
                  <span className="text-xs font-mono font-bold text-[#017AC3] uppercase tracking-wider mt-0.5 shrink-0">
                    {item.label} &rarr;
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 leading-normal">{item.desc}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <SkewButton href="#contact" variant="white" className="!py-3 !px-7 shadow-sm">
                Consult on Hydraulic Machines
              </SkewButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HydraulicSection;
