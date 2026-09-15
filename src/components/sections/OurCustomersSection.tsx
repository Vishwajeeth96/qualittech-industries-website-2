import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import SkewButton from '../ui/SkewButton';
import ThreeDotVisual from '../ui/ThreeDotVisual';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export const OurCustomersSection: React.FC = () => {
  const customers = [
    {
      id: 'ashok-leyland',
      name: 'ASHOK LEYLAND',
      category: 'AUTOMOTIVE / COMMERCIAL VEHICLES',
      logo: '/ashok-leyland-logo.svg',
      logoAlt: 'Ashok Leyland Official Logo',
      scopeTitle: 'Engineering / Component Development',
      description:
        'Customer relationship centered on precision machined and sheet metal fabricated components developed in alignment with commercial vehicle engineering specifications.',
      tag: 'Customer Relationship',
    },
    {
      id: 'napino',
      name: 'NAPINO AUTO & ELECTRONICS LTD.',
      category: 'AUTOMOTIVE & ELECTRONICS',
      logo: '/napino-logo.png',
      logoAlt: 'Napino Auto & Electronics Ltd. Official Logo',
      scopeTitle: 'Precision Components & Engineering Solutions',
      description:
        'Customer relationship focused on precision component manufacture and tooling solutions engineered for demanding automotive and electronic sub-assemblies.',
      tag: 'Customer Relationship',
    },
  ];

  return (
    <section id="customers" className="scroll-mt-28 py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Subtle background engineering grid & soft QTI blue ambient light */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[420px] bg-[#017AC3]/6 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Customer Partnerships"
          title="OUR CUSTOMERS"
          subtitle="Building engineering solutions around trusted customer relationships."
          align="center"
          className="mb-16"
        />

        {/* Two Large Premium Customer Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {customers.map((cust) => (
            <div
              key={cust.id}
              className="group relative rounded-3xl p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(1, 122, 195, 0.15)',
                boxShadow:
                  '0 20px 45px -12px rgba(1, 122, 195, 0.08), 0 0 1px 1px rgba(255, 255, 255, 0.90) inset',
              }}
            >
              {/* Subtle blue light hover sweep inside the glass */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#017AC3]/0 via-[#017AC3]/[0.03] to-[#017AC3]/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header: Category & Red accent dot */}
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D71920]" />
                    <span className="text-xs font-mono font-bold tracking-widest text-[#017AC3] uppercase">
                      {cust.category}
                    </span>
                  </div>
                  <ThreeDotVisual />
                </div>

                {/* Company Name */}
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#061522] group-hover:text-[#017AC3] transition-colors duration-300 leading-tight">
                  {cust.name}
                </h3>

                {/* Official Logo Container - Clean White Frosted Glass Presentation */}
                <div className="my-6 w-full rounded-2xl bg-white/95 border border-slate-200/80 p-6 sm:p-8 flex items-center justify-center min-h-[120px] shadow-sm group-hover:shadow-md group-hover:border-[#017AC3]/30 transition-all duration-300">
                  <img
                    src={cust.logo}
                    alt={cust.logoAlt}
                    className="max-h-12 sm:max-h-14 w-auto max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Scope & Description */}
                <div className="text-xs font-mono font-bold text-[#017AC3] uppercase tracking-wider mb-2">
                  {cust.scopeTitle}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {cust.description}
                </p>
              </div>

              {/* Card Footer: Relationship Indicator & Micro Arrow */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#017AC3]" />
                  <span className="font-semibold text-slate-700">{cust.tag}</span>
                </div>
                <div className="flex items-center gap-1 font-bold text-[#017AC3] group-hover:translate-x-1 transition-transform duration-300">
                  <span>Verified Alliance</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-extrabold text-[#061522]">
              Developing new products with our customers.
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
              Whether you need prototype blanks, dedicated stamping dies, or production machining, we engineer practical solutions tailored to your technical requirements.
            </p>
          </div>

          <SkewButton
            href="#contact"
            variant="white"
            className="!py-3 !px-7 shrink-0 shadow-sm"
            icon={<ArrowUpRight className="w-4 h-4 text-[#017AC3]" />}
          >
            Start an Enquiry
          </SkewButton>
        </div>
      </div>
    </section>
  );
};

export default OurCustomersSection;
