import { ax, handleAxiosError } from './axios';
import type {
  InfluencerFollowStatusRequest,
  InfluencerFollowStatusResponse,
  MyFollowedInfluencersResponse,
  ToggleInfluencerFollowRequest,
} from '@/types/service/followServiceType';

export const followService = {
  // 내가 팔로우하는 인플루언서 목록, requset로 sort 추가되어야함
  myFollowedInfluencers: async (): Promise<MyFollowedInfluencersResponse> => {
    try {
      const response = await ax.get<MyFollowedInfluencersResponse>('/api/members/followers');
      console.log('myFollowedInfluencers Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 팔로우 지정/해제 (백엔드에서 알아서 팔로우 되어있는 상태에서 요청오면 언팔, 반대면 팔로우)
  toggleInfluencerFollow: async ({ influencerId }: ToggleInfluencerFollowRequest) => {
    try {
      const response = await ax.post(`/api/influencers/${influencerId}/follow`);
      console.log('toggleInfluencerFollow Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 인플루언서 팔로잉 여부
  influencerFollowStatus: async ({
    influencerId,
  }: InfluencerFollowStatusRequest): Promise<InfluencerFollowStatusResponse> => {
    try {
      const response = await ax.get<InfluencerFollowStatusResponse>(
        `/api/influencers/${influencerId}/follow-status`,
      );
      console.log('influencerFollowStatus Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
};
