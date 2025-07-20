import * as _ from "./style.ts";
import SideBar from "../../components/SideBar";
import BetRegular from "../../components/BetRegular";
import { useRef, useState, useEffect } from "react";
import Whale from "../../assets/whale.png";
import LeftArrow from "../../assets/Icons/LeftArrow.tsx";
import RightArrow from "../../assets/Icons/RightArrow.tsx";
import BetTitle from "../../components/BetTitle";
import { scrollBetListAndGetState, getScrollState } from "./betScrollService";
import { useBettingList } from "../../shared/hooks/useBettingList";
import { Betting } from "../../shared/types/betting";
import { useNavigate } from "react-router-dom";

type Bet = {
  left: {
    text1: string;
    text2: string;
    text3: number;
    percent: number;
  };
  right: {
    text1: string;
    text2: string;
    text3: number;
    percent: number;
  };
  teams: [string, string];
};

type BetItem = {
  title: string;
  subtitle: string;
  bet: Bet;
};

type BetGroup = {
  game: string;
  bets: BetItem[];
};

type BetsData = {
  bets: BetGroup[];
};

type Banner = {
  title: string;
  time: string;
  text: string;
  bet: Bet;
};

const BettingList = () => {
  const { data: bettings, isLoading, error } = useBettingList();
  const [bannerInfo, setBannerInfo] = useState<Banner | null>(null);
  const navigate = useNavigate();

  // 동적으로 ref와 상태 관리
  const betListRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isNextStates, setIsNextStates] = useState<boolean[]>([]);

  useEffect(() => {
    if (bettings && bettings.length > 0) {
      // 첫 번째 배팅을 배너로 사용
      const firstBetting = bettings[0];
      const banner: Banner = {
        title: firstBetting.sportName,
        time: new Date(firstBetting.openedAt).toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        text: `${firstBetting.teams[0].teamName} vs ${firstBetting.teams[1].teamName}`,
        bet: {
          left: {
            text1: `${(firstBetting.teams[0].totalAmount / 10000).toFixed(
              1
            )}만`,
            text2: `1:${firstBetting.teams[0].odds.toFixed(1)}`,
            text3: firstBetting.teams[0].participantCount,
            percent: Math.round(
              (firstBetting.teams[0].totalAmount /
                (firstBetting.teams[0].totalAmount +
                  firstBetting.teams[1].totalAmount)) *
                100
            ),
          },
          right: {
            text1: `${(firstBetting.teams[1].totalAmount / 10000).toFixed(
              1
            )}만`,
            text2: `1:${firstBetting.teams[1].odds.toFixed(1)}`,
            text3: firstBetting.teams[1].participantCount,
            percent: Math.round(
              (firstBetting.teams[1].totalAmount /
                (firstBetting.teams[0].totalAmount +
                  firstBetting.teams[1].totalAmount)) *
                100
            ),
          },
          teams: [
            firstBetting.teams[0].teamName,
            firstBetting.teams[1].teamName,
          ],
        },
      };
      setBannerInfo(banner);
    }
  }, [bettings]);

  // 그룹별 스크롤 상태 업데이트
  useEffect(() => {
    if (!bettings) return;

    const updateStates = () => {
      setIsNextStates(
        bettings.map((_, i) => {
          const el = betListRefs.current[i];
          return el ? getScrollState(el).isNext : false;
        })
      );
    };
    updateStates();
    window.addEventListener("resize", updateStates);
    return () => window.removeEventListener("resize", updateStates);
  }, [bettings]);

  // 스크롤 막기: 그룹별로 모두 적용
  useEffect(() => {
    if (!bettings) return;

    const preventScroll = (e: Event) => e.preventDefault();
    betListRefs.current.forEach((list) => {
      if (list) {
        list.addEventListener("wheel", preventScroll, { passive: false });
        list.addEventListener("touchmove", preventScroll, { passive: false });
        list.addEventListener("scroll", preventScroll, { passive: false });
      }
    });
    return () => {
      betListRefs.current.forEach((list) => {
        if (list) {
          list.removeEventListener("wheel", preventScroll);
          list.removeEventListener("touchmove", preventScroll);
          list.removeEventListener("scroll", preventScroll);
        }
      });
    };
  }, [betListRefs.current, bettings?.length]);

  // 스크롤 버튼 클릭 핸들러
  const handleScroll = (groupIdx: number, direction: "left" | "right") => {
    const ref = betListRefs.current[groupIdx];
    if (!ref) return;
    const { isNext } = scrollBetListAndGetState(ref, direction);
    setIsNextStates((prev) => {
      const updated = [...prev];
      updated[groupIdx] = isNext;
      return updated;
    });
    setTimeout(() => {
      const state = getScrollState(ref);
      setIsNextStates((prev) => {
        const updated = [...prev];
        updated[groupIdx] = state.isNext;
        return updated;
      });
    }, 120);
  };

  const handleBettingClick = (bettingId: number) => {
    navigate(`/betting-detail/${bettingId}`);
  };

  if (isLoading) {
    return (
      <_.Container>
        <SideBar />
        <_.Main>
          <_.MainLayer>
            <div>로딩 중...</div>
          </_.MainLayer>
        </_.Main>
      </_.Container>
    );
  }

  if (error) {
    return (
      <_.Container>
        <SideBar />
        <_.Main>
          <_.MainLayer>
            <div>에러가 발생했습니다.</div>
          </_.MainLayer>
        </_.Main>
      </_.Container>
    );
  }

  if (!bannerInfo || !bettings) return null;

  return (
    <_.Container>
      <SideBar />
      <_.Main>
        <_.MainLayer>
          <_.Banner>
            <_.BannerLayer>
              <_.BannerTextLayer>
                <_.BannerTitleAndTime>
                  <_.BannerTitle>{bannerInfo.title}</_.BannerTitle>
                  <_.BannerTime>{bannerInfo.time}</_.BannerTime>
                </_.BannerTitleAndTime>
                <_.BannerText>{bannerInfo.text}</_.BannerText>
              </_.BannerTextLayer>
              <_.BannerBet>
                <BetRegular
                  left={bannerInfo.bet.left}
                  right={bannerInfo.bet.right}
                  teams={bannerInfo.bet.teams}
                />
              </_.BannerBet>
            </_.BannerLayer>
            <_.BannerImg src={Whale} alt="whale" />
          </_.Banner>

          <_.BetLayer>
            <_.Bets>
              <_.BetsTitle>전체 배팅 목록</_.BetsTitle>
              <_.BetList ref={(el) => (betListRefs.current[0] = el)}>
                {bettings.map((betting, idx) => (
                  <_.Bet
                    key={betting.bettingId}
                    onClick={() => handleBettingClick(betting.bettingId)}
                  >
                    <BetTitle
                      title={betting.sportName}
                      subTitle={new Date(betting.openedAt).toLocaleDateString(
                        "ko-KR"
                      )}
                    />
                    <BetRegular
                      left={{
                        text1: `${(
                          betting.teams[0].totalAmount / 10000
                        ).toFixed(1)}만`,
                        text2: `1:${betting.teams[0].odds.toFixed(1)}`,
                        text3: betting.teams[0].participantCount,
                        percent: Math.round(
                          (betting.teams[0].totalAmount /
                            (betting.teams[0].totalAmount +
                              betting.teams[1].totalAmount)) *
                            100
                        ),
                      }}
                      right={{
                        text1: `${(
                          betting.teams[1].totalAmount / 10000
                        ).toFixed(1)}만`,
                        text2: `1:${betting.teams[1].odds.toFixed(1)}`,
                        text3: betting.teams[1].participantCount,
                        percent: Math.round(
                          (betting.teams[1].totalAmount /
                            (betting.teams[0].totalAmount +
                              betting.teams[1].totalAmount)) *
                            100
                        ),
                      }}
                      teams={[
                        betting.teams[0].teamName,
                        betting.teams[1].teamName,
                      ]}
                    />
                  </_.Bet>
                ))}
              </_.BetList>
              {/* 5개 이상일 때만 핸들러 노출 */}
              {bettings.length > 4 && (
                <_.ScrollHandlers>
                  <_.ScrollHandler
                    onClick={() => handleScroll(0, "right")}
                    disabled={!isNextStates[0]}
                  >
                    <RightArrow isNext={isNextStates[0]} />
                  </_.ScrollHandler>
                  <_.ScrollHandler onClick={() => handleScroll(0, "left")}>
                    <LeftArrow isNext={true} />
                  </_.ScrollHandler>
                </_.ScrollHandlers>
              )}
            </_.Bets>
          </_.BetLayer>
        </_.MainLayer>
      </_.Main>
    </_.Container>
  );
};

export default BettingList;
