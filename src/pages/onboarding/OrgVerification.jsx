import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingLayout from '../../components/OnboardingLayout'
import TextInput from '../../components/TextInput'
import DocumentUpload from '../../components/DocumentUpload'
import { useOnboarding } from '../../lib/OnboardingContext'
import { STEP_COUNT } from '../../lib/copy'

export default function OrgVerification() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { data, update } = useOnboarding()

  const [cacNumber, setCacNumber] = useState(data.cacNumber ?? '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!cacNumber) return
    update({ cacNumber })
    navigate(`/${userType}/onboarding/complete`)
  }

  return (
    <OnboardingLayout
      title="Verification"
      subtitle="Verify your organization"
      step={3}
      totalSteps={STEP_COUNT[userType]}
      onBack={() => navigate(`/${userType}/onboarding/about`)}
      onSubmit={handleSubmit}
      nextLabel="Save and Submit"
      nextDisabled={!cacNumber}
    >
      <TextInput
        id="cac-number"
        label="CAC Registration Number"
        placeholder="1234567890"
        value={cacNumber}
        onChange={(e) => setCacNumber(e.target.value)}
        required
      />
      <DocumentUpload label="CAC Certificate" />
    </OnboardingLayout>
  )
}
