import React from 'react';

export interface TypographyControlProps {
  fontSize?: string;
  fontWeight?: string;
  onFontSizeChange?: (value: string) => void;
  onFontWeightChange?: (value: string) => void;
}

export const TypographyControl: React.FC<TypographyControlProps> = ({
  fontSize = '',
  fontWeight = '',
  onFontSizeChange,
  onFontWeightChange,
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
        Typography
      </h4>

      {onFontSizeChange && (
        <div style={{ marginBottom: '0.75rem' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151',
            }}
          >
            Font Size
          </label>
          <input
            type="text"
            value={fontSize}
            onChange={(e) => onFontSizeChange(e.target.value)}
            placeholder="16px"
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              fontSize: '0.875rem',
              border: '1px solid #D1D5DB',
              borderRadius: '0.375rem',
              fontFamily: 'monospace',
            }}
          />
        </div>
      )}

      {onFontWeightChange && (
        <div style={{ marginBottom: '0.75rem' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151',
            }}
          >
            Font Weight
          </label>
          <select
            value={fontWeight}
            onChange={(e) => onFontWeightChange(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              fontSize: '0.875rem',
              border: '1px solid #D1D5DB',
              borderRadius: '0.375rem',
              backgroundColor: 'white',
              cursor: 'pointer',
            }}
          >
            <option value="">Default</option>
            <option value="300">Light (300)</option>
            <option value="400">Normal (400)</option>
            <option value="500">Medium (500)</option>
            <option value="600">Semi-bold (600)</option>
            <option value="700">Bold (700)</option>
            <option value="800">Extra-bold (800)</option>
          </select>
        </div>
      )}
    </div>
  );
};
