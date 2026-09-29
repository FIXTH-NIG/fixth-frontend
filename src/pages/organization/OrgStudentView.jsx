import { useNavigate } from 'react-router-dom'
import OrgShell from '../../components/OrgShell'
import OrgMobileShell from '../../components/OrgMobileShell'
import Button from '../../components/Button'
import verifiedIcon from '../../assets/icons/verified-lg.svg'
import verifyShield from '../../assets/icons/verify-shield.svg'
import avatarDesktop from '../../assets/images/avatar-profile.png'
import avatarMobile from '../../assets/images/avatar-mprofile.png'
import projectImage from '../../assets/images/project-swep.png'
import useIsMobile from '../../lib/useIsMobile'
import { STUDENT, PROJECTS } from '../../lib/student'
import { STUDENT_VIEW_SKILLS } from '../../lib/org'

const INFO_ROWS = [
  { label: 'Course:', value: STUDENT.course },
  { label: 'Institution:', value: STUDENT.institution },
  { label: 'Level:', value: STUDENT.level },
  { label: 'Location:', value: STUDENT.location },
  { label: 'Start date:', value: STUDENT.startDate },
  { label: 'Duration:', value: STUDENT.duration },
]

export default function OrgStudentView() {
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

      <div className="flex w-full flex-col gap-[32px]">
        <div className={`flex w-full items-start ${isMobile ? 'gap-[12px]' : 'gap-[20px]'}`}>
          <img
            src={isMobile ? avatarMobile : avatarDesktop}
            alt={STUDENT.name}
            className={`shrink-0 rounded-full object-cover ${isMobile ? 'size-[53px]' : 'size-[120px]'}`}
          />
          <div className={`flex min-w-0 flex-1 flex-col justify-center ${isMobile ? 'gap-[4px]' : 'gap-[20px]'}`}>
            <h1
              className={`font-medium whitespace-nowrap text-black ${
                isMobile ? 'text-[24px] tracking-[-0.96px]' : 'text-[36px] tracking-[-1.44px]'
              }`}
            >
              {STUDENT.name}
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
            <span className="flex w-fit items-center justify-center rounded-[8px] bg-[rgba(15,53,219,0.1)] px-[10px] py-[4px]">
              <span className="text-[10px] font-medium tracking-[-0.4px] whitespace-nowrap text-primary-blue">
                Searching for placement
              </span>
            </span>
            <p
              className={`w-full text-black ${
                isMobile ? 'text-[11px] tracking-[-0.33px]' : 'text-[13px] tracking-[-0.39px]'
              }`}
            >
              {STUDENT.bio}
            </p>
            <div
              className={`flex w-full flex-wrap content-center items-center gap-[4px_12px] whitespace-nowrap ${
                isMobile ? 'text-[11px] tracking-[-0.33px]' : 'text-[13px] tracking-[-0.39px]'
              }`}
            >
              {INFO_ROWS.map((row) => (
                <span key={row.label} className="flex items-start gap-[2px]">
                  <span className="text-primary-grey">{row.label}</span>
                  <span className="text-black">{row.value}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full flex-wrap items-center gap-[4px]">
          {STUDENT_VIEW_SKILLS.map((skill) => (
            <span
              key={skill}
              className={`rounded-[12px] bg-light-ash text-black ${
                isMobile
                  ? 'px-[12px] py-[5px] text-[11px] tracking-[-0.44px]'
                  : 'px-[12px] py-[5px] text-[13px] tracking-[-0.52px]'
              }`}
            >
              {skill}
            </span>
          ))}
        </div>

        <Button>Send an email</Button>
      </div>

      <div className="flex w-full flex-col gap-[12px]">
        <h2
          className={`font-medium text-primary-grey ${
            isMobile ? 'text-[13px] tracking-[-0.52px]' : 'text-[20px] tracking-[-0.8px]'
          }`}
        >
          My projects
        </h2>
        <div className="flex w-full flex-wrap items-start gap-[8px]">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => navigate(`/organization/projects/${project.id}`)}
              className={`flex cursor-pointer flex-col gap-[12px] ${isMobile ? 'w-[169px]' : 'w-[330px]'}`}
            >
              <img
                src={projectImage}
                alt={project.title}
                className="aspect-[330/209] w-full rounded-[20px] object-cover"
              />
              <span className="flex w-full flex-col gap-[4px] text-left">
                <span
                  className={`text-black ${
                    isMobile ? 'text-[13px] tracking-[-0.39px]' : 'text-[16px] tracking-[-0.48px]'
                  }`}
                >
                  {project.title}
                </span>
                <span
                  className={`text-primary-grey ${
                    isMobile ? 'text-[10px] tracking-[-0.3px]' : 'text-[12px] tracking-[-0.36px]'
                  }`}
                >
                  {project.shortDescription}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  if (isMobile) {
    return <OrgMobileShell active="home">{content}</OrgMobileShell>
  }
  return <OrgShell active={null}>{content}</OrgShell>
}
