'use client';

import { cn } from '@/lib/utils';
import { memo } from 'react';

import BottomNavigation from './BottomNavigation';
import ScrollToTopButton from '../common/ScrollToTopButton';

import { useBottomNavigationState } from './hooks/useBottomNavigationState';

interface BottomContainerProps {
  mainRef: React.RefObject<HTMLElement>;
}

const BottomContainer = ({ mainRef }: BottomContainerProps) => {
  const { showBottomNav, showScrollTopBtn } = useBottomNavigationState(mainRef);

  return (
    <div
      className={cn(
        'z-5 absolute bottom-0 w-full transition-transform duration-300 ease-in-out',
        showBottomNav ? 'translate-y-0' : 'translate-y-full', // 스크롤 방향에 따라 슬라이드 효과
      )}>
      <BottomNavigation />
      {showScrollTopBtn && <ScrollToTopButton targetRef={mainRef} />}
    </div>
  );
};

export default memo(BottomContainer);
