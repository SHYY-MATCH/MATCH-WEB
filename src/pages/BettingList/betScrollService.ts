export function scrollBetListAndGetState(
    container: HTMLDivElement | null,
    direction: 'left' | 'right'
): { isNext: boolean, isPrev: boolean } {
    if (!container) return { isNext: false, isPrev: false };

    const betElem = container.querySelector<HTMLElement>(':scope > *');
    if (!betElem) return { isNext: false, isPrev: false };

    const betWidth = betElem.offsetWidth;
    const marginRight = 16;
    const scrollAmount = betWidth + marginRight;

    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    // 스크롤이 끝까지 도달했는지 계산
    // 애니메이션 반영 위해 setTimeout 권장 (여기선 즉시값)
    const { scrollLeft, clientWidth, scrollWidth } = container;
    const isPrev = scrollLeft > 0;
    const isNext = scrollLeft + clientWidth < scrollWidth - 1;
    return { isNext, isPrev };
}

// 스크롤 상태만 체크하는 함수(초기 mount, resize용)
export function getScrollState(container: HTMLDivElement | null) {
    if (!container) return { isNext: false, isPrev: false };
    const { scrollLeft, clientWidth, scrollWidth } = container;
    const isPrev = scrollLeft > 0;
    const isNext = scrollLeft + clientWidth < scrollWidth - 1;
    return { isNext, isPrev };
}
