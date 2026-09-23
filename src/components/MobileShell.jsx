import { useNavigate } from 'react-router-dom'
import tabHomeActive from '../assets/icons/tab-home-active.svg'
import tabApplicationsActive from '../assets/icons/tab-applications-active.svg'
import tabProfileActive from '../assets/icons/tab-profile-active.svg'
import tabNotificationsActive from '../assets/icons/tab-notifications-active.svg'
import tabSettingsActive from '../assets/icons/tab-settings-active.svg'
import navHome from '../assets/icons/nav-home.svg'
import navApplications from '../assets/icons/nav-applications.svg'
import navProfile from '../assets/icons/nav-profile.svg'
import navNotifications from '../assets/icons/nav-notifications.svg'
import navSettings from '../assets/icons/nav-settings.svg'

const TABS = [
  {
    key: 'home',
    label: 'Home',
    to: '/student/home',
    icon: navHome,
    activeIcon: tabHomeActive,
    iconClassName: 'size-[18px]',
  },
  {
    key: 'applications',
    label: 'Applications',
    to: '/student/applications',
    icon: navApplications,
    activeIcon: tabApplicationsActive,
    iconClassName: 'h-[14px] w-[12px]',
  },
  {
    key: 'profile',
    label: 'My Profile',
    to: '/student/profile',
    icon: navProfile,
    activeIcon: tabProfileActive,
    iconClassName: 'h-[14px] w-[12px]',
  },
  {
    key: 'notifications',
    label: 'Notifications',
    to: '/student/notifications',
    icon: navNotifications,
    activeIcon: tabNotificationsActive,
    iconClassName: 'h-[14px] w-[12px]',
  },
  {
    key: 'settings',
    label: 'Settings',
    to: '/student/settings',
    icon: navSettings,
    activeIcon: tabSettingsActive,
    iconClassName: 'size-[14px]',
  },
]

export default function MobileShell({ active, children }) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full bg-off-white">
      <div className="mx-auto w-full max-w-[480px] px-[12px] pt-[16px] pb-[103px]">{children}</div>

      <nav className="fixed right-0 bottom-0 left-0 border-t border-light-ash bg-[#f3f3f3]">
        <div className="mx-auto flex h-[79px] w-full max-w-[480px] items-center justify-center gap-[8px] p-[12px]">
          {TABS.map((tab) => {
            const isActive = active === tab.key
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => navigate(tab.to)}
                className={`flex min-w-px flex-1 flex-col items-center justify-center gap-[8px] self-stretch rounded-[12px] px-[12px] py-[8px] ${
                  isActive ? 'bg-light-ash' : ''
                }`}
              >
                <img
                  src={isActive ? tab.activeIcon : tab.icon}
                  alt=""
                  className={`shrink-0 ${tab.iconClassName}`}
                />
                <span
                  className={`text-[10px] font-medium tracking-[-0.4px] whitespace-nowrap ${
                    isActive ? 'text-primary-blue' : 'text-black'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
