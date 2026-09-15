import React, { useEffect, useRef, useState } from 'react';

interface HeroCommercialVideoProps {
  className?: string;
}

export const HeroCommercialVideo: React.FC<HeroCommercialVideoProps> = ({ className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Ensure autoplay triggers reliably across mobile and desktop
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if browser requires interaction
      });
    }
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const { currentTime, duration } = videoRef.current;
      // Seamless loop crossfade at the boundary
      if (duration > 0 && duration - currentTime < 0.25) {
        setIsFading(true);
      } else if (isFading && currentTime < 0.3) {
        setIsFading(false);
      }
    }
  };

  return (
    <div className={`relative w-full max-w-[560px] mx-auto flex items-center justify-center select-none ${className}`}>
      {/* 01. Soft Radiant QTI Blue Ambient Aura */}
      <div className="absolute inset-0 -m-8 bg-gradient-to-tr from-[#017AC3]/16 via-[#017AC3]/8 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 02. Precision SVG Engineering Rings & Radial Geometry */}
      <svg
        className="absolute -inset-10 sm:-inset-14 w-[calc(100%+5rem)] sm:w-[calc(100%+7rem)] h-[calc(100%+5rem)] sm:h-[calc(100%+7rem)] pointer-events-none text-slate-300/35"
        viewBox="0 0 600 420"
        fill="none"
      >
        {/* Subtle Outer Calibrated Ellipse / Ring */}
        <ellipse
          cx="300"
          cy="210"
          rx="285"
          ry="195"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 8"
          className="animate-[spin_160s_linear_infinite] origin-center opacity-70"
        />

        {/* Inner Counter-Rotating Precision Ring in QTI Blue */}
        <ellipse
          cx="300"
          cy="210"
          rx="250"
          ry="170"
          stroke="#017AC3"
          strokeWidth="1.2"
          strokeDasharray="6 6"
          strokeOpacity="0.25"
          className="animate-[spin_120s_linear_infinite_reverse] origin-center"
        />

        {/* Blueprint Coordinate Crosshairs */}
        <line x1="300" y1="5" x2="300" y2="415" stroke="#017AC3" strokeWidth="0.75" strokeDasharray="3 3" strokeOpacity="0.2" />
        <line x1="5" y1="210" x2="595" y2="210" stroke="#017AC3" strokeWidth="0.75" strokeDasharray="3 3" strokeOpacity="0.2" />

        {/* Precision Cardinal Markers */}
        <circle cx="300" cy="15" r="3" fill="#D71920" />
        <circle cx="300" cy="405" r="2.5" fill="#017AC3" fillOpacity="0.7" />
        <circle cx="15" cy="210" r="2.5" fill="#017AC3" fillOpacity="0.7" />
        <circle cx="585" cy="210" r="2.5" fill="#017AC3" fillOpacity="0.7" />

        {/* Technical Degree Callouts */}
        <text x="308" y="24" fill="#017AC3" fontSize="9" fontFamily="monospace" fontWeight="bold" opacity="0.6">000°</text>
        <text x="560" y="202" fill="#017AC3" fontSize="9" fontFamily="monospace" fontWeight="bold" opacity="0.6">090°</text>
        <text x="308" y="402" fill="#017AC3" fontSize="9" fontFamily="monospace" fontWeight="bold" opacity="0.6">180°</text>
        <text x="24" y="202" fill="#017AC3" fontSize="9" fontFamily="monospace" fontWeight="bold" opacity="0.6">270°</text>
      </svg>

      {/* 03. Precision Technical Housing (Frosted Glass & Architectural Bezel) */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-gradient-to-br from-white/90 via-slate-50/80 to-white/70 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_50px_-12px_rgba(1,122,195,0.18)]">
        {/* Subtle L-Corner Precision Blueprint Brackets */}
        <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#017AC3] rounded-tl-sm pointer-events-none" />
        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#017AC3] rounded-tr-sm pointer-events-none" />
        <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#017AC3] rounded-bl-sm pointer-events-none" />
        <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#D71920] rounded-br-sm pointer-events-none" />

        {/* Video Display Container */}
        <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 shadow-inner ring-1 ring-[#017AC3]/20 group">
          <video
            ref={videoRef}
            src="/videos/qualitech-commercial.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            className={`w-full h-full object-cover transition-opacity duration-200 ${
              isFading ? 'opacity-95' : 'opacity-100'
            }`}
          />

          {/* Frosted Edge Reflection & Soft Vignette (Makes video feel native to the UI) */}
          <div className="absolute inset-0 pointer-events-none rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/25" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-transparent to-black/15" />

          {/* Restrained Technical Micro Indicators (Not a dashboard) */}
          {/* Top-Left: Production Live Marker */}
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md border border-slate-200/90 text-[10px] font-mono font-bold text-slate-800 shadow-sm pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse" />
            <span className="text-[#017AC3]">QTI</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-semibold tracking-wider">MANUFACTURING IN ACTION</span>
          </div>

          {/* Bottom-Right: Precision Engineering Spec Pill */}
          <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300 pointer-events-none shadow-sm">
            <span className="w-1 h-1 rounded-full bg-[#017AC3]" />
            <span className="text-[#017AC3] font-semibold">HOSUR PLANT</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">PRECISION CELL</span>
          </div>
        </div>

        {/* Subtle Bottom Engineering Scale / Measurement Ticks */}
        <div className="mt-2 pt-1.5 px-1 flex items-center justify-between border-t border-slate-200/70 text-[10px] font-mono text-slate-400">
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-[#017AC3]" />
            <span className="tracking-wider uppercase text-slate-500 font-semibold">AUTOMOTIVE & INDUSTRIAL GRADE</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-[9px] tracking-widest text-slate-400">
            <span>[LAT 12.74°N : LON 77.82°E]</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCommercialVideo;
