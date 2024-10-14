'use client';
import { useMyReviewHistory } from '../_hooks/useMyReviewHistory';
import ReviewHistory from '@/components/domain/user/activityHistory/ReviewHistory';

const MyReviewHistory = () => {
  const { reviewHistoryData, isLoading, isError } = useMyReviewHistory();
  return (
    <ReviewHistory
      {...{
        reviewHistoryData,
        isLoading,
        isError,
      }}
    />
  );
};
export default MyReviewHistory;
