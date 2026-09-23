import { useNavigate } from 'react-router-dom'
import StudentShell from '../../components/StudentShell'
import MobileShell from '../../components/MobileShell'
import EmptyState from '../../components/EmptyState'
import rocketIcon from '../../assets/icons/rocket.svg'
import rocketSmall from '../../assets/icons/rocket-sm.svg'
import useIsMobile from '../../lib/useIsMobile'

export default function ApplySuccess() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()

  const content = (
    <div
      className={`mx-auto flex w-full flex-col items-center justify-center ${
        isMobile ? '' : 'max-w-[651px] py-10'
      }`}
    >
      <EmptyState
        icon={isMobile ? rocketSmall : rocketIcon}
        title="Your application has been submitted"
        subtitle="We’ll get back to you soon"
        actionLabel="See all applied internships"
        onAction={() => navigate('/student/applications')}
        compact={isMobile}
      />
    </div>
  )

  if (isMobile) {
    return <MobileShell active="profile">{content}</MobileShell>
  }
  return <StudentShell active="applications">{content}</StudentShell>
}
