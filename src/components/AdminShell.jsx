import { useNavigate } from 'react-router-dom'
import logo from '../assets/icons/logo.svg'
import adminAvatar from '../assets/images/avatar-sidebar.png'
import navHome from '../assets/icons/nav-home.svg'
import navStudents from '../assets/icons/nav-profile.svg'
import navOrgs from '../assets/icons/org-profile.svg'
import navPlacements from '../assets/icons/nav-placements.svg'
import navAdmins from '../assets/icons/nav-admins.svg'
import navSettings from '../assets/icons/nav-settings.svg'
import navLogout from '../assets/icons/nav-logout-alt.svg'

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

export default function AdminShell({
  active = null,
  role = 'Super Admin',
  basePath = '/admin',
  showAdmins = true,
  children,
}) {
  const navigate = useNavigate()

  const topItems = [
    { key: 'home', label: 'Home', icon: navHome, iconClassName: 'size-[18px]', to: `${basePath}/home` },
    { key: 'students', label: 'Students', icon: navStudents, iconClassName: 'h-[14px] w-[12px]', to: `${basePath}/students` },
    { key: 'organizations', label: 'Organizations', icon: navOrgs, iconClassName: 'size-[15px]', to: `${basePath}/organizations` },
    { key: 'placements', label: 'Placements', icon: navPlacements, iconClassName: 'size-[15px]', to: `${basePath}/placements` },
    ...(showAdmins
      ? [{ key: 'admins', label: 'Admins', icon: navAdmins, iconClassName: 'size-[15px]', to: `${basePath}/admins` }]
      : []),
  ]

  const bottomItems = [
    { key: 'settings', label: 'Settings', icon: navSettings, iconClassName: 'size-[14px]', to: `${basePath}/settings` },
    { key: 'logout', label: 'Logout', icon: navLogout, iconClassName: 'size-[16px]', to: `${basePath}/login` },
  ]

  return (
    <div className="flex min-h-screen w-full items-start gap-[12px] bg-off-white p-[12px]">
      <aside className="sticky top-[12px] flex h-[calc(100vh-24px)] w-[236px] shrink-0 flex-col gap-[50px] rounded-[20px] bg-light-ash px-[21px] py-[24px]">
        <img src={logo} alt="fixth" className="h-[29px] w-[68px]" />

        <div className="flex w-full flex-col gap-[24px]">
          <div className="flex items-center gap-[6px]">
            <img src={adminAvatar} alt="John Doe" className="size-[36px] shrink-0 rounded-full object-cover" />
            <div className="flex flex-col gap-[2px]">
              <p className="text-[16px] font-medium tracking-[-0.64px] text-black">John Doe</p>
              <p className="text-[10px] font-medium tracking-[-0.4px] text-primary-blue">{role}</p>
            </div>
          </div>

          <nav className="flex w-full flex-col gap-[8px]">
            {topItems.map((item) => (
              <NavItem key={item.key} item={item} active={active === item.key} onNavigate={navigate} />
            ))}
          </nav>
        </div>

        <div className="flex w-full flex-1 flex-col justify-end gap-[8px]">
          {bottomItems.map((item) => (
            <NavItem key={item.key} item={item} active={active === item.key} onNavigate={navigate} />
          ))}
        </div>
      </aside>

      <main className="min-w-0 flex-1 overflow-x-auto rounded-[20px] bg-off-white p-[20px]">
        {children}
      </main>
    </div>
  )
}
