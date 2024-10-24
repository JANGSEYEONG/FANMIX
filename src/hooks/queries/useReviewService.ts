import { AxiosError } from 'axios';
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useUserStore } from '@/stores/userStore';

import { reviewService } from '@/services/reviewService';
import type {
  AllInfluencersAllReviewsRequest,
  AllInfluencersAllReviewsResponse,
  CreateInfluencerReviewCommentRequest,
  CreateInfluencerReviewCommentResponse,
  CreateInfluencerReviewRequest,
  CreateInfluencerReviewResponse,
  DeleteInfluencerReviewCommentRequest,
  DeleteInfluencerReviewRequest,
  InfluencerReviewDetailWithCommentsRequest,
  InfluencerReviewDetailWithCommentsResponse,
  InfluencerReviewLikeDislikeRequest,
  MyLatestReviewForInfluencerResponse,
  SpecificInfluencerAllReviewsRequest,
  SpecificInfluencerAllReviewsResponse,
  UpdateInfluencerReviewRequest,
  UpdateInfluencerReviewResponse,
} from '@/types/service/reviewServiceType';

// 내 가장 최근 리뷰
export const useMyLatestReviewForInfluencer = (influencerId: number) => {
  return useSuspenseQuery<MyLatestReviewForInfluencerResponse, AxiosError>({
    queryKey: ['myLatestReviewForInfluencer', influencerId],
    queryFn: () => reviewService.myLatestReviewForInfluencer(influencerId),
  });
};

// 인플루언서 리뷰 생성
export const useCreateInfluencerReveiw = () => {
  const queryClient = useQueryClient();
  const user = useUserStore((state) => state.user);

  return useMutation<CreateInfluencerReviewResponse, AxiosError, CreateInfluencerReviewRequest>({
    mutationFn: reviewService.createInfluencerReview,
    onSuccess: ({ data }, variables) => {
      const influencerId = variables.influencerId;

      // submit할 때 돌려받은 데이터로 리액트쿼리 리뷰 캐시 데이터 수정하기
      const newReviewData = {
        reviewId: data.reviewId,
        reviewerId: user?.userId || 0,
        reviewerNickName: user?.nickName || '',
        averageRating: (data.contentsRating + data.communicationRating + data.trustRating) / 3,
        contentsRating: data.contentsRating,
        communicationRating: data.communicationRating,
        trustRating: data.trustRating,
        reviewDate: data.reviewDate,
        reviewContent: data.reviewContent,
        reviewLikeCount: 0,
        reviewDislikeCount: 0,
        reviewCommentsCount: 0,
        isMyReview: true,
        isLiked: false,
        isDisliked: false,
      };

      // 최신순일 때
      queryClient.setQueryData<SpecificInfluencerAllReviewsResponse>(
        ['specificInfluencerAllReviews', influencerId, 'LATEST'],
        (oldData) => {
          if (!oldData) return oldData;
          return {
            ...oldData,
            data: [newReviewData, ...oldData.data], // 가장 앞에 추가
          };
        },
      );

      // 추천순일 때
      queryClient.setQueryData<SpecificInfluencerAllReviewsResponse>(
        ['specificInfluencerAllReviews', influencerId, 'RECOMMENDED'],
        (oldData) => {
          if (!oldData) return oldData;

          // reviewLikeCount-reviewDislikeCount 가 0이하가 되는 지점의 가장 앞에 추가
          const insertIndex = oldData.data.findIndex(
            (review) => review.reviewLikeCount - review.reviewDislikeCount <= 0,
          );

          const newData = [...oldData.data];
          if (insertIndex === -1) {
            // 만약 모든 리뷰의 추천 수가 0보다 크다면 맨 뒤에 추가
            newData.push(newReviewData);
          } else {
            // 찾은 인덱스에 새 리뷰 삽입
            newData.splice(insertIndex, 0, newReviewData);
          }

          return {
            ...oldData,
            data: newData,
          };
        },
      );
    },
  });
};

