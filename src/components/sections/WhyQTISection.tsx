import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import ThreeDotVisual from '../ui/ThreeDotVisual';
import { Layers, RefreshCw, Cpu, Compass } from 'lucide-react';

export const WhyQTISection: React.FC = () => {
  const pillars = [
    {
      icon: <Layers className="w-6 h-6 text-[#017AC3]" />,
      title: 'Integrated Capabilities',
      subtitle: 'Complete Manufacturing Ecosystem',
      description:
        'Laser cutting, tool making, hydraulic engineering, structural welding, powder coating, and phosphating coordinated under one engineering-focused facility.',
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#017AC3]" />,
      title: 'Customer Product Development',
      subtitle: 'Prototype to Production Support',
      description:
        'We work closely with customers to develop new products and tailored manufacturing pathways from concept drawing to finished components.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#017AC3]" />,
      title: 'In-House Tooling & Dies',
      subtitle: 'Repeatable Geometric Accuracy',
      description:
        'In-house press tools, forming dies, machining fixtures, and checking gauges designed to guarantee component repeatability across production runs.',
    },
    {
      icon: <Compass className="w-6 h-6 text-[#017AC3]" />,
      title: 'Heritage & Stability Since 2003',
      subtitle: 'Established Industrial Presence',
      description:
        'Over two decades of continuous manufacturing operation in Hosur, Tamil Nadu, developing dependable components for leading industrial brands.',
    },
  ];

  return (
    <section id="why-qti" className="scroll-mt-28 py-24 sm:py-32 bg-[#F7FAFC] relative overflow-hidden">
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#017AC3]/6 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Engineering Advantage"
          title="WHY QUALITECH INDUSTRIES"
          subtitle="A disciplined manufacturing partner built around customer product development, multi-pillar capabilities, and practical engineering rigor."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((item, idx) => (
            <GlassCard
              key={idx}
              variant="interactive"
              hasCrosshairs
              className="bg-white/90 p-7 flex flex-col justify-between h-full border-slate-200/90 hover:border-[#017AC3] shadow-md hover:shadow-2xl hover:shadow-[#017AC3]/12"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#017AC3]/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <ThreeDotVisual />
                </div>

                <div className="text-[11px] font-mono text-[#017AC3] font-bold uppercase tracking-wider">
                  {item.subtitle}
                </div>

                <h3 className="text-xl font-extrabold text-[#061522] mt-1.5 leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>0{idx + 1} &bull; PILLAR</span>
                <span className="text-[#017AC3] font-bold">&rarr;</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyQTISection;
