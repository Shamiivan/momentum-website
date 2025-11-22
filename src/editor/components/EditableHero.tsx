import { useNode } from '@craftjs/core';
import { Link } from 'react-router-dom';

interface EditableHeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showScrollIndicator?: boolean;
}

export const EditableHero = ({
  title = '$50 Million Generated For National Brands',
  subtitle = 'We bridge the gap between you and your customers.',
  primaryButtonText = 'Schedule a Free Consultation',
  primaryButtonLink = '/contact',
  secondaryButtonText = 'See How We Do It',
  secondaryButtonLink = '/services',
  showScrollIndicator = true,
}: EditableHeroProps) => {
  const {
    connectors: { connect, drag },
    selected,
  } = useNode((state) => ({
    selected: state.events.selected,
  }));

  return (
    <section
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className="hero-new"
      aria-label="Hero section"
      style={{
        border: selected ? '2px dashed #d4af37' : 'none',
        position: 'relative',
        opacity: 1, // Force visible in editor
        transform: 'none', // Override any ScrollTrigger transforms
      }}
    >
      <div className="animated-grid"></div>
      <div
        className="hero-container"
        style={{
          opacity: 1, // Force visible in editor
          transform: 'none', // Override any ScrollTrigger transforms
        }}
      >
        <h1
          className="revenue-counter"
          style={{
            opacity: 1,
            transform: 'none',
          }}
        >
          <span className="revenue-line">{title}</span>
        </h1>
        <p
          className="hero-subtitle-new"
          style={{
            opacity: 1,
            transform: 'none',
          }}
        >
          {subtitle}
        </p>
        <div
          className="hero-cta-group-new"
          style={{
            opacity: 1,
            transform: 'none',
          }}
        >
          <Link to={primaryButtonLink} className="btn-primary-new">
            {primaryButtonText}
          </Link>
          <Link to={secondaryButtonLink} className="btn-secondary-new">
            {secondaryButtonText}
          </Link>
        </div>
        {showScrollIndicator && (
          <div
            className="scroll-indicator"
            style={{
              opacity: 1,
              transform: 'none',
            }}
          >
            <span>↓</span>
          </div>
        )}
      </div>
    </section>
  );
};

const EditableHeroSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props as EditableHeroProps,
  }));

  return (
    <div>
      <div className="editor-settings-section">
        <label className="editor-settings-label">Title</label>
        <textarea
          className="editor-settings-textarea"
          value={props.title}
          onChange={(e) => setProp((p: EditableHeroProps) => (p.title = e.target.value))}
          placeholder="Main headline..."
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Subtitle</label>
        <textarea
          className="editor-settings-textarea"
          value={props.subtitle}
          onChange={(e) => setProp((p: EditableHeroProps) => (p.subtitle = e.target.value))}
          placeholder="Supporting text..."
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Primary Button Text</label>
        <input
          type="text"
          className="editor-settings-input"
          value={props.primaryButtonText}
          onChange={(e) => setProp((p: EditableHeroProps) => (p.primaryButtonText = e.target.value))}
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Primary Button Link</label>
        <input
          type="text"
          className="editor-settings-input"
          value={props.primaryButtonLink}
          onChange={(e) => setProp((p: EditableHeroProps) => (p.primaryButtonLink = e.target.value))}
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Secondary Button Text</label>
        <input
          type="text"
          className="editor-settings-input"
          value={props.secondaryButtonText}
          onChange={(e) =>
            setProp((p: EditableHeroProps) => (p.secondaryButtonText = e.target.value))
          }
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Secondary Button Link</label>
        <input
          type="text"
          className="editor-settings-input"
          value={props.secondaryButtonLink}
          onChange={(e) =>
            setProp((p: EditableHeroProps) => (p.secondaryButtonLink = e.target.value))
          }
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">
          <input
            type="checkbox"
            checked={props.showScrollIndicator}
            onChange={(e) =>
              setProp((p: EditableHeroProps) => (p.showScrollIndicator = e.target.checked))
            }
          />
          Show Scroll Indicator
        </label>
      </div>
    </div>
  );
};

EditableHero.craft = {
  props: {
    title: '$50 Million Generated For National Brands',
    subtitle: 'We bridge the gap between you and your customers.',
    primaryButtonText: 'Schedule a Free Consultation',
    primaryButtonLink: '/contact',
    secondaryButtonText: 'See How We Do It',
    secondaryButtonLink: '/services',
    showScrollIndicator: true,
  },
  related: {
    settings: EditableHeroSettings,
  },
};
