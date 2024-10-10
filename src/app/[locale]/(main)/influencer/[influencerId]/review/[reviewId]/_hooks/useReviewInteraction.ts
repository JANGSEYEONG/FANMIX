import { useEffect, useState } from 'react';
import { useInfluencerReviewDetailWithComments } from '@/hooks/queries/useReviewService';

export interface ReviewInteraction {
  reviewLikeCount: number;
  reviewDislikeCount: number;
  reviewCommentsCount: number;
}
export const useReviewInteraction = (
  influencerId: number,
  reviewId: number,
  defaultInteractionData: ReviewInteraction,
) => {
  const [interactionData, setInteractionData] = useState<ReviewInteraction>(defaultInteractionData);

  const { data, isSuccess } = useInfluencerReviewDetailWithComments({
    influencerId,
    reviewId,
  });

  useEffect(() => {
    if (isSuccess) {
      if (data && data.data && data.data.review) {
        const { review: reviewData } = data.data;
        const interactionData = {
          reviewLikeCount: reviewData.reviewLikeCount,
          reviewDislikeCount: reviewData.reviewDislikeCount,
          reviewCommentsCount: reviewData.reviewCommentsCount,
        };
        setInteractionData(interactionData);
      }
    }
  }, [data, isSuccess]);

  return {
    interactionData,
  };
};
