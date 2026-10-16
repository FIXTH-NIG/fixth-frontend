import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../../components/OnboardingSplit'
import { BackNextRow, SplitInput } from '../../components/SplitFields'
import checkIcon from '../../assets/icons/check.svg'
import { useOnboarding } from '../../lib/OnboardingContext'

const WORK_STYLES = ['On-site', 'Hybrid', 'Remote']

export default function StudentPreferences() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { data, update } = useOnboarding()

  const [location, setLocation] = useState(data.placementLocation ?? '')
  const [startDate, setStartDate] = useState(data.startDate ?? '')
  const [duration, setDuration] = useState(data.duration ?? '')
  const [workStyles, setWorkStyles] = useState(data.workStyles ?? ['On-site', 'Hybrid'])

  const toggleStyle = (style) => {
    setWorkStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style],
    )
  }

  const canSubmit = location && startDate && duration && workStyles.length > 0

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    update({ placementLocation: location, startDate, duration, workStyles })
    navigate(`/${userType}/onboarding/skills`)
  }

  return (
    <OnboardingSplit
      panelEyebrow="BUILD YOUR CAREER PROFILE"
      headline="Your next opportunity starts with a profile that feels like you."
      stepNote="Step 5 of 7 · Takes about 3 minutes"
      section="STUDENT PROFILE"
      step={5}
      totalSteps={7}
      title="Internship preferences"
      subtitle="Choose where and how you want to work."
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <SplitInput
          label="Preferred location"
          placeholder="Lagos, Nigeria"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <SplitInput
            label="Start date"
            placeholder="12 April 2027"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          <SplitInput
            label="Duration"
            placeholder="6 months"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <p className="text-[14px] font-semibold text-black">Preferred work style</p>
          <div className="flex flex-wrap gap-2.5">
            {WORK_STYLES.map((style) => {
              const selected = workStyles.includes(style)
              return (
                <button
                  key={style}
                  type="button"
                  onClick={() => toggleStyle(style)}
                  aria-pressed={selected}
                  className={`flex cursor-pointer items-center gap-1.5 rounded-full border px-4 py-2 text-[14px] font-medium ${
                    selected
                      ? 'border-primary-blue bg-[rgba(15,53,219,0.07)] text-primary-blue'
                      : 'border-[#E2E8F0] text-black'
                  }`}
                >
                  {selected && <img src={checkIcon} alt="" className="size-[16px]" />}
                  {style}
                </button>
              )
            })}
          </div>
        </div>
        <BackNextRow onBack={() => navigate(`/${userType}/onboarding/education`)} nextDisabled={!canSubmit} />
      </form>
    </OnboardingSplit>
  )
}
