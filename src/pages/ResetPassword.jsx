import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../components/OnboardingSplit'
import PasswordInput from '../components/PasswordInput'
import { PrimaryButton } from '../components/SplitFields'

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
    <OnboardingSplit
      panelEyebrow="RESET SECURELY"
      headline="Choose a new password."
      stepNote="Secure account recovery"
      showProgress={false}
      title="Change Password"
      subtitle="Kindly enter your new password"
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
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
        <PrimaryButton type="submit" disabled={!passwordsMatch}>
          Save
        </PrimaryButton>
      </form>
    </OnboardingSplit>
  )
}
