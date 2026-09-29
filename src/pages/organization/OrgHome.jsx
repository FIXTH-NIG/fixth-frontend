import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OrgShell from '../../components/OrgShell'
import OrgMobileShell from '../../components/OrgMobileShell'
import ListingCard from '../../components/ListingCard'
import chevronDown from '../../assets/icons/chevron-down.svg'
import verifiedIcon from '../../assets/icons/verified.svg'
import orgAvatarSm from '../../assets/images/org-avatar-sm.png'
import useIsMobile from '../../lib/useIsMobile'
import { ORG, LISTINGS } from '../../lib/org'

function SortChip({ label, value, onChange, options }) {
  return (
    <span className="flex items-center gap-[5px]">
      <span className="text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-primary-grey">
        {label}
      </span>
      <span className="relative flex items-center">
        <img
          src={chevronDown}
          alt=""
          className="pointer-events-none absolute left-[10px] h-[4px] w-[8px]"
        />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
          className="cursor-pointer appearance-none rounded-[12px] bg-light-ash py-[5px] pr-[10px] pl-[26px] text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-black outline-none"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </span>
    </span>
  )
}

export default function OrgHome() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const [sort, setSort] = useState('Recent')
  const [filter, setFilter] = useState('None')
  const [savedIds, setSavedIds] = useState([])

  const toggleSave = (id) => {
    setSavedIds((prev) => (prev.includes(id) ? prev.filter((saved) => saved !== id) : [...prev, id]))
  }

  const openDetail = () => navigate('/organization/placements/civil-engineering-intern')

  const feed = (
    <div className={`flex w-full min-w-0 flex-col ${isMobile ? 'gap-[12px]' : 'max-w-[670px] gap-[32px]'}`}>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col">
          <h1
            className={`font-heading font-medium whitespace-nowrap text-black ${
              isMobile ? 'text-[28px] tracking-[-1.12px]' : 'text-[32px] tracking-[-1.28px]'
            }`}
          >
            Gooday Fixth.
          </h1>
          <p className="text-[13px] tracking-[-0.39px] text-primary-grey">
            Here are your placement listings
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigate('/organization/placements/new')}
          className={`shrink-0 cursor-pointer rounded-[18px] bg-primary-blue px-[20px] py-[14px] font-medium whitespace-nowrap text-off-white ${
            isMobile ? 'text-[11px] tracking-[-0.44px]' : 'text-[13px] tracking-[-0.52px]'
          }`}
        >
          Add New Placement
        </button>
      </div>

      <div className="flex w-full flex-col gap-[20px]">
        <div className="flex w-full items-center justify-between">
          <h2
            className={`font-heading font-medium whitespace-nowrap text-black ${
              isMobile ? 'text-[11px] tracking-[-0.44px]' : 'text-[16px] tracking-[-0.64px]'
            }`}
          >
            All listings
          </h2>
          <div className="flex items-center gap-[20px]">
            <SortChip label="Sort by" value={sort} onChange={setSort} options={['Recent']} />
            <SortChip label="Filter by" value={filter} onChange={setFilter} options={['None']} />
          </div>
        </div>

        <div className="flex w-full flex-col gap-[8px]">
          {LISTINGS.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              saved={savedIds.includes(listing.id)}
              onToggleSave={listing.bookmark ? () => toggleSave(listing.id) : undefined}
              onOpen={openDetail}
              compact={isMobile}
            />
          ))}
        </div>
      </div>
    </div>
  )

  if (isMobile) {
    return <OrgMobileShell active="home">{feed}</OrgMobileShell>
  }

  return (
    <OrgShell active="home">
      <div className="mx-auto flex w-full max-w-[1005px] flex-wrap justify-center gap-[50px]">
        {feed}

        <div className="flex w-[285px] shrink-0 flex-col gap-[8px]">
          <div className="flex w-full flex-col gap-[16px] rounded-[20px] bg-light-ash p-[16px]">
            <div className="flex items-center gap-[6px]">
              <img src={orgAvatarSm} alt="Fixth" className="size-[40px] shrink-0 rounded-full object-cover" />
              <div className="flex flex-col gap-[2px]">
                <p className="text-[16px] font-medium tracking-[-0.64px] text-black">{ORG.name}</p>
                <span className="flex items-center gap-[2px]">
                  <img src={verifiedIcon} alt="" className="h-[10px] w-[9px]" />
                  <span className="text-[10px] font-medium tracking-[-0.4px] text-primary-blue">
                    {ORG.verified ? 'Verified' : 'Unverified'}
                  </span>
                </span>
              </div>
            </div>
            {!ORG.verified && (
              <button
                type="button"
                className="w-full cursor-pointer rounded-[20px] bg-primary-blue px-[20px] py-[16px] text-[13px] font-medium tracking-[-0.52px] text-off-white"
              >
                Verify account
              </button>
            )}
            <div className="flex w-full items-center justify-between">
              <p className="text-[13px] font-medium tracking-[-0.52px] text-primary-grey">
                Students hired
              </p>
              <p className="text-[12px] tracking-[-0.48px] text-black">{ORG.studentsHired}</p>
            </div>
          </div>
        </div>
      </div>
    </OrgShell>
  )
}
