'use client';

import ReviewHistory from '@/components/domain/user/activityHistory/ReviewHistory';
import { useOtherUserReviewHistory } from '../_hooks/useOtherUserReviewHistory';

interface UserReviewHistoryProps {
  userId: number;
}
const UserReviewHistory = ({ userId }: UserReviewHistoryProps) => {
  const { reviewHistoryData, isLoading, isError } = useOtherUserReviewHistory(userId);
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
export default UserReviewHistory;
