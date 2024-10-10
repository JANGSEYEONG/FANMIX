import MetricsText from '@/components/domain/influencer/MetricsText';
import ReviewDetailInteraction from './ReviewDetailInteraction';

import { formatDateToYYMMDD, parseISOToDate } from '@/lib/date';

interface ReviewDetailContentProps {
  influencerId: number;
  reviewId: number;
  reviewerNickName: string;
  contentsRating: number;
  communicationRating: number;
  trustRating: number;
  reviewDate: string;
  reviewContent: string;
  reviewLikeCount: number;
  reviewDislikeCount: number;
  reviewCommentsCount: number;
}

const ReviewDetailContent = ({
  influencerId,
  reviewId,
  reviewerNickName,
  contentsRating,
  communicationRating,
  trustRating,
  reviewDate,
  reviewContent,
  reviewLikeCount,
  reviewDislikeCount,
  reviewCommentsCount,
}: ReviewDetailContentProps) => {
  return (
    <article className="px-5">
      <header className="mb-[15px] flex flex-col justify-center gap-1.5">
        <div className="text-neutral-200 body3-m">{reviewerNickName}</div>
        <div className="flex items-center justify-between">
          <MetricsText {...{ contentsRating, communicationRating, trustRating }} />
          <span className="text-neutral-400 sub2-m">
            {formatDateToYYMMDD(parseISOToDate(reviewDate))}
          </span>
        </div>
      </header>
      <p className="mb-2.5 body2-r">{reviewContent}</p>
      <footer className="flex w-full justify-end">
        <ReviewDetailInteraction
          influencerId={influencerId}
          reviewId={reviewId}
          defaultInteractionData={{ reviewLikeCount, reviewDislikeCount, reviewCommentsCount }}
        />
      </footer>
    </article>
  );
};

export default ReviewDetailContent;
