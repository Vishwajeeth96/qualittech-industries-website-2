import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border ${
          isDark 
            ? 'bg-white/5 text-[#017AC3] border-white/10' 
            : 'bg-[#017AC3]/10 text-[#017AC3] border-[#017AC3]/20'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
          {badge}
        </div>
      )}

      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${
        isDark ? 'text-white' : 'text-[#071827]'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg font-normal leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-[#64748B]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
