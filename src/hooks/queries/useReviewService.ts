import { AxiosError } from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { reviewService } from '@/services/reviewService';
import type {
  CreateInfluencerReviewRequest,
  CreateInfluencerReviewResponse,
  MyLatestReviewForInfluencerResponse,
  UpdateInfluencerReviewResponse,
} from '@/types/service/reviewServiceType';

// 내 가장 최근 리뷰
export const useMyLatestReviewForInfluencer = (influencerId: number) => {
  return useQuery<MyLatestReviewForInfluencerResponse, AxiosError>({
    queryKey: ['myLatestReviewForInfluencer', influencerId],
    queryFn: () => reviewService.myLatestReviewForInfluencer(influencerId),
    enabled: !!influencerId,
  });
};

// 인플루언서 리뷰 생성
export const useCreateInfluencerReveiw = () => {
  return useMutation<
    CreateInfluencerReviewResponse,
    AxiosError,
    { influencerId: number; reviewData: CreateInfluencerReviewRequest }
  >({
    mutationFn: ({ influencerId, reviewData }) =>
      reviewService.createInfluencerReview(influencerId, reviewData),
    onSuccess: () => {
      // submit할 때 돌려받은 데이터로 리액트쿼리 전체 리뷰 캐시 데이터 수정하기, 또는 백엔드에서 돌려준 데이터로..
      // setQueryData
    },
  });
};

// 인플루언서 리뷰 수정
export const useUpdateInfluencerReveiw = () => {
  return useMutation<
    UpdateInfluencerReviewResponse,
    AxiosError,
    { influencerId: number; reviewId: number; reviewData: CreateInfluencerReviewRequest }
  >({
    mutationFn: ({ influencerId, reviewId, reviewData }) =>
      reviewService.updateInfluencerReview(influencerId, reviewId, reviewData),
    onSuccess: () => {
      // submit할 때 돌려받은 데이터로 리액트쿼리 전체 리뷰 캐시 데이터 수정하기, 또는 백엔드에서 돌려준 데이터로..
      // setQueryData
    },
  });
};

// 인플루언서 리뷰 삭제
export const useDeleteInfluencerReveiw = () => {
  const queryClient = useQueryClient();

  return useMutation<null, AxiosError, { influencerId: number; reviewId: number }>({
    mutationFn: ({ influencerId, reviewId }) =>
      reviewService.deleteInfluencerReview(influencerId, reviewId),
    onSuccess: (_, variables) => {
      // 내 최신리뷰 다시 가져와서 상태에 맞게 리렌더링되게 해야함
      queryClient.invalidateQueries({
        queryKey: ['myLatestReviewForInfluencer', variables.influencerId],
      });
      // setQueryData
      // 리액트쿼리 전체 리뷰 캐시 데이터 수정하기
    },
  });
};
