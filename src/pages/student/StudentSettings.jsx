import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StudentShell from '../../components/StudentShell'
import MobileShell from '../../components/MobileShell'
import Button from '../../components/Button'
import useIsMobile from '../../lib/useIsMobile'

const ROWS = [
  { key: 'edit-profile', label: 'Edit Profile', danger: false, to: '/student/profile/edit' },
  { key: 'switch-account', label: 'Switch Account', danger: false, to: null },
  { key: 'change-password', label: 'Change Password', danger: false, to: null },
  { key: 'logout', label: 'Logout', danger: false, to: '/student/login' },
  { key: 'delete', label: 'Delete account', danger: true, to: null },
]

export default function StudentSettings() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const [confirmDelete, setConfirmDelete] = useState(false)

  const handleRow = (row) => {
    if (row.key === 'delete') {
      setConfirmDelete(true)
      return
    }
    if (row.to) navigate(row.to)
  }

  const content = (
    <div className={`mx-auto flex w-full flex-col gap-[50px] ${isMobile ? '' : 'max-w-[552px]'}`}>
      <div className="flex w-full flex-col">
        <h1
          className={`font-heading font-medium whitespace-nowrap text-black ${
            isMobile ? 'text-[28px] tracking-[-1.12px]' : 'text-[32px] tracking-[-1.28px]'
          }`}
        >
          Settings
        </h1>
        <p className="text-[16px] tracking-[-0.48px] text-primary-grey">
          Customize to your taste.
        </p>
      </div>

      <div className="flex w-full flex-col gap-[12px]">
        {ROWS.map((row) => (
          <button
            key={row.key}
            type="button"
            onClick={() => handleRow(row)}
            className={`w-full rounded-[12px] border border-solid p-[16px] text-left text-[16px] tracking-[-0.48px] ${
              row.danger
                ? 'border-[rgba(227,54,41,0.1)] text-error-red'
                : 'border-light-ash text-black'
            }`}
          >
            {row.label}
          </button>
        ))}
      </div>
    </div>
  )

  const shell = isMobile ? (
    <MobileShell active="settings">{content}</MobileShell>
  ) : (
    <StudentShell active="settings">{content}</StudentShell>
  )

  return (
    <>
      {shell}
      {confirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.14)] p-5">
          <div className="flex w-full max-w-[440px] flex-col gap-[40px] rounded-[20px] border border-[rgba(15,53,219,0.1)] bg-off-white p-[20px] shadow-[0px_8px_6px_rgba(15,53,219,0.11)]">
            <div className="flex w-full flex-col gap-[4px]">
              <h2 className="text-[20px] font-medium tracking-[-0.8px] whitespace-nowrap text-black">
                Delete account?
              </h2>
              <p className="text-[16px] tracking-[-0.64px] text-primary-grey">
                Are you sure you want to delete your account? You’ll lose all your data and
                placements information.{' '}
                <span className="font-bold text-[#030303]">This action can not be reversed!!!</span>
              </p>
            </div>
            <div className="flex w-full gap-[4px]">
              <Button variant="secondary" onClick={() => setConfirmDelete(false)}>
                Cancel and go back
              </Button>
              <button
                type="button"
                onClick={() => navigate('/student/signup')}
                className="flex-1 cursor-pointer rounded-control bg-error-red px-5 py-4 text-[13px] font-medium tracking-[-0.52px] text-off-white transition-colors hover:bg-[#c22e21]"
              >
                Delete account
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
