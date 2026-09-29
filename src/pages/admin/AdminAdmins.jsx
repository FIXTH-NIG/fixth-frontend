import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminShell from '../../components/AdminShell'
import Button from '../../components/Button'
import { FilterMenu, ViewingPanel } from '../../components/AdminTable'
import adminAvatar from '../../assets/images/admin-avatar.png'
import { ADMINS } from '../../lib/admin'

const FILTER_OPTIONS = ['None', 'Super Admin', 'Admin']

export default function AdminAdmins({ role = 'Super Admin', basePath = '/admin', showAdmins = true }) {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('None')
  const [admins, setAdmins] = useState(ADMINS)
  const [selectedId, setSelectedId] = useState(null)

  const visible = admins.filter((admin) => filter === 'None' || admin.role === filter)
  const selected = admins.find((admin) => admin.id === selectedId)

  const setRole = (id, role) => {
    setAdmins((prev) => prev.map((admin) => (admin.id === id ? { ...admin, role } : admin)))
  }

  const removeAdmin = (id) => {
    setAdmins((prev) => prev.filter((admin) => admin.id !== id))
    if (selectedId === id) setSelectedId(null)
  }

  return (
    <AdminShell active="admins" role={role} basePath={basePath} showAdmins={showAdmins}>
      <div className="flex min-w-[1120px] items-start justify-between gap-[20px]">
        <div className="flex w-[670px] shrink-0 flex-col gap-[20px]">
          <div className="flex w-full flex-col">
            <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] whitespace-nowrap text-black">
              Admins
            </h1>
            <p className="w-[552px] text-[16px] tracking-[-0.48px] text-primary-grey">
              Manage your admins
            </p>
          </div>

          <Button onClick={() => navigate(`${basePath}/admins/new`)} className="w-[200px] flex-none">
            Add a New Admin
          </Button>

          <div className="flex w-full items-center justify-between">
            <p className="font-heading text-[20px] font-medium tracking-[-0.8px] whitespace-nowrap text-black">
              All
            </p>
            <FilterMenu value={filter} onChange={setFilter} options={FILTER_OPTIONS} />
          </div>

          <div className="flex w-full flex-col gap-[24px]">
            {visible.map((admin) => (
              <article
                key={admin.id}
                className="w-full rounded-[20px] border border-light-ash bg-off-white p-[16px]"
              >
                <div className="flex w-full flex-col gap-[16px]">
                  <div className="flex w-full items-start justify-between">
                    <div className="flex items-start gap-[8px]">
                      <img
                        src={adminAvatar}
                        alt={admin.name}
                        className="size-[36px] shrink-0 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <h3 className="font-heading text-[20px] font-medium tracking-[-0.8px] whitespace-nowrap text-black">
                          {admin.name}
                        </h3>
                        <p className="text-[13px] font-medium tracking-[-0.52px] text-primary-blue">
                          {admin.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  {!admin.you && (
                    <div className="flex w-full items-start gap-[4px]">
                      <button
                        type="button"
                        onClick={() =>
                          setRole(admin.id, admin.role === 'Admin' ? 'Super Admin' : 'Admin')
                        }
                        className="flex min-w-px flex-1 cursor-pointer items-center justify-center rounded-[20px] bg-[rgba(15,53,219,0.1)] px-[20px] py-[8px] text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-primary-blue"
                      >
                        {admin.role === 'Admin' ? 'Make Super Admin' : 'Demote to Admin'}
                      </button>
                      <button
                        type="button"
                        onClick={() => removeAdmin(admin.id)}
                        className="flex min-w-px flex-1 cursor-pointer items-center justify-center rounded-[20px] bg-[rgba(227,54,41,0.1)] px-[20px] py-[8px] text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-error-red"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <ViewingPanel>
            {selected && (
              <div className="flex w-full flex-col items-center gap-[12px] text-center">
                <img src={adminAvatar} alt={selected.name} className="size-[120px] rounded-full object-cover" />
                <p className="font-heading text-[32px] font-medium tracking-[-1.28px] text-black">
                  {selected.name}
                </p>
                <p className="text-[16px] font-medium tracking-[-0.64px] text-primary-blue">
                  {selected.role}
                </p>
              </div>
            )}
          </ViewingPanel>
      </div>
    </AdminShell>
  )
}
