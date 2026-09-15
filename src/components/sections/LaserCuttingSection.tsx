import React from 'react';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import SkewButton from '../ui/SkewButton';

export const LaserCuttingSection: React.FC = () => {
  return (
    <section id="laser-cutting" className="scroll-mt-28 py-24 sm:py-32 bg-white text-[#061522] relative overflow-hidden">
      {/* Blueprint grid on white */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#017AC3]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-12 w-96 h-96 bg-[#017AC3]/8 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Technical Crossbars */}
      <div className="absolute top-12 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#017AC3]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Laser Cutting Machine Showcase */}
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
                  src="/images/laser-cutting-hero.jpg"
                  alt="Qualitech Industries SWING III 3015 Penta Laser Sheet Metal Cutting Machine"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Frosted Glass Edge & Subtle Vignette */}
                <div className="absolute inset-0 pointer-events-none rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/20" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/55 via-transparent to-black/20" />

                {/* Top-Left: Machine ID Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/15 text-white text-xs font-mono shadow-md pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse" />
                  <span className="font-bold tracking-wider text-white">SWING III 3015</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-[#017AC3] font-semibold">PENTA LASER</span>
                </div>

                {/* Top-Right: Status Indicator */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-800 text-[11px] font-mono font-bold shadow-sm pointer-events-none">
                  <Zap className="w-3.5 h-3.5 text-[#017AC3]" />
                  <span>ACTIVE CNC CELL</span>
                </div>

                {/* Bottom Overlay: Machine Description & Plant Tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono text-xs pointer-events-none">
                  <div className="flex items-center gap-2 bg-slate-950/75 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                    <span className="text-[#017AC3] font-bold">CNC FIBER LASER</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-300 text-[11px]">HOSUR FACILITY</span>
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
                  <span className="font-bold text-slate-700 tracking-wider">FACILITY SPEC:</span>
                  <span className="text-slate-600">SWING III 3015 • SHEET METAL PROFILING</span>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-[9px] text-slate-400 tracking-wider">
                  <span>CLEAN DROSS-FREE EDGES</span>
                </div>
              </div>
            </div>

            {/* Performance Indicators */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-center font-mono">
              <div className="p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Edge Quality</span>
                <span className="text-xs font-bold text-[#061522] mt-0.5 block">Minimal Dross</span>
              </div>
              <div className="p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Contour Accuracy</span>
                <span className="text-xs font-bold text-[#017AC3] mt-0.5 block">True Geometry</span>
              </div>
              <div className="p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Tooling Wear</span>
                <span className="text-xs font-bold text-[#061522] mt-0.5 block">Contact-Free</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Technical Focus */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#017AC3]/10 border border-[#017AC3]/20 text-xs font-mono text-[#017AC3] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
              PILLAR 01 &bull; SHEET METAL CUTTING
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#061522] leading-tight">
              PRECISION STARTS AT THE CUT.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Every precision fabrication or machined assembly begins with clean raw component profiling. Qualitech Industries operates the high-capacity <strong className="text-[#061522]">SWING III 3015 Penta Laser</strong> cutting center in Hosur to deliver razor-clean square edges, intricate internal cutouts, and rapid prototype turnarounds without requiring dedicated hard blanking dies.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Accurate cutting paths translated directly from customer CAD drawings.',
                'Distortion-controlled cutting optimized for downstream bending and welding.',
                'Rapid cycle preparation supporting new product development blanks.',
                'High-speed processing for mild steel, stainless steel, and aluminum alloys.',
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#017AC3] shrink-0 mt-1" />
                  <span className="text-sm text-slate-700">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <SkewButton href="#contact" variant="white" className="!py-3 !px-7 shadow-sm">
                Enquire on Laser Profiling
              </SkewButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaserCuttingSection;
