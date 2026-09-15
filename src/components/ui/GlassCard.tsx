import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'interactive';
  className?: string;
  hasCrosshairs?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'light',
  className = '',
  hasCrosshairs = false,
}) => {
  let baseClass = '';

  if (variant === 'dark') {
    baseClass = 'bg-[#071827]/80 backdrop-blur-xl border border-white/10 text-white shadow-xl shadow-black/20';
  } else if (variant === 'interactive') {
    baseClass = 'bg-white/80 backdrop-blur-lg border border-slate-200/80 hover:border-[#017AC3]/40 shadow-sm hover:shadow-xl hover:shadow-[#017AC3]/10 hover:-translate-y-1 transition-all duration-300';
  } else {
    baseClass = 'bg-white/70 backdrop-blur-md border border-white/80 shadow-lg shadow-slate-900/5';
  }

  return (
    <div className={`relative rounded-2xl p-6 sm:p-8 ${baseClass} ${className}`}>
      {hasCrosshairs && (
        <>
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#017AC3]/40 pointer-events-none" />
          <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#017AC3]/40 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#017AC3]/40 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#017AC3]/40 pointer-events-none" />
        </>
      )}
      {children}
    </div>
  );
};

export default GlassCard;
