/**
 * Modal Configuration
 * Centralized modal titles and labels
 */

export const MODAL_TITLES = {
  profile: 'Create profile',
  experience: 'Add experience',
  education: 'Add education',
  skills: 'Add skills',
  projects: 'Add project',
};

export const FORM_PLACEHOLDERS = {
  experience: {
    title: 'Title',
    employmentType: 'Employment type',
    company: 'Company',
    startDate: 'Start date',
    endDate: 'End date',
    location: 'Location',
    locationType: 'Location type',
    description: 'Description',
  },
  education: {
    school: 'School',
    degree: 'Degree',
    fieldOfStudy: 'Field of study',
    startDate: 'Start date',
    endDate: 'End date',
    grade: 'Grade',
    description: 'Description',
  },
  profile: {
    fullName: 'Full name',
    about: 'About',
    discipline: 'Discipline',
    school: 'School',
    duration: 'Oct 2022 - Oct 2027',
    location: 'Location',
  },
};

export const FORM_HINTS = {
  skills:
    'We recommend adding your top 5 skills used in this role, they\'ll also appear in your skills section.',
};
