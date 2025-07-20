import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  display: flex;
  background-color: #1f2329;
  position: relative;
  overflow-x: hidden;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 63px 0;
`;
export const ContentContent = styled.div`
  width: 85%;
`;
export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  gap: 16px;
`;
export const BannerWrapper = styled.div`
  width: 100%;
  height: 270px;
  border-radius: 16px;
  background: linear-gradient(90deg, #4d4fe2 0%, #1a8fec 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const BannerContent = styled.div`
  display: flex;
  width: 65%;
  justify-content: space-between;
`;

export const BannerHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
`;

export const BannerHeaderContainer = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  margin-left: 60px;
  padding-right: 57px;
  gap: 12px;
`;

export const BetRegular = styled.div`
  width: 356px;
`;

export const SportType = styled.div`
  font-size: 48px;
  color: white;
  font-family: "Paperlogy-7Bold";
`;

export const Time = styled.div`
  font-size: 28px;
  color: white;
  font-family: "Paperlogy-7Bold";
`;

export const Matchup = styled.div`
  color: white;
  font-size: 18px;
  font-family: "Paperlogy-4Regular";
  font-feature-settings: "ss05" on;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.15px;
`;

export const Team = styled.span<{ $isRight?: boolean }>`
  font-weight: ${({ $isRight }) => ($isRight ? "bold" : "normal")};
`;

export const WhaleImage = styled.img`
  position: absolute;
  right: 55px;
  bottom: 8px;
  width: 309px;
  height: 300px;
`;
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Write = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
  width: 100px;
  height: 100px;
  background-color: #5c5ef5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  cursor: pointer;
`;
