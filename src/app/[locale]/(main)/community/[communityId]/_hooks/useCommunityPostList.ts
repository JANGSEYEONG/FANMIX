'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  COMMUNITY_POST_SORT_TYPES,
  type CommunityPostSortType,
} from '@/types/domain/communityType';

export const useCommunityPostList = () => {
  const t = useTranslations('community_page');

  const [sort, setSort] = useState<CommunityPostSortType>(COMMUNITY_POST_SORT_TYPES.LATEST_POST);

  const sortButtons = [
    {
      label: t('최신순'),
      isSelected: sort === COMMUNITY_POST_SORT_TYPES.LATEST_POST,
      onClick: () => setSort(COMMUNITY_POST_SORT_TYPES.LATEST_POST),
    },
    {
      label: t('추천순'),
      isSelected: sort === COMMUNITY_POST_SORT_TYPES.VIEW_COUNT,
      onClick: () => setSort(COMMUNITY_POST_SORT_TYPES.VIEW_COUNT),
    },
    {
      label: t('인기순'),
      isSelected: sort === COMMUNITY_POST_SORT_TYPES.LIKE_COUNT,
      onClick: () => setSort(COMMUNITY_POST_SORT_TYPES.LIKE_COUNT),
    },
  ];
  return {
    sortButtons,
  };
};
