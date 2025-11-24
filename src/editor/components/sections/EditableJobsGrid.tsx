import { useNode } from '@craftjs/core';
import { useState } from 'react';
import { ColorPicker } from '../settings/ColorPicker';

export interface JobItem {
  title: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  applyLink: string;
}

export interface EditableJobsGridProps {
  title?: string;
  subtitle?: string;
  jobs?: JobItem[];
  backgroundColor?: string;
}

export const EditableJobsGrid = ({
  title = 'Available Positions',
  subtitle = 'Join a performance-driven team where you\'ll learn real sales, work with major brands, and have a clear path to advancement.',
  jobs = [
    {
      title: 'Sales Associate',
      description: 'Manage a portfolio of client accounts and ensure successful campaign delivery.',
      requirements: ['2+ years of experience', 'Strong communication skills', 'CRM proficiency'],
      responsibilities: ['Own client relationships', 'Monitor campaign performance', 'Identify upsell opportunities'],
      applyLink: '/contact',
    },
  ],
  backgroundColor = 'transparent',
}: EditableJobsGridProps) => {
  const {
    connectors: { connect, drag },
    selected,
  } = useNode((state) => ({
    selected: state.events.selected,
  }));

  const [expandedJob, setExpandedJob] = useState<number | null>(null);

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
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'var(--color-primary-dark)',
            marginBottom: '1rem',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            marginBottom: '2.5rem',
          }}
        >
          {subtitle}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {jobs.map((job, idx) => {
            const isExpanded = expandedJob === idx;
            return (
              <div
                key={idx}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  border: `2px solid ${isExpanded ? 'rgba(212, 175, 55, 0.4)' : '#e5e7eb'}`,
                  transition: 'all 0.3s ease',
                  boxShadow: isExpanded ? '0 8px 32px rgba(0, 0, 0, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.04)',
                  overflow: 'hidden',
                }}
              >
                {/* Job Header */}
                <div
                  onClick={() => setExpandedJob(isExpanded ? null : idx)}
                  style={{
                    padding: '2rem 2.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '2rem',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: '1.75rem',
                        fontWeight: '700',
                        color: 'var(--color-primary-dark)',
                        margin: 0,
                        marginBottom: '1rem',
                      }}
                    >
                      {job.title}
                    </h3>
                    <p
                      style={{
                        color: '#6B7280',
                        fontSize: '1.05rem',
                        margin: 0,
                      }}
                    >
                      {job.description}
                    </p>
                  </div>
                  <button
                    style={{
                      background: isExpanded ? 'var(--color-primary-dark)' : 'var(--color-accent-gold)',
                      color: isExpanded ? 'white' : 'var(--color-primary-dark)',
                      padding: '1rem 2.25rem',
                      borderRadius: '8px',
                      fontWeight: '600',
                      fontSize: '1rem',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {isExpanded ? 'Close' : 'View Details'}
                    <span style={{ marginLeft: '0.5rem', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-block', transition: 'transform 0.3s ease' }}>
                      ▼
                    </span>
                  </button>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div
                    style={{
                      padding: '2.5rem',
                      borderTop: '1px solid #e5e7eb',
                    }}
                  >
                    <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
                      Requirements
                    </h4>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', margin: '0 0 2rem 0', color: '#4b5563' }}>
                      {job.requirements.map((req, i) => (
                        <li key={i} style={{ marginBottom: '0.75rem', lineHeight: '1.7' }}>{req}</li>
                      ))}
                    </ul>

                    <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
                      Responsibilities
                    </h4>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', margin: '0 0 2rem 0', color: '#4b5563' }}>
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} style={{ marginBottom: '0.75rem', lineHeight: '1.7' }}>{resp}</li>
                      ))}
                    </ul>

                    <a
                      href={job.applyLink}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '1rem 2.5rem',
                        backgroundColor: 'var(--color-primary-dark)',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        fontWeight: '600',
                        fontSize: '1.05rem',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Apply for this Position
                      <span>→</span>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const EditableJobsGridSettings = () => {
  const {
    actions: { setProp },
    title,
    subtitle,
    jobs,
    backgroundColor,
  } = useNode((node) => ({
    title: node.data.props.title,
    subtitle: node.data.props.subtitle,
    jobs: node.data.props.jobs,
    backgroundColor: node.data.props.backgroundColor,
  }));

  return (
    <div>
      <div className="editor-settings-section">
        <label className="editor-settings-label">Section Title</label>
        <input
          type="text"
          className="editor-settings-input"
          value={title}
          onChange={(e) =>
            setProp((props: EditableJobsGridProps) => (props.title = e.target.value))
          }
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Subtitle</label>
        <textarea
          className="editor-settings-textarea"
          value={subtitle}
          onChange={(e) =>
            setProp((props: EditableJobsGridProps) => (props.subtitle = e.target.value))
          }
          rows={3}
        />
      </div>

      <ColorPicker
        label="Background Color"
        value={backgroundColor}
        onChange={(value) =>
          setProp((props: EditableJobsGridProps) => (props.backgroundColor = value))
        }
      />

      <div className="editor-settings-section">
        <label className="editor-settings-label">Jobs</label>
        {jobs.map((job: JobItem, idx: number) => (
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
                Job Title
              </label>
              <input
                type="text"
                className="editor-settings-input"
                value={job.title}
                onChange={(e) =>
                  setProp((props: EditableJobsGridProps) => {
                    if (props.jobs) {
                      props.jobs[idx].title = e.target.value;
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
                value={job.description}
                onChange={(e) =>
                  setProp((props: EditableJobsGridProps) => {
                    if (props.jobs) {
                      props.jobs[idx].description = e.target.value;
                    }
                  })
                }
                rows={2}
              />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#374151' }}>
                Requirements (comma-separated)
              </label>
              <textarea
                className="editor-settings-textarea"
                value={job.requirements.join(', ')}
                onChange={(e) =>
                  setProp((props: EditableJobsGridProps) => {
                    if (props.jobs) {
                      props.jobs[idx].requirements = e.target.value.split(',').map(s => s.trim());
                    }
                  })
                }
                rows={2}
              />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#374151' }}>
                Responsibilities (comma-separated)
              </label>
              <textarea
                className="editor-settings-textarea"
                value={job.responsibilities.join(', ')}
                onChange={(e) =>
                  setProp((props: EditableJobsGridProps) => {
                    if (props.jobs) {
                      props.jobs[idx].responsibilities = e.target.value.split(',').map(s => s.trim());
                    }
                  })
                }
                rows={2}
              />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#374151' }}>
                Apply Link
              </label>
              <input
                type="text"
                className="editor-settings-input"
                value={job.applyLink}
                onChange={(e) =>
                  setProp((props: EditableJobsGridProps) => {
                    if (props.jobs) {
                      props.jobs[idx].applyLink = e.target.value;
                    }
                  })
                }
              />
            </div>
            <button
              onClick={() =>
                setProp((props: EditableJobsGridProps) => {
                  if (props.jobs) {
                    props.jobs.splice(idx, 1);
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
              Remove Job
            </button>
          </div>
        ))}
        <button
          onClick={() =>
            setProp((props: EditableJobsGridProps) => {
              if (props.jobs) {
                props.jobs.push({
                  title: 'New Position',
                  description: 'Job description',
                  requirements: ['Requirement 1', 'Requirement 2'],
                  responsibilities: ['Responsibility 1', 'Responsibility 2'],
                  applyLink: '/contact',
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
          Add Job
        </button>
      </div>
    </div>
  );
};

EditableJobsGrid.craft = {
  props: {
    title: 'Available Positions',
    subtitle: 'Join a performance-driven team where you\'ll learn real sales, work with major brands, and have a clear path to advancement.',
    jobs: [
      {
        title: 'Sales Associate',
        description: 'Manage a portfolio of client accounts and ensure successful campaign delivery.',
        requirements: ['2+ years of experience', 'Strong communication skills', 'CRM proficiency'],
        responsibilities: ['Own client relationships', 'Monitor campaign performance', 'Identify upsell opportunities'],
        applyLink: '/contact',
      },
    ],
    backgroundColor: 'transparent',
  },
  related: {
    settings: EditableJobsGridSettings,
  },
};
