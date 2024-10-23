import { LiaAngleUpSolid } from 'react-icons/lia';
import { useMainScrollTop } from '@/hooks/useMainScrollTop';

interface ScrollToTopButtonProps {
  targetRef: React.RefObject<HTMLElement>;
}
const ScrollToTopButton = ({ targetRef }: ScrollToTopButtonProps) => {
  const { handleScrollToTop } = useMainScrollTop(targetRef); // 최상단으로 스크롤하는 함수

  return (
    <button
      aria-label="최상단 이동 버튼"
      className="absolute right-5 top-[-84px] h-[60px] w-[60px] rounded-full bg-orange-700/70 flex-center"
      onClick={handleScrollToTop}>
      <LiaAngleUpSolid className="h-[22px] w-[22px]" />
    </button>
  );
};

export default ScrollToTopButton;
