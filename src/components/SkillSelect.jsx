import { useMemo, useRef, useState } from 'react'
import chevronDown from '../assets/icons/chevron-down.svg'
import searchIcon from '../assets/icons/search.svg'

export default function SkillSelect({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const rootRef = useRef(null)

  const filtered = useMemo(
    () => options.filter((option) => option.toLowerCase().includes(query.toLowerCase())),
    [options, query],
  )

  const toggle = (option) => {
    onChange(value.includes(option) ? value.filter((v) => v !== option) : [...value, option])
  }

  const close = (e) => {
    if (!rootRef.current?.contains(e.relatedTarget)) setOpen(false)
  }

  return (
    <div className="relative flex w-full flex-col gap-1" ref={rootRef} onBlur={close}>
      {label && <p className="text-[13px] tracking-[-0.39px] text-primary-grey">{label}</p>}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-2.5 rounded-control border border-light-ash p-[15px] text-left"
      >
        <span className="flex-1 text-[16px] tracking-[-0.48px] text-black">
          {value[0] ?? 'Select a skill'}
        </span>
        <img src={chevronDown} alt="" className="h-[6px] w-3 shrink-0" />
      </button>

      {open && (
        <div className="absolute top-[79.5px] right-0 z-10 flex w-full flex-col gap-1 rounded-control border border-[rgba(15,53,219,0.1)] bg-off-white p-1 shadow-[0px_8px_6px_rgba(15,53,219,0.11)]">
          <div className="flex h-[35px] w-full items-center gap-2.5 rounded-pill bg-light-ash px-2.5 py-1">
            <img src={searchIcon} alt="" className="size-3" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for skills"
              className="flex-1 bg-transparent text-[13px] font-medium tracking-[-0.52px] text-black outline-none placeholder:text-primary-grey"
            />
          </div>
          <div className="flex max-h-[220px] w-full flex-col gap-1 overflow-y-auto">
            {filtered.map((option) => {
              const selected = value.includes(option)
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggle(option)}
                  className={`w-full rounded-pill px-2.5 py-1 text-left text-[13px] font-medium tracking-[-0.52px] ${
                    selected ? 'bg-off-white text-primary-blue' : 'text-black hover:bg-off-white'
                  }`}
                >
                  {option}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {value.length > 0 && (
        <div className="flex w-full flex-wrap items-center gap-1 pt-2">
          {value.map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => toggle(skill)}
              className="flex items-center justify-center rounded-pill bg-light-ash px-3 py-[5px] text-[13px] tracking-[-0.52px] text-black"
            >
              {skill} ✕
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
