import { useNode } from '@craftjs/core';
import { ColorPicker } from '../settings/ColorPicker';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface EditableTeamGridProps {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
  backgroundColor?: string;
}

export const EditableTeamGrid = ({
  title = 'Meet Our Founders',
  subtitle = 'The visionaries behind our success.',
  members = [
    {
      name: 'John Doe',
      role: 'Co-Founder & CEO',
      bio: 'Over 15 years of experience in multi-channel sales and business development. Led partnerships with Fortune 500 companies generating $40M+ in revenue.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
    },
    {
      name: 'Jane Smith',
      role: 'Co-Founder & COO',
      bio: 'Expert in Quebec market expansion and operational excellence. Built and trained sales teams of 500+ professionals across North America.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
    },
  ],
  backgroundColor = 'transparent',
}: EditableTeamGridProps) => {
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
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'var(--color-primary-dark)',
            textAlign: 'center',
            marginBottom: '1rem',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          {subtitle}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {members.map((member, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--color-primary-dark)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--color-accent-gold)',
                    fontWeight: '500',
                    marginBottom: '1rem',
                  }}
                >
                  {member.role}
                </p>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#6B7280',
                    lineHeight: '1.6',
                  }}
                >
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EditableTeamGridSettings = () => {
  const {
    actions: { setProp },
    title,
    subtitle,
    members,
    backgroundColor,
  } = useNode((node) => ({
    title: node.data.props.title,
    subtitle: node.data.props.subtitle,
    members: node.data.props.members,
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
            setProp((props: EditableTeamGridProps) => (props.title = e.target.value))
          }
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Subtitle</label>
        <input
          type="text"
          className="editor-settings-input"
          value={subtitle}
          onChange={(e) =>
            setProp((props: EditableTeamGridProps) => (props.subtitle = e.target.value))
          }
        />
      </div>

      <ColorPicker
        label="Background Color"
        value={backgroundColor}
        onChange={(value) =>
          setProp((props: EditableTeamGridProps) => (props.backgroundColor = value))
        }
      />

      <div className="editor-settings-section">
        <label className="editor-settings-label">Team Members</label>
        {members.map((member: TeamMember, idx: number) => (
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
                Name
              </label>
              <input
                type="text"
                className="editor-settings-input"
                value={member.name}
                onChange={(e) =>
                  setProp((props: EditableTeamGridProps) => {
                    if (props.members) {
                      props.members[idx].name = e.target.value;
                    }
                  })
                }
              />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#374151' }}>
                Role
              </label>
              <input
                type="text"
                className="editor-settings-input"
                value={member.role}
                onChange={(e) =>
                  setProp((props: EditableTeamGridProps) => {
                    if (props.members) {
                      props.members[idx].role = e.target.value;
                    }
                  })
                }
              />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#374151' }}>
                Bio
              </label>
              <textarea
                className="editor-settings-textarea"
                value={member.bio}
                onChange={(e) =>
                  setProp((props: EditableTeamGridProps) => {
                    if (props.members) {
                      props.members[idx].bio = e.target.value;
                    }
                  })
                }
                rows={3}
              />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#374151' }}>
                Image URL
              </label>
              <input
                type="text"
                className="editor-settings-input"
                value={member.image}
                onChange={(e) =>
                  setProp((props: EditableTeamGridProps) => {
                    if (props.members) {
                      props.members[idx].image = e.target.value;
                    }
                  })
                }
              />
            </div>
            <button
              onClick={() =>
                setProp((props: EditableTeamGridProps) => {
                  if (props.members) {
                    props.members.splice(idx, 1);
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
              Remove Member
            </button>
          </div>
        ))}
        <button
          onClick={() =>
            setProp((props: EditableTeamGridProps) => {
              if (props.members) {
                props.members.push({
                  name: 'New Member',
                  role: 'Role',
                  bio: 'Bio goes here',
                  image: 'https://via.placeholder.com/400',
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
          Add Team Member
        </button>
      </div>
    </div>
  );
};

EditableTeamGrid.craft = {
  props: {
    title: 'Meet Our Founders',
    subtitle: 'The visionaries behind our success.',
    members: [
      {
        name: 'John Doe',
        role: 'Co-Founder & CEO',
        bio: 'Over 15 years of experience in multi-channel sales and business development. Led partnerships with Fortune 500 companies generating $40M+ in revenue.',
        image:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
      },
      {
        name: 'Jane Smith',
        role: 'Co-Founder & COO',
        bio: 'Expert in Quebec market expansion and operational excellence. Built and trained sales teams of 500+ professionals across North America.',
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
      },
    ],
    backgroundColor: 'transparent',
  },
  related: {
    settings: EditableTeamGridSettings,
  },
};
