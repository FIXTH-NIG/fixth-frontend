import { useNavigate } from 'react-router-dom'
import OrgShell from '../../components/OrgShell'
import OrgMobileShell from '../../components/OrgMobileShell'
import ListingCard from '../../components/ListingCard'
import EmptyState from '../../components/EmptyState'
import Button from '../../components/Button'
import chevronDown from '../../assets/icons/chevron-down.svg'
import verifiedIcon from '../../assets/icons/verified-lg.svg'
import verifyShield from '../../assets/icons/verify-shield.svg'
import briefcaseOff from '../../assets/icons/briefcase-off.svg'
import orgAvatarLg from '../../assets/images/org-avatar-lg.png'
import orgAvatarMobile from '../../assets/images/avatar-org-mprofile.png'
import useIsMobile from '../../lib/useIsMobile'
import { ORG, LISTINGS } from '../../lib/org'

const INFO_ROWS = [
  { label: 'Website:', value: ORG.website, highlight: true },
  { label: 'Industry:', value: ORG.industry, highlight: false },
  { label: 'Office address:', value: ORG.officeAddress, highlight: false },
]

export default function OrgProfile() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()

  const header = (
    <div className="flex w-full flex-col gap-[32px]">
      <div className={`flex w-full items-start ${isMobile ? 'gap-[12px]' : 'gap-[20px]'}`}>
        <img
          src={isMobile ? orgAvatarMobile : orgAvatarLg}
          alt={ORG.name}
          className={`shrink-0 rounded-full object-cover ${isMobile ? 'size-[49px]' : 'size-[120px]'}`}
        />
        <div className={`flex min-w-0 flex-1 flex-col justify-center ${isMobile ? 'gap-[4px]' : 'gap-[20px]'}`}>
          <h1
            className={`font-medium whitespace-nowrap text-black ${
              isMobile ? 'text-[24px] tracking-[-0.96px]' : 'text-[36px] tracking-[-1.44px]'
            }`}
          >
            {ORG.name.toLowerCase()}
          </h1>
          <span className="flex items-center gap-[4px]">
            <img
              src={isMobile ? verifyShield : verifiedIcon}
              alt=""
              className={isMobile ? 'h-[12px] w-[10px]' : 'h-[14px] w-[12px]'}
            />
            <span
              className={`font-medium whitespace-nowrap text-primary-blue ${
                isMobile ? 'text-[13px] tracking-[-0.52px]' : 'text-[16px] tracking-[-0.64px]'
              }`}
            >
              Verified
            </span>
          </span>
          <p
            className={`w-full text-black ${
              isMobile ? 'text-[11px] tracking-[-0.33px]' : 'text-[13px] tracking-[-0.39px]'
            }`}
          >
            {ORG.bio}
          </p>
          <div
            className={`flex w-full flex-wrap content-center items-center gap-[4px_12px] whitespace-nowrap ${
              isMobile ? 'text-[11px] tracking-[-0.33px]' : 'text-[13px] tracking-[-0.39px]'
            }`}
          >
            {INFO_ROWS.map((row) => (
              <span key={row.label} className="flex items-start gap-[2px]">
                <span className="text-primary-grey">{row.label}</span>
                <span className={row.highlight ? 'text-primary-blue' : 'text-black'}>
                  {row.value}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <Button onClick={() => navigate('/organization/profile/edit')}>Edit Profile</Button>
    </div>
  )

  const listings = (
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
          <span className="flex items-center gap-[5px]">
            <span className="text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-primary-grey">
              Sort by
            </span>
            <span className="relative flex items-center">
              <img
                src={chevronDown}
                alt=""
                className="pointer-events-none absolute left-[10px] h-[4px] w-[8px]"
              />
              <span className="rounded-[12px] bg-light-ash py-[5px] pr-[10px] pl-[26px] text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-black">
                Recent
              </span>
            </span>
          </span>
          <span className="flex items-center gap-[5px]">
            <span className="text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-primary-grey">
              Filter by
            </span>
            <span className="relative flex items-center">
              <img
                src={chevronDown}
                alt=""
                className="pointer-events-none absolute left-[10px] h-[4px] w-[8px]"
              />
              <span className="rounded-[12px] bg-light-ash py-[5px] pr-[10px] pl-[26px] text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-black">
                None
              </span>
            </span>
          </span>
        </div>
      </div>

      <div className="flex w-full flex-col gap-[8px]">
        {LISTINGS.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onOpen={() => navigate('/organization/placements/civil-engineering-intern')}
            compact={isMobile}
          />
        ))}
      </div>
    </div>
  )

  const mobileEmpty = (
    <div className="flex w-full flex-col items-center justify-center py-10">
      <EmptyState
        icon={briefcaseOff}
        title="No Listings"
        subtitle="You haven’t added any placement yet."
        actionLabel="Add a new placement"
        onAction={() => navigate('/organization/placements/new')}
        compact
      />
    </div>
  )

  const content = (
    <div className={`mx-auto flex w-full flex-col gap-[40px] ${isMobile ? '' : 'max-w-[670px]'}`}>
      {header}
      {isMobile ? mobileEmpty : listings}
    </div>
  )

  if (isMobile) {
    return <OrgMobileShell active="profile">{content}</OrgMobileShell>
  }
  return <OrgShell active="profile">{content}</OrgShell>
}
