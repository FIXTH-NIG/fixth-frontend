import { useParams } from 'react-router-dom'
import StudentOtp from './StudentOtp'
import OrgOtp from './OrgOtp'

export default function OnboardingOtp() {
  const { userType } = useParams()
  return userType === 'student' ? <StudentOtp /> : <OrgOtp />
}
