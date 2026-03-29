import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import dummyProfile from "../../../../assets/Images/dummyProfile.png";
import leftArrowIcon from "../../../../assets/Icons/leftArrowIcon.svg";
import { inboxMessages } from "../../../../data/mock";
import micIcon from "../../../../assets/Icons/mic.svg"
import uploadIcon from "../../../../assets/Icons/plusUpload.svg"

export default function MessageThread({ thread, isMobile = false }) {
  const navigate = useNavigate();

  if (!thread) {
    return null;
  }

  const messages = inboxMessages[thread.id] || inboxMessages["thread-1"] || [];

  const handleBack = () => {
    navigate('..', { relative: 'path' });
  };

  return (
    <ThreadWrapper $mobile={isMobile}>
      <ThreadHeader>
        {isMobile ? (
          <button type="button" aria-label="go back" onClick={handleBack}>
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

      <Composer $mobile={isMobile}>
        <div className="composerContainer">
          <button type="button" aria-label="add attachment">
            <img src={uploadIcon} alt="add" />
          </button>
          <input type="text" id="messageBox" placeholder="Write a message" />
          <button type="button" aria-label="Record voice note">
            <img src={micIcon} alt="record" />
          </button>
        </div>
      </Composer>
    </ThreadWrapper>
  );
}

const ThreadWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 0;
  max-height: 600px;
  border-radius: ${({ $mobile }) => ($mobile ? "0" : "12px")};
  border: ${({ $mobile }) => ($mobile ? "none" : "1px solid var(--light-ash)")};
  background: var(--background-white);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  @media (max-width: 700px) {
    max-height: none;
  }
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
  padding: 8px 16px 16px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
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


const Composer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  background: var(--light-ash);
  bottom: ${({ $mobile }) => ($mobile ? "70px" : "0")};
  @media (max-width: 750px){
    background: var(--background-white);
    padding: 0 14px 10px 14px;
  }
  .composerContainer{
    display: flex;
    align-items: center;
    width:100%;
    gap: 10px;
    background: var(--light-ash);
    @media (max-width: 750px){
      border-radius: 40px;
      gap: 5px;
      padding: 0 5px 0 5px;
    }
  }
  input {
    flex: 1;
    height: 36px;
    border-radius: 999px;
    border: none;
    font-size: 12px;
    background: var(--light-ash);
    &:focus {
      outline: none;
    }
  }
  button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;
