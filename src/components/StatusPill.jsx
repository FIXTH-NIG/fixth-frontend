const STYLES = {
  Submitted: { box: 'bg-light-ash w-[68px]', text: 'text-primary-grey' },
  Viewed: { box: 'bg-[rgba(15,53,219,0.1)]', text: 'text-primary-blue' },
  Shortlisted: { box: 'bg-[rgba(242,234,31,0.1)] w-[68px]', text: 'text-[#b2ae3a]' },
  Rejected: { box: 'bg-[rgba(227,54,41,0.1)]', text: 'text-error-red' },
  Accepted: { box: 'bg-[rgba(39,149,67,0.1)]', text: 'text-success-green' },
}

export default function StatusPill({ status }) {
  const style = STYLES[status] ?? STYLES.Submitted
  return (
    <div
      className={`flex items-center justify-center rounded-[8px] px-[10px] py-[4px] ${style.box}`}
    >
      <p className={`text-[10px] font-medium tracking-[-0.4px] whitespace-nowrap ${style.text}`}>
        {status}
      </p>
    </div>
  )
}
