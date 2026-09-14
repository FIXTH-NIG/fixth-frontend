export default function TextInput({ label, id, className = '', inputClassName = '', ...props }) {
  return (
    <div className={`flex w-full flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-[13px] tracking-[-0.39px] text-primary-grey">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full rounded-control border border-light-ash p-[15px] text-[16px] tracking-[-0.48px] text-black placeholder:text-primary-grey outline-none focus:border-primary-blue ${inputClassName}`}
        {...props}
      />
    </div>
  )
}
