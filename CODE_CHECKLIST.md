# 🎯 Developer Checklist - Fixth Codebase

Use this checklist when writing code, creating components, or reviewing PRs.

---

## ✅ Before Starting a New Feature

- [ ] Read the relevant section in `DEVELOPMENT_GUIDELINES.md`
- [ ] Check if similar components exist in `src/components/ui/`
- [ ] Check if needed hooks exist in `src/hooks/`
- [ ] Check if constants exist in `src/constants/`
- [ ] Review the folder structure in `START_HERE.md`

---

## ✅ While Writing Code

### Constants & Configuration
- [ ] No hardcoded breakpoint values → Use `BREAKPOINTS` from `src/constants/`
- [ ] No hardcoded string labels → Use `MODAL_TITLES` or `FORM_PLACEHOLDERS`
- [ ] No hardcoded timeouts → Use `NOTIFICATION_TIMEOUT`
- [ ] All magic numbers extracted → Should be constants

### Responsive Design
- [ ] Using `useIsMobile()` hook instead of manual screen width check
- [ ] Using `BREAKPOINTS` constants for all values
- [ ] Mobile-first approach where applicable
- [ ] Tested on multiple breakpoints

### Hooks & Logic
- [ ] No duplicated `useEffect` patterns → Use existing hooks
- [ ] Modal components using `useModal()` hook
- [ ] Item selection using `useSelectedItemFromParams()`
- [ ] Complex logic extracted to custom hooks

### Components & UI
- [ ] Using `Icons` from `src/components/ui/Icons/`
- [ ] Using `Buttons` from `src/components/ui/buttons/`
- [ ] Using `Forms` from `src/components/ui/forms/`
- [ ] No undefined styles → Using theme tokens from `src/styles/theme.js`

### Imports
- [ ] All imports using correct new paths
- [ ] No imports from `src/utils/useSreenWidth` (typo file)
- [ ] Icons imported from `@/components/ui/Icons`
- [ ] Constants imported from `@/constants`
- [ ] Hooks imported from `@/hooks`
- [ ] Mock data imported from `@/data/mock`

### Data Management
- [ ] Using centralized mock data from `src/data/mock/`
- [ ] No data duplicated across files
- [ ] TODO comments for API integration points
- [ ] Data structure documented in code

### Accessibility
- [ ] Buttons have proper `type` attributes
- [ ] Form inputs have associated labels
- [ ] Images have alt text
- [ ] ARIA labels where needed
- [ ] Semantic HTML used

---

## ✅ Code Quality Checks

- [ ] No `console.log()` statements left
- [ ] No debug styles (e.g., `outline: 2px red`)
- [ ] No commented-out blocks of code
- [ ] No `TODO` comments that could be fixed now
- [ ] Consistent indentation (2 spaces)
- [ ] Consistent quotes (single quotes preferred)
- [ ] No trailing whitespace

---

## ✅ Before Submitting PR

### Code Review Checklist
- [ ] All constants are centralized
- [ ] No duplicated code
- [ ] No hardcoded magic numbers
- [ ] Proper hook usage
- [ ] Imports from correct paths
- [ ] Component structure is clean
- [ ] Follows established patterns
- [ ] Documentation is clear

### Testing Checklist
- [ ] Tested on mobile viewport
- [ ] Tested on tablet viewport
- [ ] Tested on desktop viewport
- [ ] Tested interactions
- [ ] No console errors
- [ ] Forms work correctly
- [ ] Icons display properly

### Documentation Checklist
- [ ] Component purpose is clear
- [ ] Props are documented (via comments)
- [ ] Complex logic has comments
- [ ] Dependencies are listed
- [ ] Known limitations documented
- [ ] Usage examples provided

---

## ✅ Common Patterns to Follow

### Pattern 1: Responsive Component
```javascript
import { useIsMobile } from '../hooks';
import { BREAKPOINTS } from '../constants';

export function ResponsiveComponent() {
  const isMobile = useIsMobile(BREAKPOINTS.TABLET);
  return (
    <Container>
      {isMobile ? <MobileView /> : <DesktopView />}
    </Container>
  );
}
```

### Pattern 2: Modal Component
```javascript
import { useModal } from '../hooks';
import { MODAL_TITLES } from '../constants';

export function ModalExample() {
  const [activeModal, setActiveModal, closeModal] = useModal();
  const title = MODAL_TITLES[activeModal];
  
  return (
    <>
      <button onClick={() => setActiveModal('type')}>Open</button>
      {activeModal && (
        <Modal title={title} onClose={closeModal}>
          {/* Content */}
        </Modal>
      )}
    </>
  );
}
```

