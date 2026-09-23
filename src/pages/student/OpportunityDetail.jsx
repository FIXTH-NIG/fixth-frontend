import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StudentShell from '../../components/StudentShell'
import MobileShell from '../../components/MobileShell'
import Button from '../../components/Button'
import useIsMobile from '../../lib/useIsMobile'
import { OPPORTUNITY_DETAIL } from '../../lib/student'

const META = [
  { label: 'Application Deadline', value: OPPORTUNITY_DETAIL.deadline },
  { label: 'Applications submitted', value: OPPORTUNITY_DETAIL.submitted },
  { label: 'Duration', value: OPPORTUNITY_DETAIL.duration },
  { label: 'Location', value: OPPORTUNITY_DETAIL.location },
]

export default function OpportunityDetail() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const [saved, setSaved] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://fixth.com/applications/civil-engineering-intern')
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  const main = (
    <div className={`flex w-full min-w-0 flex-col gap-[20px] ${isMobile ? '' : 'max-w-[670px]'}`}>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="flex h-[33px] w-[80px] shrink-0 cursor-pointer items-center justify-center rounded-[20px] bg-primary-blue px-[20px] py-[16px] text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-off-white"
      >
        Back
      </button>

      <h1
        className={`font-heading font-medium whitespace-nowrap text-black ${
          isMobile ? 'text-[24px] tracking-[-0.96px]' : 'text-[32px] tracking-[-1.28px]'
        }`}
      >
        {OPPORTUNITY_DETAIL.title}
      </h1>
      <div className="flex w-full flex-col gap-[6px]">
        <p
          className={`tracking-[-0.8px] whitespace-nowrap text-primary-blue ${
            isMobile ? 'text-[16px] tracking-[-0.64px]' : 'text-[20px]'
          }`}
        >
          {OPPORTUNITY_DETAIL.company}
        </p>
        <p className="text-[13px] tracking-[-0.39px] text-primary-grey">
          {OPPORTUNITY_DETAIL.postedOn}
        </p>
      </div>

      <div className="w-full rounded-[20px] border border-light-ash p-[20px]">
        <p className="text-[16px] tracking-[-0.48px] whitespace-pre-wrap text-black">
          We’re looking for a fast, reliable, and skilled computer engineer to join our team and
          help build, maintain, and improve high-quality digital products.We’re looking for a
          fast, reliable, and skilled computer engineer to join our team and help build,
          maintain, and improve high-quality digital products.
          {'\n\n'}
          We’re looking for a fast, reliable, and skilled computer engineer to join our team and
          help build, maintain, and improve high-quality digital products.
          {'\n\n'}
          We’re looking for a fast, reliable, and skilled computer engineer to join our team and
          help build, maintain, and improve high-quality digital products.We’re looking for a
          fast, reliable, and skilled computer engineer to join our team and help build,
          maintain, and improve high-quality digital products.
        </p>
      </div>

      <div className="flex w-full flex-wrap items-start gap-[4px]">
        {META.map((item) => (
          <div
            key={item.label}
            className={`flex flex-col items-start justify-between rounded-[20px] bg-light-ash p-[12px] ${
              isMobile ? 'h-[77px] min-w-[calc(50%-2px)] flex-1' : 'h-[91px] w-[331px] shrink-0'
            }`}
          >
            <p
              className={`font-medium text-primary-grey ${
                isMobile ? 'text-[11px] tracking-[-0.33px]' : 'text-[13px] tracking-[-0.39px]'
              }`}
            >
              {item.label}
            </p>
            <p
              className={`whitespace-nowrap text-black ${
                isMobile ? 'text-[16px] tracking-[-0.64px]' : 'text-[20px] tracking-[-0.8px]'
              }`}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )

  const side = (
    <>
      <div className="flex w-full flex-col gap-[8px]">
        <Button onClick={() => navigate('/student/apply')}>Apply with profile</Button>
        <Button variant="secondary" onClick={() => setSaved((value) => !value)}>
          {saved ? 'Saved' : 'Save Internship'}
        </Button>
      </div>
      <div className="flex w-full flex-col gap-[12px]">
        <p className="w-full text-[13px] font-medium tracking-[-0.39px] text-black">
          Application link
        </p>
        <div className="flex w-full flex-col gap-[8px]">
          <div className="w-full overflow-hidden rounded-[100px] bg-light-ash px-[20px] py-[12px]">
            <p className="truncate text-[16px] font-medium tracking-[-0.64px] whitespace-nowrap text-primary-grey">
              {OPPORTUNITY_DETAIL.link}
            </p>
          </div>
          <button
            type="button"
            onClick={copyLink}
            className="cursor-pointer text-[16px] font-medium tracking-[-0.48px] text-primary-blue"
          >
            {copied ? 'Copied!' : 'Copy link'}
          </button>
        </div>
      </div>
    </>
  )

  if (isMobile) {
    return (
      <MobileShell active="profile">
        {main}
        <div className="mt-[20px] flex w-full flex-col gap-[40px]">{side}</div>
      </MobileShell>
    )
  }

  return (
    <StudentShell active="home">
      <div className="mx-auto flex w-full max-w-[1005px] flex-wrap justify-center gap-[50px]">
        {main}
        <div className="flex w-[285px] shrink-0 flex-col gap-[40px]">{side}</div>
      </div>
    </StudentShell>
  )
}
