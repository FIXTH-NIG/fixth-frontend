import pencilIcon from '../assets/icons/pencil.svg'

export function SplitInput({ label, icon, helper, inputClassName = '', ...props }) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label className="text-[14px] font-semibold text-black">{label}</label>
      )}
      <div className="relative w-full">
        {icon && (
          <img
            src={icon}
            alt=""
            className="pointer-events-none absolute top-1/2 left-4 size-[20px] -translate-y-1/2"
          />
        )}
        <input
          {...props}
          className={`w-full rounded-[12px] border border-[#E5EAF1] py-[14px] text-[15px] text-black outline-none placeholder:text-[#9AA3B2] focus:border-primary-blue ${icon ? 'pr-4 pl-11' : 'px-4'} ${inputClassName}`}
        />
      </div>
      {helper && <p className="text-[12px] text-primary-grey">{helper}</p>}
    </div>
  )
}

export function NoteRow({ icon, children }) {
  return (
    <div className="flex w-full items-center gap-2.5 rounded-[12px] bg-[#F3F6FB] p-3.5">
      <img src={icon} alt="" className="size-[20px] shrink-0" />
      <p className="text-[13px] leading-relaxed text-primary-grey">{children}</p>
    </div>
  )
}

export function PrimaryButton({ className = '', ...props }) {
  return (
    <button
      className={`w-full cursor-pointer rounded-[12px] bg-primary-blue py-4 text-[15px] font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}

export function BackNextRow({ onBack, nextLabel = 'Continue', nextDisabled = false }) {
  return (
    <div className="flex w-full gap-3">
      <button
        type="button"
        onClick={onBack}
        className="flex-1 cursor-pointer rounded-[12px] border border-[#E2E8F0] py-4 text-[15px] font-medium text-black"
      >
        Back
      </button>
      <button
        type="submit"
        disabled={nextDisabled}
        className="flex-[2] cursor-pointer rounded-[12px] bg-primary-blue py-4 text-[15px] font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
      >
        {nextLabel}
      </button>
    </div>
  )
}

export function ReviewRow({ label, value, onEdit }) {
  return (
    <div className="flex w-full items-center justify-between gap-3 border-b border-[#EEF1F6] py-3.5">
      <div className="flex min-w-0 flex-col">
        <span className="text-[13px] text-primary-grey">{label}</span>
        <span className="truncate text-[15px] font-semibold text-black">{value}</span>
      </div>
      <button
        type="button"
        onClick={onEdit}
        aria-label={`Edit ${label}`}
        className="shrink-0 cursor-pointer"
      >
        <img src={pencilIcon} alt="" className="size-[18px]" />
      </button>
    </div>
  )
}
