'use client';

import { useTranslations } from 'next-intl';

import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';
import ErrorHandlingWrapper from '@/components/common/error/ErrorHandlingWrapper';

import SortOptionsList from '@/components/common/SortOptionsList';
import SpecificInfluencerReviewList from './SpecificInfluencerReviewList';

import { useSpecificInfluencerReviewSortOptions } from '../_hooks/useSpecificInfluencerReviewSortOptions';

interface SpecificInfluencerReviewWrapperProps {
  influencerId: number;
}
const SpecificInfluencerReviewWrapper = ({
  influencerId,
}: SpecificInfluencerReviewWrapperProps) => {
  const t = useTranslations('influencer_reviews_page');
  const { sort, sortButtons } = useSpecificInfluencerReviewSortOptions();
  console.log('SpecificInfluencerReviewWrapper:' + sort);

  return (
    <div className="flex h-full flex-col">
      <SortOptionsList className="px-5" sortButtons={sortButtons} />
      <ErrorHandlingWrapper
        errorFallbackMessage={t('한줄리뷰 전체 데이터를 가져오는데 문제가 생겼어요')}
        errorClassName="h-full"
        suspenseFallback={<ComponentSpinner className="h-full flex-center" />}>
        <SpecificInfluencerReviewList sort={sort} influencerId={influencerId} />
      </ErrorHandlingWrapper>
    </div>
  );
};

export default SpecificInfluencerReviewWrapper;
