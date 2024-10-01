import ImageReviewCardWithRatingBar from '@/components/domain/influencer/ImageReviewCardWithRatingBar';

import type { InfluencerReview } from '@/types/domain/influencerType';

interface PopularReviewProps {
  reviews: InfluencerReview[];
}

const PopularReview = ({ reviews }: PopularReviewProps) => {
  return (
    <ul className="mt-6 w-full gap-6 flex-col-center">
      {reviews.map((review) => (
        <li key={review.reviewId} className="w-full">
          <ImageReviewCardWithRatingBar data={review} isPopular />
        </li>
      ))}
    </ul>
  );
};

export default PopularReview;
