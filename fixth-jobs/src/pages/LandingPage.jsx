import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useScreenWidth } from '../hooks/useScreenWidth';
import { BREAKPOINTS } from '../constants/breakpoints';
import { ROUTES } from '../routes';

// Assets
import PeopleFacesCluster from '../assets/Images/PeopleFacesCluster.svg';
import turnado from '../assets/Icons/turnado.svg';
import spiralArrow from '../assets/Icons/spiralArrow.svg';
import pcGuy from '../assets/Images/pcGuy.svg';
import toolBox from '../assets/Icons/blueToolBox.svg';
import toyota from '../assets/Images/toyota.svg';
import shell from '../assets/Images/shell.svg';
import dangote from '../assets/Images/dangote.svg';
import nestle from '../assets/Images/nestle.svg';
import total from '../assets/Images/total.svg';
import mtn from '../assets/Images/mtn.svg';
import leftImg from '../assets/Images/johnFindingMatch.svg';
import EngTrust1 from '../assets/Images/EngTrust1.svg';
import EngTrust2 from '../assets/Images/EngTrust2.svg';
import EngTrust3 from '../assets/Images/EngTrust3.svg';
import dextopJohn from '../assets/Images/dextopJohn.svg';
import mobileJohn from '../assets/Images/mobileJohn.svg';
import greaterThan from '../assets/Icons/greaterThan.svg';
import faq1 from '../assets/Images/faq1.svg';
import faq2 from '../assets/Images/faq2.svg';
import faq3 from '../assets/Images/faq3.svg';
import faq4 from '../assets/Images/faq4.svg';
import bgGreaterThan from '../assets/Icons/bgGreaterThan.svg';
import bgLessThan from '../assets/Icons/bgLessThan.svg';
import lpSection8Bg from '../assets/Images/lpSection8Bg.jpg';

// ─── Section 1: Hero ──────────────────────────────────────────────────────────

function Section1() {
  const navigate = useNavigate();
  return (
    <Section1Container>
      <div className="informationSection">
        <div className="activeUsers">
          <span></span>
          <img src={PeopleFacesCluster} alt="People Faces Cluster" />
          <span>+28K active users</span>
        </div>
        <span className="para1">
          <span className="heading">
            Real Engineering <span className="inlineIcon"><img src={toolBox} alt="blue tool box" /></span> Jobs
          </span><br />
          That Actually Responds
        </span>
        <span className="para2">
          A trusted platform where Nigerians get access to verified engineering
          jobs and internships where companies review applications, reply, and hire — not ghost you.
        </span>
        <div className="informationSectionInputSection">
          <img src={turnado} className="turnado" alt="turnado icon" width="166px" height="18px" />
          <HeroFrame onGetStarted={() => navigate(ROUTES.signup)} />
          <img src={spiralArrow} className="spiralArrow" alt="spiral arrow icon" width="45.5px" height="58px" />
        </div>
      </div>
      <div className="imageSection">
        <img src={pcGuy} alt="a student searching for job on his laptop" height="483px" width="607px" />
      </div>
    </Section1Container>
  );
}

const HeroFrame = ({ onGetStarted }) => (
  <HeroFrameWrapper>
    <HeroInputDiv>
      <HeroEmailInput placeholder="Enter your email" />
    </HeroInputDiv>
    <HeroButton onClick={onGetStarted}>Find real jobs</HeroButton>
  </HeroFrameWrapper>
);

