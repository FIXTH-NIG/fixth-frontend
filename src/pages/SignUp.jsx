import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../components/OnboardingSplit'
import Tabs from '../components/Tabs'
import PasswordInput from '../components/PasswordInput'
import { PrimaryButton, SplitInput } from '../components/SplitFields'
import { copy } from '../lib/copy'

export default function SignUp() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const c = copy[userType].signup

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreed, setAgreed] = useState(false)

  const canSubmit = name && email && password && password === confirmPassword && agreed

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    navigate(`/${userType}/welcome`)
  }

  return (
    <OnboardingSplit
      panelEyebrow="GET STARTED"
      headline="Create your fixth account."
      stepNote="Join as a student or organization"
      showProgress={false}
      title="Create an account"
      subtitle={
        <>
          Already have an account?{' '}
          <Link to={`/${userType}/login`} className="font-medium text-primary-blue">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <Tabs userType={userType} onChange={(next) => navigate(`/${next}/signup`)} />
        <div className="flex w-full flex-col gap-4">
          <SplitInput
            label={c.nameLabel}
            placeholder={c.namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <SplitInput
            type="email"
            label={c.emailLabel}
            placeholder={c.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <PasswordInput
            id="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <PasswordInput
            id="confirm-password"
            label="Confirm password"
            placeholder="Enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="size-4 rounded border-primary-grey"
          />
          <span className="text-[14px] text-primary-grey">
            I agree with the <span className="text-primary-blue">Terms &amp; conditions</span> and{' '}
            <span className="text-primary-blue">Privacy Policy</span>
          </span>
        </label>

        <PrimaryButton type="submit" disabled={!canSubmit}>
          Create account
        </PrimaryButton>
      </form>
    </OnboardingSplit>
  )
}
