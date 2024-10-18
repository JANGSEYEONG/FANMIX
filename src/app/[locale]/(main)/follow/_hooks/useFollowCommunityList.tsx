'use client';

import { useState } from 'react';
import {
  MY_FOLLOWED_COMMUNITY_SORT_TYPE,
  type MyFollowedCommunitySortType,
} from '@/types/domain/followType';
import { useTranslations } from 'next-intl';

export const useFollowCommunityList = () => {
  const t = useTranslations('follow_page');
  const [sort, setSort] = useState<MyFollowedCommunitySortType>(
    MY_FOLLOWED_COMMUNITY_SORT_TYPE.LATEST_FOLLOW,
  );
  const sortButtons = [
    {
      label: t('최신팔로우순'),
      isSelected: sort === MY_FOLLOWED_COMMUNITY_SORT_TYPE.LATEST_FOLLOW,
      onClick: () => setSort(MY_FOLLOWED_COMMUNITY_SORT_TYPE.LATEST_FOLLOW),
    },
    {
      label: t('최신글순'),
      isSelected: sort === MY_FOLLOWED_COMMUNITY_SORT_TYPE.LATEST_POST,
      onClick: () => setSort(MY_FOLLOWED_COMMUNITY_SORT_TYPE.LATEST_POST),
    },
    {
      label: t('이름순'),
      isSelected: sort === MY_FOLLOWED_COMMUNITY_SORT_TYPE.NAME,
      onClick: () => setSort(MY_FOLLOWED_COMMUNITY_SORT_TYPE.NAME),
    },
  ];
  return {
    sortButtons,
  };
};
