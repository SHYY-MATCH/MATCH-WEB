import * as _ from "./style.ts";
import SideBar from "../../components/SideBar";
import LeftArrow from "../../assets/Icons/LeftArrow.tsx";
import BetButton from "../../components/BetButton.tsx";
import BlueMoney from "../../assets/betting/component/img/blue_money.svg";
import BluePercet from "../../assets/betting/component/img/blue_percent.svg";
import BluePeople from "../../assets/betting/component/img/blue_people.svg";
import RedMoney from "../../assets/betting/component/img/red_money.svg";
import RedPercet from "../../assets/betting/component/img/red_percent.svg";
import RedPeople from "../../assets/betting/component/img/red_people.svg";
import { useParams, useNavigate } from "react-router-dom";
import { useBettingDetail } from "../../shared/hooks/useBettingDetail";
import { useParticipateBetting } from "../../shared/hooks/useParticipateBetting";
import { useUserStatus } from "../../shared/hooks/useUserStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const BettingDetail = () => {
  const { bettingId } = useParams<{ bettingId: string }>();
  const navigate = useNavigate();
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);
  const [betAmount, setBetAmount] = useState<string>("");
  const { data: userStatus, isLoading: userStatusLoading } = useUserStatus();
  const queryClient = useQueryClient();

  const {
    data: bettingDetail,
    isLoading,
    error,
  } = useBettingDetail(Number(bettingId));
  const participateBetting = useParticipateBetting();

  const handleBackClick = () => {
    navigate("/betting-list");
  };

  const handleTeamSelect = (teamId: number) => {
    setSelectedTeamId(teamId);
  };

  const handleBetAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setBetAmount(value);
  };

  const handleBetting = () => {
    if (!selectedTeamId || !betAmount || !bettingId) {
      alert("팀을 선택하고 금액을 입력해주세요.");
      return;
    }

    const amount = parseInt(betAmount);
    if (amount <= 0) {
      alert("올바른 금액을 입력해주세요.");
      return;
    }

    // 자산 체크 시 동적 값 사용
    if (amount > (userStatus?.currentAsset ?? 0)) {
      alert("보유 자산보다 많은 금액을 배팅할 수 없습니다.");
      return;
    }

    participateBetting.mutate(
      {
        bettingId: Number(bettingId),
        teamId: selectedTeamId,
        amount: amount,
      },
      {
        onSuccess: () => {
          alert("배팅이 완료되었습니다!");
          setBetAmount("");
          setSelectedTeamId(null);
          queryClient.invalidateQueries({ queryKey: ["userStatus"] });
        },
        onError: (error) => {
          alert("배팅 중 오류가 발생했습니다: " + error.message);
        },
      }
    );
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

  if (error || !bettingDetail) {
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

  const team1 = bettingDetail.teams[0];
  const team2 = bettingDetail.teams[1];
  const totalAmount = team1.totalAmount + team2.totalAmount;
  const team1Percent =
    totalAmount > 0 ? Math.round((team1.totalAmount / totalAmount) * 100) : 50;
  const team2Percent =
    totalAmount > 0 ? Math.round((team2.totalAmount / totalAmount) * 100) : 50;

  // 동적 배당률 계산
  const team1Odds =
    team1.totalAmount === 0 ? 1 : totalAmount / team1.totalAmount;
  const team2Odds =
    team2.totalAmount === 0 ? 1 : totalAmount / team2.totalAmount;

  return (
    <_.Container>
      <SideBar />
      <_.Main>
        <_.MainLayer>
          <_.BackButton onClick={handleBackClick}>
            <_.BackButtonIcon>
              <LeftArrow />
            </_.BackButtonIcon>
            <_.BackButtonText>돌아가기</_.BackButtonText>
          </_.BackButton>
          <_.MainContentsLayer>
            <_.Title>{bettingDetail.sportName}</_.Title>
            <_.AssetLayer>
              <_.Asset>현재 내 자산</_.Asset>
              <_.Asset>
                {userStatusLoading
                  ? "로딩 중..."
                  : userStatus?.currentAsset?.toLocaleString() ?? "0"}
              </_.Asset>
            </_.AssetLayer>
            <_.BetSettings>
              <_.ChoiceTeam>
                <_.ChoiceTeamTitle>
                  배팅할 팀을 선택 해 주세요
                </_.ChoiceTeamTitle>
                <_.ChoiceTeamButtonSection>
                  <_.ChoiceTeamButton
                    text={team1.teamName}
                    isActive={selectedTeamId === team1.teamId}
                    onClick={() => handleTeamSelect(team1.teamId)}
                  />
                  <BetButton
                    text={team2.teamName}
                    isActive={selectedTeamId === team2.teamId}
                    onClick={() => handleTeamSelect(team2.teamId)}
                  />
                </_.ChoiceTeamButtonSection>
              </_.ChoiceTeam>
              <_.SetAmount>
                <_.Asset>배팅할 금액을 입력해 주세요</_.Asset>
                <_.EnterAmount
                  placeholder={"금액을 입력해 주세요"}
                  value={betAmount}
                  onChange={handleBetAmountChange}
                />
                <_.BettingButton
                  onClick={handleBetting}
                  disabled={participateBetting.isPending}
                >
                  {participateBetting.isPending ? "배팅 중..." : "배팅하기"}
                </_.BettingButton>
              </_.SetAmount>
            </_.BetSettings>
            <_.Status>
              <_.StatusText>현황</_.StatusText>
              <_.PerTeam>
                <_.BlueStatusDetail>
                  <_.BlueStatusTitleLayer>
                    <_.BlueStatusTeam>{team1.teamName}</_.BlueStatusTeam>
                    <_.BlueStatusPercent>
                      <_.BlueStatusPercentText>
                        {team1Percent}%
                      </_.BlueStatusPercentText>
                      <_.BlueStatusPercentBar />
                    </_.BlueStatusPercent>
                  </_.BlueStatusTitleLayer>
                  <_.BlueStatusSymbols>
                    <_.BlueStatusSymbol>
                      <_.BlueStatusSymbolIcon
                        src={BlueMoney}
                        style={{ width: "28px" }}
                      />
                      <_.BlueStatusSymbolText>
                        {(team1.totalAmount / 10000).toFixed(1)}만
                      </_.BlueStatusSymbolText>
                    </_.BlueStatusSymbol>
                    <_.BlueStatusSymbol>
                      <_.BlueStatusSymbolIcon
                        src={BluePercet}
                        style={{ width: "28px" }}
                      />
                      <_.BlueStatusSymbolText>
                        1:{team1Odds.toFixed(1)}
                      </_.BlueStatusSymbolText>
                    </_.BlueStatusSymbol>
                    <_.BlueStatusSymbol>
                      <_.BlueStatusSymbolIcon
                        src={BluePeople}
                        style={{ width: "28px" }}
                      />
                      <_.BlueStatusSymbolText>
                        {team1.participantCount}
                      </_.BlueStatusSymbolText>
                    </_.BlueStatusSymbol>
                  </_.BlueStatusSymbols>
                  <_.BlueBetInfos>
                    <_.BlueBetInfo>
                      <_.BlueBetInfoCat>현재 내 배팅 상황</_.BlueBetInfoCat>
                      <_.BlueBetInfoTex>
                        {selectedTeamId === team1.teamId && betAmount
                          ? parseInt(betAmount).toLocaleString()
                          : "0"}
                      </_.BlueBetInfoTex>
                    </_.BlueBetInfo>
                    <_.BlueBetInfo>
                      <_.BlueBetInfoCat>배팅 성공 시 환급량</_.BlueBetInfoCat>
                      <_.BlueBetInfoTex>
                        {selectedTeamId === team1.teamId && betAmount
                          ? Math.floor(
                              parseInt(betAmount) * team1Odds
                            ).toLocaleString()
                          : "0"}
                      </_.BlueBetInfoTex>
                    </_.BlueBetInfo>
                  </_.BlueBetInfos>
                </_.BlueStatusDetail>

                <_.RedStatusDetail>
                  <_.RedStatusTitleLayer>
                    <_.RedStatusTeam>{team2.teamName}</_.RedStatusTeam>
                    <_.RedStatusPercent>
                      <_.RedStatusPercentText>
                        {team2Percent}%
                      </_.RedStatusPercentText>
                      <_.RedStatusPercentBar />
                    </_.RedStatusPercent>
                  </_.RedStatusTitleLayer>
                  <_.RedStatusSymbols>
                    <_.RedStatusSymbol>
                      <_.RedStatusSymbolIcon
                        src={RedMoney}
                        style={{ width: "28px" }}
                      />
                      <_.RedStatusSymbolText>
                        {(team2.totalAmount / 10000).toFixed(1)}만
                      </_.RedStatusSymbolText>
                    </_.RedStatusSymbol>
                    <_.RedStatusSymbol>
                      <_.RedStatusSymbolIcon
                        src={RedPercet}
                        style={{ width: "28px" }}
                      />
                      <_.RedStatusSymbolText>
                        1:{team2Odds.toFixed(1)}
                      </_.RedStatusSymbolText>
                    </_.RedStatusSymbol>
                    <_.RedStatusSymbol>
                      <_.RedStatusSymbolIcon
                        src={RedPeople}
                        style={{ width: "28px" }}
                      />
                      <_.RedStatusSymbolText>
                        {team2.participantCount}
                      </_.RedStatusSymbolText>
                    </_.RedStatusSymbol>
                  </_.RedStatusSymbols>
                  <_.RedBetInfos>
                    <_.RedBetInfo>
                      <_.RedBetInfoCat>현재 내 배팅 상황</_.RedBetInfoCat>
                      <_.RedBetInfoTex>
                        {selectedTeamId === team2.teamId && betAmount
                          ? parseInt(betAmount).toLocaleString()
                          : "0"}
                      </_.RedBetInfoTex>
                    </_.RedBetInfo>
                    <_.RedBetInfo>
                      <_.RedBetInfoCat>배팅 성공 시 환급량</_.RedBetInfoCat>
                      <_.RedBetInfoTex>
                        {selectedTeamId === team2.teamId && betAmount
                          ? Math.floor(
                              parseInt(betAmount) * team2Odds
                            ).toLocaleString()
                          : "0"}
                      </_.RedBetInfoTex>
                    </_.RedBetInfo>
                  </_.RedBetInfos>
                </_.RedStatusDetail>
              </_.PerTeam>
            </_.Status>
          </_.MainContentsLayer>
        </_.MainLayer>
      </_.Main>
    </_.Container>
  );
};

export default BettingDetail;
