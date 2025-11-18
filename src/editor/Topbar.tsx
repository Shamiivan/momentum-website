import { useEditor } from '@craftjs/core';

interface TopbarProps {
  enabled: boolean;
  onToggleEdit: () => void;
  onSave?: (data: string) => void;
}

export const Topbar = ({ enabled, onToggleEdit, onSave }: TopbarProps) => {
  const { query, actions } = useEditor();

  const handleSave = () => {
    const json = query.serialize();
    console.log('Saved data:', json);
    if (onSave) {
      onSave(json);
    }
  };

  return (
    <div className="editor-topbar">
      <div className="editor-topbar-left">
        <h1 className="editor-topbar-title">Page Editor</h1>
      </div>

      <div className="editor-topbar-right">
        <button
          className={`editor-btn editor-btn-toggle ${enabled ? 'active' : ''}`}
          onClick={onToggleEdit}
        >
          {enabled ? 'Editing' : 'Preview'}
        </button>

        {enabled && (
          <>
            <button
              className="editor-btn"
              onClick={() => actions.history.undo()}
              style={{ background: '#333', color: 'white' }}
            >
              Undo
            </button>
            <button
              className="editor-btn"
              onClick={() => actions.history.redo()}
              style={{ background: '#333', color: 'white' }}
            >
              Redo
            </button>
          </>
        )}

        <button
          className="editor-btn editor-btn-save"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};
