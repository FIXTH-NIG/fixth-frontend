import calendarClock from '../assets/icons/calendar-clock.svg'

export default function DateField({ label, id, className = '', ...props }) {
  return (
    <div className={`flex w-full flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-[13px] tracking-[-0.39px] text-primary-grey">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          id={id}
          type="date"
          className="w-full rounded-control border border-light-ash p-[15px] pr-10 text-[16px] tracking-[-0.48px] text-black outline-none [color-scheme:light] focus:border-primary-blue [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-10 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0"
          {...props}
        />
        <img
          src={calendarClock}
          alt=""
          className="pointer-events-none absolute top-1/2 right-[15px] h-5 w-5 -translate-y-1/2"
        />
      </div>
    </div>
  )
}
