'use client';

import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui/separator';

import TextReviewCard from './TextReviewCard';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';

import { useSpecificInfluencerReview } from '../_hooks/useSpecificInfluencerReview';

const LoadingView = () => (
  <div className="h-full flex-center">
    <ComponentSpinner />
  </div>
);

interface StatusMessageProps {
  message: string;
}
const StatusMessage = ({ message }: StatusMessageProps) => (
  <p className="h-full text-neutral-500 flex-center body3-r">{message}</p>
);

interface SpecificInfluencerReviewListProps {
  influencerId: number;
}
const SpecificInfluencerReviewList = ({ influencerId }: SpecificInfluencerReviewListProps) => {
  const t = useTranslations('influencer_reviews_page');
  const { reviewListData, isLoading, isError, sortButtons } =
    useSpecificInfluencerReview(influencerId);

  if (isLoading) return <LoadingView />;

  if (!isError && (!reviewListData || reviewListData.data.length === 0))
    return <StatusMessage message={t('첫 한줄리뷰를 작성해 주세요')} />;

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-[15px] px-5">
        {sortButtons.map(({ label, isSelected, onClick }) => (
          <button
            key={label}
            className={cn('text-neutral-400 body3-r', isSelected && 'text-lime-400')}
            onClick={onClick}>
            {label}
          </button>
        ))}
      </div>
      {isError ? (
        <StatusMessage message={t('한줄리뷰 전체 데이터를 가져오는데 문제가 생겼어요')} />
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
          <p className="mb-8 mt-7 text-center text-neutral-500 body3-r">
            {t('모든 리뷰를 확인했어요')}
          </p>
        </>
      )}
    </div>
  );
};

export default SpecificInfluencerReviewList;
