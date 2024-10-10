import { useEffect, useState } from 'react';
import { useInfluencerReviewDetailWithComments } from '@/hooks/queries/useReviewService';

export interface ReviewComment {
  commentId: number;
  commenterId: number;
  commenterNickName: string;
  commentContent: string;
  isMyComment: boolean;
  isDeleted: boolean;
  commentDate: string;
}
export const useReviewCommentList = (
  influencerId: number,
  reviewId: number,
  defaultCommentList: ReviewComment[],
) => {
  const [commentList, setCommentList] = useState<ReviewComment[]>(defaultCommentList);
  const { data, isLoading, isError, isSuccess } = useInfluencerReviewDetailWithComments({
    influencerId,
    reviewId,
  });

  useEffect(() => {
    if (isSuccess) {
      if (data && data.data && data.data.commentList) {
        setCommentList(data.data.commentList);
      }
    }
  }, [data, isSuccess]);

  return {
    commentList,
    isLoading,
    isError,
    isEmpty: commentList.length === 0,
  };
};
