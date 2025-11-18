import { useEditor, Element } from '@craftjs/core';
import { EditableText } from './components/EditableText';
import { EditableContainer } from './components/EditableContainer';
import { EditableHero } from './components/EditableHero';
import { EditableStatCard } from './components/EditableStatCard';

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div className="editor-toolbox">
      <h3 className="editor-toolbox-title">Components</h3>
      <div className="editor-toolbox-components">
        <div
          ref={(ref) => {
            if (ref) {
              connectors.create(
                ref,
                <Element is={EditableContainer} canvas>
                  <EditableText text="Drag components here" />
                </Element>
              );
            }
          }}
          className="editor-component-item"
        >
          <h4 className="editor-component-name">Container</h4>
          <p className="editor-component-desc">Flexible container for other components</p>
        </div>

        <div
          ref={(ref) => {
            if (ref) {
              connectors.create(
                ref,
                <EditableText text="Edit this text" fontSize="1rem" tag="p" />
              );
            }
          }}
          className="editor-component-item"
        >
          <h4 className="editor-component-name">Text Block</h4>
          <p className="editor-component-desc">Customizable text element</p>
        </div>

        <div
          ref={(ref) => {
            if (ref) {
              connectors.create(ref, <EditableHero />);
            }
          }}
          className="editor-component-item"
        >
          <h4 className="editor-component-name">Hero Section</h4>
          <p className="editor-component-desc">Full hero with title, subtitle & CTAs</p>
        </div>

        <div
          ref={(ref) => {
            if (ref) {
              connectors.create(ref, <EditableStatCard />);
            }
          }}
          className="editor-component-item"
        >
          <h4 className="editor-component-name">Stat Card</h4>
          <p className="editor-component-desc">Display key metrics</p>
        </div>
      </div>
    </div>
  );
};
