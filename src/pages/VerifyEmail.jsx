import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../components/OnboardingSplit'
import OTPInput from '../components/OTPInput'
import { BackNextRow } from '../components/SplitFields'

const DEMO_CODE = '123456'

export default function VerifyEmail() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { state } = useLocation()
  const email = state?.email ?? 'your email'

  const [code, setCode] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (code.length < 6) return
    if (code === DEMO_CODE) {
      navigate(`/${userType}/welcome`)
    } else {
      setError(true)
    }
  }

  return (
    <OnboardingSplit
      panelEyebrow="CHECK YOUR INBOX"
      headline="One quick check, then we’ll get you set up."
      stepNote="Secure account verification"
      showProgress={false}
      title={error ? 'Wrong input' : 'Verify your email'}
      subtitle={
        error
          ? `Kindly confirm and re enter the code sent to "${email}"`
          : `Kindly enter the 6 digit code sent to "${email}"`
      }
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <OTPInput
          value={code}
          onChange={(next) => {
            setCode(next)
            setError(false)
          }}
          error={error}
        />
        <p className="text-[13px] text-primary-grey">
          Demo code: <span className="text-black">{DEMO_CODE}</span>
        </p>
        <BackNextRow onBack={() => navigate(-1)} nextLabel="Submit" nextDisabled={code.length < 6} />
      </form>
    </OnboardingSplit>
  )
}
