import { useParams } from 'react-router-dom'
import AuthLayout from '../../components/AuthLayout'

export default function OnboardingComplete() {
  const { userType } = useParams()

  return (
    <AuthLayout>
      <div className="flex w-full flex-col items-center gap-3 text-center">
        <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] text-black">You're all set</h1>
        <p className="text-[16px] tracking-[-0.48px] text-primary-grey capitalize">
          Your {userType} profile has been submitted.
        </p>
      </div>
    </AuthLayout>
  )
}
