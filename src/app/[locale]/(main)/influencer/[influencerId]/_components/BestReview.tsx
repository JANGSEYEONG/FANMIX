import { useTranslations } from 'next-intl';
import BestReviewCard from './BestReviewCard';

interface BestReviewProps {
  influencerId: number;
  reviewsCount: number;
  bestReview: {
    reviewId: number;
    reviewerNickName: string;
    reviewContent: string;
    reviewLikeCount: number;
    reviewDislikeCount: number;
    reviewCommentsCount: number;
    reviewDate: string;
  };
}

const BestReview = ({ influencerId, reviewsCount, bestReview }: BestReviewProps) => {
  const t = useTranslations('influencer_page');
  return (
    <div className="flex flex-col justify-center gap-[15px] px-5">
      <div className="flex items-center gap-[5px]">
        <h2 className="body3-m">{t('BEST 리뷰')}</h2>
        <span className="text-neutral-300 sub1-m">
          {t('리뷰 {reviewsCount}개 중', { reviewsCount: reviewsCount })}
        </span>
      </div>
      <BestReviewCard influencerId={influencerId} {...bestReview} />
    </div>
  );
};

export default BestReview;
