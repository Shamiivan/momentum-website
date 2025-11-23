# Craft.js Integration Plan - Momentum Website

## Overview
This document outlines a comprehensive plan to integrate Craft.js into the Momentum website, enabling full visual editing capabilities for colors, text, fonts, margins, and paddings across all components.

## Current State Analysis

### Existing Setup
- ✅ Craft.js already installed (`@craftjs/core`, `@craftjs/utils`)
- ✅ Basic editor infrastructure in place (`EditorWrapper`, `Toolbox`, `SettingsPanel`)
- ✅ Some editable components created:
  - `EditableText` (text, fontSize, fontWeight, color)
  - `EditableContainer` (background, padding)
  - `EditableHero` (hero section)
  - `EditableStatCard` (stat cards)
- ✅ Authentication system for editor access
- ✅ Admin dashboard and protected routes

### Components Requiring Integration
- `B2BServicesSection` (currently being modified)
- Hero section (App.tsx)
- Social Proof section (partner logos)
- Service Overview section (stats grid)
- Case Study section
- FAQ section
- CTA sections
- Header and Footer components

---

## Phase 1: Foundation & Shared Components

### 1.1 Create Shared Settings Components
Build reusable settings UI components for consistent editing experience:

#### `ColorPicker.tsx`
- Color input with visual picker
- Support for hex, rgb, rgba values
- Recent colors palette
- Transparent option

```typescript
interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
}
```

#### `SpacingControl.tsx`
- Unified control for margin/padding
- Individual side controls (top, right, bottom, left)
- Link/unlink sides option
- Support for different units (px, rem, em, %)

```typescript
interface SpacingControlProps {
  label: string;
  value: string | SpacingValue;
  onChange: (spacing: string) => void;
  type: 'margin' | 'padding';
}

interface SpacingValue {
  top: string;
  right: string;
  bottom: string;
  left: string;
  linked: boolean;
}
```

#### `TypographyControl.tsx`
- Font family selector
- Font size input
- Font weight selector
- Line height control
- Letter spacing control
- Text alignment options

```typescript
interface TypographyControlProps {
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  onChange: (key: string, value: string) => void;
}
```

#### `BorderControl.tsx`
- Border width input
- Border style selector (solid, dashed, dotted, none)
- Border color picker
- Border radius control (with corner-specific options)

```typescript
interface BorderControlProps {
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  borderRadius?: string;
  onChange: (key: string, value: string) => void;
}
```

#### `LayoutControl.tsx`
- Flex direction (row, column)
- Gap control
- Align items
- Justify content
- Flex wrap toggle

```typescript
interface LayoutControlProps {
  flexDirection?: 'row' | 'column';
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
  flexWrap?: 'wrap' | 'nowrap';
  onChange: (key: string, value: string) => void;
}
```

### 1.2 Enhance Base Editable Components

#### `EditableText.tsx` (Enhance Existing)
**Current Props:**
- text, fontSize, fontWeight, color, tag

**Add:**
- fontFamily
- lineHeight
- letterSpacing
- textAlign
- margin
- padding
- backgroundColor

#### `EditableContainer.tsx` (Enhance Existing)
**Current Props:**
- background, padding

**Add:**
- margin
- borderWidth, borderStyle, borderColor, borderRadius
- flexDirection, gap, alignItems, justifyContent
- minHeight, maxWidth
- boxShadow

#### `EditableButton.tsx` (Create New)
```typescript
interface EditableButtonProps {
  text: string;
  href?: string;
  backgroundColor: string;
  color: string;
  fontSize: string;
  fontWeight: string;
  padding: string;
  margin: string;
  borderRadius: string;
  borderWidth: string;
  borderColor: string;
  hoverBackgroundColor: string;
  hoverColor: string;
  boxShadow: string;
}
```

#### `EditableImage.tsx` (Create New)
```typescript
interface EditableImageProps {
  src: string;
  alt: string;
  width: string;
  height: string;
  objectFit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  borderRadius: string;
  margin: string;
  boxShadow: string;
}
```

