import React from 'react';
import { CheckCircle2, Calendar } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import SkewButton from '../ui/SkewButton';
import ThreeDotVisual from '../ui/ThreeDotVisual';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-28 py-24 sm:py-32 relative overflow-hidden bg-white">
      {/* Subtle blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Company Heritage &bull; Hosur"
          title="BUILT AROUND PRECISION SINCE 2003"
          subtitle="Founded in Hosur, Tamil Nadu, Qualitech Industries was established to engineer precision components and work closely with customers on new product development."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authoritative Chronological Origin */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <ThreeDotVisual />
              <span className="text-xs font-mono font-bold tracking-widest text-[#017AC3] uppercase">
                EST. AUGUST 2003 &bull; HOSUR / ELUVAPALLI
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#061522] leading-tight">
              Two decades of engineering practical solutions, custom tooling, and precision components.
            </h3>

            {/* Authoritative Paragraph 1 */}
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg font-medium">
              QUALITECH INDUSTRIES was started in August 2003 with a focus on developing the manufacture of precision machined and sheet metal fabricated components.
            </p>

            {/* Authoritative Paragraph 2 */}
            <p className="text-slate-600 leading-relaxed text-base">
              Today, the company’s capabilities extend across laser cutting, tooling, hydraulic machines, and surface finishing — supporting customers in developing new products and engineering requirements from concept through completed parts.
            </p>

            <div className="pt-2">
              <SkewButton href="#capabilities" variant="white" className="!py-3 !px-7">
                View Core Capabilities
              </SkewButton>
            </div>
          </div>

          {/* Right Column: Frosted Glass Information Card featuring EST. 2003 */}
          <div className="lg:col-span-6">
            <GlassCard variant="interactive" hasCrosshairs className="border-slate-300/80 bg-white/90 shadow-2xl">
              {/* Top EST. 2003 Banner */}
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#017AC3]/10 text-[#017AC3] flex items-center justify-center font-bold text-lg">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-extrabold text-[#061522]">Qualitech Industries</h4>
                    <p className="text-xs font-mono text-slate-500">Hosur Works &bull; Tamil Nadu</p>
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-[#061522] text-white font-mono text-xs font-bold border border-white/10">
                  EST. 2003
                </div>
              </div>

              {/* Core Focus Pillars Checklist */}
              <div className="space-y-3.5">
                {[
                  {
                    title: 'Precision Machined Components',
                    desc: 'Machined component development tailored to engineering drawings and fitment criteria.',
                  },
                  {
                    title: 'Sheet Metal Fabrication',
                    desc: 'Precision forming, bending, and structural assembly for diverse product lines.',
                  },
                  {
                    title: 'In-House Tooling & Die Making',
                    desc: 'Jigs, fixtures, and press tooling designed for reliable, repeatable manufacturing.',
                  },
                  {
                    title: 'Laser Cutting & Hydraulic Engineering',
                    desc: 'Clean profile cutting paired with specialized hydraulic machine development.',
                  },
                  {
                    title: 'Powder Coating & Phosphating',
                    desc: 'Complete surface treatment and pre-treatment finishing under one roof.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#017AC3] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-[#061522]">{item.title}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5 leading-normal">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>NEW PRODUCT DEVELOPMENT FOCUS</span>
                <span className="text-[#017AC3] font-bold">CUSTOMER COLLABORATION</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
