import React from 'react';

interface SkewButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'white' | 'dark' | 'blue' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  ariaLabel?: string;
}

export const SkewButton: React.FC<SkewButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'white',
  className = '',
  type = 'button',
  icon,
  ariaLabel,
}) => {
  const variantClass = 
    variant === 'dark' || variant === 'secondary'
      ? 'qti-skew-btn--secondary' 
      : variant === 'blue' 
      ? 'qti-skew-btn--blue' 
      : '';

  const content = (
    <span>
      {children}
      {icon && <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`qti-skew-btn group ${variantClass} ${className}`}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`qti-skew-btn group ${variantClass} ${className}`}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

export default SkewButton;
