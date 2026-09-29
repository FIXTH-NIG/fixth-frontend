import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminShell from '../../components/AdminShell'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import PasswordInput from '../../components/PasswordInput'

export default function AdminChangePassword({ role = 'Super Admin', basePath = '/admin', showAdmins = true }) {
  const navigate = useNavigate()
  const [currentPassword, setCurrentPassword] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const passwordsMatch = password && password === confirmPassword

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!passwordsMatch) return
    navigate(`${basePath}/home`)
  }

  return (
    <AdminShell active={null} role={role} basePath={basePath} showAdmins={showAdmins}>
      <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-[552px] flex-col gap-[50px]">
        <div className="flex w-full flex-col">
          <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] whitespace-nowrap text-black">
            Change password
          </h1>
          <p className="text-[16px] tracking-[-0.48px] text-primary-grey">
            Kindly enter your new password
          </p>
        </div>

        <div className="flex w-full flex-col gap-[12px]">
          <PasswordInput
            label="Current password"
            id="admin-current-password"
            placeholder="Enter current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <TextInput
            label="Email address"
            id="admin-email"
            type="email"
            placeholder="johndoe@fixth.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            label="New password"
            id="admin-new-password"
            placeholder="12345678"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordInput
            label="Confirm password"
            id="admin-confirm-password"
            placeholder="12345678"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPassword && !passwordsMatch && (
            <p className="text-[13px] text-error-red">Passwords do not match</p>
          )}
        </div>

        <div className="flex w-full gap-[4px]">
          <Button type="button" variant="secondary" onClick={() => navigate(`${basePath}/settings`)}>
            Back
          </Button>
          <Button type="submit" disabled={!passwordsMatch}>
            Save changes
          </Button>
        </div>
      </form>
    </AdminShell>
  )
}