const Section1Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px 0 100px 0;
  width: 100%;
  padding-inline: clamp(16px, 7vw, 105px);
  gap: clamp(24px, 4vw, 66px);
  @media (max-width: 1300px) {
    flex-direction: column;
    gap: 10px;
    padding-inline: 16px;
    margin: 40px 0 80px 0;
  }
  .imageSection {
    height: max-content;
    @media (max-width: 700px) {
      img { width: 303px; height: 260px; margin: 0 auto; }
    }
  }
  .informationSection {
    width: 590px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (max-width: 1300px) {
      align-items: center;
      gap: 12px;
      width: 100%;
    }
    .activeUsers {
      display: flex;
      align-items: center;
      background-color: #d4dae2;
      width: fit-content;
      font-size: 14px;
      padding: 6px 8px;
      border-radius: 20px;
      font-weight: 500;
      gap: 4px;
      margin-bottom: 15px;
      :first-child {
        height: 4px;
        width: 4px;
        background-color: var(--blue);
        border-radius: 50%;
      }
      @media (max-width: 700px) { font-size: 12px; }
    }
    .para1 {
      font-size: 43px;
      font-weight: 550;
      line-height: 40px;
      letter-spacing: -0.5px;
      transform: scaleY(1.25);
      .heading { display: inline; }
      .inlineIcon img { display: inline-block; vertical-align: middle; }
      img {
        @media (max-width: 1300px) { width: 28px; height: 30px; margin: 0%; }
      }
      @media (max-width: 700px) { font-size: 32px; line-height: 40px; text-align: center; }
      @media (max-width: 420px) { font-size: 26px; line-height: 35px; }
    }
    .para2 {
      font-size: 13px;
      line-height: 18px;
      margin-top: 10px;
      letter-spacing: -0.5px;
      color: var(--primary-grey);
      width: min(100%, 557px);
      @media (max-width: 1300px) { font-size: 12px; width: 100%; text-align: center; }
    }
    .informationSectionInputSection {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
      @media (max-width: 1300px) { align-items: center; }
      .turnado {
        align-self: center;
        margin-right: 0;
      }
      .spiralArrow {
        align-self: flex-end;
        margin-right: 30px;
        @media (max-width: 1300px) { display: none; }
      }
    }
  }
`;

const HeroFrameWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  height: 51px;
  justify-content: flex-start;
  padding: 4px;
  position: relative;
  margin-top: 20px;
  margin-bottom: 12px;
  width: min(100%, 640px);
  @media (max-width: 1300px) { justify-content: center; width: 100%; margin-top: 20px; }
  @media (max-width: 700px) { flex-direction: column; align-items: stretch; }
`;

const HeroInputDiv = styled.div`
  align-items: center;
  background-color: rgba(99, 153, 217, 0.12);
  border-radius: 40px;
  display: flex;
  gap: 10px;
  padding: 12px 16px;
  position: relative;
  width: 480px;
  height: 51px;
  @media (max-width: 700px) { display: none; }
`;

const HeroEmailInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
  color: var(--black);
  padding: 6px;
  &::placeholder { color: var(--black); font-weight: 500; }
`;

const HeroButton = styled.button`
  align-items: center;
  background-color: var(--blue);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--background-white);
  font-family: Inter;
  font-size: 13px;
  padding: 0 20px;
  width: 125px;
  height: 43px;
  z-index: 3;
  position: absolute;
  right: 40px;
  @media (max-width: 1300px) { position: relative; align-self: center; right: 0; }
`;

// ─── Section 2: Trusted Companies ─────────────────────────────────────────────

function Section2() {
  return (
    <Section2Container>
      <span className="heading">Trusted by:</span>
      <div className="companiesLogoSection">
        <img src={mtn} alt="mtn logo" />
        <img src={total} alt="total logo" />
        <img src={toyota} alt="toyota logo" />
        <img src={shell} alt="shell logo" />
        <img src={dangote} alt="dangote logo" />
        <img src={nestle} alt="nestle logo" />
      </div>
    </Section2Container>
  );
}

const Section2Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  padding: 0 clamp(16px, 8vw, 121px) 47px;
  margin-bottom: 100px;
  @media (max-width: 1300px) { display: none; }
  .heading { font-size: 14px; font-weight: 500; }
  .companiesLogoSection {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
    width: 100%;
    box-shadow:
      inset 40px 0 20px -40px rgba(234, 234, 234, 0.3),
      inset -40px 0 20px -40px rgba(230, 230, 230, 0.3);
  }
`;

// ─── Section 3: Search ────────────────────────────────────────────────────────

