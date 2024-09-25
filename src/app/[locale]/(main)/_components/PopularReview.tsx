import InfluencerReviewCard from '@/components/domain/influencer/InfluencerReviewCard';

import type { InfluencerReview } from '@/types/domain/influencerType';

interface PopularReviewProps {
  reviews: InfluencerReview[];
}

const PopularReview = ({ reviews }: PopularReviewProps) => {
  return (
    <ul className="mt-6 w-full gap-6 flex-col-center">
      {reviews.map((review) => (
        <li key={review.reviewId} className="w-full">
          <InfluencerReviewCard data={review} />
        </li>
      ))}
    </ul>
  );
};

export default PopularReview;
