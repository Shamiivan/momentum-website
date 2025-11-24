import { Editor, Frame, Element } from '@craftjs/core';
import { useState, useEffect } from 'react';
import { Toolbox } from './Toolbox';
import { SettingsPanel } from './SettingsPanel';
import { Topbar } from './Topbar';
import { EditableText } from './components/EditableText';
import { EditableContainer } from './components/EditableContainer';
import { EditableHero } from './components/EditableHero';
import { EditableStatCard } from './components/EditableStatCard';
import { EditableButton } from './components/base/EditableButton';
import { EditableStatsGrid } from './components/sections/EditableStatsGrid';
import { EditableServicesSection } from './components/sections/EditableServicesSection';
import { EditableCaseStudy } from './components/sections/EditableCaseStudy';
import { EditableFAQ } from './components/sections/EditableFAQ';
import { EditableCTA } from './components/sections/EditableCTA';
import { EditableTeamGrid } from './components/sections/EditableTeamGrid';
import { EditableValuesGrid } from './components/sections/EditableValuesGrid';
import { useDisableAnimations } from './useDisableAnimations';
import { getHomeTemplate } from './templates/homeTemplate';
import { getAboutTemplate } from './templates/aboutTemplate';
import '../App.css'; // Import main site styles
import './EditorWrapper.css';

interface EditorWrapperProps {
  onSave?: (data: string) => void;
  initialData?: string;
  pageId?: string;
}

export const EditorWrapper = ({ onSave, initialData, pageId }: EditorWrapperProps) => {
  const [enabled, setEnabled] = useState(true);

  // Load template if no initialData based on pageId
  const getInitialData = () => {
    if (initialData) return initialData;
    if (pageId === 'home') return getHomeTemplate();
    if (pageId === 'about') return getAboutTemplate();
    return undefined;
  };

  // Disable GSAP ScrollTrigger animations in editor
  useDisableAnimations();

  // Prevent body scroll when editor is active
  useEffect(() => {
    // Store original overflow
    const originalOverflow = document.body.style.overflow;

    // Disable body scroll
    document.body.style.overflow = 'hidden';

    // Cleanup
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className="editor-wrapper">
      <Editor
        resolver={{
          EditableText,
          EditableContainer,
          EditableHero,
          EditableStatCard,
          EditableButton,
          EditableStatsGrid,
          EditableServicesSection,
          EditableCaseStudy,
          EditableFAQ,
          EditableCTA,
          EditableTeamGrid,
          EditableValuesGrid,
        }}
        enabled={enabled}
      >
        <Topbar
          enabled={enabled}
          onToggleEdit={() => setEnabled(!enabled)}
          onSave={onSave}
        />

        <div className="editor-content">
          {enabled && (
            <div className="editor-sidebar">
              <Toolbox />
            </div>
          )}

          <div className="editor-canvas">
            <Frame data={getInitialData()}>
              <Element
                is={EditableContainer}
                canvas
                background="transparent"
                padding="2rem"
              >
                {!initialData && <EditableHero />}
              </Element>
            </Frame>
          </div>

          {enabled && (
            <div className="editor-settings">
              <SettingsPanel />
            </div>
          )}
        </div>
      </Editor>
    </div>
  );
};
