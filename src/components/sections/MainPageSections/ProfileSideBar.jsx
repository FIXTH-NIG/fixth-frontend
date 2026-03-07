import styled from "styled-components";
import saveIcon from "../../../assets/Icons/bookmarkIcon.svg"
import SearchBox from "../../ui/SearchBox";

/* ──────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────── */
export default function ProfileSidebar() {
  return (
    <SidebarWrapper>
      <SearchBox width = {"100%"}/>
      {/* Profile Card */}
      <ProfileCard>
        <ProfileBanner />
        <ProfileAvatar />
        <ProfileName>John Doe</ProfileName>
        <ProfileBio>
          Final-year Civil Engineer passionate about sustainable infrastructure. Led team th...
        </ProfileBio>
        <ProfileInfoList>
          <ProfileInfoItem>
            <BriefcaseIcon />
            <InfoLabel>Civil/Structural Engineering</InfoLabel>
          </ProfileInfoItem>
          <ProfileInfoItem>
            <MapIcon />
            <InfoLabel>Redeemer&apos;s University</InfoLabel>
          </ProfileInfoItem>
          <ProfileInfoItem>
            <LocationIcon />
            <InfoLabel>Abuja, Nigeria</InfoLabel>
          </ProfileInfoItem>
        </ProfileInfoList>
        <ProfileNetworks>100 networks</ProfileNetworks>
      </ProfileCard>

      {/* Stats Card */}
      <StatsCard>
        <StatRow top="20px">
          <StatLabel>Profile viewers</StatLabel>
          <StatValue>200</StatValue>
        </StatRow>
        <StatRow top="55px">
          <StatLabel>Post impressions</StatLabel>
          <StatValue>12,567</StatValue>
        </StatRow>
      </StatsCard>

      {/* Saved Items */}
      <SavedItemsCard>
        <img src={saveIcon} alt="bookmark icon" />
        <SavedItemsLabel>Saved items</SavedItemsLabel>
      </SavedItemsCard>

      {/* Footer Links */}
      <FooterWrapper>
        <FooterRow>
          <FooterLink>Terms of Service</FooterLink>
          <FooterDivider />
          <FooterLink>Privacy Policy</FooterLink>
          <FooterDivider />
          <FooterLink>Cookie Policy</FooterLink>
          <FooterDivider />
        </FooterRow>
        <FooterRow>
          <FooterLink>Accessibility</FooterLink>
          <FooterDivider />
          <FooterLink>Ads info</FooterLink>
          <FooterDivider />
          <FooterLink>More</FooterLink>
          <FooterDivider />
          <FooterLink>© 2026 Fixth Corp.</FooterLink>
        </FooterRow>
      </FooterWrapper>
    </SidebarWrapper>
  );
}




/* ── CSS Variables ── */
const theme = {
  lightAsh: "rgba(209, 209, 209, 1)",
  black: "rgba(31, 31, 31, 1)",
  blue: "rgba(75, 111, 187, 1)",
  grey: "rgba(127, 127, 127, 1)",
  backgroundWhite: "rgba(228, 228, 228, 1)",
};

/* ── Wrapper ── */
const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 272px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
`;



/* ──────────────────────────────────────────
   PROFILE CARD
────────────────────────────────────────── */
const ProfileCard = styled.div`
  width: 272px;
  height: 265px;
  border-radius: 12px;
  border: 1px solid ${theme.lightAsh};
  overflow: hidden;
  position: relative;
`;

const ProfileBanner = styled.div`
  width: 100%;
  height: 52px;
  background: #d9d9d9;
  position: absolute;
  top: 0;
  left: 0;
`;

const ProfileAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${theme.backgroundWhite};
  background: url("https://api.builder.io/api/v1/image/assets/TEMP/5540ac03551858fdafcf567953a1985342f381be?width=80")
    no-repeat center / cover;
  position: absolute;
  left: 16px;
  top: 33px;
`;

const ProfileName = styled.p`
  color: ${theme.black};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.7px;
  line-height: normal;
  position: absolute;
  left: 16px;
  top: 79px;
  margin: 0;
`;

const ProfileBio = styled.p`
  width: 240px;
  color: ${theme.black};
  font-size: 12px;
  font-weight: 480;
  letter-spacing: -0.6px;
  line-height: normal;
  position: absolute;
  left: 16px;
  top: 102px;
  margin: 0;
`;

const ProfileInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: absolute;
  left: 16px;
  top: 144px;
`;

const ProfileInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const InfoLabel = styled.span`
  color: #7f7f7f;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.05em;
`;

const ProfileNetworks = styled.p`
  color: ${theme.black};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.6px;
  line-height: normal;
  position: absolute;
  left: 16px;
  top: 228px;
  margin: 0;
`;

/* ──────────────────────────────────────────
   STATS CARD
────────────────────────────────────────── */
const StatsCard = styled.div`
  width: 272px;
  height: 90px;
  border-radius: 12px;
  border: 1px solid ${theme.lightAsh};
  position: relative;
`;

const StatRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
  top: ${({ top }) => top};
`;

const StatLabel = styled.span`
  color: ${theme.black};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.36px;
  line-height: normal;
`;

const StatValue = styled.span`
  color: ${theme.blue};
  font-size: 12px;
  font-weight: 550;
  letter-spacing: -0.6px;
  line-height: normal;
`;

/* ──────────────────────────────────────────
   SAVED ITEMS CARD
────────────────────────────────────────── */
const SavedItemsCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 272px;
  height: 38px;
  padding: 0 16px;
  border-radius: 12px;
  border: 1px solid ${theme.lightAsh};
  box-sizing: border-box;
`;

const SavedItemsLabel = styled.span`
  color: ${theme.black};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.6px;
  line-height: normal;
`;

/* ──────────────────────────────────────────
   GREY PILL (Rectangle 103)
────────────────────────────────────────── */
const GreyPill = styled.div`
  width: 272px;
  height: 32px;
  border-radius: 40px;
  background: #d9d9d9;
`;

/* ──────────────────────────────────────────
   FOOTER LINKS
────────────────────────────────────────── */
const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 259px;
`;

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FooterLink = styled.span`
  color: ${theme.grey};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: normal;
  cursor: pointer;
`;

const FooterDivider = styled.div`
  width: 1px;
  height: 8px;
  background: ${theme.lightAsh};
`;

/* ──────────────────────────────────────────
   ICONS
────────────────────────────────────────── */
const BriefcaseIcon = () => (
  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.8 4.72266H1.2C0.537258 4.72266 0 5.22011 0 5.83374V11.3892C0 12.0028 0.537258 12.5003 1.2 12.5003H10.8C11.4627 12.5003 12 12.0028 12 11.3892V5.83374C12 5.22011 11.4627 4.72266 10.8 4.72266Z"
      stroke="#7F7F7F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.39961 12.4998V3.61109C8.39961 3.31641 8.27318 3.0338 8.04814 2.82543C7.82309 2.61706 7.51787 2.5 7.19961 2.5H4.79961C4.48135 2.5 4.17613 2.61706 3.95108 2.82543C3.72604 3.0338 3.59961 3.31641 3.59961 3.61109V12.4998"
      stroke="#7F7F7F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MapIcon = () => (
  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 4.5V12.5L3.81818 10.5L8.18182 12.5L12 10.5V2.5L8.18182 4.5L3.81818 2.5L0 4.5Z"
      stroke="#7F7F7F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M3.81836 2.5V10.5" stroke="#7F7F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.18164 4.5V12.5" stroke="#7F7F7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LocationIcon = () => (
  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 6.90909C11 10.7273 6 14 6 14C6 14 1 10.7273 1 6.90909C1 5.60712 1.52678 4.35847 2.46447 3.43784C3.40215 2.51721 4.67392 2 6 2C7.32608 2 8.59785 2.51721 9.53553 3.43784C10.4732 4.35847 11 5.60712 11 6.90909Z"
      stroke="#7F7F7F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.99967 8.54519C6.92015 8.54519 7.66634 7.81256 7.66634 6.90882C7.66634 6.00509 6.92015 5.27246 5.99967 5.27246C5.0792 5.27246 4.33301 6.00509 4.33301 6.90882C4.33301 7.81256 5.0792 8.54519 5.99967 8.54519Z"
      stroke="#7F7F7F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BookmarkIcon = () => (
  <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 12L4.5 8.66667L0 12V1.33333C0 0.979711 0.135459 0.640573 0.376577 0.390524C0.617695 0.140476 0.944722 0 1.28571 0H7.71429C8.05528 0 8.3823 0.140476 8.62342 0.390524C8.86454 0.640573 9 0.979711 9 1.33333V12Z"
      stroke="#1F1F1F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);