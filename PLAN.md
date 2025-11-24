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
pnpm run lint:fix
pnpm run type-check
pnpm run build

# Only commit if all 3 pass
```

---

## ✅ COMPLETED PHASES

### ✅ Phase 0: Foundation Setup
- Added quality check scripts (lint:fix, type-check, ship)
- Documented existing linting issues

### ✅ Phase 1: CSS Design Tokens
- Created `src/styles/design-tokens.css`
- Imported in `src/index.css`

### ✅ Phase 2: i18n Infrastructure
- Installed i18next packages
- Created translation files (en/fr)
- Added feature flag (ENABLE_I18N = false)

### ✅ Phase 3: Shared Settings Components
- ColorPicker.tsx
- SpacingControl.tsx
- TypographyControl.tsx
- BorderControl.tsx

### ✅ Phase 4: Enhanced EditableText
- Added fontFamily, lineHeight, letterSpacing, margin, padding props
- Integrated shared settings components

### ✅ Phase 5: EditableButton
- Created `src/editor/components/base/EditableButton.tsx`
- Registered in EditorWrapper resolver

---

## 🚧 ACTIVE PHASES - Editor Full Page Display Fix

### Phase 6: EditableStatsGrid Component (Deploy 6)
**Goal:** Create editable stats section component
**Risk:** Very Low (new component)
**Issue Fixed:** Enable full page editing instead of just hero section

#### Tasks:
1. Create `src/editor/components/sections/EditableStatsGrid.tsx`
2. Props interface:
   ```typescript
   {
     stats: Array<{
       number: string;
       label: string;
       helper: string;
     }>;
     columns?: number;
   }
   ```
3. Settings panel to add/remove/edit individual stat items
4. Register in `EditorWrapper.tsx` resolver

**Files Changed:** 2 files (new component + EditorWrapper)
**Commit:** `feat: add EditableStatsGrid section component`
**Validation:** `pnpm run type-check && pnpm run build`
**Deploy:** Merge to main
**Rollback:** Remove from resolver

---

### Phase 7: EditableServicesSection (Deploy 7)
**Goal:** Editable B2B services display
**Risk:** Very Low (new component)

#### Tasks:
1. Create `src/editor/components/sections/EditableServicesSection.tsx`
2. Props interface:
   ```typescript
   {
     title: string;
     description: string;
     services: Array<{
       icon: string;
       title: string;
       description: string;
     }>;
   }
   ```
3. Settings panel for title, description, and service items array
4. Register in resolver

**Files Changed:** 2 files
**Commit:** `feat: add EditableServicesSection component`
**Validation:** `pnpm run type-check && pnpm run build`
**Deploy:** Merge to main
**Rollback:** Remove from resolver

---

### Phase 8: EditableCaseStudy (Deploy 8)
**Goal:** Editable case study section
**Risk:** Very Low (new component)

#### Tasks:
1. Create `src/editor/components/sections/EditableCaseStudy.tsx`
2. Props interface:
   ```typescript
   {
     image: string;
     title: string;
     description: string;
     buttonText: string;
     buttonLink: string;
   }
   ```
3. Settings panel with image upload support
4. Register in resolver

**Files Changed:** 2 files
**Commit:** `feat: add EditableCaseStudy section component`
**Validation:** `pnpm run type-check && pnpm run build`
**Deploy:** Merge to main
**Rollback:** Remove from resolver

---

### Phase 9: EditableFAQ (Deploy 9)
**Goal:** Editable FAQ accordion section
**Risk:** Low (interactive component)

#### Tasks:
1. Create `src/editor/components/sections/EditableFAQ.tsx`
2. Props interface:
   ```typescript
   {
     title: string;
     faqs: Array<{
       question: string;
       answer: string;
     }>;
   }
   ```
3. Settings panel to add/remove/edit FAQ items
4. Include accordion expand/collapse functionality
5. Register in resolver

**Files Changed:** 2 files
**Commit:** `feat: add EditableFAQ section component`
**Validation:** `pnpm run type-check && pnpm run build`
**Deploy:** Merge to main
**Rollback:** Remove from resolver

---

### Phase 10: EditableCTA (Deploy 10)
**Goal:** Editable call-to-action section
**Risk:** Very Low (new component)

#### Tasks:
1. Create `src/editor/components/sections/EditableCTA.tsx`
2. Props interface:
   ```typescript
   {
     title: string;
     subtitle: string;
     buttonText: string;
     buttonLink: string;
     backgroundColor?: string;
   }
   ```
3. Settings panel with color picker integration
4. Register in resolver

**Files Changed:** 2 files
**Commit:** `feat: add EditableCTA section component`
**Validation:** `pnpm run type-check && pnpm run build`
**Deploy:** Merge to main
**Rollback:** Remove from resolver

---

### Phase 11: Home Page Template (Deploy 11)
**Goal:** Default template with all Home sections pre-populated
**Risk:** Low (template system)

#### Tasks:
1. Create `src/editor/templates/` folder
2. Create `src/editor/templates/homeTemplate.ts`:
   - Export function that returns serialized Craft.js JSON
   - Include: EditableHero, EditableStatsGrid, EditableServicesSection, EditableCaseStudy, EditableFAQ, EditableCTA
   - Pre-populate with current Home.tsx content
3. Update `EditorWrapper.tsx`:
   ```typescript
   const [initialData, setInitialData] = useState(() => {
     if (savedData) return savedData;
     if (pageId === 'home') return getHomeTemplate();
     return undefined;
   });
   ```
4. Test: Open editor for "home" → see full page with all sections

**Files Changed:** 3 files (new folder, template, EditorWrapper)
**Commit:** `feat: add Home page default template`
**Validation:**
```bash
pnpm run type-check && pnpm run build
# Manual: Open /admin/editor/home → verify full page loads
```
**Deploy:** Merge to main
**Rollback:** Revert EditorWrapper changes

---

### Phase 12: About Page Components & Template (Deploy 12)
**Goal:** About page template with team/values sections
**Risk:** Low

#### Tasks:
1. Create `src/editor/components/sections/EditableTeamGrid.tsx`
   ```typescript
   {
     title: string;
     members: Array<{
       name: string;
       role: string;
       bio: string;
       image: string;
     }>;
   }
   ```
2. Create `src/editor/components/sections/EditableValuesGrid.tsx`
   ```typescript
   {
     title: string;
     values: Array<{
       title: string;
       description: string;
     }>;
   }
   ```
3. Create `src/editor/templates/aboutTemplate.ts` with all About sections
4. Update EditorWrapper to handle pageId === 'about'
5. Register components in resolver

**Files Changed:** 5 files
**Commit:** `feat: add About page template and components`
**Validation:** `pnpm run type-check && pnpm run build`
**Deploy:** Merge to main
**Rollback:** Remove components from resolver

---

## 📋 REMAINING PHASES - Original Refactor Plan

### Phase 13: Move Files to New Structure (Deploy 13)
**Goal:** Reorganize without breaking imports
**Risk:** Medium-High (many file moves)

#### Mitigation Strategy - ONE component at a time:

**Deploy 13a:** Move EditableText
1. **Copy** (don't move) `EditableText.tsx` to `src/editor/components/base/`
2. Update all imports
3. Test everything still works
4. Delete old file
5. **Commit:** `refactor: move EditableText to base/ folder`
6. **Validation:** `pnpm run ship && pnpm run build`

**Deploy 13b:** Move EditableContainer
1. Repeat same process to `base/`
2. **Commit:** `refactor: move EditableContainer to base/ folder`

**Deploy 13c:** Move EditableHero
1. Already in sections/, skip or verify location
2. **Commit:** `refactor: verify EditableHero in sections/ folder`

**Deploy 13d:** Move EditableStatCard
1. Move to `sections/` folder
2. **Commit:** `refactor: move EditableStatCard to sections/ folder`

**Files Changed:** 1 component move per deploy (4 mini-deploys)
**Validation:** `pnpm run ship` after EACH move
**Rollback:** Each move is independent, easy to revert

---

### Phase 14: Consolidate Button Styles (Deploy 14)
**Goal:** Single source of truth for button styles
**Risk:** Medium (changes existing buttons)

#### Tasks:
1. Create `src/styles/components/buttons.css`:
   ```css
   .btn {
     /* Base button structure using design tokens */
   }
   .btn-primary { /* Gold button */ }
   .btn-secondary { /* Dark button */ }
   ```

2. Import in `src/index.css`

3. Update **ONE button at a time**, test, commit:
   - **Deploy 14a:** Update `.btn-primary-new` to use `.btn .btn-primary`
   - **Deploy 14b:** Update `.btn-secondary-new` to use `.btn .btn-secondary`
   - **Deploy 14c:** Update login/contact buttons

**Files Changed:** 1-2 files per mini-deploy
**Commits:** `refactor: consolidate [location] button styles to .btn`
**Validation:** Visual regression test + `pnpm run ship`
**Rollback:** Independent per button

---

### Phase 15: Add Language Switcher UI (Deploy 15)
**Goal:** Add language toggle to header
**Risk:** Low (UI only, behind feature flag)

#### Tasks:
1. Create `src/components/LanguageSwitcher.tsx`:
   - Toggle button (EN | FR)
   - Uses i18n changeLanguage
   - Only renders if `ENABLE_I18N === true`

2. Add to `Header.tsx` (right side, next to CTA)

3. Style to match existing header design

**Files Changed:** 2 files (LanguageSwitcher.tsx, Header.tsx)
**Commit:** `feat: add language switcher component`
**Validation:** `pnpm run ship`
**Deploy:** Merge to main (hidden by feature flag)
**Rollback:** Remove from Header

---

### Phase 16: Translate Header & Footer (Deploy 16)
**Goal:** First i18n implementation
**Risk:** Low (can toggle off)

#### Tasks:
1. Update `src/i18n/locales/en/common.json` with header/footer text
2. Update `src/i18n/locales/fr/common.json` with French translations
3. Wrap Header text with `useTranslation()` hook
4. Wrap Footer text with `useTranslation()` hook
5. Enable i18n: `ENABLE_I18N = true` in featureFlags.ts

**Files Changed:** 4 files
**Commit:** `feat: add French translations for Header and Footer`
**Validation:** `pnpm run ship` + test both languages work
**Deploy:** Merge to main
**Rollback:** Set `ENABLE_I18N = false`

---

### Phase 17: Consolidate Form Styles (Deploy 17)
**Goal:** Reusable form input styles
**Risk:** Medium

#### Tasks:
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
**Validation:** `pnpm run ship` + manual form testing
**Deploy:** Merge to main

---

## Deployment Cadence

### Week 1 (Completed):
- ✅ Deploy 1 (Quality scripts)
- ✅ Deploy 2 (Design tokens)
- ✅ Deploy 3 (i18n infra)
- ✅ Deploy 4a-4d (Settings components)
- ✅ Deploy 5 (EditableButton)

### Week 2 (Current - Editor Fix):
- **Mon:** Deploy 6 (EditableStatsGrid)
- **Tue:** Deploy 7 (EditableServicesSection)
- **Wed:** Deploy 8 (EditableCaseStudy)
- **Thu:** Deploy 9 (EditableFAQ)
- **Fri:** Deploy 10 (EditableCTA)

### Week 3:
- **Mon:** Deploy 11 (Home template)
- **Tue:** Deploy 12 (About template)
- **Wed:** Deploy 13a-13d (File moves)
- **Thu:** Deploy 14a-14c (Button consolidation)
- **Fri:** Deploy 15 (Language switcher)

### Week 4:
- **Mon:** Deploy 16 (Header/Footer i18n)
- **Tue:** Deploy 17 (Form consolidation)

---

## Quality Gates (MANDATORY)

### Before Every Commit:
```bash
# 1. Lint and fix
pnpm run lint:fix

# 2. Type check
pnpm run type-check

# 3. Build succeeds
pnpm run build

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
pnpm run ship  # Runs all checks + push
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
- File moves (Phase 13)
- Style consolidation (Phases 14, 17)
- Editor template system (Phases 11-12)

### Mitigation:
1. **ONE component at a time**
2. **Visual regression testing** before/after
3. **Feature flags** for risky features
4. **Immediate rollback** if issues detected
5. **Incremental commits** (never batch changes)

---

## Current Status

**Branch:** `refactor/craftjs-i18n-redesign`
**Completed:** Phases 0-5 (10 commits)
**Next:** Phase 6 - EditableStatsGrid Component
**Total Remaining Deploys:** 12 phases (~20-25 individual deploys)
**Timeline:** 3 weeks at 2-3 deploys/day
