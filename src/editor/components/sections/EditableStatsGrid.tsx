import { useNode } from '@craftjs/core';
import { ColorPicker } from '../settings/ColorPicker';

export interface StatItem {
  number: string;
  label: string;
  helper: string;
}

export interface EditableStatsGridProps {
  stats?: StatItem[];
  columns?: number;
  backgroundColor?: string;
}

export const EditableStatsGrid = ({
  stats = [
    { number: '$65M', label: 'Revenue Generated', helper: 'for partner brands' },
    { number: '1000', label: 'Trained Professionals', helper: 'across multiple channels' },
    { number: '3', label: 'Markets', helper: 'expanded in last year' },
    { number: '40K', label: 'Customers', helper: 'acquired through outreach' },
  ],
  columns = 4,
  backgroundColor = 'transparent',
}: EditableStatsGridProps) => {
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
        padding: '3rem 2rem',
        border: selected ? '2px dashed #d4af37' : '2px dashed transparent',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            style={{
              textAlign: 'center',
              padding: '1.5rem',
            }}
          >
            <div
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--color-accent-gold)',
                marginBottom: '0.5rem',
              }}
            >
              {stat.number}
            </div>
            <div
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--color-primary-dark)',
                marginBottom: '0.25rem',
              }}
            >
              {stat.label}
            </div>
            <div
              style={{
                fontSize: '0.875rem',
                color: '#6B7280',
              }}
            >
              {stat.helper}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EditableStatsGridSettings = () => {
  const {
    actions: { setProp },
    stats,
    columns,
    backgroundColor,
  } = useNode((node) => ({
    stats: node.data.props.stats,
    columns: node.data.props.columns,
    backgroundColor: node.data.props.backgroundColor,
  }));

  return (
    <div>
      <div className="editor-settings-section">
        <label className="editor-settings-label">Columns</label>
        <input
          type="number"
          className="editor-settings-input"
          value={columns}
          min={1}
          max={6}
          onChange={(e) =>
            setProp((props: EditableStatsGridProps) => (props.columns = parseInt(e.target.value)))
          }
        />
      </div>

      <ColorPicker
        label="Background Color"
        value={backgroundColor}
        onChange={(value) =>
          setProp((props: EditableStatsGridProps) => (props.backgroundColor = value))
        }
      />

      <div className="editor-settings-section">
        <label className="editor-settings-label">Stats</label>
        {stats.map((stat: StatItem, idx: number) => (
          <div key={idx} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#374151' }}>
                Number
              </label>
              <input
                type="text"
                className="editor-settings-input"
                value={stat.number}
                onChange={(e) =>
                  setProp((props: EditableStatsGridProps) => {
                    if (props.stats) {
                      props.stats[idx].number = e.target.value;
                    }
                  })
                }
              />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#374151' }}>
                Label
              </label>
              <input
                type="text"
                className="editor-settings-input"
                value={stat.label}
                onChange={(e) =>
                  setProp((props: EditableStatsGridProps) => {
                    if (props.stats) {
                      props.stats[idx].label = e.target.value;
                    }
                  })
                }
              />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#374151' }}>
                Helper Text
              </label>
              <input
                type="text"
                className="editor-settings-input"
                value={stat.helper}
                onChange={(e) =>
                  setProp((props: EditableStatsGridProps) => {
                    if (props.stats) {
                      props.stats[idx].helper = e.target.value;
                    }
                  })
                }
              />
            </div>
            <button
              onClick={() =>
                setProp((props: EditableStatsGridProps) => {
                  if (props.stats) {
                    props.stats.splice(idx, 1);
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
              Remove Stat
            </button>
          </div>
        ))}
        <button
          onClick={() =>
            setProp((props: EditableStatsGridProps) => {
              if (props.stats) {
                props.stats.push({ number: '0', label: 'New Stat', helper: 'description' });
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
          Add Stat
        </button>
      </div>
    </div>
  );
};

EditableStatsGrid.craft = {
  props: {
    stats: [
      { number: '$65M', label: 'Revenue Generated', helper: 'for partner brands' },
      { number: '1000', label: 'Trained Professionals', helper: 'across multiple channels' },
      { number: '3', label: 'Markets', helper: 'expanded in last year' },
      { number: '40K', label: 'Customers', helper: 'acquired through outreach' },
    ],
    columns: 4,
    backgroundColor: 'transparent',
  },
  related: {
    settings: EditableStatsGridSettings,
  },
};
