import { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../../components/OnboardingSplit'
import { BackNextRow, SplitInput } from '../../components/SplitFields'
import cameraPlus from '../../assets/icons/camera-plus.svg'
import { useOnboarding } from '../../lib/OnboardingContext'

export default function StudentProfile() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { data, update } = useOnboarding()
  const photoRef = useRef(null)

  const [photo, setPhoto] = useState(data.photo ?? null)
  const [firstName, setFirstName] = useState(data.firstName ?? '')
  const [lastName, setLastName] = useState(data.lastName ?? '')
  const [phone, setPhone] = useState(data.phone ?? '')

  const canSubmit = firstName && lastName && phone

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    update({ firstName, lastName, phone, photo })
    navigate(`/${userType}/onboarding/education`)
  }

  return (
    <OnboardingSplit
      panelEyebrow="BUILD YOUR CAREER PROFILE"
      headline="Your next opportunity starts with a profile that feels like you."
      stepNote="Step 3 of 7 · Takes about 3 minutes"
      section="STUDENT PROFILE"
      step={3}
      totalSteps={7}
      title="Tell us about you"
      subtitle="Add the essentials recruiters will see first."
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <button
            type="button"
            onClick={() => photoRef.current?.click()}
            className="flex cursor-pointer items-center gap-3 rounded-[12px] border border-[#E5EAF1] p-4 lg:w-[220px] lg:flex-col lg:justify-center lg:gap-2 lg:p-6"
          >
            {photo ? (
              <img src={photo} alt="Profile preview" className="size-[48px] rounded-full object-cover lg:size-[64px]" />
            ) : (
              <img src={cameraPlus} alt="" className="size-[40px] lg:size-[48px]" />
            )}
            <span className="flex flex-col items-start lg:items-center">
              <span className="text-[14px] font-semibold text-primary-blue">
                {photo ? 'Change photo' : 'Upload photo'}
              </span>
              <span className="text-[12px] text-primary-grey lg:hidden">JPG or PNG · 5 MB max</span>
            </span>
          </button>
          <input
            ref={photoRef}
            type="file"
            accept="image/*"
            onChange={(e) => {
              const selected = e.target.files?.[0]
              if (selected) setPhoto(URL.createObjectURL(selected))
            }}
            className="hidden"
          />
          <div className="flex w-full flex-1 flex-col gap-4">
            <SplitInput
              label="First name"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <SplitInput
              label="Last name"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <SplitInput
          label="Phone number"
          type="tel"
          placeholder="+234 801 234 5678"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <BackNextRow onBack={() => navigate(`/${userType}/onboarding/otp`)} nextDisabled={!canSubmit} />
      </form>
    </OnboardingSplit>
  )
}
