import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearCredentials,
  clearPendingEmail,
  selectAccessToken,
  selectAccountType,
  selectCurrentUser,
  selectPendingEmail,
  selectProfileComplete,
  selectRefreshToken,
  setAccountType,
  setCredentials,
  setPendingEmail,
} from '../store/authSlice'
import { selectIsAuthenticated } from '../store/store'
import {
  login,
  logout,
  refreshToken,
  resendOtp,
  signupCompany,
  signupStudent,
  verifyEmail,
} from '../services/authService'
import { clearAuthState } from '../store/authStorage'

const normalizeAuthPayload = (data) => {
  if (!data || typeof data !== 'object') return {}
  return {
    accessToken: data.access || data.access_token || data.token || null,
    refreshToken: data.refresh || data.refresh_token || null,
    profileComplete: data.profile_complete ?? data.profileComplete,
    user: data.user || data.profile || null,
  }
}

export const useAuth = () => {
  const dispatch = useDispatch()

  const accessToken = useSelector(selectAccessToken)
  const refreshTokenValue = useSelector(selectRefreshToken)
  const user = useSelector(selectCurrentUser)
  const profileComplete = useSelector(selectProfileComplete)
  const accountType = useSelector(selectAccountType)
  const pendingEmail = useSelector(selectPendingEmail)
  const isAuthenticated = useSelector(selectIsAuthenticated)

  const setType = useCallback(
    (type) => {
      dispatch(setAccountType(type))
    },
    [dispatch]
  )

  const signup = useCallback(
    async ({ fullname, email, password, type }) => {
      const selectedType = type || accountType || 'student'
      const payload = { fullname, email, password }
      const response =
        selectedType === 'company'
          ? await signupCompany(payload)
          : await signupStudent(payload)

      dispatch(setAccountType(selectedType))
      dispatch(setPendingEmail(email))
      return response
    },
    [accountType, dispatch]
  )

  const signIn = useCallback(
    async ({ email, password }) => {
      const response = await login({ email, password })
      const authPayload = normalizeAuthPayload(response)
      dispatch(setCredentials(authPayload))
      return response
    },
    [dispatch]
  )

  const verifyOtp = useCallback(
    async ({ email, code }) => {
      const response = await verifyEmail({ email, code })
      const authPayload = normalizeAuthPayload(response)
      dispatch(setCredentials(authPayload))
      dispatch(clearPendingEmail())
      return response
    },
    [dispatch]
  )

  const resendVerification = useCallback(async ({ email }) => {
    return resendOtp({ email })
  }, [])

  const refreshAccessToken = useCallback(
    async (value) => {
      const response = await refreshToken({ refresh: value || refreshTokenValue })
      const authPayload = normalizeAuthPayload(response)
      dispatch(setCredentials(authPayload))
      return response
    },
    [dispatch, refreshTokenValue]
  )

  const signOut = useCallback(
    async () => {
      const token = refreshTokenValue
      try {
        if (token) {
          await logout({ refresh: token })
        }
      } finally {
        clearAuthState()
        dispatch(clearCredentials())
        dispatch(clearPendingEmail())
      }
    },
    [dispatch, refreshTokenValue]
  )

  return {
    accessToken,
    refreshToken: refreshTokenValue,
    user,
    profileComplete,
    accountType,
    pendingEmail,
    isAuthenticated,
    setAccountType: setType,
    signup,
    signIn,
    verifyOtp,
    resendVerification,
    refreshAccessToken,
    signOut,
  }
}
