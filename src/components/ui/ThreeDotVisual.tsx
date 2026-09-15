import React from 'react';

interface ThreeDotVisualProps {
  className?: string;
  activeColor?: string;
  accentColor?: string;
}

export const ThreeDotVisual: React.FC<ThreeDotVisualProps> = ({
  className = '',
  activeColor = '#017AC3',
  accentColor = '#D71920',
}) => {
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`} aria-hidden="true">
      <span
        className="w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-125"
        style={{ backgroundColor: activeColor }}
      />
      <span
        className="w-1.5 h-1.5 rounded-full bg-slate-400/60 transition-colors duration-300 group-hover:bg-[#017AC3]"
      />
      <span
        className="w-1 h-1 rounded-full transition-colors duration-300"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
};

export default ThreeDotVisual;
