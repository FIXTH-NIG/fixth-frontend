import styled from "styled-components";
import settingsIcon from "../../../assets/Icons/settingsIcon.svg"
import notificationIcon from "../../../assets/Icons/notificationIcon.svg"
import inboxIcon from "../../../assets/Icons/inboxIcon.svg"
import homeIcon from "../../../assets/Icons/homeIcon.svg"
import caseIcon from "../../../assets/Icons/case.svg"

// const Nav = styled.nav`
//   width: 132px;
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
//   font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
// `;

const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;


const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-right: 50px;
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

const PostBtn = styled.button`
    background-color: var(--blue);
    width: 100%;
    color: var(--background-white);
    height: 32px;
    padding: auto;
    border-radius: 20px;
    margin-top: 28px;
    margin-bottom: 28px;
`

const Avatar = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: url("https://api.builder.io/api/v1/image/assets/TEMP/57dc39a184100b8831f4938b715685eb95788506?width=44")
    no-repeat center / cover;
  flex-shrink: 0;
`;


export default function Sidebar() {
  return (
    <NavWrapper>
      <NavGroup>
        <NavItem active>
          <NavItemContent pl="10px" gap="14px">
            <img src={homeIcon} alt="home icon" />
            <NavLabel active>Home</NavLabel>
          </NavItemContent>
        </NavItem>

        <NavItem>
          <NavItemContent pl="8px" gap="12px">
            <img src={caseIcon} alt="job icon" />
            <NavLabel>Jobs</NavLabel>
          </NavItemContent>
        </NavItem>

        <NavItem>
          <NavItemContent pl="11px" gap="14px">
            <img src={notificationIcon} alt="notification icon" />
            <NavLabel>Notifications</NavLabel>
          </NavItemContent>
        </NavItem>

        <NavItem>
          <NavItemContent pl="9px" gap="13px">
            <img src={inboxIcon} alt="inbox icon" />
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

      <NavItem className="post" style={{margin:"28px 0 28px 0"}}>
        <PostBtn>
            Post
        </PostBtn>
      </NavItem>

      <NavItem>
        <NavItemContent pl="9px" gap="13px">
          <img src={settingsIcon} alt="settings icon" />
          <NavLabel>Settings</NavLabel>
        </NavItemContent>
      </NavItem>
    </NavWrapper>
  );
}
