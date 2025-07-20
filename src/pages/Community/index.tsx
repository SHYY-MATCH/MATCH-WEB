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
import { useBettingList } from "../../shared/hooks/useBettingList";

const Community = () => {
  const [filter, setFilter] = useState<"time" | "likes" | "views">("time");
  const navigate = useNavigate();

  const sortMap = {
    time: "latest",
    likes: "likes",
    views: "views",
  } as const;

  const { data: posts = [], isLoading, isError } = useGetPosts(sortMap[filter]);
  const { data: bettings = [] } = useBettingList();

  // 첫 번째 배팅을 배너에 표시
  const bannerBetting = bettings.length > 0 ? bettings[0] : null;

  const safePosts = Array.isArray(posts) ? posts : [];

  return (
    <S.Container>
      <SideBar />
      <S.Content>
        <S.ContentContent>
          <S.BannerWrapper>
            <S.BannerContent>
              <S.BannerHeaderContainer>
                <S.BannerHeader>
                  <S.SportType>
                    {bannerBetting?.sportName || "배팅"}
                  </S.SportType>
                  <S.Time>
                    {bannerBetting
                      ? new Date(bannerBetting.openedAt).toLocaleTimeString(
                          "ko-KR",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )
                      : "로딩 중..."}
                  </S.Time>
                </S.BannerHeader>
                <S.Matchup>
                  <S.Team>{bannerBetting?.teams[0].teamName || "팀A"}</S.Team>
                  <span>vs</span>
                  <S.Team $isRight>
                    {bannerBetting?.teams[1].teamName || "팀B"}
                  </S.Team>
                </S.Matchup>
              </S.BannerHeaderContainer>

              <S.BetRegular>
                {bannerBetting ? (
                  <BetRegular
                    teams={[
                      bannerBetting.teams[0].teamName,
                      bannerBetting.teams[1].teamName,
                    ]}
                    left={{
                      text1: `${(
                        bannerBetting.teams[0].totalAmount / 10000
                      ).toFixed(1)}만`,
                      text2: `1:${bannerBetting.teams[0].odds.toFixed(1)}`,
                      text3: bannerBetting.teams[0].participantCount,
                      percent: Math.round(
                        (bannerBetting.teams[0].totalAmount /
                          (bannerBetting.teams[0].totalAmount +
                            bannerBetting.teams[1].totalAmount)) *
                          100
                      ),
                    }}
                    right={{
                      text1: `${(
                        bannerBetting.teams[1].totalAmount / 10000
                      ).toFixed(1)}만`,
                      text2: `1:${bannerBetting.teams[1].odds.toFixed(1)}`,
                      text3: bannerBetting.teams[1].participantCount,
                      percent: Math.round(
                        (bannerBetting.teams[1].totalAmount /
                          (bannerBetting.teams[0].totalAmount +
                            bannerBetting.teams[1].totalAmount)) *
                          100
                      ),
                    }}
                  />
                ) : (
                  <div
                    style={{
                      color: "white",
                      textAlign: "center",
                      padding: "20px",
                    }}
                  >
                    배팅 정보를 불러오는 중...
                  </div>
                )}
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
              {isLoading && (
                <div
                  style={{
                    color: "white",
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  게시글을 불러오는 중입니다...
                </div>
              )}
              {isError && (
                <div
                  style={{ color: "red", textAlign: "center", padding: "20px" }}
                >
                  게시글을 불러오지 못했습니다. 다시 시도해주세요.
                </div>
              )}
              {!isLoading && !isError && safePosts.length === 0 && (
                <div
                  style={{
                    color: "white",
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  게시글이 없습니다.
                </div>
              )}
              {!isLoading &&
                !isError &&
                safePosts.length > 0 &&
                safePosts.map((post) => (
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
