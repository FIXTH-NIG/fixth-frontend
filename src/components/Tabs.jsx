export default function Tabs({ userType, onChange }) {
  const tabs = [
    { value: 'student', label: 'Student' },
    { value: 'organization', label: 'Organization' },
  ]

  return (
    <div className="flex h-[60px] w-full gap-1 rounded-control bg-light-ash p-1">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => onChange(tab.value)}
          className={`flex flex-1 items-center justify-center rounded-pill p-4 text-[16px] font-medium tracking-[-0.64px] text-black transition-colors ${
            userType === tab.value ? 'bg-off-white' : ''
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
