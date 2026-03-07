import { useState } from "react";
import styled from "styled-components";
import heartIcon from "../../assets/Icons/heartIcon.svg";
import messangerIcon from "../../assets/Icons/messangerIcon.svg";
import shareIcon from "../../assets/Icons/shareIcon.svg";
import bookmarkIcon from "../../assets/Icons/bookmarkIcon.svg";
import ellipsisIcon from "../../assets/Icons/ellipsis.svg";
import horizontalEllipsisIcon from "../../assets/Icons/horizontalEllipsis.svg";
import dummyProfile from "../../assets/Images/dummyProfile.png";

const INITIAL_COMMENTS = [
  {
    id: "comment-1",
    username: "Beatrice Anah",
    profileImage: dummyProfile,
    commentText: "Congratulations, I hope it is fun out there.",
    replies: [
      {
        id: "reply-1",
        username: "Beatrice Anah",
        profileImage: dummyProfile,
        replyText: "Thank you.",
      },
    ],
  },
  {
    id: "comment-2",
    username: "Daniel Kim",
    profileImage: dummyProfile,
    commentText: "Cloud-flare is a great place to grow. Keep going.",
    replies: [],
  },
];

const CURRENT_USER = {
  username: "You",
  profileImage: dummyProfile,
};

const makeId = (prefix) =>
  `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

function CommentInput({
  value,
  onChange,
  onSubmit,
  placeholder,
  profileImage,
  submitLabel = "Send",
  compact = false,
}) {
  return (
    <CommentInputForm onSubmit={onSubmit} $compact={compact}>
      <CommentAvatar src={profileImage} alt="profile image" $compact={compact} />
      <CommentInputField
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
      <SendButton type="submit">{submitLabel}</SendButton>
    </CommentInputForm>
  );
}

function Reply({ reply }) {
  return (
    <ReplyCard>
      <CommentAvatar src={reply.profileImage} alt={`${reply.username} profile image`} />
      <CommentContent>
        <ReplyHeader>
          <CommentName>{reply.username}</CommentName>
          <CommentMeta>Mechanical Engineering</CommentMeta>
        </ReplyHeader>
        <CommentText>{reply.replyText}</CommentText>
      </CommentContent>
    </ReplyCard>
  );
}

function Comment({
  comment,
  isReplyOpen,
  areRepliesVisible,
  replyValue,
  onToggleReply,
  onToggleReplies,
  onReplyChange,
  onReplySubmit,
}) {
  const replyCount = comment.replies.length;

  return (
    <CommentCard>
      <CommentAvatar src={comment.profileImage} alt={`${comment.username} profile image`} />
      <CommentContent>
        <CommentTopRow>
          <div>
            <CommentHeader>
              <CommentName>{comment.username}</CommentName>
              <Dot />
              <CommentTime>2h ago</CommentTime>
            </CommentHeader>
            <CommentMeta>Mechanical Engineering</CommentMeta>
          </div>
          <ActionIcon type="button" aria-label="comment options">
            <img src={ellipsisIcon} alt="comment options" />
          </ActionIcon>
        </CommentTopRow>

        <CommentText>{comment.commentText}</CommentText>

        <CommentActionRow>
          <ActionItemButton type="button" aria-label="like comment">
            <img src={heartIcon} alt="like icon" />
          </ActionItemButton>
          <ActionItemButton
            type="button"
            aria-label="reply to comment"
            onClick={onToggleReply}
          >
            <img src={messangerIcon} alt="reply icon" />
            <ActionLabel>Reply</ActionLabel>
          </ActionItemButton>
          {replyCount > 0 ? (
            <ActionTextButton type="button" onClick={onToggleReplies}>
              {areRepliesVisible
                ? "Hide replies"
                : `View ${replyCount} ${replyCount === 1 ? "reply" : "replies"}`}
            </ActionTextButton>
          ) : null}
          <ActionItemButton type="button" aria-label="share comment" className="share">
            <img src={shareIcon} alt="share icon" />
          </ActionItemButton>
        </CommentActionRow>

        {isReplyOpen ? (
          <ReplyInputWrap>
            <CommentInput
              value={replyValue}
              onChange={onReplyChange}
              onSubmit={onReplySubmit}
              placeholder={`Reply to ${comment.username}`}
              profileImage={CURRENT_USER.profileImage}
              compact
            />
          </ReplyInputWrap>
        ) : null}

        {comment.replies.length > 0 && areRepliesVisible ? (
          <ReplyList>
            {comment.replies.map((reply) => (
              <Reply key={reply.id} reply={reply} />
            ))}
          </ReplyList>
        ) : null}
      </CommentContent>
    </CommentCard>
  );
}

function PostCard() {
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [commentInput, setCommentInput] = useState("");
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [activeReplyInputs, setActiveReplyInputs] = useState({});
  const [expandedReplies, setExpandedReplies] = useState({});
  const [replyInputs, setReplyInputs] = useState({});
  const commentCount = comments.length;

  const handleAddComment = (event) => {
    event.preventDefault();
    const trimmedComment = commentInput.trim();
    if (!trimmedComment) {
      return;
    }

    const newComment = {
      id: makeId("comment"),
      username: CURRENT_USER.username,
      profileImage: CURRENT_USER.profileImage,
      commentText: trimmedComment,
      replies: [],
    };

    setComments((previousComments) => [...previousComments, newComment]);
    setCommentInput("");
  };

  const toggleReplyInput = (commentId) => {
    setActiveReplyInputs((previousState) => ({
      ...previousState,
      [commentId]: !previousState[commentId],
    }));
  };

  const toggleRepliesVisibility = (commentId) => {
    setExpandedReplies((previousState) => ({
      ...previousState,
      [commentId]: !previousState[commentId],
    }));
  };

  const handleReplyChange = (commentId, value) => {
    setReplyInputs((previousState) => ({
      ...previousState,
      [commentId]: value,
    }));
  };

  const handleAddReply = (event, commentId) => {
    event.preventDefault();
    const trimmedReply = (replyInputs[commentId] || "").trim();
    if (!trimmedReply) {
      return;
    }

    const newReply = {
      id: makeId("reply"),
      username: CURRENT_USER.username,
      profileImage: CURRENT_USER.profileImage,
      replyText: trimmedReply,
    };

    setComments((previousComments) =>
      previousComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, newReply] }
          : comment
      )
    );

    setReplyInputs((previousState) => ({
      ...previousState,
      [commentId]: "",
    }));
    setActiveReplyInputs((previousState) => ({
      ...previousState,
      [commentId]: false,
    }));
    setExpandedReplies((previousState) => ({
      ...previousState,
      [commentId]: true,
    }));
  };

  return (
    <PostWrapper>
      <Card>
        <Avatar src={dummyProfile} alt="post profile image" />
        <Info>
          <UserInfo>
            <UserInfoSec>
              <UserNameRow>
                <UserName>Beatrice Anah</UserName>
                <Dot />
                <TimeStamp>2h ago</TimeStamp>
              </UserNameRow>
              <Profession>Mechanical Engineering</Profession>
            </UserInfoSec>
            <PostMetaActions>
              <Network type="button">Network</Network>
              <ActionIcon type="button" aria-label="post options">
                <img src={horizontalEllipsisIcon} alt="post options" />
              </ActionIcon>
            </PostMetaActions>
          </UserInfo>

          <PostText>
            Hey guys, it was my first day working at Cloud-flare and I pushed
            code today.
          </PostText>

          <ActionsRow>
            <ActionGroup>
              <ActionItem>
                <img src={heartIcon} alt="like button" />
                <ActionCount>12</ActionCount>
              </ActionItem>

              <ActionItemButton
                type="button"
                aria-label={isCommentsOpen ? "hide comments" : "show comments"}
                onClick={() => setIsCommentsOpen((previousState) => !previousState)}
              >
                <img src={messangerIcon} alt="comment icon" />
                <ActionCount>{commentCount}</ActionCount>
              </ActionItemButton>

              <ActionItem>
                <img src={bookmarkIcon} alt="save icon" />
                <ActionCount>2</ActionCount>
              </ActionItem>
            </ActionGroup>

            <img src={shareIcon} alt="share icon" />
          </ActionsRow>
        </Info>
      </Card>

      {isCommentsOpen ? (
        <CommentsSection>
          <CommentInput
            value={commentInput}
            onChange={setCommentInput}
            onSubmit={handleAddComment}
            placeholder="Add a comment"
            profileImage={CURRENT_USER.profileImage}
          />

          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              isReplyOpen={Boolean(activeReplyInputs[comment.id])}
              areRepliesVisible={Boolean(expandedReplies[comment.id])}
              replyValue={replyInputs[comment.id] || ""}
              onToggleReply={() => toggleReplyInput(comment.id)}
              onToggleReplies={() => toggleRepliesVisibility(comment.id)}
              onReplyChange={(value) => handleReplyChange(comment.id, value)}
              onReplySubmit={(event) => handleAddReply(event, comment.id)}
            />
          ))}
        </CommentsSection>
      ) : null}
    </PostWrapper>
  );
}

const PostWrapper = styled.article`
  width: 100%;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
