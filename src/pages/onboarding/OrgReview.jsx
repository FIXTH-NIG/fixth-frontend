import { useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../../components/OnboardingSplit'
import { BackNextRow, NoteRow, ReviewRow } from '../../components/SplitFields'
import checkCircle from '../../assets/icons/check-circle.svg'
import { useOnboarding } from '../../lib/OnboardingContext'

export default function OrgReview() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { data } = useOnboarding()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/${userType}/home`)
  }

  return (
    <OnboardingSplit
      panelEyebrow="FOR ORGANIZATIONS"
      headline="You’re ready to meet your next great intern."
      stepNote="Step 5 of 5 · Takes about 4 minutes"
      section="ORGANIZATION PROFILE"
      step={5}
      totalSteps={5}
      title="Review your organization"
      subtitle="Confirm your information before publishing your profile."
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <div className="flex w-full flex-col">
          <ReviewRow label="Organization" value={data.orgName || 'Fixth'} onEdit={() => navigate(`/${userType}/onboarding/details`)} />
          <ReviewRow label="Work email" value={data.email || 'hello@fixth.com'} onEdit={() => navigate(`/${userType}/onboarding/email`)} />
          <ReviewRow label="Industry" value={data.industry || 'Technology'} onEdit={() => navigate(`/${userType}/onboarding/details`)} />
          <ReviewRow
            label="Location"
            value={[data.city, data.country].filter(Boolean).join(', ') || 'Lagos, Nigeria'}
            onEdit={() => navigate(`/${userType}/onboarding/about`)}
          />
          <ReviewRow label="Website" value={data.website || 'fixth.com'} onEdit={() => navigate(`/${userType}/onboarding/details`)} />
        </div>
        <NoteRow icon={checkCircle}>Everything looks ready. You can edit these details anytime.</NoteRow>
        <BackNextRow onBack={() => navigate(`/${userType}/onboarding/about`)} nextLabel="Save and finish" />
      </form>
    </OnboardingSplit>
  )
}
