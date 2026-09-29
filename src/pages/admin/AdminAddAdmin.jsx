import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminShell from '../../components/AdminShell'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import PasswordInput from '../../components/PasswordInput'
import cameraPlus from '../../assets/icons/camera-plus.svg'

export default function AdminAddAdmin({ role = 'Super Admin', basePath = '/admin', showAdmins = true }) {
  const navigate = useNavigate()
  const avatarRef = useRef(null)
  const [avatar, setAvatar] = useState(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`${basePath}/admins`)
  }

  return (
    <AdminShell active="admins" role={role} basePath={basePath} showAdmins={showAdmins}>
      <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-[552px] flex-col gap-[50px]">
        <div className="flex w-full flex-col">
          <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] whitespace-nowrap text-black">
            Add a new Admin
          </h1>
          <p className="text-[16px] tracking-[-0.48px] text-primary-grey">
            You can’t do it all alone bro
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-[40px]">
          <div className="flex w-full flex-col items-center justify-center gap-[4px]">
            <button
              type="button"
              onClick={() => avatarRef.current?.click()}
              className="flex cursor-pointer items-center rounded-full bg-light-ash p-[40px]"
              aria-label="Upload admin photo"
            >
              {avatar ? (
                <img src={avatar} alt="Admin photo" className="size-[100px] rounded-full object-cover" />
              ) : (
                <img src={cameraPlus} alt="" className="size-[100px]" />
              )}
            </button>
            <input
              ref={avatarRef}
              type="file"
              accept="image/*"
              onChange={(e) => {
                const selected = e.target.files?.[0]
                if (selected) setAvatar(URL.createObjectURL(selected))
              }}
              className="hidden"
            />
            <p className="w-[208px] text-center text-[13px] tracking-[-0.39px] text-primary-grey">
              Use a clear, professional headshot image of the person.
            </p>
          </div>

          <div className="flex w-full flex-col gap-[12px]">
            <div className="flex w-full items-start gap-[12px]">
              <TextInput
                label="First name"
                id="admin-first-name"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextInput
                label="Last name"
                id="admin-last-name"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <TextInput
              label="Email address"
              id="admin-email"
              type="email"
              placeholder="johndoe@fixth.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              label="Password"
              id="admin-password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordInput
              label="Confirm password"
              id="admin-confirm-password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="flex w-full gap-[4px]">
            <Button type="button" variant="secondary" onClick={() => navigate(`${basePath}/admins`)}>
              Back
            </Button>
            <Button type="submit">Add admin</Button>
          </div>
        </div>
      </form>
    </AdminShell>
  )
}
