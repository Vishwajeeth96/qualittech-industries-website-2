import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import ThreeDotVisual from '../ui/ThreeDotVisual';
import { FileSearch, Compass, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Drawing Review & RFQ',
      category: 'Requirements Analysis',
      description: 'Careful examination of customer CAD models, GD&T dimensional tolerances, material grades, and production volumes.',
      icon: <FileSearch className="w-5 h-5 text-[#017AC3]" />,
    },
    {
      step: '02',
      title: 'Tooling & Fixturing',
      category: 'Process Engineering',
      description: 'Designing dedicated press dies, clamping fixtures, and CNC workholding to guarantee manufacturing stability and repeatability.',
      icon: <Compass className="w-5 h-5 text-[#017AC3]" />,
    },
    {
      step: '03',
      title: 'Precision Fabrication',
      category: 'Production Execution',
      description: 'Execution via clean laser cutting, sheet metal forming, precision machining, structural welding, or hydraulic assembly.',
      icon: <Cpu className="w-5 h-5 text-[#017AC3]" />,
    },
    {
      step: '04',
      title: 'Surface Finishing',
      category: 'Conversion & Coating',
      description: 'Chemical phosphating pre-treatment for corrosion protection followed by electrostatic powder coating curing.',
      icon: <Sparkles className="w-5 h-5 text-[#017AC3]" />,
    },
    {
      step: '05',
      title: 'Inspection & Dispatch',
      category: 'Quality Sign-Off',
      description: 'Dimensional metrology verification, visual check, careful packaging, and delivery to customer production lines.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#017AC3]" />,
    },
  ];

  return (
    <section id="process" className="scroll-mt-28 py-24 sm:py-32 bg-[#F7FAFC] relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-[#017AC3]/6 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Disciplined Workflow"
          title="ENGINEERING PROCESS"
          subtitle="A structured, verified manufacturing process that takes components from technical concept drawings to finished, inspected assemblies."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {steps.map((item, idx) => (
            <GlassCard
              key={idx}
              variant="interactive"
              hasCrosshairs
              className="bg-white/90 p-6 flex flex-col justify-between h-full border-slate-200/90 hover:border-[#017AC3] shadow-md hover:shadow-xl hover:shadow-[#017AC3]/10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-white bg-[#017AC3] px-2.5 py-1 rounded-md">
                    STAGE {item.step}
                  </span>
                  <ThreeDotVisual />
                </div>

                <div className="w-10 h-10 rounded-xl bg-[#017AC3]/10 flex items-center justify-center mb-3 text-[#017AC3]">
                  {item.icon}
                </div>

                <div className="text-[10px] font-mono text-[#017AC3] font-bold uppercase tracking-wider">
                  {item.category}
                </div>

                <h3 className="text-base font-extrabold text-[#061522] mt-1">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>PHASE {item.step}</span>
                <span className="text-[#017AC3] font-bold">&rarr;</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
