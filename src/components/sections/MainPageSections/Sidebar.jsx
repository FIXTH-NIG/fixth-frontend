import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import settingsIcon from '../../../assets/Icons/settingsIcon.svg'
import notificationIcon from '../../../assets/Icons/notificationIcon.svg'
import inboxIcon from '../../../assets/Icons/inboxIcon.svg'
import homeIcon from '../../../assets/Icons/homeIcon.svg'
import caseIcon from '../../../assets/Icons/case.svg'
import dummyPP from '../../../assets/Images/dummyProfile.png'
import { ROUTES } from '../../../routes'
import { SIDEBAR_TABS } from './navigationTabs'

const iconMap = {
  home: homeIcon,
  jobs: caseIcon,
  notifications: notificationIcon,
  inbox: inboxIcon,
}

export default function Sidebar() {
  return (
    <NavWrapper>
      <NavGroup>
        {SIDEBAR_TABS.map((tab) => (
          <NavItem
            key={tab.id}
            to={tab.to}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <NavItemContent>
              {tab.icon === 'profile' ? (
                <Avatar src={dummyPP} alt="profile tab" />
              ) : (
                <img src={iconMap[tab.icon]} alt={`${tab.label} icon`} />
              )}
              <NavLabel>{tab.label}</NavLabel>
            </NavItemContent>
          </NavItem>
        ))}
      </NavGroup>

      <PostButtonWrap>
        <PostBtn>Post</PostBtn>
      </PostButtonWrap>

      <NavItem
        to={ROUTES.appSettings}
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <NavItemContent>
          <img src={settingsIcon} alt="settings icon" />
          <NavLabel>Settings</NavLabel>
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

const NavItem = styled(NavLink)`
  width: 132px;
  height: 32px;
  border-radius: 40px;
  background: rgba(228, 228, 228, 1);
  display: flex;
  align-items: center;
  padding: 0;
  text-decoration: none;

  &.active {
    background: #D9D9D9;
  }
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
  font-weight: 500;
  line-height: normal;

  ${NavItem}.active & {
    font-weight: 600;
  }
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
