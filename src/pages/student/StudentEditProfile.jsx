import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StudentShell from '../../components/StudentShell'
import MobileShell from '../../components/MobileShell'
import Button from '../../components/Button'
import useIsMobile from '../../lib/useIsMobile'
import TextInput from '../../components/TextInput'
import SelectField from '../../components/SelectField'
import SkillSelect from '../../components/SkillSelect'
import StudentDocUpload from '../../components/StudentDocUpload'
import avatarEdit from '../../assets/images/avatar-edit.png'
import { COURSE_OPTIONS, LEVEL_OPTIONS, DURATION_OPTIONS, SKILL_OPTIONS } from '../../lib/copy'

const INITIAL_SKILLS = [
  'Civil Engineering',
  'Woodwork',
  'Boring',
  'Graph analysis',
  'Office work',
  'Quality control',
  'Casting',
  'Lab work',
]

function Section({ title, subtitle, children }) {
  return (
    <section className="flex w-full flex-col gap-[40px]">
      <div className="flex w-full flex-col">
        <h2 className="font-heading text-[24px] font-medium tracking-[-0.96px] whitespace-nowrap text-black">
          {title}
        </h2>
        <p className="text-[16px] tracking-[-0.48px] text-primary-grey">{subtitle}</p>
      </div>
      {children}
    </section>
  )
}

export default function StudentEditProfile() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const avatarRef = useRef(null)
  const [avatar, setAvatar] = useState(avatarEdit)
  const [firstName, setFirstName] = useState('John')
  const [lastName, setLastName] = useState('Doe')
  const [bio, setBio] = useState(
    'I’m a Civil Engineering student looking for experience in prospective organizations. Thanks for viewing my profile.',
  )
  const [location, setLocation] = useState('Surulere, Lagos')
  const [institution, setInstitution] = useState('Federal University of Nigeria')
  const [course, setCourse] = useState('Civil Engineering')
  const [level, setLevel] = useState('400 Level')
  const [placementLocation, setPlacementLocation] = useState('Lagos Island')
  const [startDate, setStartDate] = useState('12/04/2027')
  const [duration, setDuration] = useState('6 months')
  const [skills, setSkills] = useState(INITIAL_SKILLS)
  const [shareLocation, setShareLocation] = useState(false)

  const handleAvatar = (selected) => {
    if (selected) setAvatar(URL.createObjectURL(selected))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/student/profile')
  }

  const form = (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto flex w-full flex-col gap-[50px] ${isMobile ? '' : 'max-w-[552px]'}`}
    >
      <h1
        className={`font-heading font-medium whitespace-nowrap text-black ${
          isMobile ? 'text-[28px] tracking-[-1.12px]' : 'text-[32px] tracking-[-1.28px]'
        }`}
      >
        Edit profile
      </h1>

        <Section title="Personal information" subtitle="Update your personal information">
          <div className="flex w-full flex-col items-center justify-center gap-[4px]">
            <img src={avatar} alt="Profile photo" className="size-[180px] rounded-full object-cover" />
            <div className="flex w-[250px] gap-[4px]">
              <Button type="button" variant="secondary" onClick={() => setAvatar(avatarEdit)}>
                Delete
              </Button>
              <Button type="button" onClick={() => avatarRef.current?.click()}>
                Change
              </Button>
            </div>
            <input
              ref={avatarRef}
              type="file"
              accept="image/*"
              onChange={(e) => handleAvatar(e.target.files?.[0])}
              className="hidden"
            />
          </div>
          <div className="flex w-full items-start gap-[12px]">
            <TextInput
              label="First name"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextInput
              label="Last name"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </Section>

        <Section title="About" subtitle="Input your general information">
          <div className="flex w-full flex-col gap-[12px]">
            <div className="flex w-full flex-col gap-1">
              <label htmlFor="bio" className="text-[13px] tracking-[-0.39px] text-primary-grey">
                Bio
              </label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={4}
                className="h-[118px] w-full resize-none rounded-control border border-light-ash p-[15px] text-[16px] tracking-[-0.48px] text-black outline-none focus:border-primary-blue"
              />
            </div>
            <TextInput
              label="Location"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <TextInput
              label="Institution"
              id="institution"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            />
            <SelectField
              label="Course"
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              options={COURSE_OPTIONS}
            />
            <SelectField
              label="Level"
              id="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              options={LEVEL_OPTIONS}
            />
            <StudentDocUpload
              label="School ID"
              initialFile={{ name: 'CamScanner-234952.pdf', size: '5mb' }}
            />
          </div>
        </Section>

        <Section title="Internship information" subtitle="Add your internship details">
          <div className="flex w-full flex-col gap-[12px]">
            <TextInput
              label="Preferred Placement Location"
              id="placement-location"
              value={placementLocation}
              onChange={(e) => setPlacementLocation(e.target.value)}
            />
            <div className="flex w-full items-start gap-[12px]">
              <TextInput
                label="Start date"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <SelectField
                label="Duration"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                options={DURATION_OPTIONS}
              />
            </div>
            <StudentDocUpload
              label="Resume/CV"
              initialFile={{ name: 'CamScanner-234952.pdf', size: '5mb' }}
            />
          </div>
        </Section>

        <Section title="Skill information" subtitle="Add your soft and hard skills">
          <SkillSelect label="Skills" options={SKILL_OPTIONS} value={skills} onChange={setSkills} />
        </Section>

        <Section title="Location sharing" subtitle="Let us know if your location should be shared">
          <div className="flex w-full flex-col gap-[4px]">
            <button
              type="button"
              onClick={() => setShareLocation(true)}
              className={`w-full rounded-[16px] border border-solid p-[20px] text-left text-[16px] font-medium tracking-[-0.64px] whitespace-nowrap ${
                shareLocation ? 'border-primary-blue text-primary-blue' : 'border-light-ash text-primary-grey'
              }`}
            >
              Share my current location with recruiters.
            </button>
            <button
              type="button"
              onClick={() => setShareLocation(false)}
              className={`w-full rounded-[16px] border border-solid p-[20px] text-left text-[16px] font-medium tracking-[-0.64px] whitespace-nowrap ${
                !shareLocation ? 'border-primary-blue text-primary-blue' : 'border-light-ash text-primary-grey'
              }`}
            >
              Don’t share my current location with recruiters.
            </button>
          </div>
        </Section>

        <div className="flex w-full gap-[4px]">
          <Button type="button" variant="secondary" onClick={() => navigate('/student/profile')}>
            Back
          </Button>
          <Button type="submit">Save changes</Button>
        </div>
      </form>
  )

  if (isMobile) {
    return <MobileShell active="profile">{form}</MobileShell>
  }
  return <StudentShell active="profile">{form}</StudentShell>
}
