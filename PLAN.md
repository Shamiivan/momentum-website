# Momentum Website Refactor - DORA Optimized Plan

## DORA Metrics Strategy
- **Deployment Frequency:** High (small, incremental changes)
- **Lead Time:** Low (each phase independently deployable)
- **Change Failure Rate:** Minimize (lint + type-check before every commit)
- **MTTR:** Low (easy rollback with feature flags/toggles)

---

## Pre-Commit Quality Gates (REQUIRED for ALL commits)
```bash
# Before EVERY commit, run:
npm run lint:fix
npm run type-check
npm run build

# Only commit if all 3 pass
```

---

## Phase 0: Foundation Setup (Deploy 1)
**Goal:** Add quality checks and prepare tooling
**Risk:** Very Low
**Rollback:** Easy (just package.json changes)

### Tasks:
1. Update `package.json` scripts:
   ```json
   "lint:fix": "eslint . --fix --max-warnings 0",
   "type-check": "tsc --noEmit --pretty",
   "ship": "npm run lint:fix && npm run type-check && npm run build && git push"
   ```

2. Run `npm run type-check` to identify existing issues
3. Document any type errors (DO NOT fix yet, just document)
4. Create `.github/workflows/quality-check.yml` (optional CI)

**Commit:** `chore: add lint:fix, type-check, and ship scripts`
**Deploy:** Merge to main (no user-facing changes)

---

## Phase 1: CSS Design Tokens Only (Deploy 2)
**Goal:** Create foundation without breaking existing styles
**Risk:** Very Low (new files only, nothing changes)

### Tasks:
1. Create `src/styles/design-tokens.css`:
   - Extract all `--color-*` variables from existing CSS
   - Add opacity variations (--gold-5, --gold-10, etc.)
   - Add spacing scale (--space-1 through --space-12)
   - Add border-radius scale (--radius-sm, md, lg, xl)
   - Add shadow scale (--shadow-sm, md, lg, xl)
   - Add typography scale (--text-xs through --text-5xl)
   - Add transition variables

2. Import in `src/index.css`:
   ```css
   @import './styles/design-tokens.css';
   ```

3. **DO NOT change any existing CSS yet** - just create tokens

**Files Changed:** 2 files (new design-tokens.css, update index.css)
**Commit:** `feat: add CSS design tokens system`
**Validation:** `npm run ship`
**Deploy:** Merge to main
**Rollback:** Remove import from index.css

---

## Phase 2: i18n Infrastructure (Deploy 3)
**Goal:** Add i18n without changing any existing text
**Risk:** Low (feature flag can disable)

### Tasks:
1. Install dependencies:
   ```bash
   npm install i18next react-i18next i18next-browser-languagedetector
   ```

2. Create `src/i18n/config.ts` with basic setup

3. Create translation files (copy existing English text):
   - `src/i18n/locales/en/common.json`
   - `src/i18n/locales/en/home.json`
   - `src/i18n/locales/fr/common.json` (same as EN for now)
   - `src/i18n/locales/fr/home.json` (same as EN for now)

4. Wrap `main.tsx` with `I18nextProvider` (behind feature flag)

5. Add feature flag to enable/disable i18n:
   ```typescript
   const ENABLE_I18N = false; // Set to true to enable
   ```

**Files Changed:** 8 files (package.json, 1 config, 4 JSON, main.tsx, feature flag)
**Commit:** `feat: add i18n infrastructure (disabled by default)`
**Validation:** `npm run ship`
**Deploy:** Merge to main
**Rollback:** Set `ENABLE_I18N = false`

---

## Phase 3: Shared Settings Components (Deploy 4)
**Goal:** Create reusable Craft.js controls
**Risk:** Very Low (new components, not used yet)

### Tasks:
1. Create folder: `src/editor/components/settings/`

2. Create components (one at a time, one commit each):
   - **Deploy 4a:** `ColorPicker.tsx` (basic version with hex input only)
   - **Deploy 4b:** `SpacingControl.tsx` (single value input)
   - **Deploy 4c:** `TypographyControl.tsx` (fontSize, fontWeight only)
   - **Deploy 4d:** `BorderControl.tsx` (borderRadius only)

3. Each component is standalone, fully typed, with props interface

