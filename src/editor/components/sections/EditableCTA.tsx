import { useNode } from '@craftjs/core';
import { ColorPicker } from '../settings/ColorPicker';

export interface EditableCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundColor?: string;
  textColor?: string;
}

export const EditableCTA = ({
  title = "Let's Talk",
  subtitle = 'Get in touch to discuss how we can help grow your business.',
  buttonText = 'Contact Us',
  buttonLink = '/contact',
  backgroundColor = 'var(--color-primary-dark)',
  textColor = 'white',
}: EditableCTAProps) => {
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
        padding: '5rem 2rem',
        textAlign: 'center',
        border: selected ? '2px dashed #d4af37' : '2px dashed transparent',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: textColor,
            marginBottom: '1rem',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: '1.25rem',
            color: textColor,
            opacity: 0.9,
            marginBottom: '2rem',
          }}
        >
          {subtitle}
        </p>
        <a
          href={buttonLink}
          style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            backgroundColor: 'var(--color-accent-gold)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '1.125rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
          }}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const EditableCTASettings = () => {
  const {
    actions: { setProp },
    title,
    subtitle,
    buttonText,
    buttonLink,
    backgroundColor,
    textColor,
  } = useNode((node) => ({
    title: node.data.props.title,
    subtitle: node.data.props.subtitle,
    buttonText: node.data.props.buttonText,
    buttonLink: node.data.props.buttonLink,
    backgroundColor: node.data.props.backgroundColor,
    textColor: node.data.props.textColor,
  }));

  return (
    <div>
      <div className="editor-settings-section">
        <label className="editor-settings-label">Title</label>
        <input
          type="text"
          className="editor-settings-input"
          value={title}
          onChange={(e) => setProp((props: EditableCTAProps) => (props.title = e.target.value))}
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Subtitle</label>
        <textarea
          className="editor-settings-textarea"
          value={subtitle}
          onChange={(e) => setProp((props: EditableCTAProps) => (props.subtitle = e.target.value))}
          rows={3}
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Button Text</label>
        <input
          type="text"
          className="editor-settings-input"
          value={buttonText}
          onChange={(e) =>
            setProp((props: EditableCTAProps) => (props.buttonText = e.target.value))
          }
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Button Link</label>
        <input
          type="text"
          className="editor-settings-input"
          value={buttonLink}
          onChange={(e) =>
            setProp((props: EditableCTAProps) => (props.buttonLink = e.target.value))
          }
          placeholder="/contact"
        />
      </div>

      <ColorPicker
        label="Background Color"
        value={backgroundColor}
        onChange={(value) =>
          setProp((props: EditableCTAProps) => (props.backgroundColor = value))
        }
      />

      <ColorPicker
        label="Text Color"
        value={textColor}
        onChange={(value) => setProp((props: EditableCTAProps) => (props.textColor = value))}
      />
    </div>
  );
};

EditableCTA.craft = {
  props: {
    title: "Let's Talk",
    subtitle: 'Get in touch to discuss how we can help grow your business.',
    buttonText: 'Contact Us',
    buttonLink: '/contact',
    backgroundColor: 'var(--color-primary-dark)',
    textColor: 'white',
  },
  related: {
    settings: EditableCTASettings,
  },
};
