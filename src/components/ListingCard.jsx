import bookmarkOutline from '../assets/icons/bookmark-alt.svg'
import bookmarkFilled from '../assets/icons/bookmark.svg'
import pinIcon from '../assets/icons/pin.svg'
import calendarIcon from '../assets/icons/calendar.svg'
import briefcaseIcon from '../assets/icons/briefcase.svg'
const PILL_STYLES = {
  Open: { box: 'bg-[rgba(39,149,67,0.1)]', text: 'text-success-green' },
  Close: { box: 'bg-[rgba(227,54,41,0.1)]', text: 'text-error-red' },
  Live: { box: 'bg-[rgba(39,149,67,0.1)]', text: 'text-success-green' },
  Removed: { box: 'bg-[rgba(227,54,41,0.1)]', text: 'text-error-red' },
}

export default function ListingCard({ listing, saved, onToggleSave, onOpen, compact = false }) {
  const titleClass = compact ? 'text-[16px] tracking-[-0.64px]' : 'text-[20px] tracking-[-0.8px]'
  const descClass = compact ? 'text-[11px] tracking-[-0.33px]' : 'text-[13px] tracking-[-0.39px]'
  const metaClass = compact ? 'text-[11px] tracking-[-0.44px]' : 'text-[13px] tracking-[-0.52px]'

  return (
    <article
      className={`w-full rounded-[20px] border border-light-ash bg-off-white ${
        compact ? 'p-[12px]' : 'p-[16px]'
      }`}
    >
      <div className={`flex w-full flex-col ${compact ? 'gap-[12px]' : 'gap-[24px]'}`}>
        <div className="flex w-full flex-col gap-[4px]">
          <div className="flex w-full items-center justify-between">
            {listing.badge ? (
              <span className="rounded-[8px] bg-[rgba(39,149,67,0.1)] px-[10px] py-[4px] text-[10px] font-medium tracking-[-0.4px] text-success-green">
                {listing.badge}
              </span>
            ) : listing.status ? (
              <span
                className={`rounded-[8px] px-[10px] py-[4px] text-[10px] font-medium tracking-[-0.4px] ${PILL_STYLES[listing.status].box} ${PILL_STYLES[listing.status].text}`}
              >
                {listing.status}
              </span>
            ) : (
              <span />
            )}
            {listing.posted && (
              <p className={`text-primary-grey ${compact ? 'text-[11px]' : 'text-[13px]'}`}>
                Posted on <span className="text-black">{listing.posted}</span>
              </p>
            )}
          </div>

          <div className="flex w-full items-start justify-between">
            <div className="flex flex-col">
              {onOpen ? (
                <button type="button" onClick={onOpen} className="cursor-pointer text-left">
                  <span className={`font-heading font-medium text-black ${titleClass}`}>
                    {listing.title}
                  </span>
                </button>
              ) : (
                <h3 className={`font-heading font-medium text-black ${titleClass}`}>
                  {listing.title}
                </h3>
              )}
              {listing.company && (
                <p
                  className={`text-primary-blue ${
                    compact ? 'text-[13px] tracking-[-0.52px]' : 'text-[16px] tracking-[-0.64px]'
                  }`}
                >
                  {listing.company}
                </p>
              )}
            </div>
            {listing.bookmark && (
              <button
                type="button"
                aria-label={saved ? 'Remove bookmark' : 'Bookmark'}
                aria-pressed={saved}
                onClick={onToggleSave}
                className="shrink-0 cursor-pointer"
              >
                <img src={saved ? bookmarkFilled : bookmarkOutline} alt="" className="size-[24px]" />
              </button>
            )}
          </div>

          <p className={`w-full text-primary-grey ${descClass}`}>{listing.description}</p>
        </div>

        <div className="flex w-full items-center gap-[20px]">
          <span className={`flex items-center gap-[4px] font-medium text-black ${metaClass}`}>
            <img src={pinIcon} alt="" className="h-[12px] w-[10px]" />
            {listing.location}
          </span>
          <span className={`flex items-center gap-[4px] font-medium text-black ${metaClass}`}>
            <img src={calendarIcon} alt="" className="size-[12px]" />
            {listing.date}
          </span>
          <span className={`flex items-center gap-[4px] font-medium text-black ${metaClass}`}>
            <img src={briefcaseIcon} alt="" className="size-[12px]" />
            {listing.applicants}
          </span>
        </div>
      </div>
    </article>
  )
}
