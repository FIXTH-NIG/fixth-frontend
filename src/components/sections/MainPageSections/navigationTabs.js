import { ROUTES } from '../../../routes'

export const TAB_IDS = {
  home: 'home',
  jobs: 'jobs',
  notifications: 'notifications',
  inbox: 'inbox',
  profile: 'profile',
  settings: 'settings',
}

export const SIDEBAR_TABS = [
  { id: TAB_IDS.home, label: 'Home', icon: 'home', to: ROUTES.appHome },
  { id: TAB_IDS.jobs, label: 'Jobs', icon: 'jobs', to: ROUTES.appJobs },
  { id: TAB_IDS.notifications, label: 'Notifications', icon: 'notifications', to: ROUTES.appNotifications },
  { id: TAB_IDS.inbox, label: 'Inbox', icon: 'inbox', to: ROUTES.appInbox },
  { id: TAB_IDS.profile, label: 'Profile', icon: 'profile', to: ROUTES.appProfile },
]

export const MOBILE_TABS = [
  { id: TAB_IDS.home, label: 'Home', icon: 'home', to: ROUTES.appHome },
  { id: TAB_IDS.jobs, label: 'Jobs', icon: 'jobs', to: ROUTES.appJobs },
  { id: TAB_IDS.inbox, label: 'Inbox', icon: 'inbox', to: ROUTES.appInbox },
  { id: TAB_IDS.profile, label: 'Profile', icon: 'profile', to: ROUTES.appProfile },
]
