import * as S from "./style";
import Show from "../../assets/Icons/Show";
import Heart from "../../assets/Icons/Heart";
import { useNavigate } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  name: string;
  likes: number;
  views: number;
  createdAt: string;
}

interface PostListProps {
  post: Post;
}

const PostList = ({ post }: PostListProps) => {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("ko-KR");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post-detail/${post.id}`);
  };

  return (
    <S.Container onClick={handleClick} style={{ cursor: "pointer" }}>
      <S.Title>{post.title}</S.Title>

      <S.AuthorContainer>
        <S.Name>{post.name}</S.Name>
      </S.AuthorContainer>

      <S.MetaContainer>
        <S.IconGroup>
          <Show />
          <S.Text>{post.views}</S.Text>
        </S.IconGroup>
        <S.IconGroup>
          <Heart />
          <S.Text>{post.likes}</S.Text>
        </S.IconGroup>
        <S.Date>{formattedDate}</S.Date>
      </S.MetaContainer>
    </S.Container>
  );
};

export default PostList;
