import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../../components/OnboardingSplit'
import OTPInput from '../../components/OTPInput'
import { PrimaryButton } from '../../components/SplitFields'
import { useOnboarding } from '../../lib/OnboardingContext'

const RESEND_SECONDS = 42

export default function OrgOtp() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { state } = useLocation()
  const { data, update } = useOnboarding()
  const email = state?.email ?? data.email ?? 'your email'

  const [code, setCode] = useState('')
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS)

  useEffect(() => {
    if (secondsLeft <= 0) return
    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearTimeout(timer)
  }, [secondsLeft])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (code.length < 6) return
    update({ otpVerified: true })
    navigate(`/${userType}/onboarding/details`)
  }

  return (
    <OnboardingSplit
      panelEyebrow="FOR ORGANIZATIONS"
      headline="One quick check, then we’ll set up your organization."
      stepNote="Step 2 of 5 · Takes about 4 minutes"
      section="ORGANIZATION PROFILE"
      step={2}
      totalSteps={5}
      title="Enter your verification code"
      subtitle={`We sent a 6-digit code to ${email}`}
      showSignIn
      signInTo={`/${userType}/login`}
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <OTPInput value={code} onChange={setCode} />
        <PrimaryButton type="submit" disabled={code.length < 6}>
          Verify and continue
        </PrimaryButton>
        <p className="text-center text-[13px] text-primary-grey">
          Didn’t receive the code?{' '}
          {secondsLeft > 0 ? (
            <span className="font-medium text-primary-blue">
              Resend in 00:{String(secondsLeft).padStart(2, '0')}
            </span>
          ) : (
            <button
              type="button"
              onClick={() => setSecondsLeft(RESEND_SECONDS)}
              className="cursor-pointer font-medium text-primary-blue"
            >
              Resend code
            </button>
          )}
        </p>
      </form>
    </OnboardingSplit>
  )
}
