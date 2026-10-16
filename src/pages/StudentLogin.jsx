import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../components/OnboardingSplit'
import { NoteRow, PrimaryButton, SplitInput } from '../components/SplitFields'
import envelopeIcon from '../assets/icons/envelope.svg'
import lockIcon from '../assets/icons/lock.svg'
import eyeOpen from '../assets/icons/eye-open.svg'
import eyeClosed from '../assets/icons/eye-closed.svg'
import userPlusIcon from '../assets/icons/user-plus.svg'
import { copy } from '../lib/copy'

export default function StudentLogin() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const c = copy[userType].login

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) return
    navigate(`/${userType}/home`)
  }

  return (
    <OnboardingSplit
      panelEyebrow="WELCOME BACK"
      headline="Sign in and keep moving toward your next opportunity."
      stepNote="Student portal · Secure access"
      showProgress={false}
      title="Welcome back"
      subtitle="Sign in to continue to your student dashboard."
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <SplitInput
          label="Student email address"
          icon={envelopeIcon}
          type="email"
          placeholder={c.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helper="Use the email linked to your Fixth account."
          required
        />
        <div className="flex w-full flex-col gap-1.5">
          <label htmlFor="login-password" className="text-[14px] font-semibold text-black">
            Password
          </label>
          <div className="relative w-full">
            <img
              src={lockIcon}
              alt=""
              className="pointer-events-none absolute top-1/2 left-4 size-[20px] -translate-y-1/2"
            />
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-[12px] border border-[#E5EAF1] py-[14px] pr-12 pl-11 text-[15px] text-black outline-none placeholder:text-[#9AA3B2] focus:border-primary-blue"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
            >
              <img src={showPassword ? eyeOpen : eyeClosed} alt="" className="size-[20px]" />
            </button>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <Link
            to={`/${userType}/forgot-password`}
            className="text-[14px] font-medium text-primary-blue"
          >
            Forgot password?
          </Link>
        </div>
        <PrimaryButton type="submit">Sign in</PrimaryButton>
        <NoteRow icon={userPlusIcon}>
          New to Fixth?{' '}
          <Link to={`/${userType}/signup`} className="font-medium text-primary-blue">
            Create your student account.
          </Link>
        </NoteRow>
      </form>
    </OnboardingSplit>
  )
}
