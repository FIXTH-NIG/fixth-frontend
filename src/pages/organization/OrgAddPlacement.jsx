import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OrgShell from '../../components/OrgShell'
import OrgMobileShell from '../../components/OrgMobileShell'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import SelectField from '../../components/SelectField'
import DateField from '../../components/DateField'
import useIsMobile from '../../lib/useIsMobile'
import { DURATION_OPTIONS } from '../../lib/copy'

const DISCIPLINES = ['Civil Engineering', 'Building', 'Architecture', 'Surverying']

export default function OrgAddPlacement() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [discipline, setDiscipline] = useState('Civil Engineering')
  const [location, setLocation] = useState('')
  const [duration, setDuration] = useState('6 months')
  const [deadline, setDeadline] = useState('2026-04-12')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/organization/home')
  }

  const form = (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto flex w-full flex-col gap-[50px] ${isMobile ? '' : 'max-w-[552px]'}`}
    >
      <div className="flex w-full flex-col">
        <h1
          className={`font-heading font-medium whitespace-nowrap text-black ${
            isMobile ? 'text-[28px] tracking-[-1.12px]' : 'text-[32px] tracking-[-1.28px]'
          }`}
        >
          Add a new Placement
        </h1>
        <p className="text-[16px] tracking-[-0.48px] text-primary-grey">
          Enter placement details
        </p>
      </div>

      <div className="flex w-full flex-col gap-[24px]">
        <div className="flex w-full flex-col gap-[12px]">
          <TextInput
            label={`Role title (${title.length}/50 characters)`}
            id="placement-title"
            placeholder="Enter your role title"
            value={title}
            maxLength={50}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="placement-description" className="text-[13px] tracking-[-0.39px] text-primary-grey">
              Description
            </label>
            <textarea
              id="placement-description"
              placeholder="Describe your placement here"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="h-[254px] w-full resize-none rounded-control border border-light-ash p-[15px] text-[16px] tracking-[-0.48px] text-black outline-none placeholder:text-primary-grey focus:border-primary-blue"
            />
          </div>
          <SelectField
            label="Eligible discipline(s)"
            id="placement-discipline"
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
            options={DISCIPLINES}
          />
          <div className="flex w-full flex-wrap items-center gap-[4px]">
            {DISCIPLINES.map((item) => (
              <span
                key={item}
                className="rounded-[12px] bg-light-ash px-[12px] py-[5px] text-[13px] tracking-[-0.52px] text-black"
              >
                {item}
              </span>
            ))}
          </div>
          <TextInput
            label="Location"
            id="placement-location"
            placeholder="Surulere, Lagos"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div className="flex w-full items-start gap-[12px]">
            <SelectField
              label="Duration"
              id="placement-duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              options={DURATION_OPTIONS}
            />
            <DateField
              label="Application deadline"
              id="placement-deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
        </div>

        <div className="flex w-full gap-[4px]">
          <Button type="button" variant="secondary" onClick={() => navigate('/organization/home')}>
            Back
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </div>
    </form>
  )

  if (isMobile) {
    return <OrgMobileShell active="home">{form}</OrgMobileShell>
  }
  return <OrgShell active="home">{form}</OrgShell>
}
