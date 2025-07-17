import React from "react";
import * as S from "./style";
import Coin from "../../assets/Icons/Coin";
import Trophy from "../../assets/Icons/Trophy";
import User from "../../assets/Icons/User";

interface BetRegularProps {
  data: {
    text1: string;
    text2: string;
    text3: number;
    percent: number;
  };
}

const BetRegular = ({ data }: BetRegularProps) => {
  const infoList = [
    { id: 1, icon: Coin, text: data.text1 },
    { id: 2, icon: Trophy, text: data.text2 },
    { id: 3, icon: User, text: data.text3.toString(), percent: data.percent },
  ];

  return (
    <S.Container>
      {/* 소프트웨어 팀 */}
      <S.SoftTeamContainer>
        <S.RedTitle>소프트웨어</S.RedTitle>
        <S.Main>
          {infoList.map(({ id, icon: Icon, text, percent }) => (
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

      {/* 임베디드 팀 */}
      <S.HardWareTeamContainer>
        <S.BlueTitle>임베디드</S.BlueTitle>
        <S.Main>
          {infoList.map(({ id, icon: Icon, text, percent }) => (
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
