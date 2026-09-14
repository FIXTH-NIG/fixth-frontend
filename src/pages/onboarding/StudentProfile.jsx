import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingLayout from '../../components/OnboardingLayout'
import AvatarUpload from '../../components/AvatarUpload'
import TextInput from '../../components/TextInput'
import { useOnboarding } from '../../lib/OnboardingContext'
import { STEP_COUNT } from '../../lib/copy'

export default function StudentProfile() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { data, update } = useOnboarding()

  const [firstName, setFirstName] = useState(data.firstName ?? '')
  const [lastName, setLastName] = useState(data.lastName ?? '')

  const handleSubmit = (e) => {
    e.preventDefault()
    update({ firstName, lastName })
    navigate(`/${userType}/onboarding/about`)
  }

  return (
    <OnboardingLayout
      title="Profile"
      subtitle="Input your Name and professional Display photo"
      step={1}
      totalSteps={STEP_COUNT[userType]}
      onBack={() => navigate(`/${userType}/welcome`)}
      onSubmit={handleSubmit}
      nextDisabled={!firstName || !lastName}
    >
      <AvatarUpload hint="Use a clear, professional headshot image of yourself." />

      <div className="flex w-full gap-3">
        <TextInput
          id="first-name"
          label="First name"
          placeholder="John"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <TextInput
          id="last-name"
          label="Last name"
          placeholder="Doe"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
    </OnboardingLayout>
  )
}
