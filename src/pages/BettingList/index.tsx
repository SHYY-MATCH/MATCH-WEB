import * as _ from "./style.ts";
import SideBar from "../../components/SideBar";
import BetRegular from "../../components/BetRegular";
import { useEffect, useState } from "react";
import Whale from "../../assets/whale.png";
import BetTitle from "../../components/BetTitle";
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
            percent: isNaN(
              Math.round(
                (firstBetting.teams[0].totalAmount /
                  (firstBetting.teams[0].totalAmount +
                    firstBetting.teams[1].totalAmount)) *
                  100
              )
            )
              ? 50
              : Math.round(
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
            percent: isNaN(
              Math.round(
                (firstBetting.teams[1].totalAmount /
                  (firstBetting.teams[0].totalAmount +
                    firstBetting.teams[1].totalAmount)) *
                  100
              )
            )
              ? 50
              : Math.round(
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

  const handleBettingClick = (bettingId: number) => {
    navigate(`/betting-detail/${bettingId}`);
  };

  if (isLoading) {
    return (
      <_.Container>
        <SideBar />
        <_.Main>
          <div>로딩 중...</div>
        </_.Main>
      </_.Container>
    );
  }

  if (error) {
    return (
      <_.Container>
        <SideBar />
        <_.Main>
          <div>배팅 목록을 불러오는데 실패했습니다.</div>
        </_.Main>
      </_.Container>
    );
  }

  if (!bettings || bettings.length === 0) {
    return (
      <_.Container>
        <SideBar />
        <_.Main>
          <div>배팅 목록이 없습니다.</div>
        </_.Main>
      </_.Container>
    );
  }

  return (
    <_.Container>
      <SideBar />
      <_.Main>
        <_.MainLayer>
          <_.Banner>
            <_.BannerLayer>
              <_.BannerTextLayer>
                <_.BannerTitleAndTime>
                  <_.BannerTitle>{bannerInfo?.title}</_.BannerTitle>
                  <_.BannerTime>{bannerInfo?.time}</_.BannerTime>
                </_.BannerTitleAndTime>
                <_.BannerText>{bannerInfo?.text}</_.BannerText>
              </_.BannerTextLayer>
              {bannerInfo && (
                <_.BannerBet>
                  <BetRegular
                    left={bannerInfo.bet.left}
                    right={bannerInfo.bet.right}
                    teams={bannerInfo.bet.teams}
                  />
                </_.BannerBet>
              )}
            </_.BannerLayer>
            <_.BannerImg src={Whale} alt="whale" />
          </_.Banner>

          <_.BetLayer>
            <_.Bets>
              <_.BetsTitle>전체 배팅 목록</_.BetsTitle>
              <_.BetList>
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
                        percent: isNaN(
                          Math.round(
                            (betting.teams[0].totalAmount /
                              (betting.teams[0].totalAmount +
                                betting.teams[1].totalAmount)) *
                              100
                          )
                        )
                          ? 50
                          : Math.round(
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
                        percent: isNaN(
                          Math.round(
                            (betting.teams[1].totalAmount /
                              (betting.teams[1].totalAmount +
                                betting.teams[0].totalAmount)) *
                              100
                          )
                        )
                          ? 50
                          : Math.round(
                              (betting.teams[1].totalAmount /
                                (betting.teams[1].totalAmount +
                                  betting.teams[0].totalAmount)) *
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
            </_.Bets>
          </_.BetLayer>
        </_.MainLayer>
      </_.Main>
    </_.Container>
  );
};

export default BettingList;