function Section3() {
  const [mode, setMode] = useState('jobs');
  const [query, setQuery] = useState('');

  const PLACEHOLDERS = {
    talents: 'Search by name, skill or role',
    jobs: 'Search by title, skill or company',
  };

  return (
    <Section3Container>
      <img src={leftImg} alt="John finding a match" />
      <SearchCard>
        <SearchContent>
          <SearchTabs role="tablist">
            <SearchTabButton type="button" $active={mode === 'talents'} onClick={() => setMode('talents')}>
              Find talents
            </SearchTabButton>
            <SearchTabButton type="button" $active={mode === 'jobs'} onClick={() => setMode('jobs')}>
              Find jobs
            </SearchTabButton>
          </SearchTabs>
          <SearchForm onSubmit={(e) => e.preventDefault()}>
            <SearchInput
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={PLACEHOLDERS[mode]}
            />
            <SearchBtn type="submit">Search</SearchBtn>
          </SearchForm>
        </SearchContent>
      </SearchCard>
    </Section3Container>
  );
}

const Section3Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 0 100px;
  padding-inline: clamp(16px, 8vw, 140px);
  gap: clamp(24px, 5vw, 78px);
  img { width: 385px; height: 344px; }
  @media (max-width: 1300px) { flex-direction: column; margin: 0 0 80px; padding-inline: 16px; }
`;

const SearchCard = styled.div`
  background-color: var(--background-white);
  position: relative;
  width: min(697px, 100%);
  min-height: 208px;
  border-radius: 32px;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 32px;
    padding: 5px;
    background: linear-gradient(to right, var(--blue-light), var(--white));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 1;
  }
  > * { position: relative; z-index: 2; }
`;

const SearchContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 30px;
  border-radius: 32px;
  @media (max-width: 768px) { padding: 24px 16px; }
`;

const SearchTabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  background-color: var(--light-ash);
  border-radius: 40px;
  padding: 4px;
`;

const SearchTabButton = styled.button`
  border-radius: 40px;
  height: 40px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.45px;
  color: var(--black);
  transition: all 0.2s ease;
  border: 2px solid transparent;
  ${({ $active }) => $active && css`
    border-color: var(--black);
    font-weight: 600;
  `}
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--light-ash);
  border-radius: 40px;
  padding: 4px;
  min-width: 0;
`;

const SearchInput = styled.input`
  flex: 1;
  border: 0;
  background: transparent;
  padding: 0 16px;
  height: 40px;
  color: var(--black);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.45px;
  outline: none;
  min-width: 0;
  &::placeholder { color: var(--primary-grey); }
  @media (max-width: 520px) { padding: 0 12px; font-size: 14px; }
`;

const SearchBtn = styled.button`
  border-radius: 40px;
  background-color: var(--blue);
  color: var(--background-white);
  min-width: 167px;
  height: 40px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.45px;
  padding: 0 20px;
  flex-shrink: 0;
  @media (max-width: 520px) { width: 120px; min-width: 120px; padding: 0; }
`;

// ─── Section 4: Why Engineers Trust Us ───────────────────────────────────────

function Section4() {
  return (
    <Section4Container>
      <span className="title">
        Why Engineers Trust Us<br />Over Anyone Else
      </span>
      <div className="imgRow">
        <img src={EngTrust1} alt="Engineer Trust 1" />
        <img src={EngTrust2} alt="Engineer Trust 2" />
        <img src={EngTrust3} alt="Engineer Trust 3" />
      </div>
    </Section4Container>
  );
}

const Section4Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-inline: clamp(16px, 8vw, 130px);
  gap: 60px;
  margin-bottom: 80px;
  @media (max-width: 700px) { gap: 20px; margin-bottom: 60px; }
  span {
    font-size: 48px;
    letter-spacing: -2px;
    font-weight: 500;
    line-height: 60px;
    text-align: center;
    @media (max-width: 700px) { font-size: 32px; line-height: 40px; }
  }
  .imgRow {
    display: flex;
    width: 100%;
    gap: 20px;
    align-items: stretch;
    justify-content: center;
    @media (max-width: 700px) {
      justify-content: flex-start;
      overflow-x: auto;
      scrollbar-width: none;
      touch-action: pan-x;
      gap: 16px;
    }
    &::-webkit-scrollbar { display: none; }
    img {
      flex: 1 1 0;
      min-width: 0;
      width: 100%;
      max-width: 100%;
      height: auto;
      display: block;
      object-fit: contain;
      @media (max-width: 700px) {
        width: 336px;
        min-width: 336px;
        max-width: 336px;
        height: 420px;
        flex: 0 0 300px;
      }
    }
  }
`;

