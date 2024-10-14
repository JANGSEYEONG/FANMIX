import { AxiosError } from 'axios';
import { useMutation, useQuery, type UseMutationResult } from '@tanstack/react-query';
import { useUserStore } from '@/stores/userStore';
import { userService } from '@/services/userService';
import { useInformationToast } from '../useInformationToast';
import type {
  UpdateMyBirthYearRequest,
  UpdateMyGenderRequest,
  UpdateMyIntroduceRequest,
  UpdateMyNationalityRequest,
  UpdateMyNicknameRequest,
  UpdateMyProfileImageRequest,
  UserCommentHistoryRequest,
  UserCommentHistoryResponse,
  UserDetailRequest,
  UserDetailResponse,
  UserPostHistoryRequest,
  UserPostHistoryResponse,
  UserReviewHistoryRequset,
  UserReviewHistoryResponse,
} from '@/types/service/userServiceType';
import { useTranslations } from 'next-intl';

// 유저 데이터 Update Mutation
type UpdateUserMutationParams<T> = {
  mutationFn: (params: T) => Promise<UserDetailResponse>;
  label: '프로필 이미지' | '닉네임' | '내 소개' | '성별' | '출생 연도' | '국적';
  updateUserField: keyof UserDetailResponse['data'];
};

const useUpdateUserMutation = <T>({
  mutationFn,
  label,
  updateUserField,
}: UpdateUserMutationParams<T>): UseMutationResult<UserDetailResponse, AxiosError, T> => {
  const t = useTranslations('api_result');
  const t2 = useTranslations('my_page_edit_page');
  const setUser = useUserStore((state) => state.setUser);
  const { showConfirmToast, showErrorToast } = useInformationToast();
  return useMutation<UserDetailResponse, AxiosError, T>({
    mutationFn,
    onSuccess: (data) => {
      setUser({ [updateUserField]: data.data[updateUserField] });
      showConfirmToast(t('{label} 수정에 성공했어요', { label: t2(label) }));
    },
    onError: () => {
      showErrorToast(t('{label} 수정에 실패했어요', { label }), t('다시 시도해 주세요'));
    },
  });
};

export const useUpdateMyProfileImage = () =>
  useUpdateUserMutation<UpdateMyProfileImageRequest>({
    mutationFn: userService.updateMyProfileImage,
    label: '프로필 이미지',
    updateUserField: 'profileImgUrl',
  });

export const useUpdateMyNickname = () =>
  useUpdateUserMutation<UpdateMyNicknameRequest>({
    mutationFn: userService.updateMyNickname,
    label: '닉네임',
    updateUserField: 'nickName',
  });

export const useUpdateMyIntroduce = () =>
  useUpdateUserMutation<UpdateMyIntroduceRequest>({
    mutationFn: userService.updateMyIntroduce,
    label: '내 소개',
    updateUserField: 'introduce',
  });

export const useUpdateMyGender = () =>
  useUpdateUserMutation<UpdateMyGenderRequest>({
    mutationFn: userService.updateMyGender,
    label: '성별',
    updateUserField: 'gender',
  });

export const useUpdateMyBirthYear = () =>
  useUpdateUserMutation<UpdateMyBirthYearRequest>({
    mutationFn: userService.updateMyBirthYear,
    label: '출생 연도',
    updateUserField: 'birthYear',
  });

export const useUpdateMyNationality = () =>
  useUpdateUserMutation<UpdateMyNationalityRequest>({
    mutationFn: userService.updateMyNationality,
    label: '국적',
    updateUserField: 'nationality',
  });

// 유저 상세 정보
export const useUserDetail = ({ userId }: UserDetailRequest) => {
  return useQuery<UserDetailResponse, AxiosError>({
    queryKey: ['userDetail', userId],
    queryFn: () => userService.userDetail({ userId }),
    enabled: !!userId,
  });
};
// 활동내역 - 리뷰 리스트
export const useUserReviewHistory = ({ userId }: UserReviewHistoryRequset) => {
  return useQuery<UserReviewHistoryResponse, AxiosError>({
    queryKey: ['userReviewHistory', userId],
    queryFn: () => userService.userReviewHistory({ userId }),
    enabled: !!userId,
  });
};

// 활동내역 - 글 리스트
export const useUserPostHistory = ({ userId }: UserPostHistoryRequest) => {
  return useQuery<UserPostHistoryResponse, AxiosError>({
    queryKey: ['userPostHistory', userId],
    queryFn: () => userService.userPostHistory({ userId }),
    enabled: !!userId,
  });
};

// 활동내역 - 댓글 리스트
export const useUserCommentHistory = ({ userId }: UserCommentHistoryRequest) => {
  return useQuery<UserCommentHistoryResponse, AxiosError>({
    queryKey: ['userCommentHistory', userId],
    queryFn: () => userService.userCommentHistory({ userId }),
    enabled: !!userId,
  });
};
