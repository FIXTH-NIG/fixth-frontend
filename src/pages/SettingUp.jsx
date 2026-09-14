import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import logo from '../assets/logo-white.svg'

export default function SettingUp() {
  const { userType } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate(`/${userType}/onboarding`), 1800)
    return () => clearTimeout(timer)
  }, [navigate, userType])

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-primary-blue p-5">
      <div className="flex w-full max-w-[670px] flex-col items-center justify-center p-[50px]">
        <div className="flex flex-col items-center justify-center gap-3">
          <img src={logo} alt="fixth" className="h-[68px] w-[160px]" />
          <p className="text-[16px] tracking-[-0.48px] text-off-white">Setting up your profile...</p>
        </div>
      </div>
    </div>
  )
}
