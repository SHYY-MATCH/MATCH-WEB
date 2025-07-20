import * as _ from './style.ts'
import SideBar from "../../components/SideBar";
import LeftArrow from "../../assets/Icons/LeftArrow.tsx";
import BetButton from "../../components/BetButton.tsx";
import BlueMoney from "../../assets/betting/component/img/blue_money.svg"
import BluePercet from "../../assets/betting/component/img/blue_percent.svg"
import BluePeople from "../../assets/betting/component/img/blue_people.svg"
import RedMoney from "../../assets/betting/component/img/red_money.svg"
import RedPercet from "../../assets/betting/component/img/red_percent.svg"
import RedPeople from "../../assets/betting/component/img/red_people.svg"

const BettingDetail = () => {
    return (
        <_.Container>
            <SideBar />
            <_.Main>
                <_.MainLayer>
                    <_.BackButton>
                        <_.BackButtonIcon><LeftArrow /></_.BackButtonIcon>
                        <_.BackButtonText>돌아가기</_.BackButtonText>
                    </_.BackButton>
                    <_.MainContentsLayer>
                        <_.Title>왕중왕전</_.Title>
                        <_.AssetLayer>
                            <_.Asset>현재 내 자산</_.Asset>
                            <_.Asset>100,000,000</_.Asset>
                        </_.AssetLayer>
                        <_.BetSettings>
                            <_.ChoiceTeam>
                                <_.ChoiceTeamTitle>배팅할 팀을 선택 해 주세요</_.ChoiceTeamTitle>
                                <_.ChoiceTeamButtonSection>
                                    <_.ChoiceTeamButton text={"소프트웨어"} isActive={true} onClick={() => {}} />
                                    <BetButton text={"임베디드"} isActive={true} onClick={() => {}} />
                                </_.ChoiceTeamButtonSection>
                            </_.ChoiceTeam>
                            <_.SetAmount>
                                <_.Asset>배팅할 금액을 입력해 주세요</_.Asset>
                                <_.EnterAmount placeholder={"금액을 입력해 주세요"}></_.EnterAmount>
                            </_.SetAmount>
                        </_.BetSettings>
                        <_.Status>
                            <_.StatusText>현황</_.StatusText>
                            <_.PerTeam>
                                <_.BlueStatusDetail>
                                    <_.BlueStatusTitleLayer>
                                        <_.BlueStatusTeam>소프트웨어</_.BlueStatusTeam>
                                        <_.BlueStatusPercent>
                                            <_.BlueStatusPercentText>76%</_.BlueStatusPercentText>
                                            <_.BlueStatusPercentBar/>
                                        </_.BlueStatusPercent>
                                    </_.BlueStatusTitleLayer>
                                    <_.BlueStatusSymbols>
                                        <_.BlueStatusSymbol>
                                            <_.BlueStatusSymbolIcon src={BlueMoney} style={{width: '28px'}}/>
                                            <_.BlueStatusSymbolText>382.8만</_.BlueStatusSymbolText>
                                        </_.BlueStatusSymbol>
                                        <_.BlueStatusSymbol>
                                            <_.BlueStatusSymbolIcon src={BluePercet} style={{width: '28px'}}/>
                                            <_.BlueStatusSymbolText>1:1.2</_.BlueStatusSymbolText>
                                        </_.BlueStatusSymbol>
                                        <_.BlueStatusSymbol>
                                            <_.BlueStatusSymbolIcon src={BluePeople} style={{width: '28px'}}/>
                                            <_.BlueStatusSymbolText>62</_.BlueStatusSymbolText>
                                        </_.BlueStatusSymbol>
                                    </_.BlueStatusSymbols>
                                    <_.BlueBetInfos>
                                        <_.BlueBetInfo>
                                            <_.BlueBetInfoCat>현재 내 배팅 상황</_.BlueBetInfoCat>
                                            <_.BlueBetInfoTex>100,000</_.BlueBetInfoTex>
                                        </_.BlueBetInfo>
                                        <_.BlueBetInfo>
                                            <_.BlueBetInfoCat>배팅 성공 시 환급량</_.BlueBetInfoCat>
                                            <_.BlueBetInfoTex>100,000</_.BlueBetInfoTex>
                                        </_.BlueBetInfo>
                                    </_.BlueBetInfos>
                                </_.BlueStatusDetail>

                                <_.RedStatusDetail>
                                    <_.RedStatusTitleLayer>
                                        <_.RedStatusTeam>소프트웨어</_.RedStatusTeam>
                                        <_.RedStatusPercent>
                                            <_.RedStatusPercentText>76%</_.RedStatusPercentText>
                                            <_.RedStatusPercentBar/>
                                        </_.RedStatusPercent>
                                    </_.RedStatusTitleLayer>
                                    <_.RedStatusSymbols>
                                        <_.RedStatusSymbol>
                                            <_.RedStatusSymbolIcon src={RedMoney} style={{width: '28px'}}/>
                                            <_.RedStatusSymbolText>382.8만</_.RedStatusSymbolText>
                                        </_.RedStatusSymbol>
                                        <_.RedStatusSymbol>
                                            <_.RedStatusSymbolIcon src={RedPercet} style={{width: '28px'}}/>
                                            <_.RedStatusSymbolText>1:1.2</_.RedStatusSymbolText>
                                        </_.RedStatusSymbol>
                                        <_.RedStatusSymbol>
                                            <_.RedStatusSymbolIcon src={RedPeople} style={{width: '28px'}}/>
                                            <_.RedStatusSymbolText>62</_.RedStatusSymbolText>
                                        </_.RedStatusSymbol>
                                    </_.RedStatusSymbols>
                                    <_.RedBetInfos>
                                        <_.RedBetInfo>
                                            <_.RedBetInfoCat>현재 내 배팅 상황</_.RedBetInfoCat>
                                            <_.RedBetInfoTex>100,000</_.RedBetInfoTex>
                                        </_.RedBetInfo>
                                        <_.RedBetInfo>
                                            <_.RedBetInfoCat>배팅 성공 시 환급량</_.RedBetInfoCat>
                                            <_.RedBetInfoTex>100,000</_.RedBetInfoTex>
                                        </_.RedBetInfo>
                                    </_.RedBetInfos>
                                </_.RedStatusDetail>
                            </_.PerTeam>
                        </_.Status>
                    </_.MainContentsLayer>
                </_.MainLayer>
            </_.Main>
        </_.Container>
    )
}

export default BettingDetail