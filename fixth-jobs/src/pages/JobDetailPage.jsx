import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase';
import { ROUTES } from '../routes';
import leftArrowIcon from '../assets/Icons/leftArrowIcon.svg';

const VerifiedIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.20866 3.03367C1.21924 3.56912 0.927872 4.29293 0.549017 4.67107C0.197469 5.02294 0 5.49997 0 5.99735C0 6.49474 0.197469 6.97177 0.549017 7.32364C0.922933 7.69613 1.19808 8.34234 1.20866 8.87004C1.21854 9.33706 1.40126 9.80126 1.75754 10.1568C2.08625 10.4862 2.52597 10.6811 2.99076 10.7036C3.54881 10.7318 4.27972 11.0563 4.6748 11.4514C5.02665 11.8027 5.50356 12 6.00079 12C6.49802 12 6.97493 11.8027 7.32678 11.4514C7.72186 11.0563 8.45276 10.7318 9.01082 10.7036C9.47561 10.6811 9.91533 10.4862 10.244 10.1568C10.5867 9.81462 10.7832 9.35281 10.7922 8.86863C10.8028 8.34234 11.0744 7.70036 11.4476 7.32787C11.8005 6.97612 11.9992 6.49859 12 6.00035C12.0008 5.5021 11.8036 5.02395 11.4519 4.67107C11.0737 4.29364 10.7816 3.56912 10.7929 3.03437C10.7982 2.78189 10.7523 2.53096 10.658 2.2967C10.5637 2.06245 10.4228 1.84974 10.244 1.6714C10.0587 1.48561 9.83637 1.3409 9.59144 1.24671C9.34652 1.15251 9.08451 1.11092 8.82245 1.12466C8.31872 1.15006 7.68306 0.905962 7.32678 0.548993C6.9749 0.197461 6.49784 0 6.00044 0C5.50303 0 5.02598 0.197461 4.67409 0.548993C4.31852 0.905257 3.68215 1.15006 3.17843 1.12466C2.91648 1.11102 2.65461 1.15266 2.40981 1.24685C2.16501 1.34105 1.94278 1.4857 1.75754 1.6714C1.57882 1.84965 1.43805 2.06225 1.34372 2.29638C1.24939 2.5305 1.20344 2.78131 1.20866 3.03367ZM8.14234 3.61639C8.22338 3.66135 8.29476 3.72184 8.35241 3.79439C8.41007 3.86695 8.45286 3.95015 8.47834 4.03925C8.50383 4.12835 8.51151 4.2216 8.50095 4.31366C8.49039 4.40573 8.46179 4.49482 8.41678 4.57583L6.46395 8.09049C6.41337 8.18621 6.34143 8.26901 6.25371 8.33247C6.12624 8.42469 5.9716 8.47166 5.81437 8.46591C5.65713 8.46016 5.50634 8.40201 5.38594 8.30072L3.43946 6.74374C3.3671 6.68584 3.30686 6.61425 3.26217 6.53307C3.21748 6.45189 3.18922 6.3627 3.179 6.27059C3.16878 6.17848 3.1768 6.08527 3.20261 5.99626C3.22841 5.90726 3.2715 5.8242 3.3294 5.75185C3.38731 5.67949 3.4589 5.61925 3.54009 5.57456C3.62127 5.52988 3.71047 5.50161 3.80258 5.49139C3.89469 5.48118 3.98791 5.4892 4.07692 5.515C4.16593 5.54081 4.24898 5.58389 4.32134 5.6418L5.62864 6.68801L7.18286 3.89011C7.22788 3.80914 7.28842 3.73782 7.361 3.68024C7.43359 3.62267 7.51681 3.57995 7.60591 3.55453C7.695 3.52911 7.78823 3.52149 7.88028 3.53211C7.97232 3.54272 8.06137 3.57136 8.14234 3.61639Z"
      fill="#4B6FBB"
    />
  </svg>
);

const DotSeparator = () => (
  <svg width="2" height="2" viewBox="0 0 2 2" fill="none">
    <circle cx="1" cy="1" r="1" fill="#7F7F7F" />
  </svg>
);

const CATEGORY_STYLES = {
  internships: {
    color: 'var(--blue)',
    background: 'var(--blue-tint)',
  },
  'graduate-programs': {
    color: '#276749',
    background: 'rgba(56, 161, 105, 0.12)',
  },
};

