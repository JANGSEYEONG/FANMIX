import { useCallback, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { isEqual } from 'lodash';

import { influencerService } from '@/services/influencerService';
import type {
  InfluencerDetailResponse,
  SearchInfluencersByNameResponse,
  SearchInfluencersRequest,
  SearchInfluencersResponse,
  UpdateOnePickInfluencerRequest,
  UpdateOnePickInfluencerResponse,
  UserOnePickInfluencerRequest,
  UserOnePickInfluencerResponse,
} from '@/types/service/influencerServiceType';
import { MyFollowedInfluencersResponse } from '@/types/service/followServiceType';
import { useUserStore } from '@/stores/userStore';

export const useInfluencerDetail = (influencerId: number) => {
  return useQuery<InfluencerDetailResponse, AxiosError>({
    queryKey: ['influencerDetail', influencerId],
    queryFn: () => influencerService.influencerDetail({ influencerId }),
    enabled: !!influencerId,
  });
};

export const useSearchInfluencersByName = (searchTerm: string) => {
  return useQuery<SearchInfluencersByNameResponse, AxiosError>({
    queryKey: ['searchInfluencersByName', searchTerm],
    queryFn: () => influencerService.searchInfluencersByName(searchTerm),
    enabled: !!searchTerm,
  });
};

export const useSearchInfluencers = (initialCondition: SearchInfluencersRequest) => {
  const [searchParams, setSearchParams] = useState<SearchInfluencersRequest | null>(
    initialCondition,
  );
  const query = useQuery<SearchInfluencersResponse, AxiosError>({
    queryKey: ['searchInfluencers', searchParams],
    queryFn: () => influencerService.searchInfluencers(searchParams!),
    enabled: !!searchParams,
  });

  const search = useCallback(
    (params: SearchInfluencersRequest) => {
      if (!isEqual(params, searchParams)) {
        setSearchParams(params);
        if (searchParams !== null) {
          query.refetch();
        }
      }
    },
    [searchParams, query],
  );

  return {
    ...query,
    search,
  };
};

// 원픽 인플루언서 조회
export const useUserOnePickInfluencer = ({ userId }: UserOnePickInfluencerRequest) => {
  return useQuery<UserOnePickInfluencerResponse, AxiosError>({
    queryKey: ['userOnePickInfluencer', userId],
    queryFn: () => influencerService.userOnePickInfluencer({ userId }),
    enabled: !!userId,
  });
};

// 원픽 인플루언서 지정/해제
export const useUpdateOnePickInfluencer = () => {
  const queryClient = useQueryClient();
  const user = useUserStore((state) => state.user);

  return useMutation<UpdateOnePickInfluencerResponse, AxiosError, UpdateOnePickInfluencerRequest>({
    mutationFn: influencerService.updateOnePickInfluencer,
    onSuccess: (_, variables) => {
      const { influencerId, onePick: isSetOnePick } = variables;
      // 팔로우 설정/해제 시
      // setQueryData로 팔로우 리스트의 원픽 인플루언서 업데이트 해야함
      const updateMyFollowedInCache = (oldData: MyFollowedInfluencersResponse | undefined) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: oldData.data.map((followInfluencer) =>
            followInfluencer.influencerId === influencerId
              ? {
                  ...followInfluencer,
                  isOnePick: !!isSetOnePick,
                }
              : {
                  ...followInfluencer,
                  isOnePick: false,
                },
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

      // 팔로우 해제 시
      // 마이페이지에서 해제할 경우도 있으니, 원픽 인플루언서 조회도 처리해야함
      // 마이페이지에서는 설정 해제밖에 없어서, 원픽 인플루언서 조회 쿼리는 삭제만 처리하면 됌
      if (!isSetOnePick && user) {
        queryClient.setQueryData<UserOnePickInfluencerResponse>(
          ['userOnePickInfluencer', user.userId],
          (oldData) => {
            if (!oldData) return oldData;
            return {
              ...oldData,
              data: null,
            };
          },
        );
      }
    },
  });
};
