import styled from "styled-components";

const Nav = styled.nav`
  width: 132px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
`;

const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Spacer = styled.div`
  flex: 1;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 320px;
`;

const NavItem = styled.div`
  width: 132px;
  height: 32px;
  border-radius: 40px;
  background: ${({ active }) => (active ? "#D9D9D9" : "rgba(228, 228, 228, 1)")};
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
`;

const NavItemContent = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ gap }) => gap || "14px"};
  padding-left: ${({ pl }) => pl || "10px"};
`;

const NavLabel = styled.span`
  color: rgba(31, 31, 31, 1);
  font-size: 14px;
  font-weight: ${({ active }) => (active ? "600" : "500")};
  letter-spacing: -0.05em;
  line-height: normal;
`;

const Avatar = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: url("https://api.builder.io/api/v1/image/assets/TEMP/57dc39a184100b8831f4938b715685eb95788506?width=44")
    no-repeat center / cover;
  flex-shrink: 0;
`;

const HomeIcon = () => (
  <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 6.1L7 0.5L14 6.1V14.9C14 15.3243 13.8361 15.7313 13.5444 16.0314C13.2527 16.3314 12.857 16.5 12.4444 16.5H1.55556C1.143 16.5 0.747335 16.3314 0.455612 16.0314C0.163888 15.7313 0 15.3243 0 14.9V6.1Z"
      stroke="#1F1F1F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.66699 16.5V8.5H9.33366V16.5"
      stroke="#1F1F1F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const JobsIcon = () => (
  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.2 4.05566H1.8C0.805887 4.05566 0 4.8516 0 5.83344V14.7223C0 15.7042 0.805887 16.5001 1.8 16.5001H16.2C17.1941 16.5001 18 15.7042 18 14.7223V5.83344C18 4.8516 17.1941 4.05566 16.2 4.05566Z"
      stroke="#1F1F1F"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6004 16.5V2.27778C12.6004 1.80628 12.4107 1.3541 12.0732 1.0207C11.7356 0.687301 11.2778 0.5 10.8004 0.5H7.20039C6.723 0.5 6.26516 0.687301 5.9276 1.0207C5.59003 1.3541 5.40039 1.80628 5.40039 2.27778V16.5"
      stroke="#1F1F1F"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NotificationsIcon = () => (
  <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.8333 5.30072C10.8333 4.02749 10.3768 2.80641 9.56413 1.9061C8.75147 1.00579 7.64927 0.5 6.5 0.5C5.35073 0.5 4.24853 1.00579 3.43587 1.9061C2.62321 2.80641 2.16667 4.02749 2.16667 5.30072C2.16667 10.9016 0 12.5018 0 12.5018H13C13 12.5018 10.8333 10.9016 10.8333 5.30072Z"
      stroke="#1F1F1F"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.74986 15.7031C7.62289 15.9456 7.44064 16.1469 7.22136 16.2868C7.00208 16.4268 6.75347 16.5004 6.50042 16.5004C6.24737 16.5004 5.99876 16.4268 5.77948 16.2868C5.5602 16.1469 5.37795 15.9456 5.25098 15.7031"
      stroke="#1F1F1F"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InboxIcon = () => (
  <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.6 0H14.4C15.28 0 16 0.675 16 1.5V10.5C16 11.325 15.28 12 14.4 12H1.6C0.72 12 0 11.325 0 10.5V1.5C0 0.675 0.72 0 1.6 0Z"
      stroke="#1F1F1F"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 1.5L8 6.75L0 1.5"
      stroke="#1F1F1F"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.00018 10.182C9.20516 10.182 10.182 9.20516 10.182 8.00018C10.182 6.79519 9.20516 5.81836 8.00018 5.81836C6.79519 5.81836 5.81836 6.79519 5.81836 8.00018C5.81836 9.20516 6.79519 10.182 8.00018 10.182Z"
      stroke="#1F1F1F"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3818 10.1818C13.285 10.4012 13.2561 10.6445 13.2989 10.8804C13.3417 11.1164 13.4542 11.3341 13.6218 11.5055L13.6655 11.5491C13.8007 11.6842 13.908 11.8446 13.9812 12.0212C14.0544 12.1978 14.0921 12.387 14.0921 12.5782C14.0921 12.7693 14.0544 12.9586 13.9812 13.1352C13.908 13.3118 13.8007 13.4722 13.6655 13.6073C13.5304 13.7425 13.3699 13.8498 13.1934 13.923C13.0168 13.9962 12.8275 14.0339 12.6364 14.0339C12.4452 14.0339 12.2559 13.9962 12.0794 13.923C11.9028 13.8498 11.7424 13.7425 11.6073 13.6073L11.5636 13.5636C11.3922 13.396 11.1745 13.2835 10.9386 13.2407C10.7027 13.1979 10.4594 13.2268 10.24 13.3236C10.0249 13.4158 9.84144 13.5689 9.71222 13.764C9.58301 13.9591 9.51366 14.1878 9.51273 14.4218V14.5455C9.51273 14.9312 9.35948 15.3012 9.0867 15.574C8.81392 15.8468 8.44395 16 8.05818 16C7.67241 16 7.30244 15.8468 7.02966 15.574C6.75688 15.3012 6.60364 14.9312 6.60364 14.5455V14.48C6.59801 14.2393 6.52009 14.0058 6.38001 13.81C6.23993 13.6141 6.04417 13.4649 5.81818 13.3818C5.59882 13.285 5.3555 13.2561 5.11957 13.2989C4.88365 13.3417 4.66595 13.4542 4.49455 13.6218L4.45091 13.6655C4.31582 13.8007 4.1554 13.908 3.97882 13.9812C3.80224 14.0544 3.61297 14.0921 3.42182 14.0921C3.23067 14.0921 3.04139 14.0544 2.86481 13.9812C2.68824 13.908 2.52782 13.8007 2.39273 13.6655C2.25749 13.5304 2.1502 13.3699 2.077 13.1934C2.00381 13.0168 1.96613 12.8275 1.96613 12.6364C1.96613 12.4452 2.00381 12.2559 2.077 12.0794C2.1502 11.9028 2.25749 11.7424 2.39273 11.6073L2.43636 11.5636C2.60403 11.3922 2.7165 11.1745 2.75928 10.9386C2.80205 10.7027 2.77317 10.4594 2.67636 10.24C2.58417 10.0249 2.43109 9.84144 2.23597 9.71222C2.04085 9.58301 1.81221 9.51366 1.57818 9.51273H1.45455C1.06878 9.51273 0.698807 9.35948 0.426027 9.0867C0.153246 8.81392 0 8.44395 0 8.05818C0 7.67241 0.153246 7.30244 0.426027 7.02966C0.698807 6.75688 1.06878 6.60364 1.45455 6.60364H1.52C1.76072 6.59801 1.99419 6.52009 2.19004 6.38001C2.38589 6.23993 2.53507 6.04417 2.61818 5.81818C2.71499 5.59882 2.74387 5.3555 2.70109 5.11957C2.65832 4.88365 2.54585 4.66595 2.37818 4.49455L2.33455 4.45091C2.19931 4.31582 2.09202 4.1554 2.01882 3.97882C1.94562 3.80224 1.90795 3.61297 1.90795 3.42182C1.90795 3.23067 1.94562 3.04139 2.01882 2.86481C2.09202 2.68824 2.19931 2.52782 2.33455 2.39273C2.46963 2.25749 2.63005 2.1502 2.80663 2.077C2.98321 2.00381 3.17249 1.96613 3.36364 1.96613C3.55479 1.96613 3.74406 2.00381 3.92064 2.077C4.09722 2.1502 4.25764 2.25749 4.39273 2.39273L4.43636 2.43636C4.60777 2.60403 4.82547 2.7165 5.06139 2.75928C5.29731 2.80205 5.54064 2.77317 5.76 2.67636H5.81818C6.03329 2.58417 6.21674 2.43109 6.34596 2.23597C6.47518 2.04085 6.54452 1.81221 6.54545 1.57818V1.45455C6.54545 1.06878 6.6987 0.698807 6.97148 0.426027C7.24426 0.153246 7.61423 0 8 0C8.38577 0 8.75574 0.153246 9.02852 0.426027C9.3013 0.698807 9.45455 1.06878 9.45455 1.45455V1.52C9.45548 1.75403 9.52482 1.98267 9.65404 2.17779C9.78326 2.37291 9.96671 2.52599 10.1818 2.61818C10.4012 2.71499 10.6445 2.74387 10.8804 2.70109C11.1164 2.65832 11.3341 2.54585 11.5055 2.37818L11.5491 2.33455C11.6842 2.19931 11.8446 2.09202 12.0212 2.01882C12.1978 1.94562 12.387 1.90795 12.5782 1.90795C12.7693 1.90795 12.9586 1.94562 13.1352 2.01882C13.3118 2.09202 13.4722 2.19931 13.6073 2.33455C13.7425 2.46963 13.8498 2.63005 13.923 2.80663C13.9962 2.98321 14.0339 3.17249 14.0339 3.36364C14.0339 3.55479 13.9962 3.74406 13.923 3.92064C13.8498 4.09722 13.7425 4.25764 13.6073 4.39273L13.5636 4.43636C13.396 4.60777 13.2835 4.82547 13.2407 5.06139C13.1979 5.29731 13.2268 5.54064 13.3236 5.76V5.81818C13.4158 6.03329 13.5689 6.21674 13.764 6.34596C13.9591 6.47518 14.1878 6.54452 14.4218 6.54545H14.5455C14.9312 6.54545 15.3012 6.6987 15.574 6.97148C15.8468 7.24426 16 7.61423 16 8C16 8.38577 15.8468 8.75574 15.574 9.02852C15.3012 9.3013 14.9312 9.45455 14.5455 9.45455H14.48C14.246 9.45548 14.0173 9.52482 13.8222 9.65404C13.6271 9.78326 13.474 9.96671 13.3818 10.1818Z"
      stroke="#1F1F1F"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Sidebar() {
  return (
    <NavWrapper>
      <NavGroup>
        <NavItem active>
          <NavItemContent pl="10px" gap="14px">
            <HomeIcon />
            <NavLabel active>Home</NavLabel>
          </NavItemContent>
        </NavItem>

        <NavItem>
          <NavItemContent pl="8px" gap="12px">
            <JobsIcon />
            <NavLabel>Jobs</NavLabel>
          </NavItemContent>
        </NavItem>

        <NavItem>
          <NavItemContent pl="11px" gap="14px">
            <NotificationsIcon />
            <NavLabel>Notifications</NavLabel>
          </NavItemContent>
        </NavItem>

        <NavItem>
          <NavItemContent pl="9px" gap="13px">
            <InboxIcon />
            <NavLabel>Inbox</NavLabel>
          </NavItemContent>
        </NavItem>

        <NavItem>
          <NavItemContent pl="6px" gap="10px">
            <Avatar />
            <NavLabel>Profile</NavLabel>
          </NavItemContent>
        </NavItem>
      </NavGroup>

      <Spacer />

      <NavItem>
        <NavItemContent pl="9px" gap="13px">
          <SettingsIcon />
          <NavLabel>Settings</NavLabel>
        </NavItemContent>
      </NavItem>
    </NavWrapper>
  );
}
