import ImageReviewCardWithRatingBar from '@/components/domain/influencer/ImageReviewCardWithRatingBar';

import type { InfluencerReview } from '@/types/domain/influencerType';
import { useTranslations } from 'next-intl';

interface ReviewHistoryProps {
  reviews: InfluencerReview[];
}

const ReviewHistory = ({ reviews }: ReviewHistoryProps) => {
  const t = useTranslations('my_activity_history_page');

  return (
    <div className="h-full w-full overflow-y-auto pb-8 pt-5 scrollbar-hide-smooth">
      <ul className="flex w-full flex-col items-center gap-[30px]">
        {reviews.map((review) => (
          <li key={review.reviewId} className="w-full">
            <ImageReviewCardWithRatingBar data={review} />
          </li>
        ))}
      </ul>
      <p className="mb-8 mt-7 text-center text-neutral-500 body3-r">
        {t('모든 내용을 확인했어요')}
      </p>
    </div>
  );
};

export default ReviewHistory;