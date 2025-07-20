import { useState } from "react";
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

const Home = () => {
  const hotBetList = [
    {
      id: 1,
      title: "큰 공 배구 왕중왕전",
      subTitle: "38분 후에 제출이 마감됩니다.",
      left: {
        text1: "382.7만",
        text2: "1:1.2",
        text3: 62,
        percent: 67,
      },
      right: {
        text1: "382.7만",
        text2: "1:1.6",
        text3: 31,
        percent: 33,
      },
      teams: ["소프트웨어개발과", "임베디드개발과"] as [string, string],
    },
    {
      id: 2,
      title: "큰 공 배구 왕중왕전",
      subTitle: "38분 후에 제출이 마감됩니다.",
      left: {
        text1: "382.7만",
        text2: "1:1.2",
        text3: 62,
        percent: 67,
      },
      right: {
        text1: "382.7만",
        text2: "1:1.6",
        text3: 31,
        percent: 33,
      },
      teams: ["소프트웨어개발과", "임베디드개발과"] as [string, string],
    },
    {
      id: 3,
      title: "큰 공 배구 왕중왕전",
      subTitle: "38분 후에 제출이 마감됩니다.",
      left: {
        text1: "382.7만",
        text2: "1:1.2",
        text3: 62,
        percent: 67,
      },
      right: {
        text1: "382.7만",
        text2: "1:1.6",
        text3: 31,
        percent: 33,
      },
      teams: ["소프트웨어개발과", "임베디드개발과"] as [string, string],
    },
    {
      id: 4,
      title: "큰 공 배구 왕중왕전",
      subTitle: "38분 후에 제출이 마감됩니다.",
      left: {
        text1: "382.7만",
        text2: "1:1.2",
        text3: 62,
        percent: 67,
      },
      right: {
        text1: "382.7만",
        text2: "1:1.6",
        text3: 31,
        percent: 33,
      },
      teams: ["소프트웨어개발과", "임베디드개발과"] as [string, string],
    },
  ];
  const [bannerIndex, setBannerIndex] = useState(0); // 0: 첫 배너, 1: 두 번째 배너

  const handlePrev = () => {
    if (bannerIndex > 0) setBannerIndex(bannerIndex - 1);
  };

  const handleNext = () => {
    if (bannerIndex < 1) setBannerIndex(bannerIndex + 1);
  };

  return (
    <S.Container>
      <SideBar />
      <S.Main>
        <S.BannerContainer>
          {bannerIndex === 0 ? (
            <S.Banner $gradient="yellow">
              <S.BannerCoinIcon src={bank} alt="bank-icon" />
              <S.BannerTextGroup>
                <S.BannerText>
                  시작시 모두가 동일하게 <br />
                  ₩1,000,000 코인을 가지고 시작하게 돼요
                </S.BannerText>
              </S.BannerTextGroup>
            </S.Banner>
          ) : (
            <S.Banner $gradient="blue">
              <S.BannerTextGroup>
                <S.BannerWhaleContainer>
                  <S.BannerTitle>한태영님, 환영합니다!</S.BannerTitle>
                  <S.BannerDivider />
                  <S.BannerSubText>
                    현재 내 자산 : 100,000,000 코인
                  </S.BannerSubText>
                  <S.BannerSubText>현재 내 랭킹 : 1등</S.BannerSubText>
                </S.BannerWhaleContainer>
              </S.BannerTextGroup>
              <S.BannerWhaleIcon src={whale} alt="whale" />
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
            <S.Menu>
              <S.Menu1TextGroup>
                <S.Menu1Title>함께 배팅 목록들을 확인해볼까요?</S.Menu1Title>
                <S.Menu1SubText>배팅목록으로 바로가기 &gt;</S.Menu1SubText>
              </S.Menu1TextGroup>
              <S.Menu1Image src={star} alt="sparkle" />
            </S.Menu>
            <S.Menu>
              <S.Menu1TextGroup>
                <S.Menu1Title>다른 사람들의 랭킹도 확인해볼까요?</S.Menu1Title>
                <S.Menu1SubText>랭킹으로 바로가기 &gt;</S.Menu1SubText>
              </S.Menu1TextGroup>
              <S.Menu1Image src={prize} alt="sparkle" />
            </S.Menu>
          </S.MenuList>
        </S.MenuContainer>

        <S.NowHotBetContainer>
          <S.NowHotBetText>현재 인기 배팅 🔥</S.NowHotBetText>
          <S.NowHotBetList>
            {hotBetList.map(({ id, title, subTitle, left, right, teams }) => (
              <S.HotBet key={id}>
                <BetTitle title={title} subTitle={subTitle} />
                <BetRegular left={left} right={right} teams={teams} />
              </S.HotBet>
            ))}
          </S.NowHotBetList>
        </S.NowHotBetContainer>
      </S.Main>
    </S.Container>
  );
};

export default Home;
