'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  FAN_CHANNEL_POST_SORT_TYPES,
  type FanChannelPostSortType,
} from '@/types/domain/fanChannelType';

export const useFanChannelPostList = () => {
  const t = useTranslations('fan_channel_page');

  const [sort, setSort] = useState<FanChannelPostSortType>(FAN_CHANNEL_POST_SORT_TYPES.LATEST_POST);

  const sortButtons = [
    {
      label: t('최신순'),
      isSelected: sort === FAN_CHANNEL_POST_SORT_TYPES.LATEST_POST,
      onClick: () => setSort(FAN_CHANNEL_POST_SORT_TYPES.LATEST_POST),
    },
    {
      label: t('추천순'),
      isSelected: sort === FAN_CHANNEL_POST_SORT_TYPES.VIEW_COUNT,
      onClick: () => setSort(FAN_CHANNEL_POST_SORT_TYPES.VIEW_COUNT),
    },
    {
      label: t('인기순'),
      isSelected: sort === FAN_CHANNEL_POST_SORT_TYPES.LIKE_COUNT,
      onClick: () => setSort(FAN_CHANNEL_POST_SORT_TYPES.LIKE_COUNT),
    },
  ];
  return {
    sortButtons,
  };
};
