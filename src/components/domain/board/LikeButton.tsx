import { cn } from '@/lib/utils';
import { VscThumbsup } from 'react-icons/vsc';

interface LikeButtonProps {
  isLiked: boolean;
  isDisliked: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const LikeButton = ({ isLiked, isDisliked, onClick, children }: LikeButtonProps) => {
  return (
    <button
      className={cn(
        'gap-x-[3px] rounded-[8px] border border-orange-500 px-2.5 py-2 flex-center body3-m',
        isLiked ? 'bg-orange-500 text-black' : 'text-orange-500',
        (isLiked || isDisliked) && 'cursor-not-allowed',
      )}
      onClick={onClick}>
      <VscThumbsup className="h-[18px] w-[18px]" />
      <span>{children}</span>
    </button>
  );
};

export default LikeButton;
