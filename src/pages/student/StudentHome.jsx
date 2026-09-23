import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StudentShell from '../../components/StudentShell'
import MobileShell from '../../components/MobileShell'
import OpportunityCard from '../../components/OpportunityCard'
import searchIcon from '../../assets/icons/search.svg'
import chevronDown from '../../assets/icons/chevron-down.svg'
import verifiedIcon from '../../assets/icons/verified.svg'
import bookmarkSaved from '../../assets/icons/bookmark-saved.svg'
import avatarCard from '../../assets/images/avatar-card.png'
import useIsMobile from '../../lib/useIsMobile'
import { OPPORTUNITIES } from '../../lib/student'

export default function StudentHome() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [savedIds, setSavedIds] = useState([1])

  const toggleSave = (id) => {
    setSavedIds((prev) => (prev.includes(id) ? prev.filter((saved) => saved !== id) : [...prev, id]))
  }

  const visible = OPPORTUNITIES.filter((opportunity) => {
    const matchesCategory = activeCategory === 'All' || opportunity.category === activeCategory
    const q = query.trim().toLowerCase()
    const matchesQuery =
      q.length === 0 ||
      opportunity.title.toLowerCase().includes(q) ||
      opportunity.company.toLowerCase().includes(q) ||
      opportunity.location.toLowerCase().includes(q)
    return matchesCategory && matchesQuery
  })

  const openDetail = () => navigate('/student/opportunities/civil-engineering-intern')

  const feed = (
    <div className={`flex w-full min-w-0 flex-col gap-[20px] ${isMobile ? '' : 'max-w-[670px]'}`}>
      <div className="flex w-full items-center justify-between rounded-[100px] bg-light-ash px-[20px] py-[12px]">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for courses, organizations or locations"
          className="w-full bg-transparent text-[13px] font-medium tracking-[-0.52px] text-black outline-none placeholder:text-primary-grey"
        />
        <img src={searchIcon} alt="" className="h-[12px] w-[12px] shrink-0" />
      </div>

      <div className="flex w-full flex-wrap items-center gap-[4px]">
        {['All', 'Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Mechatronics Engineering', 'Computer Engineering'].map(
          (category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-[12px] px-[10px] py-[5px] text-[11px] font-medium tracking-[-0.44px] ${
                activeCategory === category ? 'bg-primary-blue text-off-white' : 'bg-light-ash text-black'
              }`}
            >
              {category}
            </button>
          ),
        )}
      </div>

      <section className="flex w-full flex-col gap-[20px]">
        <div className="flex w-full items-center justify-between">
          <h2
            className={`font-heading font-medium whitespace-nowrap text-black ${
              isMobile ? 'text-[11px] tracking-[-0.44px]' : 'text-[16px] tracking-[-0.64px]'
            }`}
          >
            All Opportunities
          </h2>
          <div className="flex items-center gap-[5px]">
            <span
              className={`font-medium tracking-[-0.44px] whitespace-nowrap text-primary-grey ${
                isMobile ? 'text-[11px]' : 'text-[13px] tracking-[-0.52px]'
              }`}
            >
              Location
            </span>
            <button
              type="button"
              className="flex items-center gap-[10px] rounded-[12px] bg-light-ash px-[10px] py-[5px]"
            >
              <img src={chevronDown} alt="" className="h-[4px] w-[8px]" />
              <span
                className={`font-medium whitespace-nowrap text-black ${
                  isMobile ? 'text-[11px] tracking-[-0.44px]' : 'text-[13px] tracking-[-0.52px]'
                }`}
              >
                All
              </span>
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col gap-[8px]">
          {visible.map((opportunity) => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
              saved={savedIds.includes(opportunity.id)}
              onToggleSave={() => toggleSave(opportunity.id)}
              onOpen={openDetail}
              compact={isMobile}
            />
          ))}
          {visible.length === 0 && (
            <p className="w-full py-8 text-center text-[13px] tracking-[-0.39px] text-primary-grey">
              No opportunities match your search.
            </p>
          )}
        </div>
      </section>
    </div>
  )

  if (isMobile) {
    return <MobileShell active="home">{feed}</MobileShell>
  }

  return (
    <StudentShell active="home">
      <div className="mx-auto flex w-full max-w-[1005px] flex-wrap justify-center gap-[50px]">
        {feed}

        <div className="flex w-[285px] shrink-0 flex-col gap-[8px]">
          <div className="flex w-full flex-col gap-[16px] rounded-[20px] bg-light-ash p-[16px]">
            <div className="flex items-center gap-[6px]">
              <img src={avatarCard} alt="John Doe" className="size-[40px] shrink-0 rounded-full object-cover" />
              <div className="flex flex-col gap-[2px]">
                <p className="text-[16px] font-medium tracking-[-0.64px] text-black">John Doe</p>
                <span className="flex items-center gap-[2px]">
                  <img src={verifiedIcon} alt="" className="h-[10px] w-[9px]" />
                  <span className="text-[10px] font-medium tracking-[-0.4px] text-primary-blue">
                    Verified
                  </span>
                </span>
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-[13px] font-medium tracking-[-0.52px] text-primary-grey">
                Applications submitted
              </p>
              <p className="text-[12px] tracking-[-0.48px] text-black">20</p>
            </div>
          </div>

          <div className="flex w-full items-center gap-[4px] rounded-[20px] bg-light-ash px-[20px] py-[16px]">
            <img src={bookmarkSaved} alt="" className="size-[18px] shrink-0" />
            <p className="text-[13px] font-medium tracking-[-0.52px] text-black">Saved Internships</p>
          </div>
        </div>
      </div>
    </StudentShell>
  )
}
