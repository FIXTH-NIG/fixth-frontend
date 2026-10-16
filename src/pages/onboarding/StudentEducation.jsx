import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../../components/OnboardingSplit'
import StudentDocUpload from '../../components/StudentDocUpload'
import { BackNextRow, SplitInput } from '../../components/SplitFields'
import { useOnboarding } from '../../lib/OnboardingContext'

export default function StudentEducation() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { data, update } = useOnboarding()

  const [institution, setInstitution] = useState(data.institution ?? '')
  const [course, setCourse] = useState(data.course ?? '')
  const [level, setLevel] = useState(data.level ?? '')

  const canSubmit = institution && course && level

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    update({ institution, course, level })
    navigate(`/${userType}/onboarding/preferences`)
  }

  return (
    <OnboardingSplit
      panelEyebrow="BUILD YOUR CAREER PROFILE"
      headline="Your next opportunity starts with a profile that feels like you."
      stepNote="Step 4 of 7 · Takes about 3 minutes"
      section="STUDENT PROFILE"
      step={4}
      totalSteps={7}
      title="Your education"
      subtitle="Help us match you with relevant opportunities."
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <SplitInput
          label="Institution"
          placeholder="Federal University of Technology"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
          required
        />
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <SplitInput
            label="Course of study"
            placeholder="Civil Engineering"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
          <SplitInput
            label="Level"
            placeholder="400 level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
          />
        </div>
        <StudentDocUpload
          label="School ID or letter"
          dropTitle="Upload PDF, DOC or DOCX"
          dropSubtitle="Maximum file size: 10 MB"
        />
        <BackNextRow onBack={() => navigate(`/${userType}/onboarding/profile`)} nextDisabled={!canSubmit} />
      </form>
    </OnboardingSplit>
  )
}