`;

const Card = styled.div`
  width: 100%;
  height: fit-content;
  border: 2px solid var(--light-ash);
  border-top: none;
  display: flex;
  gap: 8px;
  padding: 16px;
  @media (max-width: 750px){
    border-left: none;
    border-right: none;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const UserInfoSec = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  @media (max-width: 480px) {
    font-size: 12px;
  }
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

const PostMetaActions = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ActionIcon = styled.button`
  border: none;
  background: transparent;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
`;

const Network = styled.button`
  font-size: 12px;
  background-color: var(--light-ash);
  padding: 6px 12px;
  font-weight: 500;
  border: none;
  border-radius: 20px;
  @media (max-width: 480px) {
    letter-spacing: -1px;
    padding: 4px 8px;
  }
`;

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
  @media (max-width: 480px) {
    gap: 20px;
  }
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

const CommentsSection = styled.section`
  width: 100%;
  border-bottom: 2px solid var(--light-ash);
`;

const CommentInputForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: ${({ $compact }) => ($compact ? "10px 12px" : "12px 16px")};
  @media (max-width: 480px) {
    gap: 8px;
    padding: ${({ $compact }) => ($compact ? "10px" : "10px 12px")};
  }
`;

const CommentAvatar = styled.img`
  width: ${({ $compact }) => ($compact ? "28px" : "32px")};
  height: ${({ $compact }) => ($compact ? "28px" : "32px")};
  min-width: ${({ $compact }) => ($compact ? "28px" : "32px")};
  border-radius: 50%;
  object-fit: cover;
`;

const CommentInputField = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 20px;
  border: 1px solid var(--light-ash);
  padding: 0 12px;
  color: var(--black);
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: var(--blue);
  }
`;

const SendButton = styled.button`
  border: none;
  border-radius: 16px;
  height: 32px;
  padding: 0 14px;
  background: var(--blue);
  color: var(--background-white);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;

const CommentCard = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 14px 16px;
  padding-left: 50px;
  border-top: 1px solid var(--light-ash);
  @media (max-width: 480px) {
    padding: 12px;
    padding-left: 30px;
  }
`;

const CommentContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CommentTopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const CommentName = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--black);
  letter-spacing: -0.6px;
