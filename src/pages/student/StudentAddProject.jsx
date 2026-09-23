import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StudentShell from '../../components/StudentShell'
import MobileShell from '../../components/MobileShell'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import cameraPlus from '../../assets/icons/camera-plus.svg'
import imagePlus from '../../assets/icons/image-plus.svg'
import useIsMobile from '../../lib/useIsMobile'

function ImageTile({ label, icon, iconClassName, fixedHeight = false, preview, onPick }) {
  return (
    <button
      type="button"
      onClick={onPick}
      aria-label={label}
      className={`flex min-w-px flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-[20px] bg-light-ash p-[40px] ${
        fixedHeight ? 'h-[111px]' : 'aspect-[181/118]'
      }`}
    >
      {preview ? (
        <img src={preview} alt="" className="h-full w-full object-cover" />
      ) : (
        <img src={icon} alt="" className={iconClassName} />
      )}
    </button>
  )
}

export default function StudentAddProject() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const thumbRef = useRef(null)
  const othersRef = useRef(null)
  const [title, setTitle] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [fullDescription, setFullDescription] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [otherImages, setOtherImages] = useState([null, null, null])

  const pickThumbnail = (file) => {
    if (!file) return
    if (thumbnail) URL.revokeObjectURL(thumbnail)
    setThumbnail(URL.createObjectURL(file))
  }

  const pickOther = (file, index) => {
    if (!file) return
    setOtherImages((prev) => {
      const next = [...prev]
      if (next[index]) URL.revokeObjectURL(next[index])
      next[index] = URL.createObjectURL(file)
      return next
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/student/profile')
  }

  const form = (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto flex w-full flex-col gap-[50px] ${isMobile ? '' : 'max-w-[552px]'}`}
    >
      <div className="flex w-full flex-col">
        <h1
          className={`font-heading font-medium whitespace-nowrap text-black ${
            isMobile ? 'text-[28px] tracking-[-1.12px]' : 'text-[32px] tracking-[-1.28px]'
          }`}
        >
          Add a new project
        </h1>
          <p className="text-[16px] tracking-[-0.48px] text-primary-grey">
            Share your skills and experiences
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-[24px]">
          <div className="flex w-full flex-col gap-[40px]">
            <div className="flex w-full flex-col gap-[12px]">
              <TextInput
                label={`Project title (${title.length}/50 characters)`}
                id="project-title"
                placeholder="Enter your project title"
                value={title}
                maxLength={50}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextInput
                label={`Short description (${shortDescription.length}/100 characters)`}
                id="project-short"
                placeholder="Enter a short description"
                value={shortDescription}
                maxLength={100}
                onChange={(e) => setShortDescription(e.target.value)}
              />
            </div>

            <div className="flex w-full flex-col justify-center gap-[4px]">
              <p className="text-[13px] tracking-[-0.39px] whitespace-nowrap text-primary-grey">
                Thumbnail
              </p>
              <div className="w-[277px]">
                <div className="flex h-[180px] w-full items-center justify-center overflow-hidden rounded-[20px] bg-light-ash">
                  {thumbnail ? (
                    <img src={thumbnail} alt="Project thumbnail" className="h-full w-full object-cover" />
                  ) : (
                    <img src={cameraPlus} alt="" className="size-[100px]" />
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={() => thumbRef.current?.click()}
                className="cursor-pointer text-left text-[13px] tracking-[-0.39px] whitespace-nowrap text-primary-grey"
              >
                Upload project thumbnail. PNG/JPG. Not higher than 1MB
              </button>
              <input
                ref={thumbRef}
                type="file"
                accept="image/png,image/jpeg"
                onChange={(e) => pickThumbnail(e.target.files?.[0])}
                className="hidden"
              />
            </div>

            <div className="flex w-full flex-col gap-1">
              <label htmlFor="project-full" className="text-[13px] tracking-[-0.39px] text-primary-grey">
                Full description
              </label>
              <textarea
                id="project-full"
                placeholder="Describe your project here"
                value={fullDescription}
                onChange={(e) => setFullDescription(e.target.value)}
                className="h-[254px] w-full resize-none rounded-control border border-light-ash p-[15px] text-[16px] tracking-[-0.48px] text-black outline-none placeholder:text-primary-grey focus:border-primary-blue"
              />
            </div>

            <div className="flex w-full flex-col justify-center gap-[4px]">
              <p className="text-[13px] tracking-[-0.39px] whitespace-nowrap text-primary-grey">
                Other images
              </p>
              <div className="flex w-full items-start gap-[4px]">
                {otherImages.map((preview, index) => (
                  <ImageTile
                    key={index}
                    label={`Upload other image ${index + 1}`}
                    icon={imagePlus}
                    iconClassName="size-[48px]"
                    fixedHeight={isMobile}
                    preview={preview}
                    onPick={() => {
                      othersRef.current?.click()
                      othersRef.current.dataset.slot = String(index)
                    }}
                  />
                ))}
              </div>
              <p className="text-[13px] tracking-[-0.39px] whitespace-nowrap text-primary-grey">
                Upload project thumbnail. PNG/JPG. Not higher than 1MB
              </p>
              <input
                ref={othersRef}
                type="file"
                accept="image/png,image/jpeg"
                onChange={(e) => {
                  pickOther(e.target.files?.[0], Number(othersRef.current.dataset.slot ?? 0))
                  e.target.value = ''
                }}
                className="hidden"
              />
            </div>
          </div>

          <div className="flex w-full gap-[4px]">
            <Button type="button" variant="secondary" onClick={() => navigate('/student/profile')}>
              Back
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
  )

  if (isMobile) {
    return <MobileShell active="profile">{form}</MobileShell>
  }
  return <StudentShell active="profile">{form}</StudentShell>
}
