import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { fanChannelService } from '@/services/fanChannelService';
import type {
  AllFanChannelsRequest,
  AllFanChannelsResponse,
} from '@/types/service/fanChannelServiceType';

// 팬채널 전체 목록
export const useGetAllFanChannels = ({ sort }: AllFanChannelsRequest) => {
  return useQuery<AllFanChannelsResponse, AxiosError>({
    queryKey: ['allFanChannels', sort],
    queryFn: () => fanChannelService.allFanChannels({ sort }),
  });
};
