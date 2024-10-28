import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fanChannelService } from '@/services/fanChannelService';
import type {
  AllFanChannelsRequest,
  AllFanChannelsResponse,
  FanChannelInfoRequest,
  FanChannelInfoRespose,
} from '@/types/service/fanChannelServiceType';

// 팬채널 전체 목록
export const useGetAllFanChannels = ({ sort }: AllFanChannelsRequest) => {
  return useSuspenseQuery<AllFanChannelsResponse, AxiosError>({
    queryKey: ['allFanChannels', sort],
    queryFn: () => fanChannelService.allFanChannels({ sort }),
  });
};

// 팬채널 정보 조회 (인플루언서 정보)
export const useGetFanChannelInfo = ({ communityId }: FanChannelInfoRequest) => {
  return useSuspenseQuery<FanChannelInfoRespose, AxiosError>({
    queryKey: ['fanChannelInfo', communityId],
    queryFn: () => fanChannelService.fanChannelInfo({ communityId }),
  });
};
