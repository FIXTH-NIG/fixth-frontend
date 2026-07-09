import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../routes'
import { useAuth } from '../../../hooks'

export default function SignInForm() {
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please enter your email and password.')
      return
    }

    setIsSubmitting(true)
    try {
      const response = await signIn({ email, password })
      const profileComplete = response?.profile_complete ?? response?.profileComplete
      const nextRoute = profileComplete === false ? ROUTES.signupAddExperience : ROUTES.appHome
      navigate(nextRoute)
    } catch (err) {
      setError(err?.message || 'Unable to sign in. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SignInFormContainer>
      <div className="sec1">
        <h1>Sign in</h1>
        <span>Welcome back</span>
      </div>
      <div className="inputSec">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Work Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
        {error ? <div className="formError">{error}</div> : null}
        <div className="alreadyHaveAnAcc">
          Don't have an account? <Link to={ROUTES.signupSignUp}>Sign up</Link>
        </div>
      </div>
    </SignInFormContainer>
  )
}

const SignInFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
  width: 480px;
  border-radius: 32px;
  border: 2px solid var(--light-ash);
  gap: 24px;
  @media (max-width: 700px){
      width: 100%;
      padding: 16px;
      border: none;
  }
  .sec1{
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 100%;
      align-items: center;
      text-align: center;
      h1{
          font-weight: 500;
          letter-spacing: -1px;
          font-size: 24px;
          @media (max-width: 700px){
              font-size: 20px;
          }
      }
      span{
          font-size: 12px;
          color: var(--grey);
      }
  }
  .inputSec{
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
      form{
          display: flex;
          flex-direction: column;
          width: inherit;
          gap: 8px;
          input{
              height: 36px;
              padding: 10px 20px;
              color: var(--black);
              border: 2px solid var(--grey);
              background-color: var(--background-white);
              border-radius: 8px;
          }
          button{
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 36px;
              background-color: var(--blue);
              color: var(--background-white);
              font-size: 14px;
              border-radius: 10px;
              opacity: 1;
              &:disabled{
                  opacity: 0.7;
                  cursor: not-allowed;
              }
          }
      }
      .formError{
          color: #c0392b;
          font-size: 12px;
          text-align: center;
      }
      .alreadyHaveAnAcc{
          font-size: 12px;
          width: inherit;
          color: var(--grey);
          text-align: center;
          a{
              color: var(--black);
          }
      }
  }
`
