import api from './fetch';

import type {
  InfluencerFollowStatusRequest,
  InfluencerFollowStatusResponse,
} from '@/types/service/followServiceType';

// 인플루언서 팔로잉 여부
export const getInfluencerFollowStatusData = async ({
  influencerId,
}: InfluencerFollowStatusRequest): Promise<InfluencerFollowStatusResponse> => {
  return api.get<InfluencerFollowStatusResponse>(
    `${process.env.NEXT_PUBLIC_URL}/api/influencers/${influencerId}/follow-status`,
    { hasAuth: true },
  );
};
