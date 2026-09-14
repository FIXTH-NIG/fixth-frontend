import { useState } from 'react'
import eyeOpen from '../assets/icons/eye-open.svg'
import eyeClosed from '../assets/icons/eye-closed.svg'

export default function PasswordInput({ label, id, ...props }) {
  const [visible, setVisible] = useState(false)

  return (
    <div className="flex w-full flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-[13px] tracking-[-0.39px] text-primary-grey">
          {label}
        </label>
      )}
      <div className="flex w-full items-center justify-between rounded-control border border-light-ash p-[15px]">
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          className="w-full min-w-0 flex-1 text-[16px] tracking-[-0.48px] text-black placeholder:text-primary-grey outline-none"
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="ml-2 shrink-0"
          aria-label={visible ? 'Hide password' : 'Show password'}
        >
          <img src={visible ? eyeOpen : eyeClosed} alt="" className="h-[18px] w-[26.5px]" />
        </button>
      </div>
    </div>
  )
}
