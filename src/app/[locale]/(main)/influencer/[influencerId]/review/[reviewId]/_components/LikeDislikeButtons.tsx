'use client';

import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

import { VscThumbsdown, VscThumbsup } from 'react-icons/vsc';
import { BUTTON_ACTION, useLikeDislikeReview } from '../_hooks/useLikeDislikeReview';

interface LikeDislikeButtonsProps {
  reviewId: string;
  initialIsLiked: boolean;
  initialIsDisliked: boolean;
}
const LikeDislikeButtons = ({
  reviewId,
  initialIsLiked,
  initialIsDisliked,
}: LikeDislikeButtonsProps) => {
  const t = useTranslations('review_page');
  const { isLiked, isDisliked, handleClickAction } = useLikeDislikeReview(
    reviewId,
    initialIsLiked,
    initialIsDisliked,
  );

  return (
    <div className="flex w-full items-center justify-end gap-x-2 px-5">
      <button
        className={cn(
          'gap-x-[3px] rounded-[8px] border border-orange-500 px-2.5 py-2 flex-center body3-m',
          isLiked ? 'bg-orange-500 text-black' : 'text-orange-500',
          (isLiked || isDisliked) && 'cursor-not-allowed',
        )}
        onClick={() => handleClickAction(BUTTON_ACTION.LIKE)}>
        <VscThumbsup className="h-[18px] w-[18px]" />
        <span>{t('추천')}</span>
      </button>
      <button
        className={cn(
          'gap-x-[3px] rounded-[8px] border border-neutral-300 px-2.5 py-2 flex-center body3-m',
          isDisliked ? 'bg-neutral-300 text-black' : 'text-neutral-300',
          (isLiked || isDisliked) && 'cursor-not-allowed',
        )}
        onClick={() => handleClickAction(BUTTON_ACTION.DISLIKE)}>
        <VscThumbsdown className="h-[18px] w-[18px]" />
        <span>{t('비추천')}</span>
      </button>
    </div>
  );
};

export default LikeDislikeButtons;
