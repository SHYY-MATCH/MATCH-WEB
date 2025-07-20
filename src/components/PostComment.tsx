import styled from "styled-components";

interface Comment {
  id: number;
  content: string;
  createdAt: string;
  writer: {
    id: number;
    username: string;
  };
}

interface PostCommentProps {
  comment: Comment;
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
  border-radius: 12px;
  background-color: #2a303a;
  gap: 8px;
`;
const Header = styled.div`
  display: flex;
  gap: 8px;
`;
const Name = styled.div`
  font-size: 14px;
  font-family: "Paperlogy-4Regular";
  color: #70747a;
`;
const DateText = styled.div`
  font-size: 12px;
  font-family: "Paperlogy-5Medium";
  color: #454a52;
`;
const CommentText = styled.div`
  width: 100%;
  font-size: 16px;
  font-family: "Paperlogy-4Regular";
  color: #c9cacc;
`;

const PostComment = ({ comment }: PostCommentProps) => {
  const formattedDate = new window.Date(comment.createdAt).toLocaleDateString(
    "ko-KR"
  );

  return (
    <Container>
      <Header>
        <Name>@{comment.writer.username}</Name>
        <DateText>{formattedDate}</DateText>
      </Header>
      <CommentText>{comment.content}</CommentText>
    </Container>
  );
};

export default PostComment;
