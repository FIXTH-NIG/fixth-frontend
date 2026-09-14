export default function ProgressBar({ step, totalSteps }) {
  return (
    <div className="flex w-full items-start gap-[2px]">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-[4px] flex-1 rounded-[100px] ${index < step ? 'bg-primary-blue' : 'bg-light-ash'}`}
        />
      ))}
    </div>
  )
}
