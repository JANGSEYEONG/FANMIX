import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  ALL_INFLUENCER_REVIEWS_SORT_TYPES,
  type AllInfluencerReviewsSortType,
} from '@/types/domain/reviewType';

export const useAllReviewsSortOptions = () => {
  const t = useTranslations('review_index_page');

  const [sort, setSort] = useState<AllInfluencerReviewsSortType>(
    ALL_INFLUENCER_REVIEWS_SORT_TYPES.LATEST,
  );

  const sortButtons = [
    {
      label: t('최신순'),
      isSelected: sort === ALL_INFLUENCER_REVIEWS_SORT_TYPES.LATEST,
      onClick: () => setSort(ALL_INFLUENCER_REVIEWS_SORT_TYPES.LATEST),
    },
    {
      label: t('추천순'),
      isSelected: sort === ALL_INFLUENCER_REVIEWS_SORT_TYPES.RECOMMENDED,
      onClick: () => setSort(ALL_INFLUENCER_REVIEWS_SORT_TYPES.RECOMMENDED),
    },
  ];

  return {
    sort,
    sortButtons,
  };
};
