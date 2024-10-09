import api from './fetch';
import type { InfluencerDetailResponse } from '@/types/service/influencerServiceType';

export const getInfluencerData = async (
  influencerId: string,
): Promise<InfluencerDetailResponse> => {
  return api.get<InfluencerDetailResponse>(
    `${process.env.NEXT_PUBLIC_URL}/api/influencers/${influencerId}`,
  );
};
