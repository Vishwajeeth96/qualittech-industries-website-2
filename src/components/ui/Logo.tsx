import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'white-card';
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  showText = true,
  size = 'md',
}) => {
  const heightClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-11',
    lg: 'h-14 sm:h-16',
  };

  return (
    <a
      href="#"
      className={`inline-flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[#017AC3] rounded-md ${className}`}
      aria-label="Qualitech Industries Home"
    >
      {/* Real QTI Logo Image from user upload */}
      <div className={`relative overflow-hidden rounded-md flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-105 ${
        variant === 'dark' 
          ? 'bg-white/95 shadow-md shadow-black/20 ring-1 ring-white/20' 
          : variant === 'white-card'
          ? 'bg-white shadow-sm ring-1 ring-black/5'
          : 'bg-white/90 backdrop-blur-sm shadow-sm ring-1 ring-black/5'
      }`}>
        <img
          src="/qti-logo.jpg"
          alt="QTI - Qualitech Industries Logo"
          className={`${heightClasses[size]} w-auto object-contain`}
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-extrabold tracking-wider leading-none text-base sm:text-lg uppercase transition-colors duration-200 ${
            variant === 'dark' ? 'text-white' : 'text-[#071827]'
          }`}>
            QUALITECH
          </span>
          <span className={`text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase mt-0.5 ${
            variant === 'dark' ? 'text-[#017AC3]' : 'text-[#017AC3]'
          }`}>
            INDUSTRIES
          </span>
        </div>
      )}
    </a>
  );
};

export default Logo;
