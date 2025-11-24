import React from 'react';

export interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ label, value, onChange }) => {
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
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: '3rem',
            height: '2.5rem',
            border: '1px solid #D1D5DB',
            borderRadius: '0.375rem',
            cursor: 'pointer',
          }}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="#000000"
          style={{
            flex: 1,
            padding: '0.5rem 0.75rem',
            fontSize: '0.875rem',
            border: '1px solid #D1D5DB',
            borderRadius: '0.375rem',
            fontFamily: 'monospace',
          }}
        />
      </div>
    </div>
  );
};
