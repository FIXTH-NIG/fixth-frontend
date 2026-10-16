import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../../components/OnboardingSplit'
import { NoteRow, PrimaryButton, SplitInput } from '../../components/SplitFields'
import shieldIcon from '../../assets/icons/shield-check.svg'
import { useOnboarding } from '../../lib/OnboardingContext'

export default function OrgEmail() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { data, update } = useOnboarding()
  const [email, setEmail] = useState(data.email ?? '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    update({ email })
    navigate(`/${userType}/onboarding/otp`, { state: { email } })
  }

  return (
    <OnboardingSplit
      panelEyebrow="FOR ORGANIZATIONS"
      headline="Connect with engineering talent ready to make an impact."
      stepNote="Step 1 of 5 · Takes about 4 minutes"
      section="ORGANIZATION PROFILE"
      step={1}
      totalSteps={5}
      title="Verify your work email"
      subtitle="We’ll send a one-time code to confirm your organization email."
      showSignIn
      signInTo={`/${userType}/login`}
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <SplitInput
          label="Company email"
          type="email"
          placeholder="hello@fixth.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helper="Use an active work email you can access now."
          required
        />
        <PrimaryButton type="submit" disabled={!email}>
          Send verification code
        </PrimaryButton>
        <NoteRow icon={shieldIcon}>
          Your company email is used for verification and account updates.
        </NoteRow>
      </form>
    </OnboardingSplit>
  )
}
