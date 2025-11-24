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

## 📋 ACTIVE PHASES - Language & Careers Editor

### Phase 13: LanguageSwitcher Component (Deploy 13)
**Goal:** Add EN/FR language toggle to header
**Risk:** Very Low (behind feature flag, UI only)

#### Tasks:
1. Create `src/components/LanguageSwitcher.tsx`:
   ```typescript
   - Toggle button (EN | FR) with active state styling
   - Uses useTranslation() hook from react-i18next
   - Calls i18n.changeLanguage('en'|'fr')
   - Only renders if ENABLE_I18N === true
   - Gold accent for active language
   ```
2. Add to `Header.tsx` next to Contact CTA button
3. Style to match existing header design

**Files Changed:** 2 files (LanguageSwitcher.tsx, Header.tsx)
**Commit:** `feat: add language switcher component`
**Validation:** `pnpm run type-check && pnpm run build`
**Deploy:** Merge to main (hidden by feature flag)
**Rollback:** Remove from Header

---

### Phase 14: Careers Page Editable Components (Deploy 14)
**Goal:** Create Craft.js components for Careers page sections
**Risk:** Very Low (new components)

#### Tasks:
1. Create `src/editor/components/sections/EditableJobsGrid.tsx`:
   ```typescript
   {
     title: string;
     subtitle: string;
     jobs: Array<{
       title: string;
       description: string;
       requirements: string[];
       responsibilities: string[];
     }>;
   }
   ```
   - Grid of job listings with accordion expand/collapse
   - Settings panel to add/remove/edit jobs

2. Create `src/editor/components/sections/EditablePerksGrid.tsx`:
   ```typescript
   {
     title: string;
     subtitle: string;
     perks: Array<{
       title: string;
       description: string;
     }>;
     columns?: number;
   }
   ```

3. Create `src/editor/components/sections/EditablePhotoGallery.tsx`:
   ```typescript
   {
     title: string;
     subtitle: string;
     photos: Array<{
       url: string;
       alt: string;
     }>;
     columns?: number;
   }
   ```

4. Register all 3 components in EditorWrapper resolver

**Files Changed:** 4 files (3 components + EditorWrapper)
**Commit:** `feat: add Careers page editable components`
**Validation:** `pnpm run type-check && pnpm run build`
**Deploy:** Merge to main
**Rollback:** Remove from resolver

---

### Phase 15: Careers Page Template (Deploy 15)
**Goal:** Full Careers page template with all sections
**Risk:** Low (template system)

#### Tasks:
1. Create `src/editor/templates/careersTemplate.ts`:
   - Export function that returns serialized Craft.js JSON
   - Include: EditableHero, EditablePhotoGallery, EditableJobsGrid, EditablePerksGrid, EditableCTA
   - Pre-populate with current Careers.tsx content from src/Careers.tsx

2. Update `EditorWrapper.tsx`:
   ```typescript
   if (pageId === 'careers') return getCareersTemplate();
   ```

3. Test: Open editor for "careers" → see full Careers page with all sections

**Files Changed:** 2 files (template + EditorWrapper)
**Commit:** `feat: add Careers page template`
**Validation:**
```bash
pnpm run type-check && pnpm run build
# Manual: Open /admin/editor/careers → verify full page loads
```
**Deploy:** Merge to main
**Rollback:** Revert EditorWrapper changes

---

### Phase 16: Enable i18n + Translate Header/Footer (Deploy 16)
**Goal:** Activate bilingual support (EN/FR)
**Risk:** Low (can toggle off)

#### Tasks:
1. Update `src/components/Header.tsx`:
   ```typescript
   import { useTranslation } from 'react-i18next';
   const { t } = useTranslation('common');

   // Replace hardcoded text:
   <Link>{t('header.services')}</Link>
   <Link>{t('header.careers')}</Link>
   <Link>{t('header.about')}</Link>
   // etc.
   ```

2. Update `src/components/Footer.tsx`:
   ```typescript
   import { useTranslation } from 'react-i18next';
   const { t } = useTranslation('common');

   // Replace hardcoded text with translations
   ```

3. Enable i18n: `ENABLE_I18N = true` in src/config/featureFlags.ts

