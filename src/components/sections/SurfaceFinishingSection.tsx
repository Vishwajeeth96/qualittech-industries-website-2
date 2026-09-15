import React from 'react';
import { CheckCircle2, ShieldCheck, Sparkles, FlaskConical } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import SkewButton from '../ui/SkewButton';

export const SurfaceFinishingSection: React.FC = () => {
  const surfaceLayers = [
    { name: 'RAW SURFACE', desc: 'Fabricated or machined metal substrate' },
    { name: 'TREATMENT', desc: 'Chemical conversion or electrostatic deposition' },
    { name: 'FINISHED SURFACE', desc: 'Durable, protected, and uniform exterior' },
  ];

  return (
    <section id="finishing" className="scroll-mt-28 py-24 sm:py-32 bg-[#F7FAFC] relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Pillars 05 &amp; 06 &bull; Surface Treatment"
          title="THE FINISH MATTERS."
          subtitle="Surface finishing is the critical bridge between raw metal assembly and field durability. Qualitech Industries integrates powder coating and phosphating to protect components against oxidation and wear."
          align="center"
          className="mb-16"
        />

        {/* 3-Layer Progression Strip */}
        <div className="max-w-3xl mx-auto mb-16 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center font-mono">
          {surfaceLayers.map((layer, i) => (
            <React.Fragment key={i}>
              <div className="flex-1">
                <div className="text-xs font-bold text-[#061522]">{layer.name}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{layer.desc}</div>
              </div>
              {i < surfaceLayers.length - 1 && (
                <div className="text-[#017AC3] font-bold text-sm hidden sm:block">&rarr;</div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Dual Large Glass Panels: Powder Coating & Phosphating */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Panel 1: Powder Coating with id="powder-coating" */}
          <div id="powder-coating" className="scroll-mt-28 flex flex-col">
            <GlassCard variant="interactive" hasCrosshairs className="bg-white/95 p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#017AC3] uppercase">
                      Protective Exterior
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">PILLAR 05</span>
                </div>

                {/* Authentic AMADA Automatic Powder Coating Line Machine Showcase */}
                <div className="relative w-full rounded-xl sm:rounded-2xl p-1.5 sm:p-2 bg-gradient-to-br from-white/95 via-slate-50/90 to-white/80 backdrop-blur-xl border border-slate-200/90 shadow-md mb-6 group">
                  {/* L-Corner Precision Blueprint Brackets */}
                  <div className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-[#017AC3] rounded-tl-sm pointer-events-none" />
                  <div className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-[#017AC3] rounded-tr-sm pointer-events-none" />
                  <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-[#017AC3] rounded-bl-sm pointer-events-none" />
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D71920] rounded-br-sm pointer-events-none" />

                  {/* Image Frame */}
                  <div className="relative aspect-[16/10] w-full rounded-lg sm:rounded-xl overflow-hidden bg-slate-950 shadow-inner ring-1 ring-[#017AC3]/20">
                    <img
                      src="/images/powder-coating-hero.jpg"
                      alt="Qualitech Industries AMADA Automatic Powder Coating Conveyor Line"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />

                    {/* Frosted Vignette & Highlights */}
                    <div className="absolute inset-0 pointer-events-none rounded-lg sm:rounded-xl ring-1 ring-inset ring-white/20" />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/55 via-transparent to-black/20" />

                    {/* Top-Left: Machine ID Badge */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono shadow-md pointer-events-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse" />
                      <span className="font-bold text-white">AMADA COATING LINE</span>
                      <span className="text-slate-500">|</span>
                      <span className="text-[#017AC3] font-semibold">QTI/SH-MC/03</span>
                    </div>

                    {/* Top-Right: Automation Badge */}
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-800 text-[10px] font-mono font-bold shadow-sm pointer-events-none">
                      <Sparkles className="w-3 h-3 text-[#017AC3]" />
                      <span>CONVEYORIZED</span>
                    </div>

                    {/* Bottom Overlay: Description */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white font-mono text-[11px] pointer-events-none">
                      <div className="flex items-center gap-1.5 bg-slate-950/75 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/10">
                        <span className="text-[#017AC3] font-bold">AUTOMATIC APPLICATION</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-300">HOSUR LINE</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1 bg-slate-950/75 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[10px] text-slate-300">
                        <ShieldCheck className="w-3 h-3 text-[#017AC3]" />
                        <span>ISO 9001</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Technical Line */}
                  <div className="mt-2 pt-1 px-1 flex items-center justify-between border-t border-slate-200/70 text-[10px] font-mono text-slate-500">
                    <span className="font-semibold text-slate-600">CONTINUOUS OVERHEAD RAIL • AUTOMATED BOOTH</span>
                    <span className="text-slate-400 text-[9px]">UNIFORM POLYMER COATING</span>
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-[#061522]">
                  POWDER COATING
                </h3>

                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  Continuous automated conveyor line with integrated electrostatic spray booths and precision curing ovens. Delivers durable resistance against mechanical abrasion, salt spray, moisture, and extreme industrial exposure.
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  {[
                    'Automated overhead conveyor ensuring uniform 360° electrostatic wrap',
                    'High impact, chip, and UV resistance for automotive & structural assemblies',
                    'Zero VOC emissions with closed-loop powder reclamation technology',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#017AC3] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <SkewButton href="#contact" variant="white" className="!py-2.5 !px-6 w-full justify-center shadow-sm">
                  Enquire on Powder Coating
                </SkewButton>
              </div>
            </GlassCard>
          </div>

          {/* Panel 2: Phosphating with id="phosphating" */}
          <div id="phosphating" className="scroll-mt-28 flex flex-col">
            <GlassCard variant="interactive" hasCrosshairs className="bg-white/95 p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#D71920] uppercase">
                      Pre-Treatment Chemistry
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">PILLAR 06</span>
                </div>

                {/* Authentic Automated Multi-Stage Phosphating Line Showcase */}
                <div className="relative w-full rounded-xl sm:rounded-2xl p-1.5 sm:p-2 bg-gradient-to-br from-white/95 via-slate-50/90 to-white/80 backdrop-blur-xl border border-slate-200/90 shadow-md mb-6 group">
                  {/* L-Corner Precision Blueprint Brackets */}
                  <div className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D71920] rounded-tl-sm pointer-events-none" />
                  <div className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-[#017AC3] rounded-tr-sm pointer-events-none" />
                  <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-[#017AC3] rounded-bl-sm pointer-events-none" />
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D71920] rounded-br-sm pointer-events-none" />

                  {/* Image Frame */}
                  <div className="relative aspect-[16/10] w-full rounded-lg sm:rounded-xl overflow-hidden bg-slate-950 shadow-inner ring-1 ring-[#017AC3]/20">
                    <img
                      src="/images/phosphating-hero.jpg"
                      alt="Qualitech Industries Multi-Stage Automated Phosphating Pre-Treatment Line"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />

                    {/* Frosted Vignette & Highlights */}
                    <div className="absolute inset-0 pointer-events-none rounded-lg sm:rounded-xl ring-1 ring-inset ring-white/20" />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/55 via-transparent to-black/20" />

                    {/* Top-Left: Machine ID Badge */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono shadow-md pointer-events-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse" />
                      <span className="font-bold text-white">PHOSPHATING LINE</span>
                      <span className="text-slate-500">|</span>
                      <span className="text-[#D71920] font-semibold">6-STAGE DIP</span>
                    </div>

                    {/* Top-Right: Chemistry Badge */}
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-800 text-[10px] font-mono font-bold shadow-sm pointer-events-none">
                      <FlaskConical className="w-3 h-3 text-[#D71920]" />
                      <span>PRE-TREATMENT</span>
                    </div>

                    {/* Bottom Overlay: Description */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white font-mono text-[11px] pointer-events-none">
                      <div className="flex items-center gap-1.5 bg-slate-950/75 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/10">
                        <span className="text-[#017AC3] font-bold">DEGREASING &bull; PHOSPHATING &bull; DI RINSE</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-300">HOSUR PLANT</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1 bg-slate-950/75 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[10px] text-slate-300">
                        <ShieldCheck className="w-3 h-3 text-[#017AC3]" />
                        <span>ISO 9001</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Technical Line */}
                  <div className="mt-2 pt-1 px-1 flex items-center justify-between border-t border-slate-200/70 text-[10px] font-mono text-slate-500">
                    <span className="font-semibold text-slate-600">DEGREASE &rarr; RINSE &rarr; PHOSPHATE &rarr; RINSE &rarr; DI RINSE &rarr; DRY</span>
                    <span className="text-slate-400 text-[9px]">CORROSION PASSIVATION</span>
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-[#061522]">
                  PHOSPHATING
                </h3>

                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  Automated 6-stage chemical conversion line that transforms steel surfaces into a crystalline zinc/iron phosphate matrix. Essential pre-treatment ensuring maximum powder adhesion, salt-spray durability, and base corrosion resistance.
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  {[
                    'Automated multi-tank dipping sequence with controlled immersion cycle times',
                    'Micro-crystalline phosphate conversion matrix for superior coating adhesion',
                    'De-ionized water rinse and hot air drying preventing flash rust before powder coating',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#017AC3] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <SkewButton href="#contact" variant="white" className="!py-2.5 !px-6 w-full justify-center shadow-sm">
                  Enquire on Phosphating
                </SkewButton>
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SurfaceFinishingSection;
