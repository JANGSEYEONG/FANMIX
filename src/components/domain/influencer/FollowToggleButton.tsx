'use client';
import { cn } from '@/lib/utils';
import { LiaBookmark } from 'react-icons/lia';
import { useInfluencerFollowToggle } from '@/hooks/useInfluencerFollowToggle';

interface FollowToggleButtonProps {
  influencerId: number;
}
const FollowToggleButton = ({ influencerId }: FollowToggleButtonProps) => {
  // ssr 데이터에 의존하지 말고 follow 여부 확인 api 따로 호출해서 관리하기
  const { isFollowing, toggleFollowState } = useInfluencerFollowToggle(influencerId);

  return (
    <button
      className={cn(
        'h-7 w-7 flex-shrink-0 rounded-full transition-colors duration-200 flex-center hover:scale-105',
        isFollowing ? 'bg-white' : 'bg-orange-700',
      )}
      onClick={() => toggleFollowState()}>
      <LiaBookmark
        className={cn(
          'h-5 w-5 transition-colors duration-200',
          isFollowing ? 'text-orange-600' : 'text-white',
        )}
      />
    </button>
  );
};

export default FollowToggleButton;
