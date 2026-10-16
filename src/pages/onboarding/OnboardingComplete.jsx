import { useParams } from 'react-router-dom'
import OnboardingSplit from '../../components/OnboardingSplit'

export default function OnboardingComplete() {
  const { userType } = useParams()

  return (
    <OnboardingSplit
      panelEyebrow="ALL SET"
      headline="You're all set."
      stepNote="Profile submitted"
      showProgress={false}
      title="You're all set"
      subtitle={`Your ${userType} profile has been submitted.`}
    />
  )
}
