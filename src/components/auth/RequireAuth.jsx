import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks'
import { ROUTES } from '../../routes'

export default function RequireAuth({ children }) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.signupSignIn} replace />
  }

  return children
}
