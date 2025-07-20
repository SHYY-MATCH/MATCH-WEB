import { useState } from "react";
import * as S from "./style";
import SideBar from "../../components/SideBar";
import LeftArrow from "../../assets/Icons/LeftArrow";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useCreatePost } from "../../shared/hooks/useCreatePost";

const Post = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const isActive = title.trim() !== "" && content.trim() !== "";

  const { mutate: createPost, isPending } = useCreatePost(); // ✅ 훅 사용

  const handlePost = () => {
    if (!isActive) return;

    createPost(
      { title, content },
      {
        onSuccess: () => {
          alert("게시글이 등록되었습니다.");
          navigate("/community");
        },
        onError: () => {
          alert("게시글 등록에 실패했습니다.");
        },
      },
    );
  };

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
              <S.TitleInput
                placeholder="제목을 입력해 주세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </S.WriteHeader>
            <S.Line />
            <S.MainWrite
              as="textarea"
              placeholder="게시글 내용을 입력해 주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </S.WriteContainer>
          <S.PostBtn>
            <Button
              text={isPending ? "작성 중..." : "게시하기"}
              isActive={isActive && !isPending}
              onClick={handlePost}
            />
          </S.PostBtn>
        </S.MainWriteContainer>
      </S.Main>
    </S.Container>
  );
};

export default Post;
