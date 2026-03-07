import styled from 'styled-components'
import settingsIcon from '../../../assets/Icons/settingsIcon.svg'
import notificationIcon from '../../../assets/Icons/notificationIcon.svg'
import inboxIcon from '../../../assets/Icons/inboxIcon.svg'
import homeIcon from '../../../assets/Icons/homeIcon.svg'
import caseIcon from '../../../assets/Icons/case.svg'
import dummyPP from '../../../assets/Images/dummyProfile.png'
import { SIDEBAR_TABS, TAB_IDS } from './navigationTabs'

const iconMap = {
  home: homeIcon,
  jobs: caseIcon,
  notifications: notificationIcon,
  inbox: inboxIcon,
}

export default function Sidebar({ activeTab, onTabChange }) {
  return (
    <NavWrapper>
      <NavGroup>
        {SIDEBAR_TABS.map((tab) => (
          <NavItem
            key={tab.id}
            $active={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
          >
            <NavItemContent>
              {tab.icon === 'profile' ? (
                <Avatar src={dummyPP} alt="profile tab" />
              ) : (
                <img src={iconMap[tab.icon]} alt={`${tab.label} icon`} />
              )}
              <NavLabel $active={activeTab === tab.id}>{tab.label}</NavLabel>
            </NavItemContent>
          </NavItem>
        ))}
      </NavGroup>

      <PostButtonWrap>
        <PostBtn>Post</PostBtn>
      </PostButtonWrap>

      <NavItem
        $active={activeTab === TAB_IDS.settings}
        onClick={() => onTabChange(TAB_IDS.settings)}
      >
        <NavItemContent>
          <img src={settingsIcon} alt="settings icon" />
          <NavLabel $active={activeTab === TAB_IDS.settings}>Settings</NavLabel>
        </NavItemContent>
      </NavItem>
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-right: 50px;
  @media (max-width: 850px){
    display: none;
  }
`

const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const NavItem = styled.button`
  width: 132px;
  height: 32px;
  border-radius: 40px;
  background: ${({ $active }) => ($active ? '#D9D9D9' : 'rgba(228, 228, 228, 1)')};
  display: flex;
  align-items: center;
  padding: 0;
`

const NavItemContent = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding-left: 10px;
`

const NavLabel = styled.span`
  color: rgba(31, 31, 31, 1);
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? '600' : '500')};
  line-height: normal;
`

const PostButtonWrap = styled.div`
  width: 132px;
  margin: 28px 0;
`

const PostBtn = styled.button`
  background-color: var(--blue);
  width: 100%;
  color: var(--background-white);
  height: 32px;
  border-radius: 20px;
`

const Avatar = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
`

