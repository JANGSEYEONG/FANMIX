import { AxiosError } from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { followService } from '@/services/followService';
import type {
  InfluencerFollowStatusRequest,
  InfluencerFollowStatusResponse,
  ToggleInfluencerFollowRequest,
} from '@/types/service/followServiceType';

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

      // 팔로우 목록 페이지: 이전 상태를 전달받아서 팔로우 목록 가져오는 useQuery의 캐시 데이터 수정해야함
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
