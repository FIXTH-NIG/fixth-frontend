import styled from 'styled-components'
import leftArrowIcon from '../../../../assets/Icons/leftArrowIcon.svg'

const VerifiedIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.20866 3.03367C1.21924 3.56912 0.927872 4.29293 0.549017 4.67107C0.197469 5.02294 0 5.49997 0 5.99735C0 6.49474 0.197469 6.97177 0.549017 7.32364C0.922933 7.69613 1.19808 8.34234 1.20866 8.87004C1.21854 9.33706 1.40126 9.80126 1.75754 10.1568C2.08625 10.4862 2.52597 10.6811 2.99076 10.7036C3.54881 10.7318 4.27972 11.0563 4.6748 11.4514C5.02665 11.8027 5.50356 12 6.00079 12C6.49802 12 6.97493 11.8027 7.32678 11.4514C7.72186 11.0563 8.45276 10.7318 9.01082 10.7036C9.47561 10.6811 9.91533 10.4862 10.244 10.1568C10.5867 9.81462 10.7832 9.35281 10.7922 8.86863C10.8028 8.34234 11.0744 7.70036 11.4476 7.32787C11.8005 6.97612 11.9992 6.49859 12 6.00035C12.0008 5.5021 11.8036 5.02395 11.4519 4.67107C11.0737 4.29364 10.7816 3.56912 10.7929 3.03437C10.7982 2.78189 10.7523 2.53096 10.658 2.2967C10.5637 2.06245 10.4228 1.84974 10.244 1.6714C10.0587 1.48561 9.83637 1.3409 9.59144 1.24671C9.34652 1.15251 9.08451 1.11092 8.82245 1.12466C8.31872 1.15006 7.68306 0.905962 7.32678 0.548993C6.9749 0.197461 6.49784 0 6.00044 0C5.50303 0 5.02598 0.197461 4.67409 0.548993C4.31852 0.905257 3.68215 1.15006 3.17843 1.12466C2.91648 1.11102 2.65461 1.15266 2.40981 1.24685C2.16501 1.34105 1.94278 1.4857 1.75754 1.6714C1.57882 1.84965 1.43805 2.06225 1.34372 2.29638C1.24939 2.5305 1.20344 2.78131 1.20866 3.03367ZM8.14234 3.61639C8.22338 3.66135 8.29476 3.72184 8.35241 3.79439C8.41007 3.86695 8.45286 3.95015 8.47834 4.03925C8.50383 4.12835 8.51151 4.2216 8.50095 4.31366C8.49039 4.40573 8.46179 4.49482 8.41678 4.57583L6.46395 8.09049C6.41337 8.18621 6.34143 8.26901 6.25371 8.33247C6.12624 8.42469 5.9716 8.47166 5.81437 8.46591C5.65713 8.46016 5.50634 8.40201 5.38594 8.30072L3.43946 6.74374C3.3671 6.68584 3.30686 6.61425 3.26217 6.53307C3.21748 6.45189 3.18922 6.3627 3.179 6.27059C3.16878 6.17848 3.1768 6.08527 3.20261 5.99626C3.22841 5.90726 3.2715 5.8242 3.3294 5.75185C3.38731 5.67949 3.4589 5.61925 3.54009 5.57456C3.62127 5.52988 3.71047 5.50161 3.80258 5.49139C3.89469 5.48118 3.98791 5.4892 4.07692 5.515C4.16593 5.54081 4.24898 5.58389 4.32134 5.6418L5.62864 6.68801L7.18286 3.89011C7.22788 3.80914 7.28842 3.73782 7.361 3.68024C7.43359 3.62267 7.51681 3.57995 7.60591 3.55453C7.695 3.52911 7.78823 3.52149 7.88028 3.53211C7.97232 3.54272 8.06137 3.57136 8.14234 3.61639Z"
      fill="#4B6FBB"
    />
  </svg>
)

const DotSeparator = ({ dark = false }) => (
  <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="1" cy="1" r="1" fill={dark ? '#1F1F1F' : '#7F7F7F'} />
  </svg>
)

