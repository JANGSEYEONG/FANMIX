import api from './fetch';
import type {
  InfluencerDetailResponse,
  RecentlyVerifiedInfluencerResponse,
  UserOnePickInfluencerRequest,
  UserOnePickInfluencerResponse,
  WeeklyHotInfluencersResponse,
} from '@/types/service/influencerServiceType';

// 인플루언서 상세 정보
export const getInfluencerData = async (
  influencerId: string,
): Promise<InfluencerDetailResponse> => {
  return api.get<InfluencerDetailResponse>(
    `${process.env.NEXT_PUBLIC_URL}/api/influencers/${influencerId}`,
    { hasAuth: true },
  );
};

// 주간 인기 인플루언서
export const getWeeklyHotInfluencersData = async (): Promise<WeeklyHotInfluencersResponse> => {
  return api.get<WeeklyHotInfluencersResponse>(
    `${process.env.NEXT_PUBLIC_URL}/api/influencers/hot10`,
  );
};

// 최근 인증 인플루언서
export const getRecentlyVerifiedInfluencersData =
  async (): Promise<RecentlyVerifiedInfluencerResponse> => {
    return api.get<RecentlyVerifiedInfluencerResponse>(
      `${process.env.NEXT_PUBLIC_URL}/api/influencers/recent10`,
    );
  };

// 유저의 원픽 인플루언서
export const getUserOnePickInfluencerData = async ({
  userId,
}: UserOnePickInfluencerRequest): Promise<UserOnePickInfluencerResponse> => {
  return api.get<UserOnePickInfluencerResponse>(
    `${process.env.NEXT_PUBLIC_URL}/api/public/members/${userId}/onepick`,
    { hasAuth: true },
  );
};
