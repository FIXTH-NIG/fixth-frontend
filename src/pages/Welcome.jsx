import { useNavigate, useParams } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import Button from '../components/Button'
import { welcomeSubtitle } from '../lib/copy'

export default function Welcome() {
  const { userType } = useParams()
  const navigate = useNavigate()

  return (
    <AuthLayout>
      <div className="flex w-full flex-col items-center gap-[54px]">
        <div className="flex w-full flex-col items-center text-center">
          <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] text-black">Welcome to fixth</h1>
          <p className="text-[16px] tracking-[-0.48px] text-primary-grey">{welcomeSubtitle(userType)}</p>
        </div>
        <Button className="w-[292px] flex-none" onClick={() => navigate(`/${userType}/setting-up`)}>
          Take me there
        </Button>
      </div>
    </AuthLayout>
  )
}
