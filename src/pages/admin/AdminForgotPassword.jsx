import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminShell from '../../components/AdminShell'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'

export default function AdminForgotPassword({ role = 'Super Admin', basePath = '/admin', showAdmins = true }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    navigate(`${basePath}/check-inbox`, { state: { email } })
  }

  return (
    <AdminShell active={null} role={role} basePath={basePath} showAdmins={showAdmins}>
      <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-[552px] flex-col gap-[50px]">
        <div className="flex w-full flex-col">
          <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] whitespace-nowrap text-black">
            Forgot password
          </h1>
          <p className="text-[16px] tracking-[-0.48px] text-primary-grey">
            Kindly enter your email address
          </p>
        </div>

        <TextInput
          label="Email address"
          id="admin-forgot-email"
          type="email"
          placeholder="johndoe@fixth.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputClassName="text-black"
        />

        <div className="flex w-full gap-[4px]">
          <Button type="button" variant="secondary" onClick={() => navigate(`${basePath}/settings`)}>
            Back
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </AdminShell>
  )
}
