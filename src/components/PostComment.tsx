import styled from "styled-components";

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
const Date = styled.div`
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

const PostComment = () => {
  return (
    <Container>
      <Header>
        <Name>@작성자</Name>
        <Date>2024.11.18</Date>
      </Header>
      <CommentText>댓글입니다</CommentText>
    </Container>
  );
};

export default PostComment;
