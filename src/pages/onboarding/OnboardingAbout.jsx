import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingLayout from '../../components/OnboardingLayout'
import TextInput from '../../components/TextInput'
import SelectField from '../../components/SelectField'
import DocumentUpload from '../../components/DocumentUpload'
import { useOnboarding } from '../../lib/OnboardingContext'
import { STEP_COUNT, COURSE_OPTIONS, LEVEL_OPTIONS } from '../../lib/copy'

function StudentAbout({ userType, navigate, data, update }) {
  const [bio, setBio] = useState(data.bio ?? '')
  const [location, setLocation] = useState(data.location ?? '')
  const [institution, setInstitution] = useState(data.institution ?? '')
  const [course, setCourse] = useState(data.course ?? '')
  const [level, setLevel] = useState(data.level ?? '')

  const canSubmit = bio && location && institution && course && level

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    update({ bio, location, institution, course, level })
    navigate(`/${userType}/onboarding/internship-info`)
  }

  return (
    <OnboardingLayout
      title="About"
      subtitle="Input your personal information"
      step={2}
      totalSteps={STEP_COUNT.student}
      onBack={() => navigate(`/${userType}/onboarding/profile`)}
      onSubmit={handleSubmit}
      nextDisabled={!canSubmit}
    >
      <div className="flex w-full flex-col gap-1">
        <label className="text-[13px] tracking-[-0.39px] text-primary-grey">Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Tell organizations about yourself"
          className="h-[118px] w-full resize-none rounded-control border border-light-ash p-[15px] text-[16px] tracking-[-0.48px] text-black outline-none focus:border-primary-blue"
        />
      </div>
      <TextInput
        id="location"
        label="Location"
        placeholder="Surulere, Lagos"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <TextInput
        id="institution"
        label="Institution"
        placeholder="Federal University of Nigeria"
        value={institution}
        onChange={(e) => setInstitution(e.target.value)}
      />
      <SelectField
        id="course"
        label="Course"
        placeholder="Select course"
        options={COURSE_OPTIONS}
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <SelectField
        id="level"
        label="Level"
        placeholder="Select level"
        options={LEVEL_OPTIONS}
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      />
      <DocumentUpload label="School ID" />
    </OnboardingLayout>
  )
}

function OrganizationAbout({ userType, navigate, data, update }) {
  const [description, setDescription] = useState(data.description ?? '')
  const [country, setCountry] = useState(data.country ?? '')

  const canSubmit = description && country

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    update({ description, country })
    navigate(`/${userType}/onboarding/verification`)
  }

  return (
    <OnboardingLayout
      title="About"
      subtitle="Help students understand who you are"
      step={2}
      totalSteps={STEP_COUNT.organization}
      onBack={() => navigate(`/${userType}/onboarding/org-details`)}
      onSubmit={handleSubmit}
      nextDisabled={!canSubmit}
    >
      <div className="flex w-full flex-col gap-1">
        <label className="text-[13px] tracking-[-0.39px] text-primary-grey">Short Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="We are a cutting edge organization bridging the gap between SIWES students and Companies looking to hire them."
          className="h-[118px] w-full resize-none rounded-control border border-light-ash p-[15px] text-[16px] tracking-[-0.48px] text-black outline-none focus:border-primary-blue"
        />
      </div>
      <TextInput
        id="country"
        label="Country"
        placeholder="Nigeria"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
    </OnboardingLayout>
  )
}

export default function OnboardingAbout() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { data, update } = useOnboarding()

  return userType === 'student' ? (
    <StudentAbout userType={userType} navigate={navigate} data={data} update={update} />
  ) : (
    <OrganizationAbout userType={userType} navigate={navigate} data={data} update={update} />
  )
}