#### `EditableSection.tsx` (Create New)
Wrapper for major page sections:
```typescript
interface EditableSectionProps {
  backgroundColor: string;
  backgroundImage?: string;
  padding: string;
  margin: string;
  minHeight: string;
  children: React.ReactNode;
}
```

#### `EditableGrid.tsx` (Create New)
For layouts like stats, cards:
```typescript
interface EditableGridProps {
  columns: number;
  gap: string;
  alignItems: string;
  justifyContent: string;
  children: React.ReactNode;
}
```

---

## Phase 2: Component-Specific Editable Versions

### 2.1 Hero Section - `EditableHero.tsx`
**Enhance existing component with:**

#### Main Container
- Background color/gradient
- Background image
- Padding, margin
- Min height

#### Title (Revenue Counter)
- Text content
- Font size, weight, family
- Color
- Margin, padding
- Animation toggle

#### Subtitle
- Text content
- Font size, weight, family
- Color
- Line height
- Margin, padding

#### CTA Buttons
- Use `EditableButton` components
- Individual styling for primary/secondary

#### Scroll Indicator
- Color
- Size
- Show/hide toggle

### 2.2 B2B Services Section - `EditableB2BServicesSection.tsx`

#### Section Container
- Background color
- Padding (top, bottom, left, right)
- Margin
- Border (top, bottom)

#### Header
- Title text, color, size, weight
- Description text, color, size, line height
- Alignment
- Max width
- Spacing

#### Service Cards (Left Side)
- Card background color
- Border color, width, style
- Border radius
- Padding
- Gap between cards
- Hover background color
- Active background color

#### Service Card Content
- Icon color
- Title text, color, size, weight
- Arrow color

#### Content Card (Right Side)
- Background (gradient or solid)
- Border color, width, style
- Border radius
- Padding
- Box shadow
- Headline text, color, size, weight
- Body text, color, size, line height
- CTA button styling (use `EditableButton`)

### 2.3 Stats/Metrics - `EditableStatCard.tsx`
**Enhance existing component with:**

#### Container
- Background color
- Padding, margin
- Border
- Border radius
- Box shadow

#### Number
- Text content
- Color
- Font size, weight, family
- Margin bottom

#### Label
- Text content
- Color
- Font size, weight
- Margin bottom

#### Helper Text
- Text content
- Color
- Font size

### 2.4 Social Proof Section - `EditableSocialProof.tsx`

#### Section Container
- Background color
- Padding, margin

#### Trusted Label
- Text content
- Font size, weight, color
- Margin bottom

#### Partner Logos
- Individual logo upload
- Logo size (width, height)
- Filter effects (grayscale, opacity)
- Hover effects
- Gap between logos
- Marquee speed control

### 2.5 Case Study Section - `EditableCaseStudy.tsx`

#### Section Container
- Background color
- Padding, margin

#### Grid Layout
- Gap between columns
- Column ratio (1:1, 1:2, 2:1)

#### Visual Side
- Image upload
- Image sizing
- Border radius

#### Content Side
- Title text, color, size, weight
- Body text, color, size, line height
- CTA button (use `EditableButton`)
- Spacing between elements

### 2.6 FAQ Section - `EditableFAQSection.tsx`

#### Section Container
- Background color
- Padding, margin

#### Section Title
- Text content
- Color, size, weight
- Alignment
- Margin bottom

#### FAQ Item
- Question text, color, size, weight
- Answer text, color, size, line height
- Background color
- Border
- Padding
- Border radius
- Active state styles
- Icon color (+ / -)

### 2.7 CTA Section - `EditableCTA.tsx`

#### Container
- Background color/gradient
- Background image
- Padding, margin
- Text alignment

#### Title
- Text content
- Color, size, weight
- Margin bottom

#### Subtitle
- Text content
- Color, size, line height
- Margin bottom

#### CTA Button
- Use `EditableButton` component

---

## Phase 3: Advanced Features

### 3.1 Theme System

