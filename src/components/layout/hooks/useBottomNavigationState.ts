'use client';

import { useEffect, useState } from 'react';

import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useCurrentRouteLabel } from '@/hooks/useCurrentRouteLabel';

export const useBottomNavigationState = (mainRef: React.RefObject<HTMLElement>) => {
  const [isVisible, setIsVisible] = useState(true); // scroll direction에 의한 visible 여부
  const { hideBottomNav, hideScrollTopBtn } = useCurrentRouteLabel(); // page 설정에 의한 visible 여부
  const { scrollDirection, scrollPosition } = useScrollDirection(mainRef);

  useEffect(() => {
    // 모바일에서 스크롤 시, 최상단/최하단일 때 추가로 스크롤 되었다가 되돌아가는 경우때문에 top, bottom 포지션 추가하여 visible 여부 설정
    // 최상단일 때 : show / 최하단일 때 : pb를 주기 때문에, 네비게이션 보이도록 설정
    if (scrollDirection === 'down' && scrollPosition !== 'top') {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [scrollDirection, scrollPosition]);
  return {
    showBottomNav: !hideBottomNav && isVisible,
    showScrollTopBtn: !hideScrollTopBtn,
  };
};
