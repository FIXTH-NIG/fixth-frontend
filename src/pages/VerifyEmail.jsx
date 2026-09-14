import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import OTPInput from '../components/OTPInput'
import Button from '../components/Button'

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
    <AuthLayout>
      <form onSubmit={handleSubmit} className="flex min-h-[628px] w-full flex-col justify-between">
        <div className="flex w-full flex-col gap-[54px]">
          <div className="flex w-full flex-col items-start">
            <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] text-black">
              {error ? 'Wrong input' : 'Verify your email'}
            </h1>
            <p className="text-[16px] tracking-[-0.48px] text-primary-grey">
              {error
                ? `Kindly confirm and re enter the code sent to "${email}"`
                : `Kindly enter the 6 digit code sent to "${email}"`}
            </p>
          </div>
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
        </div>

        <div className="flex w-full gap-1">
          <Button type="button" variant="secondary" onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </AuthLayout>
  )
}
