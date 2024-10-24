'use client';
import { useTranslations } from 'next-intl';

import MessageText from '@/components/common/MessageText';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';
import ImageReviewCardWithRatingBar from '@/components/domain/influencer/ImageReviewCardWithRatingBar';

import type { ImageReviewCardData } from '@/types/domain/reviewType';

interface ReviewHistoryProps {
  reviewHistoryData: ImageReviewCardData[] | undefined;
  isLoading: boolean;
  isError: boolean;
}
const ReviewHistory = ({ reviewHistoryData, isLoading, isError }: ReviewHistoryProps) => {
  const t = useTranslations('activity_history');

  // #20241024.syjang, 공통으로 사용되는 ui라 isLoading 유지
  if (isLoading) return <ComponentSpinner className="h-full flex-center" />;
  if (isError)
    return (
      <MessageText
        className="h-full"
        message={t('리뷰를 불러오는 데 실패했어요 다시 시도해 주세요')}
      />
    );
  if (!reviewHistoryData || reviewHistoryData.length === 0)
    return <MessageText className="h-full" message={t('아직 작성한 리뷰가 없어요')} />;
  return (
    <div className="h-full w-full overflow-y-auto pb-8 pt-5 scrollbar-hide-smooth">
      <ul className="flex w-full flex-col items-center gap-[30px]">
        {reviewHistoryData.map((review) => (
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
