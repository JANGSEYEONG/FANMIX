'use client';
import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import { useMyFollowedInfluencers } from '@/hooks/queries/useFollowService';
import {
  MY_FOLLOWED_INFLUENCER_SORT_TYPE,
  type MyFollowedInfluencerSortType,
} from '@/types/domain/followType';

export const useFollowInfluencerList = () => {
  const t = useTranslations('follow_page');

  const [sort, setSort] = useState<MyFollowedInfluencerSortType>(
    MY_FOLLOWED_INFLUENCER_SORT_TYPE.CRDATE,
  );
  const { data, isLoading, isError } = useMyFollowedInfluencers({ sort });

  const onePickPrioritizedInfluencers = useMemo(() => {
    if (!data?.data) return [];

    // OnePick 인플루언서를 먼저 필터링
    const onePicks = data.data.filter((item) => item.isOnePick);
    // 나머지 인플루언서 필터링
    const nonOnePicks = data.data.filter((item) => !item.isOnePick);

    // OnePick 인플루언서를 앞에 두고 나머지를 뒤에 배치
    return [...onePicks, ...nonOnePicks];
  }, [data]);

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
    influencerListData: onePickPrioritizedInfluencers,
    isEmpty: onePickPrioritizedInfluencers.length === 0,
    isLoading,
    isError,
    sortButtons,
  };
};
