import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Layers, Box, Cog, Frame, PanelTop, Wrench } from 'lucide-react';

// Draft list of part types. Replace with the confirmed list from Qualitech.
const PART_TYPES = [
  {
    icon: <Layers className="w-6 h-6 text-[#017AC3]" />,
    title: 'Stamped Parts',
    description: 'Blanked, pierced, formed and drawn parts from the press shop.',
    process: 'Press & Stamping',
  },
  {
    icon: <PanelTop className="w-6 h-6 text-[#017AC3]" />,
    title: 'Laser Cut & Punched Parts',
    description: 'Profiles, brackets, plates and perforated sheet parts.',
    process: 'Laser Cutting & Turret Punching',
  },
  {
    icon: <Frame className="w-6 h-6 text-[#017AC3]" />,
    title: 'Welded Assemblies',
    description: 'Frames, brackets and structural weldments.',
    process: 'Welding',
  },
  {
    icon: <Box className="w-6 h-6 text-[#017AC3]" />,
    title: 'Enclosures & Panels',
    description: 'Sheet metal housings, covers and panels, finished and ready to fit.',
    process: 'Bending, Welding, Powder Coating',
  },
  {
    icon: <Cog className="w-6 h-6 text-[#017AC3]" />,
    title: 'Machined Components',
    description: 'Turned, drilled and milled parts to drawing.',
    process: 'Machining',
  },
  {
    icon: <Wrench className="w-6 h-6 text-[#017AC3]" />,
    title: 'Dies, Jigs & Fixtures',
    description: 'In-house tooling used for our own production runs.',
    process: 'Tool Room',
  },
];

export const PartsSection: React.FC = () => {
  return (
    <section id="parts" className="scroll-mt-28 py-24 sm:py-32 bg-[#F7FAFC] relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="What We Make"
          title="TYPES OF PARTS"
          subtitle="The kinds of parts we manufacture for our customers."
          align="center"
          className="mb-14"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PART_TYPES.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-shadow p-6">
              <div className="w-12 h-12 rounded-xl bg-[#017AC3]/10 flex items-center justify-center mb-4">{p.icon}</div>
              <h3 className="text-lg font-extrabold text-[#061522]">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.description}</p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono font-bold text-[#017AC3] uppercase tracking-wider">
                {p.process}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartsSection;
