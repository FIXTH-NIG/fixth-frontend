export const STEP_COUNT = {
  student: 5,
  organization: 3,
}

const numberWord = { 3: 'three', 5: 'five' }

export const copy = {
  student: {
    signup: {
      nameLabel: 'Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Student email',
      emailPlaceholder: 'johndoe@example.com',
    },
    login: {
      emailLabel: 'Student email',
      emailPlaceholder: 'johndoe@example.com',
    },
    forgotPassword: {
      subtitle: 'Kindly enter your student email',
      emailLabel: 'Student email',
      emailPlaceholder: 'johndoe@example.com',
    },
  },
  organization: {
    signup: {
      nameLabel: 'Company name',
      namePlaceholder: 'fixth',
      emailLabel: 'Company email',
      emailPlaceholder: 'hello@fixth.com',
    },
    login: {
      emailLabel: 'Company email',
      emailPlaceholder: 'hello@fixth.com',
    },
    forgotPassword: {
      subtitle: 'Kindly enter your company email',
      emailLabel: 'Company email',
      emailPlaceholder: 'hello@fixth.com',
    },
  },
}

export function welcomeSubtitle(userType) {
  const n = STEP_COUNT[userType]
  return `Set up your profile with just ${numberWord[n]} (${n}) steps`
}

export const otherType = (userType) => (userType === 'student' ? 'organization' : 'student')

export const STUDENT_ONBOARDING_STEPS = ['profile', 'about', 'internship-info', 'skills', 'location-sharing']
export const ORGANIZATION_ONBOARDING_STEPS = ['org-details', 'about', 'verification']

export const onboardingSteps = (userType) =>
  userType === 'student' ? STUDENT_ONBOARDING_STEPS : ORGANIZATION_ONBOARDING_STEPS

export const COURSE_OPTIONS = [
  'Civil Engineering',
  'Electrical Engineering',
  'Mechatronics Engineering',
  'Mechanical Engineering',
  'Computer Engineering',
]

export const LEVEL_OPTIONS = ['100 Level', '200 Level', '300 Level', '400 Level', '500 Level']

export const DURATION_OPTIONS = ['3 months', '6 months', '12 months']

export const SKILL_OPTIONS = [
  'Civil Engineering',
  'Electrical Engineering',
  'Mechatronics Engineering',
  'Mechanical Engineering',
  'Computer Engineering',
  'Woodwork',
  'Boring',
  'Graph analysis',
  'Office work',
  'Quality control',
  'Casting',
  'Lab work',
]
