import { Navigate, Outlet, useParams } from 'react-router-dom'

const VALID_TYPES = ['student', 'organization']

export default function UserTypeGate() {
  const { userType } = useParams()
  if (!VALID_TYPES.includes(userType)) {
    return <Navigate to="/student/signup" replace />
  }
  return <Outlet />
}
