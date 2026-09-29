import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminShell from '../../components/AdminShell'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import avatarEdit from '../../assets/images/avatar-edit.png'

export default function AdminEditProfile({ role = 'Super Admin', basePath = '/admin', showAdmins = true }) {
  const navigate = useNavigate()
  const avatarRef = useRef(null)
  const [avatar, setAvatar] = useState(avatarEdit)
  const [firstName, setFirstName] = useState('John')
  const [lastName, setLastName] = useState('Doe')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`${basePath}/home`)
  }

  return (
    <AdminShell active={null} role={role} basePath={basePath} showAdmins={showAdmins}>
      <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-[552px] flex-col gap-[50px]">
        <div className="flex w-full flex-col">
          <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] whitespace-nowrap text-black">
            Edit your profile
          </h1>
          <p className="text-[16px] tracking-[-0.48px] text-primary-grey">
            Customize to your taste
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-[40px]">
          <div className="flex w-full flex-col items-center justify-center gap-[4px]">
            <img src={avatar} alt="Profile photo" className="size-[180px] rounded-full object-cover" />
            <div className="flex w-[250px] gap-[4px]">
              <Button type="button" variant="secondary" onClick={() => setAvatar(avatarEdit)}>
                Delete
              </Button>
              <Button type="button" onClick={() => avatarRef.current?.click()}>
                Change
              </Button>
            </div>
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
          </div>

          <div className="flex w-full items-start gap-[12px]">
            <TextInput
              label="First name"
              id="admin-edit-first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextInput
              label="Last name"
              id="admin-edit-last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="flex w-full gap-[4px]">
            <Button type="button" variant="secondary" onClick={() => navigate(`${basePath}/home`)}>
              Back
            </Button>
            <Button type="submit">Save changes</Button>
          </div>
        </div>
      </form>
    </AdminShell>
  )
}
