import { useState, useEffect, useRef } from "react";
import * as S from "./style";
import SideBar from "../../components/SideBar";
import LeftArrow from "../../assets/Icons/LeftArrow";
import Show from "../../assets/Icons/Show";
import Heart from "../../assets/Icons/Heart";
import PostComment from "../../components/PostComment";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetPost,
  useLikePost,
  useUnlikePost,
  useIncreaseViewPost,
  useGetComments,
  useCreateComment,
} from "../../shared/hooks/useGetPost";

const PostDetail = () => {
  const navigate = useNavigate();
  const { postId } = useParams<{ postId: string }>();
  const [comment, setComment] = useState("");
  const isActive = comment.trim() !== "";

  const { data: post, isLoading, isError } = useGetPost(Number(postId));
  const { data: comments = [], isLoading: commentsLoading } = useGetComments(
    Number(postId)
  );
  const likeMutation = useLikePost(Number(postId));
  const unlikeMutation = useUnlikePost(Number(postId));
  const increaseViewMutation = useIncreaseViewPost(Number(postId));
  const createCommentMutation = useCreateComment(Number(postId));
  const hasIncreasedView = useRef(false);

  // 좋아요 상태/수 optimistic update
  const [optimisticLikes, setOptimisticLikes] = useState<number | null>(null);
  const [optimisticIsLiked, setOptimisticIsLiked] = useState<boolean | null>(
    null
  );

  // 최초 마운트 시에만 조회수 증가 (한 번만)
  useEffect(() => {
    if (postId && !hasIncreasedView.current) {
      hasIncreasedView.current = true;
      increaseViewMutation.mutate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  // post 데이터가 바뀌면 optimistic state 초기화
  useEffect(() => {
    setOptimisticLikes(null);
    setOptimisticIsLiked(null);
  }, [post?.likes, post?.isLiked]);

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !post) return <div>게시글을 불러오지 못했습니다.</div>;

  const formattedDate = new Date(post.createdAt).toLocaleDateString("ko-KR");

  const isLiked =
    optimisticIsLiked !== null ? optimisticIsLiked : post.isLiked ?? false;
  const likes = optimisticLikes !== null ? optimisticLikes : post.likes;

  const handleLike = () => {
    if (isLiked) {
      setOptimisticLikes(likes - 1);
      setOptimisticIsLiked(false);
      unlikeMutation.mutate();
    } else {
      setOptimisticLikes(likes + 1);
      setOptimisticIsLiked(true);
      likeMutation.mutate();
    }
  };

  const handleCommentSubmit = () => {
    if (!isActive || !comment.trim()) return;

    createCommentMutation.mutate(
      { content: comment },
      {
        onSuccess: () => {
          setComment("");
        },
        onError: () => {
          alert("댓글 작성에 실패했습니다.");
        },
      }
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
              <S.TitleInput>{post.title}</S.TitleInput>
              <S.PostDetailContainer>
                <S.Name>{post.writer.username}</S.Name>
                <S.Date>작성일 {formattedDate}</S.Date>
              </S.PostDetailContainer>
            </S.WriteHeader>
            <S.Line />
            <S.MainWrite>{post.content}</S.MainWrite>
          </S.WriteContainer>
          <S.PostBtn>
            <S.IconGroup>
              <button
                onClick={handleLike}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
                aria-label={isLiked ? "좋아요 취소" : "좋아요"}
              >
                <Heart
                  style={{
                    fill: isLiked ? "#FF8491" : "none",
                    stroke: isLiked ? "#FF8491" : undefined,
                  }}
                />
              </button>
              <S.Text>{likes}</S.Text>
            </S.IconGroup>
            <S.IconGroup>
              <Show />
              <S.Text>{post.views}</S.Text>
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
          <S.WriteComentPostBtn
            $active={isActive}
            onClick={handleCommentSubmit}
            disabled={!isActive || createCommentMutation.isPending}
          >
            {createCommentMutation.isPending ? "작성 중..." : "작성 완료"}
          </S.WriteComentPostBtn>
        </S.WriteComent>
        <S.AllComentContainer>
          <S.WriteComentTitle>전체 댓글</S.WriteComentTitle>
          <S.Coments>
            {commentsLoading ? (
              <div>댓글을 불러오는 중...</div>
            ) : comments.length === 0 ? (
              <div>댓글이 없습니다.</div>
            ) : (
              comments.map((comment) => (
                <PostComment key={comment.id} comment={comment} />
              ))
            )}
          </S.Coments>
        </S.AllComentContainer>
      </S.Main>
    </S.Container>
  );
};

export default PostDetail;
