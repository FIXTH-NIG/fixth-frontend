import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingLayout from '../../components/OnboardingLayout'
import { useOnboarding } from '../../lib/OnboardingContext'
import { STEP_COUNT } from '../../lib/copy'

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
    navigate(`/${userType}/onboarding/complete`)
  }

  return (
    <OnboardingLayout
      title="Location Sharing"
      subtitle="Let us know if you want your location to be shared"
      step={5}
      totalSteps={STEP_COUNT[userType]}
      onBack={() => navigate(`/${userType}/onboarding/skills`)}
      onSubmit={handleSubmit}
      nextLabel="Save and Submit"
      nextDisabled={!choice}
    >
      <div className="flex w-full flex-col gap-3">
        {OPTIONS.map((option) => (
          <label
            key={option.value}
            className={`flex w-full cursor-pointer items-center gap-3 rounded-control border p-[15px] ${
              choice === option.value ? 'border-primary-blue' : 'border-light-ash'
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
            <span className="text-[16px] tracking-[-0.48px] text-black">{option.label}</span>
          </label>
        ))}
      </div>
    </OnboardingLayout>
  )
}
