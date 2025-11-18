# Craft.js Page Editor - Setup Guide

## 🎉 What's Been Implemented

You now have a **Webflow-like visual page editor** built with Craft.js that allows non-technical users to edit your website content while **preserving all your custom styles**.

## 🚀 Quick Start

### 1. Start the Development Server

```bash
pnpm run dev
```

### 2. Access the Editor

Navigate to: **http://localhost:5173/admin/login**

**Login Credentials:**
- Password: `momentum2024`

⚠️ **IMPORTANT**: Change this password in `src/editor/AuthContext.tsx` before deploying to production!

### 3. Start Editing

1. Click on "Edit Home Page", "Edit Services Page", or "Edit About Page"
2. Drag components from the left sidebar onto the canvas
3. Click any component to edit its properties in the right sidebar
4. Toggle between "Editing" and "Preview" mode
5. Click "Save" to persist your changes

---

## 📋 Features

### ✅ What You Can Do

- **Drag & drop components** - Build pages visually
- **Edit text content** - Change headlines, paragraphs, button text
- **Customize properties** - Modify colors, sizes, spacing
- **Preview mode** - See exactly how pages will look
- **Undo/Redo** - Revert changes easily
- **Save/Load** - Changes persist in browser localStorage
- **Export/Import** - Backup your page configurations

### ✅ Components Available

1. **Container** - Flexible layout container
2. **Text Block** - Customizable text with formatting options
3. **Hero Section** - Full hero with title, subtitle, and CTAs
4. **Stat Card** - Display key metrics/statistics

### ✅ Your Styles Are Protected

- All your existing CSS remains intact
- Only content and props are editable
- No risk of breaking your design system
- Users can't modify core styling without your permission

---

## 🗂️ File Structure

```
src/editor/
├── EditorWrapper.tsx          # Main editor container
├── EditorWrapper.css          # Editor UI styles
├── Topbar.tsx                 # Top bar with save/undo/redo
├── Toolbox.tsx                # Left sidebar with components
├── SettingsPanel.tsx          # Right sidebar for editing
├── AdminDashboard.tsx         # Dashboard home page
├── EditorPage.tsx             # Individual page editor
├── LoginPage.tsx              # Admin authentication
├── AuthContext.tsx            # Auth state management
├── ProtectedRoute.tsx         # Route protection
├── persistence.ts             # Save/load functionality
└── components/
    ├── EditableText.tsx       # Text component
    ├── EditableContainer.tsx  # Container component
    ├── EditableHero.tsx       # Hero section
    └── EditableStatCard.tsx   # Stat card
```

---

## 🔧 How to Add More Components

### Step 1: Create the Editable Component

```tsx
// src/editor/components/EditableButton.tsx
import { useNode } from '@craftjs/core';

interface EditableButtonProps {
  text?: string;
  link?: string;
}

export const EditableButton = ({
  text = 'Click Me',
  link = '#',
}: EditableButtonProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <a
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      href={link}
      className="btn-primary-new" // Your existing button styles!
    >
      {text}
    </a>
  );
};

// Settings panel
const EditableButtonSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props as EditableButtonProps,
  }));

  return (
    <div>
      <div className="editor-settings-section">
        <label className="editor-settings-label">Button Text</label>
        <input
          type="text"
          className="editor-settings-input"
          value={props.text}
          onChange={(e) =>
            setProp((p: EditableButtonProps) => (p.text = e.target.value))
          }
        />
      </div>
      <div className="editor-settings-section">
        <label className="editor-settings-label">Link URL</label>
        <input
          type="text"
          className="editor-settings-input"
          value={props.link}
          onChange={(e) =>
            setProp((p: EditableButtonProps) => (p.link = e.target.value))
          }
        />
      </div>
    </div>
  );
};

// Register settings
EditableButton.craft = {
  props: {
    text: 'Click Me',
    link: '#',
  },
  related: {
    settings: EditableButtonSettings,
  },
};
```

### Step 2: Register in EditorWrapper

```tsx
// src/editor/EditorWrapper.tsx
import { EditableButton } from './components/EditableButton';

// Add to resolver:
resolver={{
  EditableText,
  EditableContainer,
  EditableHero,
  EditableStatCard,
  EditableButton, // <-- Add here
}}
```

### Step 3: Add to Toolbox

```tsx
// src/editor/Toolbox.tsx
import { EditableButton } from './components/EditableButton';

// Add new div in toolbox:
<div
  ref={(ref) => {
    if (ref) {
      connectors.create(ref, <EditableButton />);
    }
  }}
  className="editor-component-item"
>
  <h4 className="editor-component-name">Button</h4>
  <p className="editor-component-desc">Clickable button with link</p>
</div>
```

