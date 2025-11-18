import { useNode } from '@craftjs/core';

interface EditableTextProps {
  text?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const EditableText = ({
  text = 'Edit this text',
  fontSize = '1rem',
  fontWeight = 'normal',
  color = 'inherit',
  tag: Tag = 'p',
}: EditableTextProps) => {
  const {
    connectors: { connect, drag },
    selected,
  } = useNode((state) => ({
    selected: state.events.selected,
  }));

  return (
    <Tag
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      style={{
        fontSize,
        fontWeight,
        color,
        margin: 0,
        padding: '0.5rem',
        border: selected ? '2px dashed #d4af37' : '2px dashed transparent',
        cursor: 'move',
      }}
    >
      {text}
    </Tag>
  );
};

// Settings panel for EditableText
const EditableTextSettings = () => {
  const {
    actions: { setProp },
    text,
    fontSize,
    fontWeight,
    color,
    tag,
  } = useNode((node) => ({
    text: node.data.props.text,
    fontSize: node.data.props.fontSize,
    fontWeight: node.data.props.fontWeight,
    color: node.data.props.color,
    tag: node.data.props.tag,
  }));

  return (
    <div>
      <div className="editor-settings-section">
        <label className="editor-settings-label">Text Content</label>
        <textarea
          className="editor-settings-textarea"
          value={text}
          onChange={(e) => setProp((props: EditableTextProps) => (props.text = e.target.value))}
          placeholder="Enter text..."
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">HTML Tag</label>
        <select
          className="editor-settings-select"
          value={tag}
          onChange={(e) =>
            setProp(
              (props: EditableTextProps) => (props.tag = e.target.value as EditableTextProps['tag'])
            )
          }
        >
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="p">Paragraph</option>
          <option value="span">Span</option>
        </select>
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Font Size</label>
        <input
          type="text"
          className="editor-settings-input"
          value={fontSize}
          onChange={(e) => setProp((props: EditableTextProps) => (props.fontSize = e.target.value))}
          placeholder="e.g., 1.5rem, 24px"
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Font Weight</label>
        <select
          className="editor-settings-select"
          value={fontWeight}
          onChange={(e) => setProp((props: EditableTextProps) => (props.fontWeight = e.target.value))}
        >
          <option value="normal">Normal</option>
          <option value="500">Medium</option>
          <option value="600">Semi-Bold</option>
          <option value="700">Bold</option>
        </select>
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Color</label>
        <input
          type="text"
          className="editor-settings-input"
          value={color}
          onChange={(e) => setProp((props: EditableTextProps) => (props.color = e.target.value))}
          placeholder="e.g., #333, var(--color-text)"
        />
      </div>
    </div>
  );
};

EditableText.craft = {
  props: {
    text: 'Edit this text',
    fontSize: '1rem',
    fontWeight: 'normal',
    color: 'inherit',
    tag: 'p',
  },
  related: {
    settings: EditableTextSettings,
  },
};
