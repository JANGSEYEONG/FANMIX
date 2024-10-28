import { ax, handleAxiosError } from './axios';
import type {
  AllFanChannelsRequest,
  AllFanChannelsResponse,
  FanChannelInfoRequest,
  FanChannelInfoRespose,
} from '@/types/service/fanChannelServiceType';

export const fanChannelService = {
  // 팬채널 전체 목록 조회
  allFanChannels: async ({ sort }: AllFanChannelsRequest) => {
    try {
      const response = await ax.get<AllFanChannelsResponse>(`/api/fanchannels?sort=${sort}`);
      console.log('allFanChannels:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 팬채널 정보 조회 (인플루언서 정보)
  fanChannelInfo: async ({ communityId }: FanChannelInfoRequest) => {
    try {
      const response = await ax.get<FanChannelInfoRespose>(`/api/fanchannels/${communityId}/info`);
      console.log('fanChannelInfo:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
};
