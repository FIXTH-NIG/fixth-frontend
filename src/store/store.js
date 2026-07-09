import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import { loadAuthState, saveAuthState } from './authStorage'

const preloadedAuth = loadAuthState()

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: preloadedAuth ? { auth: preloadedAuth } : undefined,
})

store.subscribe(() => {
  saveAuthState(store.getState().auth)
})

export const selectIsAuthenticated = (state) => Boolean(state.auth.accessToken)
