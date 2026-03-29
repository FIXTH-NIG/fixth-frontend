# Development Guidelines & Code Standards

## 🚀 Quick Start for New Developers

### Folder Structure Overview

```
src/
├── components/        # React components (organized by feature/layout)
├── pages/             # Page-level components
├── constants/         # 🆕 Application-wide constants
├── styles/            # 🆕 Global theme and design tokens
├── hooks/             # 🆕 Reusable React custom hooks
├── data/              # 🆕 Data layer (mock + API)
├── services/          # 🆕 Business logic and API calls (prepared)
├── utils/             # Utility functions
└── routes.js          # Route configuration
```

---

## 📦 Using Constants

### Breakpoints
Always use centralized breakpoints instead of magic numbers:

```javascript
// ❌ DON'T
const isMobile = screenWidth < 750;
if (windowWidth > 1024) { ... }

// ✅ DO
import { BREAKPOINTS } from '../constants/breakpoints';
const isMobile = useIsMobile(BREAKPOINTS.TABLET);
const isDesktop = !useIsMobile(BREAKPOINTS.DESKTOP_SMALL);
```

### Modal Titles
For profile/form modals, use the centralized configuration:

```javascript
// ✅ DO
import { MODAL_TITLES } from '../constants';
const title = MODAL_TITLES.experience; // "Add experience"
```

### Notification Timeouts
For toast/notification timeouts:

```javascript
// ✅ DO
import { NOTIFICATION_TIMEOUT } from '../constants';
setTimeout(() => close(), NOTIFICATION_TIMEOUT); // 2500ms
```

---

## 🎣 Using Custom Hooks

### useIsMobile(breakpoint)
Check if screen width is below a breakpoint:

```javascript
import { useIsMobile } from '../hooks';
import { BREAKPOINTS } from '../constants';

export function MyComponent() {
  const isMobile = useIsMobile(BREAKPOINTS.TABLET);      // < 750px
  const isSmallMobile = useIsMobile(BREAKPOINTS.MOBILE); // < 700px
  
  return <div>{isMobile ? <Mobile /> : <Desktop />}</div>;
}
```

### useModal(initialState)
Manage modal visibility with automatic scroll lock:

```javascript
import { useModal } from '../hooks';
import { MODAL_TITLES } from '../constants';

export function ProfileTab() {
  const [activeModal, setActiveModal, closeModal] = useModal();
  const title = MODAL_TITLES[activeModal];
  
  return (
    <>
      <button onClick={() => setActiveModal('experience')}>Add</button>
      {activeModal && (
        <Modal title={title} onClose={closeModal}>
          {/* Form content */}
        </Modal>
      )}
    </>
  );
}
```

### useSelectedItemFromParams(data, paramKey)
Get selected item from URL params:

```javascript
import { useSelectedItemFromParams } from '../hooks';
import { jobsData } from '../data/mock';

export function JobsTab() {
  const selectedJob = useSelectedItemFromParams(jobsData, 'jobId');
  
  return (
    <div>
      {selectedJob ? <JobDetails job={selectedJob} /> : <JobsList />}
    </div>
  );
}
```

---

## 🎨 Using Reusable UI Components

### Icon Components
Instead of duplicating SVG code:

```javascript
// ✅ DO
import { VerifiedIcon, DotSeparator, BookmarkIcon } from '@/components/ui/Icons';

export function JobCard({ job }) {
  return (
    <div>
      <h3>{job.companyName} <VerifiedIcon /></h3>
      <span>{job.location}</span>
      <DotSeparator /> {/* Small dot separator */}
      <span>{job.type}</span>
      <button><BookmarkIcon /></button>
    </div>
  );
}
```

### Button Components
Use pre-styled buttons with consistent behavior:

```javascript
// ✅ DO
import { PrimaryButton, SecondaryButton, IconButton } from '@/components/ui/buttons';

export function MyForm() {
  return (
    <form>
      <PrimaryButton type="submit">Save</PrimaryButton>
      <SecondaryButton type="button" onClick={cancel}>Cancel</SecondaryButton>
      <IconButton aria-label="close"><CloseIcon /></IconButton>
    </form>
  );
}
```