`;

const CommentTime = styled.span`
  color: rgba(127, 127, 127, 1);
  font-size: 12px;
  font-weight: 550;
  letter-spacing: -0.6px;
`;

const CommentMeta = styled.div`
  color: rgba(127, 127, 127, 1);
  font-size: 12px;
  font-weight: 450;
  letter-spacing: -0.6px;
`;

const CommentText = styled.p`
  margin: 0;
  color: var(--black);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.6px;
`;

const CommentActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
  .share{
    margin-left: auto;
  }
`;

const ActionItemButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

const ActionTextButton = styled.button`
  border: none;
  background: transparent;
  color: var(--blue);
  font-size: 12px;
  font-weight: 550;
  padding: 0;
  cursor: pointer;
`;

const ActionLabel = styled.span`
  font-size: 12px;
  color: var(--black);
  font-weight: 500;
`;

const ReplyInputWrap = styled.div`
  margin-left: 12px;
  border-left: 2px solid var(--light-ash);
`;

const ReplyList = styled.div`
  margin-left: 12px;
  border-left: 2px solid var(--light-ash);
`;

const ReplyHeader = styled.div`
  display: flex;
  flex-direction: column;
`

const ReplyCard = styled.div`
  display: flex;
  gap: 8px;
  padding: 10px 12px;
`;

export default PostCard;
