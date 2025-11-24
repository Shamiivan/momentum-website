import { useNode } from '@craftjs/core';
import { ColorPicker } from '../settings/ColorPicker';
import { SpacingControl } from '../settings/SpacingControl';
import { BorderControl } from '../settings/BorderControl';

export interface EditableButtonProps {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  href?: string;
  target?: '_self' | '_blank';
}

export const EditableButton = ({
  text = 'Click Me',
  backgroundColor = 'var(--color-accent-gold)',
  textColor = 'var(--color-white)',
  padding = '0.75rem 1.5rem',
  borderRadius = 'var(--radius-md)',
  fontSize = '1rem',
  fontWeight = '600',
  href = '#',
  target = '_self',
}: EditableButtonProps) => {
  const {
    connectors: { connect, drag },
    selected,
  } = useNode((state) => ({
    selected: state.events.selected,
  }));

  const Component = href ? 'a' : 'button';

  return (
    <Component
      ref={(ref: HTMLAnchorElement | HTMLButtonElement | null) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      href={href || undefined}
      target={href ? target : undefined}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      style={{
        backgroundColor,
        color: textColor,
        padding,
        borderRadius,
        fontSize,
        fontWeight,
        border: selected ? '2px dashed #d4af37' : 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
        transition: 'all 0.3s ease',
      }}
    >
      {text}
    </Component>
  );
};

const EditableButtonSettings = () => {
  const {
    actions: { setProp },
    text,
    backgroundColor,
    textColor,
    padding,
    borderRadius,
    fontSize,
    fontWeight,
    href,
    target,
  } = useNode((node) => ({
    text: node.data.props.text,
    backgroundColor: node.data.props.backgroundColor,
    textColor: node.data.props.textColor,
    padding: node.data.props.padding,
    borderRadius: node.data.props.borderRadius,
    fontSize: node.data.props.fontSize,
    fontWeight: node.data.props.fontWeight,
    href: node.data.props.href,
    target: node.data.props.target,
  }));

  return (
    <div>
      <div className="editor-settings-section">
        <label className="editor-settings-label">Button Text</label>
        <input
          type="text"
          className="editor-settings-input"
          value={text}
          onChange={(e) =>
            setProp((props: EditableButtonProps) => (props.text = e.target.value))
          }
          placeholder="Button text"
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Link URL</label>
        <input
          type="text"
          className="editor-settings-input"
          value={href}
          onChange={(e) =>
            setProp((props: EditableButtonProps) => (props.href = e.target.value))
          }
          placeholder="https://example.com"
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Link Target</label>
        <select
          className="editor-settings-select"
          value={target}
          onChange={(e) =>
            setProp(
              (props: EditableButtonProps) =>
                (props.target = e.target.value as EditableButtonProps['target'])
            )
          }
        >
          <option value="_self">Same Tab</option>
          <option value="_blank">New Tab</option>
        </select>
      </div>

      <ColorPicker
        label="Background Color"
        value={backgroundColor}
        onChange={(value) =>
          setProp((props: EditableButtonProps) => (props.backgroundColor = value))
        }
      />

      <ColorPicker
        label="Text Color"
        value={textColor}
        onChange={(value) =>
          setProp((props: EditableButtonProps) => (props.textColor = value))
        }
      />

      <div className="editor-settings-section">
        <label className="editor-settings-label">Font Size</label>
        <input
          type="text"
          className="editor-settings-input"
          value={fontSize}
          onChange={(e) =>
            setProp((props: EditableButtonProps) => (props.fontSize = e.target.value))
          }
          placeholder="1rem"
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Font Weight</label>
        <select
          className="editor-settings-select"
          value={fontWeight}
          onChange={(e) =>
            setProp((props: EditableButtonProps) => (props.fontWeight = e.target.value))
          }
        >
          <option value="400">Normal</option>
          <option value="500">Medium</option>
          <option value="600">Semi-bold</option>
          <option value="700">Bold</option>
        </select>
      </div>

      <SpacingControl
        label="Padding"
        value={padding}
        onChange={(value) =>
          setProp((props: EditableButtonProps) => (props.padding = value))
        }
      />

      <BorderControl
        borderRadius={borderRadius}
        onBorderRadiusChange={(value) =>
          setProp((props: EditableButtonProps) => (props.borderRadius = value))
        }
      />
    </div>
  );
};

EditableButton.craft = {
  props: {
    text: 'Click Me',
    backgroundColor: 'var(--color-accent-gold)',
    textColor: 'var(--color-white)',
    padding: '0.75rem 1.5rem',
    borderRadius: 'var(--radius-md)',
    fontSize: '1rem',
    fontWeight: '600',
    href: '#',
    target: '_self',
  },
  related: {
    settings: EditableButtonSettings,
  },
};
