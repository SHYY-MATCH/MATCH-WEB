import * as S from "./style";

interface BetSmallProps {
  softwarePercent: number;
  hardwarePercent: number;
}

const BetSmall = ({ softwarePercent, hardwarePercent }: BetSmallProps) => {
  return (
    <S.Container>
      <S.SoftTeamContainer>
        <S.RedTitle>소프트웨어</S.RedTitle>
        <S.Main>
          <S.BlueText>{softwarePercent}%</S.BlueText>
          <S.BluePercentBarWrapper>
            <S.PercentBar $percent={softwarePercent} $color="#5C5EF5" />
          </S.BluePercentBarWrapper>
        </S.Main>
      </S.SoftTeamContainer>
      <S.Line />
      <S.HardWareTeamContainer>
        <S.BlueTitle>임베디드</S.BlueTitle>
        <S.Main>
          <S.RedText>{hardwarePercent}%</S.RedText>
          <S.RedPercentBarWrapper>
            <S.PercentBar $percent={hardwarePercent} $color="#E25B79" />
          </S.RedPercentBarWrapper>
        </S.Main>
      </S.HardWareTeamContainer>
    </S.Container>
  );
};

export default BetSmall;
