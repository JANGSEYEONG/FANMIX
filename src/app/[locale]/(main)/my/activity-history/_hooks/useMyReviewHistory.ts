import { useUserStore } from '@/stores/userStore';
import { useUserReviewHistory } from '@/hooks/queries/useUserService';

export const useMyReviewHistory = () => {
  const user = useUserStore((state) => state.user);
  const { data, isLoading, isError } = useUserReviewHistory({ userId: user?.userId || 0 });

  // 리뷰 아이디가 있는 것만 필터링
  const validReviews = data?.data.filter((review) => review.reviewId);

  // ImageReviewCardData에 맞게 필드 이름 정리
  const formattedReviews = validReviews?.map((review) => {
    return {
      ...review,
      influencerIsAuthenticated: review.isAuthenticated,
      reviewDate: review.latestReviewDate,
    };
  });

  return {
    reviewHistoryData: formattedReviews,
    isLoading,
    isError,
  };
};
