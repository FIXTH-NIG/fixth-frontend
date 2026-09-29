import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OrgShell from '../../components/OrgShell'
import OrgMobileShell from '../../components/OrgMobileShell'
import ApplicantCard from '../../components/ApplicantCard'
import chevronDown from '../../assets/icons/chevron-down.svg'
import avatarDesktop from '../../assets/images/applicant-avatar.png'
import avatarMobile from '../../assets/images/applicant-avatar-sm.png'
import useIsMobile from '../../lib/useIsMobile'
import { APPLICANTS } from '../../lib/org'

const TABS = ['All', 'Shortlists', 'Accepted', 'Rejected']
const SORT_OPTIONS = ['Recent', 'Academic Level', 'Start date', 'Duration']

const tabMatches = (tab, status) => {
  if (tab === 'All') return true
  if (tab === 'Shortlists') return status === 'shortlisted'
  if (tab === 'Accepted') return status === 'accepted'
  return status === 'rejected'
}

export default function OrgApplicants() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const [tab, setTab] = useState('All')
  const [sort, setSort] = useState('Recent')
  const [sortOpen, setSortOpen] = useState(false)
  const [items, setItems] = useState(APPLICANTS)

  const setStatus = (id, status) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)))
  }

  const visible = items.filter((item) => tabMatches(tab, item.status))

  const content = (
    <div className={`mx-auto flex w-full flex-col gap-[40px] ${isMobile ? '' : 'max-w-[670px]'}`}>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="flex h-[33px] w-[80px] shrink-0 cursor-pointer items-center justify-center rounded-[20px] bg-primary-blue px-[20px] py-[16px] text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-off-white"
      >
        Back
      </button>

      <h1
        className={`font-heading font-medium whitespace-nowrap text-black ${
          isMobile ? 'text-[28px] tracking-[-1.12px]' : 'text-[32px] tracking-[-1.28px]'
        }`}
      >
        Application list
      </h1>

      <div className="flex w-full gap-[4px] rounded-[20px] bg-light-ash p-[4px]">
        {TABS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setTab(option)}
            className={`flex min-w-px flex-1 items-center justify-center rounded-[16px] p-[16px] font-medium whitespace-nowrap text-black ${
              isMobile ? 'text-[13px] tracking-[-0.52px]' : 'text-[16px] tracking-[-0.64px]'
            } ${tab === option ? 'bg-off-white' : ''}`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="flex w-full flex-col gap-[8px]">
        <div className="flex w-full items-center justify-between">
          <h2
            className={`font-heading font-medium whitespace-nowrap text-black ${
              isMobile ? 'text-[11px] tracking-[-0.44px]' : 'text-[16px] tracking-[-0.64px]'
            }`}
          >
            {tab === 'All' ? 'All applicants' : `${tab} applicants`}
          </h2>
          <div className="relative flex items-center gap-[5px]">
            <span
              className={`font-medium whitespace-nowrap text-primary-grey ${
                isMobile ? 'text-[11px] tracking-[-0.44px]' : 'text-[13px] tracking-[-0.52px]'
              }`}
            >
              Sort by
            </span>
            <button
              type="button"
              onClick={() => setSortOpen((open) => !open)}
              className="flex items-center gap-[10px] rounded-[12px] bg-light-ash px-[10px] py-[5px]"
            >
              <img src={chevronDown} alt="" className="h-[4px] w-[8px]" />
              <span
                className={`font-medium whitespace-nowrap text-black ${
                  isMobile ? 'text-[11px] tracking-[-0.44px]' : 'text-[13px] tracking-[-0.52px]'
                }`}
              >
                {sort}
              </span>
            </button>
            {sortOpen && (
              <div className="absolute top-[32px] right-0 z-10 flex w-[160px] flex-col gap-[4px] rounded-[20px] border border-[rgba(15,53,219,0.1)] bg-off-white p-[4px] shadow-[0px_8px_6px_rgba(15,53,219,0.11)]">
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setSort(option)
                      setSortOpen(false)
                    }}
                    className={`w-full rounded-[16px] px-[10px] py-[5px] text-left text-[13px] font-medium tracking-[-0.52px] ${
                      sort === option ? 'text-primary-blue' : 'text-black'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex w-full flex-col gap-[8px]">
          {visible.map((applicant) => (
            <ApplicantCard
              key={applicant.id}
              applicant={applicant}
              avatar={isMobile ? avatarMobile : avatarDesktop}
              onViewProfile={() => navigate('/organization/students/makanjuola-olaoluwa')}
              onStatusChange={(status) => setStatus(applicant.id, status)}
              compact={isMobile}
            />
          ))}
          {visible.length === 0 && (
            <p className="w-full py-8 text-center text-[13px] tracking-[-0.39px] text-primary-grey">
              No applicants here yet.
            </p>
          )}
        </div>
      </div>
    </div>
  )

  if (isMobile) {
    return <OrgMobileShell active="home">{content}</OrgMobileShell>
  }
  return <OrgShell active={null}>{content}</OrgShell>
}
