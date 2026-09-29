import { useState } from 'react'
import AdminShell from '../../components/AdminShell'
import StatusPill from '../../components/StatusPill'
import { ChipSelect, TableRow, ViewingPanel } from '../../components/AdminTable'
import { VERIFICATION_STATS, STUDENT_ROWS } from '../../lib/admin'

const STAT_STYLES = {
  Submitted: { box: 'bg-[rgba(15,53,219,0.1)]', text: 'text-[#0f35db]' },
  Pending: { box: 'bg-light-ash', text: 'text-primary-grey' },
  Verified: { box: 'bg-[rgba(39,149,67,0.1)]', text: 'text-success-green' },
  Rejected: { box: 'bg-[rgba(227,54,41,0.1)]', text: 'text-error-red' },
}

const FILTER_OPTIONS = ['None', 'Verified', 'Pending', 'Rejected']
const TABS = ['Student Verification', 'Organization Verification']

export default function AdminHome({ role = 'Super Admin', basePath = '/admin', showAdmins = true }) {
  const [tab, setTab] = useState('Student Verification')
  const [filter, setFilter] = useState('None')
  const [selectedId, setSelectedId] = useState(null)

  const visible = STUDENT_ROWS.filter((row) => {
    if (filter === 'None') return true
    return row.status === filter
  })

  const selected = STUDENT_ROWS.find((row) => row.id === selectedId)

  return (
    <AdminShell active="home" role={role} basePath={basePath} showAdmins={showAdmins}>
      <div className="flex min-w-[1120px] items-start justify-between gap-[20px]">
        <div className="flex w-[670px] shrink-0 flex-col gap-[20px]">
          <div className="flex w-full flex-col">
            <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] whitespace-nowrap text-black">
              Gooday John
            </h1>
            <p className="w-[552px] text-[16px] tracking-[-0.48px] text-primary-grey">
              Here’s what’s happening across fixth today.
            </p>
          </div>

          <div className="flex w-full flex-col gap-[20px]">
            <div className="flex w-full items-start gap-[4px] rounded-[20px] bg-light-ash p-[4px]">
              {TABS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setTab(option)}
                  className={`flex min-w-px flex-1 items-center justify-center rounded-[16px] p-[16px] text-[16px] font-medium tracking-[-0.64px] whitespace-nowrap text-black ${
                    tab === option ? 'bg-off-white' : ''
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex w-full items-start gap-[4px]">
              {VERIFICATION_STATS.map((stat) => {
                const style = STAT_STYLES[stat.label]
                return (
                  <div
                    key={stat.label}
                    className={`flex min-w-px flex-1 flex-col items-start justify-center gap-[2px] rounded-[20px] p-[20px] font-heading ${style.box} ${style.text}`}
                  >
                    <p className="text-[32px] font-medium tracking-[-1.28px]">{stat.count}</p>
                    <p className="text-[16px] tracking-[-0.64px]">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex w-full flex-col gap-[20px]">
            <div className="flex w-full items-center justify-between">
              <p className="text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-black">
                Today
              </p>
              <div className="flex items-center">
                <ChipSelect label="Filter" value={filter} onChange={setFilter} options={FILTER_OPTIONS} />
              </div>
            </div>

            <div className="flex w-full flex-col gap-[8px]">
              <div className="flex w-full items-center justify-between rounded-[14px] px-[14px] font-heading text-[13px] text-primary-grey">
                <span className="w-[173px]">Name</span>
                <span className="w-[173px]">Course</span>
                <span className="w-[57px]">Status</span>
                <span className="w-[84px]">Submitted</span>
              </div>
              {visible.map((row) => (
                <TableRow
                  key={row.id}
                  onClick={() => setSelectedId(row.id)}
                  selected={selectedId === row.id}
                  columns={[
                    {
                      width: 173,
                      className: 'font-heading text-[16px] tracking-[-0.64px] text-black',
                      content: row.name,
                    },
                    {
                      width: 173,
                      className: 'font-heading text-[16px] tracking-[-0.64px] text-black',
                      content: row.course,
                    },
                    {
                      width: 57,
                      content: <StatusPill status={row.status} />,
                    },
                    {
                      width: 84,
                      className: 'text-right font-heading text-[16px] tracking-[-0.64px] text-primary-grey',
                      content: row.created,
                    },
                  ]}
                />
              ))}
            </div>
          </div>
        </div>

        <ViewingPanel>
          {selected && (
            <div className="flex w-full flex-col items-center gap-[12px] text-center">
              <p className="font-heading text-[32px] font-medium tracking-[-1.28px] text-black">
                {selected.name}
              </p>
              <p className="text-[20px] font-medium tracking-[-0.8px] text-primary-grey">
                {selected.course}
              </p>
              <StatusPill status={selected.status} />
              <p className="text-[16px] tracking-[-0.48px] text-primary-grey">
                Submitted {selected.created}
              </p>
            </div>
          )}
        </ViewingPanel>
      </div>
    </AdminShell>
  )
}
