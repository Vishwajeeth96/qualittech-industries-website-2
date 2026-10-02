import { ArrowUpRight, Cog, Trophy, Users } from 'lucide-react';
import RotatingText from '../animations/RotatingText';
import SkewButton from '../ui/SkewButton';
import HeroCommercialVideo from '../ui/HeroCommercialVideo';
import HeroMachineryShowcase from './HeroMachineryShowcase';

interface HeroProps {
  onNavigate?: (route: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[92vh] pt-32 sm:pt-36 pb-20 sm:pb-24 overflow-hidden flex items-center bg-[#F7FAFC]">
      {/* Background blueprint grid and radiant gradient lighting */}
      <div className="absolute inset-0 blueprint-grid opacity-75 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[520px] bg-gradient-to-br from-[#017AC3]/12 via-[#075985]/6 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Decorative Technical Crossbars */}
      <div className="absolute top-24 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#017AC3]/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-12 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Part A: Headline, Rotating Text, Supporting Copy, and CTAs */}
          {/* Mobile: Order 1 | Desktop: Column 1-7, Row 1 */}
          <div className="order-1 lg:col-span-7 flex flex-col items-start text-left">
            {/* Engineering Badge with Micro Red Accent & Est. 2003 */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs font-mono font-bold tracking-wider text-slate-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse" />
              <span className="text-[#017AC3]">QUALITECH INDUSTRIES</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600">EST. AUGUST 2003</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 uppercase">Hosur &bull; TN</span>
            </div>

            {/* Display Headline with EXACT RotatingText */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#061522] leading-[1.12]">
              PRECISION ENGINEERED. <br />
              BUILT TO PERFORM.
            </h1>

            {/* Rotating Core Capabilities Badge */}
            <div className="mt-4 flex items-center flex-wrap gap-2 text-lg sm:text-xl font-bold text-slate-700">
              <span>Specialized in</span>
              <RotatingText
                texts={['Laser Cutting', 'Tool Making', 'Hydraulics', 'Welding']}
                mainClassName="px-2.5 sm:px-3 md:px-4 bg-[#017AC3] text-white overflow-hidden py-0.5 sm:py-1 md:py-1.5 justify-center rounded-lg inline-flex shadow-md shadow-[#017AC3]/25 align-middle"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                splitBy="characters"
                auto
                loop
              />
            </div>

            {/* Supporting Copy from Authoritative Brief */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Precision machined and sheet metal fabricated components, tooling, hydraulic machines, and surface finishing — engineered around customer product development requirements.
            </p>

            {/* CTAs using EXACT Skewed Button Animation with QTI Blue hover */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              <SkewButton
                href="#contact"
                variant="white"
                className="!py-3.5 !px-8 shadow-md"
                icon={<ArrowUpRight className="w-4 h-4 text-[#017AC3]" />}
              >
                Start an Enquiry
              </SkewButton>

              <SkewButton
                href="#capabilities"
                variant="secondary"
                className="!py-3.5 !px-8 shadow-sm"
                icon={<Cog className="w-4 h-4 text-[#017AC3] group-hover:text-white transition-colors" />}
              >
                Core Capabilities
              </SkewButton>
            </div>
          </div>

          {/* Hero Commercial Video Integration */}
          {/* Mobile: Order 2 (Directly follows CTA) | Desktop: Column 8-12, Spans Rows 1 & 2 */}
          <div className="order-2 lg:col-span-5 lg:row-span-2 flex items-center justify-center relative w-full lg:pl-2">
            <HeroCommercialVideo />
          </div>

          {/* Part B: Quick Jump Navigation Pills & Operational Ribbon */}
          {/* Mobile: Order 3 (Follows Video) | Desktop: Column 1-7, Row 2 */}
          <div className="order-3 lg:col-span-7 flex flex-col items-start text-left w-full lg:-mt-2">
            {/* Quick Navigation Pills for Our Customers & Our Achievements */}
            <div className="mt-2 flex flex-wrap items-center gap-2.5">
              <span className="text-slate-400 font-mono uppercase tracking-wider text-[11px] font-semibold">Quick Jump:</span>
              <a
                href="#customers"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 hover:bg-white border border-slate-200/90 hover:border-[#017AC3]/40 text-xs font-semibold text-slate-700 hover:text-[#017AC3] shadow-xs hover:shadow transition-all duration-200 group"
              >
                <Users className="w-3.5 h-3.5 text-[#017AC3]" />
                <span>Our Customers</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#017AC3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
              <a
                href="#achievements"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 hover:bg-white border border-slate-200/90 hover:border-[#017AC3]/40 text-xs font-semibold text-slate-700 hover:text-[#017AC3] shadow-xs hover:shadow transition-all duration-200 group"
              >
                <Trophy className="w-3.5 h-3.5 text-[#017AC3]" />
                <span>Our Achievements</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#017AC3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Operational Ribbon linking directly to relevant sections */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 w-full grid grid-cols-3 gap-3 sm:gap-6 font-mono">
              <a
                href="#achievements"
                className="group block p-2 -m-2 rounded-xl hover:bg-white/80 transition-all duration-200"
                title="View Our Achievements"
              >
                <div className="flex items-center gap-1 text-xl sm:text-2xl font-extrabold text-[#061522] group-hover:text-[#017AC3] transition-colors">
                  <span>2003</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#017AC3]" />
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-0.5 group-hover:text-slate-800">
                  Our Achievements &bull; 2003
                </div>
              </a>

              <a
                href="#capabilities"
                className="group block p-2 -m-2 rounded-xl hover:bg-white/80 transition-all duration-200"
                title="View Core Capabilities"
              >
                <div className="flex items-center gap-1 text-xl sm:text-2xl font-extrabold text-[#017AC3]">
                  <span>7 Pillars</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#017AC3]" />
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-0.5 group-hover:text-slate-800">
                  Integrated Capabilities
                </div>
              </a>

              <a
                href="#customers"
                className="group block p-2 -m-2 rounded-xl hover:bg-white/80 transition-all duration-200"
                title="View Our Customers"
              >
                <div className="flex items-center gap-1 text-xl sm:text-2xl font-extrabold text-[#061522] group-hover:text-[#017AC3] transition-colors">
                  <span>Customers</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#017AC3]" />
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-0.5 group-hover:text-slate-800">
                  Client Partnerships
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Hero Machinery Showcase: Flagship Machine with "View More" 4-machine reveal */}
        <HeroMachineryShowcase onNavigate={onNavigate} />
      </div>
    </section>
  );
};

export default Hero;