// ─── Section 5: Who We Are ────────────────────────────────────────────────────

function Section5() {
  return (
    <Section5Container>
      <h2 className="title">Who we are</h2>
      <div className="main">
        Fixth connects Nigerian engineers directly to real, verified jobs at top companies.
        Since launching in 2025,<em> we have grown with over hundreds of successful placements
        ranging from internships to full-time roles. This progress means companies message you
        directly without ghosting or endless waiting, your profile showcases your actual projects
        and skills so you stand out instantly.</em>
      </div>
    </Section5Container>
  );
}

const Section5Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 100px;
  @media (max-width: 700px) { gap: 20px; margin-bottom: 80px; }
  h2 {
    margin: 0;
    font-size: 48px;
    letter-spacing: -2px;
    font-weight: 500;
    @media (max-width: 700px) { font-size: 32px; }
  }
  .main {
    padding: 0 120px;
    font-size: 40px;
    text-align: center;
    font-weight: 500;
    em { color: var(--grey); }
    @media (max-width: 700px) { font-size: 24px; padding: 0 16px; }
  }
`;

// ─── Section 6: Testimonials ──────────────────────────────────────────────────

function Section6() {
  const screenWidth = useScreenWidth();
  const johnImage = screenWidth > BREAKPOINTS.MOBILE ? dextopJohn : mobileJohn;

  return (
    <Section6Container>
      <h2 className="title">What People Are Saying About Us</h2>
      <TestiBoxWrapper>
        <TestiGroup>
          <TestiDiv>
            <TestiHi>Hi.</TestiHi>
            <TestiParagraph>
              I&apos;m John Doe, a Civil Engineering, UNN &apos;24 – Now Site Engineer at Setraco
              Construction &quot;I had applied to over 60 jobs on LinkedIn with almost zero replies.
              <br /><br />
              I joined Project X in October 2025, completed my profile with my final-year bridge project,
              and within 12 days Setraco messaged me directly. Two weeks later I had an interview,
              and by November I was on site in Enugu with full accommodation and feeding.
            </TestiParagraph>
            <TestiNextBtn>
              <span>Next</span>
              <img src={greaterThan} alt="Next" />
            </TestiNextBtn>
          </TestiDiv>
          <img src={johnImage} alt="John civil engineering" />
        </TestiGroup>
      </TestiBoxWrapper>
    </Section6Container>
  );
}

const Section6Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 100px;
  @media (max-width: 700px) { gap: 20px; margin-bottom: 60px; }
  h2 {
    font-size: 48px;
    margin: 0;
    letter-spacing: -2px;
    text-align: center;
    font-weight: 500;
    @media (max-width: 700px) { font-size: 32px; padding: 0 20px; }
  }
`;

const TestiBoxWrapper = styled.div`
  height: 488px;
  width: 1230px;
  padding: 0 16px;
  @media (max-width: 1300px) { width: fit-content; height: auto; }
`;

const TestiGroup = styled.div`
  display: flex;
  gap: 177.9px;
  height: 488px;
  width: 100%;
  @media (max-width: 1300px) { flex-direction: column; align-items: center; gap: 40px; height: fit-content; }
`;

const TestiDiv = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  width: 448px;
  @media (max-width: 1300px) { width: 100%; }
`;

const TestiHi = styled.div`
  color: var(--black);
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -2px;
  @media (max-width: 700px) { font-size: 32px; }
`;

const TestiParagraph = styled.p`
  color: var(--black);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 26px;
  @media (max-width: 700px) { font-size: 14px; }
`;

const TestiNextBtn = styled.div`
  backdrop-filter: blur(10px) brightness(100%);
  background-color: #1f1f1f;
  border-radius: 40px;
  height: 48px;
  width: 127px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  span { color: var(--background-white); font-size: 15px; font-weight: 500; letter-spacing: -0.45px; }
  @media (max-width: 700px) { align-self: center; }
