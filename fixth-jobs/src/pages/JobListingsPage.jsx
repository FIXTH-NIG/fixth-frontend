import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../firebase';
import { ROUTES } from '../routes';
import JobListingCard from '../components/ui/JobListingCard';
import FixthLogo from '../assets/Icons/Fixth.svg';

// Keys must match the exact `category` field values in Firestore
const TABS = [
  { key: 'internships', label: 'Internship' },
  { key: 'graduate-programs', label: 'Graduates' },
];

export default function JobListingsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('internships');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  // Guard: redirect unauthenticated users
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) navigate(ROUTES.login, { replace: true });
      else setUser(u);
    });
    return unsub;
  }, [navigate]);

  // Fetch jobs from Firestore when tab changes
  useEffect(() => {
    if (!user) return;
    setLoading(true);
    setError('');

    const fetchJobs = async () => {
      try {
        const q = query(
          collection(db, 'job-listings'),
          where('category', '==', activeTab)
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setJobs(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load jobs. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [activeTab, user]);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate(ROUTES.landing);
  };

  const activeLabel = TABS.find((t) => t.key === activeTab)?.label ?? '';

  return (
    <PageWrapper>
      <AppHeader>
        <img
          src={FixthLogo}
          alt="Fixth"
          onClick={() => navigate(ROUTES.landing)}
          style={{ cursor: 'pointer' }}
        />
        <HeaderRight>
          {user && <UserGreet>Hi, {user.displayName || user.email}</UserGreet>}
          <SignOutBtn type="button" onClick={handleSignOut}>Sign out</SignOutBtn>
        </HeaderRight>
      </AppHeader>

      <PageContent>
        <PageTitle>Job Listings</PageTitle>
        <PageSubtitle>Verified engineering roles matched for you</PageSubtitle>

        <TabRow role="tablist">
          {TABS.map((tab) => (
            <TabBtn
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              $active={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </TabBtn>
          ))}
        </TabRow>

        {loading && <SkeletonList />}

        {error && <ErrorText>{error}</ErrorText>}

        {!loading && !error && jobs.length === 0 && (
          <EmptyState>
            <EmptyIcon>🔍</EmptyIcon>
            <EmptyTitle>No {activeLabel} listings yet</EmptyTitle>
            <EmptySubtitle>Check back soon — new roles are added regularly.</EmptySubtitle>
          </EmptyState>
        )}

        {!loading && !error && jobs.length > 0 && (
          <ListCard>
            <ListHeader>
              <ListHeaderTitle>{activeLabel} roles</ListHeaderTitle>
              <ListHeaderSub>{jobs.length} verified listing{jobs.length !== 1 ? 's' : ''}</ListHeaderSub>
            </ListHeader>
            <Rows>
              {jobs.map((job) => (
                <JobListingCard
                  key={job.id}
                  job={job}
                  isActive={false}
                  onSelect={() => navigate(`/jobs/${job.id}`)}
                />
              ))}
            </Rows>
          </ListCard>
        )}
      </PageContent>
    </PageWrapper>
  );
}

// ─── Skeleton loader ──────────────────────────────────────────────────────────

function SkeletonList() {
  return (
    <SkeletonCard>
      {[1, 2, 3, 4, 5].map((i) => (
        <SkeletonRow key={i}>
          <SkeletonAvatar />
          <SkeletonLines>
            <SkeletonLine $width="40%" $height="11px" />
            <SkeletonLine $width="75%" $height="13px" />
            <SkeletonLine $width="30%" $height="11px" />
          </SkeletonLines>
        </SkeletonRow>
      ))}
    </SkeletonCard>
  );
}

// ─── Styled Components ────────────────────────────────────────────────────────

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: var(--background-white);
  display: flex;
  flex-direction: column;
`;

const AppHeader = styled.header`
  height: 59px;
  width: 100%;
  padding: 10px 105px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(228, 228, 228, 0.92);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  z-index: 40;
  box-shadow: 0 1px 0 var(--light-ash), 0 2px 8px rgba(31, 31, 31, 0.04);
  @media (max-width: 768px) { padding: 10px 20px; }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const UserGreet = styled.span`
  font-size: 13px;
  color: var(--primary-grey);
  font-weight: 500;
  @media (max-width: 480px) { display: none; }
`;

const SignOutBtn = styled.button`
  height: 34px;
  padding: 0 16px;
  border-radius: 40px;
  border: 1px solid var(--light-ash);
  font-size: 13px;
  font-weight: 500;
  color: var(--black);
  background: transparent;
  transition: all 150ms ease;
  &:hover {
    background: var(--light-ash);
    border-color: var(--grey);
  }
`;

const PageContent = styled.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 16px 80px;
  @media (max-width: 600px) {
    padding: 32px 0 80px;
  }
`;

const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1px;
  color: var(--black);
  margin-bottom: 6px;
  @media (max-width: 600px) { padding: 0 16px; }
`;

const PageSubtitle = styled.p`
  font-size: 14px;
  color: var(--primary-grey);
  margin-bottom: 28px;
  @media (max-width: 600px) { padding: 0 16px; }
`;

const TabRow = styled.div`
  display: flex;
  gap: 4px;
  background-color: var(--light-ash);
  border-radius: 40px;
  padding: 4px;
  width: fit-content;
  margin-bottom: 24px;
  @media (max-width: 600px) { margin-left: 16px; }
`;

const TabBtn = styled.button`
  height: 36px;
  padding: 0 22px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.4px;
  color: var(--black);
  transition: all 150ms ease;
  border: 2px solid transparent;
  ${({ $active }) => $active && css`
    background: var(--white);
    border-color: transparent;
    font-weight: 600;
    box-shadow: 0 1px 4px rgba(31, 31, 31, 0.12);
  `}
`;

const ErrorText = styled.p`
  font-size: 14px;
  color: #e53e3e;
  padding: 24px 0;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  gap: 10px;
  text-align: center;
`;

const EmptyIcon = styled.span`
  font-size: 36px;
  line-height: 1;
  margin-bottom: 6px;
`;

const EmptyTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--black);
  letter-spacing: -0.4px;
`;

const EmptySubtitle = styled.p`
  font-size: 13px;
  color: var(--primary-grey);
`;

const ListCard = styled.section`
  border: 1px solid var(--light-ash);
  border-radius: 12px;
  overflow: hidden;
  background: var(--white);
  box-shadow: 0 2px 12px rgba(31, 31, 31, 0.06);
  @media (max-width: 600px) {
    border-radius: 0;
    border-left: none;
    border-right: none;
    box-shadow: none;
  }
`;

const ListHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid var(--light-ash);
`;

const ListHeaderTitle = styled.h2`
  margin: 0 0 3px;
  font-size: 16px;
  font-weight: 600;
  color: var(--black);
  letter-spacing: -0.4px;
  padding-left: 10px;
  border-left: 3px solid var(--blue);
`;

const ListHeaderSub = styled.p`
  margin: 0;
  font-size: 12px;
  color: var(--primary-grey);
  padding-left: 13px;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: column;
`;

// ─── Skeleton styles ──────────────────────────────────────────────────────────

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

const SkeletonCard = styled.div`
  border: 1px solid var(--light-ash);
  border-radius: 12px;
  overflow: hidden;
  background: var(--white);
  box-shadow: 0 2px 12px rgba(31, 31, 31, 0.06);
  @media (max-width: 600px) {
    border-radius: 0;
    border-left: none;
    border-right: none;
    box-shadow: none;
  }
`;

const SkeletonRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 12px;
  border-top: 1px solid var(--light-ash);
  &:first-child { border-top: none; }
`;

const SkeletonAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--light-ash);
  flex-shrink: 0;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const SkeletonLines = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 2px;
`;

const SkeletonLine = styled.div`
  height: ${({ $height }) => $height || '12px'};
  width: ${({ $width }) => $width || '100%'};
  border-radius: 4px;
  background: var(--light-ash);
  animation: ${pulse} 1.5s ease-in-out infinite;
`;
