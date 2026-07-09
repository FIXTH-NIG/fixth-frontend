import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FixthLogo from '../../assets/Icons/Fixth.svg';
import FLogo from '../../assets/Icons/FixthF-logo.svg';
import Hamburger from '../../assets/Icons/Hamburger.svg';
import closeIcon from '../../assets/Icons/close.svg';
import { useIsMobile } from '../../hooks/useIsMobile';
import { BREAKPOINTS } from '../../constants/breakpoints';
import studentNavImage from '../../assets/Images/studentNavImage.svg';
import companyNavImage from '../../assets/Images/companyNavImage.svg';
import jobsNavImage from '../../assets/Images/jobsNavImage.svg';
import communityNavImage from '../../assets/Images/communityNavImage.svg';
import { ROUTES } from '../../routes';

const TAB_DISPLAY = [
  {
    key: 'students',
    label: 'Students',
    img: studentNavImage,
    title: 'Your engineering career starts here',
    description:
      'Build a standout profile with your projects and skills, get discovered by top companies and receive direct messages for jobs and internships.',
  },
  {
    key: 'companies',
    label: 'Companies',
    img: companyNavImage,
    title: "Hire Nigeria's best engineering talent faster",
    description:
      'Post verified jobs, search thousands of student and graduate profiles, message candidates directly, and fill roles with the right skills.',
  },
  {
    key: 'jobs',
    label: 'Jobs & Internships',
    img: jobsNavImage,
    title: 'Verified engineering opportunities across Nigeria',
    description:
      'Browse full-time roles, graduate positions, internships, and NYSC placements at trusted companies so you can apply with confidence.',
  },
  {
    key: 'community',
    label: 'Community',
    img: communityNavImage,
    title: 'Connect with engineers who get it',
    description:
      'Talk with peers and professionals about work, salary, interviews, and growth. Ask questions, share experiences, and build your network.',
  },
];

function HamburgerMenu({ onClose }) {
  return (
    <HamburgerMenuContainer id="mobile-nav-menu" role="menu">
      <ul>
        {TAB_DISPLAY.map((item) => (
          <li key={item.key}>
            <button type="button" onClick={onClose}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </HamburgerMenuContainer>
  );
}

function NavTabCard({ item, onCtaClick }) {
  return (
    <TabCard role="dialog" aria-label={`${item.label} details`}>
      <TabCardBody>
        <TabCardTitle>{item.title}</TabCardTitle>
        <TabCardDescription>{item.description}</TabCardDescription>
        <TabCardCta type="button" onClick={onCtaClick}>
          Start using Fixth
        </TabCardCta>
      </TabCardBody>
      <TabCardImage src={item.img} alt={`${item.label} preview`} />
    </TabCard>
  );
}

export default function Header() {
  const isMobile = useIsMobile(BREAKPOINTS.DESKTOP_SMALL);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDesktopTab, setActiveDesktopTab] = useState(null);

  const activeTabData = TAB_DISPLAY.find((item) => item.key === activeDesktopTab) || null;
  const showMobileMenu = isMobile && isMenuOpen;
  const showDesktopCard = !isMobile && Boolean(activeTabData);
  const showOverlay = showMobileMenu || showDesktopCard;

  const closeAll = () => {
    setIsMenuOpen(false);
    setActiveDesktopTab(null);
  };

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (showOverlay) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [showOverlay]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') closeAll();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      {showOverlay && (
        <Backdrop type="button" aria-label="Close overlay" onClick={closeAll} />
      )}
      <HeaderShell>
        <HeaderContainer>
          {!isMobile ? (
            <>
              <img src={FixthLogo} alt="Fixth Logo" />
              <NabBtns>
                {TAB_DISPLAY.map((item) => (
                  <NavItemButton
                    key={item.key}
                    type="button"
                    $active={activeDesktopTab === item.key}
                    onClick={() =>
                      setActiveDesktopTab((current) =>
                        current === item.key ? null : item.key
                      )
                    }
                  >
                    {item.label}
                  </NavItemButton>
                ))}
              </NabBtns>
              <AuthNavigation>
                <button type="button" onClick={() => navigate(ROUTES.login)}>
                  Log In
                </button>
                <button type="button" onClick={() => navigate(ROUTES.signup)}>
                  Sign Up
                </button>
              </AuthNavigation>
            </>
          ) : (
            <>
              <img src={FLogo} alt="Fixth F Logo" />
              <MenuToggle
                type="button"
                aria-label={showMobileMenu ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={showMobileMenu}
                aria-controls="mobile-nav-menu"
                onClick={() => setIsMenuOpen((open) => !open)}
              >
                <img src={showMobileMenu ? closeIcon : Hamburger} alt="" aria-hidden="true" />
              </MenuToggle>
            </>
          )}
        </HeaderContainer>
        {showMobileMenu && <HamburgerMenu onClose={closeAll} />}
        {showDesktopCard && (
          <NavTabCard item={activeTabData} onCtaClick={() => navigate(ROUTES.signup)} />
        )}
      </HeaderShell>
    </>
  );
}

const HeaderShell = styled.div`
  position: relative;
  z-index: 40;
  @media (max-width: 1024px) {
    margin: 16px;
  }
`;

const HeaderContainer = styled.header`
  height: 59px;
  width: 100%;
  padding: 10px 105px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--light-ash);
  background: transparent;
  @media (max-width: 1024px) {
    width: auto;
    padding: 17px 20px;
    border-radius: 10px;
    border: none;
    background-color: rgba(209, 209, 209, 0.72);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
`;

const Backdrop = styled.button`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0;
  margin: 0;
  z-index: 20;
  background: rgba(31, 31, 31, 0.2);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const MenuToggle = styled.button`
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const NabBtns = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavItemButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.5px;
  color: ${({ $active }) => ($active ? 'var(--blue)' : 'var(--black)')};
`;

const AuthNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 500;
  button:first-child {
    font-weight: 500;
  }
  button:last-child {
    height: 39px;
    width: 90px;
    font-weight: 500;
    background-color: var(--blue);
    color: var(--white);
    border-radius: 40px;
    box-shadow: inset 0 6px 4px -6px rgba(255, 255, 255, 0.9),
      inset 0 -6px 10px -6px rgba(0, 0, 0, 0.45);
  }
`;

const HamburgerMenuContainer = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(209, 209, 209, 0.75);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 10px 30px rgba(31, 31, 31, 0.12);
  z-index: 30;
  ul {
    width: 100%;
    padding: 17px 20px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    list-style: none;
  }
  li button {
    width: 100%;
    text-align: left;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -1px;
    color: var(--black);
    padding: 4px 0;
  }
`;

const TabCard = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  width: min(457px, calc(100vw - 32px));
  min-height: 164px;
  background-color: var(--background-white);
  border: 1px solid var(--light-ash);
  border-radius: 0 0 20px 20px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 10px;
  padding: 16px;
  z-index: 45;
`;

const TabCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 58%;
`;

const TabCardTitle = styled.p`
  color: var(--black);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.42px;
`;

const TabCardDescription = styled.p`
  color: var(--primary-grey);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.36px;
  line-height: 1.3;
`;

const TabCardCta = styled.button`
  margin-top: 8px;
  width: fit-content;
  border: 1px solid var(--black);
  border-radius: 40px;
  height: 31px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.6px;
  padding: 0 12px;
`;

const TabCardImage = styled.img`
  width: 39%;
  max-width: 170px;
  height: auto;
  object-fit: contain;
`;
