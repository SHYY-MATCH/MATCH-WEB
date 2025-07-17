import React from "react";
import * as S from "./style";
import Coin from "../../assets/Icons/Coin";
import Trophy from "../../assets/Icons/Trophy";
import User from "../../assets/Icons/User";

interface TeamData {
  text1: string;
  text2: string;
  text3: number;
  percent: number;
}

interface BetRegularProps {
  left: TeamData;
  right: TeamData;
  teams: [string, string];
}

const BetRegular = ({ left, right, teams }: BetRegularProps) => {
  const leftList = [
    { id: 1, icon: Coin, text: left.text1 },
    { id: 2, icon: Trophy, text: left.text2 },
    { id: 3, icon: User, text: left.text3.toString(), percent: left.percent },
  ];

  const rightList = [
    { id: 1, icon: Coin, text: right.text1 },
    { id: 2, icon: Trophy, text: right.text2 },
    { id: 3, icon: User, text: right.text3.toString(), percent: right.percent },
  ];

  return (
    <S.Container>
      {/* 왼쪽 팀 */}
      <S.SoftTeamContainer>
        <S.RedTitle>{teams[0]}</S.RedTitle>
        <S.Main>
          {leftList.map(({ id, icon: Icon, text, percent }) => (
            <React.Fragment key={id}>
              <S.RedSubContainer>
                <Icon />
                <S.Text>{text}</S.Text>
              </S.RedSubContainer>
              {percent !== undefined && id === 3 && (
                <S.RedPercentContainer>
                  <S.RedPercentText>{percent}%</S.RedPercentText>
                  <S.PercentBarWrapper>
                    <S.PercentBar $percent={percent} $color="#5C5EF5" />
                  </S.PercentBarWrapper>
                </S.RedPercentContainer>
              )}
            </React.Fragment>
          ))}
        </S.Main>
      </S.SoftTeamContainer>

      <S.Line />

      {/* 오른쪽 팀 */}
      <S.HardWareTeamContainer>
        <S.BlueTitle>{teams[1]}</S.BlueTitle>
        <S.Main>
          {rightList.map(({ id, icon: Icon, text, percent }) => (
            <React.Fragment key={id}>
              <S.BlueSubContainer>
                <S.Text>{text}</S.Text>
                <Icon isPink />
              </S.BlueSubContainer>
              {percent !== undefined && id === 3 && (
                <S.BluePercentContainer>
                  <S.BluePercentText>{percent}%</S.BluePercentText>
                  <S.PercentBarWrapper>
                    <S.PercentBar $percent={percent} $color="#E25B79" />
                  </S.PercentBarWrapper>
                </S.BluePercentContainer>
              )}
            </React.Fragment>
          ))}
        </S.Main>
      </S.HardWareTeamContainer>
    </S.Container>
  );
};

export default BetRegular;
