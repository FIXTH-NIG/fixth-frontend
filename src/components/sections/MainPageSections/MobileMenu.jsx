import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import homeIcon from '../../../assets/Icons/homeIcon.svg'
import caseIcon from '../../../assets/Icons/case.svg'
import inboxIcon from '../../../assets/Icons/inboxIcon.svg'
import dummyPP from '../../../assets/Images/dummyProfile.png'
import { MOBILE_TABS } from './navigationTabs'

const iconMap = {
  home: homeIcon,
  jobs: caseIcon,
  inbox: inboxIcon,
}

export default function MobileMenu() {
  return (
    <MobileMenuWrap>
      {MOBILE_TABS.map((tab) => (
        <MenuItem
          key={tab.id}
          to={tab.to}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {tab.icon === 'profile' ? (
            <img src={dummyPP} alt="profile tab" width="22" height="22" />
          ) : (
            <img src={iconMap[tab.icon]} alt={`${tab.label} tab`} width="18" height="16" />
          )}
          <span>{tab.label}</span>
        </MenuItem>
      ))}
    </MobileMenuWrap>
  )
}

const MobileMenuWrap = styled.section`
  outline: 2px red;
  height: 69px;
  background-color: var(--white);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;
  z-index: 20;
  border-top: 1px solid var(--light-ash);
  @media (max-width: 410px){
    gap: 40px;
  }
`

const MenuItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
  align-items: center;
  color: var(--black);
  font-weight: 500;
  text-decoration: none;

  &.active {
    color: var(--blue);
    font-weight: 600;
  }
`
