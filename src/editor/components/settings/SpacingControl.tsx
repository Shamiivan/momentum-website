import React from 'react';

export interface SpacingControlProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SpacingControl: React.FC<SpacingControlProps> = ({
  label,
  value,
  onChange,
  placeholder = '0px',
}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label
        style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontSize: '0.875rem',
          fontWeight: '500',
          color: '#374151',
        }}
      >
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '0.5rem 0.75rem',
          fontSize: '0.875rem',
          border: '1px solid #D1D5DB',
          borderRadius: '0.375rem',
          fontFamily: 'monospace',
        }}
      />
      <p
        style={{
          marginTop: '0.25rem',
          fontSize: '0.75rem',
          color: '#6B7280',
        }}
      >
        Examples: 1rem, 16px, 1em, var(--space-4)
      </p>
    </div>
  );
};
