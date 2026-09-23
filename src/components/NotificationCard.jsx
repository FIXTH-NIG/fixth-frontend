export default function NotificationCard({ notification, onMarkRead, compact = false }) {
  const { title, body, date, time, unread } = notification
  const titleClass =
    unread && compact
      ? 'text-[14px] tracking-[-0.42px]'
      : 'text-[16px] tracking-[-0.48px]'
  const bodyClass =
    unread && compact ? 'text-[11px] tracking-[-0.33px]' : 'text-[13px] tracking-[-0.39px]'
  return (
    <article
      className={`flex w-full flex-col gap-[12px] rounded-[20px] border border-solid p-[16px] ${
        unread ? 'border-primary-blue' : 'border-light-ash'
      }`}
    >
      <div className="flex w-full flex-col gap-[4px]">
        <h3 className={`w-full ${titleClass} ${unread ? 'text-primary-blue' : 'text-black'}`}>
          {title}
        </h3>
        <p className={`w-full ${bodyClass} ${unread ? 'text-black' : 'text-primary-grey'}`}>
          {body}
        </p>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="flex items-center gap-[4px] text-[11px] tracking-[-0.33px] text-primary-grey">
          <span>{date}</span>
          <span className="size-[4px] shrink-0 rounded-full bg-light-ash" />
          <span>{time}</span>
        </p>
        {unread && (
          <button
            type="button"
            onClick={onMarkRead}
            className="cursor-pointer text-right text-[13px] tracking-[-0.39px] text-primary-blue"
          >
            Mark as Read
          </button>
        )}
      </div>
    </article>
  )
}
