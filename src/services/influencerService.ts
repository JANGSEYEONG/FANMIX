import { ax, handleAxiosError } from './axios';

import type {
  InfluencersByNameResponse,
  RecentlyVerifiedInfluencerResponse,
  UpdateOnePickInfluencerRequest,
  UpdateOnePickInfluencerResponse,
  UserOnePickInfluencerResponse,
  WeeklyHotInfluencersResponse,
} from '@/types/service/influencerServiceType';

export const influencerService = {
  // 주간 인기 인플루언서
  weeklyHotInfluencers: async (): Promise<WeeklyHotInfluencersResponse> => {
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
  recentlyVerifiedInfluencers: async (): Promise<RecentlyVerifiedInfluencerResponse> => {
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
  // 원픽 인플루언서 지정/해제
  updateOnePickInfluencer: async ({
    influencerId,
    onePick,
  }: UpdateOnePickInfluencerRequest): Promise<UpdateOnePickInfluencerResponse> => {
    try {
      const response = await ax.patch<UpdateOnePickInfluencerResponse>('/api/members/onepick', {
        influencerId,
        onePick,
      });
      console.log('updateOnePickInfluencer Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 특정 유저의 원픽 인플루언서 조회
  userOnePickInfluencer: async (userId: number): Promise<UserOnePickInfluencerResponse> => {
    try {
      const response = await ax.get<UserOnePickInfluencerResponse>(
        `/api/public/members/${userId}/onepick`,
      );
      console.log('userOnePickInfluencer Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 인플루언서 검색 - 메인(이름)
  influencersByName: async (keyword: string): Promise<InfluencersByNameResponse> => {
    try {
      const response = await ax.get<InfluencersByNameResponse>('/api/search', {
        params: { keyword },
      });
      console.log('influencersByName Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 인플루언서 검색 - 인플루언서 검색페이지 (타입, 정렬, 키워드)

  // 인플루언서 상세정보
};
