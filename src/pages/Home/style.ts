import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  background-color: #1f2329;
  overflow-x: hidden;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 63px 0;
  gap: 60px;
  width: 100%;
`;
export const BannerContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Banner = styled.div<{ $gradient: "yellow" | "blue" }>`
  height: 270px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: ${({ $gradient }) =>
    $gradient === "yellow"
      ? "linear-gradient(90deg, #fcd34d 0%, #fef3c7 100%)"
      : "linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)"};
  position: relative;
`;

export const BannerCoinIcon = styled.img`
  height: 142px;
  margin-left: 92px;
`;
export const BannerWhaleIcon = styled.img`
  height: 300px;
  top: -50px;
  right: 0;
  position: absolute;
`;

export const BannerTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
`;

export const BannerWhaleContainer = styled.div`
  width: 100%;
  padding: 35px 48px 35px 60px;
`;

export const BannerTitle = styled.div`
  font-size: 72px;
  font-family: "Paperlogy-7Bold";
`;

export const BannerDivider = styled.hr`
  width: 68%;
  margin: 16px 0;
  border: 1px solid white;
`;

export const BannerSubText = styled.div`
  font-size: 28px;
  font-family: "Paperlogy-7Bold";
`;

export const BannerArrow = styled.div`
  display: flex;
  margin-left: auto;
`;

export const ArrowButton = styled.button<{ $active: boolean }>`
  background: transparent;
  border: none;
  cursor: ${({ $active }) => ($active ? "pointer" : "default")};
  opacity: ${({ $active }) => ($active ? 1 : 0.3)};
  svg {
    stroke: ${({ $active }) => ($active ? "#5C5EF5" : "#aaa")};
  }
`;
export const BannerText = styled.div`
  font-size: 40px;
  color: black;
  font-family: "WAGURI";
  padding-left: 80px;
`;
export const MenuContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const MenuText = styled.div`
  font-size: 24px;
  font-family: "Paperlogy-6SemiBold";
  color: white;
`;
export const MenuList = styled.div`
  display: flex;
  gap: 35px;
`;
export const Menu = styled.div`
  width: 50%;
  height: 132px;
  border-radius: 20px;
  background: linear-gradient(90deg, #8d94a7 0%, #555961 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
`;

export const Menu1TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Menu1Title = styled.div`
  color: white;
  font-size: 25px;
  font-family: "WAGURI";
`;

export const Menu1SubText = styled.div`
  color: white;
  font-size: 15px;
  font-family: "WAGURI";
  margin-left: auto;
`;

export const Menu1Image = styled.img`
  width: 90px;
  height: 90px;
`;
export const NowHotBetContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
export const NowHotBetText = styled.div`
  font-size: 24px;
  font-family: "Paperlogy-6SemiBold";
  color: white;
`;
export const NowHotBetList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
`;
export const HotBet = styled.div`
  flex: 1 1 calc(25% - 12px);
  max-width: calc(25% - 12px);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
