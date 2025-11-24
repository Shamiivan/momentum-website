import { useNode } from '@craftjs/core';
import { ColorPicker } from '../settings/ColorPicker';

export interface PhotoItem {
  url: string;
  alt: string;
}

export interface EditablePhotoGalleryProps {
  title?: string;
  subtitle?: string;
  photos?: PhotoItem[];
  columns?: number;
  backgroundColor?: string;
}

export const EditablePhotoGallery = ({
  title = 'Life at Momentum',
  subtitle = 'See what it\'s like to be part of our team.',
  photos = [
    { url: '/team-photo-1.jpg', alt: 'Team collaboration' },
    { url: '/team-photo-2.jpg', alt: 'Office environment' },
    { url: '/team-photo-3.jpg', alt: 'Team event' },
    { url: '/team-photo-4.jpg', alt: 'Team celebration' },
  ],
  columns = 4,
  backgroundColor = 'transparent',
}: EditablePhotoGalleryProps) => {
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
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            marginBottom: '3rem',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 3rem',
          }}
        >
          {subtitle}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: '1.5rem',
          }}
        >
          {photos.map((photo, idx) => (
            <div
              key={idx}
              style={{
                aspectRatio: '1',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
              }}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EditablePhotoGallerySettings = () => {
  const {
    actions: { setProp },
    title,
    subtitle,
    photos,
    columns,
    backgroundColor,
  } = useNode((node) => ({
    title: node.data.props.title,
    subtitle: node.data.props.subtitle,
    photos: node.data.props.photos,
    columns: node.data.props.columns,
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
            setProp((props: EditablePhotoGalleryProps) => (props.title = e.target.value))
          }
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Subtitle</label>
        <textarea
          className="editor-settings-textarea"
          value={subtitle}
          onChange={(e) =>
            setProp((props: EditablePhotoGalleryProps) => (props.subtitle = e.target.value))
          }
          rows={2}
        />
      </div>

      <div className="editor-settings-section">
        <label className="editor-settings-label">Columns</label>
        <input
          type="number"
          className="editor-settings-input"
          value={columns}
          min={2}
          max={6}
          onChange={(e) =>
            setProp(
              (props: EditablePhotoGalleryProps) => (props.columns = parseInt(e.target.value))
            )
          }
        />
      </div>

      <ColorPicker
        label="Background Color"
        value={backgroundColor}
        onChange={(value) =>
          setProp((props: EditablePhotoGalleryProps) => (props.backgroundColor = value))
        }
      />

      <div className="editor-settings-section">
        <label className="editor-settings-label">Photos</label>
        {photos.map((photo: PhotoItem, idx: number) => (
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
                Image URL
              </label>
              <input
                type="text"
                className="editor-settings-input"
                value={photo.url}
                onChange={(e) =>
                  setProp((props: EditablePhotoGalleryProps) => {
                    if (props.photos) {
                      props.photos[idx].url = e.target.value;
                    }
                  })
                }
              />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#374151' }}>
                Alt Text
              </label>
              <input
                type="text"
                className="editor-settings-input"
                value={photo.alt}
                onChange={(e) =>
                  setProp((props: EditablePhotoGalleryProps) => {
                    if (props.photos) {
                      props.photos[idx].alt = e.target.value;
                    }
                  })
                }
              />
            </div>
            <button
              onClick={() =>
                setProp((props: EditablePhotoGalleryProps) => {
                  if (props.photos) {
                    props.photos.splice(idx, 1);
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
              Remove Photo
            </button>
          </div>
        ))}
        <button
          onClick={() =>
            setProp((props: EditablePhotoGalleryProps) => {
              if (props.photos) {
                props.photos.push({
                  url: '/placeholder.jpg',
                  alt: 'New photo',
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
          Add Photo
        </button>
      </div>
    </div>
  );
};

EditablePhotoGallery.craft = {
  props: {
    title: 'Life at Momentum',
    subtitle: 'See what it\'s like to be part of our team.',
    photos: [
      { url: '/team-photo-1.jpg', alt: 'Team collaboration' },
      { url: '/team-photo-2.jpg', alt: 'Office environment' },
      { url: '/team-photo-3.jpg', alt: 'Team event' },
      { url: '/team-photo-4.jpg', alt: 'Team celebration' },
    ],
    columns: 4,
    backgroundColor: 'transparent',
  },
  related: {
    settings: EditablePhotoGallerySettings,
  },
};
