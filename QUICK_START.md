# Craft.js Editor - Quick Start Guide

## 🚀 5-Minute Setup

### 1. Start the Server
```bash
pnpm run dev
```

### 2. Access the Editor
```
URL: http://localhost:5173/admin/login
Password: momentum2024
```

### 3. Start Editing
1. Click **"Edit Home Page"** (or Services/About)
2. Drag components from **left sidebar**
3. Click components to edit in **right panel**
4. Click **"Save"** when done
5. Toggle **"Preview"** to see results

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| **QUICK_START.md** (this file) | Get started in 5 minutes |
| **EDITOR_GUIDE.md** | Complete usage guide |
| **IMPLEMENTATION_SUMMARY.md** | Technical overview |
| **TROUBLESHOOTING.md** | Fix common issues |
| **SCROLL_FIX_SUMMARY.md** | ScrollTrigger conflict fixes |

---

## 🎨 Available Components

### Container
- Flexible layout building block
- Customizable background & padding
- Can contain other components

### Text Block
- Fully customizable text
- Change font size, weight, color
- Multiple HTML tags (h1, h2, p, etc.)

### Hero Section
- Complete hero with title & subtitle
- Primary & secondary CTA buttons
- Configurable scroll indicator

### Stat Card
- Display metrics/numbers
- Label and helper text
- Your existing card styles

---

## 🔑 Common Tasks

### Adding Text
1. Drag **"Text Block"** from toolbox
2. Drop on canvas
3. Click to select
4. Edit in right panel

### Changing Button Text
1. Click the component containing button
2. Find **"Button Text"** in settings
3. Type new text
4. Click **"Save"**

### Reordering Components
1. Click and hold component
2. Drag up or down
3. Release to drop
4. Click **"Save"**

### Deleting Components
1. Click component to select
2. Scroll down in settings panel
3. Click **"Delete Component"**
4. Confirm

### Undoing Changes
- Click **"Undo"** in top bar
- Or press Ctrl+Z (Cmd+Z on Mac)

### Previewing
- Click **"Preview"** button
- See exactly how it will look
- Click **"Editing"** to resume

---

## ⚠️ Important Notes

### Your Styles Are Safe
- CSS files are never modified
- Only content (text, links) is editable
- Design system stays intact

### LocalStorage
- Changes save to your browser
- Not synced across devices
- Use **"Export"** for backups

### Changes Don't Affect Live Site
- Editor saves to localStorage
- Public site uses original components
- See **EDITOR_GUIDE.md** for integration

---

## 🐛 Quick Fixes

### Can't login?
- Default password: `momentum2024`
- Case-sensitive
- Check `src/editor/AuthContext.tsx`

### Components won't drag?
- Check you're in **"Editing"** mode
- Try hard refresh (Ctrl+Shift+R)

### Settings panel empty?
- Make sure component is selected (yellow outline)
- Try clicking component again

### Changes not saving?
- Check browser console (F12) for errors
- Try **"Export"** as backup
- Clear localStorage and retry

### Scroll issues?
- Already fixed! See `SCROLL_FIX_SUMMARY.md`
- Hard refresh if issues persist

---

## 📖 Next Steps

### For Users:
1. Read **EDITOR_GUIDE.md** for detailed usage
2. Practice with Home page
3. Export backups regularly
4. Ask questions when stuck

### For Developers:
1. Read **IMPLEMENTATION_SUMMARY.md**
2. See **EDITOR_GUIDE.md** to add components
3. Check **TROUBLESHOOTING.md** for issues
4. Customize as needed

---

## 🎯 Production Checklist

Before going live:

- [ ] Change admin password
- [ ] Set up backend API (replace localStorage)
- [ ] Add real authentication (OAuth, JWT)
- [ ] Implement user roles
- [ ] Add media upload
- [ ] Test thoroughly
- [ ] Train content editors
- [ ] Set up backups

See **IMPLEMENTATION_SUMMARY.md** for details.

---

## 💡 Tips

### Do:
- ✅ Save frequently
- ✅ Use Preview mode
- ✅ Export backups
- ✅ Keep it simple
- ✅ Check console for errors

### Don't:
- ❌ Delete components you're unsure about (use Undo)
- ❌ Mix too many fonts/colors
- ❌ Forget to test on mobile
- ❌ Skip the Preview step
- ❌ Ignore error messages

---

## 🆘 Need Help?

1. **Check documentation** - Most answers are in these guides
2. **Browser console** - F12 → Console tab for errors
3. **Try basics first** - Refresh, clear cache, restart server
4. **Read troubleshooting** - See TROUBLESHOOTING.md

---

## 🎉 You're Ready!

The editor is fully functional and ready to use. Start by logging in and experimenting with the Home page.

**Remember:** Your styles are protected, so you can't break anything!

---

**Quick Links:**
- Login: http://localhost:5173/admin/login
- Dashboard: http://localhost:5173/admin
- Public Site: http://localhost:5173/
