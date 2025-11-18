# Craft.js Editor - Troubleshooting Guide

## 🐛 Common Issues & Solutions

---

## Issue: ScrollY / Delta Errors with GSAP ScrollTrigger

### **Symptoms:**
- Console errors mentioning "scrollY", "delta", or ScrollTrigger
- Page jumps or scrolling behaves strangely in editor
- Components appear/disappear unexpectedly
- Transform/opacity issues

### **Root Cause:**
GSAP ScrollTrigger animations conflict with Craft.js's dynamic DOM manipulation. When Craft.js moves/updates components, ScrollTrigger tries to recalculate scroll positions, causing errors.

### **✅ Solution (Already Implemented):**

The following fixes have been applied:

1. **Disabled ScrollTrigger in Editor:**
   - `useDisableAnimations` hook kills all ScrollTriggers when editor loads
   - All animated elements are forced to `opacity: 1` and `transform: none`

2. **Fixed Scroll Container:**
   - Editor wrapper is `position: fixed` to prevent body scroll
   - Only `.editor-canvas` scrolls (isolated from GSAP)
   - Body overflow is set to `hidden` when editor is active

3. **CSS Overrides:**
   - All editor components have inline styles to override GSAP transforms
   - `will-change: auto` prevents GPU acceleration conflicts
   - All animations disabled via CSS

### **How It Works:**

```
Public Site (/)              Editor (/admin/editor/*)
├─ GSAP ScrollTrigger ✅    ├─ GSAP Disabled ✅
├─ Scroll animations ✅      ├─ No animations ✅
└─ Normal scrolling ✅       └─ Canvas-only scroll ✅
```

### **If Issues Persist:**

1. **Clear browser cache:**
   ```
   Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
   ```

2. **Check browser console:**
   - Open DevTools (F12)
   - Look for errors in Console tab
   - Share error messages for debugging

3. **Restart dev server:**
   ```bash
   # Kill server (Ctrl+C)
   pnpm run dev
   ```

---

## Issue: Components Not Draggable

### **Symptoms:**
- Can't drag components from toolbox
- Components don't respond to drag events
- Cursor doesn't change when hovering

### **Solutions:**

1. **Ensure you're in Edit mode:**
   - Check that top bar shows "Editing" (not "Preview")
   - Click "Editing/Preview" toggle if needed

2. **Check component registration:**
   ```tsx
   // EditorWrapper.tsx - verify component is in resolver
   resolver={{
     EditableText,      // ✅ Must be here
     EditableContainer, // ✅ Must be here
     YourComponent,     // Add your component
   }}
   ```

3. **Verify ref callback:**
   ```tsx
   // Component must use this pattern
   ref={(ref) => {
     if (ref) {
       connect(drag(ref));
     }
   }}
   ```

---

## Issue: Settings Panel Empty

### **Symptoms:**
- Click component but settings panel shows "No settings available"
- Can't edit component properties

### **Solutions:**

1. **Check component has `.craft` configuration:**
   ```tsx
   YourComponent.craft = {
     props: { /* default props */ },
     related: {
       settings: YourComponentSettings, // ✅ Must define this
     },
   };
   ```

2. **Ensure component is selected:**
   - Click directly on the component in the canvas
   - Look for yellow outline around selected component

3. **Check settings component implementation:**
   ```tsx
   const YourComponentSettings = () => {
     const { actions: { setProp }, props } = useNode((node) => ({
       props: node.data.props,
     }));

     return (
       <div>
         {/* Your settings inputs */}
       </div>
     );
   };
   ```

---

## Issue: Changes Not Saving

### **Symptoms:**
- Click "Save" but changes disappear on reload
- Page reverts to previous version

### **Solutions:**

1. **Check localStorage is enabled:**
   - Open DevTools → Application → Local Storage
   - Verify localStorage is not disabled
   - Check for `momentum_page_*` keys

2. **Check browser storage quota:**
   - Clear old data: Run this in console:
   ```javascript
   // Clear all saved pages
   Object.keys(localStorage)
     .filter(key => key.startsWith('momentum_page_'))
     .forEach(key => localStorage.removeItem(key));
   ```

3. **Check for console errors:**
   - Look for JSON serialization errors
   - Verify `savePage()` is being called

4. **Export as backup:**
   - Use "Export" button in dashboard
   - Save JSON file locally
   - Can reimport later if needed

---

## Issue: Page Looks Different in Preview vs Public Site

### **Symptoms:**
- Preview mode looks correct
- Public page missing styles or looks broken
- Components appear differently

### **Solutions:**

1. **Remember: Editor only saves CONTENT, not styles**
   - Your CSS files remain unchanged
   - Editable components use your existing classes
   - Only props (text, links, etc.) are saved

2. **Check if you're viewing the saved version:**
   - Editor saves to localStorage
   - Public site loads from your actual components
   - These are separate!

3. **To use edited content on public site:**
   ```tsx
   // You'd need to load saved data in your actual page component
   import { loadPage } from './editor/persistence';

   const HomePage = () => {
     const [data, setData] = useState(null);

     useEffect(() => {
       const savedData = loadPage('home');
       if (savedData) {
         setData(JSON.parse(savedData));
       }
     }, []);

     // Render using saved data
   };
   ```

---

## Issue: Editor Performance Issues

### **Symptoms:**
- Slow dragging
- Laggy interface
- High CPU usage

### **Solutions:**

1. **Reduce number of components on page:**
   - Break large pages into sections
   - Use containers to organize

2. **Check for infinite loops:**
   - Open DevTools → Performance tab
   - Look for excessive re-renders
   - Check useEffect dependencies

