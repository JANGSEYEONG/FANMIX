import { ax, handleAxiosError } from './axios';

import type {
  RecentlyVerifiedInfluencerResponse,
  WeeklyHotInfluencersResponse,
} from '@/types/service/influencerServiceType';

export const influencerService = {
  // 주간 인기 인플루언서
  getWeeklyHotInfluencers: async (): Promise<WeeklyHotInfluencersResponse> => {
    try {
      const response = await ax.get<WeeklyHotInfluencersResponse>('/api/influencers/hot10');
      console.log('getWeeklyHotInfluencers:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
  // 최근 인증 인플루언서
  getRecentlyVerifiedInfluencers: async (): Promise<RecentlyVerifiedInfluencerResponse> => {
    try {
      const response = await ax.get<RecentlyVerifiedInfluencerResponse>(
        '/api/influencers/recent10',
      );
      console.log('getRecentlyVerifiedInfluencers Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
};
