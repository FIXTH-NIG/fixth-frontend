import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { copy } from '../lib/copy'

export default function ForgotPassword() {
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
    <AuthLayout>
      <form onSubmit={handleSubmit} className="flex min-h-[500px] w-full flex-col justify-between">
        <div className="flex w-full flex-col gap-[54px]">
          <div className="flex w-full flex-col items-start">
            <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] text-black">Forgot Password?</h1>
            <p className="text-[16px] tracking-[-0.48px] text-primary-grey">{c.subtitle}</p>
          </div>
          <TextInput
            id="email"
            type="email"
            label={c.emailLabel}
            placeholder={c.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            inputClassName="text-black"
          />
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
