import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import PasswordInput from '../components/PasswordInput'
import Button from '../components/Button'

export default function ResetPassword() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const passwordsMatch = password && password === confirmPassword

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!passwordsMatch) return
    navigate(`/${userType}/password-changed`)
  }

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="flex min-h-[500px] w-full flex-col justify-between">
        <div className="flex w-full flex-col gap-[54px]">
          <div className="flex w-full flex-col items-start">
            <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] text-black">Change Password</h1>
            <p className="text-[16px] tracking-[-0.48px] text-primary-grey">Kindly enter your new password</p>
          </div>
          <div className="flex w-full flex-col gap-3">
            <PasswordInput
              id="password"
              label="Password"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <PasswordInput
              id="confirm-password"
              label="Confirm password"
              placeholder="Re-enter your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {confirmPassword && !passwordsMatch && (
              <p className="text-[13px] text-error-red">Passwords do not match</p>
            )}
          </div>
        </div>

        <div className="flex w-full gap-1">
          <Button type="submit" disabled={!passwordsMatch}>
            Save
          </Button>
        </div>
      </form>
    </AuthLayout>
  )
}
