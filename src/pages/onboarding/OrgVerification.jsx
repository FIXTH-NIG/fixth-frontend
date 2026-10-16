import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../../components/OnboardingSplit'
import { BackNextRow, SplitInput } from '../../components/SplitFields'
import DocumentUpload from '../../components/DocumentUpload'
import { useOnboarding } from '../../lib/OnboardingContext'

export default function OrgVerification() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { data, update } = useOnboarding()

  const [cacNumber, setCacNumber] = useState(data.cacNumber ?? '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!cacNumber) return
    update({ cacNumber })
    navigate(`/${userType}/onboarding/review`)
  }

  return (
    <OnboardingSplit
      panelEyebrow="FOR ORGANIZATIONS"
      headline="Prove you’re the real deal."
      stepNote="Organization verification"
      section="ORGANIZATION PROFILE"
      showProgress={false}
      title="Verification"
      subtitle="Verify your organization"
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <SplitInput
          label="CAC Registration Number"
          placeholder="1234567890"
          value={cacNumber}
          onChange={(e) => setCacNumber(e.target.value)}
          required
        />
        <DocumentUpload label="CAC Certificate" />
        <BackNextRow
          onBack={() => navigate(`/${userType}/onboarding/about`)}
          nextLabel="Save and Submit"
          nextDisabled={!cacNumber}
        />
      </form>
    </OnboardingSplit>
  )
}
