import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4rem 2fr 1.5fr 1fr 1fr 1fr 1fr;
  align-items: center;
  width: 100%;
  font-size: 16px;
  font-family: "Paperlogy-4Regular";
  padding: 0.75rem 1rem;
  color: white;
  border-radius: 0.5rem;
`;
export const Rank = styled.div`
  font-size: 18px;
  font-family: "Paperlogy-5Medium";
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`;

export const CurentBetsContainer = styled.div`
  display: flex;
  gap: 8px;
`;
