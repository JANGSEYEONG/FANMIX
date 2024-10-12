import { ax, handleAxiosError } from './axios';

import type {
  InfluencerDetailRequest,
  InfluencerDetailResponse,
  RecentlyVerifiedInfluencerResponse,
  SearchInfluencersByNameResponse,
  SearchInfluencersRequest,
  SearchInfluencersResponse,
  UpdateOnePickInfluencerRequest,
  UpdateOnePickInfluencerResponse,
  UserOnePickInfluencerRequest,
  UserOnePickInfluencerResponse,
  WeeklyHotInfluencersResponse,
} from '@/types/service/influencerServiceType';

export const influencerService = {
  // 인플루언서 상세정보
  influencerDetail: async ({
    influencerId,
  }: InfluencerDetailRequest): Promise<InfluencerDetailResponse> => {
    try {
      const response = await ax.get<InfluencerDetailResponse>(`/api/influencers/${influencerId}`);
      console.log('influencerDetail Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
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
  userOnePickInfluencer: async ({
    userId,
  }: UserOnePickInfluencerRequest): Promise<UserOnePickInfluencerResponse> => {
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
  searchInfluencersByName: async (keyword: string): Promise<SearchInfluencersByNameResponse> => {
    try {
      const response = await ax.get<SearchInfluencersByNameResponse>(
        '/api/influencers/main-search',
        {
          params: { keyword },
        },
      );
      console.log('influencersByName Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 인플루언서 검색 - 인플루언서 검색페이지 (타입, 정렬, 키워드)
  searchInfluencers: async ({
    searchType,
    keyword,
    sort,
  }: SearchInfluencersRequest): Promise<SearchInfluencersResponse> => {
    try {
      const response = await ax.get<SearchInfluencersResponse>('/api/influencers/search', {
        params: { searchType, keyword, sort },
      });
      console.log('searchInfluencers Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
};
