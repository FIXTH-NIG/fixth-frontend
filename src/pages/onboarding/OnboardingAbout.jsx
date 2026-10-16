import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../../components/OnboardingSplit'
import { BackNextRow, SplitInput } from '../../components/SplitFields'
import { useOnboarding } from '../../lib/OnboardingContext'

export default function OnboardingAbout() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { data, update } = useOnboarding()

  const [description, setDescription] = useState(data.description ?? '')
  const [country, setCountry] = useState(data.country ?? '')
  const [city, setCity] = useState(data.city ?? '')
  const [officeAddress, setOfficeAddress] = useState(data.officeAddress ?? '')

  const canSubmit = description && country && city && officeAddress

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    update({ description, country, city, officeAddress })
    navigate(`/${userType}/onboarding/review`)
  }

  return (
    <OnboardingSplit
      panelEyebrow="FOR ORGANIZATIONS"
      headline="Share what makes your organization a great place to grow."
      stepNote="Step 4 of 5 · Takes about 4 minutes"
      section="ORGANIZATION PROFILE"
      step={4}
      totalSteps={5}
      title="Tell students about you"
      subtitle="Help candidates understand your mission and location."
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <div className="flex w-full flex-col gap-1.5">
          <label htmlFor="org-description" className="text-[14px] font-semibold text-black">
            Short description
          </label>
          <textarea
            id="org-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="We bridge the gap between students and meaningful work experience."
            rows={3}
            className="w-full resize-none rounded-[12px] border border-[#E5EAF1] p-[14px] px-4 text-[15px] text-black outline-none placeholder:text-[#9AA3B2] focus:border-primary-blue"
          />
        </div>
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <SplitInput
            label="Country"
            placeholder="Nigeria"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <SplitInput
            label="City"
            placeholder="Lagos"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <SplitInput
          label="Office address"
          placeholder="5 Arowojaye Street, Surulere, Lagos"
          value={officeAddress}
          onChange={(e) => setOfficeAddress(e.target.value)}
          required
        />
        <BackNextRow onBack={() => navigate(`/${userType}/onboarding/details`)} nextDisabled={!canSubmit} />
      </form>
    </OnboardingSplit>
  )
}
