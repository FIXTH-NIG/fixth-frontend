import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StudentShell from '../../components/StudentShell'
import MobileShell from '../../components/MobileShell'
import OpportunityCard from '../../components/OpportunityCard'
import EmptyState from '../../components/EmptyState'
import chevronDown from '../../assets/icons/chevron-down.svg'
import emptyApplied from '../../assets/icons/empty-applied.svg'
import useIsMobile from '../../lib/useIsMobile'
import { APPLICATIONS, APPLICATION_STATS } from '../../lib/student'

const STAT_STYLES = {
  Submitted: { box: 'bg-light-ash', text: 'text-black' },
  Viewed: { box: 'bg-[rgba(15,53,219,0.1)]', text: 'text-[#0f35db]' },
  Shortlisted: { box: 'bg-[#f3f2de]', text: 'text-[#b2ae3a]' },
  Accepted: { box: 'bg-[rgba(39,149,67,0.1)]', text: 'text-success-green' },
  Rejected: { box: 'bg-[rgba(227,54,41,0.1)]', text: 'text-error-red' },
}

const FILTERS = ['All', 'Submitted', 'Viewed', 'Shortlisted', 'Accepted', 'Rejected']

export default function StudentApplications() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const [filter, setFilter] = useState('All')
  const [savedIds, setSavedIds] = useState([])

  const toggleSave = (id) => {
    setSavedIds((prev) => (prev.includes(id) ? prev.filter((saved) => saved !== id) : [...prev, id]))
  }

  const visible = APPLICATIONS.filter(
    (application) => filter === 'All' || application.status === filter,
  )

  const content = (
    <div
      className={`mx-auto flex w-full flex-col gap-[40px] ${isMobile ? '' : 'max-w-[670px]'}`}
    >
      <div className="flex w-full flex-col gap-[20px] font-heading">
        <h1
          className={`font-medium text-black ${
            isMobile ? 'text-[28px] tracking-[-1.12px]' : 'text-[32px] tracking-[-1.28px]'
          }`}
        >
          Applied placements
        </h1>
        <div className="flex w-full items-start gap-[4px]">
          {APPLICATION_STATS.map((stat) => {
            const style = STAT_STYLES[stat.label]
            return (
              <div
                key={stat.label}
                className={`flex min-w-px flex-1 flex-col items-start justify-center gap-[2px] rounded-[20px] p-[20px] ${style.box} ${style.text}`}
              >
                <p
                  className={`font-medium ${
                    isMobile ? 'text-[24px] tracking-[-0.96px]' : 'text-[32px] tracking-[-1.28px]'
                  }`}
                >
                  {stat.count}
                </p>
                <p className={isMobile ? 'text-[11px] tracking-[-0.44px]' : 'text-[16px] tracking-[-0.64px]'}>
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex w-full flex-col gap-[8px]">
        <div className="flex w-full items-center justify-between">
          <h2
            className={`font-heading font-medium whitespace-nowrap text-black ${
              isMobile ? 'text-[11px] tracking-[-0.44px]' : 'text-[16px] tracking-[-0.64px]'
            }`}
          >
            Applied Internships
          </h2>
          <div className="flex items-center gap-[5px]">
            <span
              className={`font-medium whitespace-nowrap text-primary-grey ${
                isMobile ? 'text-[11px] tracking-[-0.44px]' : 'text-[13px] tracking-[-0.52px]'
              }`}
            >
              Status
            </span>
            <div className="relative flex items-center">
              <img
                src={chevronDown}
                alt=""
                className="pointer-events-none absolute left-[10px] h-[4px] w-[8px]"
              />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                aria-label="Filter by status"
                className={`cursor-pointer appearance-none rounded-[12px] bg-light-ash py-[5px] pr-[10px] pl-[26px] font-medium whitespace-nowrap text-black outline-none ${
                  isMobile ? 'text-[11px] tracking-[-0.44px]' : 'text-[13px] tracking-[-0.52px]'
                }`}
              >
                {FILTERS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {visible.length > 0 ? (
          <div className="flex w-full flex-col gap-[8px]">
            {visible.map((application) => (
              <OpportunityCard
                key={application.id}
                opportunity={application}
                saved={savedIds.includes(application.id)}
                onToggleSave={() => toggleSave(application.id)}
                onOpen={() => navigate('/student/opportunities/civil-engineering-intern')}
                compact={isMobile}
              />
            ))}
          </div>
        ) : (
          <div className="flex w-full flex-col items-center justify-center py-10">
            <EmptyState
              icon={emptyApplied}
              title="No Applied Placements"
              subtitle="You haven’t applied to any internships yet."
              actionLabel="Explore"
              onAction={() => navigate('/student/home')}
              compact={isMobile}
            />
          </div>
        )}
      </div>
    </div>
  )

  if (isMobile) {
    return <MobileShell active="applications">{content}</MobileShell>
  }
  return <StudentShell active="applications">{content}</StudentShell>
}
