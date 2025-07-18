"use client";

import SideBar from "../../components/SideBar";
import RankProfile from "../../components/RankProfile";
import { formatNumberWithCommas } from "../../shared/utils/numberFomat";
import { renderCharacter } from "../../shared/utils/renderCharacter";
import * as S from "./style";

const Ranking = () => {
  const topThree: {
    name: string;
    rank: number;
    amount: number;
    gender: "man" | "woman";
    clothes: string;
    accessories: string;
  }[] = [
    {
      name: "김예진",
      rank: 2,
      amount: 2720488000,
      gender: "woman",
      clothes: "김예진의 버블검 옷",
      accessories: "김예진의 캠코더",
    },
    {
      name: "김시연",
      rank: 1,
      amount: 2720488000,
      gender: "woman",
      clothes: "김시연의 똥 옷",
      accessories: "김시연의 푸룬주스",
    },
    {
      name: "강시우",
      rank: 3,
      amount: 2720488000,
      gender: "man",
      clothes: "강시우의 NUS 옷",
      accessories: "강시우의 드럼스틱",
    },
  ];

  const others: {
    rank: number;
    name: string;
    money: number;
    successBet: number;
    failBet: number;
    maxBet: string;
    currentBets: { type: "success" | "draw" | "fail" }[];
  }[] = [
    {
      rank: 4,
      name: "박미정",
      money: 2720488000,
      successBet: 3,
      failBet: 6,
      maxBet: "6.2x",
      currentBets: [
        { type: "success" },
        { type: "draw" },
        { type: "fail" },
        { type: "fail" },
        { type: "success" },
      ],
    },
    {
      rank: 5,
      name: "최지훈",
      money: 2720488000,
      successBet: 3,
      failBet: 6,
      maxBet: "6.2x",
      currentBets: [
        { type: "success" },
        { type: "success" },
        { type: "fail" },
        { type: "draw" },
        { type: "success" },
      ],
    },
    {
      rank: 6,
      name: "이하나",
      money: 2720488000,
      successBet: 3,
      failBet: 6,
      maxBet: "6.2x",
      currentBets: [
        { type: "fail" },
        { type: "fail" },
        { type: "success" },
        { type: "draw" },
        { type: "success" },
      ],
    },
  ];

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
