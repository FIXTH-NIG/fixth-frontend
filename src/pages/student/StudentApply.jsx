import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StudentShell from '../../components/StudentShell'
import MobileShell from '../../components/MobileShell'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import SelectField from '../../components/SelectField'
import DateField from '../../components/DateField'
import StudentDocUpload from '../../components/StudentDocUpload'
import useIsMobile from '../../lib/useIsMobile'
import { COURSE_OPTIONS, DURATION_OPTIONS } from '../../lib/copy'

export default function StudentApply() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const [firstName, setFirstName] = useState('John')
  const [lastName, setLastName] = useState('Doe')
  const [institution, setInstitution] = useState('Federal University of Nigeria')
  const [course, setCourse] = useState('Civil Engineering')
  const [location, setLocation] = useState('Surulere, Lagos')
  const [placementLocation, setPlacementLocation] = useState('Lagos Island')
  const [startDate, setStartDate] = useState('2027-04-12')
  const [duration, setDuration] = useState('6 months')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/student/apply/success')
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
        Apply for Internship
      </h1>

      <div className="flex w-full flex-col gap-[24px]">
        <div className="flex w-full flex-col gap-[12px]">
          <div className="flex w-full items-start gap-[12px]">
            <TextInput
              label="First name"
              id="apply-first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextInput
              label="Last name"
              id="apply-last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <TextInput
            label="Institution"
            id="apply-institution"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
          />
          <SelectField
            label="Course"
            id="apply-course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            options={COURSE_OPTIONS}
          />
          <TextInput
            label="Location"
            id="apply-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <TextInput
            label="Preferred Placement Location"
            id="apply-placement-location"
            value={placementLocation}
            onChange={(e) => setPlacementLocation(e.target.value)}
          />
          <div className="flex w-full items-start gap-[12px]">
            <DateField
              label="Start date"
              id="apply-start-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <SelectField
              label="Duration"
              id="apply-duration"
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

        <div className="flex w-full gap-[4px]">
          {isMobile ? (
            <>
              <Button type="button" variant="secondary" onClick={() => navigate(-1)}>
                Back
              </Button>
              <Button type="submit">Save changes</Button>
            </>
          ) : (
            <>
              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate('/student/opportunities/civil-engineering-intern')}
              >
                Back to details
              </Button>
              <Button type="submit">Submit application</Button>
            </>
          )}
        </div>
      </div>
    </form>
  )

  if (isMobile) {
    return <MobileShell active="profile">{form}</MobileShell>
  }
  return <StudentShell active="home">{form}</StudentShell>
}
