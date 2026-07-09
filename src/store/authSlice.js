import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accessToken: null,
  refreshToken: null,
  user: null,
  profileComplete: false,
  accountType: null,
  pendingEmail: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, refreshToken, user, profileComplete } = action.payload || {}
      if (accessToken !== undefined) state.accessToken = accessToken
      if (refreshToken !== undefined) state.refreshToken = refreshToken
      if (user !== undefined) state.user = user
      if (profileComplete !== undefined) state.profileComplete = profileComplete
    },
    setAccountType: (state, action) => {
      state.accountType = action.payload || null
    },
    setPendingEmail: (state, action) => {
      state.pendingEmail = action.payload || null
    },
    clearPendingEmail: (state) => {
      state.pendingEmail = null
    },
    clearCredentials: (state) => {
      state.accessToken = null
      state.refreshToken = null
      state.user = null
      state.profileComplete = false
    },
  },
})

export const { setCredentials, clearCredentials, setAccountType, setPendingEmail, clearPendingEmail } = authSlice.actions
export default authSlice.reducer

export const selectAccessToken = (state) => state.auth.accessToken
export const selectRefreshToken = (state) => state.auth.refreshToken
export const selectCurrentUser = (state) => state.auth.user
export const selectProfileComplete = (state) => state.auth.profileComplete
export const selectAccountType = (state) => state.auth.accountType
export const selectPendingEmail = (state) => state.auth.pendingEmail