3. **Clear localStorage:**
   ```javascript
   localStorage.clear();
   ```

4. **Disable browser extensions:**
   - Some extensions interfere with editors
   - Try in incognito mode

---

## Issue: "Cannot read property 'x' of undefined" Errors

### **Symptoms:**
- JavaScript errors in console
- Editor crashes or won't load
- Specific component causes error

### **Solutions:**

1. **Check component props:**
   ```tsx
   // Always provide default values
   const MyComponent = ({
     title = 'Default',  // ✅ Good
     subtitle,           // ❌ Bad - could be undefined
   }) => {
     return <h1>{title || 'Fallback'}</h1>; // ✅ Defensive
   };
   ```

2. **Verify Craft.js configuration:**
   ```tsx
   MyComponent.craft = {
     props: {
       title: 'Default',     // ✅ Define all props
       subtitle: 'Default',  // ✅ Even optional ones
     },
   };
   ```

3. **Check useNode() usage:**
   ```tsx
   // Correct pattern
   const { props } = useNode((node) => ({
     props: node.data.props as MyComponentProps, // ✅ Type assertion
   }));
   ```

---

## Issue: Authentication Not Working

### **Symptoms:**
- Can't log in with correct password
- Redirects back to login
- Session expires immediately

### **Solutions:**

1. **Verify password in AuthContext.tsx:**
   ```typescript
   const ADMIN_PASSWORD = 'momentum2024'; // Check this value
   ```

2. **Check sessionStorage:**
   - DevTools → Application → Session Storage
   - Look for `momentum_admin_auth` key
   - Should be set to `"true"` when logged in

3. **Clear session and try again:**
   ```javascript
   sessionStorage.clear();
   location.reload();
   ```

4. **Check for typos:**
   - Password is case-sensitive
   - No extra spaces
   - Default: `momentum2024`

---

## Issue: Hot Module Replacement (HMR) Not Working

### **Symptoms:**
- Changes don't appear without manual refresh
- Need to reload page to see updates

### **Solutions:**

1. **Restart dev server:**
   ```bash
   # Stop server (Ctrl+C)
   pnpm run dev
   ```

2. **Clear Vite cache:**
   ```bash
   rm -rf node_modules/.vite
   pnpm run dev
   ```

3. **Check file is being watched:**
   - Look for HMR update messages in terminal
   - Should see: `[vite] (client) hmr update /src/...`

---

## Issue: TypeScript Errors

### **Symptoms:**
- Build fails
- Red squiggly lines in editor
- Type errors in console

### **Solutions:**

1. **Run TypeScript check:**
   ```bash
   pnpm run build
   ```

2. **Common fixes:**
   ```tsx
   // Fix: Use type imports
   import { type ReactNode } from 'react'; // ✅
   import { ReactNode } from 'react';      // ❌

   // Fix: Type node data
   const { props } = useNode((node) => ({
     props: node.data.props as MyComponentProps, // ✅
   }));

   // Fix: Ref callbacks
   ref={(ref) => {
     if (ref) {           // ✅ Check for null
       connect(drag(ref));
     }
   }}
   ```

---

## Debugging Tips

### **1. Check Browser Console**
```
F12 → Console tab
```
Look for:
- Red errors
- Yellow warnings
- Network failures

### **2. Check Network Tab**
```
F12 → Network tab
```
Look for:
- Failed requests
- 404 errors
- Slow loading

### **3. Check React DevTools**
Install React DevTools extension:
- Inspect component tree
- Check props/state
- Track re-renders

### **4. Check Craft.js State**
In console:
```javascript
// Get editor state (when on editor page)
window.__CRAFT_EDITOR_STATE__
```

### **5. Enable Verbose Logging**
Add to EditorWrapper.tsx:
```tsx
<Editor
  resolver={...}
  onRender={(info) => console.log('Render:', info)}
  onNodesChange={(query) => console.log('Nodes changed')}
>
```

---

## Getting Help

If issues persist:

1. **Check the logs:**
   - Browser console
   - Terminal output
   - Network tab

2. **Gather information:**
   - What were you trying to do?
   - What happened instead?
   - Error messages (full text)
   - Browser/OS version

3. **Try minimal reproduction:**
   - Does it happen with a fresh page?
   - Does it happen with a different component?
   - Does it happen in a different browser?

4. **Reference documentation:**
   - `EDITOR_GUIDE.md` - Usage guide
   - `IMPLEMENTATION_SUMMARY.md` - Technical details
   - Craft.js docs: https://craft.js.org/

---

## Known Limitations

These are not bugs, but current limitations:

1. **Single user editing** - No concurrent editing
2. **LocalStorage only** - Need backend for production
3. **No real-time preview** - Must save to see changes on public site
4. **No media upload** - Must provide image URLs
5. **No version history** - Can't revert to previous versions (yet)

See `IMPLEMENTATION_SUMMARY.md` for migration paths.

---

## Prevention Tips

**Before editing:**
- ✅ Save your work frequently
- ✅ Export pages as backup
- ✅ Test in Preview mode first
- ✅ Use Undo if something breaks

**While developing:**
- ✅ Always provide default props
- ✅ Type your component props
- ✅ Test components in isolation first
- ✅ Check browser console regularly

**After changes:**
- ✅ Test all functionality
- ✅ Check mobile responsiveness
- ✅ Verify links still work
- ✅ Export as backup

---

**Most issues can be resolved by:**
1. Hard refresh (Ctrl+Shift+R)
2. Clear localStorage
3. Restart dev server
4. Check browser console

If you encounter issues not covered here, document them and add to this guide!
