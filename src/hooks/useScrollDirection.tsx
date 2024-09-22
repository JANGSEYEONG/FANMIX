'use client';

import throttle from 'lodash/throttle';
import { useState, useEffect } from 'react';

const useScrollDirection = (targetRef: React.RefObject<HTMLElement>) => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [scrollPosition, setScrollPosition] = useState<'top' | 'bottom' | 'middle'>('middle');
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const scrollContainer = targetRef.current;
    if (!scrollContainer) return;

    const handleScroll = throttle(() => {
      if (!scrollContainer) return;
      const currentScrollY = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight;
      const clientHeight = scrollContainer.clientHeight;

      // 현재 스크롤 포지션 구하기
      if (currentScrollY <= 0) {
        setScrollPosition('top');
      } else if (currentScrollY + clientHeight >= scrollHeight) {
        setScrollPosition('bottom');
      } else {
        setScrollPosition('middle');
      }

      // 스크롤 방향 구하기
      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection('up');
      }
      setPrevScrollY(currentScrollY);
    }, 100); // 100ms 간격으로 스크롤 이벤트 처리

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [prevScrollY, targetRef]);

  return { scrollDirection, scrollPosition };
};

export default useScrollDirection;
