import styled from "styled-components";

export const Container = styled.main`
  width: 280px;
  height: 100px;
  padding: 16px 17px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: #181d25;
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
  padding-top: 13px;
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

export const RedText = styled.div`
  font-size: 28px;
  font-family: "Paperlogy-6SemiBold";
  color: #e25b79;
  margin-bottom: 4px;
`;

export const BlueText = styled.div`
  font-size: 28px;
  font-family: "Paperlogy-6SemiBold";
  color: #5c5ef5;
  margin-bottom: 4px;
  margin-left: auto;
`;

export const BluePercentBarWrapper = styled.div`
  width: 100px;
  height: 6px;
  background-color: #2a2f36;
  border-radius: 3px;
  overflow: hidden;
  margin-left: auto;
`;

export const RedPercentBarWrapper = styled.div`
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
