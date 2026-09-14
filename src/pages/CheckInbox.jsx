import { useLocation, useNavigate, useParams } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import Button from '../components/Button'

export default function CheckInbox() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { state } = useLocation()
  const email = state?.email ?? 'your email'

  return (
    <AuthLayout>
      <div className="flex w-full flex-col items-center gap-[54px]">
        <div className="flex w-full flex-col items-center text-center">
          <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] text-black">Check your inbox</h1>
          <p className="text-[16px] tracking-[-0.48px] text-primary-grey">
            We sent password reset instructions to &ldquo;{email}&rdquo;. Kindly check your inbox or spam folder to
            continue
          </p>
        </div>

        <div className="flex w-full gap-1">
          <Button variant="secondary" onClick={() => navigate(`/${userType}/forgot-password`)}>
            Change email
          </Button>
          <Button onClick={() => navigate(`/${userType}/reset-password`, { state: { email } })}>
            Open Gmail app
          </Button>
        </div>
      </div>
    </AuthLayout>
  )
}
