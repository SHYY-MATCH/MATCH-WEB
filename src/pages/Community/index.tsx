import * as S from "./style";
import SideBar from "../../components/SideBar";
import PostOption from "../../components/PostOption";
import PostList from "../../components/PostList";
import { useState } from "react";
import BetRegular from "../../components/BetRegular";
import Whale from "../../assets/whale.png";
import Write from "../../assets/Icons/Write";
import { useNavigate } from "react-router-dom";
import { useGetPosts } from "../../shared/hooks/useGetPost";

const Community = () => {
  const [filter, setFilter] = useState<"time" | "likes" | "views">("time");
  const navigate = useNavigate();

  const sortMap = {
    time: "latest",
    likes: "likes",
    views: "views",
  } as const;

  const { data: posts = [], isLoading, isError } = useGetPosts(sortMap[filter]);

  const gameInfo = {
    title: "농구",
    time: "오전 09:40",
    teams: ["소프트웨어개발과", "임베디드소프트웨어과"] as [string, string],
    left: {
      text1: "382.7만",
      text2: "1:1.2",
      text3: 62,
      percent: 76,
    },
    right: {
      text1: "382.7만",
      text2: "3.4:1",
      text3: 23,
      percent: 24,
    },
  };

  return (
    <S.Container>
      <SideBar />
      <S.Content>
        <S.ContentContent>
          <S.BannerWrapper>
            <S.BannerContent>
              <S.BannerHeaderContainer>
                <S.BannerHeader>
                  <S.SportType>{gameInfo.title}</S.SportType>
                  <S.Time>{gameInfo.time}</S.Time>
                </S.BannerHeader>
                <S.Matchup>
                  <S.Team>{gameInfo.teams[0]}</S.Team>
                  <span>vs</span>
                  <S.Team $isRight>{gameInfo.teams[1]}</S.Team>
                </S.Matchup>
              </S.BannerHeaderContainer>

              <S.BetRegular>
                <BetRegular
                  teams={gameInfo.teams}
                  left={gameInfo.left}
                  right={gameInfo.right}
                />
              </S.BetRegular>
            </S.BannerContent>

            <S.WhaleImage src={Whale} alt="whale" />
          </S.BannerWrapper>

          <S.MainContent>
            <header>
              <PostOption
                text="시간 순"
                active={filter === "time"}
                onClick={() => setFilter("time")}
              />
              <PostOption
                text="좋아요 많은 순"
                active={filter === "likes"}
                onClick={() => setFilter("likes")}
              />
              <PostOption
                text="조회수 많은 순"
                active={filter === "views"}
                onClick={() => setFilter("views")}
              />
            </header>

            <S.Main>
              {isLoading && <div>게시글을 불러오는 중입니다...</div>}
              {isError && <div>게시글을 불러오지 못했습니다.</div>}
              {!isLoading &&
                !isError &&
                posts.map((post) => (
                  <PostList
                    key={post.id}
                    post={{
                      id: post.id,
                      title: post.title,
                      name: post.writer.username,
                      likes: post.likes,
                      views: post.views,
                      createdAt: post.createdAt,
                    }}
                  />
                ))}
            </S.Main>
          </S.MainContent>
        </S.ContentContent>
      </S.Content>

      <S.Write onClick={() => navigate("/post")}>
        <Write />
      </S.Write>
    </S.Container>
  );
};

export default Community;
