import React from 'react';

export interface BorderControlProps {
  borderRadius?: string;
  onBorderRadiusChange?: (value: string) => void;
}

export const BorderControl: React.FC<BorderControlProps> = ({
  borderRadius = '',
  onBorderRadiusChange,
}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <h4
        style={{
          fontSize: '0.875rem',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '0.75rem',
        }}
      >
        Border
      </h4>

      {onBorderRadiusChange && (
        <div>
          <label
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151',
            }}
          >
            Border Radius
          </label>
          <input
            type="text"
            value={borderRadius}
            onChange={(e) => onBorderRadiusChange(e.target.value)}
            placeholder="0px"
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
            Examples: 4px, 0.5rem, var(--radius-md)
          </p>
        </div>
      )}
    </div>
  );
};
