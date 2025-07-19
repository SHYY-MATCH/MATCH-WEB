import * as _ from './style.ts'
import SideBar from "../../components/SideBar";
import BetRegular from "../../components/BetRegular";
import { useState } from "react";
import Whale from '../../assets/whale.png'

type Banner = {
    title: string;
    time: string;
    text: string;
    bet: Bet
}

type Bet = {
    left: {
        text1: string;
        text2: string;
        text3: number;
        percent: number;
    },
    right: {
        text1: string;
        text2: string;
        text3: number;
        percent: number;
    },
    teams: [string, string]  // 타입 일치
}

const exampleBanner: Banner = {
    title: "농구",
    time: "오전 09:40",
    text: "소프트웨어개발과 vs 임베디드소프트웨어과",
    bet: {
        left: {
            text1: "382.7만",
            text2: "1:1.2",
            text3: 62,
            percent: 67,
        },
        right: {
            text1: "382.7만",
            text2: "1:1.6",
            text3: 31,
            percent: 33,
        },
        teams: ["소프트웨어개발과", "임베디드소프트웨어과"]
    }
};

const BettingList = () => {
    const [bannerInfo] = useState<Banner>(exampleBanner);

    if (!bannerInfo) return null; // 예시 코드지만, 비동기 데이터라면 반드시 필요

    return (
        <_.Container>
            <SideBar />
            <_.Main>
                <_.MainLayer>
                    <_.Banner>
                        <_.BannerLayer>
                            <_.BannerTextLayer>
                                <_.BannerTitleAndTime>
                                    <_.BannerTitle>{bannerInfo.title}</_.BannerTitle>
                                    <_.BannerTime>{bannerInfo.time}</_.BannerTime>
                                </_.BannerTitleAndTime>
                                <_.BannerText>{bannerInfo.text}</_.BannerText>
                            </_.BannerTextLayer>
                            <_.BannerBet><BetRegular
                                left={bannerInfo.bet.left}
                                right={bannerInfo.bet.right}
                                teams={bannerInfo.bet.teams}
                            /></_.BannerBet>
                        </_.BannerLayer>
                        <_.BannerImg src={Whale} alt="whale" />
                    </_.Banner>
                </_.MainLayer>
            </_.Main>
        </_.Container>
    )
}

export default BettingList;
