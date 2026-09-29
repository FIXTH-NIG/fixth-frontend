import pinIcon from '../assets/icons/pin.svg'
import calendarIcon from '../assets/icons/calendar.svg'

const ACTION_STYLES = {
  accept: {
    active: { box: 'bg-success-green', text: 'text-off-white' },
    idle: { box: 'bg-[rgba(39,149,67,0.1)] border border-success-green', text: 'text-success-green' },
  },
  shortlist: {
    active: { box: 'bg-primary-blue', text: 'text-off-white' },
    idle: { box: 'bg-[rgba(242,234,31,0.1)] border border-[#b2ae3a]', text: 'text-[#b2ae3a]' },
  },
  reject: {
    active: { box: 'bg-error-red', text: 'text-off-white' },
    idle: { box: 'bg-[rgba(227,54,41,0.1)] border border-error-red', text: 'text-error-red' },
  },
}

const DECIDED_IDLE = {
  accept: { box: 'bg-[rgba(39,149,67,0.1)]', text: 'text-success-green' },
  shortlist: { box: 'bg-[rgba(15,53,219,0.1)]', text: 'text-primary-blue' },
  reject: { box: 'bg-[rgba(227,54,41,0.1)]', text: 'text-error-red' },
}

function ActionButton({ action, currentStatus, decided, onSelect, compact }) {
  const key = action === 'Accept' ? 'accept' : action === 'Shortlist' ? 'shortlist' : 'reject'
  const isActive =
    (key === 'accept' && currentStatus === 'accepted') ||
    (key === 'shortlist' && currentStatus === 'shortlisted') ||
    (key === 'reject' && currentStatus === 'rejected')
  const style = isActive
    ? ACTION_STYLES[key].active
    : decided
      ? DECIDED_IDLE[key]
      : ACTION_STYLES[key].idle
  const label = isActive
    ? key === 'accept'
      ? 'Accepted'
      : key === 'shortlist'
        ? 'Shortlisted'
        : 'Rejected'
    : action
  return (
    <button
      type="button"
      onClick={() => onSelect(key === 'accept' ? 'accepted' : key === 'shortlist' ? 'shortlisted' : 'rejected')}
      className={`flex min-w-px flex-1 cursor-pointer items-center justify-center rounded-[20px] px-[20px] py-[8px] ${style.box}`}
    >
      <span
        className={`font-medium whitespace-nowrap ${
          compact ? 'text-[11px] tracking-[-0.44px]' : 'text-[13px] tracking-[-0.52px]'
        } ${style.text}`}
      >
        {label}
      </span>
    </button>
  )
}

export default function ApplicantCard({ applicant, avatar, onViewProfile, onStatusChange, compact = false }) {
  const decided = applicant.status !== null
  const nameClass = compact ? 'text-[16px] tracking-[-0.64px]' : 'text-[20px] tracking-[-0.8px]'
  const courseClass = compact ? 'text-[10px] tracking-[-0.4px]' : 'text-[12px] tracking-[-0.48px]'
  const smallBtnClass = compact ? 'text-[10px] tracking-[-0.4px]' : 'text-[13px] tracking-[-0.52px]'
  const bioClass = compact ? 'text-[11px] tracking-[-0.33px]' : 'text-[13px] tracking-[-0.39px]'
  const metaClass = compact ? 'text-[10px] tracking-[-0.4px]' : 'text-[13px] tracking-[-0.52px]'

  return (
    <article className="w-full rounded-[20px] border border-light-ash bg-off-white p-[16px]">
      <div className="flex w-full flex-col gap-[16px]">
        <div className="flex w-full items-start justify-between">
          <div className="flex items-start gap-[8px]">
            <img
              src={avatar}
              alt={applicant.name}
              className={`${compact ? 'size-[37px]' : 'size-[45px]'} shrink-0 rounded-full object-cover`}
            />
            <div className="flex flex-col">
              <h3 className={`font-heading font-medium whitespace-nowrap text-black ${nameClass}`}>
                {applicant.name}
              </h3>
              <p className={`font-medium text-primary-blue ${courseClass}`}>{applicant.course}</p>
            </div>
          </div>
          <div className="flex items-start gap-[4px]">
            <button
              type="button"
              className={`shrink-0 rounded-[20px] bg-light-ash px-[20px] py-[8px] text-black ${smallBtnClass}`}
            >
              CV/Resume
            </button>
            <button
              type="button"
              onClick={onViewProfile}
              className={`shrink-0 cursor-pointer rounded-[20px] bg-primary-blue px-[20px] py-[8px] text-off-white ${smallBtnClass}`}
            >
              Profile
            </button>
          </div>
        </div>

        <p className={`w-full text-primary-grey ${bioClass}`}>{applicant.bio}</p>

        <div className="flex w-full items-center gap-[20px]">
          <span className={`flex items-center gap-[4px] font-medium text-black ${metaClass}`}>
            <img src={pinIcon} alt="" className="h-[12px] w-[10px]" />
            {applicant.location}
          </span>
          <span className={`flex items-center gap-[4px] font-medium text-black ${metaClass}`}>
            <img src={calendarIcon} alt="" className="size-[12px]" />
            {applicant.date}
          </span>
          <span className={`flex items-center gap-[4px] font-medium text-black ${metaClass}`}>
            <img src={calendarIcon} alt="" className="size-[12px]" />
            {applicant.duration}
          </span>
        </div>

        <div className="flex w-full items-start gap-[4px]">
          {['Accept', 'Shortlist', 'Reject'].map((action) => (
            <ActionButton
              key={action}
              action={action}
              currentStatus={applicant.status}
              decided={decided}
              onSelect={onStatusChange}
              compact={compact}
            />
          ))}
        </div>
      </div>
    </article>
  )
}
