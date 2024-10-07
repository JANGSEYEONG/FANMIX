import type { InfluencerDetailResponse } from '@/types/service/influencerServiceType';

export const getInfluencerData = async (
  influencerId: string,
): Promise<InfluencerDetailResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/influencers/${influencerId}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error('Failed to fetch influencer data');
  return res.json();
};
