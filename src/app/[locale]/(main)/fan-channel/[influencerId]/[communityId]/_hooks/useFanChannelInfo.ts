'use client';
import { useEffect, useMemo } from 'react';
import { usePageInfoStore } from '@/stores/pageInfoStore';

import { RouteKeys } from '@/constants/routes';

export const useFanChannelInfo = (influencerId: number, communityId: number) => {
  const setPageInfo = usePageInfoStore((state) => state.setPageInfo);
  // const {
  //   data: { data: influencerInfoData },
  // } = useGetFanChannelInfo({ communityId });
  // TODO: 백엔드 api 수정되면 서버에서 데이터 가져오게 고쳐야함
  const influencerInfoData = useMemo(() => {
    return {
      influencerName: '3',
      followerCount: 3,
      postCount: 3,
      latestPostDate: '',
    };
  }, []);
  // 여기서 팬채널 정보 값 가져오고.. store update 해야함
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
