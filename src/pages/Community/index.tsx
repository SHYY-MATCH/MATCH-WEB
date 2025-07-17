import * as S from "./style";
import SideBar from "../../components/SideBar";
import PostOption from "../../components/PostOption";
import PostList from "../../components/PostList";
import { useState } from "react";
import BetRegular from "../../components/BetRegular";
import Whale from "../../assets/whale.png";
import Write from "../../assets/Icons/Write";

interface Post {
  id: number;
  title: string;
  name: string;
  likes: number;
  views: number;
  createdAt: string;
}

const Community = () => {
  const [filter, setFilter] = useState<"time" | "likes" | "views">("time");

  const posts: Post[] = [
    {
      id: 1,
      title: "첫 번째 글",
      name: "작성자1",
      likes: 10,
      views: 200,
      createdAt: "2025-07-17T10:00:00Z",
    },
    {
      id: 2,
      title: "두 번째 글",
      name: "작성자1",
      likes: 30,
      views: 150,
      createdAt: "2025-07-17T12:00:00Z",
    },
    {
      id: 3,
      title: "세 번째 글",
      name: "작성자1",
      likes: 5,
      views: 300,
      createdAt: "2025-07-16T09:00:00Z",
    },
  ];

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

  const sortedPosts = [...posts].sort((a, b) => {
    switch (filter) {
      case "likes":
        return b.likes - a.likes;
      case "views":
        return b.views - a.views;
      case "time":
      default:
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
  });

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
              {sortedPosts.map((post) => (
                <PostList key={post.id} post={post} />
              ))}
            </S.Main>
          </S.MainContent>
        </S.ContentContent>
      </S.Content>
      <S.Write>
        <Write />
      </S.Write>
    </S.Container>
  );
};

export default Community;
