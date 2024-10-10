import { useTranslations } from 'next-intl';
import ImageReviewCardWithRatingBar from '@/components/domain/influencer/ImageReviewCardWithRatingBar';
import type { ImageReviewCardData } from '@/types/domain/reviewType';

interface PopularReviewProps {
  reviews: ImageReviewCardData[];
}

const PopularReview = ({ reviews }: PopularReviewProps) => {
  const t = useTranslations('main_page');
  return reviews.length === 0 ? (
    <div className="mt-6 h-40 text-neutral-400 flex-center body3-r">
      <p>{t('아직 인기 리뷰가 없어요')}</p>
    </div>
  ) : (
    <ul className="mt-6 w-full gap-6 flex-col-center">
      {reviews.map((review) => (
        <li key={review.reviewId} className="w-full">
          <ImageReviewCardWithRatingBar reviewData={review} isPopular />
        </li>
      ))}
    </ul>
  );
};

export default PopularReview;
