import styled from "styled-components";
import dummyProfile from "../../../../assets/Images/dummyProfile.png";
import leftArrowIcon from "../../../../assets/Icons/leftArrowIcon.svg";
import plusIcon from "../../../../assets/Icons/plusIcon.svg";
import { inboxMessages, quickReplies } from "./inboxData";

export default function MessageThread({ thread, isMobile = false, onBack }) {
  if (!thread) {
    return null;
  }

  const messages = inboxMessages[thread.id] || inboxMessages["thread-1"] || [];

  return (
    <ThreadWrapper $mobile={isMobile}>
      <ThreadHeader>
        {isMobile ? (
          <button type="button" aria-label="go back" onClick={onBack}>
            <img src={leftArrowIcon} alt="go back" />
          </button>
        ) : null}
        <HeaderIdentity>
          <Avatar src={dummyProfile} alt={`${thread.name} avatar`} />
          <span>{thread.name}</span>
        </HeaderIdentity>
      </ThreadHeader>

      <DateDivider>
        <span>Thursday, Nov 11</span>
      </DateDivider>

      <Messages>
        {messages.map((message) => (
          <MessageRow key={message.id} $out={message.direction === "out"}>
            <Bubble $out={message.direction === "out"}>{message.text}</Bubble>
            <Time $out={message.direction === "out"}>{message.time}</Time>
          </MessageRow>
        ))}
      </Messages>

      <QuickReplyRow>
        {quickReplies.map((reply) => (
          <QuickChip key={reply}>{reply}</QuickChip>
        ))}
      </QuickReplyRow>

      <Composer $mobile={isMobile}>
        <button type="button" aria-label="add attachment">
          <img src={plusIcon} alt="add" />
        </button>
        <input type="text" placeholder="Write a message" />
        <MicButton type="button" aria-label="voice message">
          <MicIcon aria-hidden="true" />
        </MicButton>
      </Composer>
    </ThreadWrapper>
  );
}

const ThreadWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  border-radius: ${({ $mobile }) => ($mobile ? "0" : "12px")};
  border: ${({ $mobile }) => ($mobile ? "none" : "1px solid var(--light-ash)")};
  background: var(--background-white);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ThreadHeader = styled.header`
  height: 58px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  border-bottom: 1px solid var(--light-ash);
  button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--white);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const HeaderIdentity = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  span {
    font-size: 14px;
    font-weight: 600;
    color: var(--black);
  }
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const DateDivider = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  span {
    font-size: 12px;
    color: var(--grey);
    font-weight: 500;
  }
`;

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 16px 16px;
`;

const MessageRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ $out }) => ($out ? "flex-end" : "flex-start")};
  gap: 6px;
`;

const Bubble = styled.div`
  max-width: 70%;
  padding: 10px 14px;
  border-radius: 16px;
  background: ${({ $out }) => ($out ? "var(--blue)" : "var(--light-ash)")};
  color: ${({ $out }) => ($out ? "var(--background-white)" : "var(--black)")};
  font-size: 13px;
  line-height: 1.4;
`;

const Time = styled.span`
  font-size: 11px;
  color: var(--grey);
  text-align: ${({ $out }) => ($out ? "right" : "left")};
`;

const QuickReplyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 16px 12px;
  flex-wrap: wrap;
`;

const QuickChip = styled.button`
  border-radius: 999px;
  padding: 6px 12px;
  background: var(--white);
  border: 1px solid var(--light-ash);
  font-size: 12px;
  color: var(--black);
`;

const Composer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-top: 1px solid var(--light-ash);
  background: var(--light-ash);
  position: ${({ $mobile }) => ($mobile ? "fixed" : "sticky")};
  bottom: ${({ $mobile }) => ($mobile ? "70px" : "0")};
  left: 0;
  right: 0;
  input {
    flex: 1;
    height: 36px;
    border-radius: 999px;
    border: none;
    padding: 0 14px;
    font-size: 12px;
    background: var(--background-white);
    &:focus {
      outline: none;
      border: 1px solid var(--blue);
    }
  }
  button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--background-white);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 700px) {
    padding-bottom: 16px;
  }
`;

const MicButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--background-white);
`;

const MicIcon = styled.span`
  width: 14px;
  height: 18px;
  display: inline-block;
  background: #7f7f7f;
  mask: url("data:image/svg+xml,%3Csvg width='14' height='18' viewBox='0 0 14 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='3' y='1' width='8' height='10' rx='4' stroke='%237F7F7F' stroke-width='1.6'/%3E%3Cpath d='M1 8.5V9.5C1 12.5376 3.46243 15 6.5 15C9.53757 15 12 12.5376 12 9.5V8.5' stroke='%237F7F7F' stroke-width='1.6' stroke-linecap='round'/%3E%3Cpath d='M6.5 15V17' stroke='%237F7F7F' stroke-width='1.6' stroke-linecap='round'/%3E%3Cpath d='M4.5 17H8.5' stroke='%237F7F7F' stroke-width='1.6' stroke-linecap='round'/%3E%3C/svg%3E")
    no-repeat center;
`;
