import React from 'react';

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const AnimatedInput: React.FC<AnimatedInputProps> = ({
  label,
  id,
  className = '',
  required,
  ...props
}) => {
  return (
    <div className="input-group w-full">
      <label htmlFor={id} className="qti-form-label">
        {label} {required && <span className="text-[#D71920]">*</span>}
      </label>
      <input
        id={id}
        required={required}
        className={`qti-form-input ${className}`}
        {...props}
      />
    </div>
  );
};

interface AnimatedTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export const AnimatedTextarea: React.FC<AnimatedTextareaProps> = ({
  label,
  id,
  className = '',
  required,
  ...props
}) => {
  return (
    <div className="input-group w-full">
      <label htmlFor={id} className="qti-form-label">
        {label} {required && <span className="text-[#D71920]">*</span>}
      </label>
      <textarea
        id={id}
        required={required}
        className={`qti-form-textarea ${className}`}
        {...props}
      />
    </div>
  );
};

interface AnimatedSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: { value: string; label: string }[];
}

export const AnimatedSelect: React.FC<AnimatedSelectProps> = ({
  label,
  id,
  options,
  className = '',
  required,
  ...props
}) => {
  return (
    <div className="input-group w-full">
      <label htmlFor={id} className="qti-form-label">
        {label} {required && <span className="text-[#D71920]">*</span>}
      </label>
      <select
        id={id}
        required={required}
        className={`qti-form-input cursor-pointer ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
