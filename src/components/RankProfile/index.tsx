import Fail from "../../assets/Icons/Fail";
import Success from "../../assets/Icons/Success";
import Draw from "../../assets/Icons/Draw";
import * as S from "./style";

interface RankProfileProps {
  rank: number;
  name: string;
  money: string | number;
  successBet: number;
  failBet: number;
  maxBet: string;
  currentBets: { type: "success" | "fail" | "draw" }[];
}

const RankProfile = ({
  rank,
  name,
  money,
  successBet,
  failBet,
  maxBet,
  currentBets,
}: RankProfileProps) => {
  const renderBetIcon = (type: "success" | "fail" | "draw", index: number) => {
    switch (type) {
      case "success":
        return <Success key={index} />;
      case "fail":
        return <Fail key={index} />;
      case "draw":
        return <Draw key={index} />;
    }
  };

  const formattedMoney = Number(money).toLocaleString();

  return (
    <S.Container>
      <S.Rank>{rank}</S.Rank>
      <S.ProfileContainer>
        <div>{name}</div>
      </S.ProfileContainer>
      <div>{formattedMoney}</div>
      <div>{successBet}</div>
      <div>{failBet}</div>
      <div>{maxBet}</div>
      <S.CurentBetsContainer>
        {currentBets.map((bet, index) => renderBetIcon(bet.type, index))}
      </S.CurentBetsContainer>
    </S.Container>
  );
};

export default RankProfile;
