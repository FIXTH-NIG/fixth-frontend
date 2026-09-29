import { useNavigate } from 'react-router-dom'
import AdminShell from '../../components/AdminShell'

export default function AdminSettings({ role = 'Super Admin', basePath = '/admin', showAdmins = true }) {
  const navigate = useNavigate()

  const rows = [
    { key: 'edit-profile', label: 'Edit Profile', to: `${basePath}/profile/edit` },
    { key: 'change-password', label: 'Change Password', to: `${basePath}/change-password` },
    { key: 'forgot-password', label: 'Forgot Password', to: `${basePath}/forgot-password` },
  ]

  return (
    <AdminShell active="settings" role={role} basePath={basePath} showAdmins={showAdmins}>
      <div className="mx-auto flex w-full max-w-[552px] flex-col gap-[50px]">
        <div className="flex w-full flex-col">
          <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] whitespace-nowrap text-black">
            Settings
          </h1>
          <p className="text-[16px] tracking-[-0.48px] text-primary-grey">
            Customize to your taste.
          </p>
        </div>

        <div className="flex w-full flex-col gap-[12px]">
          {rows.map((row) => (
            <button
              key={row.key}
              type="button"
              onClick={() => navigate(row.to)}
              className="w-full rounded-[12px] border border-light-ash border-solid p-[16px] text-left text-[16px] tracking-[-0.48px] text-black"
            >
              {row.label}
            </button>
          ))}
        </div>
      </div>
    </AdminShell>
  )
}
