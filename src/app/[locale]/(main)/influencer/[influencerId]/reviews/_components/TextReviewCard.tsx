import { cn } from '@/lib/utils';

import { Link } from '@/i18n/routing';

import MetricsText from '@/components/domain/influencer/MetricsText';
import InteractionStats from '@/components/domain/board/InteractionStats';
import { formatDateToYYMMDD, parseISOToDate } from '@/lib/date';
import { BOARD_CARD_TYPE } from '@/types/domain/boardType';

interface TextReviewCardProps {
  reviewId: number;
  influencerId: number;
  reviewerNickName: string;
  reviewDate: string;
  reviewContent: string;
  reviewLikeCount: number;
  reviewDislikeCount: number;
  reviewCommentsCount: number;
  contentsRating: number;
  communicationRating: number;
  trustRating: number;
  isMyReview: boolean;
}

// 리뷰 상세 페이지로 이동
const TextReviewCard = ({
  reviewId,
  influencerId,
  reviewerNickName,
  reviewDate,
  reviewContent,
  reviewLikeCount,
  reviewDislikeCount,
  reviewCommentsCount,
  contentsRating,
  communicationRating,
  trustRating,
  isMyReview,
}: TextReviewCardProps) => {
  return (
    <Link href={`/influencer/${influencerId}/review/${reviewId}`}>
      <article
        className={cn(
          'flex w-full cursor-pointer flex-col justify-center px-5 py-[15px]',
          isMyReview && 'bg-orange-700/15',
        )}>
        <aside className="mb-[5px] flex items-center justify-between">
          <span className={cn('sub1-r', isMyReview ? 'text-orange-500' : 'text-neutral-300')}>
            {reviewerNickName}
          </span>
          <time className={cn('sub2-m', isMyReview ? 'text-orange-500' : 'text-neutral-400')}>
            {formatDateToYYMMDD(parseISOToDate(reviewDate))}
          </time>
        </aside>
        <h1 className="mb-2.5 body2-r">{reviewContent}</h1>
        <footer className="flex w-full items-center justify-between">
          <InteractionStats
            boardCardType={BOARD_CARD_TYPE.REVIEW}
            {...{
              likesCount: reviewLikeCount,
              dislikesCount: reviewDislikeCount,
              commentsCount: reviewCommentsCount,
            }}
          />
          <MetricsText {...{ contentsRating, communicationRating, trustRating }} />
        </footer>
      </article>
    </Link>
  );
};

export default TextReviewCard;
