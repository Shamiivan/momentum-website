import { useNode } from '@craftjs/core';

interface EditableStatCardProps {
  number?: string;
  label?: string;
  helper?: string;
}

export const EditableStatCard = ({
  number = '50',
  label = 'Stat Label',
  helper = 'Helper text',
}: EditableStatCardProps) => {
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
      className="stat-card-new"
      style={{
        border: selected ? '2px dashed #d4af37' : 'none',
        cursor: 'move',
      }}
    >
      <div className="stat-number-new">{number}</div>
      <div className="stat-label-new">{label}</div>
      <div className="stat-helper">{helper}</div>
    </div>
  );
};

const EditableStatCardSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props as EditableStatCardProps,
  }));

  return (
    <div>
      <div className="editor-settings-section">
        <label className="editor-settings-label">Number</label>
        <input
          type="text"
          className="editor-settings-input"
          value={props.number}
          onChange={(e) => setProp((p: EditableStatCardProps) => (p.number = e.target.value))}
          placeholder="e.g., $50M, 500+"
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Label</label>
        <input
          type="text"
          className="editor-settings-input"
          value={props.label}
          onChange={(e) => setProp((p: EditableStatCardProps) => (p.label = e.target.value))}
          placeholder="Main label"
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Helper Text</label>
        <input
          type="text"
          className="editor-settings-input"
          value={props.helper}
          onChange={(e) => setProp((p: EditableStatCardProps) => (p.helper = e.target.value))}
          placeholder="Additional context"
        />
      </div>
    </div>
  );
};

EditableStatCard.craft = {
  props: {
    number: '50',
    label: 'Stat Label',
    helper: 'Helper text',
  },
  related: {
    settings: EditableStatCardSettings,
  },
};