`;

// ─── Section 7: FAQs ──────────────────────────────────────────────────────────

function Section7() {
  const screenWidth = useScreenWidth();
  const navigate = useNavigate();
  const faqLabel = screenWidth > 700 ? 'Frequently Asked Questions' : 'FAQs';

  return (
    <FaqBoxWrapper>
      <FaqGroup>
        <FaqFrame>
          <FaqTitle>{faqLabel}</FaqTitle>
          <FaqGetStarted type="button" onClick={() => navigate(ROUTES.signup)}>
            Get Started ↗
          </FaqGetStarted>
        </FaqFrame>
        <FaqMainCon>
          <FaqCardContainer>
            <img src={faq1} alt="FAQ 1" className="faq1img" />
            <img src={faq2} alt="FAQ 2" className="faq2img" />
            <img src={faq3} alt="FAQ 3" className="faq3img" />
            <img src={faq4} alt="FAQ 4" className="faq4img" />
          </FaqCardContainer>
          <FaqNavRow>
            <img src={bgLessThan} alt="Less Than" />
            <img src={bgGreaterThan} alt="Greater Than" />
          </FaqNavRow>
        </FaqMainCon>
      </FaqGroup>
    </FaqBoxWrapper>
  );
}

const FaqBoxWrapper = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 100px;
  @media (max-width: 1300px) { margin-bottom: 60px; }
`;

const FaqGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  @media (max-width: 700px) { gap: 10px; }
`;

const FaqFrame = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 99px;
  width: 100%;
  gap: 20px;
`;

const FaqTitle = styled.div`
  color: var(--black);
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -2.4px;
  text-align: center;
  @media (max-width: 700px) { font-size: 32px; line-height: 40px; }
`;

const FaqGetStarted = styled.button`
  color: var(--blue);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.7px;
  text-align: center;
`;

const FaqMainCon = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  @media (max-width: 1300px) { height: fit-content; }
`;

const FaqCardContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  width: 100%;
  &::-webkit-scrollbar { display: none; }
  @media (max-width: 1300px) {
    justify-content: flex-start;
    overflow-x: auto;
    scrollbar-width: none;
    touch-action: pan-x;
    scroll-snap-type: x proximity;
  }
  img {
    width: 307px;
    height: 267px;
    flex: 0 0 307px;
    @media (max-width: 1300px) { scroll-snap-align: start; }
  }
  .faq1img, .faq3img { rotate: 5.5deg; @media (max-width: 1300px) { rotate: 0deg; } }
  .faq2img, .faq4img { rotate: -5.5deg; @media (max-width: 1300px) { rotate: 0deg; } }
`;

const FaqNavRow = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1300px) { display: none; }
`;

// ─── Section 8: CTA ───────────────────────────────────────────────────────────

function Section8() {
  const navigate = useNavigate();
  return (
    <Section8Container>
      <h2>Ready to land your Engineering job faster?</h2>
      <span>
        Join 28,000+ Nigerian engineering students and graduates already getting direct messages
        and interviews from verified companies. Sign up in under 60 seconds — it&apos;s completely free.
      </span>
      <button type="button" onClick={() => navigate(ROUTES.signup)}>Sign Up</button>
    </Section8Container>
  );
}

const Section8Container = styled.section`
  width: min(100%, 1230px);
  height: 318px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  padding: 50px 137px 0;
  background-image: url(${lpSection8Bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-right: 3px solid white;
  border-left: 3px solid white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 1300px) { margin-bottom: 60px; width: 95%; height: 320px; padding: 30px 20px 0; }
  h2 {
    margin: 0;
    font-size: 48px;
    font-weight: 500;
    letter-spacing: -1.5px;
    text-align: center;
    @media (max-width: 1300px) { font-size: 28px; }
  }
  span {
    font-size: 14px;
    color: var(--primary-grey);
    text-align: center;
    @media (max-width: 700px) { font-size: 12px; }
  }
  button {
    height: 39px;
    width: 90px;
    font-weight: 500;
    background-color: var(--blue);
    color: var(--white);
    border-radius: 40px;
    box-shadow:
      inset 0 6px 4px -6px rgba(255, 255, 255, 0.9),
      inset 0 -6px 10px -6px rgba(0, 0, 0, 0.45);
  }
`;

// ─── Landing Page ─────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </main>
      <Footer />
    </>
  );
}
