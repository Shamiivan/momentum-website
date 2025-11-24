import { useNode } from '@craftjs/core';
import { ColorPicker } from '../settings/ColorPicker';

export interface ValueItem {
  title: string;
  description: string;
}

export interface EditableValuesGridProps {
  title?: string;
  subtitle?: string;
  values?: ValueItem[];
  columns?: number;
  backgroundColor?: string;
}

export const EditableValuesGrid = ({
  title = 'What Drives Us',
  subtitle = 'Our core values that guide everything we do.',
  values = [
    {
      title: 'We Help, We do not Sell',
      description: 'Obsessed with measurable outcomes, not vanity metrics. Performance-based model reflects our commitment. We only win when you win.',
    },
    {
      title: 'Hardwork',
      description: 'Deep understanding of the North American market. Cultural fluency and proven track record across the region.',
    },
    {
      title: 'Energy',
      description: 'Only paid when clients get customers. Aligned incentives, no retainer risk. True partnership, shared success model.',
    },
    {
      title: 'Meritocracy',
      description: 'Unlike agencies specializing in one channel. 6 channels, integrated approach. We go where your customers are.',
    },
  ],
  columns = 2,
  backgroundColor = 'transparent',
}: EditableValuesGridProps) => {
  const {
    connectors: { connect, drag },
    selected,
  } = useNode((state) => ({
    selected: state.events.selected,
  }));

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      style={{
        backgroundColor,
        padding: '4rem 2rem',
        border: selected ? '2px dashed #d4af37' : '2px dashed transparent',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'var(--color-primary-dark)',
            textAlign: 'center',
            marginBottom: '1rem',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            textAlign: 'center',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem',
          }}
        >
          {subtitle}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: '2rem',
          }}
        >
          {values.map((value, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                transition: 'transform 0.3s ease',
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--color-primary-dark)',
                  marginBottom: '1rem',
                }}
              >
                {value.title}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#6B7280',
                  lineHeight: '1.6',
                }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EditableValuesGridSettings = () => {
  const {
    actions: { setProp },
    title,
    subtitle,
    values,
    columns,
    backgroundColor,
  } = useNode((node) => ({
    title: node.data.props.title,
    subtitle: node.data.props.subtitle,
    values: node.data.props.values,
    columns: node.data.props.columns,
    backgroundColor: node.data.props.backgroundColor,
  }));

  return (
    <div>
      <div className="editor-settings-section">
        <label className="editor-settings-label">Section Title</label>
        <input
          type="text"
          className="editor-settings-input"
          value={title}
          onChange={(e) =>
            setProp((props: EditableValuesGridProps) => (props.title = e.target.value))
          }
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Subtitle</label>
        <textarea
          className="editor-settings-textarea"
          value={subtitle}
          onChange={(e) =>
            setProp((props: EditableValuesGridProps) => (props.subtitle = e.target.value))
          }
          rows={2}
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Columns</label>
        <input
          type="number"
          className="editor-settings-input"
          value={columns}
          min={1}
          max={4}
          onChange={(e) =>
            setProp((props: EditableValuesGridProps) => (props.columns = parseInt(e.target.value)))
          }
        />
      </div>

      <ColorPicker
        label="Background Color"
        value={backgroundColor}
        onChange={(value) =>
          setProp((props: EditableValuesGridProps) => (props.backgroundColor = value))
        }
      />

      <div className="editor-settings-section">
        <label className="editor-settings-label">Values</label>
        {values.map((value: ValueItem, idx: number) => (
          <div
            key={idx}
            style={{
              marginBottom: '1rem',
              padding: '1rem',
              border: '1px solid #e5e7eb',
              borderRadius: '4px',
            }}
          >
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#374151' }}>
                Title
              </label>
              <input
                type="text"
                className="editor-settings-input"
                value={value.title}
                onChange={(e) =>
                  setProp((props: EditableValuesGridProps) => {
                    if (props.values) {
                      props.values[idx].title = e.target.value;
                    }
                  })
                }
              />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#374151' }}>
                Description
              </label>
              <textarea
                className="editor-settings-textarea"
                value={value.description}
                onChange={(e) =>
                  setProp((props: EditableValuesGridProps) => {
                    if (props.values) {
                      props.values[idx].description = e.target.value;
                    }
                  })
                }
                rows={3}
              />
            </div>
            <button
              onClick={() =>
                setProp((props: EditableValuesGridProps) => {
                  if (props.values) {
                    props.values.splice(idx, 1);
                  }
                })
              }
              style={{
                padding: '0.25rem 0.5rem',
                fontSize: '0.75rem',
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Remove Value
            </button>
          </div>
        ))}
        <button
          onClick={() =>
            setProp((props: EditableValuesGridProps) => {
              if (props.values) {
                props.values.push({
                  title: 'New Value',
                  description: 'Value description',
                });
              }
            })
          }
          style={{
            padding: '0.5rem 1rem',
            fontSize: '0.875rem',
            backgroundColor: 'var(--color-accent-gold)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Add Value
        </button>
      </div>
    </div>
  );
};

EditableValuesGrid.craft = {
  props: {
    title: 'What Drives Us',
    subtitle: 'Our core values that guide everything we do.',
    values: [
      {
        title: 'We Help, We do not Sell',
        description:
          'Obsessed with measurable outcomes, not vanity metrics. Performance-based model reflects our commitment. We only win when you win.',
      },
      {
        title: 'Hardwork',
        description:
          'Deep understanding of the North American market. Cultural fluency and proven track record across the region.',
      },
      {
        title: 'Energy',
        description:
          'Only paid when clients get customers. Aligned incentives, no retainer risk. True partnership, shared success model.',
      },
      {
        title: 'Meritocracy',
        description:
          'Unlike agencies specializing in one channel. 6 channels, integrated approach. We go where your customers are.',
      },
    ],
    columns: 2,
    backgroundColor: 'transparent',
  },
  related: {
    settings: EditableValuesGridSettings,
  },
};
