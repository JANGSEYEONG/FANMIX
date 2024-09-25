import InfluencerReviewCard from '@/components/domain/influencer/InfluencerReviewCard';

import type { InfluencerReview } from '@/types/domain/influencerType';
import { useTranslations } from 'next-intl';

interface MyReviewProps {
  reviews: InfluencerReview[];
}

const MyReview = ({ reviews }: MyReviewProps) => {
  const t = useTranslations('my_activity_history_page');

  return (
    <div className="h-full w-full overflow-y-auto pt-5 scrollbar-hide-smooth">
      <ul className="flex w-full flex-col items-center gap-[30px]">
        {reviews.map((review) => (
          <li key={review.reviewId} className="w-full">
            <InfluencerReviewCard data={review} />
          </li>
        ))}
      </ul>
      <div className="mb-8 mt-7 text-center text-neutral-500 body3-r">
        {t('모든 내용을 확인했습니다')}
      </div>
    </div>
  );
};

export default MyReview;