4. Test language switching:
   - Load homepage
   - Click EN/FR toggle
   - Verify Header and Footer text changes
   - Check localStorage caches language preference

**Files Changed:** 3 files (Header.tsx, Footer.tsx, featureFlags.ts)
**Commit:** `feat: enable i18n and translate Header/Footer`
**Validation:** `pnpm run ship` + manual language switching test
**Deploy:** Merge to main
**Rollback:** Set `ENABLE_I18N = false`

---

## 📋 FUTURE PHASES - File Organization

### Phase 17: Move Files to New Structure (Deploy 17)
**Goal:** Reorganize without breaking imports
**Risk:** Medium-High (many file moves)

#### Mitigation Strategy - ONE component at a time:

**Deploy 17a:** Move EditableText
1. **Copy** (don't move) `EditableText.tsx` to `src/editor/components/base/`
2. Update all imports
3. Test everything still works
4. Delete old file
5. **Commit:** `refactor: move EditableText to base/ folder`
6. **Validation:** `pnpm run ship && pnpm run build`

**Deploy 17b:** Move EditableContainer
1. Repeat same process to `base/`
2. **Commit:** `refactor: move EditableContainer to base/ folder`

**Deploy 17c:** Move EditableHero
1. Already in sections/, skip or verify location
2. **Commit:** `refactor: verify EditableHero in sections/ folder`

**Deploy 17d:** Move EditableStatCard
1. Move to `sections/` folder
2. **Commit:** `refactor: move EditableStatCard to sections/ folder`

**Files Changed:** 1 component move per deploy (4 mini-deploys)
**Validation:** `pnpm run ship` after EACH move
**Rollback:** Each move is independent, easy to revert

---

### Phase 18: Consolidate Button Styles (Deploy 18)
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
   - **Deploy 18a:** Update `.btn-primary-new` to use `.btn .btn-primary`
   - **Deploy 18b:** Update `.btn-secondary-new` to use `.btn .btn-secondary`
   - **Deploy 18c:** Update login/contact buttons

**Files Changed:** 1-2 files per mini-deploy
**Commits:** `refactor: consolidate [location] button styles to .btn`
**Validation:** Visual regression test + `pnpm run ship`
**Rollback:** Independent per button

---

### Phase 19: Consolidate Form Styles (Deploy 19)
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

### Week 3 (Current):
- ✅ **Mon:** Deploy 11 (Home template)
- ✅ **Tue:** Deploy 12 (About template)
- **Wed:** Deploy 13 (Language switcher)
- **Thu:** Deploy 14 (Careers components)
- **Fri:** Deploy 15 (Careers template)

### Week 4:
- **Mon:** Deploy 16 (Enable i18n + translate Header/Footer)
- **Tue:** Deploy 17a-17d (File moves)
- **Wed:** Deploy 18a-18c (Button consolidation)
- **Thu:** Deploy 19 (Form consolidation)

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
- File moves (Phase 17)
- Style consolidation (Phases 18, 19)
- i18n activation (Phase 16)

### Mitigation:
1. **ONE component at a time**
2. **Visual regression testing** before/after
3. **Feature flags** for risky features
4. **Immediate rollback** if issues detected
5. **Incremental commits** (never batch changes)

---

## Current Status

**Branch:** `refactor/craftjs-i18n-redesign`
**Completed:** Phases 0-12 (18 commits)
**Next:** Phase 13 - LanguageSwitcher Component
**Total Remaining Deploys:** 7 phases (~15 individual deploys)
**Timeline:** 2 weeks at 2-3 deploys/day

### Completed Summary (Phases 0-12):
- ✅ Quality gates and design tokens
- ✅ i18n infrastructure (disabled)
- ✅ Shared settings components (ColorPicker, Spacing, Typography, Border)
- ✅ Enhanced EditableText and EditableButton
- ✅ **Editor full-page display fixed** with 5 new section components
- ✅ Home page template (hero, stats, services, case study, FAQ, CTA)
- ✅ About page template (hero, values, team, CTA)

### Active Work (Phases 13-16):
- 🔄 Phase 13: Language switcher UI
- 🔄 Phase 14: Careers page components
- 🔄 Phase 15: Careers page template
- 🔄 Phase 16: Enable i18n + translate Header/Footer
