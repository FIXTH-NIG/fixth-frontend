import chevronDown from '../assets/icons/chevron-down.svg'

export default function SelectField({ label, id, options, placeholder, className = '', ...props }) {
  return (
    <div className={`flex w-full flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-[13px] tracking-[-0.39px] text-primary-grey">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <select
          id={id}
          className="w-full appearance-none rounded-control border border-light-ash bg-transparent p-[15px] pr-10 text-[16px] tracking-[-0.48px] text-black outline-none focus:border-primary-blue"
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <img src={chevronDown} alt="" className="pointer-events-none absolute top-1/2 right-[15px] h-[6px] w-3 -translate-y-1/2" />
      </div>
    </div>
  )
}
