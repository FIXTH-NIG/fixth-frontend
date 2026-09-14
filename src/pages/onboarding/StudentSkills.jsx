import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingLayout from '../../components/OnboardingLayout'
import SkillSelect from '../../components/SkillSelect'
import { useOnboarding } from '../../lib/OnboardingContext'
import { STEP_COUNT, SKILL_OPTIONS } from '../../lib/copy'

export default function StudentSkills() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { data, update } = useOnboarding()

  const [skills, setSkills] = useState(data.skills ?? [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (skills.length === 0) return
    update({ skills })
    navigate(`/${userType}/onboarding/location-sharing`)
  }

  return (
    <OnboardingLayout
      title="Skills information"
      subtitle="Add your soft and hard skills"
      step={4}
      totalSteps={STEP_COUNT[userType]}
      onBack={() => navigate(`/${userType}/onboarding/internship-info`)}
      onSubmit={handleSubmit}
      nextDisabled={skills.length === 0}
    >
      <SkillSelect label="Skills" options={SKILL_OPTIONS} value={skills} onChange={setSkills} />
    </OnboardingLayout>
  )
}
