import React from 'react';

interface NewtonsCradleProps {
  size?: number;
  speed?: string;
  color?: string;
  className?: string;
}

export const NewtonsCradle: React.FC<NewtonsCradleProps> = ({
  size = 50,
  speed = '1.2s',
  color = '#017AC3',
  className = '',
}) => {
  return (
    <div
      className={`newtons-cradle ${className}`}
      style={{
        ['--uib-size' as string]: `${size}px`,
        ['--uib-speed' as string]: speed,
        ['--uib-color' as string]: color,
      }}
      role="status"
      aria-label="Loading Qualitech Industries"
    >
      <div className="newtons-cradle__dot" />
      <div className="newtons-cradle__dot" />
      <div className="newtons-cradle__dot" />
      <div className="newtons-cradle__dot" />
    </div>
  );
};

export default NewtonsCradle;
