import { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../../components/OnboardingSplit'
import { BackNextRow, SplitInput } from '../../components/SplitFields'
import buildingIcon from '../../assets/icons/building.svg'
import { useOnboarding } from '../../lib/OnboardingContext'

export default function OrgDetails() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { data, update } = useOnboarding()
  const logoRef = useRef(null)

  const [logo, setLogo] = useState(data.logo ?? null)
  const [orgName, setOrgName] = useState(data.orgName ?? '')
  const [website, setWebsite] = useState(data.website ?? '')
  const [industry, setIndustry] = useState(data.industry ?? '')

  const canSubmit = orgName && website && industry

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    update({ orgName, website, industry, logo })
    navigate(`/${userType}/onboarding/about`)
  }

  return (
    <OnboardingSplit
      panelEyebrow="FOR ORGANIZATIONS"
      headline="Build a credible presence students can trust."
      stepNote="Step 3 of 5 · Takes about 4 minutes"
      section="ORGANIZATION PROFILE"
      step={3}
      totalSteps={5}
      title="Organization details"
      subtitle="Tell students the essentials about your organization."
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <button
            type="button"
            onClick={() => logoRef.current?.click()}
            className="flex cursor-pointer items-center gap-3 rounded-[12px] border border-[#E5EAF1] p-4 lg:w-[220px] lg:flex-col lg:justify-center lg:gap-2 lg:p-6"
          >
            {logo ? (
              <img src={logo} alt="Logo preview" className="size-[48px] rounded-full object-cover lg:size-[64px]" />
            ) : (
              <img src={buildingIcon} alt="" className="size-[40px] lg:size-[48px]" />
            )}
            <span className="text-[14px] font-semibold text-primary-blue">
              {logo ? 'Change logo' : 'Upload logo'}
            </span>
          </button>
          <input
            ref={logoRef}
            type="file"
            accept="image/*"
            onChange={(e) => {
              const selected = e.target.files?.[0]
              if (selected) setLogo(URL.createObjectURL(selected))
            }}
            className="hidden"
          />
          <div className="flex w-full flex-1 flex-col gap-4">
            <SplitInput
              label="Organization name"
              placeholder="Fixth"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              required
            />
            <SplitInput
              label="Website"
              placeholder="fixth.com"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              required
            />
          </div>
        </div>
        <SplitInput
          label="Industry"
          placeholder="Technology"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          required
        />
        <BackNextRow onBack={() => navigate(`/${userType}/onboarding/otp`)} nextDisabled={!canSubmit} />
      </form>
    </OnboardingSplit>
  )
}
