import { useState } from 'react';
import { useTranslations } from 'next-intl';

import {
  SPECIFIC_INFLUENCER_REVIEWS_SORT_TYPES,
  type SpecificInfluencerReviewsSortType,
} from '@/types/domain/reviewType';

export const useSpecificInfluencerReviewSortOptions = () => {
  const t = useTranslations('influencer_reviews_page');

  const [sort, setSort] = useState<SpecificInfluencerReviewsSortType>(
    SPECIFIC_INFLUENCER_REVIEWS_SORT_TYPES.LATEST,
  );

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
    sort,
    sortButtons,
  };
};
