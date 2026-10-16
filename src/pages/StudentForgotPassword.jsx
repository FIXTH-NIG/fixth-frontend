import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../components/OnboardingSplit'
import { NoteRow, PrimaryButton, SplitInput } from '../components/SplitFields'
import envelopeIcon from '../assets/icons/envelope.svg'
import arrowLeftIcon from '../assets/icons/arrow-left.svg'

export default function StudentForgotPassword() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    navigate(`/${userType}/check-inbox`, { state: { email } })
  }

  return (
    <OnboardingSplit
      panelEyebrow="RESET SECURELY"
      headline="Let’s get you back to your opportunities."
      stepNote="Secure account recovery"
      showProgress={false}
      title="Forgot your password?"
      subtitle="Enter the email linked to your account and we’ll send you a secure reset link."
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <SplitInput
          label="Email address"
          icon={envelopeIcon}
          type="email"
          placeholder="john.doe@university.edu.ng"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helper="We’ll only use this email to help you recover your account."
          required
        />
        <PrimaryButton type="submit" disabled={!email}>
          Send reset link
        </PrimaryButton>
        <NoteRow icon={arrowLeftIcon}>
          Remembered your password?{' '}
          <Link to={`/${userType}/login`} className="font-medium text-primary-blue">
            Back to sign in.
          </Link>
        </NoteRow>
      </form>
    </OnboardingSplit>
  )
}