#### Global CSS Variables Editor
Create `ThemeEditor.tsx`:
- Edit CSS variables (--color-primary-dark, --color-accent-gold, etc.)
- Live preview of changes across all components
- Save theme configurations
- Reset to defaults

#### Typography Presets
- Define font pairings (heading + body)
- Font size scales
- Line height scales
- Quick apply to all text components

#### Spacing Scale
- Define consistent spacing values
- T-shirt sizing (xs, sm, md, lg, xl)
- Apply to margins and paddings

#### Color Palette Manager
- Define brand colors
- Create color schemes
- Automatically generate hover/active states
- Export CSS variables

### 3.2 Component Presets

#### Save Component Styles
- Save current component configuration as preset
- Name and categorize presets
- Preview thumbnails

#### Quick Apply
- One-click apply saved styles
- Apply to similar component types
- Batch apply to multiple components

#### Import/Export
- Export presets as JSON
- Share presets between projects
- Import community presets

### 3.3 Responsive Controls

#### Breakpoint-Specific Settings
- Define values per breakpoint (mobile, tablet, desktop)
- Visual breakpoint selector
- Preview at different screen sizes

#### Mobile/Tablet/Desktop Preview
- Toggle between device previews
- Rotate device (portrait/landscape)
- Popular device presets

#### Responsive Typography
- Fluid typography calculator
- Clamp values
- Viewport-based sizing

---

## Phase 4: Refactoring Strategy

### 4.1 Conversion Pattern

#### Step 1: Create Editable Version
```typescript
// Original: src/components/MyComponent.tsx
const MyComponent = ({ title, description }) => (
  <div className="my-component">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

// Editable: src/editor/components/EditableMyComponent.tsx
const EditableMyComponent = ({
  title = 'Default Title',
  titleColor = '#000',
  titleSize = '2rem',
  titleWeight = '700',
  titleMargin = '0 0 1rem 0',
  description = 'Default description',
  descriptionColor = '#333',
  descriptionSize = '1rem',
  descriptionLineHeight = '1.6',
  backgroundColor = '#fff',
  padding = '2rem',
  margin = '0'
}) => {
  const {
    connectors: { connect, drag },
    selected
  } = useNode((state) => ({
    selected: state.events.selected
  }));

  return (
    <div
      ref={(ref) => ref && connect(drag(ref))}
      style={{
        backgroundColor,
        padding,
        margin,
        border: selected ? '2px dashed #d4af37' : 'none',
        outline: selected ? '2px solid rgba(212, 175, 55, 0.3)' : 'none',
        position: 'relative'
      }}
    >
      <h2 style={{
        color: titleColor,
        fontSize: titleSize,
        fontWeight: titleWeight,
        margin: titleMargin
      }}>
        {title}
      </h2>
      <p style={{
        color: descriptionColor,
        fontSize: descriptionSize,
        lineHeight: descriptionLineHeight
      }}>
        {description}
      </p>
    </div>
  );
};
```

#### Step 2: Create Settings Component
```typescript
const EditableMyComponentSettings = () => {
  const {
    actions: { setProp },
    title,
    titleColor,
    titleSize,
    // ... other props
  } = useNode((node) => ({
    title: node.data.props.title,
    titleColor: node.data.props.titleColor,
    titleSize: node.data.props.titleSize,
    // ... other props
  }));

  return (
    <div>
      <h4>Title</h4>
      <input
        value={title}
        onChange={(e) => setProp((props) => props.title = e.target.value)}
      />
      <ColorPicker
        label="Title Color"
        value={titleColor}
        onChange={(color) => setProp((props) => props.titleColor = color)}
      />
      {/* ... other controls */}
    </div>
  );
};
```

#### Step 3: Register Component
```typescript
EditableMyComponent.craft = {
  displayName: 'My Component',
  props: {
    title: 'Default Title',
    titleColor: '#000',
    // ... other defaults
  },
  related: {
    settings: EditableMyComponentSettings
  }
};
```

### 4.2 Migration Approach

1. **Create editable versions** alongside existing components
2. **Use in EditorWrapper** for editing mode
3. **Keep original components** for production rendering
4. **Serialize edited content** to JSON
5. **Conditionally render** based on mode

