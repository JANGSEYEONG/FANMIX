import { cn } from '@/lib/utils';
import { VscThumbsdown } from 'react-icons/vsc';

interface DislikeButtonProps {
  isLiked: boolean;
  isDisliked: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const DislikeButton = ({ isLiked, isDisliked, onClick, children }: DislikeButtonProps) => {
  return (
    <button
      className={cn(
        'gap-x-[3px] rounded-[8px] border border-neutral-300 px-2.5 py-2 flex-center body3-m',
        isDisliked ? 'bg-neutral-300 text-black' : 'text-neutral-300',
        (isLiked || isDisliked) && 'cursor-not-allowed',
      )}
      onClick={onClick}>
      <VscThumbsdown className="h-[18px] w-[18px]" />
      <span>{children}</span>
    </button>
  );
};

export default DislikeButton;