// 인플루언서 리뷰 수정
export const useUpdateInfluencerReveiw = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateInfluencerReviewResponse, AxiosError, UpdateInfluencerReviewRequest>({
    mutationFn: reviewService.updateInfluencerReview,
    onSuccess: (_, variables) => {
      const { influencerId, reviewId, reviewData } = variables;

      // submit할 때 돌려받은 데이터로 리액트쿼리 전체 리뷰 캐시 데이터 수정하기
      // 수정 가능한 항목 : 내용, 평점
      const updateReviewInCache = (oldData: SpecificInfluencerAllReviewsResponse | undefined) => {
        if (!oldData) return oldData;

        return {
          ...oldData,
          data: oldData.data.map((review) =>
            review.reviewId === reviewId
              ? {
                  ...review,
                  reviewContent: reviewData.content,
                  communicationRating: reviewData.communicationRating,
                  contentsRating: reviewData.contentsRating,
                  trustRating: reviewData.trustRating,
                  averageRating:
                    (reviewData.communicationRating +
                      reviewData.contentsRating +
                      reviewData.trustRating) /
                    3,
                }
              : review,
          ),
        };
      };

      // 최신순 업데이트
      queryClient.setQueryData<SpecificInfluencerAllReviewsResponse>(
        ['specificInfluencerAllReviews', influencerId, 'LATEST'],
        updateReviewInCache,
      );

      // 추천순 업데이트
      queryClient.setQueryData<SpecificInfluencerAllReviewsResponse>(
        ['specificInfluencerAllReviews', influencerId, 'RECOMMENDED'],
        updateReviewInCache,
      );
    },
  });
};

// 인플루언서 리뷰 삭제
export const useDeleteInfluencerReveiw = () => {
  const queryClient = useQueryClient();

  return useMutation<null, AxiosError, DeleteInfluencerReviewRequest>({
    mutationFn: reviewService.deleteInfluencerReview,
    onSuccess: (_, variables) => {
      const influencerId = variables.influencerId;
      const deleteRequestReviewId = variables.reviewId;

      // 내 최신리뷰 다시 가져와서 상태에 맞게 리렌더링되게 해야함
      queryClient.invalidateQueries({
        queryKey: ['myLatestReviewForInfluencer', variables.influencerId],
      });

      // 특정 인플루언서의 전체리뷰 쿼리의 캐시데이터 수정하기
      // 구조 상, MyReview에서 ReviewList의 sort 값을 가지고 있기 복잡함 (할 순 있는데, 굳이.. 싶음)
      // => 그냥 sort에 두 값 다 넣어서 확인하기
      // 최신순일 때
      queryClient.setQueryData<SpecificInfluencerAllReviewsResponse>(
        ['specificInfluencerAllReviews', influencerId, 'LATEST'],
        (oldData) => {
          if (!oldData) return oldData;

          return {
            ...oldData,
            data: oldData.data.filter((review) => review.reviewId !== deleteRequestReviewId),
          };
        },
      );

      // 추천순일 때
      queryClient.setQueryData<SpecificInfluencerAllReviewsResponse>(
        ['specificInfluencerAllReviews', influencerId, 'RECOMMENDED'],
        (oldData) => {
          if (!oldData) return oldData;

          return {
            ...oldData,
            data: oldData.data.filter((review) => review.reviewId !== deleteRequestReviewId),
          };
        },
      );
    },
  });
};

// 특정 인플루언서의 전체 리뷰
export const useSpecificInfluencerAllReviews = ({
  influencerId,
  sort,
}: SpecificInfluencerAllReviewsRequest) => {
  return useSuspenseQuery<SpecificInfluencerAllReviewsResponse, AxiosError>({
    queryKey: ['specificInfluencerAllReviews', influencerId, sort],
    queryFn: () =>
      reviewService.specificInfluencerAllReviews({
        influencerId,
        sort,
      }),
  });
};

// 전체 인플루언서의 전체 리뷰
export const useAllInfluencersAllReviews = ({ sort }: AllInfluencersAllReviewsRequest) => {
  return useSuspenseQuery<AllInfluencersAllReviewsResponse, AxiosError>({
    queryKey: ['allInfluencersAllReviews', sort],
    queryFn: () =>
      reviewService.allInfluencersAllReviews({
        sort,
      }),
  });
};

