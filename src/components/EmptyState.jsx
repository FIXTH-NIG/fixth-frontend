export default function EmptyState({ icon, title, subtitle, actionLabel, onAction, compact = false }) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center ${
        compact ? 'gap-[32px]' : 'gap-[40px]'
      }`}
    >
      <img src={icon} alt="" className={`shrink-0 ${compact ? 'size-[54px]' : 'size-[123px]'}`} />
      <div className="flex w-full flex-col items-center gap-[12px]">
        <h2
          className={`text-center font-heading font-medium text-black ${
            compact
              ? 'w-full text-[24px] tracking-[-0.96px]'
              : 'w-[528px] text-[32px] tracking-[-1.28px]'
          }`}
        >
          {title}
        </h2>
        <p
          className={`font-medium text-primary-grey ${
            compact
              ? 'w-full text-center text-[13px] tracking-[-0.52px]'
              : 'text-[20px] tracking-[-0.8px] whitespace-nowrap'
          }`}
        >
          {subtitle}
        </p>
      </div>
      <button
        type="button"
        onClick={onAction}
        className={`flex h-[57px] shrink-0 cursor-pointer items-center justify-center rounded-[20px] bg-black p-[10px] text-[16px] font-semibold tracking-[-0.64px] whitespace-nowrap text-off-white ${
          compact ? 'w-[230px]' : 'w-[391px]'
        }`}
      >
        {actionLabel}
      </button>
    </div>
  )
}
