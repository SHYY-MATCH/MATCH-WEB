import { useState } from "react";
import * as S from "./style";
import SideBar from "../../components/SideBar";
import LeftArrow from "../../assets/Icons/LeftArrow";
import Show from "../../assets/Icons/Show";
import Heart from "../../assets/Icons/Heart";
import PostComment from "../../components/PostComment";
import { useNavigate } from "react-router-dom";

const PostDetail = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const isActive = comment.trim() !== "";

  const title = "React에서 게시글 상세 페이지 만들기";
  const postName = "홍길동";
  const date = "2025년 7월 17일";
  const views = "1.2k";
  const likes = "98";
  return (
    <S.Container>
      <SideBar />
      <S.Main>
        <S.BackContainer onClick={() => navigate("/community")}>
          <LeftArrow />
          <S.BackText>돌아가기</S.BackText>
        </S.BackContainer>
        <S.MainWriteContainer>
          <S.WriteContainer>
            <S.WriteHeader>
              <S.TitleInput>{title}</S.TitleInput>
              <S.PostDetailContainer>
                <S.Name>{postName}</S.Name>
                <S.Date>작성일 {date}</S.Date>
              </S.PostDetailContainer>
            </S.WriteHeader>
            <S.Line />
            <S.MainWrite>
              as;dlkfja;welnf;akwdjfoaiewnvonaongepwiojfa[oiwejfo;an;gkladng;alsjf;jaweoignapow;lnmfd;lkms;alknf;awoeifoajwefoijaodsifjsad;ljfksakdjf;lkasjdf;lkjsadl;kfj;alskdjf]
            </S.MainWrite>
          </S.WriteContainer>
          <S.PostBtn>
            <S.IconGroup>
              <Heart />
              <S.Text>{likes}</S.Text>
            </S.IconGroup>
            <S.IconGroup>
              <Show />
              <S.Text>{views}</S.Text>
            </S.IconGroup>
          </S.PostBtn>
        </S.MainWriteContainer>
        <S.WriteComent>
          <S.WriteComentTitle>댓글 작성하기</S.WriteComentTitle>
          <S.WriteComentInput>
            <S.Input
              placeholder="댓글을 작성해주세요"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </S.WriteComentInput>
          <S.WriteComentPostBtn $active={isActive}>
            작성 완료
          </S.WriteComentPostBtn>
        </S.WriteComent>
        <S.AllComentContainer>
          <S.WriteComentTitle>전체 댓글</S.WriteComentTitle>
          <S.Coments>
            <PostComment />
            <PostComment />
            <PostComment />
            <PostComment />
            <PostComment />
            <PostComment />
          </S.Coments>
        </S.AllComentContainer>
      </S.Main>
    </S.Container>
  );
};

export default PostDetail;
