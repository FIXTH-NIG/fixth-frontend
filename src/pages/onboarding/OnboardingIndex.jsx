import { Navigate, useParams } from 'react-router-dom'

export default function OnboardingIndex() {
  const { userType } = useParams()
  return <Navigate to={`/${userType}/onboarding/email`} replace />
}