**Files Changed:** 1 file per deploy (4 mini-deploys)
**Commits:**
- `feat: add ColorPicker settings component`
- `feat: add SpacingControl settings component`
- `feat: add TypographyControl settings component`
- `feat: add BorderControl settings component`

**Validation:** `npm run ship` after each
**Deploy:** Merge each individually
**Rollback:** Each component independent

---

## Phase 4: Enhanced EditableText (Deploy 5)
**Goal:** Add props to existing EditableText without breaking it
**Risk:** Medium (modifies existing component)

### Tasks:
1. Read current `src/editor/components/EditableText.tsx`

2. Add NEW optional props (with defaults matching current behavior):
   ```typescript
   fontFamily?: string;
   lineHeight?: string;
   letterSpacing?: string;
   margin?: string;
   padding?: string;
   ```

3. Update settings panel to use new `TypographyControl`

4. Test in editor with existing pages (should look identical)

**Files Changed:** 2 files (EditableText.tsx, EditableText settings)
**Commit:** `feat: enhance EditableText with typography controls`
**Validation:**
```bash
npm run ship
# Manually test editor loads existing pages correctly
```
**Deploy:** Merge to main
**Rollback:** Git revert single commit

---

## Phase 5: Create EditableButton (Deploy 6)
**Goal:** New base component
**Risk:** Very Low (new component)

### Tasks:
1. Create `src/editor/components/base/EditableButton.tsx`
2. Create settings component `EditableButtonSettings.tsx`
3. Register in `EditorWrapper.tsx` resolver
4. Add to Toolbox (optional, can skip for now)

**Files Changed:** 3 files
**Commit:** `feat: add EditableButton base component`
**Validation:** `npm run ship`
**Deploy:** Merge to main
**Rollback:** Remove from resolver

---

## Phase 6: Move Files to New Structure (Deploy 7)
**Goal:** Reorganize without breaking imports
**Risk:** Medium-High (many file moves)

### Mitigation Strategy - ONE component at a time:

