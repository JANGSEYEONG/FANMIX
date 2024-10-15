import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { useGetAllFanChannels } from '@/hooks/queries/useFanChannelService';

import {
  ALL_FAN_CHANNELS_SORT_TYPES,
  type AllFanChannelsSortType,
} from '@/types/domain/fanChannelType';

function isAllFanChannelsSortType(value: string): value is AllFanChannelsSortType {
  return Object.values(ALL_FAN_CHANNELS_SORT_TYPES).includes(value as AllFanChannelsSortType);
}

export const useAllFanChannelList = (defaultSort?: string) => {
  const t = useTranslations('fan_channel_index_page');

  let initialSort: AllFanChannelsSortType = ALL_FAN_CHANNELS_SORT_TYPES.FOLLOWER_COUNT;

  if (defaultSort && isAllFanChannelsSortType(defaultSort)) {
    initialSort = defaultSort;
  }

  const [sort, setSort] = useState<AllFanChannelsSortType>(initialSort);
  const { data, isLoading, isError } = useGetAllFanChannels({ sort });

  const sortButtons = [
    {
      label: t('채널인기순'),
      isSelected: sort === ALL_FAN_CHANNELS_SORT_TYPES.FOLLOWER_COUNT,
      onClick: () => setSort(ALL_FAN_CHANNELS_SORT_TYPES.FOLLOWER_COUNT),
    },
    {
      label: t('최신등록순'),
      isSelected: sort === ALL_FAN_CHANNELS_SORT_TYPES.CONFIRM_STATUS,
      onClick: () => setSort(ALL_FAN_CHANNELS_SORT_TYPES.CONFIRM_STATUS),
    },
    {
      label: t('이름순'),
      isSelected: sort === ALL_FAN_CHANNELS_SORT_TYPES.NAME,
      onClick: () => setSort(ALL_FAN_CHANNELS_SORT_TYPES.NAME),
    },
  ];
  return {
    fanChannelListData: data,
    isLoading,
    isError,
    sortButtons,
  };
};
