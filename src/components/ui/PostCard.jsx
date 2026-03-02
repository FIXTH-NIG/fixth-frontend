import styled from "styled-components";

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
                    <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ stroke: "rgba(31,31,31,1)", strokeWidth: "1.5px" }}
                    >
                    <path
                        d="M11.9976 1.06089C11.6799 0.724555 11.3028 0.457752 10.8877 0.275722C10.4726 0.0936915 10.0276 0 9.57832 0C9.129 0 8.68407 0.0936915 8.26897 0.275722C7.85386 0.457752 7.47671 0.724555 7.15907 1.06089L6.49983 1.75857L5.8406 1.06089C5.19898 0.381838 4.32874 0.000351975 3.42135 0.000351982C2.51395 0.000351989 1.64372 0.381838 1.00209 1.06089C0.360462 1.73994 6.76064e-09 2.66092 0 3.62124C-6.76064e-09 4.58157 0.360462 5.50255 1.00209 6.1816L1.66132 6.87928L6.49983 12L11.3383 6.87928L11.9976 6.1816C12.3154 5.84543 12.5675 5.44628 12.7395 5.00697C12.9115 4.56765 13 4.09678 13 3.62124C13 3.14571 12.9115 2.67484 12.7395 2.23552C12.5675 1.79621 12.3154 1.39706 11.9976 1.06089Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                    <ActionCount>12</ActionCount>
                </ActionItem>

                {/* Comment */}
                <ActionItem>
                    <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ stroke: "rgba(31,31,31,1)", strokeWidth: "1.5px" }}
                    >
                    <path
                        d="M12 5.66668C12.0023 6.54659 11.7967 7.4146 11.4 8.20001C10.9296 9.14117 10.2065 9.93279 9.31162 10.4862C8.41675 11.0396 7.38548 11.3329 6.33332 11.3333C5.45341 11.3356 4.5854 11.13 3.79999 10.7333L0 12L1.26666 8.20001C0.869953 7.4146 0.664371 6.54659 0.666666 5.66668C0.667073 4.61452 0.960406 3.58325 1.51381 2.68838C2.06721 1.79352 2.85883 1.0704 3.79999 0.600018C4.5854 0.203306 5.45341 -0.00227517 6.33332 1.8992e-05H6.66666C8.05622 0.0766801 9.36868 0.663192 10.3527 1.64726C11.3368 2.63132 11.9233 3.94378 12 5.33334V5.66668Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                    <ActionCount>4</ActionCount>
                </ActionItem>

                {/* Bookmark */}
                <ActionItem>
                    <svg
                    width="9"
                    height="12"
                    viewBox="0 0 9 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ stroke: "rgba(31,31,31,1)", strokeWidth: "1.5px" }}
                    >
                    <path
                        d="M9 12L4.5 8.66667L0 12V1.33333C0 0.979711 0.135459 0.640573 0.376577 0.390524C0.617695 0.140476 0.944722 0 1.28571 0H7.71429C8.05528 0 8.3823 0.140476 8.62342 0.390524C8.86454 0.640573 9 0.979711 9 1.33333V12Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                    <ActionCount>2</ActionCount>
                </ActionItem>
                </ActionGroup>

                {/* Share */}
                <svg
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ flexShrink: 0, stroke: "rgba(31,31,31,1)", strokeWidth: "1.5px" }}
                >
                <path
                    d="M0 6V10.8C0 11.1183 0.144866 11.4235 0.402728 11.6485C0.660591 11.8736 1.01033 12 1.375 12H9.625C9.98967 12 10.3394 11.8736 10.5973 11.6485C10.8551 11.4235 11 11.1183 11 10.8V6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.25 2.4L5.5 0L2.75 2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M5.5 0V7.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
