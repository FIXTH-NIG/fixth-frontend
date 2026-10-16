import { useNavigate } from 'react-router-dom'
import logoBlue from '../assets/icons/logo.svg'
import logoWhite from '../assets/logo-white.svg'
import signInIcon from '../assets/icons/sign-in.svg'

function PanelArt({ eyebrow, headline, stepNote }) {
  return (
    <div className="relative flex min-h-full flex-col justify-between overflow-hidden rounded-[24px] bg-[linear-gradient(140deg,#4A90FF_0%,#0F35DB_55%,#0A1FA8_100%)] p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 size-[320px] rounded-full border-[28px] border-white/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 -bottom-28 size-[340px] rounded-full bg-[#0A24C0]/70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-16 size-[180px] rounded-full bg-white/10 blur-2xl"
      />
      <img src={logoWhite} alt="fixth" className="relative h-[40px] w-[96px]" />
      <div className="relative flex flex-col gap-4">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-white/80">{eyebrow}</p>
        <h2 className="max-w-[420px] font-heading text-[40px] leading-[1.12] font-medium text-white">
          {headline}
        </h2>
        <p className="text-[13px] text-white/75">{stepNote}</p>
      </div>
    </div>
  )
}

function StepPills({ step, totalSteps }) {
  return (
    <div className="flex items-center gap-[6px]">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-[5px] flex-1 rounded-full ${index < step ? 'bg-primary-blue' : 'bg-[#E2E8F0]'}`}
        />
      ))}
    </div>
  )
}

function CardHead({ section, step, totalSteps, showProgress = true, title, subtitle, showSignIn, signInTo }) {
  const navigate = useNavigate()
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="flex w-full items-center justify-between">
        <img src={logoBlue} alt="fixth" className="h-[36px] w-[86px]" />
        {showSignIn && (
          <button
            type="button"
            onClick={() => navigate(signInTo)}
            className="flex cursor-pointer items-center gap-2 rounded-full border border-[#E2E8F0] px-5 py-2.5 text-[14px] font-medium text-primary-blue"
          >
            <img src={signInIcon} alt="" className="size-[18px]" />
            Sign in
          </button>
        )}
      </div>
      {section && (
        <div className="flex w-full flex-col gap-3">
          <div className="flex w-full items-center justify-between">
            <p className="text-[12px] font-bold tracking-[0.1em] text-primary-blue">{section}</p>
            {showProgress && (
              <p className="text-[13px] text-primary-grey">
                Step {step} of {totalSteps}
              </p>
            )}
          </div>
          {showProgress && <StepPills step={step} totalSteps={totalSteps} />}
        </div>
      )}
      <div className="flex w-full flex-col gap-2">
        <h1 className="font-heading text-[36px] leading-[1.15] font-semibold text-black">{title}</h1>
        {subtitle && <p className="text-[15px] leading-relaxed text-primary-grey">{subtitle}</p>}
      </div>
    </div>
  )
}

function CardFoot() {
  return <p className="text-[12px] text-primary-grey">© 2026 Fixth. All rights reserved.</p>
}

export default function OnboardingSplit({
  panelEyebrow,
  headline,
  stepNote,
  section,
  step,
  totalSteps,
  showProgress = true,
  title,
  subtitle,
  showSignIn = false,
  signInTo = '/student/login',
  children,
}) {
  return (
    <div className="min-h-screen w-full bg-[#EAEEF6] lg:flex lg:items-center lg:justify-center lg:p-6">
      {/* Desktop split */}
      <div className="hidden w-full max-w-[1380px] grid-cols-[41%_59%] gap-3 rounded-[32px] bg-white p-3 lg:grid">
        <PanelArt eyebrow={panelEyebrow} headline={headline} stepNote={stepNote} />
        <div className="flex min-h-[86vh] flex-col gap-8 px-12 py-10">
          <CardHead
            section={section}
            step={step}
            totalSteps={totalSteps}
            showProgress={showProgress}
            title={title}
            subtitle={subtitle}
            showSignIn={showSignIn}
            signInTo={signInTo}
          />
          <div className="flex w-full flex-1 flex-col">{children}</div>
          <CardFoot />
        </div>
      </div>

      {/* Mobile stacked */}
      <div className="flex min-h-screen w-full flex-col bg-[linear-gradient(160deg,#4A90FF_0%,#0F35DB_60%,#0A1FA8_100%)] lg:hidden">
        <div className="relative overflow-hidden px-5 pt-6 pb-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 size-[240px] rounded-full bg-[#0A24C0]/60"
          />
          <img src={logoWhite} alt="fixth" className="relative h-[32px] w-[76px]" />
        </div>
        <div className="-mt-8 flex flex-1 flex-col gap-6 rounded-t-[32px] bg-white px-5 pt-6 pb-8">
          <div className="flex w-full flex-col gap-5">
            <div className="flex w-full items-center justify-between">
              <img src={logoBlue} alt="fixth" className="h-[30px] w-[72px]" />
              {showSignIn && (
                <MobileSignIn signInTo={signInTo} />
              )}
            </div>
            {section && (
              <div className="flex w-full flex-col gap-3">
                <div className="flex w-full items-center justify-between">
                  <p className="text-[12px] font-bold tracking-[0.1em] text-primary-blue">{section}</p>
                  {showProgress && (
                    <p className="text-[13px] text-primary-grey">
                      Step {step} of {totalSteps}
                    </p>
                  )}
                </div>
                {showProgress && <StepPills step={step} totalSteps={totalSteps} />}
              </div>
            )}
            <div className="flex w-full flex-col gap-2">
              <h1 className="font-heading text-[28px] leading-[1.2] font-semibold text-black">
                {title}
              </h1>
              {subtitle && (
                <p className="text-[14px] leading-relaxed text-primary-grey">{subtitle}</p>
              )}
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col">{children}</div>
          <CardFoot />
        </div>
      </div>
    </div>
  )
}

function MobileSignIn({ signInTo }) {
  const navigate = useNavigate()
  return (
    <button
      type="button"
      onClick={() => navigate(signInTo)}
      className="flex cursor-pointer items-center gap-2 rounded-full border border-[#E2E8F0] px-5 py-2 text-[14px] font-medium text-primary-blue"
    >
      <img src={signInIcon} alt="" className="size-[18px]" />
      Sign in
    </button>
  )
}
