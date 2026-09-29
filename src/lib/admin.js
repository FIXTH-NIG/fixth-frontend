export const ADMIN_USER = {
  name: 'John Doe',
  role: 'Super Admin',
}

export const VERIFICATION_STATS = [
  { label: 'Submitted', count: 92 },
  { label: 'Pending', count: 32 },
  { label: 'Verified', count: 48 },
  { label: 'Rejected', count: 12 },
]

const STUDENT_ROW_COPY = {
  name: 'John Doe',
  course: 'Civil Engineering',
  created: '12/04/2027',
}

export const STUDENT_ROWS = [
  { id: 1, ...STUDENT_ROW_COPY, status: 'Pending' },
  { id: 2, ...STUDENT_ROW_COPY, status: 'Pending' },
  { id: 3, ...STUDENT_ROW_COPY, status: 'Verified' },
  { id: 4, ...STUDENT_ROW_COPY, status: 'Pending' },
  { id: 5, ...STUDENT_ROW_COPY, status: 'Pending' },
  { id: 6, ...STUDENT_ROW_COPY, status: 'Suspended' },
  { id: 7, ...STUDENT_ROW_COPY, status: 'Verified' },
  { id: 8, ...STUDENT_ROW_COPY, status: 'Pending' },
  { id: 9, ...STUDENT_ROW_COPY, status: 'Verified' },
  { id: 10, ...STUDENT_ROW_COPY, status: 'Pending' },
  { id: 11, ...STUDENT_ROW_COPY, status: 'Suspended' },
  { id: 12, ...STUDENT_ROW_COPY, status: 'Verified' },
  { id: 13, ...STUDENT_ROW_COPY, status: 'Suspended' },
]

export const ORG_ROWS = [
  { id: 1, name: 'Deglobals Nig Limited', industry: 'Technology', status: 'Verified', created: '12/04/2027' },
  { id: 2, name: 'Deglobals Nig Limited', industry: 'Technology', status: 'Verified', created: '12/04/2027' },
  { id: 3, name: 'Deglobals Nig Limited', industry: 'Technology', status: 'Pending', created: '12/04/2027' },
  { id: 4, name: 'Deglobals Nig Limited', industry: 'Technology', status: 'Pending', created: '12/04/2027' },
  { id: 5, name: 'Deglobals Nig Limited', industry: 'Technology', status: 'Suspended', created: '12/04/2027' },
  { id: 6, name: 'Deglobals Nig Limited', industry: 'Technology', status: 'Verified', created: '12/04/2027' },
]

const PLACEMENT_COPY = {
  title: 'Computer Engineering Intern',
  company: 'Deglobals Nig Limited',
  description:
    'We’re looking for a fast, reliable, and skilled computer engineer to join our team and help build, maintain, and improve high-quality digital products.',
  location: 'Surulere, Lagos',
  date: '12/04/2027',
  applicants: '27 applicants',
  posted: '12/04/2026',
}

export const ADMIN_PLACEMENTS = [
  { id: 1, ...PLACEMENT_COPY, status: 'Removed' },
  { id: 2, ...PLACEMENT_COPY, status: 'Live' },
  { id: 3, ...PLACEMENT_COPY, status: 'Live' },
  { id: 4, ...PLACEMENT_COPY, status: 'Removed' },
  { id: 5, ...PLACEMENT_COPY, status: 'Live' },
]

export const ADMINS = [
  { id: 1, name: 'John Doe(You)', role: 'Super Admin', you: true },
  { id: 2, name: 'Makanjuola Olaoluwa', role: 'Super Admin' },
  { id: 3, name: 'Makanjuola Olaoluwa', role: 'Admin' },
  { id: 4, name: 'Makanjuola Olaoluwa', role: 'Admin' },
]
