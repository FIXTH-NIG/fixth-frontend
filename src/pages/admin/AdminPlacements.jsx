import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminShell from '../../components/AdminShell'
import ListingCard from '../../components/ListingCard'
import { AdminSearch, ChipSelect, FilterMenu, ViewingPanel } from '../../components/AdminTable'
import { ADMIN_PLACEMENTS } from '../../lib/admin'

const SORT_OPTIONS = ['Most Recent', 'Oldest']
const FILTER_OPTIONS = ['None', 'Live', 'Removed']

export default function AdminPlacements({ role = 'Super Admin', basePath = '/admin', showAdmins = true }) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('Most Recent')
  const [filter, setFilter] = useState('None')

  const visible = ADMIN_PLACEMENTS.filter((placement) => {
    const q = query.trim().toLowerCase()
    const matchesQuery =
      q.length === 0 ||
      placement.title.toLowerCase().includes(q) ||
      placement.company.toLowerCase().includes(q) ||
      placement.location.toLowerCase().includes(q)
    const matchesFilter = filter === 'None' || placement.status === filter
    return matchesQuery && matchesFilter
  })

  return (
    <AdminShell active="placements" role={role} basePath={basePath} showAdmins={showAdmins}>
      <div className="flex min-w-[1120px] flex-col gap-[20px]">
        <AdminSearch
          value={query}
          onChange={setQuery}
          placeholder="Search by Courses, Location or Industry name"
        />

        <div className="flex items-start justify-between gap-[20px]">
          <div className="flex w-[670px] shrink-0 flex-col gap-[20px]">
            <div className="flex w-full flex-col">
              <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] whitespace-nowrap text-black">
                Listed placements
              </h1>
              <p className="w-[552px] text-[16px] tracking-[-0.48px] text-primary-grey">
                Here is a list of all available placements
              </p>
            </div>

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
              {visible.map((placement) => (
                <ListingCard
                  key={placement.id}
                  listing={placement}
                  onOpen={() => navigate('/organization/placements/civil-engineering-intern')}
                />
              ))}
              {visible.length === 0 && (
                <p className="w-full py-8 text-center text-[13px] tracking-[-0.39px] text-primary-grey">
                  No placements match your search.
                </p>
              )}
            </div>
          </div>

          <ViewingPanel />
        </div>
      </div>
    </AdminShell>
  )
}