export default function JobDetailPage() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Auth guard
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) navigate(ROUTES.login, { replace: true });
    });
    return unsub;
  }, [navigate]);

  // Fetch the single job document
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const snap = await getDoc(doc(db, 'job-listings', jobId));
        if (snap.exists()) {
          setJob({ id: snap.id, ...snap.data() });
        } else {
          setError('Job not found.');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to load job details.');
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [jobId]);

  if (loading) return <PageWrapper><StatusText>Loading…</StatusText></PageWrapper>;
  if (error) return <PageWrapper><ErrorText>{error}</ErrorText></PageWrapper>;
  if (!job) return null;

  const initial = job.title ? job.title.charAt(0).toUpperCase() : '?';
  const applyHref = job.applyLink || job.sourceUrl || '#';
  const badgeStyle = CATEGORY_STYLES[job.category] || CATEGORY_STYLES.internships;

  return (
    <PageWrapper>
      <DetailCard>
        {/* Back header */}
        <PageHeader>
          <BackButton type="button" onClick={() => navigate(ROUTES.jobs)} aria-label="go back">
            <img src={leftArrowIcon} alt="go back" />
          </BackButton>
          <span>Jobs</span>
        </PageHeader>

        {/* Source / publisher */}
        <SourceHeader>
          <SourceLogo aria-hidden="true">{initial}</SourceLogo>
          <SourceRow>
            <SourceName>{job.sourceName}</SourceName>
            <VerifiedIcon />
          </SourceRow>
        </SourceHeader>

        {/* Job title + meta */}
        <JobInfo>
          <JobTitle>{job.title}</JobTitle>
          <MetaRow>
            {job.postedDate && <MetaText>Posted {job.postedDate}</MetaText>}
          </MetaRow>
        </JobInfo>

        {/* Apply button */}
        <ActionButtons>
          <ApplyButton
            as="a"
            href={applyHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now ↗
          </ApplyButton>
        </ActionButtons>

        <Divider />

        {/* Full description */}
        {job.description && (
          <Section>
            <SectionTitle>About this opportunity</SectionTitle>
            <SectionBody>{job.description}</SectionBody>
          </Section>
        )}

        {/* Bottom apply */}
        <BottomAction>
          <ApplyButton
            as="a"
            href={applyHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now ↗
          </ApplyButton>
        </BottomAction>
      </DetailCard>
    </PageWrapper>
  );
}

// ─── Styled Components ────────────────────────────────────────────────────────

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, var(--background-white) 0%, rgba(212, 218, 226, 0.45) 100%);
  display: flex;
  justify-content: center;
  padding: 40px 16px 80px;
  @media (max-width: 600px) { padding: 0; }
`;

const StatusText = styled.p`
  font-size: 14px;
  color: var(--primary-grey);
  padding: 60px 0;
`;

const ErrorText = styled.p`
  font-size: 14px;
  color: #e53e3e;
  padding: 60px 0;
`;

const DetailCard = styled.div`
  width: 100%;
  max-width: 680px;
  border: 1px solid var(--light-ash);
  border-radius: 12px;
  background: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: fit-content;
  box-shadow: 0 4px 24px rgba(31, 31, 31, 0.08);
  @media (max-width: 600px) { border-radius: 0; border: none; box-shadow: none; max-width: 100%; margin-bottom: 70px; }
`;

const PageHeader = styled.header`
  height: 48px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 14px;
  border-bottom: 1px solid var(--light-ash);
  span { font-size: 15px; font-weight: 500; color: var(--black); }
`;

const BackButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--background-white);
  border: 1px solid var(--light-ash);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 150ms ease;
  &:hover { background: var(--light-ash); }
`;

const SourceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 16px 0;
`;

const SourceLogo = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--card-bg);
  border: 1px solid var(--light-ash);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  color: var(--primary-grey);
`;

const SourceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SourceName = styled.span`
  color: var(--black);
  font-size: 13px;
  font-weight: 500;
`;

const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 16px 0;
`;

const JobTitle = styled.h1`
  color: var(--black);
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
  letter-spacing: -0.5px;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`;

const MetaText = styled.span`
  color: var(--primary-grey);
  font-size: 12px;
`;

const CategoryBadge = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
  padding: 4px 10px;
  border-radius: 40px;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
`;

const BottomAction = styled(ActionButtons)`
  border-top: 1px solid var(--light-ash);
  margin-top: 4px;
`;

const ApplyButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 42px;
  border-radius: 40px;
  background: var(--blue);
  color: var(--background-white);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all 200ms ease;
  box-shadow:
    inset 0 6px 4px -6px rgba(255, 255, 255, 0.9),
    inset 0 -6px 10px -6px rgba(0, 0, 0, 0.45);
  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
    box-shadow:
      0 6px 20px rgba(75, 111, 187, 0.35),
      inset 0 6px 4px -6px rgba(255, 255, 255, 0.9);
  }
  &:active { transform: translateY(0); }
`;

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background: var(--light-ash);
  border: none;
  margin: 4px 0;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px;
`;

const SectionTitle = styled.h2`
  color: var(--black);
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  letter-spacing: -0.3px;
`;

const SectionBody = styled.p`
  color: var(--black);
  font-size: 13px;
  line-height: 1.7;
  margin: 0;
  white-space: pre-wrap;
`;

const SourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  color: var(--blue);
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid var(--blue);
  border-radius: 40px;
  padding: 4px 12px;
  transition: background 150ms ease;
  &:hover { background: var(--blue-tint); }
`;
