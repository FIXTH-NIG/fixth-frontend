import { useRef, useState } from 'react'
import uploadCloud from '../assets/icons/upload-cloud.svg'
import closeX from '../assets/icons/close-x.svg'

function formatSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))}kb`
  return `${(bytes / (1024 * 1024)).toFixed(1)}mb`
}

export default function DocumentUpload({ label, accept = '.pdf,.doc,.docx', formats = 'PDF, DOC, DOCX' }) {
  const inputRef = useRef(null)
  const [file, setFile] = useState(null)
  const [dragging, setDragging] = useState(false)

  const handleFile = (selected) => {
    if (selected) setFile(selected)
  }

  return (
    <div className="flex w-full flex-col gap-1">
      {label && <p className="text-[13px] tracking-[-0.39px] text-primary-grey">{label}</p>}

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={(e) => handleFile(e.target.files?.[0])}
        className="hidden"
      />

      {!file && (
        <div className="w-full rounded-control border border-light-ash p-1">
          <div
            onClick={() => inputRef.current?.click()}
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
            className={`flex flex-col items-center justify-center gap-8 rounded-pill border border-dashed px-[15px] py-5 cursor-pointer ${
              dragging ? 'border-primary-blue bg-off-white' : 'border-grey'
            }`}
          >
            <img src={uploadCloud} alt="" className="size-[38px]" />
            <div className="flex flex-col items-center gap-0.5 text-center">
              <p className="text-[16px] tracking-[-0.48px] text-black">Upload your document</p>
              <p className="text-[11px] tracking-[-0.33px] text-primary-grey">
                Acceptable formats: {formats}.
                <br />
                Must not exceed 10MB
              </p>
            </div>
          </div>
        </div>
      )}

      {file && (
        <div className="flex w-full items-center justify-between rounded-control border border-primary-blue p-4">
          <div className="flex items-center gap-2">
            <p className="text-[16px] tracking-[-0.48px] text-black">{file.name}</p>
            <p className="text-[13px] tracking-[-0.39px] text-primary-grey">{formatSize(file.size)}</p>
          </div>
          <button type="button" onClick={() => setFile(null)} aria-label="Remove file">
            <img src={closeX} alt="" className="size-[16px]" />
          </button>
        </div>
      )}
    </div>
  )
}
