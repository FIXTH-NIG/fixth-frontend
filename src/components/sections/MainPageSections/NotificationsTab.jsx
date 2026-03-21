import { useMemo, useState } from "react";
import styled from "styled-components";
import leftArrowIcon from "../../../assets/Icons/leftArrowIcon.svg";
import settingsIcon from "../../../assets/Icons/settingsIcon.svg";
import ellipsisIcon from "../../../assets/Icons/ellipsis.svg";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "jobs", label: "Jobs" },
  { id: "posts", label: "Posts" },
  { id: "articles", label: "Articles" },
];

const NOTIFICATIONS = [
  {
    id: "notif-1",
    text: "Chidera Okoye (UNN Civil '24) just got hired at Setraco",
    time: "7m",
    type: "jobs",
  },
  {
    id: "notif-2",
    text: "Chidera Okoye posted",
    time: "7m",
    type: "posts",
  },
  {
    id: "notif-3",
    text: "Chidera Okoye (UNN Civil '24) just got hired at Setraco",
    time: "7m",
    type: "jobs",
  },
  {
    id: "notif-4",
    text: "Chidera Okoye (UNN Civil '24) just got hired at Setraco",
    time: "7m",
    type: "jobs",
  },
  {
    id: "notif-5",
    text: "Chidera Okoye (UNN Civil '24) just got hired at Setraco",
    time: "7m",
    type: "jobs",
  },
  {
    id: "notif-6",
    text: "Chidera Okoye (UNN Civil '24) just got hired at Setraco",
    time: "7m",
    type: "jobs",
  },
  {
    id: "notif-7",
    text: "Chidera Okoye (UNN Civil '24) just got hired at Setraco and posted for the very first time",
    time: "7m",
    type: "posts",
  },
  {
    id: "notif-8",
    text: "Chidera Okoye (UNN Civil '24) just got hired at Setraco",
    time: "7m",
    type: "jobs",
  },
  {
    id: "notif-9",
    text: "Chidera Okoye (UNN Civil '24) just got hired at Setraco",
    time: "7m",
    type: "jobs",
  },
  {
    id: "notif-10",
    text: "Chidera Okoye (UNN Civil '24) just got hired at Setraco",
    time: "7m",
    type: "jobs",
  },
  {
    id: "notif-11",
    text: "Chidera Okoye (UNN Civil '24) just got hired at Setraco",
    time: "7m",
    type: "jobs",
  },
];

export default function NotificationsTab() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredNotifications = useMemo(() => {
    if (activeFilter === "all") {
      return NOTIFICATIONS;
    }

    return NOTIFICATIONS.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  return (
    <NotificationsWrapper>
      <MobileHeader>
        <button type="button" aria-label="go back">
          <img src={leftArrowIcon} alt="go back" />
        </button>
        <span>Notifications</span>
        <button type="button" aria-label="notification settings">
          <img src={settingsIcon} alt="settings" />
        </button>
      </MobileHeader>

      <FilterRow>
        {FILTERS.map((filter) => (
          <FilterButton
            key={filter.id}
            type="button"
            $active={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
          >
            {activeFilter === filter.id ? (
              <CheckIcon aria-hidden="true" />
            ) : null}
            {filter.label}
          </FilterButton>
        ))}
      </FilterRow>

      <List>
        {filteredNotifications.map((item) => (
          <NotificationRow key={item.id}>
            <Avatar />
            <NotificationText>{item.text}</NotificationText>
            <MetaColumn>
              <Time>{item.time}</Time>
              <MenuButton type="button" aria-label="notification options">
                <img src={ellipsisIcon} alt="options" />
              </MenuButton>
            </MetaColumn>
          </NotificationRow>
        ))}
      </List>
    </NotificationsWrapper>
  );
}

const NotificationsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: var(--background-white);
  border-radius: 12px;
  border: 1px solid var(--light-ash);
  overflow: hidden;
  @media (max-width: 700px) {
    border: none;
    border-radius: 0;
  }
`;

const MobileHeader = styled.header`
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-bottom: 1px solid var(--light-ash);
  background: var(--background-white);
  span {
    font-size: 16px;
    font-weight: 600;
    color: var(--black);
  }
  button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--white);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 700px) {
    display: flex;
  }
`;

const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--light-ash);
  @media (max-width: 700px) {
    display: none;
  }
`;

const FilterButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid var(--light-ash);
  background: ${({ $active }) => ($active ? "var(--blue)" : "transparent")};
  color: ${({ $active }) => ($active ? "var(--background-white)" : "var(--black)")};
  font-size: 12px;
  font-weight: 500;
`;

const CheckIcon = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  position: relative;
  &::before {
    content: "";
    width: 6px;
    height: 3px;
    border-left: 2px solid var(--background-white);
    border-bottom: 2px solid var(--background-white);
    transform: rotate(-45deg);
    margin-top: -1px;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const NotificationRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 14px;
  border-bottom: 1px solid var(--light-ash);
  background: var(--background-white);
`;

const Avatar = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #d9d9d9;
  flex-shrink: 0;
`;

const NotificationText = styled.p`
  margin: 0;
  color: var(--black);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  flex: 1;
`;

const MetaColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  margin-left: auto;
`;

const Time = styled.span`
  color: var(--grey);
  font-size: 12px;
  font-weight: 500;
`;

const MenuButton = styled.button`
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
