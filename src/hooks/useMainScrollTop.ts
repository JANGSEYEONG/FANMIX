import { useCallback } from 'react';

export const useMainScrollTop = (mainRef: React.RefObject<HTMLElement>) => {
  const handleScrollToTop = useCallback(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [mainRef]);

  return { handleScrollToTop };
};
