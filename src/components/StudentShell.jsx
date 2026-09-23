import { useNavigate } from 'react-router-dom'
import logo from '../assets/icons/logo.svg'
import avatarSidebar from '../assets/images/avatar-sidebar.png'
import navHome from '../assets/icons/nav-home.svg'
import navProfile from '../assets/icons/nav-profile.svg'
import navApplications from '../assets/icons/nav-applications.svg'
import navNotifications from '../assets/icons/nav-notifications.svg'
import navSettings from '../assets/icons/nav-settings.svg'
import navLogout from '../assets/icons/nav-logout.svg'

const TOP_ITEMS = [
  { key: 'home', label: 'Home', icon: navHome, iconClassName: 'size-[18px]', to: '/student/home' },
  { key: 'profile', label: 'My Profile', icon: navProfile, iconClassName: 'h-[14px] w-[12px]', to: '/student/profile' },
  { key: 'applications', label: 'Applications', icon: navApplications, iconClassName: 'h-[14px] w-[12px]', to: '/student/applications' },
  { key: 'notifications', label: 'Notifications', icon: navNotifications, iconClassName: 'h-[14px] w-[12px]', to: '/student/notifications' },
]

const BOTTOM_ITEMS = [
  { key: 'settings', label: 'Settings', icon: navSettings, iconClassName: 'size-[14px]', to: '/student/settings' },
  { key: 'logout', label: 'Logout', icon: navLogout, iconClassName: 'size-[12px]', to: '/student/login' },
]

function NavItem({ item, active, onNavigate }) {
  const className = `flex w-full items-center gap-[8px] rounded-[12px] px-[12px] py-[8px] text-left ${
    active ? 'bg-off-white' : 'hover:bg-off-white/60'
  }`
  const content = (
    <>
      <img src={item.icon} alt="" className={`shrink-0 ${item.iconClassName}`} />
      <span className="text-[13px] font-medium tracking-[-0.52px] text-black">{item.label}</span>
    </>
  )
  if (item.to) {
    return (
      <button type="button" className={className} onClick={() => onNavigate(item.to)}>
        {content}
      </button>
    )
  }
  return (
    <button type="button" className={className}>
      {content}
    </button>
  )
}

export default function StudentShell({ active = 'home', children }) {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen w-full items-start gap-[12px] bg-off-white p-[12px]">
      <aside className="sticky top-[12px] flex h-[calc(100vh-24px)] w-[236px] shrink-0 flex-col gap-[50px] rounded-[20px] bg-light-ash px-[21px] py-[24px]">
        <img src={logo} alt="fixth" className="h-[29px] w-[68px]" />

        <div className="flex w-full flex-col gap-[24px]">
          <div className="flex items-center gap-[6px]">
            <img src={avatarSidebar} alt="John Doe" className="size-[36px] shrink-0 rounded-full object-cover" />
            <div className="flex flex-col gap-[2px]">
              <p className="text-[16px] font-medium tracking-[-0.64px] text-black">John Doe</p>
              <p className="text-[10px] font-medium tracking-[-0.4px] text-primary-blue">Civil Engineering</p>
            </div>
          </div>

          <nav className="flex w-full flex-col gap-[8px]">
            {TOP_ITEMS.map((item) => (
              <NavItem key={item.key} item={item} active={active === item.key} onNavigate={navigate} />
            ))}
          </nav>
        </div>

        <div className="flex w-full flex-1 flex-col justify-end gap-[8px]">
          {BOTTOM_ITEMS.map((item) => (
            <NavItem key={item.key} item={item} active={active === item.key} onNavigate={navigate} />
          ))}
        </div>
      </aside>

      <main className="min-w-0 flex-1 rounded-[20px] bg-off-white px-[50px] py-[20px]">
        {children}
      </main>
    </div>
  )
}
