import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingLayout from '../../components/OnboardingLayout'
import TextInput from '../../components/TextInput'
import DateField from '../../components/DateField'
import SelectField from '../../components/SelectField'
import DocumentUpload from '../../components/DocumentUpload'
import { useOnboarding } from '../../lib/OnboardingContext'
import { STEP_COUNT, DURATION_OPTIONS } from '../../lib/copy'

export default function StudentInternship() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { data, update } = useOnboarding()

  const [placementLocation, setPlacementLocation] = useState(data.placementLocation ?? '')
  const [startDate, setStartDate] = useState(data.startDate ?? '')
  const [duration, setDuration] = useState(data.duration ?? '')

  const canSubmit = placementLocation && startDate && duration

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    update({ placementLocation, startDate, duration })
    navigate(`/${userType}/onboarding/skills`)
  }

  return (
    <OnboardingLayout
      title="Internship Information"
      subtitle="Add your internship details"
      step={3}
      totalSteps={STEP_COUNT[userType]}
      onBack={() => navigate(`/${userType}/onboarding/about`)}
      onSubmit={handleSubmit}
      nextDisabled={!canSubmit}
    >
      <TextInput
        id="placement-location"
        label="Preferred Placement Location"
        placeholder="Lagos Island"
        value={placementLocation}
        onChange={(e) => setPlacementLocation(e.target.value)}
      />
      <DateField
        id="start-date"
        label="Start date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <SelectField
        id="duration"
        label="Duration"
        placeholder="Select duration"
        options={DURATION_OPTIONS}
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <DocumentUpload label="Resume/CV" />
    </OnboardingLayout>
  )
}
