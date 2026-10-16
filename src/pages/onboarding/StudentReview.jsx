import { useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../../components/OnboardingSplit'
import { BackNextRow, NoteRow, ReviewRow } from '../../components/SplitFields'
import checkCircle from '../../assets/icons/check-circle.svg'
import { useOnboarding } from '../../lib/OnboardingContext'

export default function StudentReview() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { data } = useOnboarding()

  const name = [data.firstName, data.lastName].filter(Boolean).join(' ') || 'John Doe'
  const phone = data.phone ? ` · ${data.phone}` : ' · +234 801 234 5678'
  const education = [data.course || 'Civil Engineering', data.level || '400 level'].join(' · ')
  const preferences = [
    data.placementLocation || 'Lagos',
    (data.workStyles ?? ['Hybrid']).join(' · ') || 'Hybrid',
    data.duration || '6 months',
  ].join(' · ')
  const skills = data.skills?.length ? `${data.skills.length} skills selected` : '6 skills selected'

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/${userType}/home`)
  }

  return (
    <OnboardingSplit
      panelEyebrow="BUILD YOUR CAREER PROFILE"
      headline="Your next opportunity starts with a profile that feels like you."
      stepNote="Step 7 of 7 · Takes about 3 minutes"
      section="STUDENT PROFILE"
      step={7}
      totalSteps={7}
      title="Review your profile"
      subtitle="Confirm your details before we build your profile."
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <div className="flex w-full flex-col">
          <ReviewRow label="Profile" value={`${name}${phone}`} onEdit={() => navigate(`/${userType}/onboarding/profile`)} />
          <ReviewRow label="Education" value={education} onEdit={() => navigate(`/${userType}/onboarding/education`)} />
          <ReviewRow label="Preferences" value={preferences} onEdit={() => navigate(`/${userType}/onboarding/preferences`)} />
          <ReviewRow label="Skills" value={skills} onEdit={() => navigate(`/${userType}/onboarding/skills`)} />
          <ReviewRow label="Location sharing" value="Only while using Fixth" onEdit={() => navigate(`/${userType}/onboarding/location-sharing`)} />
        </div>
        <NoteRow icon={checkCircle}>Everything looks ready. You can edit your profile anytime.</NoteRow>
        <BackNextRow onBack={() => navigate(`/${userType}/onboarding/skills`)} nextLabel="Save and finish" />
      </form>
    </OnboardingSplit>
  )
}
