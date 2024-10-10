'use client';

import InteractionStats from '@/components/domain/board/InteractionStats';
import { BOARD_CARD_TYPE } from '@/types/domain/boardType';
import { useReviewInteraction, type ReviewInteraction } from '../_hooks/useReviewInteraction';

interface ReviewDetailInteractionProps {
  influencerId: number;
  reviewId: number;
  defaultInteractionData: ReviewInteraction;
}
const ReviewDetailInteraction = ({
  influencerId,
  reviewId,
  defaultInteractionData,
}: ReviewDetailInteractionProps) => {
  // useQuery의 캐시 데이터 사용을 위해 상태값으로 관리
  const { interactionData } = useReviewInteraction(influencerId, reviewId, defaultInteractionData);

  return (
    <InteractionStats
      boardCardType={BOARD_CARD_TYPE.REVIEW}
      {...{
        likesCount: interactionData.reviewLikeCount,
        dislikesCount: interactionData.reviewDislikeCount,
        commentsCount: interactionData.reviewCommentsCount,
      }}
    />
  );
};

export default ReviewDetailInteraction;
