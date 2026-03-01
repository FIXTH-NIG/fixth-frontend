import styled from 'styled-components';
import FixthLogo from '../../assets/Icons/Fixth.svg'
import FixthFLogo from '../../assets/Icons/FixthF-logo.svg'
import xIcon from '../../assets/Icons/x.svg'
import LinkedInIcon from '../../assets/Icons/Linkedin.svg'
import InstagramIcon from '../../assets/Icons/Instagram.svg'
import { useScreenWidth } from '../../utils/useSreenWidth'

// ─── Footer Component ─────────────────────────────────────────────────────────

export default function Footer() {
    const screenWidth = useScreenWidth();
  return (
    <FooterWrapper>
      {/* Top bar: logo + social icons */}
      <OuterPadding>
        <TopBar>
          <Logo><img src={screenWidth > 1024 ? FixthLogo : FixthFLogo} alt="Fixth Logo" /></Logo>
          <SocialIcons>
            {/* X / Twitter */}
            <SocialIcon>
                <img src={xIcon} alt="X / Twitter" />
            </SocialIcon>

            {/* LinkedIn */}
            <SocialIcon>
                <img src={LinkedInIcon} alt="LinkedIn" />
            </SocialIcon>

            {/* Instagram */}
            <SocialIcon>
                <img src={InstagramIcon} alt="Instagram" />
            </SocialIcon>
          </SocialIcons>
        </TopBar>

        {/* Navigation columns */}
        <NavSection>
          <NavColumns>
            {/* For students */}
            <NavColumn>
              <NavHeading>For students</NavHeading>
              <NavLinks>
                <NavLink href="#">Get Started Free</NavLink>
                <NavLink href="#">Find Jobs</NavLink>
                <NavLink href="#">Success Stories</NavLink>
                <NavLink href="#">FAQs</NavLink>
              </NavLinks>
            </NavColumn>

            {/* For companies */}
            <NavColumn>
              <NavHeading>For companies</NavHeading>
              <NavLinks>
                <NavLink href="#">Post a Job</NavLink>
                <NavLink href="#">Search Talent</NavLink>
                <NavLink href="#">Pricing</NavLink>
              </NavLinks>
            </NavColumn>

            {/* Company */}
            <NavColumn>
              <NavHeading>Company</NavHeading>
              <NavLinks>
                <NavLink href="#">Who We Are</NavLink>
                <NavLink href="#">Contact Us</NavLink>
                <NavLink href="#">Terms of Service</NavLink>
                <NavLink href="#">Privacy Policy</NavLink>
              </NavLinks>
            </NavColumn>

            {/* Resources */}
            <NavColumn>
              <NavHeading>Resources</NavHeading>
              <NavLinks>
                <NavLink href="#">Blog (coming soon)</NavLink>
                <NavLink href="#">Engineering News</NavLink>
                <NavLink href="#">Career Tips</NavLink>
              </NavLinks>
            </NavColumn>
          </NavColumns>
        </NavSection>
      </OuterPadding>

      {/* Watermark */}
      <WatermarkWrapper>
        <WatermarkText>FIXTH</WatermarkText>
      </WatermarkWrapper>

      {/* Bottom bar */}
      <BottomBar>
        <BottomBarPadding>
          <BottomBarInner>
            <Copyright>© 2025 Project X. All rights reserved.</Copyright>
            <LegalLinks>
              <LegalLink href="#">Terms of service</LegalLink>
              <LegalLink href="#">Privacy policy</LegalLink>
              <LegalLink href="#">Cookie policy</LegalLink>
            </LegalLinks>
          </BottomBarInner>
        </BottomBarPadding>
      </BottomBar>
    </FooterWrapper>
  );
}


// ─── Styled Components ────────────────────────────────────────────────────────

const FooterWrapper = styled.footer`
  width: 100%;
  position: relative;
  overflow: hidden;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
`;

const TopBar = styled.div`
  display: flex;
  width: 100%;
  max-width: 1230px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--light-ash);
`;

const Logo = styled.div`
    width: fit-content;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.div`
    width: 64px;
    height: 64px;
    @media (max-width: 700px) {
        width: 40px;
        height: 40px;
    }
    img {
    width: 100%;
    height: 100%;
    /* Increase scale to zoom past the padding, 
       then 'cover' ensures it fills the box */
    transform: scale(1.2); 
    object-fit: cover;
  }
`

const NavSection = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding: 60px 0 0;
  z-index: 1;
`;

const NavColumns = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
`;

const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  min-width: 117px;
`;

const NavHeading = styled.span`
  color: rgba(31, 31, 31, 1);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.7px;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const NavLink = styled.a`
  color: #7F7F7F;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.7px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: rgba(31, 31, 31, 1);
  }
`;

const WatermarkWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 512px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  user-select: none;
  @media (max-width: 700px) {
    height: 211px;
  }
`;

const WatermarkText = styled.span`
  font-family: "Anton", -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 340px;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(180deg, rgba(149, 149, 149, 0.10) 0.06%, rgba(209, 209, 209, 0.40) 64.98%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  @media (max-width: 700px) {
    font-size: 140px;
  }
`;

const BottomBar = styled.div`
  width: 100%;
  padding: 20px 0;
`;

const BottomBarInner = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
    @media (max-width: 700px) {
        flex-direction: column;
        gap: 28px;
    }
`;

const Copyright = styled.span`
  color: var(--primary-grey);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.26px;
`;

const LegalLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const LegalLink = styled.a`
  color: var(--primary-grey);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.26px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const OuterPadding = styled.div`
  padding: 28px 105px 0;

  @media (max-width: 1280px) {
    padding: 28px 40px 0;
  }

  @media (max-width: 768px) {
    padding: 24px 20px 0;
  }
`;

const BottomBarPadding = styled.div`
  padding: 0 105px;

  @media (max-width: 1280px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    flex-direction: column;
    gap: 12px;
  }
`;
