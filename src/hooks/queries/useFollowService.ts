import { AxiosError } from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { followService } from '@/services/followService';
import type {
  InfluencerFollowStatusRequest,
  InfluencerFollowStatusResponse,
  MyFollowedInfluencersRequest,
  MyFollowedInfluencersResponse,
  ToggleInfluencerFollowRequest,
} from '@/types/service/followServiceType';

// 내가 팔로우하는 인플루언서 리스트
export const useMyFollowedInfluencers = ({ sort }: MyFollowedInfluencersRequest) => {
  return useQuery<MyFollowedInfluencersResponse, AxiosError>({
    queryKey: ['myFollowedInfluencers', sort],
    queryFn: () => followService.myFollowedInfluencers({ sort }),
  });
};

// Toggle Follow
// 이전 상태를 전달받아서 팔로우 목록 가져오는 useQuery의 캐시 데이터 수정해야함
export const useToggleInfluencerFollow = () => {
  const queryClient = useQueryClient();
  return useMutation<null, AxiosError, ToggleInfluencerFollowRequest>({
    mutationFn: followService.toggleInfluencerFollow,
    onSuccess: (_, variables) => {
      const { influencerId } = variables;

      // useInfluencerFollowStatus의 캐시 수정하기
      queryClient.setQueryData<InfluencerFollowStatusResponse>(
        ['influencerFollowStatus', influencerId],
        (oldData) => {
          if (!oldData) return oldData;
          return {
            ...oldData,
            data: !oldData.data,
          };
        },
      );

      // 팔로우 목록 페이지: 이전 상태를 전달받아서 팔로우 목록 가져오는 useQuery의 캐시 데이터 수정
      // 팔로우 페이지에서는 팔로우 해제만 가능하므로, 삭제처리만 해도 된다.
      const updateMyFollowedInCache = (oldData: MyFollowedInfluencersResponse | undefined) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: oldData.data.filter(
            (followInfluencer) => followInfluencer.influencerId !== influencerId,
          ),
        };
      };
      queryClient.setQueryData<MyFollowedInfluencersResponse>(
        ['myFollowedInfluencers', 'CRDATE'],
        updateMyFollowedInCache,
      );
      queryClient.setQueryData<MyFollowedInfluencersResponse>(
        ['myFollowedInfluencers', 'LATEST_REVIEW'],
        updateMyFollowedInCache,
      );
      queryClient.setQueryData<MyFollowedInfluencersResponse>(
        ['myFollowedInfluencers', 'NAME'],
        updateMyFollowedInCache,
      );
    },
  });
};

// 인플루언서 팔로잉 여부 확인
export const useInfluencerFollowStatus = ({ influencerId }: InfluencerFollowStatusRequest) => {
  return useQuery<InfluencerFollowStatusResponse, AxiosError>({
    queryKey: ['influencerFollowStatus', influencerId],
    queryFn: () => followService.influencerFollowStatus({ influencerId }),
    enabled: !!influencerId,
  });
};
