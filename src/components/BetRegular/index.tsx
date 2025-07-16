import React from "react";
import * as S from "./style";
import Coin from "../../assets/Icons/Coin";
import Trophy from "../../assets/Icons/Trophy";
import User from "../../assets/Icons/User";

const BetRegular = () => {
  const infoList = [
    { id: 1, icon: Coin, text: "382.7만" },
    { id: 2, icon: Trophy, text: "1:1.2" },
    { id: 3, icon: User, text: "62", percent: 67 },
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
              {percent !== undefined && (
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
              {percent !== undefined && (
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
