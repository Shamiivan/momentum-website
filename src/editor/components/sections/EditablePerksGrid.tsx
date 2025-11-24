import { useNode } from '@craftjs/core';
import { ColorPicker } from '../settings/ColorPicker';

export interface PerkItem {
  title: string;
  description: string;
}

export interface EditablePerksGridProps {
  title?: string;
  subtitle?: string;
  perks?: PerkItem[];
  columns?: number;
  backgroundColor?: string;
}

export const EditablePerksGrid = ({
  title = 'Why Work With Us',
  subtitle = 'We offer competitive benefits and a supportive work environment.',
  perks = [
    {
      title: 'Competitive Compensation',
      description: 'Industry-leading base salary plus performance bonuses.',
    },
    {
      title: 'Career Growth',
      description: 'Clear advancement paths and continuous learning opportunities.',
    },
    {
      title: 'Flexible Schedule',
      description: 'Work-life balance with flexible hours and remote options.',
    },
    {
      title: 'Health Benefits',
      description: 'Comprehensive health, dental, and vision coverage.',
    },
  ],
  columns = 2,
  backgroundColor = 'transparent',
}: EditablePerksGridProps) => {
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
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            marginBottom: '3rem',
            textAlign: 'center',
            maxWidth: '800px',
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
          {perks.map((perk, idx) => (
            <div
              key={idx}
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease',
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--color-primary-dark)',
                  marginBottom: '0.75rem',
                }}
              >
                {perk.title}
              </h3>
              <p
                style={{
                  color: '#6B7280',
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  margin: 0,
                }}
              >
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EditablePerksGridSettings = () => {
  const {
    actions: { setProp },
    title,
    subtitle,
    perks,
    columns,
    backgroundColor,
  } = useNode((node) => ({
    title: node.data.props.title,
    subtitle: node.data.props.subtitle,
    perks: node.data.props.perks,
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
            setProp((props: EditablePerksGridProps) => (props.title = e.target.value))
          }
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Subtitle</label>
        <textarea
          className="editor-settings-textarea"
          value={subtitle}
          onChange={(e) =>
            setProp((props: EditablePerksGridProps) => (props.subtitle = e.target.value))
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
            setProp(
              (props: EditablePerksGridProps) => (props.columns = parseInt(e.target.value))
            )
          }
        />
      </div>

      <ColorPicker
        label="Background Color"
        value={backgroundColor}
        onChange={(value) =>
          setProp((props: EditablePerksGridProps) => (props.backgroundColor = value))
        }
      />

      <div className="editor-settings-section">
        <label className="editor-settings-label">Perks</label>
        {perks.map((perk: PerkItem, idx: number) => (
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
                Perk Title
              </label>
              <input
                type="text"
                className="editor-settings-input"
                value={perk.title}
                onChange={(e) =>
                  setProp((props: EditablePerksGridProps) => {
                    if (props.perks) {
                      props.perks[idx].title = e.target.value;
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
                value={perk.description}
                onChange={(e) =>
                  setProp((props: EditablePerksGridProps) => {
                    if (props.perks) {
                      props.perks[idx].description = e.target.value;
                    }
                  })
                }
                rows={2}
              />
            </div>
            <button
              onClick={() =>
                setProp((props: EditablePerksGridProps) => {
                  if (props.perks) {
                    props.perks.splice(idx, 1);
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
              Remove Perk
            </button>
          </div>
        ))}
        <button
          onClick={() =>
            setProp((props: EditablePerksGridProps) => {
              if (props.perks) {
                props.perks.push({
                  title: 'New Perk',
                  description: 'Perk description',
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
          Add Perk
        </button>
      </div>
    </div>
  );
};

EditablePerksGrid.craft = {
  props: {
    title: 'Why Work With Us',
    subtitle: 'We offer competitive benefits and a supportive work environment.',
    perks: [
      {
        title: 'Competitive Compensation',
        description: 'Industry-leading base salary plus performance bonuses.',
      },
      {
        title: 'Career Growth',
        description: 'Clear advancement paths and continuous learning opportunities.',
      },
      {
        title: 'Flexible Schedule',
        description: 'Work-life balance with flexible hours and remote options.',
      },
      {
        title: 'Health Benefits',
        description: 'Comprehensive health, dental, and vision coverage.',
      },
    ],
    columns: 2,
    backgroundColor: 'transparent',
  },
  related: {
    settings: EditablePerksGridSettings,
  },
};
