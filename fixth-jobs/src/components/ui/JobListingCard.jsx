import styled from 'styled-components';

export default function JobListingCard({ job, isActive = false, onSelect }) {
  const initial = job.title ? job.title.charAt(0).toUpperCase() : '?';

  return (
    <CardRow type="button" onClick={onSelect} $active={isActive}>
      <CompanyLogo aria-hidden="true">{initial}</CompanyLogo>
      <JobDetails>
        <JobTitle>{job.title}</JobTitle>
        <PostedDate>{job.postedDate}</PostedDate>
      </JobDetails>
    </CardRow>
  );
}

const CardRow = styled.button`
  width: 100%;
  border: none;
  border-top: 1px solid var(--light-ash);
  border-left: ${({ $active }) => ($active ? '3px solid var(--black)' : '3px solid transparent')};
  background: ${({ $active }) => ($active ? 'var(--blue-tint)' : 'transparent')};
  text-align: left;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 12px 12px 10px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  cursor: pointer;
  transition: background 150ms ease, border-left-color 150ms ease;

  &:hover {
    background: rgba(99, 153, 217, 0.06);
    border-left-color: var(--blue-light);
  }
`;

const CompanyLogo = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--card-bg);
  border: 1px solid var(--light-ash);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  color: var(--primary-grey);
  letter-spacing: -0.3px;
`;

const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;

const JobTitle = styled.span`
  color: var(--black);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.3px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PostedDate = styled.span`
  color: var(--primary-grey);
  font-size: 11px;
  font-weight: 400;
`;
