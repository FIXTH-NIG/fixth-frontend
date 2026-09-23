import bookmarkFilled from '../assets/icons/bookmark.svg'
import bookmarkOutline from '../assets/icons/bookmark-alt.svg'
import pinIcon from '../assets/icons/pin.svg'
import calendarIcon from '../assets/icons/calendar.svg'
import briefcaseIcon from '../assets/icons/briefcase.svg'
import StatusPill from './StatusPill'

export default function OpportunityCard({ opportunity, saved, onToggleSave, onOpen, compact = false }) {
  return (
    <article
      className={`w-full rounded-[20px] border border-light-ash bg-off-white ${
        compact ? 'p-[12px]' : 'p-[16px]'
      }`}
    >
      <div className={`flex w-full flex-col ${compact ? 'gap-[12px]' : 'gap-[16px]'}`}>
        <div className="flex w-full items-start justify-between">
          <div className="flex flex-col gap-[2px]">
            {opportunity.badge ? (
              <span
                className={`rounded-[8px] px-[10px] py-[4px] text-[10px] font-medium tracking-[-0.4px] ${
                  opportunity.badge === 'Paid'
                    ? 'bg-[rgba(39,149,67,0.1)] text-success-green'
                    : 'bg-[rgba(227,54,41,0.1)] text-error-red'
                }`}
              >
                {opportunity.badge}
              </span>
            ) : (
              opportunity.status && <StatusPill status={opportunity.status} />
            )}
            {onOpen ? (
              <button type="button" onClick={onOpen} className="cursor-pointer text-left">
                <span
                  className={`font-heading font-medium text-black ${
                    compact ? 'text-[16px] tracking-[-0.64px]' : 'text-[20px] tracking-[-0.8px]'
                  }`}
                >
                  {opportunity.title}
                </span>
              </button>
            ) : (
              <h3
                className={`font-heading font-medium text-black ${
                  compact ? 'text-[16px] tracking-[-0.64px]' : 'text-[20px] tracking-[-0.8px]'
                }`}
              >
                {opportunity.title}
              </h3>
            )}
            <p
              className={`text-primary-blue ${
                compact ? 'text-[13px] tracking-[-0.52px]' : 'text-[16px] tracking-[-0.64px]'
              }`}
            >
              {opportunity.company}
            </p>
          </div>
          <button
            type="button"
            aria-label={saved ? 'Remove bookmark' : 'Bookmark'}
            aria-pressed={saved}
            onClick={onToggleSave}
            className="shrink-0 cursor-pointer"
          >
            <img src={saved ? bookmarkFilled : bookmarkOutline} alt="" className="size-[24px]" />
          </button>
        </div>

        <p
          className={`w-full text-primary-grey ${
            compact ? 'text-[11px] tracking-[-0.33px]' : 'text-[13px] tracking-[-0.39px]'
          }`}
        >
          {opportunity.description}
        </p>

        <div className="flex w-full items-center gap-[20px]">
          <span
            className={`flex items-center gap-[4px] font-medium text-black ${
              compact ? 'text-[12px] tracking-[-0.48px]' : 'text-[13px] tracking-[-0.52px]'
            }`}
          >
            <img src={pinIcon} alt="" className="h-[12px] w-[10px]" />
            {opportunity.location}
          </span>
          <span
            className={`flex items-center gap-[4px] font-medium text-black ${
              compact ? 'text-[12px] tracking-[-0.48px]' : 'text-[13px] tracking-[-0.52px]'
            }`}
          >
            <img src={calendarIcon} alt="" className="size-[12px]" />
            {opportunity.date}
          </span>
          <span
            className={`flex items-center gap-[4px] font-medium text-black ${
              compact ? 'text-[12px] tracking-[-0.48px]' : 'text-[13px] tracking-[-0.52px]'
            }`}
          >
            <img src={briefcaseIcon} alt="" className="size-[12px]" />
            {opportunity.applicants}
          </span>
        </div>
      </div>
    </article>
  )
}
