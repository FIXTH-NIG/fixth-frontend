import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StudentShell from '../../components/StudentShell'
import MobileShell from '../../components/MobileShell'
import OpportunityCard from '../../components/OpportunityCard'
import EmptyState from '../../components/EmptyState'
import Button from '../../components/Button'
import verifiedIcon from '../../assets/icons/verified-lg.svg'
import verifyShield from '../../assets/icons/verify-shield.svg'
import toggleOn from '../../assets/icons/toggle-on.svg'
import toggleOff from '../../assets/icons/toggle-off.svg'
import bookmarkOff from '../../assets/icons/bookmark-off.svg'
import briefcaseOff from '../../assets/icons/briefcase-off.svg'
import avatarProfile from '../../assets/images/avatar-profile.png'
import avatarMobile from '../../assets/images/avatar-mprofile.png'
import useIsMobile from '../../lib/useIsMobile'
import { STUDENT, OPPORTUNITIES, PROJECTS } from '../../lib/student'

const STATUS_PILL = {
  searching: { label: 'Searching for placement', box: 'bg-[rgba(15,53,219,0.1)]', text: 'text-primary-blue' },
  found: { label: 'Placement found', box: 'bg-[rgba(39,149,67,0.1)]', text: 'text-success-green' },
  unverified: { label: 'Unverified', box: 'bg-[rgba(227,54,41,0.1)]', text: 'text-error-red' },
}

const INFO_ROWS = [
  { label: 'Course:', value: STUDENT.course },
  { label: 'Institution:', value: STUDENT.institution },
  { label: 'Level:', value: STUDENT.level },
  { label: 'Location:', value: STUDENT.location },
  { label: 'Start date:', value: STUDENT.startDate },
  { label: 'Duration:', value: STUDENT.duration },
]

