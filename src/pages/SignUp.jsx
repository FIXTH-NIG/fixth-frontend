import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import Tabs from '../components/Tabs'
import TextInput from '../components/TextInput'
import PasswordInput from '../components/PasswordInput'
import Button from '../components/Button'
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
    navigate(`/${userType}/verify-email`, { state: { email } })
  }

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-[54px]">
        <div className="flex w-full flex-col gap-5">
          <div className="flex w-full flex-col items-start">
            <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] text-black">Create an account</h1>
            <p className="text-[16px] tracking-[-0.48px] text-primary-grey">
              Already have an account?{' '}
              <Link to={`/${userType}/login`} className="text-primary-blue">
                Sign in
              </Link>
            </p>
          </div>
          <Tabs userType={userType} onChange={(next) => navigate(`/${next}/signup`)} />
        </div>

        <div className="flex w-full flex-col gap-5">
          <div className="flex w-full flex-col gap-3">
            <TextInput
              id="name"
              label={c.nameLabel}
              placeholder={c.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextInput
              id="email"
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
            <span className="text-[16px] text-primary-grey">
              I agree with the <span className="text-primary-blue">Terms &amp; conditions</span> and{' '}
              <span className="text-primary-blue">Privacy Policy</span>
            </span>
          </label>
        </div>

        <div className="flex w-full gap-1">
          <Button type="submit" disabled={!canSubmit}>
            Create account
          </Button>
        </div>
      </form>
    </AuthLayout>
  )
}
