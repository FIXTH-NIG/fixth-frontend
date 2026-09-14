import { useRef } from 'react'

const LENGTH = 6

export default function OTPInput({ value, onChange, error = false }) {
  const inputRefs = useRef([])

  const setDigit = (index, digit) => {
    const next = value.split('')
    next[index] = digit
    onChange(next.join('').slice(0, LENGTH))
  }

  const handleChange = (index, e) => {
    const digit = e.target.value.replace(/\D/g, '').slice(-1)
    setDigit(index, digit)
    if (digit && index < LENGTH - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, LENGTH)
    if (pasted) {
      e.preventDefault()
      onChange(pasted.padEnd(LENGTH, '').slice(0, LENGTH).trimEnd())
      inputRefs.current[Math.min(pasted.length, LENGTH - 1)]?.focus()
    }
  }

  return (
    <div className="flex w-full gap-3">
      {Array.from({ length: LENGTH }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          value={value[index] ?? ''}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          inputMode="numeric"
          maxLength={1}
          className={`h-[79px] w-0 min-w-0 flex-1 rounded-control border text-center text-[24px] tracking-[-0.72px] text-black outline-none ${
            error ? 'border-error-red' : 'border-grey focus:border-primary-blue'
          }`}
        />
      ))}
    </div>
  )
}
