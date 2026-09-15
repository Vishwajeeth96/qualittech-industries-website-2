import React, { useEffect, useState } from 'react';
import NewtonsCradle from '../animations/NewtonsCradle';
import Logo from '../ui/Logo';

interface LoadingScreenProps {
  onComplete?: () => void;
  minDuration?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  minDuration = 1400,
}) => {
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      const removeTimer = setTimeout(() => {
        setRemoved(true);
        onComplete?.();
      }, 500);
      return () => clearTimeout(removeTimer);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onComplete]);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F7FAFC] transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      {/* Background blueprint subtle grid */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        {/* QTI Logo container */}
        <div className="p-3 bg-white rounded-2xl shadow-xl border border-slate-200/80 ring-1 ring-slate-100">
          <Logo size="lg" showText={false} variant="white-card" />
        </div>

        {/* Company Title */}
        <div className="flex flex-col items-center">
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-widest text-[#071827] uppercase">
            QUALITECH INDUSTRIES
          </h1>
          <span className="text-xs font-mono font-semibold tracking-[0.25em] text-[#017AC3] uppercase mt-1">
            Hosur &bull; Tamil Nadu &bull; India
          </span>
        </div>

        {/* The EXACT Newton's Cradle Loader */}
        <div className="py-2">
          <NewtonsCradle size={52} speed="1.2s" color="#017AC3" />
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse" />
          <span>Calibrating Precision Environment</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
