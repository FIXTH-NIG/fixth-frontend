import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../../components/OnboardingSplit'
import { NoteRow, PrimaryButton, SplitInput } from '../../components/SplitFields'
import envelopeIcon from '../../assets/icons/envelope.svg'
import shieldIcon from '../../assets/icons/shield-check.svg'
import { useOnboarding } from '../../lib/OnboardingContext'

export default function StudentEmail() {
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
      panelEyebrow="VERIFY YOUR STUDENT EMAIL"
      headline="Start with the email your school or institution knows."
      stepNote="Step 1 of 7 · Takes about 3 minutes"
      section="STUDENT PROFILE"
      step={1}
      totalSteps={7}
      title="Verify your student email"
      subtitle="We'll send a one-time verification code to confirm your email address."
      showSignIn
      signInTo={`/${userType}/login`}
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <SplitInput
          label="Student email address"
          icon={envelopeIcon}
          type="email"
          placeholder="john.doe@university.edu.ng"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helper="Use an active email address you can access now."
          required
        />
        <PrimaryButton type="submit" disabled={!email}>
          Send verification code
        </PrimaryButton>
        <NoteRow icon={shieldIcon}>
          Your email is only used for account verification and important updates.
        </NoteRow>
      </form>
    </OnboardingSplit>
  )
}
