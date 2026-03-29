import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import SearchBox from '../../../ui/SearchBox'
import JobListingCard from '../../../ui/JobListingCard'
import { ROUTES } from '../../../../routes'

export default function JobsListPanel({
  jobs,
  selectedJobId,
  showSearch = true,
}) {
  const navigate = useNavigate()

  const handleSelectJob = (jobId) => {
    navigate(ROUTES.appJob(jobId))
  }

  return (
    <JobsListWrapper>
      {showSearch ? <SearchBox width="100%" /> : null}

      <ListCard>
        <Header>
          <h3>Top job picks for you</h3>
          <p>{jobs.length} new verified jobs that match your profile today</p>
        </Header>

        <Rows>
          {jobs.map((job) => (
            <JobListingCard
              key={job.id}
              job={job}
              isActive={job.id === selectedJobId}
              onSelect={() => handleSelectJob(job.id)}
            />
          ))}
        </Rows>

        <ViewMoreButton type="button">View more</ViewMoreButton>
      </ListCard>
    </JobsListWrapper>
  )
}

const JobsListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const ListCard = styled.section`
  border: 1px solid var(--light-ash);
  border-radius: 12px;
  overflow: hidden;
`

const Header = styled.div`
  padding: 10px;
  h3{
    margin: 0;
    color: var(--black);
    font-size: 20px;
    font-weight: 500;
    @media (max-width: 750px){
      font-size: 14px;
    }
  }
  p{
    margin: 0;
    color: var(--primary-grey);
    font-size: 12px;
  }
`

const Rows = styled.div`
  display: flex;
  flex-direction: column;
`

const ViewMoreButton = styled.button`
  width: calc(100% - 20px);
  margin: 10px;
  height: 32px;
  border-radius: 40px;
  background: var(--light-ash);
  color: var(--black);
  font-size: 14px;
  font-weight: 500;
`
