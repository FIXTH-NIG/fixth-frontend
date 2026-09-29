import { useState } from 'react'
import searchIcon from '../assets/icons/search.svg'
import chevronDown from '../assets/icons/chevron-down.svg'
export function AdminSearch({ value, onChange, placeholder }) {
  return (
    <div className="flex w-full items-center justify-between rounded-[100px] bg-light-ash px-[20px] py-[12px]">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-[13px] font-medium tracking-[-0.52px] text-black outline-none placeholder:text-primary-grey"
      />
      <img src={searchIcon} alt="" className="h-[12px] w-[12px] shrink-0" />
    </div>
  )
}

export function ChipSelect({ label, value, onChange, options }) {
  return (
    <span className="flex items-center gap-[5px]">
      <span className="text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-primary-grey">
        {label}
      </span>
      <span className="relative flex items-center">
        <img
          src={chevronDown}
          alt=""
          className="pointer-events-none absolute left-[10px] h-[4px] w-[8px]"
        />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
          className="cursor-pointer appearance-none rounded-[12px] bg-light-ash py-[5px] pr-[10px] pl-[26px] text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-black outline-none"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </span>
    </span>
  )
}

export function FilterMenu({ value, onChange, options }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="flex items-center gap-[10px] rounded-[12px] bg-light-ash px-[10px] py-[5px]"
      >
        <img src={chevronDown} alt="" className="h-[4px] w-[8px]" />
        <span className="text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-black">
          {value}
        </span>
      </button>
      {open && (
        <div className="absolute top-[32px] right-0 z-10 flex w-[160px] flex-col gap-[4px] rounded-[20px] border border-[rgba(15,53,219,0.1)] bg-off-white p-[4px] shadow-[0px_8px_6px_rgba(15,53,219,0.11)]">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option)
                setOpen(false)
              }}
              className={`w-full rounded-[16px] px-[10px] py-[5px] text-left text-[13px] font-medium tracking-[-0.52px] ${
                value === option ? 'text-primary-blue' : 'text-black'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function ViewingPanel({ title = 'Viewing panel', subtitle = 'Click on a table item to show its full information', children }) {
  return (
    <div className="shrink-0 rounded-[32px] bg-light-ash p-[4px]">
      <div className="flex h-[960px] w-[438px] flex-col items-center justify-center gap-[32px] rounded-[30px] bg-off-white p-[20px]">
        {children ?? (
          <div className="flex w-full flex-col items-center gap-[12px] text-center">
            <p className="font-heading text-[32px] font-medium tracking-[-1.28px] text-black">
              {title}
            </p>
            <p className="w-[294px] text-[20px] font-medium tracking-[-0.8px] text-primary-grey">
              {subtitle}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export function TableRow({ columns, onClick, selected }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full cursor-pointer items-center justify-between rounded-[14px] px-[14px] py-[8px] text-left ${
        selected ? 'border border-primary-blue' : ''
      }`}
    >
      {columns.map((column, index) => (
        <span key={index} style={{ width: column.width }} className={column.className}>
          {column.content}
        </span>
      ))}
    </button>
  )
}
