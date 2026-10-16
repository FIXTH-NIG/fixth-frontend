import { useParams } from 'react-router-dom'
import StudentReview from './StudentReview'
import OrgReview from './OrgReview'

export default function OnboardingReview() {
  const { userType } = useParams()
  return userType === 'student' ? <StudentReview /> : <OrgReview />
}
