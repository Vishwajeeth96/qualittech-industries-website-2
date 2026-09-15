import React from 'react';

interface AbstractTechnicalVisualProps {
  type: 'laser' | 'tooling' | 'hydraulic' | 'welding' | 'powder' | 'phosphating' | 'hero-ecosystem' | 'quality-timeline';
  className?: string;
}

export const AbstractTechnicalVisual: React.FC<AbstractTechnicalVisualProps> = ({
  type,
  className = '',
}) => {
  // 1. HERO ABSTRACT ENGINEERING ATMOSPHERE (CLEAN, SPACIOUS, BREATHING)
  if (type === 'hero-ecosystem') {
    return (
      <div className={`relative w-full aspect-square max-w-[540px] flex items-center justify-center select-none ${className}`}>
        {/* Radiant Ambient QTI Blue Backlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#017AC3]/18 via-[#075985]/10 to-transparent rounded-full blur-3xl -z-10" />

        {/* Outer Circular Calibration Rings with Degree Ticks */}
        <svg className="w-full h-full text-slate-400/25 animate-[spin_100s_linear_infinite]" viewBox="0 0 500 500">
          <circle cx="250" cy="250" r="236" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="250" cy="250" r="208" fill="none" stroke="rgba(1, 122, 195, 0.25)" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="176" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 4" />
          
          {/* Degree Calibration Ticks */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="250"
              y1="16"
              x2="250"
              y2="34"
              stroke="#017AC3"
              strokeWidth="2"
              strokeOpacity="0.7"
              transform={`rotate(${deg} 250 250)`}
            />
          ))}

          {/* Precision Cardinal Markers */}
          {[0, 90, 180, 270].map((deg) => (
            <circle
              key={deg}
              cx="250"
              cy="25"
              r="2.5"
              fill={deg === 0 ? '#D71920' : '#017AC3'}
              transform={`rotate(${deg} 250 250)`}
            />
          ))}
        </svg>

        {/* Inner Counter-Rotating Precision Grid Geometry */}
        <svg className="absolute inset-12 w-[76%] h-[76%] text-[#017AC3]/30 animate-[spin_120s_linear_infinite_reverse]" viewBox="0 0 380 380">
          {/* Concentric Coordinate Polygons */}
          <circle cx="190" cy="190" r="140" fill="none" stroke="#017AC3" strokeWidth="1" strokeDasharray="6 6" strokeOpacity="0.4" />
          <polygon points="190,50 311,120 311,260 190,330 69,260 69,120" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.35" />
          <polygon points="190,80 285,135 285,245 190,300 95,245 95,135" fill="none" stroke="#017AC3" strokeWidth="1" strokeOpacity="0.2" />

          {/* Coordinate Crossbars */}
          <line x1="190" y1="20" x2="190" y2="360" stroke="#017AC3" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3" />
          <line x1="20" y1="190" x2="360" y2="190" stroke="#017AC3" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3" />

          {/* Center Precision Indicator */}
          <circle cx="190" cy="190" r="32" fill="none" stroke="#017AC3" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx="190" cy="190" r="8" fill="rgba(1, 122, 195, 0.2)" stroke="#017AC3" strokeWidth="1.5" />
          <circle cx="190" cy="190" r="3" fill="#D71920" />
        </svg>

        {/* Floating Subtle Architectural Geometry & Linework */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Subtle Technical Blueprint Callouts */}
          <div className="absolute top-10 left-12 px-2.5 py-1 rounded bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-sm text-[10px] font-mono text-slate-500 font-semibold tracking-wider">
            DATUM: X0 Y0 Z0
          </div>

          <div className="absolute bottom-12 right-12 px-2.5 py-1 rounded bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-sm text-[10px] font-mono text-[#017AC3] font-bold tracking-wider">
            RADIAL AXIS: 360°
          </div>

          <div className="absolute bottom-14 left-10 flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
            <span>EST. AUG 2003</span>
          </div>

          {/* Subtle Floating Spark / Pulse Particles */}
          <span className="absolute top-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-[#017AC3] animate-ping" />
          <span className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-[#D71920] animate-pulse" />
        </div>
      </div>
    );
  }

  // 2. LASER CUTTING VISUAL WITH AUTHENTIC SWING III 3015 MACHINE PHOTO
  if (type === 'laser') {
    return (
      <div className={`w-full aspect-[4/3] rounded-xl bg-slate-950 border border-slate-200/90 relative overflow-hidden shadow-lg group ${className}`}>
        {/* Real Production Machine Image */}
        <img
          src="/images/laser-cutting-hero.jpg"
          alt="SWING III 3015 Penta Laser Cutting Machine"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Blueprint Vignette & Frosted Ring */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl pointer-events-none" />

        {/* Machine Badging */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse" />
          <span className="font-bold text-white">SWING III 3015</span>
          <span className="text-slate-400">|</span>
          <span className="text-[#017AC3] font-semibold">PENTA LASER</span>
        </div>

        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-slate-300">
          <span className="bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[#017AC3] font-bold">CNC FIBER LASER</span>
          <span className="bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">3000×1500mm</span>
        </div>
      </div>
    );
  }

  // 3. TOOL MAKING & DIES WITH AUTHENTIC TOOLROOM MACHINE PHOTO
  if (type === 'tooling') {
    return (
      <div className={`w-full aspect-[4/3] rounded-xl bg-slate-950 border border-slate-200/90 relative overflow-hidden shadow-lg group ${className}`}>
        {/* Real Production Toolroom Machine Image */}
        <img
          src="/images/tooling-hero.jpg"
          alt="Toolroom Milling & Die Making Machine"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Blueprint Vignette & Frosted Ring */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl pointer-events-none" />

        {/* Machine Badging */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse" />
          <span className="font-bold text-white">TOOLROOM MILLING</span>
          <span className="text-slate-400">|</span>
          <span className="text-[#017AC3] font-semibold">DIE MAKING</span>
        </div>

        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-slate-300">
          <span className="bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[#017AC3] font-bold">PRESS DIES & FIXTURES</span>
          <span className="bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">&plusmn;0.01mm</span>
        </div>
      </div>
    );
  }

  // 4. HYDRAULIC MACHINES WITH AUTHENTIC 80-TON KOMATSU PRESS PHOTO
  if (type === 'hydraulic') {
    return (
      <div className={`w-full aspect-[4/3] rounded-xl bg-slate-950 border border-slate-200/90 relative overflow-hidden shadow-lg group ${className}`}>
        {/* Real Production 80-Ton Komatsu Press Image */}
        <img
          src="/images/hydraulic-hero.jpg"
          alt="80-Ton Komatsu Hydraulic & Power Press"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Blueprint Vignette & Frosted Ring */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl pointer-events-none" />

        {/* Machine Badging */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse" />
          <span className="font-bold text-white">80-TON KOMATSU</span>
          <span className="text-slate-400">|</span>
          <span className="text-[#017AC3] font-semibold">QTI/P-MC/04</span>
        </div>

        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-slate-300">
          <span className="bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[#017AC3] font-bold">PRESS SHOP</span>
          <span className="bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">80T CAPACITY</span>
        </div>
      </div>
    );
  }

  // 5. WELDING VISUAL WITH AUTHENTIC ROBOTIC WELDING CELL PHOTO
  if (type === 'welding') {
    return (
      <div className={`w-full aspect-[4/3] rounded-xl bg-slate-950 border border-slate-200/90 relative overflow-hidden shadow-lg group ${className}`}>
        {/* Real Production Robotic Welding Cell Image */}
        <img
          src="/images/welding-hero.jpg"
          alt="Robotic Welding & Megmeet Automation Cell"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Blueprint Vignette & Frosted Ring */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl pointer-events-none" />

        {/* Machine Badging */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse" />
          <span className="font-bold text-white">ROBOTIC WELDING</span>
          <span className="text-slate-400">|</span>
          <span className="text-[#017AC3] font-semibold">MEGMEET</span>
        </div>

        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-slate-300">
          <span className="bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[#017AC3] font-bold">STRUCTURAL ASSEMBLY</span>
          <span className="bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">FULL PENETRATION</span>
        </div>
      </div>
    );
  }

  // 6. POWDER COATING WITH AUTHENTIC AMADA AUTOMATIC CONVEYOR LINE PHOTO
  if (type === 'powder') {
    return (
      <div className={`w-full aspect-[4/3] rounded-xl bg-slate-950 border border-slate-200/90 relative overflow-hidden shadow-lg group ${className}`}>
        {/* Real Production AMADA Automated Powder Coating Line Image */}
        <img
          src="/images/powder-coating-hero.jpg"
          alt="AMADA Automated Powder Coating Conveyor Line"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Blueprint Vignette & Frosted Ring */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl pointer-events-none" />

        {/* Machine Badging */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse" />
          <span className="font-bold text-white">AMADA COATING</span>
          <span className="text-slate-400">|</span>
          <span className="text-[#017AC3] font-semibold">QTI/SH-MC/03</span>
        </div>

        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-slate-300">
          <span className="bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[#017AC3] font-bold">AUTOMATED LINE</span>
          <span className="bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">CONVEYORIZED</span>
        </div>
      </div>
    );
  }

  // 6B. PHOSPHATING WITH AUTHENTIC 6-STAGE IMMERSION LINE PHOTO
  if (type === 'phosphating') {
    return (
      <div className={`w-full aspect-[4/3] rounded-xl bg-slate-950 border border-slate-200/90 relative overflow-hidden shadow-lg group ${className}`}>
        {/* Real Production Phosphating Line Image */}
        <img
          src="/images/phosphating-hero.jpg"
          alt="Multi-Stage Automated Phosphating Line"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Blueprint Vignette & Frosted Ring */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl pointer-events-none" />

        {/* Machine Badging */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse" />
          <span className="font-bold text-white">PHOSPHATING LINE</span>
          <span className="text-slate-400">|</span>
          <span className="text-[#D71920] font-semibold">6-STAGE DIP</span>
        </div>

        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-slate-300">
          <span className="bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[#017AC3] font-bold">PRE-TREATMENT</span>
          <span className="bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">DI WATER RINSE</span>
        </div>
      </div>
    );
  }

  // 7. QUALITY TIMELINE & METROLOGY PROFILE
  if (type === 'quality-timeline') {
    return (
      <div className={`relative w-full aspect-video rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl p-6 overflow-hidden flex flex-col justify-between ${className}`}>
        <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between border-b border-slate-200/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D71920]" />
            <span className="text-xs font-mono font-bold text-[#061522] tracking-wider">
              DIMENSIONAL TOLERANCE &bull; METROLOGY PROFILE
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#017AC3] font-bold bg-[#017AC3]/10 px-2.5 py-0.5 rounded border border-[#017AC3]/25">
            IN-PROCESS VERIFICATION
          </span>
        </div>

        <div className="relative z-10 my-auto py-2">
          <svg className="w-full h-24" viewBox="0 0 400 100" fill="none">
            <line x1="0" y1="20" x2="400" y2="20" stroke="#017AC3" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.5" />
            <text x="5" y="16" fill="#017AC3" fontSize="9" fontFamily="monospace">UPPER LIMIT</text>
            
            <line x1="0" y1="80" x2="400" y2="80" stroke="#017AC3" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.5" />
            <text x="5" y="94" fill="#017AC3" fontSize="9" fontFamily="monospace">LOWER LIMIT</text>

            <line x1="0" y1="50" x2="400" y2="50" stroke="#061522" strokeWidth="1" strokeOpacity="0.2" />
            <text x="330" y="47" fill="#061522" fontSize="9" fontFamily="monospace" opacity="0.6">NOMINAL SPEC</text>

            <path
              d="M0,50 C40,47 70,52 110,48 C150,45 180,51 220,49 C260,48 300,52 340,49 L400,50"
              stroke="#017AC3"
              strokeWidth="2.5"
              fill="none"
            />
            {[40, 110, 180, 260, 340].map((x, i) => (
              <circle
                key={i}
                cx={x}
                cy={48 + (i % 2 === 0 ? -2 : 2)}
                r="3.5"
                fill="#D71920"
                stroke="#FFFFFF"
                strokeWidth="1.5"
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-3 pt-3 border-t border-slate-200/80 text-center font-mono">
          <div className="bg-slate-50 border border-slate-100 rounded-lg p-2">
            <div className="text-[10px] text-slate-500 uppercase">First-Off Check</div>
            <div className="text-xs sm:text-sm font-bold text-[#061522]">100% Dimensions</div>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-lg p-2">
            <div className="text-[10px] text-slate-500 uppercase">In-Line Check</div>
            <div className="text-xs sm:text-sm font-bold text-[#017AC3]">Calibrated Gauge</div>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-lg p-2">
            <div className="text-[10px] text-slate-500 uppercase">Pre-Dispatch</div>
            <div className="text-xs sm:text-sm font-bold text-[#061522]">Full Signoff</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default AbstractTechnicalVisual;
