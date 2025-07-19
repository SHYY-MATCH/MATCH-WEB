"use client";

import SideBar from "../../components/SideBar";
import RankProfile from "../../components/RankProfile";
import { formatNumberWithCommas } from "../../shared/utils/numberFomat";
import { renderCharacter } from "../../shared/utils/renderCharacter";
import { useRanking } from "../../shared/hooks/useRanking";
import * as S from "./style";

const Ranking = () => {
  const { data: rankingUsers, isLoading, error } = useRanking();

  if (isLoading) {
    return (
      <S.PageWrapper>
        <SideBar />
        <S.Content>
          <div>로딩 중...</div>
        </S.Content>
      </S.PageWrapper>
    );
  }

  if (error) {
    return (
      <S.PageWrapper>
        <SideBar />
        <S.Content>
          <div>랭킹 데이터를 불러오는데 실패했습니다.</div>
        </S.Content>
      </S.PageWrapper>
    );
  }

  if (!rankingUsers || rankingUsers.length === 0) {
    return (
      <S.PageWrapper>
        <SideBar />
        <S.Content>
          <div>랭킹 데이터가 없습니다.</div>
        </S.Content>
      </S.PageWrapper>
    );
  }

  // 상위 3명 추출 (2등, 1등, 3등 순서로 배치)
  const topThree = [
    rankingUsers[1], // 2등
    rankingUsers[0], // 1등
    rankingUsers[2], // 3등
  ].map((user, index) => ({
    name: user.nickname,
    rank: index === 0 ? 2 : index === 1 ? 1 : 3, // 2, 1, 3 순서로 rank 설정
    amount: user.money,
    gender: "man" as const, // 기본값으로 설정, 실제로는 API에서 받아와야 함
    clothes: "기본 옷", // 기본값으로 설정, 실제로는 API에서 받아와야 함
    accessories: "에어팟", // 기본값으로 설정, 실제로는 API에서 받아와야 함
  }));

  // 4위 이하 추출
  const others = rankingUsers.slice(3).map((user, index) => ({
    rank: index + 4,
    name: user.nickname,
    money: user.money,
    successBet: user.winCount,
    failBet: user.loseCount,
    maxBet: `${user.maxProfitRate.toFixed(1)}x`,
    currentBets: [
      { type: "success" as const },
      { type: "draw" as const },
      { type: "fail" as const },
      { type: "fail" as const },
      { type: "success" as const },
    ], // 기본값으로 설정, 실제로는 API에서 받아와야 함
  }));

  return (
    <S.PageWrapper>
      <SideBar />
      <S.Content>
        <S.TopThreeSection>
          {topThree.map((user) => {
            const rank = user.rank;
            const topStyle =
              rank === 1 ? "-14.5rem" : rank === 2 ? "-14.8rem" : "-14.5rem";

            return (
              <S.TopCard key={user.rank} rank={rank}>
                {/* 캐릭터 */}
                {renderCharacter({
                  gender: user.gender,
                  clothes: user.clothes,
                  accessories: user.accessories,
                  topStyle,
                })}

                {/* Podium */}
                <S.CardContent rank={rank}>
                  <S.RankBadge>{rank}</S.RankBadge>
                  <S.NameText>{user.name}</S.NameText>
                  <S.AmountText>
                    {formatNumberWithCommas(user.amount)}
                  </S.AmountText>
                </S.CardContent>
              </S.TopCard>
            );
          })}
        </S.TopThreeSection>

        {/* Other Rankers */}
        <S.OthersSection>
          <S.TableHeader>
            <div>순위</div>
            <div>플레이어</div>
            <div>현재 자산</div>
            <div>베팅 성공</div>
            <div>베팅 실패</div>
            <div>최대 이익률</div>
            <S.Center>최근 다섯 경기 결과</S.Center>
          </S.TableHeader>

          {others.map((profile) => (
            <div key={profile.rank}>
              <RankProfile
                name={profile.name}
                rank={profile.rank}
                money={profile.money}
                successBet={profile.successBet}
                failBet={profile.failBet}
                maxBet={profile.maxBet}
                currentBets={profile.currentBets}
              />
            </div>
          ))}
        </S.OthersSection>
      </S.Content>
    </S.PageWrapper>
  );
};

export default Ranking;
