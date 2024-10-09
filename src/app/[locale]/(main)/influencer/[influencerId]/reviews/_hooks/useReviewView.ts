import { Dispatch } from 'react';

import { useReviewMutations } from './useReviewMutations';
import { REVIEW_MODE, type MyLatestReview, type ReviewMode } from '@/types/domain/reviewType';

export const useReviewView = (
  setReviewMode: Dispatch<React.SetStateAction<ReviewMode>>,
  setMyLatestReviewData: Dispatch<React.SetStateAction<MyLatestReview | null>>,
) => {
  const { handleDeleteReview: handleDeleteReviewMutation, isPending } = useReviewMutations(
    setReviewMode,
    setMyLatestReviewData,
  );

  const handleDeleteReview = async (influencerId: number, reviewId: number) => {
    await handleDeleteReviewMutation(influencerId, reviewId);
  };
  const handleEditReview = () => {
    setReviewMode(REVIEW_MODE.FORM_EDIT);
  };
  const handlePostNewReview = () => {
    setMyLatestReviewData(null); // 새로 생성하니 defaultReviewData를 비우기 위해 null로 업데이트
    setReviewMode(REVIEW_MODE.FORM_CREATE);
  };

  return {
    handleDeleteReview,
    handleEditReview,
    handlePostNewReview,
    isPending,
  };
};
