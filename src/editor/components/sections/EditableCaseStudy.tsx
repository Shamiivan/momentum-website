import { useNode } from '@craftjs/core';
import { ColorPicker } from '../settings/ColorPicker';

export interface EditableCaseStudyProps {
  title?: string;
  description?: string;
  image?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundColor?: string;
}

export const EditableCaseStudy = ({
  title = '$57.3M for TELUS in 4 Years',
  description = 'Over the past 5 years, we helped TELUS break into the Quebec market and generate over $57.3 million in revenue by deploying expert sales teams across in-person, phone, and social media channels.',
  image = '/growth-chart.svg',
  buttonText = 'Read Full Case Study',
  buttonLink = '/case-studies',
  backgroundColor = 'transparent',
}: EditableCaseStudyProps) => {
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Image */}
          <div>
            <img
              src={image}
              alt="Case study visual"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
          </div>

          {/* Content */}
          <div>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--color-primary-dark)',
                marginBottom: '1.5rem',
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontSize: '1.125rem',
                color: '#6B7280',
                lineHeight: '1.75',
                marginBottom: '2rem',
              }}
            >
              {description}
            </p>
            <a
              href={buttonLink}
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'transparent',
                color: 'var(--color-primary-dark)',
                textDecoration: 'none',
                borderRadius: '4px',
                border: '2px solid var(--color-primary-dark)',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const EditableCaseStudySettings = () => {
  const {
    actions: { setProp },
    title,
    description,
    image,
    buttonText,
    buttonLink,
    backgroundColor,
  } = useNode((node) => ({
    title: node.data.props.title,
    description: node.data.props.description,
    image: node.data.props.image,
    buttonText: node.data.props.buttonText,
    buttonLink: node.data.props.buttonLink,
    backgroundColor: node.data.props.backgroundColor,
  }));

  return (
    <div>
      <div className="editor-settings-section">
        <label className="editor-settings-label">Title</label>
        <input
          type="text"
          className="editor-settings-input"
          value={title}
          onChange={(e) =>
            setProp((props: EditableCaseStudyProps) => (props.title = e.target.value))
          }
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Description</label>
        <textarea
          className="editor-settings-textarea"
          value={description}
          onChange={(e) =>
            setProp((props: EditableCaseStudyProps) => (props.description = e.target.value))
          }
          rows={5}
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Image URL</label>
        <input
          type="text"
          className="editor-settings-input"
          value={image}
          onChange={(e) =>
            setProp((props: EditableCaseStudyProps) => (props.image = e.target.value))
          }
          placeholder="/path/to/image.svg"
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Button Text</label>
        <input
          type="text"
          className="editor-settings-input"
          value={buttonText}
          onChange={(e) =>
            setProp((props: EditableCaseStudyProps) => (props.buttonText = e.target.value))
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
            setProp((props: EditableCaseStudyProps) => (props.buttonLink = e.target.value))
          }
          placeholder="/case-studies"
        />
      </div>

      <ColorPicker
        label="Background Color"
        value={backgroundColor}
        onChange={(value) =>
          setProp((props: EditableCaseStudyProps) => (props.backgroundColor = value))
        }
      />
    </div>
  );
};

EditableCaseStudy.craft = {
  props: {
    title: '$57.3M for TELUS in 4 Years',
    description:
      'Over the past 5 years, we helped TELUS break into the Quebec market and generate over $57.3 million in revenue by deploying expert sales teams across in-person, phone, and social media channels.',
    image: '/growth-chart.svg',
    buttonText: 'Read Full Case Study',
    buttonLink: '/case-studies',
    backgroundColor: 'transparent',
  },
  related: {
    settings: EditableCaseStudySettings,
  },
};
