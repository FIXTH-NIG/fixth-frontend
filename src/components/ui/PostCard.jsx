import styled from "styled-components";
import heartIcon from "../../assets/Icons/heartIcon.svg"
import messangerIcon from "../../assets/Icons/messangerIcon.svg"
import shareIcon from "../../assets/Icons/shareIcon.svg"
import bookmarkIcon from "../../assets/Icons/bookmarkIcon.svg"
import ellipsisIcon from "../../assets/Icons/ellipsis.svg"
import horizontalEllipsisIcon from "../../assets/Icons/horizontalEllipsis.svg"

function PostCard() {
  return (
    <Card>
      <Avatar />
      <Info>
            <UserInfo>
                <UserInfoSec>
                    <UserNameRow>
                        <UserName>Beatrice Anah</UserName>
                        <Dot />
                        <TimeStamp>2h ago</TimeStamp>
                    </UserNameRow>
                <   Profession>Mechanical Engineering</Profession>
                </UserInfoSec>
                <Network>
                    Network
                </Network>
            </UserInfo>

            <PostText>
                Hey guys, it was my first day working at Cloud- flare and i pushed a code today 😁😁
            </PostText>

            <ActionsRow>
                <ActionGroup>
                {/* Like */}
                <ActionItem>
                    <img src={heartIcon} alt="like button" />
                    <ActionCount>12</ActionCount>
                </ActionItem>

                {/* Comment */}
                <ActionItem>
                    <img src={messangerIcon} alt="comment icon" />
                    <ActionCount>4</ActionCount>
                </ActionItem>

                {/* Bookmark */}
                <ActionItem>
                    <img src={bookmarkIcon} alt="save icon" />
                    <ActionCount>2</ActionCount>
                </ActionItem>
                </ActionGroup>

                {/* Share */}
                <img src={shareIcon} alt="share icon" />
            </ActionsRow>
      </Info>
    </Card>
  );
}


const Card = styled.div`
  width: 100%;
  height: fit-content;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  border: 2px solid var(--light-ash);
  border-top: none;
  display: flex;
  gap: 6px;
  padding: 16px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 90%;
`

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: url("https://api.builder.io/api/v1/image/assets/TEMP/b17fba4999daa29d585f9257036b0154c976037f?width=72")
    no-repeat center / cover;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfoSec = styled.div`
    display: flex;
    flex-direction: column;
`

const UserNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
`;

const UserName = styled.span`
  color: rgba(31, 31, 31, 1);
  font-size: 14px;
  font-weight: 550;
  letter-spacing: -0.7px;
`;

const Dot = styled.span`
  width: 2px;
  height: 2px;
  background: rgba(127, 127, 127, 1);
  border-radius: 50%;
  display: inline-block;
  margin: 0 6px;
`;

const TimeStamp = styled.span`
  color: rgba(127, 127, 127, 1);
  font-size: 12px;
  font-weight: 550;
  letter-spacing: -0.6px;
`;

const Profession = styled.div`
  color: rgba(127, 127, 127, 1);
  font-size: 12px;
  font-weight: 450;
  letter-spacing: -0.6px;
`;

const Network = styled.button`
    font-size: 12px;
    background-color: var(--light-ash);
    padding: 6px 12px;
    font-weight: 500;
    border: none;
    border-radius: 20px;
`

const PostText = styled.div`
  width: 100%;
  color: var(--black);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.7px;

`;

const ActionsRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
`;

const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const ActionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ActionCount = styled.span`
  color: rgba(31, 31, 31, 1);
  font-size: 13px;
  font-weight: 500;
  line-height: 116.327%;
  letter-spacing: -0.65px;
`;



export default PostCard;
