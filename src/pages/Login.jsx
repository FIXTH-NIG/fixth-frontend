import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../components/OnboardingSplit'
import Tabs from '../components/Tabs'
import PasswordInput from '../components/PasswordInput'
import { PrimaryButton, SplitInput } from '../components/SplitFields'
import StudentLogin from './StudentLogin'
import { copy } from '../lib/copy'

function OrgLogin() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const c = copy[userType].login

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) return
    navigate(`/${userType}/welcome`)
  }

  return (
    <OnboardingSplit
      panelEyebrow="WELCOME BACK"
      headline="Sign in and keep moving toward your next hire."
      stepNote="Organization portal · Secure access"
      showProgress={false}
      title="Login to your account"
      subtitle={
        <>
          Don&rsquo;t have an account?{' '}
          <Link to={`/${userType}/signup`} className="font-medium text-primary-blue">
            Sign up
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <Tabs userType={userType} onChange={(next) => navigate(`/${next}/login`)} />
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
        <div className="flex w-full justify-end">
          <Link to={`/${userType}/forgot-password`} className="text-[14px] font-medium text-primary-blue">
            Forgot password?
          </Link>
        </div>
        <PrimaryButton type="submit">Login</PrimaryButton>
      </form>
    </OnboardingSplit>
  )
}

export default function Login() {
  const { userType } = useParams()
  return userType === 'student' ? <StudentLogin /> : <OrgLogin />
}
