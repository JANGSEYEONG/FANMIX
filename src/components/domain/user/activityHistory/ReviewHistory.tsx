import { useTranslations } from 'next-intl';

import MessageText from '@/components/common/MessageText';
import ImageReviewCardWithRatingBar from '@/components/domain/influencer/ImageReviewCardWithRatingBar';

import type { ImageReviewCardData } from '@/types/domain/reviewType';
interface ReviewHistoryProps {
  reviews: ImageReviewCardData[];
}

const ReviewHistory = ({ reviews }: ReviewHistoryProps) => {
  const t = useTranslations('my_activity_history_page');

  return (
    <div className="h-full w-full overflow-y-auto pb-8 pt-5 scrollbar-hide-smooth">
      <ul className="flex w-full flex-col items-center gap-[30px]">
        {reviews.map((review) => (
          <li key={review.reviewId} className="w-full">
            <ImageReviewCardWithRatingBar reviewData={review} />
          </li>
        ))}
      </ul>
      <MessageText className="mb-8 mt-7" message={t('모든 내용을 확인했어요')} />
    </div>
  );
};

export default ReviewHistory;
