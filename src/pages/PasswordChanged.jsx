import { useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../components/OnboardingSplit'
import { PrimaryButton } from '../components/SplitFields'

export default function PasswordChanged() {
  const { userType } = useParams()
  const navigate = useNavigate()

  return (
    <OnboardingSplit
      panelEyebrow="ALL SET"
      headline="You're good to go."
      stepNote="Secure account recovery"
      showProgress={false}
      title="Password Changed"
      subtitle="Your password has been successfully changed"
    >
      <PrimaryButton onClick={() => navigate(`/${userType}/login`)}>
        Back to login
      </PrimaryButton>
    </OnboardingSplit>
  )
}
