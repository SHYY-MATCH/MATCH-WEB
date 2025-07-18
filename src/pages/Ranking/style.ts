import styled from "styled-components";

export const PageWrapper = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  background-color: #11131a;
  color: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;
  margin-top: 250px;
`;

export const OthersSection = styled.section`
  width: 90%;
  max-width: 75rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const TopThreeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;
  margin-top: 2rem;
`;

export const TopCard = styled.div<{ rank: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 11rem;
  position: relative;
`;

export const CardContent = styled.div<{ rank: number }>`
  width: 12.5rem;
  background: ${({ rank }) => (rank === 1 ? "#181D25" : "#141821")};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ rank }) =>
    rank === 1
      ? "2rem 2rem 0 0"
      : rank === 2
      ? "2rem 2rem 0 1.25rem"
      : "2rem 2rem 1.25rem 0"};
  height: ${({ rank }) =>
    rank === 1 ? "15rem" : rank === 2 ? "12rem" : "10rem"};
  padding: 5rem 0;
  z-index: 1;
  position: relative;

  ${({ rank }) => {
    switch (rank) {
      case 1:
        return "z-index: 3;";
      case 2:
        return "margin-right: -1rem; z-index: 2;";
      case 3:
        return "margin-left: -1rem; z-index: 1;";
      default:
        return "";
    }
  }}
`;

export const RankBadge = styled.div`
  position: absolute;
  top: 10px;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #5c5ef5;
  border-radius: 50%;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NameText = styled.p`
  width: fit-content;
  font-size: 20px;
  color: #c9cacc;
  font-family: "Paperlogy-6SemiBold";
  margin-top: 0.4rem;
`;

export const AmountText = styled.p`
  font-size: 18px;
  font-family: "Paperlogy-5Medium";
  color: #5d5fef;
  padding-top: 4px;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 4rem 2fr 1.5fr 1fr 1fr 1fr 1fr;
  padding: 0.75rem 1rem;
  background: linear-gradient(90deg, #3b55df 0%, #5d5fef 100%);
  color: white;
  font-size: 14px;
  font-family: "Paperlogy-4Regular";
  border-radius: 0.5rem;
  background: linear-gradient(
    90deg,
    #3c3a9f 0%,
    #4356cc 35%,
    #4185e0 70%,
    #42a5f5 100%
  );

  div {
    display: flex;
  }
`;

export const Center = styled.div`
  display: flex;
`;