**Deploy 7a:** Move EditableText
1. Create `src/editor/components/base/` folder
2. **Copy** (don't move) `EditableText.tsx` to new location
3. Update imports in both old and new location to export from new location
4. Test everything still works
5. Delete old file
6. **Commit:** `refactor: move EditableText to base/ folder`
7. **Validation:** `npm run ship && npm run build`

**Deploy 7b:** Move EditableContainer
1. Repeat same process
2. **Commit:** `refactor: move EditableContainer to base/ folder`

**Deploy 7c:** Move EditableHero
1. Create `src/editor/components/sections/` folder
2. Repeat process
3. **Commit:** `refactor: move EditableHero to sections/ folder`

**Deploy 7d:** Move EditableStatCard
1. Repeat process
2. **Commit:** `refactor: move EditableStatCard to sections/ folder`

**Files Changed:** 1 component move per deploy (4 mini-deploys)
**Validation:** `npm run ship` after EACH move
**Rollback:** Each move is independent, easy to revert

---

## Phase 7: Consolidate Button Styles (Deploy 8)
**Goal:** Single source of truth for button styles
**Risk:** Medium (changes existing buttons)

### Tasks:
1. Create `src/styles/components/buttons.css`:
   ```css
   .btn {
     /* Base button structure using design tokens */
   }
   .btn-primary { /* Gold button */ }
   .btn-secondary { /* Dark button */ }
   ```

2. Import in `src/styles/global.css`

3. Update **ONE button at a time**, test, commit:
   - **Deploy 8a:** Update `.header-cta-new` to use `.btn .btn-primary`
   - **Deploy 8b:** Update `.btn-submit-contact` to use `.btn .btn-primary`
   - **Deploy 8c:** Update `.login-button` to use `.btn .btn-primary`

**Files Changed:** 1-2 files per mini-deploy
**Commits:** `refactor: consolidate header button styles to .btn`
**Validation:** Visual regression test + `npm run ship`
**Rollback:** Independent per button

---

## Phase 8: Add Language Switcher UI (Deploy 9)
**Goal:** Add language toggle to header
**Risk:** Low (UI only, behind feature flag)

### Tasks:
1. Create `src/components/LanguageSwitcher.tsx`:
   - Toggle button (EN | FR)
   - Uses i18n changeLanguage
   - Only renders if `ENABLE_I18N === true`

2. Add to `Header.tsx` (right side, next to CTA)

3. Style to match existing header design

**Files Changed:** 2 files (LanguageSwitcher.tsx, Header.tsx)
**Commit:** `feat: add language switcher component`
**Validation:** `npm run ship`
**Deploy:** Merge to main (hidden by feature flag)
**Rollback:** Remove from Header

---

## Phase 9: Translate Header & Footer (Deploy 10)
**Goal:** First i18n implementation
**Risk:** Low (can toggle off)

### Tasks:
1. Update `src/i18n/locales/en/common.json` with header/footer text
2. Update `src/i18n/locales/fr/common.json` with French translations
3. Wrap Header text with `useTranslation()` hook
4. Wrap Footer text with `useTranslation()` hook
5. Enable i18n: `ENABLE_I18N = true`

**Files Changed:** 4 files
**Commit:** `feat: add French translations for Header and Footer`
**Validation:** `npm run ship` + test both languages work
**Deploy:** Merge to main
**Rollback:** Set `ENABLE_I18N = false`

---

## Phase 10: Consolidate Form Styles (Deploy 11)
**Goal:** Reusable form input styles
**Risk:** Medium

### Tasks:
1. Create `src/styles/components/forms.css`
2. Extract common input styles:
   ```css
   .form-input { /* Unified input styles */ }
   .form-label { /* Unified label styles */ }
   .form-group { /* Unified group wrapper */ }
   ```

3. Update Contact page form (test thoroughly)
4. Update Login page form
5. Update Editor settings inputs

**Files Changed:** 4 files (1 new CSS, 3 component updates)
**Commit:** `refactor: consolidate form styles`
**Validation:** `npm run ship` + manual form testing
**Deploy:** Merge to main

---

## Deployment Cadence

### Week 1:
- **Mon:** Deploy 1 (Quality scripts)
- **Tue:** Deploy 2 (Design tokens)
- **Wed:** Deploy 3 (i18n infra)
- **Thu:** Deploy 4a-4d (Settings components)
- **Fri:** Deploy 5 (EditableButton)

### Week 2:
- **Mon:** Deploy 6 (EditableImage)
- **Tue:** Deploy 7a-7d (File moves)
- **Wed:** Deploy 8a-8c (Button consolidation)
- **Thu:** Deploy 9 (Language switcher)
- **Fri:** Deploy 10 (Header/Footer i18n)

### Week 3:
- **Mon:** Deploy 11 (Form consolidation)
- Continue with remaining sections...

---

## Quality Gates (MANDATORY)

### Before Every Commit:
```bash
# 1. Lint and fix
npm run lint:fix

# 2. Type check
npm run type-check

# 3. Build succeeds
npm run build

# 4. Manual testing (checklist):
# - Load homepage
# - Load editor
# - Check console for errors
# - Test in Chrome & Firefox

# 5. Commit only if all pass
git add .
git commit -m "feat: specific change description"
```

### Before Every Deploy:
```bash
npm run ship  # Runs all checks + push
```

---

## Rollback Strategy

### Each deploy has independent rollback:
```bash
# Identify failing commit
git log --oneline

# Revert specific commit
git revert <commit-hash>

# Or toggle feature flag off (for i18n, language switcher)
```

---

## Success Metrics

### DORA Metrics Targets:
- ✅ **Deployment Frequency:** 2-3 deploys per day
- ✅ **Lead Time:** < 2 hours from commit to production
- ✅ **Change Failure Rate:** < 5% (quality gates prevent failures)
- ✅ **MTTR:** < 15 minutes (simple reverts)

### Code Quality:
- ✅ 0 TypeScript errors at all times
- ✅ 0 ESLint warnings at all times
- ✅ 100% build success rate
- ✅ All changes behind feature flags when risky

---

## Risk Mitigation

### High-Risk Changes:
- File moves (Phase 6)
- Style consolidation (Phases 7, 10)

### Mitigation:
1. **ONE component at a time**
2. **Visual regression testing** before/after
3. **Feature flags** for risky features
4. **Immediate rollback** if issues detected
5. **Incremental commits** (never batch changes)

---

**Total Deploys:** 11 major phases, ~20-25 individual deploys
**Timeline:** 2-3 weeks at 2-3 deploys/day
**Current Branch:** `refactor/craftjs-i18n-redesign`
