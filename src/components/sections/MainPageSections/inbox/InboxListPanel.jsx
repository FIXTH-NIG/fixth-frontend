import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { inboxThreads } from "../../../../data/mock";
import { ROUTES } from "../../../../routes";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "unread", label: "Unread" },
];

export default function InboxListPanel({ activeThreadId }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();

  const filteredThreads = useMemo(() => {
    if (activeFilter === "all") {
      return inboxThreads;
    }

    return inboxThreads.filter((thread) => thread.unread);
  }, [activeFilter]);

  const handleSelectThread = (threadId) => {
    navigate(ROUTES.appThread(threadId));
  };

  return (
    <Panel>
      <SearchBar>
        <input type="text" placeholder="Search messages" />
        <SearchIcon aria-hidden="true" />
      </SearchBar>

      <FilterRow>
        {FILTERS.map((filter) => (
          <FilterButton
            key={filter.id}
            type="button"
            $active={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
          >
            {activeFilter === filter.id ? <CheckIcon aria-hidden="true" /> : null}
            {filter.label}
          </FilterButton>
        ))}
      </FilterRow>

      <List>
        {filteredThreads.map((thread) => (
          <ThreadRow
            key={thread.id}
            type="button"
            onClick={() => handleSelectThread(thread.id)}
            $active={activeThreadId === thread.id}
          >
            <Avatar />
            <ThreadInfo>
              <NameRow>
                <ThreadName>{thread.name}</ThreadName>
                {thread.verified ? <VerifiedBadge aria-hidden="true" /> : null}
              </NameRow>
              <PreviewText>{thread.preview}</PreviewText>
            </ThreadInfo>
            <MetaColumn>
              <Time>{thread.time}</Time>
              {thread.unread ? <UnreadDot /> : null}
            </MetaColumn>
          </ThreadRow>
        ))}
      </List>
    </Panel>
  );
}

const Panel = styled.div`
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--light-ash);
  background: var(--background-white);
  overflow: hidden;
  @media (max-width: 700px) {
    border: none;
    border-radius: 0;
  }
`;

const SearchBar = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--light-ash);
  input {
    width: 100%;
    border-radius: 999px;
    height: 32px;
    border: none;
    background: var(--light-ash);
    padding: 0 14px 0 32px;
    font-size: 12px;
    color: var(--black);
    &::placeholder {
      color: var(--grey);
    }
    &:focus {
      outline: none;
      border: 1px solid var(--blue);
    }
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  width: 14px;
  height: 14px;
  margin-left: 20px;
  background: #7f7f7f;
  mask: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.41667 11.25C9.08405 11.25 11.25 9.08405 11.25 6.41667C11.25 3.74929 9.08405 1.58333 6.41667 1.58333C3.74929 1.58333 1.58333 3.74929 1.58333 6.41667C1.58333 9.08405 3.74929 11.25 6.41667 11.25Z' stroke='%237F7F7F' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12.4167 12.4167L9.5 9.5' stroke='%237F7F7F' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")
    no-repeat center;
`;

const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--light-ash);
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

const ThreadRow = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-bottom: 1px solid var(--light-ash);
  background: ${({ $active }) => ($active ? "rgba(228, 228, 228, 0.6)" : "transparent")};
  text-align: left;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #d9d9d9;
  flex-shrink: 0;
`;

const ThreadInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ThreadName = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: var(--black);
`;

const VerifiedBadge = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--blue);
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 3px;
    border-left: 1.6px solid var(--background-white);
    border-bottom: 1.6px solid var(--background-white);
    transform: rotate(-45deg);
    top: 3px;
    left: 3px;
  }
`;

const PreviewText = styled.span`
  font-size: 12px;
  color: var(--grey);
`;

const MetaColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
`;

const Time = styled.span`
  font-size: 11px;
  color: var(--grey);
`;

const UnreadDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--blue);
`;
