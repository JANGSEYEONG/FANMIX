import { ax, handleAxiosError } from './axios';
import type {
  AllFanChannelsRequest,
  AllFanChannelsResponse,
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
};
