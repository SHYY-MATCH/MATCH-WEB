import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import SideBar from "../../components/SideBar";
import BetRegular from "../../components/BetRegular";
import BetTitle from "../../components/BetTitle";
import star from "../../assets/star.png";
import prize from "../../assets/prize.png";
import bank from "../../assets/bank.png";
import RightArrow from "../../assets/Icons/RightArrow";
import LeftArrow from "../../assets/Icons/LeftArrow";
import whale from "../../assets/whale.png";
import { useUserStatus } from "../../shared/hooks/useUserStatus";
import { useBettingList } from "../../shared/hooks/useBettingList";

const Home = () => {
  const navigate = useNavigate();
  const { data: userStatus, isLoading: userStatusLoading } = useUserStatus();
  const { data: bettingList, isLoading: bettingListLoading } = useBettingList();

  const [bannerIndex, setBannerIndex] = useState(0); // 0: 첫 배너, 1: 두 번째 배너

  const handlePrev = () => {
    if (bannerIndex > 0) setBannerIndex(bannerIndex - 1);
  };

  const handleNext = () => {
    if (bannerIndex < 1) setBannerIndex(bannerIndex + 1);
  };

  const handleBettingListClick = () => {
    navigate("/betting-list");
  };

  const handleRankingClick = () => {
    navigate("/ranking");
  };

  // 배팅 데이터를 BetRegular 컴포넌트 형식으로 변환
  const formatBettingData = (betting: any) => {
    if (!betting.teams || betting.teams.length < 2) return null;

    const team1 = betting.teams[0];
    const team2 = betting.teams[1];

    // 발행시간을 YYYY-MM-DD 형식으로 변환
    const date = new Date(betting.openedAt);
    const formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD 형식

    return {
      id: betting.bettingId,
      title: betting.sportName,
      subTitle: formattedDate,
      left: {
        text1: `${(team1.totalAmount / 10000).toFixed(1)}만`,
        text2: `1:${team1.odds.toFixed(1)}`,
        text3: team1.participantCount,
        percent: isNaN(
          Math.round(
            (team1.totalAmount / (team1.totalAmount + team2.totalAmount)) * 100
          )
        )
          ? 50
          : Math.round(
              (team1.totalAmount / (team1.totalAmount + team2.totalAmount)) *
                100
            ),
      },
      right: {
        text1: `${(team2.totalAmount / 10000).toFixed(1)}만`,
        text2: `1:${team2.odds.toFixed(1)}`,
        text3: team2.participantCount,
        percent: isNaN(
          Math.round(
            (team2.totalAmount / (team1.totalAmount + team2.totalAmount)) * 100
          )
        )
          ? 50
          : Math.round(
              (team2.totalAmount / (team1.totalAmount + team2.totalAmount)) *
                100
            ),
      },
      teams: [team1.teamName, team2.teamName] as [string, string],
    };
  };

  // 상위 4개 배팅만 필터링
  const top4Betting =
    bettingList?.slice(0, 4).map(formatBettingData).filter(Boolean) || [];

  return (
    <S.Container>
      <SideBar />
      <S.Main>
        <S.BannerContainer>
          {bannerIndex === 0 ? (
            <S.Banner $gradient="blue">
              <S.BannerTextGroup>
                <S.BannerWhaleContainer>
                  <S.BannerTitle>
                    {userStatusLoading
                      ? "로딩 중..."
                      : `${userStatus?.welcomeMessage}님 환영합니다!`}
                  </S.BannerTitle>
                  <S.BannerDivider />
                  <S.BannerSubText>
                    현재 내 자산 :{" "}
                    {userStatusLoading
                      ? "로딩 중..."
                      : userStatus?.currentAsset?.toLocaleString() || "0"}{" "}
                    코인
                  </S.BannerSubText>
                  <S.BannerSubText>
                    현재 내 랭킹 :{" "}
                    {userStatusLoading
                      ? "로딩 중..."
                      : userStatus?.currentRanking || "N/A"}
                  </S.BannerSubText>
                </S.BannerWhaleContainer>
              </S.BannerTextGroup>
              <S.BannerWhaleIcon src={whale} alt="whale" />
            </S.Banner>
          ) : (
            <S.Banner $gradient="yellow">
              <S.BannerCoinIcon src={bank} alt="bank-icon" />
              <S.BannerTextGroup>
                <S.BannerText>
                  시작시 모두가 동일하게 <br />
                  ₩1,000,000 코인을 가지고 시작하게 돼요
                </S.BannerText>
              </S.BannerTextGroup>
            </S.Banner>
          )}

          <S.BannerArrow>
            <S.ArrowButton onClick={handlePrev} $active={bannerIndex > 0}>
              <LeftArrow />
            </S.ArrowButton>
            <S.ArrowButton onClick={handleNext} $active={bannerIndex < 1}>
              <RightArrow />
            </S.ArrowButton>
          </S.BannerArrow>
        </S.BannerContainer>

        <S.MenuContainer>
          <S.MenuText>메뉴</S.MenuText>
          <S.MenuList>
            <S.MenuButton onClick={handleBettingListClick}>
              <S.Menu1TextGroup>
                <S.Menu1Title>함께 배팅 목록들을 확인해볼까요?</S.Menu1Title>
                <S.Menu1SubText>배팅목록으로 바로가기 &gt;</S.Menu1SubText>
              </S.Menu1TextGroup>
              <S.Menu1Image src={star} alt="sparkle" />
            </S.MenuButton>
            <S.MenuButton onClick={handleRankingClick}>
              <S.Menu1TextGroup>
                <S.Menu1Title>다른 사람들의 랭킹도 확인해볼까요?</S.Menu1Title>
                <S.Menu1SubText>랭킹으로 바로가기 &gt;</S.Menu1SubText>
              </S.Menu1TextGroup>
              <S.Menu1Image src={prize} alt="sparkle" />
            </S.MenuButton>
          </S.MenuList>
        </S.MenuContainer>

        <S.NowHotBetContainer>
          <S.NowHotBetText>현재 인기 배팅 🔥</S.NowHotBetText>
          <S.NowHotBetList>
            {bettingListLoading ? (
              <div>로딩 중...</div>
            ) : top4Betting.length > 0 ? (
              top4Betting.map(({ id, title, subTitle, left, right, teams }) => (
                <S.HotBet key={id}>
                  <BetTitle title={title} subTitle={subTitle} />
                  <BetRegular left={left} right={right} teams={teams} />
                </S.HotBet>
              ))
            ) : (
              <div>배팅 목록이 없습니다.</div>
            )}
          </S.NowHotBetList>
        </S.NowHotBetContainer>
      </S.Main>
    </S.Container>
  );
};

export default Home;
