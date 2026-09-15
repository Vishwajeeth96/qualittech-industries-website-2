import React, { useEffect, useState, useRef } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ThreeDotVisual from '../ui/ThreeDotVisual';
import { Calendar, Cpu, Users, Layers } from 'lucide-react';

export const OurAchievementsSection: React.FC = () => {
  const [animatedYear, setAnimatedYear] = useState(1998);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let current = 1998;
          const target = 2003;
          const interval = setInterval(() => {
            current += 1;
            setAnimatedYear(current);
            if (current >= target) {
              clearInterval(interval);
            }
          }, 120);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const qualitativeMilestones = [
    {
      number: '02',
      title: 'PRECISION ENGINEERING',
      category: 'Precision Machined Components',
      description:
        'Dedicated machining, turning, and tight-tolerance component manufacturing engineered to customer drawing specifications.',
      icon: <Cpu className="w-5 h-5 text-[#017AC3]" />,
    },
    {
      number: '03',
      title: 'PRODUCT DEVELOPMENT',
      category: 'Customer Collaborative Focus',
      description:
        'Focused on developing new products with our customers, translating design concepts and prototypes into reliable production components.',
      icon: <Users className="w-5 h-5 text-[#017AC3]" />,
    },
    {
      number: '04',
      title: 'INTEGRATED CAPABILITIES',
      category: 'Complete Technical Continuum',
      description:
        'Laser Cutting \u2022 Tooling \u2022 Hydraulics \u2022 Welding \u2022 Finishing (Powder Coating & Phosphating Pre-Treatment).',
      icon: <Layers className="w-5 h-5 text-[#017AC3]" />,
    },
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="scroll-mt-28 py-24 sm:py-32 bg-[#F7FAFC] relative overflow-hidden"
    >
      {/* Background blueprint grid & subtle QTI blue lighting */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#017AC3]/7 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Technical coordinate accent lines */}
      <div className="absolute top-12 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#017AC3]/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-12 left-10 right-10 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Company Milestones"
          title="OUR ACHIEVEMENTS"
          subtitle="Built through two decades of engineering discipline, technical capabilities, and customer-driven product development."
          align="center"
          className="mb-16"
        />

        {/* Featured Foundation Milestone: ESTABLISHED 2003 */}
        <div
          className="relative rounded-3xl p-8 sm:p-12 mb-10 overflow-hidden group hover:border-[#017AC3]/50 transition-all duration-300"
          style={{
            background: 'rgba(255, 255, 255, 0.90)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(1, 122, 195, 0.15)',
            boxShadow:
              '0 20px 45px -12px rgba(1, 122, 195, 0.08), 0 0 1px 1px rgba(255, 255, 255, 0.90) inset',
          }}
        >
          {/* Subtle blue light illumination */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#017AC3]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Large Editorial Animated 2003 Number */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#D71920]" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#017AC3] uppercase">
                  MILESTONE 01 &bull; FOUNDATIONAL HERITAGE
                </span>
              </div>

              {/* Large Animated Year */}
              <div className="flex items-baseline gap-2">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#061522] font-mono leading-none">
                  {animatedYear}
                </span>
                <span className="text-xs font-mono font-bold text-[#017AC3] uppercase px-2.5 py-1 rounded bg-[#017AC3]/10 border border-[#017AC3]/20">
                  ESTABLISHED
                </span>
              </div>

              <div className="mt-3 text-sm font-mono font-semibold text-slate-500 uppercase tracking-wider">
                Aug 2003 &bull; Hosur, Tamil Nadu
              </div>
            </div>

            {/* Right: Authoritative Narrative quoting company brief */}
            <div className="lg:col-span-7 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-6 lg:pt-0 lg:pl-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#061522] leading-snug">
                Precision engineering grounded in customer partnerships.
              </h3>
              <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed font-normal bg-[#017AC3]/5 border-l-2 border-[#017AC3] p-4 rounded-r-xl">
                &ldquo;QUALITECH INDUSTRIES was started in Aug 2003 and established to develop manufacturing of precision machined and Sheet Metal Fabricated Components. We are focused on developing new products with our customers.&rdquo;
              </p>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#017AC3]" />
                  <span>Hosur Works Industrial Heritage</span>
                </div>
                <span className="text-[#017AC3] font-bold">2003 &rarr; Present</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Qualitative Achievement Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {qualitativeMilestones.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              style={{
                background: 'rgba(255, 255, 255, 0.90)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(1, 122, 195, 0.15)',
                boxShadow:
                  '0 15px 35px -10px rgba(1, 122, 195, 0.06), 0 0 1px 1px rgba(255, 255, 255, 0.90) inset',
              }}
            >
              <div>
                {/* Header with Number and Red Accent Dot */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#017AC3] px-2 py-0.5 rounded bg-[#017AC3]/10">
                      {item.number}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                  </div>
                  <ThreeDotVisual />
                </div>

                {/* Icon & Category */}
                <div className="w-10 h-10 rounded-xl bg-[#017AC3]/10 flex items-center justify-center mb-4 text-[#017AC3]">
                  {item.icon}
                </div>

                <div className="text-[11px] font-mono text-[#017AC3] font-bold uppercase tracking-wider">
                  {item.category}
                </div>

                <h4 className="text-xl font-extrabold text-[#061522] mt-1 group-hover:text-[#017AC3] transition-colors">
                  {item.title}
                </h4>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>ESTABLISHED STRENGTH</span>
                <span className="text-[#017AC3] font-bold group-hover:translate-x-1 transition-transform">
                  &bull; Active
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAchievementsSection;
