import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import Tabs from '../components/Tabs'
import TextInput from '../components/TextInput'
import PasswordInput from '../components/PasswordInput'
import Button from '../components/Button'
import { copy } from '../lib/copy'

export default function Login() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const c = copy[userType].login

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) return
    navigate(`/${userType}/welcome`)
  }

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-[54px]">
        <div className="flex w-full flex-col gap-5">
          <div className="flex w-full flex-col items-start">
            <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] text-black">
              Login to your account
            </h1>
            <p className="text-[16px] tracking-[-0.48px] text-primary-grey">
              Don&rsquo;t have an account?{' '}
              <Link to={`/${userType}/signup`} className="text-primary-blue">
                Sign up
              </Link>
            </p>
          </div>
          <Tabs userType={userType} onChange={(next) => navigate(`/${next}/login`)} />
        </div>

        <div className="flex w-full flex-col items-end gap-5">
          <div className="flex w-full flex-col gap-3">
            <TextInput
              id="email"
              type="email"
              label={c.emailLabel}
              placeholder={c.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <PasswordInput
              id="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link to={`/${userType}/forgot-password`} className="text-[16px] tracking-[-0.48px] text-primary-blue">
            Forgot password?
          </Link>
        </div>

        <div className="flex w-full gap-1">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </AuthLayout>
  )
}
