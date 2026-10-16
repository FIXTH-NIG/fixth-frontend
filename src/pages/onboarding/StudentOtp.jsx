import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../../components/OnboardingSplit'
import OTPInput from '../../components/OTPInput'
import { PrimaryButton } from '../../components/SplitFields'
import { useOnboarding } from '../../lib/OnboardingContext'

const RESEND_SECONDS = 42

export default function StudentOtp() {
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
    navigate(`/${userType}/onboarding/profile`)
  }

  return (
    <OnboardingSplit
      panelEyebrow="CHECK YOUR INBOX"
      headline="One quick check, then we’ll build your profile together."
      stepNote="Step 2 of 7 · Takes about 3 minutes"
      section="STUDENT PROFILE"
      step={2}
      totalSteps={7}
      title="Enter your verification code"
      subtitle={`We sent a 6-digit code to ${email}`}
      showSignIn
      signInTo={`/${userType}/login`}
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <div className="[&>div]:gap-2.5">
          <OTPInput value={code} onChange={setCode} />
        </div>
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
