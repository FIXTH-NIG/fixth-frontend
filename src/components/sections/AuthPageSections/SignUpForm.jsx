import React, { useState } from 'react'
import styled from 'styled-components'
import apple from "../../../assets/Icons/apple.svg"
import google from "../../../assets/Icons/google.svg"
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../routes'
import { useAuth } from '../../../hooks'

export default function SignUpForm() {
  const navigate = useNavigate()
  const { signup, accountType } = useAuth()
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleCreateAccount = async (event) => {
    event.preventDefault()
    setError('')

    if (!fullname || !email || !password) {
      setError('Please fill in all fields.')
      return
    }

    if (!acceptedTerms) {
      setError('Please accept the terms and conditions.')
      return
    }

    setIsSubmitting(true)
    try {
      await signup({ fullname, email, password, type: accountType })
      navigate(ROUTES.signupVerification)
    } catch (err) {
      setError(err?.message || 'Unable to create account. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SignUpFormContainer>
        <div className="sec1">
            <h1>
                Sign up
            </h1>
            <span>Get started with an account on Project X</span>
        </div>
        <div className="methods">
            <div className="method">
                <img src={google} alt="google icon" />
                Continue with Google
            </div>
            <div className="method">
                <img src={apple} alt="apple icon" />
                Continue with Apple
            </div>
        </div>
        <div className="or">
            <span>_______________</span> or <span>_______________</span>
        </div>
        <div className="inputSec">
            <form onSubmit={handleCreateAccount}>
                <input
                  type="text"
                  placeholder='Fullname'
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
                <input
                  type="email"
                  placeholder='Work Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Creating account...' : 'Create account'}
                </button>
            </form>
            <div className="termsAndCondition">
                <input
                  type="checkbox"
                  id='termsAndCondition'
                  name='termsAndCondition'
                  value="yes"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                />
                <span>By registering you agree with our terms & conditions</span>
            </div>
            {error ? <div className="formError">{error}</div> : null}
            <div className="alreadyHaveAnAcc">
                Already have an account? <Link to={ROUTES.signupSignIn}>Sign in</Link>
            </div>
        </div>
    </SignUpFormContainer>
  )
}

const SignUpFormContainer = styled.section`
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
    .methods{
        display: flex;
        width: 100%;
        justify-content: space-between;
        .method{
            height: 36px;
            width: 49%;
            display: flex;
            padding: 10px 20px;
            justify-content: space-between;
            align-items: center;
            border: 2px solid var(--grey);
            border-radius: 8px;
            font-size: 12px;
            letter-spacing: -0.5px;
        }
    }
    .or{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 12px;
        color: var(--light-ash);
        height: 15px;
        span{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: inherit;
            padding-bottom: 10px;
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
        .termsAndCondition{
            display: flex;
            gap: 5px;
            align-items: center;
            color: var(--grey);
            span{
                font-size: 12px;
            }
            input{
                height: 16px;
                width: 16px;
                border-radius: 8px;
                background-color: var(--background-white);
                &:checked{
                    background: var(--blue);
                    border-color: var(--blue);
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
