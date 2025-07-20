import * as _ from './style.ts'
import SideBar from "../../components/SideBar";
import BetRegular from "../../components/BetRegular";
import { useRef, useState, useEffect } from "react";
import Whale from '../../assets/whale.png'
import LeftArrow from "../../assets/Icons/LeftArrow.tsx";
import RightArrow from "../../assets/Icons/RightArrow.tsx";
import BetTitle from "../../components/BetTitle";
import { scrollBetListAndGetState, getScrollState } from './betScrollService';

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
    teams: [string, string];
};

type BetItem = {
    title: string;
    subtitle: string;
    bet: Bet;
};

type BetGroup = {
    game: string;
    bets: BetItem[];
};

type BetsData = {
    bets: BetGroup[];
};

type Banner = {
    title: string;
    time: string;
    text: string;
    bet: Bet;
};

const BettingList = () => {
    const [bannerInfo, setBannerInfo] = useState<Banner | null>(null);
    const [bets, setBets] = useState<BetsData>({ bets: [] });

    // 동적으로 ref와 상태 관리
    const betListRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [isNextStates, setIsNextStates] = useState<boolean[]>([]);

    useEffect(() => {
        // 배너 예시 데이터
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
        setBannerInfo(exampleBanner);
    }, []);

    useEffect(() => {
        // 베팅 데이터 예시
        const betsJson: BetsData = {
            bets: [
                {
                    game: "현재 인기 베팅🔥",
                    bets: [
                        {
                            title: "인기 타이틀",
                            subtitle: "인기 서브타이틀",
                            bet: {
                                left: {
                                    text1: "512.9만",
                                    text2: "1:1.5",
                                    text3: 71,
                                    percent: 80
                                },
                                right: {
                                    text1: "231.4만",
                                    text2: "1:2.2",
                                    text3: 17,
                                    percent: 20
                                },
                                teams: ["팀A", "팀B"]
                            }
                        }
                    ]
                },
                {
                    game: "꼬리잡기 & 농구",
                    bets: [
                        {
                            title: "타이틀1",
                            subtitle: "서브타이틀1",
                            bet: {
                                left: {
                                    text1: "382.7만",
                                    text2: "1:1.2",
                                    text3: 62,
                                    percent: 67
                                },
                                right: {
                                    text1: "382.7만",
                                    text2: "1:1.6",
                                    text3: 31,
                                    percent: 33
                                },
                                teams: ["소프트웨어개발과", "임베디드소프트웨어과"]
                            }
                        },
                        // ...생략: 여러 betItem 추가
                        {
                            title: "타이틀2",
                            subtitle: "서브타이틀2",
                            bet: {
                                left: {
                                    text1: "100.5만",
                                    text2: "1:2.0",
                                    text3: 44,
                                    percent: 60
                                },
                                right: {
                                    text1: "98.2만",
                                    text2: "1:3.1",
                                    text3: 33,
                                    percent: 40
                                },
                                teams: ["A팀", "B팀"]
                            }
                        },
                        {
                            title: "타이틀3",
                            subtitle: "서브타이틀3",
                            bet: {
                                left: {
                                    text1: "130.5만",
                                    text2: "1:2.5",
                                    text3: 24,
                                    percent: 50
                                },
                                right: {
                                    text1: "88.2만",
                                    text2: "1:4.1",
                                    text3: 13,
                                    percent: 50
                                },
                                teams: ["C팀", "D팀"]
                            }
                        },
                        {
                            title: "타이틀4",
                            subtitle: "서브타이틀3",
                            bet: {
                                left: {
                                    text1: "130.5만",
                                    text2: "1:2.5",
                                    text3: 24,
                                    percent: 50
                                },
                                right: {
                                    text1: "88.2만",
                                    text2: "1:4.1",
                                    text3: 13,
                                    percent: 50
                                },
                                teams: ["C팀", "D팀"]
                            }
                        },
                        {
                            title: "타이틀5",
                            subtitle: "서브타이틀3",
                            bet: {
                                left: {
                                    text1: "130.5만",
                                    text2: "1:2.5",
                                    text3: 24,
                                    percent: 50
                                },
                                right: {
                                    text1: "88.2만",
                                    text2: "1:4.1",
                                    text3: 13,
                                    percent: 50
                                },
                                teams: ["C팀", "D팀"]
                            }
                        },
                        // 5개 이상 테스트용
                    ]
                },
            ]
        }
        setBets(betsJson);

        // 그룹별로 ref와 상태를 동적으로 맞춰줌
        betListRefs.current = betsJson.bets.map((_, i) => betListRefs.current[i] ?? null);
        setIsNextStates(betsJson.bets.map(() => true)); // 초기값 모두 true
    }, []);

    // 그룹별 스크롤 상태 업데이트
    useEffect(() => {
        const updateStates = () => {
            setIsNextStates(bets.bets.map((_, i) => {
                const el = betListRefs.current[i];
                return el ? getScrollState(el).isNext : false;
            }));
        };
        updateStates();
        window.addEventListener('resize', updateStates);
        return () => window.removeEventListener('resize', updateStates);
    }, [bets]);

    // 스크롤 막기: 그룹별로 모두 적용
    useEffect(() => {
        const preventScroll = (e: Event) => e.preventDefault();
        betListRefs.current.forEach(list => {
            if (list) {
                list.addEventListener('wheel', preventScroll, { passive: false });
                list.addEventListener('touchmove', preventScroll, { passive: false });
                list.addEventListener('scroll', preventScroll, { passive: false });
            }
        });
        return () => {
            betListRefs.current.forEach(list => {
                if (list) {
                    list.removeEventListener('wheel', preventScroll);
                    list.removeEventListener('touchmove', preventScroll);
                    list.removeEventListener('scroll', preventScroll);
                }
            });
        };
    }, [betListRefs.current, bets.bets.length]);

    // 스크롤 버튼 클릭 핸들러
    const handleScroll = (groupIdx: number, direction: 'left' | 'right') => {
        const ref = betListRefs.current[groupIdx];
        if (!ref) return;
        const { isNext } = scrollBetListAndGetState(ref, direction);
        setIsNextStates(prev => {
            const updated = [...prev];
            updated[groupIdx] = isNext;
            return updated;
        });
        setTimeout(() => {
            const state = getScrollState(ref);
            setIsNextStates(prev => {
                const updated = [...prev];
                updated[groupIdx] = state.isNext;
                return updated;
            });
        }, 120);
    };

    if (!bannerInfo) return null;

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
                            <_.BannerBet>
                                <BetRegular
                                    left={bannerInfo.bet.left}
                                    right={bannerInfo.bet.right}
                                    teams={bannerInfo.bet.teams}
                                />
                            </_.BannerBet>
                        </_.BannerLayer>
                        <_.BannerImg src={Whale} alt="whale" />
                    </_.Banner>

                    <_.BetLayer>
                        {bets.bets.map((group, groupIdx) => (
                            <_.Bets key={groupIdx}>
                                <_.BetsTitle>{group.game}</_.BetsTitle>
                                <_.BetList ref={el => betListRefs.current[groupIdx] = el}>
                                    {group.bets.map((bet, idx) => (
                                        <_.Bet key={idx}>
                                            <BetTitle title={bet.title} subTitle={bet.subtitle} />
                                            <BetRegular left={bet.bet.left} right={bet.bet.right} teams={bet.bet.teams} />
                                        </_.Bet>
                                    ))}
                                </_.BetList>
                                {/* 5개 이상일 때만 핸들러 노출 */}
                                {group.bets.length > 4 && (
                                    <_.ScrollHandlers>
                                        <_.ScrollHandler
                                            onClick={() => handleScroll(groupIdx, 'right')}
                                            disabled={!isNextStates[groupIdx]}
                                        >
                                            <RightArrow isNext={isNextStates[groupIdx]} />
                                        </_.ScrollHandler>
                                        <_.ScrollHandler
                                            onClick={() => handleScroll(groupIdx, 'left')}
                                        >
                                            <LeftArrow isNext={true} />
                                        </_.ScrollHandler>
                                    </_.ScrollHandlers>
                                )}
                            </_.Bets>
                        ))}
                    </_.BetLayer>
                </_.MainLayer>
            </_.Main>
        </_.Container>
    );
};

export default BettingList;