### Form Components
Use centralized form inputs:

```javascript
// ✅ DO
import { FormInput, FormTextarea, FormCheckbox, CheckboxLabel, FormGroup } from '@/components/ui/forms';

export function ExperienceForm() {
  const [title, setTitle] = useState('');
  const [isCurrentRole, setIsCurrentRole] = useState(false);
  
  return (
    <FormGroup>
      <FormInput
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <FormTextarea
        placeholder="Description"
      />
      
      <CheckboxLabel>
        <FormCheckbox
          type="checkbox"
          checked={isCurrentRole}
          onChange={(e) => setIsCurrentRole(e.target.checked)}
        />
        I currently work in this role
      </CheckboxLabel>
    </FormGroup>
  );
}
```

---

## 📊 Using Mock Data

### Jobs Data
```javascript
// ✅ DO
import { jobsData } from '../data/mock';

export function JobsList() {
  return (
    <div>
      {jobsData.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
```

### Inbox Data
```javascript
// ✅ DO
import { inboxThreads, inboxMessages } from '../data/mock';

export function InboxPanel() {
  const [selectedThread, setSelectedThread] = useState(null);
  
  return (
    <div>
      <ThreadList threads={inboxThreads} />
      {selectedThread && (
        <Messages threadId={selectedThread} messages={inboxMessages[selectedThread]} />
      )}
    </div>
  );
}
```

---

## 🎯 When to Create New Abstractions

### ✅ Create a Custom Hook When:
- Logic is used in 2+ components
- Logic involves side effects (useEffect)
- Logic could be reused in different contexts

### ✅ Create a Component When:
- A piece of UI is used multiple times
- A component has complex internal state
- A component encapsulates a specific feature

### ✅ Add to Icons When:
- An SVG is used in more than one file
- An icon represents a UI pattern (e.g., verified, bookmark)

---

## ❌ Common Mistakes to Avoid

```javascript
// ❌ DON'T: Hardcode breakpoints
const isMobile = screenWidth < 750;

// ✅ DO: Use constants
import { BREAKPOINTS } from '../constants';
const isMobile = useIsMobile(BREAKPOINTS.TABLET);

---

// ❌ DON'T: Duplicate SVG code
const VerifiedIcon = () => <svg>...</svg>;
const VerifiedIcon2 = () => <svg>...</svg>; // Same SVG!

// ✅ DO: Use shared components
import { VerifiedIcon } from '@/components/ui/Icons';

---

// ❌ DON'T: Scroll lock logic repeated
useEffect(() => {
  document.body.style.overflow = 'hidden';
  return () => { document.body.style.overflow = ''; };
}, [isOpen]);

// ✅ DO: Use custom hook
const [modal, setModal, closeModal] = useModal();

---

// ❌ DON'T: Hardcode strings
const title = "Add experience";
const timeout = 2500;

// ✅ DO: Use constants
import { MODAL_TITLES, NOTIFICATION_TIMEOUT } from '../constants';
const title = MODAL_TITLES.experience;
const timeout = NOTIFICATION_TIMEOUT;
```

---

## 🔍 Code Review Checklist

Before submitting a PR, verify:

- [ ] Uses constants instead of magic numbers
- [ ] Uses custom hooks instead of repeated logic
- [ ] Uses centralized icon/button/form components
- [ ] No duplicate code that should be abstracted
- [ ] Imports are from correct new locations
- [ ] No hardcoded strings (use constants)
- [ ] Mobile-first responsive approach
- [ ] Accessible HTML (ARIA labels, semantic markup)

---

## 📞 Questions?

Refer to:
- Specific component documentation in `src/components/ui/`
- Hook documentation in `src/hooks/`
- Constants structure in `src/constants/`
- Theme tokens in `src/styles/theme.js`

---

**Last Updated:** March 29, 2026  
**Architecture Version:** 2.0 (Component + Hooks-based)
