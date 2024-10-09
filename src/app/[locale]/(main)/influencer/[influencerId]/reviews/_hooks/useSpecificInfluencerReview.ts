import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { useSpecificInfluencerAllReviews } from '@/hooks/queries/useReviewService';
import {
  SPECIFIC_INFLUENCER_REVIEWS_SORT_TYPES,
  type SpecificInfluencerReviewsSortType,
} from '@/types/domain/reviewType';

export const useSpecificInfluencerReview = (influencerId: number) => {
  const t = useTranslations('influencer_reviews_page');

  const [sort, setSort] = useState<SpecificInfluencerReviewsSortType>(
    SPECIFIC_INFLUENCER_REVIEWS_SORT_TYPES.LATEST,
  );
  const { data, isLoading, isError } = useSpecificInfluencerAllReviews({
    influencerId,
    sort: sort,
  });

  const sortButtons = [
    {
      label: t('최신순'),
      isSelected: sort === SPECIFIC_INFLUENCER_REVIEWS_SORT_TYPES.LATEST,
      onClick: () => setSort(SPECIFIC_INFLUENCER_REVIEWS_SORT_TYPES.LATEST),
    },
    {
      label: t('추천순'),
      isSelected: sort === SPECIFIC_INFLUENCER_REVIEWS_SORT_TYPES.RECOMMENDED,
      onClick: () => setSort(SPECIFIC_INFLUENCER_REVIEWS_SORT_TYPES.RECOMMENDED),
    },
  ];

  return {
    reviewListData: data,
    isLoading,
    isError,
    sortButtons,
  };
};
