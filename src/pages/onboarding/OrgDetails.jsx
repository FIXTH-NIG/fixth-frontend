import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingLayout from '../../components/OnboardingLayout'
import AvatarUpload from '../../components/AvatarUpload'
import TextInput from '../../components/TextInput'
import { useOnboarding } from '../../lib/OnboardingContext'
import { STEP_COUNT } from '../../lib/copy'

export default function OrgDetails() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { data, update } = useOnboarding()

  const [website, setWebsite] = useState(data.website ?? '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!website) return
    update({ website })
    navigate(`/${userType}/onboarding/about`)
  }

  return (
    <OnboardingLayout
      title="Organization Details"
      subtitle="Tell students about your organization"
      step={1}
      totalSteps={STEP_COUNT[userType]}
      onBack={() => navigate(`/${userType}/welcome`)}
      onSubmit={handleSubmit}
      nextDisabled={!website}
    >
      <AvatarUpload hint="Please upload your company logo" />

      <TextInput
        id="website"
        label="Website"
        placeholder="fixth.com"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        required
      />
    </OnboardingLayout>
  )
}
