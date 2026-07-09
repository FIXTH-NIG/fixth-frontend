import { loadAuthState } from '../store/authStorage'

const DEFAULT_BASE_URL = 'https://fixth-backend.onrender.com/api'

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

const getBaseUrl = () => {
  return import.meta?.env?.VITE_API_BASE_URL || DEFAULT_BASE_URL
}

const buildUrl = (path) => {
  const base = getBaseUrl().replace(/\/$/, '')
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized}`
}

const parseJsonSafely = async (response) => {
  const contentType = response.headers.get('content-type') || ''
  if (!contentType.includes('application/json')) return null
  try {
    return await response.json()
  } catch {
    return null
  }
}

export const request = async (path, options = {}) => {
  const url = buildUrl(path)
  const { headers, ...rest } = options

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...rest,
  })

  if (response.status === 204) return null

  const data = await parseJsonSafely(response)

  if (!response.ok) {
    const message = data?.detail || data?.message || 'Request failed'
    throw new ApiError(message, response.status, data)
  }

  return data
}

export const authRequest = async (path, options = {}) => {
  const authState = loadAuthState()
  const token = authState?.accessToken
  const authHeaders = token ? { Authorization: `Bearer ${token}` } : {}

  return request(path, {
    ...options,
    headers: {
      ...authHeaders,
      ...(options.headers || {}),
    },
  })
}
