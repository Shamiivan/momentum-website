import { useNode } from '@craftjs/core';

interface EditableContainerProps {
  background?: string;
  padding?: string;
  children?: React.ReactNode;
}

export const EditableContainer = ({
  background = 'transparent',
  padding = '2rem',
  children,
}: EditableContainerProps) => {
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
        background,
        padding,
        minHeight: '200px',
        position: 'relative',
        width: '100%',
        border: selected ? '2px dashed #d4af37' : '2px dashed transparent',
      }}
    >
      {children}
    </div>
  );
};

const EditableContainerSettings = () => {
  const {
    actions: { setProp },
    background,
    padding,
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  return (
    <div>
      <div className="editor-settings-section">
        <label className="editor-settings-label">Background</label>
        <input
          type="text"
          className="editor-settings-input"
          value={background}
          onChange={(e) =>
            setProp((props: EditableContainerProps) => (props.background = e.target.value))
          }
          placeholder="e.g., #f5f5f5, transparent"
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Padding</label>
        <input
          type="text"
          className="editor-settings-input"
          value={padding}
          onChange={(e) =>
            setProp((props: EditableContainerProps) => (props.padding = e.target.value))
          }
          placeholder="e.g., 2rem, 20px"
        />
      </div>
    </div>
  );
};

EditableContainer.craft = {
  props: {
    background: 'transparent',
    padding: '2rem',
  },
  related: {
    settings: EditableContainerSettings,
  },
};
