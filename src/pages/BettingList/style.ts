import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    width: 100vw;
    background: #1F2329;
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 63px 0;
    gap: 60px;
    width: 100%;
`

export const MainLayer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 60px;
    
    width: 100%;
    
    align-items: center;
`

export const Banner = styled.section`
    position: relative;
    
    width: 85%;
    height: 270px;
    border-radius: 16px;
    background: linear-gradient(90deg, #4D4FE2 0%, #1A8FEC 100%);
`

export const BannerLayer = styled.section`
    position: relative;
    left: 60px;
    
    width: fit-content;
    height: 100%;


    display: flex;
    gap: 57px;
`

export const BannerTextLayer = styled.section`display: flex;
    position: relative;
    top: 42px;
    
    flex-direction: column;
    gap: 12px;
`

export const BannerTitleAndTime = styled.span`display: flex;
    gap: 20px;
    align-items: flex-end;
`

export const BannerTitle = styled.span`
    color: #FFF;

    font-family: "Paperlogy-7Bold";
    font-size: 48px;
`

export const BannerTime = styled.span`
    color: #FFF;
    
    font-family: "Paperlogy-7Bold";
    font-size: 28px;
`

export const BannerText = styled.span`
    color: #FFF;
    font-feature-settings: 'ss05' on;

    font-family: "Paperlogy-4Regular";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 28.8px */
    letter-spacing: -0.15px;
`

export const BannerBet = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    width: 356px;
    height: 100%;
`

export const BannerImg = styled.img`
    position: absolute;
    right: 55px;
    bottom: 8px;
    width: 309;
`

export const Bets = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    gap: 8px;
`

export const BetsTitle = styled.span`
    color: #FFF;
    font-feature-settings: 'ss05' on;
    
    font-family: "Paperlogy-6SemiBold";
    font-size: 24px;
    font-weight: 600;
    line-height: 140%; /* 33.6px */
`

export const BetList = styled.div`
    margin-top: 4px;
    max-height: 400px;
    overflow-y: auto;
    display: flex;
    gap: 16px;
`;

export const Bet = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    width: calc((50% - 8px) / 2);
    height: fit-content;
    
    //background: aqua;
`

export const BetLayer = styled.section`
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 60px;
`

export const ScrollHandlers = styled.section`
    display: flex;
    flex-direction: row-reverse;
    gap: 0;
`

export const ScrollHandler = styled.section`
    width: 24px;
`