---

## Phase 5: State Management & Persistence

### 5.1 Save/Load System

#### Backend API Endpoints
```typescript
POST   /api/content/save
GET    /api/content/load/:pageId
GET    /api/content/versions/:pageId
POST   /api/content/restore/:pageId/:version
```

#### Save Handler
```typescript
const handleSave = async () => {
  const json = query.serialize();
  await fetch('/api/content/save', {
    method: 'POST',
    body: JSON.stringify({ pageId, content: json })
  });
};
```

### 5.2 Publishing Workflow

- Draft/published states
- Preview mode
- Version control
- Publish action

---

## Implementation Priorities

### High Priority (Week 1-2)
1. Create shared settings components (ColorPicker, SpacingControl, TypographyControl)
2. Enhance existing EditableText and EditableContainer
3. Create EditableButton component
4. Make B2BServicesSection editable
5. Create EditableSection wrapper

### Medium Priority (Week 3-4)
1. Section-specific components (Hero, Stats, Social Proof, Case Study)
2. Image editing (EditableImage)
3. FAQ and CTA sections
4. Save/load functionality

### Low Priority (Week 5+)
1. Theme system
2. Component presets
3. Advanced responsive controls
4. Animation editor

---

## File Structure

```
src/
├── editor/
│   ├── components/
│   │   ├── base/                    # Reusable base components
│   │   │   ├── EditableText.tsx
│   │   │   ├── EditableContainer.tsx
│   │   │   ├── EditableButton.tsx
│   │   │   ├── EditableImage.tsx
│   │   │   ├── EditableSection.tsx
│   │   │   └── EditableGrid.tsx
│   │   │
│   │   ├── sections/                # Section-specific components
│   │   │   ├── EditableHero.tsx
│   │   │   ├── EditableB2BServices.tsx
│   │   │   ├── EditableStats.tsx
│   │   │   ├── EditableSocialProof.tsx
│   │   │   ├── EditableCaseStudy.tsx
│   │   │   ├── EditableFAQ.tsx
│   │   │   └── EditableCTA.tsx
│   │   │
│   │   └── settings/                # Shared settings controls
│   │       ├── ColorPicker.tsx
│   │       ├── SpacingControl.tsx
│   │       ├── TypographyControl.tsx
│   │       ├── BorderControl.tsx
│   │       └── LayoutControl.tsx
│   │
│   ├── EditorWrapper.tsx
│   ├── Toolbox.tsx
│   ├── SettingsPanel.tsx
│   └── ...
│
└── components/                      # Original static components
    └── ...
```

---

## Key Benefits

### Developer Experience
- ✅ Reusable settings components
- ✅ Consistent editing interface
- ✅ Type-safe with TypeScript
- ✅ Easy to extend
- ✅ Clear separation of concerns

### User Experience
- ✅ Visual, intuitive editing
- ✅ Real-time preview
- ✅ Drag-and-drop
- ✅ Undo/redo support
- ✅ No coding required

### Styling Control
- ✅ Full color control (backgrounds, text, borders)
- ✅ Complete typography control
- ✅ Spacing control (margin, padding)
- ✅ Border styling
- ✅ Layout control (flex, alignment)
- ✅ Theme-level changes

---

## Timeline Estimate

- **Week 1-2:** Foundation (shared settings, enhanced base components)
- **Week 3-4:** Core components (sections, B2B Services)
- **Week 5-6:** Remaining sections (FAQ, CTA, social proof)
- **Week 7-8:** Save/load & publishing workflow
- **Week 9-10:** Polish, testing, documentation

**Total: ~10 weeks for full implementation**

---

## Success Metrics

- ✅ All major sections editable
- ✅ Full styling control (color, text, spacing)
- ✅ Save/load working
- ✅ Publish workflow complete
- ✅ Documentation finished
- ✅ No production regressions
- ✅ Editor loads in < 3 seconds
- ✅ Changes save in < 1 second

---

*Last Updated: 2025-11-23*
