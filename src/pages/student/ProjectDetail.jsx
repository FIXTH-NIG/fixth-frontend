import { useNavigate } from 'react-router-dom'
import StudentShell from '../../components/StudentShell'
import MobileShell from '../../components/MobileShell'
import projectImage from '../../assets/images/project-swep.png'
import useIsMobile from '../../lib/useIsMobile'
import { PROJECT_DETAIL } from '../../lib/student'

const DESCRIPTION =
  'We’re looking for a fast, reliable, and skilled computer engineer to join our team and help build, maintain, and improve high-quality digital products.We’re looking for a fast, reliable, and skilled computer engineer to join our team and help build, maintain, and improve high-quality digital products.\n\nWe’re looking for a fast, reliable, and skilled computer engineer to join our team and help build, maintain, and improve high-quality digital products.\n\nWe’re looking for a fast, reliable, and skilled computer engineer to join our team and help build, maintain, and improve high-quality digital products.We’re looking for a fast, reliable, and skilled computer engineer to join our team and help build, maintain, and improve high-quality digital products.'

export default function ProjectDetail() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()

  const content = (
    <div className={`mx-auto flex w-full flex-col gap-[40px] ${isMobile ? '' : 'max-w-[670px]'}`}>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="flex h-[33px] w-[80px] shrink-0 cursor-pointer items-center justify-center rounded-[20px] bg-primary-blue px-[20px] py-[16px] text-[13px] font-medium tracking-[-0.52px] whitespace-nowrap text-off-white"
      >
        Back
      </button>

      <img
        src={projectImage}
        alt={PROJECT_DETAIL.title}
        className="aspect-[670/267] w-full rounded-[20px] object-cover"
      />

      <div className="flex w-full flex-col gap-[24px]">
        <div className="flex w-full flex-col gap-[2px]">
          <h1 className="text-[24px] font-medium tracking-[-0.96px] whitespace-nowrap text-black">
            {PROJECT_DETAIL.title}
          </h1>
          <p className="text-[13px] tracking-[-0.39px] text-primary-grey">
            {PROJECT_DETAIL.shortDescription}
          </p>
        </div>
        <p className="text-[16px] tracking-[-0.48px] whitespace-pre-wrap text-black">
          {DESCRIPTION}
        </p>
      </div>

      <div className="flex w-full flex-col gap-[8px]">
        <p className="text-[16px] tracking-[-0.48px] text-primary-grey">Images</p>
        <div className="flex w-full gap-[4px]">
          {[0, 1, 2].map((index) => (
            <img
              key={index}
              src={projectImage}
              alt={`${PROJECT_DETAIL.title} ${index + 1}`}
              className="aspect-[218/141] min-w-px flex-1 rounded-[20px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  )

  if (isMobile) {
    return <MobileShell active="profile">{content}</MobileShell>
  }
  return <StudentShell active="profile">{content}</StudentShell>
}
