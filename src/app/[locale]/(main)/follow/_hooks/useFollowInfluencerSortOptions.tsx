import { useState } from 'react';
import { useTranslations } from 'next-intl';

import {
  MY_FOLLOWED_INFLUENCER_SORT_TYPE,
  type MyFollowedInfluencerSortType,
} from '@/types/domain/followType';

export const useFollowInfluencerSortOptions = () => {
  const t = useTranslations('follow_page');
  const [sort, setSort] = useState<MyFollowedInfluencerSortType>(
    MY_FOLLOWED_INFLUENCER_SORT_TYPE.CRDATE,
  );

  const sortButtons = [
    {
      label: t('최신팔로우순'),
      isSelected: sort === MY_FOLLOWED_INFLUENCER_SORT_TYPE.CRDATE,
      onClick: () => setSort(MY_FOLLOWED_INFLUENCER_SORT_TYPE.CRDATE),
    },
    {
      label: t('최신리뷰순'),
      isSelected: sort === MY_FOLLOWED_INFLUENCER_SORT_TYPE.LATEST_REVIEW,
      onClick: () => setSort(MY_FOLLOWED_INFLUENCER_SORT_TYPE.LATEST_REVIEW),
    },
    {
      label: t('이름순'),
      isSelected: sort === MY_FOLLOWED_INFLUENCER_SORT_TYPE.NAME,
      onClick: () => setSort(MY_FOLLOWED_INFLUENCER_SORT_TYPE.NAME),
    },
  ];

  return {
    sort,
    sortButtons,
  };
};
