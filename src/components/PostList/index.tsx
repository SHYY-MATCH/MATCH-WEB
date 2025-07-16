import React from "react";
import * as S from "./style";
import Show from "../../assets/Icons/Show";
import Heart from "../../assets/Icons/Heart";

const PostList = () => {
  return (
    <S.Container>
      <S.Title>글 제목</S.Title>
      <S.ProfileContainer>
        <S.Profile />
        <S.Name>글쓴이</S.Name>
      </S.ProfileContainer>
      <S.LookContainer>
        <Show />
        <S.LookCount>1.42k</S.LookCount>
      </S.LookContainer>
      <S.GoodContainer>
        <Heart />
        <S.GoodCount>1.42k</S.GoodCount>
      </S.GoodContainer>
      <S.Date>2025년 4월 3일</S.Date>
    </S.Container>
  );
};

export default PostList;
