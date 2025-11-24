import { useNode } from '@craftjs/core';
import { TypographyControl } from './settings/TypographyControl';
import { ColorPicker } from './settings/ColorPicker';
import { SpacingControl } from './settings/SpacingControl';

interface EditableTextProps {
  text?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  fontFamily?: string;
  lineHeight?: string;
  letterSpacing?: string;
  margin?: string;
  padding?: string;
}

export const EditableText = ({
  text = 'Edit this text',
  fontSize = '1rem',
  fontWeight = 'normal',
  color = 'inherit',
  tag: Tag = 'p',
  fontFamily = 'inherit',
  lineHeight = 'inherit',
  letterSpacing = 'inherit',
  margin = '0',
  padding = '0.5rem',
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
        fontFamily,
        lineHeight,
        letterSpacing,
        margin,
        padding,
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
    fontFamily,
    lineHeight,
    letterSpacing,
    margin,
    padding,
  } = useNode((node) => ({
    text: node.data.props.text,
    fontSize: node.data.props.fontSize,
    fontWeight: node.data.props.fontWeight,
    color: node.data.props.color,
    tag: node.data.props.tag,
    fontFamily: node.data.props.fontFamily,
    lineHeight: node.data.props.lineHeight,
    letterSpacing: node.data.props.letterSpacing,
    margin: node.data.props.margin,
    padding: node.data.props.padding,
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

      <ColorPicker
        label="Text Color"
        value={color}
        onChange={(value) => setProp((props: EditableTextProps) => (props.color = value))}
      />

      <TypographyControl
        fontSize={fontSize}
        fontWeight={fontWeight}
        onFontSizeChange={(value) => setProp((props: EditableTextProps) => (props.fontSize = value))}
        onFontWeightChange={(value) => setProp((props: EditableTextProps) => (props.fontWeight = value))}
      />

      <div className="editor-settings-section">
        <label className="editor-settings-label">Font Family</label>
        <input
          type="text"
          className="editor-settings-input"
          value={fontFamily}
          onChange={(e) => setProp((props: EditableTextProps) => (props.fontFamily = e.target.value))}
          placeholder="e.g., Arial, sans-serif"
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Line Height</label>
        <input
          type="text"
          className="editor-settings-input"
          value={lineHeight}
          onChange={(e) => setProp((props: EditableTextProps) => (props.lineHeight = e.target.value))}
          placeholder="e.g., 1.5, 24px"
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Letter Spacing</label>
        <input
          type="text"
          className="editor-settings-input"
          value={letterSpacing}
          onChange={(e) => setProp((props: EditableTextProps) => (props.letterSpacing = e.target.value))}
          placeholder="e.g., 0.05em, 1px"
        />
      </div>

      <SpacingControl
        label="Margin"
        value={margin}
        onChange={(value) => setProp((props: EditableTextProps) => (props.margin = value))}
      />

      <SpacingControl
        label="Padding"
        value={padding}
        onChange={(value) => setProp((props: EditableTextProps) => (props.padding = value))}
      />
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
    fontFamily: 'inherit',
    lineHeight: 'inherit',
    letterSpacing: 'inherit',
    margin: '0',
    padding: '0.5rem',
  },
  related: {
    settings: EditableTextSettings,
  },
};
