import { useParams } from 'react-router-dom'
import StudentEmail from './StudentEmail'
import OrgEmail from './OrgEmail'

export default function OnboardingEmail() {
  const { userType } = useParams()
  return userType === 'student' ? <StudentEmail /> : <OrgEmail />
}
