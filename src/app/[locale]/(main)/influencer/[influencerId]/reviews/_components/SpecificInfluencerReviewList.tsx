'use client';

import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui/separator';
import MessageText from '@/components/common/MessageText';

import TextReviewCard from './TextReviewCard';

import { useSpecificInfluencerAllReviews } from '@/hooks/queries/useReviewService';
import type { SpecificInfluencerReviewsSortType } from '@/types/domain/reviewType';

interface SpecificInfluencerReviewListProps {
  sort: SpecificInfluencerReviewsSortType;
  influencerId: number;
}
const SpecificInfluencerReviewList = ({
  sort,
  influencerId,
}: SpecificInfluencerReviewListProps) => {
  const t = useTranslations('influencer_reviews_page');
  const { data: reviewListData } = useSpecificInfluencerAllReviews({
    sort,
    influencerId,
  });

  if (!reviewListData || reviewListData.data.length === 0)
    return <MessageText className="h-full" message={t('첫 한줄리뷰를 작성해 주세요')} />;

  return (
    <div>
      <Separator className="mt-[13px] h-[0.7px] bg-neutral-600" />
      <ul className="w-full flex-col-center">
        {reviewListData?.data.map((reviewData) => (
          <li key={reviewData.reviewId} className="w-full">
            <TextReviewCard influencerId={influencerId} {...reviewData} />
            <Separator className="h-[0.7px] bg-neutral-600" />
          </li>
        ))}
      </ul>
      <MessageText className="mb-8 mt-7" message={t('모든 리뷰를 확인했어요')} />
    </div>
  );
};

export default SpecificInfluencerReviewList;
