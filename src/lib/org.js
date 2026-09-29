export const ORG = {
  name: 'Fixth',
  industry: 'Technology',
  verified: true,
  bio: 'We are a cutting edge organization bridging the gap between SIWES students and Companies looking to hire them.',
  website: 'fixth.com',
  officeAddress: 'No 5, Arowojaye street, Off Olarenwaju Junction. Surulere, Lagos.',
  studentsHired: 20,
}

const LISTING_COPY = {
  title: 'Computer Engineering Intern',
  description:
    'We’re looking for a fast, reliable, and skilled computer engineer to join our team and help build, maintain, and improve high-quality digital products.',
  location: 'Surulere, Lagos',
  date: '12/04/2027',
  applicants: '27 applicants',
  posted: '12/04/2026',
}

export const LISTINGS = [
  { id: 1, ...LISTING_COPY, status: 'Open', badge: null, bookmark: false },
  { id: 2, ...LISTING_COPY, status: 'Close', badge: null, bookmark: false },
  { id: 3, ...LISTING_COPY, status: 'Open', badge: null, bookmark: false },
  { id: 4, ...LISTING_COPY, status: 'Open', badge: null, bookmark: false },
  { id: 5, ...LISTING_COPY, status: 'Close', badge: null, bookmark: false },
  {
    id: 6,
    ...LISTING_COPY,
    company: 'Deglobals Nig Limited',
    status: null,
    badge: 'Paid',
    bookmark: true,
  },
]

export const PLACEMENT_DETAIL = {
  title: 'Civil Engineering Intern',
  disciplines: ['Civil Engineering', 'Building', 'Architecture', 'Surverying'],
  postedOn: 'Posted on 12/11/2026',
  deadline: '12/04/2027',
  submitted: '25',
  duration: '6 months',
  location: 'Surulere, Lagos.',
  link: 'https://fixth.com/applications/civil-...',
}

const APPLICANT_COPY = {
  name: 'Makanjuola Olaoluwa',
  course: 'Computer Engineering',
  bio: 'I’m a Computer Engineering student looking for experience in prospective organizations. Thanks for viewing my profile.',
  location: 'Surulere, Lagos',
  date: '12/04/2027',
  duration: '6 months',
}

export const APPLICANTS = [
  { id: 1, ...APPLICANT_COPY, status: 'accepted' },
  { id: 2, ...APPLICANT_COPY, status: 'rejected' },
  { id: 3, ...APPLICANT_COPY, status: 'shortlisted' },
  { id: 4, ...APPLICANT_COPY, status: null },
  { id: 5, ...APPLICANT_COPY, status: null },
]

export const ORG_NOTIFICATIONS = [
  {
    id: 1,
    title: '12 students applied to your listing',
    body: 'Your listing for ‘Computer Engineering intern has been applied for by 12 students. Click to check them out.',
    date: '12/03/2026',
    time: '12:12PM',
    unread: true,
  },
  {
    id: 2,
    title: '12 students applied to your listing',
    body: 'Your listing for ‘Computer Engineering intern has been applied for by 12 students. Click to check them out.',
    date: '12/03/2026',
    time: '12:12PM',
    unread: true,
  },
  {
    id: 3,
    title: '12 students applied to your listing',
    body: 'Your listing for ‘Computer Engineering intern has been applied for by 12 students. Click to check them out.',
    date: '12/03/2026',
    time: '12:12PM',
    unread: true,
  },
  {
    id: 4,
    title: 'Your placement has been listed!',
    body: 'Your placement ‘Computer Engineering intern’ has been listed and has gone live. Click to check it out.',
    date: '12/03/2026',
    time: '12:12PM',
    unread: false,
  },
  {
    id: 5,
    title: 'Your placement has been listed!',
    body: 'Your placement ‘Computer Engineering intern’ has been listed and has gone live. Click to check it out.',
    date: '12/03/2026',
    time: '12:12PM',
    unread: false,
  },
  {
    id: 6,
    title: 'Your placement has been listed!',
    body: 'Your placement ‘Computer Engineering intern’ has been listed and has gone live. Click to check it out.',
    date: '12/03/2026',
    time: '12:12PM',
    unread: false,
  },
]

export const STUDENT_VIEW_SKILLS = [
  'Civil Engineering',
  'Woodwork',
  'Boring',
  'Graph analysis',
  'Office work',
  'Quality control',
  'Casting',
  'Lab work',
]
