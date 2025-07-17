import styled from "styled-components";

export const Container = styled.main`
  height: 160px;
  padding: 16px 17px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: #181d25;
  position: relative;
`;

export const SoftTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  gap: 7px;
`;

export const RedTitle = styled.div`
  font-size: 16px;
  font-family: "Paperlogy-7Bold";
  color: #5c5ef5;
  margin-left: auto;
`;

export const BlueTitle = styled.div`
  font-size: 16px;
  font-family: "Paperlogy-7Bold";
  color: #e25b79;
  margin-right: auto;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const RedSubContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  margin-top: 8px;
`;

export const BlueSubContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  margin-left: auto;
  margin-top: 8px;
`;

export const Text = styled.div`
  font-size: 12px;
  font-family: "Paperlogy-5Medium";
  color: #9da0a4;
`;

export const Line = styled.div`
  width: 1px;
  background-color: #454a52;
  height: 100%;
  align-self: stretch;
  margin: 0 12px;
`;

export const HardWareTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  gap: 7px;
`;

export const RedPercentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 8px;
`;

export const BluePercentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;

export const RedPercentText = styled.div`
  font-size: 28px;
  font-family: "Paperlogy-7Bold";
  color: #5c5ef5;
  margin-bottom: 4px;
`;

export const BluePercentText = styled.div`
  font-size: 28px;
  font-family: "Paperlogy-7Bold";
  color: #e25b79;
  margin-bottom: 4px;
`;

export const PercentBarWrapper = styled.div`
  width: 100px;
  height: 6px;
  background-color: #2a2f36;
  border-radius: 3px;
  overflow: hidden;
`;

export const PercentBar = styled.div<{ $percent: number; $color: string }>`
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  background-color: ${({ $color }) => $color};
  transition: width 0.3s ease;
  border-radius: 3px;
`;