### Pattern 3: Form Component
```javascript
import { FormInput, FormTextarea, FormCheckbox, CheckboxLabel } from '../components/ui/forms';
import { PrimaryButton } from '../components/ui/buttons';

export function FormExample() {
  const [formData, setFormData] = useState({});
  
  return (
    <form>
      <FormInput
        placeholder="Enter text"
        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
      />
      <FormTextarea
        placeholder="Enter description"
        rows={4}
      />
      <CheckboxLabel>
        <FormCheckbox type="checkbox" />
        I agree to terms
      </CheckboxLabel>
      <PrimaryButton type="submit">Submit</PrimaryButton>
    </form>
  );
}
```

---

## ✅ File Organization Checklist

### New Component File Should Have
- [ ] Import statements at top
- [ ] Main component export
- [ ] Styled components at bottom
- [ ] JSDoc comments for complex logic
- [ ] No hardcoded values
- [ ] Clear component name

### Example Structure
```javascript
// 1. Imports
import { useState } from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../hooks';
import { BREAKPOINTS } from '../constants';

// 2. Component
export default function MyComponent() {
  // Component logic here
  return <Wrapper>{/* Content */}</Wrapper>;
}

// 3. Styled Components & Styles
const Wrapper = styled.div`
  /* Styles here */
`;
```

---

## ✅ Git Commit Message Template

```
[TYPE] Brief description

- Changed X
- Added Y  
- Fixed Z

Closes #123
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `refactor:` Code restructuring
- `style:` CSS/styling changes
- `docs:` Documentation updates
- `chore:` Maintenance, no code change

---

## ❌ Common Mistakes (Don't Do These!)

```javascript
// ❌ DON'T: Hardcoded breakpoint
const isMobile = width < 750;

// ✅ DO: Use BREAKPOINTS constant
const isMobile = useIsMobile(BREAKPOINTS.TABLET);

---

// ❌ DON'T: Duplicated SVG code
const MyIcon = () => <svg>...</svg>;
const MyIcon2 = () => <svg>...</svg>;

// ✅ DO: Use centralized Icons
import { MyIcon } from '@/components/ui/Icons';

---

// ❌ DON'T: Import from old locations
import { useScreenWidth } from '../utils/useSreenWidth';

// ✅ DO: Import from new locations
import { useIsMobile } from '../hooks';

---

// ❌ DON'T: Repeated scroll lock logic
useEffect(() => {
  document.body.style.overflow = 'hidden';
  return () => { document.body.style.overflow = ''; };
}, [isOpen]);

// ✅ DO: Use custom hook
const [modal, setModal, closeModal] = useModal();

---

// ❌ DON'T: Hardcoded string
const title = "Add experience";

// ✅ DO: Use constants
const title = MODAL_TITLES.experience;
```

---

## 📞 When You're Stuck

1. **"How do I implement X?"**
   → Check `DEVELOPMENT_GUIDELINES.md` for examples

2. **"Where does Y go?"**
   → Check `START_HERE.md` for file locations

3. **"Why was this changed?"**
   → Read `REFACTORING_DOCUMENTATION.md`

4. **"What's the pattern for Z?"**
   → Look at "Common Patterns" section above

5. **"Is there a component for this?"**
   → Check `src/components/ui/` folders

---

## 📋 PR Review Guidelines

### For Code Reviewers

Check that PR author has verified:
- [ ] No hardcoded magic numbers in this PR
- [ ] Uses new hook patterns if applicable
- [ ] Imports from correct (new) locations
- [ ] No duplicated code
- [ ] No redundant dependencies
- [ ] Follows folder structure conventions
- [ ] Includes necessary constants
- [ ] Properly documented

### Before Approving
- [ ] All checklist items above are met
- [ ] Code is maintainable and professional
- [ ] Follows established patterns
- [ ] No shortcuts or tech debt introduced
- [ ] No breaking changes to existing code

---

## 🎓 Learning Path

**Week 1:**
- [ ] Read `START_HERE.md`
- [ ] Read `DEVELOPMENT_GUIDELINES.md`
- [ ] Explore `src/constants/`, `src/hooks/`, `src/components/ui/`

**Week 2:**
- [ ] Create a small feature using new patterns
- [ ] Review existing components for pattern understanding
- [ ] Practice writing components with proper structure

**Week 3+:**
- [ ] Mentor others
- [ ] Contribute to refactoring efforts
- [ ] Propose improvements to patterns

---

**Last Updated:** March 29, 2026  
**Version:** 2.0  
**Status:** Active - Use Daily