const BookmarkIcon = () => (
  <svg width="60" height="32" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="32" rx="16" fill="white" />
    <path
      d="M35 23L30 19.1111L25 23V10.5556C25 10.143 25.1505 9.74733 25.4184 9.45561C25.6863 9.16389 26.0497 9 26.4286 9H33.5714C33.9503 9 34.3137 9.16389 34.5816 9.45561C34.8495 9.74733 35 10.143 35 10.5556V23Z"
      stroke="#1F1F1F"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function JobsDescription({ job, isMobile = false, onBack }) {
  if (!job) {
    return null
  }

  return (
    <DetailCard $mobile={isMobile}>
      {isMobile ? (
        <MobileHeader>
          <button type="button" onClick={onBack} aria-label="go back to jobs list">
            <img src={leftArrowIcon} alt="go back" />
          </button>
          <span>Jobs</span>
        </MobileHeader>
      ) : null}

      <CompanyHeader>
        <CompanyLogo />
        <CompanyNameRow>
          <CompanyName>{job.companyName}</CompanyName>
          <VerifiedIcon />
        </CompanyNameRow>
      </CompanyHeader>

      <JobInfo>
        <JobTitle>{job.title}</JobTitle>
        <MetaRow>
          <MetaText>{job.location}</MetaText>
          <DotSeparator />
          <MetaText>{job.postedAt}</MetaText>
          <DotSeparator />
          <MetaText>{job.employmentType}</MetaText>
        </MetaRow>
        <SalaryText>{job.salary}</SalaryText>
      </JobInfo>

      <ActionButtons>
        <ApplyButton>Apply</ApplyButton>
        <BookmarkButton aria-label="bookmark job">
          <BookmarkIcon />
        </BookmarkButton>
      </ActionButtons>

      <Divider />

      <Section>
        <SectionTitle>Job description</SectionTitle>
        <SectionBody>{job.jobDescription}</SectionBody>
        <SectionBody className="subhead">Key Responsibilities</SectionBody>
        <List>
          {job.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>Application deadline</SectionTitle>
        <SectionBody>{job.applicationDeadline}</SectionBody>
      </Section>

      <Divider />

      <StatsRow>
        <StatText>{job.appliedCount}</StatText>
        <DotSeparator dark />
        <StatText>{job.responseTime}</StatText>
      </StatsRow>

      <Divider />

      <Section>
        <SectionTitle>About the company</SectionTitle>
        <CompanyDetailRow>
          <CompanyLogoLarge />
          <CompanyDetailInfo>
            <CompanyDetailName>
              <CompanyName>{job.companyName}</CompanyName>
              <VerifiedIcon />
            </CompanyDetailName>
            <MetaText>{job.companyLocation}</MetaText>
          </CompanyDetailInfo>
        </CompanyDetailRow>
        <MetaRow>
          <MetaText>{job.companyType}</MetaText>
          <DotSeparator />
          <MetaText>{job.employeeRange}</MetaText>
        </MetaRow>
        <SectionBody>{job.companySummary}</SectionBody>
      </Section>

      {isMobile ? (
        <BottomAction>
          <ApplyButton>Apply</ApplyButton>
          <BookmarkButton aria-label="bookmark job">
            <BookmarkIcon />
          </BookmarkButton>
        </BottomAction>
      ) : null}
    </DetailCard>
  )
}

const DetailCard = styled.div`
  width: ${({ $mobile }) => ($mobile ? '100%' : '377px')};
  border-radius: ${({ $mobile }) => ($mobile ? '0' : '12px')};
  border: 1px solid var(--light-ash);
  background: var(--background-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ $mobile }) => ($mobile ? '70px' : '0')};
`

const MobileHeader = styled.header`
  height: 44px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 10px;
  border-bottom: 1px solid var(--light-ash);
  button{
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--white);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  span{
    font-size: 20px;
    color: var(--black);
  }
`

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 12px 0;
`

const CompanyLogo = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: #d9d9d9;
`

const CompanyNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const CompanyName = styled.span`
  color: var(--black);
  font-size: 13px;
  font-weight: 500;
`

const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 12px 0;
`

const JobTitle = styled.h2`
  color: var(--black);
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
`

const MetaText = styled.span`
  color: var(--primary-grey);
  font-size: 12px;
`

const SalaryText = styled.span`
  color: var(--black);
  font-size: 12px;
  font-weight: 500;
`

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
`

const BottomAction = styled(ActionButtons)`
  padding-top: 8px;
  padding-bottom: 12px;
`

const ApplyButton = styled.button`
  flex: 1;
  height: 32px;
  border-radius: 40px;
  background: var(--blue);
  color: var(--background-white);
  font-size: 14px;
  font-weight: 500;
`

const BookmarkButton = styled.button`
  width: 60px;
  height: 32px;
`

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background: var(--light-ash);
  border: none;
  margin: 0;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`

const SectionTitle = styled.h3`
  color: var(--black);
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`

const SectionBody = styled.p`
  color: var(--black);
  font-size: 12px;
  line-height: 1.4;
  margin: 0;
  &.subhead{
    margin-top: 4px;
    font-weight: 500;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  li{
    color: var(--black);
    font-size: 12px;
    line-height: 1.4;
    &::before{
      content: '• ';
    }
  }
`

const StatsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 12px;
  flex-wrap: wrap;
`

const StatText = styled.span`
  color: var(--black);
  font-size: 14px;
  font-weight: 500;
`

const CompanyDetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const CompanyLogoLarge = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: #d9d9d9;
`

const CompanyDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const CompanyDetailName = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