---

## 💾 Data Storage

Currently, pages are saved in **browser localStorage**:
- ✅ Works immediately without backend setup
- ✅ Fast and simple
- ⚠️ Data is browser-specific (not synced across devices)
- ⚠️ Limited storage (~5-10MB)

### Upgrading to Backend Storage

To use a real database instead of localStorage:

1. **Update `src/editor/persistence.ts`:**

```typescript
export const savePage = async (pageId: string, content: string): Promise<void> => {
  await fetch(`/api/pages/${pageId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  });
};

export const loadPage = async (pageId: string): Promise<string | null> => {
  const response = await fetch(`/api/pages/${pageId}`);
  if (!response.ok) return null;
  const data = await response.json();
  return data.content;
};
```

2. **Create your backend API endpoints:**
   - `POST /api/pages/:id` - Save page
   - `GET /api/pages/:id` - Load page
   - `GET /api/pages` - List all pages
   - `DELETE /api/pages/:id` - Delete page

3. **Update EditorPage.tsx to handle async loading**

---

## 🔒 Security Considerations

### Current Setup (Demo/Development)
- Simple password authentication
- No user management
- Session-based (cleared on browser close)

### For Production

1. **Replace password auth with proper authentication:**
   - OAuth (Google, GitHub, etc.)
   - JWT tokens
   - Session management with backend

2. **Add role-based access control:**
   ```typescript
   interface User {
     id: string;
     role: 'admin' | 'editor' | 'viewer';
   }
   ```

3. **Secure your endpoints:**
   - Add CSRF protection
   - Validate all inputs
   - Rate limit API calls

4. **Change the admin password:**
   ```typescript
   // src/editor/AuthContext.tsx
   const ADMIN_PASSWORD = 'your-secure-password'; // Change this!
   ```

---

## 🎨 Customizing the Editor UI

All editor styles are in `src/editor/EditorWrapper.css`. You can customize:

- **Color scheme** - Change `#d4af37` (gold) to your brand color
- **Sidebar widths** - Adjust `.editor-sidebar` and `.editor-settings`
- **Component cards** - Modify `.editor-component-item`
- **Topbar** - Customize `.editor-topbar`

---

## 🐛 Troubleshooting

### "Page not saving"
- Check browser console for errors
- Verify localStorage is enabled
- Try a different browser

### "Components not draggable"
- Ensure you're in "Editing" mode (not Preview)
- Check that component is registered in EditorWrapper resolver
- Verify ref callbacks are set correctly

### "Settings panel empty"
- Make sure component has `.craft` configuration
- Check that `settings` property points to your settings component
- Verify component is selected (click on it)

### "Build errors"
- Run `pnpm install` to ensure all dependencies are installed
- Check TypeScript errors: `pnpm run build`
- Clear cache: `rm -rf node_modules/.vite`

---

## 📚 Resources

- **Craft.js Documentation**: https://craft.js.org/
- **React Documentation**: https://react.dev/
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/

---

## 🎯 Next Steps

### Recommended Enhancements

1. **Add more components:**
   - Service cards
   - FAQ accordion
   - Image gallery
   - Contact forms

2. **Implement backend storage:**
   - Set up database (PostgreSQL, MongoDB, etc.)
   - Create REST or GraphQL API
   - Add version history

3. **Improve authentication:**
   - Multi-user support
   - Role-based permissions
   - Password reset flow

4. **Add media management:**
   - Image upload
   - Media library
   - CDN integration

5. **Enable collaboration:**
   - Real-time editing
   - Change history
   - Approval workflows

---

## 💡 Tips for Non-Technical Users

### How to Edit a Page

1. **Login** at `/admin/login`
2. **Select a page** to edit from the dashboard
3. **Click "Edit"** to open the visual editor
4. **Drag components** from the left sidebar
5. **Click components** on the canvas to edit them
6. **Use the right panel** to change text, colors, etc.
7. **Click "Save"** when done
8. **Toggle "Preview"** to see the final result

### Best Practices

- ✅ Save frequently
- ✅ Use Preview mode to check your work
- ✅ Keep a consistent style (don't mix too many fonts/colors)
- ✅ Test on mobile (resize your browser)
- ⚠️ Don't delete components you're unsure about (use Undo instead)

---

**🎉 Congratulations! You now have a fully functional visual page editor with 100% style control.**
