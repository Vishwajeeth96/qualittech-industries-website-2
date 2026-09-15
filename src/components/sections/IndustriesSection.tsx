import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import ThreeDotVisual from '../ui/ThreeDotVisual';
import { Truck, Cpu, Wrench, Shield } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const industries = [
    {
      icon: <Truck className="w-6 h-6 text-[#017AC3]" />,
      title: 'Commercial Vehicles & Automotive',
      tagline: 'Chassis, Mounts & Engine Brackets',
      description:
        'Sheet metal fabricated brackets, precision turned shafts, and structural weldments engineered for severe duty cycles and dynamic vibration resistance.',
      highlights: ['Chassis Brackets', 'Suspension Mounts', 'Commercial Cab Structures'],
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#017AC3]" />,
      title: 'Automotive Electronics & Sub-Systems',
      tagline: 'Sensor Housings & Precision Parts',
      description:
        'Close-tolerance components, precision stamped blanks, and protective enclosure frames supporting integrated electronics and vehicle wiring harness assemblies.',
      highlights: ['Bracket Modules', 'Enclosure Housings', 'Custom Tooling Fixtures'],
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#017AC3]" />,
      title: 'Industrial Machinery & Hydraulics',
      tagline: 'Heavy Press Frames & Power Packs',
      description:
        'Design, machining, and assembly of specialized hydraulic machinery, pressure cylinders, manifold blocks, and rigid machine beds.',
      highlights: ['Hydraulic Cylinders', 'Press Frames', 'Manifold Mountings'],
    },
    {
      icon: <Shield className="w-6 h-6 text-[#017AC3]" />,
      title: 'General Industrial Fabrication',
      tagline: 'Finished Assemblies & Protective Coatings',
      description:
        'Laser-profiled sheet metal enclosures, welded frames, and structural assemblies finished with phosphating and durable electrostatic powder coating.',
      highlights: ['Machine Enclosures', 'Powder Coated Panels', 'Phosphate Pre-Treated Parts'],
    },
  ];

  return (
    <section id="industries" className="scroll-mt-28 py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#017AC3]/6 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Sector Applications"
          title="INDUSTRIES SERVED"
          subtitle="From commercial vehicle components to specialized hydraulic machinery, Qualitech Industries engineers solutions tailored to industrial sectors."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {industries.map((ind, idx) => (
            <GlassCard
              key={idx}
              variant="interactive"
              hasCrosshairs
              className="bg-white/90 p-7 flex flex-col justify-between h-full border-slate-200/90 hover:border-[#017AC3] shadow-md hover:shadow-2xl hover:shadow-[#017AC3]/12"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#017AC3]/10 flex items-center justify-center">
                    {ind.icon}
                  </div>
                  <ThreeDotVisual />
                </div>

                <div className="text-[11px] font-mono text-[#017AC3] font-bold uppercase tracking-wider">
                  {ind.tagline}
                </div>

                <h3 className="text-xl font-extrabold text-[#061522] mt-1.5 leading-snug">
                  {ind.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ind.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {ind.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-50 border border-slate-100 text-[10px] font-mono text-slate-600 font-semibold"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>SECTOR 0{idx + 1}</span>
                <span className="text-[#017AC3] font-bold">&bull; Verified</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
