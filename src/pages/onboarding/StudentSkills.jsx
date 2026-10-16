import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OnboardingSplit from '../../components/OnboardingSplit'
import { BackNextRow, NoteRow, SplitInput } from '../../components/SplitFields'
import checkIcon from '../../assets/icons/check.svg'
import searchIcon from '../../assets/icons/search.svg'
import sparklesIcon from '../../assets/icons/sparkles.svg'
import { useOnboarding } from '../../lib/OnboardingContext'
import { SKILL_OPTIONS } from '../../lib/copy'

const EXTRA_SKILLS = ['AutoCAD', 'Data analysis', 'Teamwork', 'Site inspection']
const ALL_SKILLS = [...new Set([...SKILL_OPTIONS, ...EXTRA_SKILLS])]
const PRESELECTED = ['Civil Engineering', 'Quality control', 'AutoCAD', 'Data analysis', 'Teamwork', 'Site inspection']

export default function StudentSkills() {
  const { userType } = useParams()
  const navigate = useNavigate()
  const { data, update } = useOnboarding()

  const [skills, setSkills] = useState(data.skills ?? PRESELECTED)
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () => ALL_SKILLS.filter((skill) => skill.toLowerCase().includes(query.toLowerCase())),
    [query],
  )

  const toggle = (skill) => {
    setSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (skills.length === 0) return
    update({ skills })
    navigate(`/${userType}/onboarding/review`)
  }

  return (
    <OnboardingSplit
      panelEyebrow="BUILD YOUR CAREER PROFILE"
      headline="Your next opportunity starts with a profile that feels like you."
      stepNote="Step 6 of 7 · Takes about 3 minutes"
      section="STUDENT PROFILE"
      step={6}
      totalSteps={7}
      title="Showcase your skills"
      subtitle="Select strengths that best represent your experience."
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <SplitInput
          label="Search skills"
          icon={searchIcon}
          placeholder="Search by skill or discipline"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="flex w-full flex-col gap-2.5">
          <p className="text-[15px] font-semibold text-black">Selected skills · {skills.length}</p>
          <div className="flex flex-wrap gap-2.5">
            {filtered.map((skill) => {
              const selected = skills.includes(skill)
              return (
                <button
                  key={skill}
                  type="button"
                  onClick={() => toggle(skill)}
                  aria-pressed={selected}
                  className={`flex cursor-pointer items-center gap-1.5 rounded-full border px-4 py-2 text-[14px] font-medium ${
                    selected
                      ? 'border-primary-blue bg-[rgba(15,53,219,0.07)] text-primary-blue'
                      : 'border-[#E2E8F0] text-black'
                  }`}
                >
                  {selected && <img src={checkIcon} alt="" className="size-[16px]" />}
                  {skill}
                </button>
              )
            })}
          </div>
        </div>
        <NoteRow icon={sparklesIcon}>Tip: add 5–10 focused skills to improve your matches.</NoteRow>
        <BackNextRow onBack={() => navigate(`/${userType}/onboarding/preferences`)} nextDisabled={skills.length === 0} />
      </form>
    </OnboardingSplit>
  )
}
