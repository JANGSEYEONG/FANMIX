'use client';
import { useEffect } from 'react';
import { usePageInfoStore } from '@/stores/pageInfoStore';

import { RouteKeys } from '@/constants/routes';
import { useGetFanChannelInfo } from '@/hooks/queries/useFanChannelService';

export const useFanChannelInfo = (influencerId: number, communityId: number) => {
  const setPageInfo = usePageInfoStore((state) => state.setPageInfo);
  const {
    data: { data: influencerInfoData },
  } = useGetFanChannelInfo({ communityId });

  useEffect(() => {
    if (influencerInfoData) {
      setPageInfo({
        currentPage: RouteKeys.FAN_CHANNEL,
        communityId,
        influencerId,
        influencerName: influencerInfoData.influencerName,
      });
    }
  }, [influencerInfoData, setPageInfo, communityId, influencerId]);

  return {
    influencerInfoData,
  };
};
