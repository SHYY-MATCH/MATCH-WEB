import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  display: flex;
  min-height: 100vh;
  background-color: #1f2329;
  position: relative;
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
  border-radius: 20px;
  background: linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  font-size: 24px;
  font-style: italic;
  color: white;
`;

export const Matchup = styled.div`
  color: white;
  font-size: 18px;
  font-family: "Paperlogy-4Regular";
`;

export const Team = styled.span<{ $isRight?: boolean }>`
  font-weight: ${({ $isRight }) => ($isRight ? "bold" : "normal")};
`;

export const WhaleImage = styled.img`
  height: 300px;
  top: 30px;
  right: 130px;
  position: absolute;
`;
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
