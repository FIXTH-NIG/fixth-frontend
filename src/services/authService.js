import { authRequest, request } from './httpClient'

export const signupStudent = async ({ fullname, email, password }) => {
  return request('/apiv1/auth/signup/', {
    method: 'POST',
    body: JSON.stringify({ fullname, email, password }),
  })
}

export const signupCompany = async ({ fullname, email, password }) => {
  return request('/apiv1/auth/company/signup/', {
    method: 'POST',
    body: JSON.stringify({ fullname, email, password }),
  })
}

export const login = async ({ email, password }) => {
  return request('/apiv1/auth/login/', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
}

export const verifyEmail = async ({ email, code }) => {
  return request('/apiv1/auth/verify-email/', {
    method: 'POST',
    body: JSON.stringify({ email, code }),
  })
}

export const resendOtp = async ({ email }) => {
  return request('/apiv1/auth/resend-otp/', {
    method: 'POST',
    body: JSON.stringify({ email }),
  })
}

export const googleSignup = async ({ idToken }) => {
  return request('/apiv1/auth/signup/google/', {
    method: 'POST',
    body: JSON.stringify({ id_token: idToken }),
  })
}

export const refreshToken = async ({ refresh }) => {
  return request('/apiv1/auth/token/refresh/', {
    method: 'POST',
    body: JSON.stringify({ refresh }),
  })
}

export const logout = async ({ refresh }) => {
  const query = new URLSearchParams({ refresh }).toString()
  return authRequest(`/apiv1/auth/logout/?${query}`, {
    method: 'POST',
  })
}
