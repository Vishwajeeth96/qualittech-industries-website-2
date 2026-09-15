import React from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import SkewButton from '../ui/SkewButton';
import ThreeDotVisual from '../ui/ThreeDotVisual';

export const FeaturedCTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden text-[#061522] border border-slate-200/90 shadow-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow: '0 25px 60px -15px rgba(1, 122, 195, 0.15), 0 0 1px 1px rgba(255, 255, 255, 0.90) inset',
          }}
        >
          {/* Internal Blueprint Grid & Soft Blue Light */}
          <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#017AC3]/12 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2.5 mb-6">
              <ThreeDotVisual />
              <span className="text-xs font-mono font-bold tracking-widest text-[#017AC3] uppercase">
                Ready for Production Review
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-[#061522]">
              LET&apos;S BUILD SOMETHING PRECISE.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Send us your technical drawings or component specifications. Our engineering team conducts a detailed technical review to formulate the optimal machining, tooling, and fabrication pathway.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              <SkewButton
                href="#contact"
                variant="white"
                className="!py-3.5 !px-8 shadow-md"
                icon={<ArrowUpRight className="w-4 h-4 text-[#017AC3]" />}
              >
                Start an Enquiry
              </SkewButton>

              <a
                href="#location"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300/80 hover:border-[#017AC3] text-sm font-semibold text-[#061522] bg-white/80 hover:bg-[#017AC3]/5 transition-all shadow-sm group"
              >
                <FileText className="w-4 h-4 text-[#017AC3] group-hover:scale-110 transition-transform" />
                <span>Hosur Facility Details</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCTA;
