import { useLocation, useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../components/OnboardingSplit'

export default function CheckInbox() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { state } = useLocation()
  const email = state?.email ?? 'your email'

  return (
    <OnboardingSplit
      panelEyebrow="CHECK YOUR INBOX"
      headline="Confirm it's really you."
      stepNote="Secure account recovery"
      showProgress={false}
      title="Check your inbox"
      subtitle={`We sent password reset instructions to "${email}". Kindly check your inbox or spam folder to continue`}
    >
        <div className="flex w-full gap-3">
          <button
            type="button"
            onClick={() => navigate(`/${userType}/forgot-password`)}
            className="flex-1 cursor-pointer rounded-[12px] border border-[#E2E8F0] py-4 text-[15px] font-medium text-black"
          >
            Change email
          </button>
          <button
            type="button"
            onClick={() => navigate(`/${userType}/reset-password`, { state: { email } })}
            className="flex-[2] cursor-pointer rounded-[12px] bg-primary-blue py-4 text-[15px] font-medium text-white"
          >
            Open Gmail app
          </button>
        </div>
    </OnboardingSplit>
  )
}
