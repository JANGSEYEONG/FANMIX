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

  const { data } = useInfluencerReviewDetailWithComments({
    influencerId,
    reviewId,
  });

  useEffect(() => {
    if (data?.data?.commentList) {
      setCommentList(data.data.commentList);
    }
  }, [data]);

  return {
    commentList,
    isEmpty: commentList.length === 0,
  };
};
