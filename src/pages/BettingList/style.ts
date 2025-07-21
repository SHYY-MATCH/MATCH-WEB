import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  background: #1f2329;
  overflow-x: hidden;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 63px 0;
  gap: 60px;
  width: 100%;
  flex: 1;
`;

export const MainLayer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;

  width: 100%;

  align-items: center;
`;

export const Banner = styled.section`
  position: relative;

  width: 85%;
  height: 270px;
  border-radius: 16px;
  background: linear-gradient(90deg, #4d4fe2 0%, #1a8fec 100%);
`;

export const BannerLayer = styled.section`
  position: relative;
  left: 60px;

  width: fit-content;
  height: 100%;

  display: flex;
  gap: 57px;
`;

export const BannerTextLayer = styled.section`
  display: flex;
  position: relative;
  top: 42px;

  flex-direction: column;
  gap: 12px;
`;

export const BannerTitleAndTime = styled.span`
  display: flex;
  gap: 20px;
  align-items: flex-end;
`;

export const BannerTitle = styled.span`
  color: #fff;

  font-family: "Paperlogy-7Bold";
  font-size: 48px;
`;

export const BannerTime = styled.span`
  color: #fff;

  font-family: "Paperlogy-7Bold";
  font-size: 28px;
`;

export const BannerText = styled.span`
  color: #fff;
  font-feature-settings: "ss05" on;

  font-family: "Paperlogy-4Regular";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 28.8px */
  letter-spacing: -0.15px;
`;

export const BannerBet = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 356px;
  height: 100%;
`;

export const BannerImg = styled.img`
  position: absolute;
  right: 55px;
  bottom: 8px;
  width: 309;
`;

export const Bets = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const BetsTitle = styled.span`
  color: #fff;
  font-feature-settings: "ss05" on;

  font-family: "Paperlogy-6SemiBold";
  font-size: 24px;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
`;

export const BetList = styled.div`
  margin-top: 4px;
  max-height: 600px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Bet = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: fit-content;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const BetLayer = styled.section`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
