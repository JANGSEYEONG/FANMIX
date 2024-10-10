import api from './fetch';
import type { InfluencerReviewDetailWithCommentsResponse } from '@/types/service/reviewServiceType';

export const getInfluencerReviewDetailWithCommentsData = async (
  influencerId: string,
  reviewId: string,
): Promise<InfluencerReviewDetailWithCommentsResponse> => {
  return api.get<InfluencerReviewDetailWithCommentsResponse>(
    `${process.env.NEXT_PUBLIC_URL}/api/influencers/${influencerId}/reviews/${reviewId}/comments`,
    { hasAuth: true },
  );
};
