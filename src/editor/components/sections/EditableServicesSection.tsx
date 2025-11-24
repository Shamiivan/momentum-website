import { useNode } from '@craftjs/core';
import { useState } from 'react';
import { ColorPicker } from '../settings/ColorPicker';

export interface ServiceItem {
  title: string;
  valueOffering: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface EditableServicesSectionProps {
  sectionTitle?: string;
  sectionDescription?: string;
  services?: ServiceItem[];
  backgroundColor?: string;
}

export const EditableServicesSection = ({
  sectionTitle = 'Everyone Loves Buying. Everybody Hates Being Sold.',
  sectionDescription = 'You focus on your product. We focus on acquiring customers for it.',
  services = [
    {
      title: 'Partnerships',
      valueOffering: 'Forge Strategic Alliances',
      description: 'We build and manage high-performing sales channels for your brand, connecting you with new customers and driving revenue growth.',
      ctaText: 'Explore Our Partnership Model',
      ctaLink: '/services/partnerships',
    },
    {
      title: 'Staff/Sales Training',
      valueOffering: 'Empower Your Team',
      description: 'We provide comprehensive training programs that equip your sales team with the skills and knowledge they need to excel.',
      ctaText: 'See Training in Action',
      ctaLink: '/services/staff-training',
    },
    {
      title: 'Executive Coaching',
      valueOffering: 'Elevate Your Leadership',
      description: 'Our executive coaching services are designed to help leaders unlock their full potential.',
      ctaText: 'View Coaching Programs',
      ctaLink: '/services/executive-coaching',
    },
  ],
  backgroundColor = '#f9fafb',
}: EditableServicesSectionProps) => {
  const {
    connectors: { connect, drag },
    selected,
  } = useNode((state) => ({
    selected: state.events.selected,
  }));

  const [activeService, setActiveService] = useState(0);

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
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '2.25rem',
              fontWeight: '700',
              color: 'var(--color-primary-dark)',
              marginBottom: '1rem',
            }}
          >
            {sectionTitle}
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: '#6B7280',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            {sectionDescription}
          </p>
        </div>

        {/* Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem' }}>
          {/* Left: Service Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {services.map((service, idx) => (
              <button
                key={idx}
                onClick={() => setActiveService(idx)}
                style={{
                  padding: '1.5rem',
                  textAlign: 'left',
                  backgroundColor: activeService === idx ? 'var(--color-accent-gold)' : 'white',
                  color: activeService === idx ? 'white' : 'var(--color-primary-dark)',
                  border: activeService === idx ? 'none' : '1px solid #e5e7eb',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                }}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Right: Active Service Details */}
          <div
            style={{
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
            }}
          >
            {services[activeService] && (
              <>
                <h3
                  style={{
                    fontSize: '1.875rem',
                    fontWeight: '700',
                    color: 'var(--color-primary-dark)',
                    marginBottom: '1rem',
                  }}
                >
                  {services[activeService].valueOffering}
                </h3>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: '#6B7280',
                    lineHeight: '1.75',
                    marginBottom: '1.5rem',
                  }}
                >
                  {services[activeService].description}
                </p>
                <a
                  href={services[activeService].ctaLink}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: 'var(--color-accent-gold)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {services[activeService].ctaText}
                  <span>→</span>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const EditableServicesSectionSettings = () => {
  const {
    actions: { setProp },
    sectionTitle,
    sectionDescription,
    services,
    backgroundColor,
  } = useNode((node) => ({
    sectionTitle: node.data.props.sectionTitle,
    sectionDescription: node.data.props.sectionDescription,
    services: node.data.props.services,
    backgroundColor: node.data.props.backgroundColor,
  }));

  return (
    <div>
      <div className="editor-settings-section">
        <label className="editor-settings-label">Section Title</label>
        <input
          type="text"
          className="editor-settings-input"
          value={sectionTitle}
          onChange={(e) =>
            setProp((props: EditableServicesSectionProps) => (props.sectionTitle = e.target.value))
          }
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Section Description</label>
        <textarea
          className="editor-settings-textarea"
          value={sectionDescription}
          onChange={(e) =>
            setProp(
              (props: EditableServicesSectionProps) => (props.sectionDescription = e.target.value)
            )
          }
        />
      </div>

      <ColorPicker
        label="Background Color"
        value={backgroundColor}
        onChange={(value) =>
          setProp((props: EditableServicesSectionProps) => (props.backgroundColor = value))
        }
      />

      <div className="editor-settings-section">
        <label className="editor-settings-label">Services</label>
        {services.map((service: ServiceItem, idx: number) => (
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
                Title
              </label>
              <input
                type="text"
                className="editor-settings-input"
                value={service.title}
                onChange={(e) =>
                  setProp((props: EditableServicesSectionProps) => {
                    if (props.services) {
                      props.services[idx].title = e.target.value;
                    }
                  })
                }
              />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#374151' }}>
                Value Offering
              </label>
              <input
                type="text"
                className="editor-settings-input"
                value={service.valueOffering}
                onChange={(e) =>
                  setProp((props: EditableServicesSectionProps) => {
                    if (props.services) {
                      props.services[idx].valueOffering = e.target.value;
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
                value={service.description}
                onChange={(e) =>
                  setProp((props: EditableServicesSectionProps) => {
                    if (props.services) {
                      props.services[idx].description = e.target.value;
                    }
                  })
                }
              />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#374151' }}>
                CTA Text
              </label>
              <input
                type="text"
                className="editor-settings-input"
                value={service.ctaText}
                onChange={(e) =>
                  setProp((props: EditableServicesSectionProps) => {
                    if (props.services) {
                      props.services[idx].ctaText = e.target.value;
                    }
                  })
                }
              />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#374151' }}>
                CTA Link
              </label>
              <input
                type="text"
                className="editor-settings-input"
                value={service.ctaLink}
                onChange={(e) =>
                  setProp((props: EditableServicesSectionProps) => {
                    if (props.services) {
                      props.services[idx].ctaLink = e.target.value;
                    }
                  })
                }
              />
            </div>
            <button
              onClick={() =>
                setProp((props: EditableServicesSectionProps) => {
                  if (props.services) {
                    props.services.splice(idx, 1);
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
              Remove Service
            </button>
          </div>
        ))}
        <button
          onClick={() =>
            setProp((props: EditableServicesSectionProps) => {
              if (props.services) {
                props.services.push({
                  title: 'New Service',
                  valueOffering: 'Value Proposition',
                  description: 'Service description',
                  ctaText: 'Learn More',
                  ctaLink: '#',
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
          Add Service
        </button>
      </div>
    </div>
  );
};

EditableServicesSection.craft = {
  props: {
    sectionTitle: 'Everyone Loves Buying. Everybody Hates Being Sold.',
    sectionDescription: 'You focus on your product. We focus on acquiring customers for it.',
    services: [
      {
        title: 'Partnerships',
        valueOffering: 'Forge Strategic Alliances',
        description:
          'We build and manage high-performing sales channels for your brand, connecting you with new customers and driving revenue growth.',
        ctaText: 'Explore Our Partnership Model',
        ctaLink: '/services/partnerships',
      },
      {
        title: 'Staff/Sales Training',
        valueOffering: 'Empower Your Team',
        description:
          'We provide comprehensive training programs that equip your sales team with the skills and knowledge they need to excel.',
        ctaText: 'See Training in Action',
        ctaLink: '/services/staff-training',
      },
      {
        title: 'Executive Coaching',
        valueOffering: 'Elevate Your Leadership',
        description:
          'Our executive coaching services are designed to help leaders unlock their full potential.',
        ctaText: 'View Coaching Programs',
        ctaLink: '/services/executive-coaching',
      },
    ],
    backgroundColor: '#f9fafb',
  },
  related: {
    settings: EditableServicesSectionSettings,
  },
};
