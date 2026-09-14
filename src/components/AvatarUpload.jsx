import { useRef, useState } from 'react'
import Button from './Button'
import cameraPlus from '../assets/icons/camera-plus.svg'

export default function AvatarUpload({ hint }) {
  const inputRef = useRef(null)
  const [preview, setPreview] = useState(null)

  const handleFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setPreview(URL.createObjectURL(file))
  }

  return (
    <div className="flex w-full flex-col items-center gap-1">
      <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />

      {preview ? (
        <div className="flex flex-col items-center gap-1">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="size-[180px] shrink-0 overflow-hidden rounded-[100px]"
          >
            <img src={preview} alt="Profile preview" className="size-full object-cover" />
          </button>
          <div className="flex w-[250px] gap-1">
            <Button type="button" variant="secondary" onClick={() => setPreview(null)}>
              Delete
            </Button>
            <Button type="button" onClick={() => inputRef.current?.click()}>
              Change
            </Button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex shrink-0 items-center justify-center rounded-[100px] bg-light-ash p-10"
        >
          <img src={cameraPlus} alt="" className="size-[100px]" />
        </button>
      )}

      {hint && <p className="w-[208px] text-center text-[13px] tracking-[-0.39px] text-primary-grey">{hint}</p>}
    </div>
  )
}
