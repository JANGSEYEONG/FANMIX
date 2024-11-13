'use client';

import { useTranslations } from 'next-intl';

import { BUTTON_ACTION, useLikeDislikeReview } from '../_hooks/useLikeDislikeReview';
import LikeButton from '@/components/domain/board/LikeButton';
import DislikeButton from '@/components/domain/board/DislikeButton';

interface LikeDislikeButtonsProps {
  influencerId: number;
  reviewId: number;
  initialIsLiked: boolean;
  initialIsDisliked: boolean;
}
const LikeDislikeButtons = ({
  influencerId,
  reviewId,
  initialIsLiked,
  initialIsDisliked,
}: LikeDislikeButtonsProps) => {
  const t = useTranslations('review_page');
  const { isLiked, isDisliked, handleClickAction } = useLikeDislikeReview(
    influencerId,
    reviewId,
    initialIsLiked,
    initialIsDisliked,
  );

  return (
    <div className="flex w-full items-center justify-end gap-x-2 px-5">
      <LikeButton
        {...{ isLiked, isDisliked, onClick: () => handleClickAction(BUTTON_ACTION.LIKE) }}>
        {t('추천')}
      </LikeButton>
      <DislikeButton
        {...{ isLiked, isDisliked, onClick: () => handleClickAction(BUTTON_ACTION.DISLIKE) }}>
        {t('비추천')}
      </DislikeButton>
    </div>
  );
};

export default LikeDislikeButtons;
