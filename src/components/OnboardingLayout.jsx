import AuthLayout from './AuthLayout'
import Button from './Button'
import ProgressBar from './ProgressBar'

export default function OnboardingLayout({
  title,
  subtitle,
  step,
  totalSteps,
  onBack,
  onSubmit,
  nextLabel = 'Next',
  nextDisabled = false,
  children,
}) {
  return (
    <AuthLayout tall>
      <form
        onSubmit={onSubmit}
        className="flex w-full flex-1 flex-col justify-between gap-[50px]"
      >
        <div className="flex w-full flex-col gap-5">
          <div className="flex w-full flex-col items-start">
            <h1 className="font-heading text-[32px] font-medium tracking-[-1.28px] text-black">{title}</h1>
            <p className="text-[16px] tracking-[-0.48px] text-primary-grey">{subtitle}</p>
          </div>
          <ProgressBar step={step} totalSteps={totalSteps} />
        </div>

        <div className="flex w-full flex-1 flex-col justify-between gap-8">
          <div className="flex w-full flex-col gap-3">{children}</div>

          <div className="flex w-full gap-1">
            <Button type="button" variant="secondary" onClick={onBack}>
              Back
            </Button>
            <Button type="submit" disabled={nextDisabled}>
              {nextLabel}
            </Button>
          </div>
        </div>
      </form>
    </AuthLayout>
  )
}
