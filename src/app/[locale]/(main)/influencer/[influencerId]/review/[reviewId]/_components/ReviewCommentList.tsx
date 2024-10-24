'use client';

import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Separator } from '@/components/ui/separator';

import MessageText from '@/components/common/MessageText';
import ReviewCommentCard from './ReviewCommentCard';

import { useReviewCommentList, type ReviewComment } from '../_hooks/useReviewCommentList';

interface ReviewCommentListProps {
  influencerId: number;
  reviewId: number;
  defaultCommentList: ReviewComment[];
}
const ReviewCommentList = ({
  influencerId,
  reviewId,
  defaultCommentList,
}: ReviewCommentListProps) => {
  const t = useTranslations('review_page');
  const { commentList, isEmpty } = useReviewCommentList(influencerId, reviewId, defaultCommentList);
  if (isEmpty) return <MessageText className="h-full" message={t('첫 댓글을 작성해 주세요')} />;
  return (
    <ul>
      {commentList.map((comment, index) => (
        <li
          key={comment.commentId}
          className={cn('w-full px-5 pt-5', comment.isMyComment && 'bg-neutral-800')}>
          <ReviewCommentCard influencerId={influencerId} reviewId={reviewId} {...comment} />
          {index + 1 !== commentList.length && <Separator className="h-[0.7px] bg-neutral-600" />}
        </li>
      ))}
    </ul>
  );
};

export default ReviewCommentList;
