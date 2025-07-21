import styled from "styled-components";
import BetButton from "../../components/BetButton.tsx";

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  background: #1f2329;
  overflow-x: hidden;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 46px 0 100px 0;
  gap: 60px;
  width: 100%;
  min-height: 130vh;
`;

export const MainLayer = styled.div`
  position: relative;
  width: 85%;
  min-height: 130vh;
`;

export const BackButton = styled.section`
  position: absolute;
  left: -28px;

  display: flex;
  gap: 4px;
`;

export const BackButtonIcon = styled.section`
  width: 24px;
`;

export const BackButtonText = styled.section`
  width: fit-content;
  color: #70747a;
  font-feature-settings: "ss05" on;

  /* paragraph/p1 */
  font-family: "Paperlogy-4Regular";
  font-size: 18px;
  line-height: 160%; /* 28.8px */
  letter-spacing: -0.15px;
`;

export const MainContentsLayer = styled.div`
  position: relative;
  top: 57px;
`;

export const Title = styled.span`
  color: #fff;

  font-family: "Paperlogy-7Bold";
  font-size: 36px;
  line-height: 140%; /* 50.4px */
  letter-spacing: 0.25px;
`;

export const AssetLayer = styled.section`
  margin-top: 20px;
  display: flex;
  gap: 28px;
`;

export const Asset = styled.span`
  color: #c9cacc;
  text-align: center;
  font-feature-settings: "ss05" on;

  font-family: "Paperlogy-5Medium";
  font-size: 18px;
  line-height: 140%; /* 25.2px */
  letter-spacing: 0.15px;
`;

export const BetSettings = styled.section`
  margin-top: 44px;
  display: flex;
  gap: 134px;

  margin-bottom: 108px;
`;

export const ChoiceTeam = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ChoiceTeamTitle = styled.span`
  color: #c9cacc;
  font-feature-settings: "ss05" on;

  font-family: "Paperlogy-4Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
`;

export const ChoiceTeamButtonSection = styled.section`
  display: flex;
  gap: 20px;
`;

export const ChoiceTeamButton = styled(BetButton)`
  flex-grow: 0;
`;

export const SetAmount = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;

  align-items: flex-start;
`;

export const EnterAmount = styled.input`
  border-radius: 29px;

  padding: 15px 22px;

  width: 496px;

  color: #9da0a4;
  font-feature-settings: "ss05" on;

  font-family: "Paperlogy-4Regular";
  font-size: 18px;
  line-height: 160%; /* 28.8px */
  letter-spacing: -0.15px;

  background: none;
  border: 1px solid #70747a;
  outline: none;

  color: #e8e9ea;
`;

export const Status = styled.section`
  display: flex;
  flex-direction: column;
`;

export const StatusText = styled.span`
  color: #c9cacc;
  font-feature-settings: "ss05" on;

  font-family: "Paperlogy-4Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
`;

export const PerTeam = styled.section`
  display: flex;
  flex-direction: column;
  gap: 65.5px;
`;

export const BlueStatusDetail = styled.section`
  position: relative;
`;

export const BlueStatusTitleLayer = styled.section`
  align-items: center;

  display: flex;
  gap: 40px;

  margin-bottom: 24px;
`;

export const BlueStatusTeam = styled.span`
  color: #5c5ef5;
  text-align: center;

  font-family: "Paperlogy-7Bold";
  font-size: 48px;
  line-height: normal;
`;

export const BlueStatusPercent = styled.section`
  align-items: center;
  display: flex;
  gap: 20px;
`;

export const BlueStatusPercentText = styled.span`
  color: #5c5ef5;
  text-align: center;

  font-family: "Paperlogy-7Bold";
  font-size: 36px;
  line-height: 140%; /* 50.4px */
  letter-spacing: 0.25px;
`;

export const BlueStatusPercentBar = styled.section`
  width: calc(649px * 0.76);
  height: 32px;
  flex-shrink: 0;

  border-radius: 16px;
  background: #5c5ef5;
`;

export const BlueStatusSymbols = styled.section`
  align-content: center;
  display: flex;
  gap: 68px;

  margin-bottom: 49.5px;
`;

export const BlueStatusSymbol = styled.section`
  display: flex;
  gap: 12px;
`;

export const BlueStatusSymbolIcon = styled.img``;

export const BlueStatusSymbolText = styled.span`
  color: #9da0a4;
  text-align: center;
  font-feature-settings: "ss05" on;

  font-family: "Paperlogy-6SemiBold";
  font-size: 20px;
  line-height: 140%; /* 28px */
  letter-spacing: 0.15px;
`;

export const BlueBetInfos = styled.section`
  display: flex;
  gap: 84px;
`;

export const BlueBetInfo = styled.section`
  display: flex;
  gap: 28px;
`;

export const BlueBetInfoCat = styled.span`
  color: #9da0a4;
  font-feature-settings: "ss05" on;

  font-family: "Paperlogy-5Medium";
  font-size: 18px;
  line-height: 140%; /* 25.2px */
  letter-spacing: 0.15px;
`;

export const BlueBetInfoTex = styled.span`
  color: #c9cacc;
  font-feature-settings: "ss05" on;

  font-family: "Paperlogy-6SemiBold";
  font-size: 20px;
  line-height: 140%; /* 28px */
  letter-spacing: 0.15px;
`;

export const RedStatusDetail = styled.section`
  position: relative;
`;

export const RedStatusTitleLayer = styled.section`
  align-items: center;

  display: flex;
  gap: 40px;

  margin-bottom: 24px;
`;

export const RedStatusTeam = styled.span`
  color: #e25b79;
  text-align: center;

  font-family: "Paperlogy-7Bold";
  font-size: 48px;
  line-height: normal;
`;

export const RedStatusPercent = styled.section`
  align-items: center;
  display: flex;
  gap: 20px;
`;

export const RedStatusPercentText = styled.span`
  color: #e25b79;
  text-align: center;

  font-family: "Paperlogy-7Bold";
  font-size: 36px;
  line-height: 140%; /* 50.4px */
  letter-spacing: 0.25px;
`;

export const RedStatusPercentBar = styled.section`
  width: calc(649px * 0.76);
  height: 32px;
  flex-shrink: 0;

  border-radius: 16px;
  background: #e25b79;
`;

export const RedStatusSymbols = styled.section`
  align-content: center;
  display: flex;
  gap: 68px;

  margin-bottom: 49.5px;
`;

export const RedStatusSymbol = styled.section`
  display: flex;
  gap: 12px;
`;

export const RedStatusSymbolIcon = styled.img``;

export const RedStatusSymbolText = styled.span`
  color: #9da0a4;
  text-align: center;
  font-feature-settings: "ss05" on;

  font-family: "Paperlogy-6SemiBold";
  font-size: 20px;
  line-height: 140%; /* 28px */
  letter-spacing: 0.15px;
`;

export const RedBetInfos = styled.section`
  display: flex;
  gap: 84px;
`;

export const RedBetInfo = styled.section`
  display: flex;
  gap: 28px;
`;

export const RedBetInfoCat = styled.span`
  color: #9da0a4;
  font-feature-settings: "ss05" on;

  font-family: "Paperlogy-5Medium";
  font-size: 18px;
  line-height: 140%; /* 25.2px */
  letter-spacing: 0.15px;
`;

export const RedBetInfoTex = styled.span`
  color: #c9cacc;
  font-feature-settings: "ss05" on;

  font-family: "Paperlogy-6SemiBold";
  font-size: 20px;
  line-height: 140%; /* 28px */
  letter-spacing: 0.15px;
`;
