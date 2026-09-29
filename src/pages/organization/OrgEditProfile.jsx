import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OrgShell from '../../components/OrgShell'
import OrgMobileShell from '../../components/OrgMobileShell'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import SelectField from '../../components/SelectField'
import StudentDocUpload from '../../components/StudentDocUpload'
import avatarEdit from '../../assets/images/avatar-org-edit.png'
import useIsMobile from '../../lib/useIsMobile'

const INDUSTRIES = ['Technology', 'Finance', 'Healthcare', 'Education']

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

export default function OrgEditProfile() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const avatarRef = useRef(null)
  const [avatar, setAvatar] = useState(avatarEdit)
  const [website, setWebsite] = useState('fixth.com')
  const [industry, setIndustry] = useState('Technology')
  const [shortDescription, setShortDescription] = useState(
    'We are a cutting edge organization bridging the gap between SIWES students and Companies looking to hire them.',
  )
  const [country, setCountry] = useState('Nigeria')
  const [city, setCity] = useState('Surulere, Lagos')
  const [zipCode, setZipCode] = useState('100101')
  const [officeAddress, setOfficeAddress] = useState(
    'No 5, Arowojaye street, Off Olarenwaju Junction. Surulere, Lagos.',
  )
  const [cacNumber, setCacNumber] = useState('1234567890')

  const handleAvatar = (selected) => {
    if (selected) setAvatar(URL.createObjectURL(selected))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/organization/profile')
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

      <Section title="Organization details" subtitle="Tell students about your organization">
        <div className="flex w-full flex-col items-center justify-center gap-[4px]">
          <img src={avatar} alt="Organization logo" className="size-[180px] rounded-full object-cover" />
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
        <div className="flex w-full flex-col gap-[12px]">
          <TextInput
            label="Website"
            id="org-website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          <SelectField
            label="Industry"
            id="org-industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            options={INDUSTRIES}
          />
        </div>
      </Section>

      <Section title="About" subtitle="Help students understand who you are">
        <div className="flex w-full flex-col gap-[12px]">
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="org-about" className="text-[13px] tracking-[-0.39px] text-primary-grey">
              Short Description
            </label>
            <textarea
              id="org-about"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              rows={4}
              className="h-[118px] w-full resize-none rounded-control border border-light-ash p-[15px] text-[16px] tracking-[-0.48px] text-black outline-none focus:border-primary-blue"
            />
          </div>
          <TextInput
            label="Country"
            id="org-country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <TextInput
            label="City"
            id="org-city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextInput
            label="Zip Code"
            id="org-zip"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <TextInput
            label="Office address"
            id="org-address"
            value={officeAddress}
            onChange={(e) => setOfficeAddress(e.target.value)}
          />
        </div>
      </Section>

      <Section title="Verification" subtitle="Verify your organization">
        <div className="flex w-full flex-col gap-[12px]">
          <TextInput
            label="CAC Registration Number"
            id="org-cac"
            value={cacNumber}
            onChange={(e) => setCacNumber(e.target.value)}
          />
          <StudentDocUpload
            label="CAC Certificate"
            initialFile={{ name: 'CamScanner-234952.pdf', size: '5mb' }}
          />
        </div>
      </Section>

      <div className="flex w-full gap-[4px]">
        <Button type="button" variant="secondary" onClick={() => navigate('/organization/profile')}>
          Back
        </Button>
        <Button type="submit">Save changes</Button>
      </div>
    </form>
  )

  if (isMobile) {
    return <OrgMobileShell active="profile">{form}</OrgMobileShell>
  }
  return <OrgShell active="profile">{form}</OrgShell>
}
