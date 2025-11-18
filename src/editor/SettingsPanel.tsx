import { useEditor } from '@craftjs/core';

export const SettingsPanel = () => {
  const { selected, actions } = useEditor((state) => {
    const currentNodeId = Array.from(state.events.selected)[0];

    let selected;
    if (currentNodeId && state.nodes[currentNodeId]) {
      const node = state.nodes[currentNodeId];
      selected = {
        id: currentNodeId,
        name: node.data.name,
        settings: node.related?.settings,
        isDeletable: node.data.custom?.isDeletable !== false,
      };
    }

    return { selected };
  });

  return (
    <div className="editor-settings-panel">
      <h3 className="editor-settings-title">Settings</h3>

      {selected ? (
        <>
          <div style={{
            padding: '0.75rem',
            background: '#f8f8f8',
            borderRadius: '6px',
            marginBottom: '1.5rem',
            fontSize: '0.9rem'
          }}>
            <strong>Selected:</strong> {selected.name}
          </div>

          {selected.settings && typeof selected.settings === 'function' ? (
            (() => {
              const SettingsComponent = selected.settings as React.ComponentType;
              return <SettingsComponent />;
            })()
          ) : (
            <p className="editor-settings-empty">
              No settings available for this component
            </p>
          )}

          {selected.isDeletable && (
            <button
              onClick={() => actions.delete(selected.id)}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                marginTop: '1.5rem',
                fontWeight: 500
              }}
            >
              Delete Component
            </button>
          )}
        </>
      ) : (
        <p className="editor-settings-empty">
          Select a component to edit its settings
        </p>
      )}
    </div>
  );
};
