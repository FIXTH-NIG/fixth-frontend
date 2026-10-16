import { useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../components/OnboardingSplit'
import { PrimaryButton } from '../components/SplitFields'
import { welcomeSubtitle } from '../lib/copy'

export default function Welcome() {
  const { userType } = useParams()
  const navigate = useNavigate()

  return (
    <OnboardingSplit
      panelEyebrow={userType === 'student' ? 'GET STARTED' : 'FOR ORGANIZATIONS'}
      headline={userType === 'student' ? 'Let’s get your profile set up.' : 'Let’s get your organization set up.'}
      stepNote="Takes about 3 minutes"
      showProgress={false}
      title="Welcome to fixth"
      subtitle={welcomeSubtitle(userType)}
    >
      <PrimaryButton onClick={() => navigate(`/${userType}/setting-up`)}>
        Take me there
      </PrimaryButton>
    </OnboardingSplit>
  )
}
