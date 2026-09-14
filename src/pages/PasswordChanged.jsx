import { useNavigate, useParams } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import Button from '../components/Button'

export default function PasswordChanged() {
  const { userType } = useParams()
  const navigate = useNavigate()

  return (
    <AuthLayout>
      <div className="flex w-full flex-col items-center gap-[54px]">
        <div className="flex w-full flex-col items-center text-center">
          <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] text-black">Password Changed</h1>
          <p className="text-[16px] tracking-[-0.48px] text-primary-grey">
            Your password has been successfully changed
          </p>
        </div>
        <Button className="w-[292px] flex-none" onClick={() => navigate(`/${userType}/login`)}>
          Back to login
        </Button>
      </div>
    </AuthLayout>
  )
}