export default function StudentProfile() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  // Account state drives the header variant: 'searching' | 'found' | 'unverified'
  const [status] = useState('searching')
  const [accepting, setAccepting] = useState(true)
  const [tab, setTab] = useState(isMobile ? 'projects' : 'saved')
  const [savedIds, setSavedIds] = useState([1])

  const pill = STATUS_PILL[status]
  const verified = status !== 'unverified'
  const showAcceptingNote = verified && accepting

  const toggleSave = (id) => {
    setSavedIds((prev) => (prev.includes(id) ? prev.filter((saved) => saved !== id) : [...prev, id]))
  }

  const savedOpportunities = OPPORTUNITIES.filter((opportunity) => savedIds.includes(opportunity.id))

  const header = (
    <div className="flex w-full flex-col gap-[32px]">
      <div className={`flex w-full items-start ${isMobile ? 'gap-[12px]' : 'gap-[20px]'}`}>
        <img
          src={isMobile ? avatarMobile : avatarProfile}
          alt={STUDENT.name}
          className={`shrink-0 rounded-full object-cover ${
            isMobile ? 'size-[53px]' : 'size-[120px]'
          }`}
        />
        <div className={`flex min-w-0 flex-1 flex-col justify-center ${isMobile ? 'gap-[4px]' : 'gap-[20px]'}`}>
          {isMobile ? (
            <>
              <h1 className="text-[24px] font-medium tracking-[-0.96px] whitespace-nowrap text-black">
                {STUDENT.name}
              </h1>
              <div className="flex w-full items-center justify-between">
                <span className="flex items-center gap-[4px]">
                  {verified && <img src={verifyShield} alt="" className="h-[12px] w-[10px]" />}
                  <span
                    className={`text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap ${
                      verified ? 'text-primary-blue' : 'text-primary-grey'
                    }`}
                  >
                    {verified ? 'Verified' : 'Unverified'}
                  </span>
                </span>
                <span
                  className={`flex shrink-0 items-center justify-center rounded-[8px] px-[10px] py-[4px] ${pill.box}`}
                >
                  <span className={`text-[10px] font-medium tracking-[-0.4px] whitespace-nowrap ${pill.text}`}>
                    {pill.label}
                  </span>
                </span>
              </div>
            </>
          ) : (
            <div className="flex w-full items-baseline justify-between">
              <div className="flex flex-col">
                <h1 className="text-[36px] font-medium tracking-[-1.44px] whitespace-nowrap text-black">
                  {STUDENT.name}
                </h1>
                <span className="flex items-center justify-center gap-[4px]">
                  {verified && <img src={verifiedIcon} alt="" className="h-[14px] w-[12px]" />}
                  <span
                    className={`text-[16px] font-medium tracking-[-0.64px] whitespace-nowrap ${
                      verified ? 'text-primary-blue' : 'text-primary-grey'
                    }`}
                  >
                    {verified ? 'Verified' : 'Unverified'}
                  </span>
                </span>
              </div>
              <span
                className={`flex shrink-0 items-center justify-center rounded-[8px] px-[10px] py-[4px] ${pill.box}`}
              >
                <span className={`text-[10px] font-medium tracking-[-0.4px] whitespace-nowrap ${pill.text}`}>
                  {pill.label}
                </span>
              </span>
            </div>
          )}
          <p
            className={`w-full text-black ${
              isMobile ? 'text-[11px] tracking-[-0.33px]' : 'text-[13px] tracking-[-0.39px]'
            }`}
          >
            {STUDENT.bio}
          </p>
          <div
            className={`flex w-full flex-wrap content-center items-center gap-[4px_12px] whitespace-nowrap ${
              isMobile ? 'text-[11px] tracking-[-0.33px]' : 'text-[13px] tracking-[-0.39px]'
            }`}
          >
            {INFO_ROWS.map((row) => (
              <span key={row.label} className="flex items-start gap-[2px]">
                <span className="text-primary-grey">{row.label}</span>
                <span className="text-black">{row.value}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {status === 'unverified' && (
        <p className="w-full text-[12px] font-medium tracking-[-0.48px] text-error-red">
          Your account is currently unverified. Complete mandatory student verifications to unlock
          placement applications
        </p>
      )}

      <div className={`flex w-full flex-col ${isMobile ? 'gap-[12px]' : 'h-[68px] gap-[4px]'}`}>
        {isMobile ? (
          <div className="flex w-full gap-[4px]">
            <button
              type="button"
              onClick={() => setAccepting((value) => !value)}
              className="flex h-[42px] flex-1 cursor-pointer items-center justify-center rounded-[20px] bg-primary-blue px-[20px] text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-off-white"
            >
              Update Availability
            </button>
            <button
              type="button"
              onClick={() => navigate('/student/profile/edit')}
              className="flex h-[42px] flex-1 cursor-pointer items-center justify-center rounded-[20px] bg-light-ash px-[20px] text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-black"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <div className="flex w-full gap-[4px]">
            <Button onClick={() => setAccepting((value) => !value)}>Update Availability</Button>
            <Button variant="secondary" onClick={() => navigate('/student/profile/edit')}>
              Edit Profile
            </Button>
          </div>
        )}
        <p className="flex items-center justify-center gap-[4px]">
          <img
            src={showAcceptingNote ? toggleOn : toggleOff}
            alt=""
            className="h-[10px] w-[14px]"
          />
          <span
            className={`font-medium whitespace-nowrap ${
              isMobile ? 'text-[11px] tracking-[-0.44px]' : 'text-[13px] tracking-[-0.52px]'
            } ${showAcceptingNote ? 'text-success-green' : 'text-grey-2'}`}
          >
            {showAcceptingNote
              ? 'You are currently accepting placements'
              : 'You are currently not accepting placements'}
          </span>
        </p>
      </div>
    </div>
  )

  const tabs = (
    <div className="flex w-full flex-col gap-[12px]">
      <div className="flex w-full border-b-[1.5px] border-light-ash">
        {['projects', 'saved'].map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setTab(key)}
            className={`flex min-w-0 flex-1 items-center justify-center p-[16px] font-medium whitespace-nowrap ${
              isMobile ? 'text-[13px] tracking-[-0.52px]' : 'text-[16px] tracking-[-0.64px]'
            } ${tab === key ? 'border-b-3 border-primary-blue text-primary-blue' : 'text-black'}`}
          >
            {key === 'projects' ? 'Projects' : 'Saved Internships'}
          </button>
        ))}
      </div>

      {tab === 'projects' ? (
        isMobile ? (
          <div className="flex h-[381px] w-full flex-col items-center justify-center">
            <EmptyState
              icon={briefcaseOff}
              title="No Projects"
              subtitle="You haven’t added any projects yet."
              actionLabel="Add Projects"
              onAction={() => navigate('/student/projects/new')}
              compact
            />
          </div>
        ) : (
          <div className="flex w-full flex-col gap-[8px]">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className="w-full rounded-[20px] border border-light-ash bg-off-white p-[16px]"
              >
                <div className="flex w-full flex-col gap-[16px]">
                  <div>
                    <h3 className="font-heading text-[20px] font-medium tracking-[-0.8px] text-black">
                      {project.title}
                    </h3>
                    <p className="text-[13px] tracking-[-0.39px] text-primary-grey">
                      {project.shortDescription}
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    onClick={() => navigate(`/student/projects/${project.id}`)}
                  >
                    View project
                  </Button>
                </div>
              </article>
            ))}
            <Button variant="secondary" onClick={() => navigate('/student/projects/new')}>
              Add a new project
            </Button>
          </div>
        )
      ) : savedOpportunities.length > 0 ? (
        <div className="flex w-full flex-col gap-[8px]">
          {savedOpportunities.map((opportunity) => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
              saved
              onToggleSave={() => toggleSave(opportunity.id)}
              onOpen={() => navigate('/student/opportunities/civil-engineering-intern')}
              compact={isMobile}
            />
          ))}
        </div>
      ) : (
        <div
          className={`flex w-full flex-col items-center justify-center ${
            isMobile ? 'h-[381px]' : 'h-[605px]'
          }`}
        >
          <EmptyState
            icon={bookmarkOff}
            title="No saved Internships"
            subtitle="You haven’t saved any internship post yet."
            actionLabel="Explore"
            onAction={() => navigate('/student/home')}
            compact={isMobile}
          />
        </div>
      )}
    </div>
  )

  const content = (
    <div className={`mx-auto flex w-full flex-col gap-[40px] ${isMobile ? '' : 'max-w-[670px]'}`}>
      {header}
      {tabs}
    </div>
  )

  if (isMobile) {
    return <MobileShell active="profile">{content}</MobileShell>
  }
  return <StudentShell active="profile">{content}</StudentShell>
}
