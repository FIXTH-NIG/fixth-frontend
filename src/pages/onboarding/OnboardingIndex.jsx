import { Navigate, useParams } from 'react-router-dom'

export default function OnboardingIndex() {
  const { userType } = useParams()
  const firstStep = userType === 'student' ? 'profile' : 'org-details'
  return <Navigate to={`/${userType}/onboarding/${firstStep}`} replace />
}
