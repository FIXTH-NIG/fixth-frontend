import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../../components/OnboardingSplit'
import { BackNextRow } from '../../components/SplitFields'
import { useOnboarding } from '../../lib/OnboardingContext'

const OPTIONS = [
  { value: 'share', label: 'Share my current location with recruiters.' },
  { value: 'no-share', label: "Don't share my current location with recruiters." },
]

export default function StudentLocationSharing() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { data, update } = useOnboarding()

  const [choice, setChoice] = useState(data.locationSharing ?? '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!choice) return
    update({ locationSharing: choice })
    navigate(`/${userType}/onboarding/review`)
  }

  return (
    <OnboardingSplit
      panelEyebrow="BUILD YOUR CAREER PROFILE"
      headline="Your next opportunity starts with a profile that feels like you."
      stepNote="Location preference"
      section="STUDENT PROFILE"
      showProgress={false}
      title="Location Sharing"
      subtitle="Let us know if you want your location to be shared"
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <div className="flex w-full flex-col gap-3">
          {OPTIONS.map((option) => (
            <label
              key={option.value}
              className={`flex w-full cursor-pointer items-center gap-3 rounded-[12px] border p-[15px] ${
                choice === option.value ? 'border-primary-blue' : 'border-[#E5EAF1]'
              }`}
            >
              <input
                type="radio"
                name="location-sharing"
                value={option.value}
                checked={choice === option.value}
                onChange={(e) => setChoice(e.target.value)}
                className="size-4 accent-primary-blue"
              />
              <span className="text-[15px] text-black">{option.label}</span>
            </label>
          ))}
        </div>
        <BackNextRow
          onBack={() => navigate(`/${userType}/onboarding/review`)}
          nextLabel="Save and Submit"
          nextDisabled={!choice}
        />
      </form>
    </OnboardingSplit>
  )
}
