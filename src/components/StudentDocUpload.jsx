import { useRef, useState } from 'react'
import uploadCloud from '../assets/icons/upload-cloud.svg'
import closeX from '../assets/icons/close-x.svg'

export default function StudentDocUpload({ label, initialFile = null }) {
  const inputRef = useRef(null)
  const [file, setFile] = useState(initialFile)
  const [dragging, setDragging] = useState(false)

  const handleFile = (selected) => {
    if (!selected) return
    const sizeMb = selected.size / (1024 * 1024)
    setFile({
      name: selected.name,
      size: sizeMb >= 1 ? `${Math.round(sizeMb)}mb` : `${Math.max(1, Math.round(selected.size / 1024))}kb`,
    })
  }

  return (
    <div className="flex w-full flex-col gap-[4px]">
      {label && <p className="text-[13px] tracking-[-0.39px] text-primary-grey">{label}</p>}

      <div className="w-full rounded-[20px] border border-light-ash p-[4px]">
        <div
          role="button"
          tabIndex={0}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click()
          }}
          onDragOver={(e) => {
            e.preventDefault()
            setDragging(true)
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault()
            setDragging(false)
            handleFile(e.dataTransfer.files?.[0])
          }}
          className={`flex w-full cursor-pointer flex-col items-center justify-center gap-[32px] rounded-[16px] border border-dashed px-[15px] py-[20px] ${
            dragging ? 'border-primary-blue' : 'border-grey'
          }`}
        >
          <img src={uploadCloud} alt="" className="size-[38px]" />
          <div className="flex flex-col items-center justify-center gap-[2px] text-center">
            <p className="text-[16px] tracking-[-0.48px] text-black">Upload your document</p>
            <p className="text-center text-[11px] tracking-[-0.33px] text-primary-grey">
              Acceptable formats: PDF, DOC, DOCX.
              <br />
              Must not exceed 10MB
            </p>
          </div>
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => handleFile(e.target.files?.[0])}
        className="hidden"
      />

      {file && (
        <div className="flex w-full items-center justify-between rounded-[20px] border border-primary-blue p-[16px]">
          <div className="flex items-center gap-[8px]">
            <p className="text-[16px] tracking-[-0.48px] text-black">{file.name}</p>
            <p className="text-[13px] tracking-[-0.39px] text-primary-grey">{file.size}</p>
          </div>
          <button type="button" onClick={() => setFile(null)} aria-label="Remove file">
            <img src={closeX} alt="" className="size-[16px]" />
          </button>
        </div>
      )}
    </div>
  )
}
