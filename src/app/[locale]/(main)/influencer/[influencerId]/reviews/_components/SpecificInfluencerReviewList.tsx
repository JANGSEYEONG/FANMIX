'use client';

import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui/separator';
import MessageText from '@/components/common/MessageText';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

import TextReviewCard from './TextReviewCard';
import SortOptionsList from '@/components/common/SortOptionsList';

import { useSpecificInfluencerReview } from '../_hooks/useSpecificInfluencerReview';

interface SpecificInfluencerReviewListProps {
  influencerId: number;
}
const SpecificInfluencerReviewList = ({ influencerId }: SpecificInfluencerReviewListProps) => {
  const t = useTranslations('influencer_reviews_page');
  const { reviewListData, isLoading, isError, sortButtons } =
    useSpecificInfluencerReview(influencerId);

  if (isLoading) return <ComponentSpinner className="h-full flex-center" />;

  if (!isError && (!reviewListData || reviewListData.data.length === 0))
    return <MessageText className="h-full" message={t('첫 한줄리뷰를 작성해 주세요')} />;

  return (
    <div className="flex h-full flex-col">
      <SortOptionsList className="px-5" sortButtons={sortButtons} />
      {isError ? (
        <MessageText
          className="h-full"
          message={t('한줄리뷰 전체 데이터를 가져오는데 문제가 생겼어요')}
        />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default SpecificInfluencerReviewList;