// 리뷰 상세보기 (리뷰 + 코멘트 정보)
export const useInfluencerReviewDetailWithComments = ({
  influencerId,
  reviewId,
}: InfluencerReviewDetailWithCommentsRequest) => {
  return useSuspenseQuery<InfluencerReviewDetailWithCommentsResponse, AxiosError>({
    queryKey: ['influencerReviewDetailWithComments', influencerId, reviewId],
    queryFn: () => reviewService.influencerReviewDetailWithComments({ influencerId, reviewId }),

    // enabled: !!influencerId && !!reviewId,
  });
};

// 리뷰 댓글 생성
export const useCreateInfluencerReviewComment = () => {
  const queryClient = useQueryClient();

  return useMutation<
    CreateInfluencerReviewCommentResponse,
    AxiosError,
    CreateInfluencerReviewCommentRequest
  >({
    mutationFn: reviewService.createInfluencerReviewComment,
    onSuccess: ({ data }, variables) => {
      // setQueryData로 리뷰의 댓글 수, 코멘트 리스트 캐시 수정하기
      const { influencerId, reviewId } = variables;

      const newCommentData = {
        commentId: data.commentId,
        commenterId: data.commenterId,
        commenterNickName: data.commenterNickName,
        commentContent: variables.content,
        isMyComment: true,
        isDeleted: data.isDeleted,
        commentDate: data.commentDate,
      };

      queryClient.setQueryData<InfluencerReviewDetailWithCommentsResponse>(
        ['influencerReviewDetailWithComments', influencerId, reviewId],
        (oldData) => {
          if (!oldData) return oldData;
          const oldReviewDetailData = oldData.data;
          return {
            ...oldData,
            data: {
              review: {
                ...oldReviewDetailData.review,
                reviewCommentsCount: oldReviewDetailData.review.reviewCommentsCount + 1,
              },
              commentList: [...oldData.data.commentList, newCommentData],
            },
          };
        },
      );
    },
  });
};

// 리뷰 댓글 삭제
export const useDeleteInfluencerReviewComment = () => {
  const queryClient = useQueryClient();

  return useMutation<null, AxiosError, DeleteInfluencerReviewCommentRequest>({
    mutationFn: reviewService.deleteInfluencerReviewComment,
    onSuccess: (_, variables) => {
      // setQueryData로 리뷰의 댓글 수, 코멘트 리스트 캐시 수정하기
      const influencerId = variables.influencerId;
      const reviewId = variables.reviewId;
      const deleteRequestCommentId = variables.commentId;

      queryClient.setQueryData<InfluencerReviewDetailWithCommentsResponse>(
        ['influencerReviewDetailWithComments', influencerId, reviewId],
        (oldData) => {
          if (!oldData) return oldData;
          const oldReviewDetailData = oldData.data;
          return {
            ...oldData,
            data: {
              review: {
                ...oldReviewDetailData.review,
                reviewCommentsCount: oldReviewDetailData.review.reviewCommentsCount - 1,
              },
              commentList: oldReviewDetailData.commentList.map((comment) =>
                comment.commentId === deleteRequestCommentId
                  ? {
                      ...comment,
                      isDeleted: true,
                    }
                  : comment,
              ),
            },
          };
        },
      );
    },
  });
};

// 리뷰 좋아요/싫어요
export const useInfluencerReviewLikeDislike = () => {
  const queryClient = useQueryClient();

  return useMutation<null, AxiosError, InfluencerReviewLikeDislikeRequest>({
    mutationFn: reviewService.influencerReviewLikeDislike,
    onSuccess: (_, variables) => {
      // setQueryData로 리뷰의 좋아요/싫어요 캐시 수정하기
      const { influencerId, reviewId, isLike } = variables;

      queryClient.setQueryData<InfluencerReviewDetailWithCommentsResponse>(
        ['influencerReviewDetailWithComments', influencerId, reviewId],
        (oldData) => {
          if (!oldData) return oldData;
          const { review } = oldData.data;
          return {
            ...oldData,
            data: {
              ...oldData.data,
              review: {
                ...review,
                reviewLikeCount: review.reviewLikeCount + (isLike ? 1 : 0),
                reviewDislikeCount: review.reviewDislikeCount + (isLike ? 0 : 1),
                isLiked: isLike,
                isDisliked: !isLike,
              },
            },
          };
        },
      );
    },
  });
};
