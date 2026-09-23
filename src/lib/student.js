export const STUDENT = {
  name: 'John Doe',
  course: 'Civil Engineering',
  institution: 'Federal University Oye Ekiti',
  level: '400',
  location: 'Surulere, Lagos',
  startDate: '12/04/2027',
  duration: '6 months',
  applicationsSubmitted: 20,
  bio: 'I’m a Civil Engineering student looking for experience in prospective organizations. Thanks for viewing my profile.',
}

const OPPORTUNITY_COPY = {
  title: 'Computer Engineering Intern',
  company: 'Deglobals Nig Limited',
  description:
    'We’re looking for a fast, reliable, and skilled computer engineer to join our team and help build, maintain, and improve high-quality digital products.',
  location: 'Surulere, Lagos',
  date: '12/04/2027',
  applicants: '27 applicants',
  category: 'Computer Engineering',
}

export const OPPORTUNITIES = [1, 2, 3, 4, 5].map((id) => ({ id, ...OPPORTUNITY_COPY, badge: null })) //
  .concat([{ id: 6, ...OPPORTUNITY_COPY, badge: 'Paid' }])

export const OPPORTUNITY_DETAIL = {
  title: 'Civil Engineering Intern',
  company: 'Deglobals Nig Limited',
  postedOn: 'Posted on 12/11/2026',
  deadline: '12/04/2027',
  submitted: '25',
  duration: '6 months',
  location: 'Surulere, Lagos.',
  link: 'https://fixth.com/applications/civil-...',
}

export const APPLICATIONS = [
  { ...OPPORTUNITY_COPY, id: 1, status: 'Submitted', badge: null },
  { ...OPPORTUNITY_COPY, id: 2, status: 'Viewed', badge: null },
  { ...OPPORTUNITY_COPY, id: 3, status: 'Rejected', badge: null },
  { ...OPPORTUNITY_COPY, id: 4, status: 'Shortlisted', badge: null },
  { ...OPPORTUNITY_COPY, id: 5, status: null, badge: 'Unpaid' },
  { ...OPPORTUNITY_COPY, id: 6, status: null, badge: 'Paid' },
]

export const APPLICATION_STATS = [
  { label: 'Submitted', count: 20 },
  { label: 'Viewed', count: 19 },
  { label: 'Shortlisted', count: 5 },
  { label: 'Accepted', count: 3 },
  { label: 'Rejected', count: 1 },
]

export const NOTIFICATIONS = [
  {
    id: 1,
    title: 'Application Accepted!',
    body: 'Your Internship application has been accepted by Daylock Global Nig Limited. Keep a close watch on your email inbox for future updates.',
    date: '12/03/2026',
    time: '12:12PM',
    unread: true,
  },
  {
    id: 2,
    title: 'Application Shortlisted!',
    body: 'Your Internship application has been shortlisted by Daylock Global Nig Limited. Keep a close watch on your email inbox for future updates.',
    date: '12/03/2026',
    time: '12:12PM',
    unread: true,
  },
  {
    id: 3,
    title: 'Application Viewed!',
    body: 'Your Internship application has been viewed by Daylock Global Nig Limited. Keep a close watch on your email inbox for future updates.',
    date: '12/03/2026',
    time: '12:12PM',
    unread: true,
  },
  {
    id: 4,
    title: 'Application Submitted!',
    body: 'Your Internship application has been submitted to Daylock Global Nig Limited. Keep a close watch on your email inbox for future updates.',
    date: '12/03/2026',
    time: '12:12PM',
    unread: false,
  },
  {
    id: 5,
    title: 'Application Rejected!',
    body: 'Your Internship application has been rejected by SDDS Global Nig Limited. Keep a close watch on your email inbox for future updates.',
    date: '12/03/2026',
    time: '12:12PM',
    unread: false,
  },
  {
    id: 6,
    title: 'Application submitted!',
    body: 'Your Internship application has been submitted to Daylock Global Nig Limited. Keep a close watch on your email inbox for future updates.',
    date: '12/03/2026',
    time: '12:12PM',
    unread: false,
  },
]

export const PROJECTS = [
  {
    id: 'swep-woodwork',
    title: 'SWEP Woodwork Project',
    shortDescription: 'I experimented with woodwork apparatus and learnt alot',
  },
]

export const PROJECT_DETAIL = {
  title: 'SWEP Woodwork Project',
  shortDescription: 'I experimented with woodwork apparatus and learnt alot',
}
