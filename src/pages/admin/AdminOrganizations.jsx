import { useState } from 'react'
import AdminShell from '../../components/AdminShell'
import StatusPill from '../../components/StatusPill'
import { AdminSearch, ChipSelect, FilterMenu, TableRow, ViewingPanel } from '../../components/AdminTable'
import emptyApplied from '../../assets/icons/empty-applied.svg'
import { ORG_ROWS } from '../../lib/admin'

const FILTER_OPTIONS = ['None', 'Verified', 'Pending', 'Suspended']
const SORT_OPTIONS = ['Alphabetically']

export default function AdminOrganizations({ role = 'Super Admin', basePath = '/admin', showAdmins = true }) {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('Alphabetically')
  const [filter, setFilter] = useState('None')
  const [selectedId, setSelectedId] = useState(null)

  const visible = ORG_ROWS.filter((row) => {
    const q = query.trim().toLowerCase()
    const matchesQuery =
      q.length === 0 ||
      row.name.toLowerCase().includes(q) ||
      row.industry.toLowerCase().includes(q)
    const matchesFilter = filter === 'None' || row.status === filter
    return matchesQuery && matchesFilter
  })

  const selected = ORG_ROWS.find((row) => row.id === selectedId)

  return (
    <AdminShell active="organizations" role={role} basePath={basePath} showAdmins={showAdmins}>
      <div className="flex min-w-[1120px] flex-col gap-[20px]">
        <AdminSearch
          value={query}
          onChange={setQuery}
          placeholder="Search by name, location or industry"
        />

        <div className="flex items-start justify-between gap-[20px]">
          <div className="flex w-[670px] shrink-0 flex-col gap-[20px]">
            <div className="flex w-full flex-col">
              <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] whitespace-nowrap text-black">
                Organization Accounts
              </h1>
              <p className="w-[552px] text-[16px] tracking-[-0.48px] text-primary-grey">
                Here is a list of all available organization accounts
              </p>
            </div>

            {visible.length > 0 ? (
              <>
                <div className="flex w-full items-center justify-between">
                  <p className="text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-black">
                    Today
                  </p>
                  <div className="flex items-center gap-[20px]">
                    <ChipSelect label="Sort" value={sort} onChange={setSort} options={SORT_OPTIONS} />
                    <FilterMenu value={filter} onChange={setFilter} options={FILTER_OPTIONS} />
                  </div>
                </div>

                <div className="flex w-full flex-col gap-[8px]">
                  <div className="flex w-full items-center justify-between rounded-[14px] px-[14px] font-heading text-[13px] text-primary-grey">
                    <span className="w-[173px]">Name</span>
                    <span className="w-[173px]">Industry</span>
                    <span className="w-[57px]">Status</span>
                    <span className="w-[84px]">Created</span>
                  </div>
                  {visible.map((row) => (
                    <TableRow
                      key={row.id}
                      onClick={() => setSelectedId(row.id)}
                      selected={selectedId === row.id}
                      columns={[
                        {
                          width: 173,
                          className: `font-heading text-[16px] tracking-[-0.64px] ${
                            row.status === 'Suspended' ? 'text-error-red' : 'text-black'
                          }`,
                          content: row.name,
                        },
                        {
                          width: 173,
                          className: `font-heading text-[16px] tracking-[-0.64px] ${
                            row.status === 'Suspended' ? 'text-error-red' : 'text-black'
                          }`,
                          content: row.industry,
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
              </>
            ) : (
              <div className="flex w-full flex-col items-center gap-[12px] py-10 text-center">
                <img src={emptyApplied} alt="" className="size-[123px] shrink-0" />
                <p className="w-[528px] font-heading text-[32px] font-medium tracking-[-1.28px] text-black">
                  No accounts available
                </p>
                <p className="text-[20px] font-medium tracking-[-0.8px] whitespace-nowrap text-primary-grey">
                  Give it time :)
                </p>
              </div>
            )}
          </div>

          <ViewingPanel>
            {selected && (
              <div className="flex w-full flex-col items-center gap-[12px] text-center">
                <p className="font-heading text-[32px] font-medium tracking-[-1.28px] text-black">
                  {selected.name}
                </p>
                <p className="text-[20px] font-medium tracking-[-0.8px] text-primary-grey">
                  {selected.industry}
                </p>
                <StatusPill status={selected.status} />
                <p className="text-[16px] tracking-[-0.48px] text-primary-grey">
                  Created {selected.created}
                </p>
              </div>
            )}
          </ViewingPanel>
        </div>
      </div>
    </AdminShell>
  )
}
