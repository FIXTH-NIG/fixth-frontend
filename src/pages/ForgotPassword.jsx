import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../components/OnboardingSplit'
import { BackNextRow, SplitInput } from '../components/SplitFields'
import StudentForgotPassword from './StudentForgotPassword'
import { copy } from '../lib/copy'

function OrgForgotPassword() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const c = copy[userType].forgotPassword

  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    navigate(`/${userType}/check-inbox`, { state: { email } })
  }

  return (
    <OnboardingSplit
      panelEyebrow="RESET SECURELY"
      headline="Let’s get you back to your placements."
      stepNote="Secure account recovery"
      showProgress={false}
      title="Forgot password"
      subtitle={c.subtitle}
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <SplitInput
          type="email"
          label={c.emailLabel}
          placeholder={c.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <BackNextRow onBack={() => navigate(-1)} nextLabel="Submit" nextDisabled={!email} />
      </form>
    </OnboardingSplit>
  )
}

export default function ForgotPassword() {
  const { userType } = useParams()
  return userType === 'student' ? <StudentForgotPassword /> : <OrgForgotPassword />
}
