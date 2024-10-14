import { ax, handleAxiosError } from './axios';

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

export const userService = {
  // 특정 유저 상세정보 조회
  userDetail: async ({ userId }: UserDetailRequest): Promise<UserDetailResponse> => {
    try {
      const response = await ax.get<UserDetailResponse>(`/api/members/${userId}`);
      console.log('userDetail Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 내 상세정보 조회
  myDetail: async (): Promise<UserDetailResponse> => {
    try {
      const response = await ax.get<UserDetailResponse>('/api/members/me');
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
  // 프로필 이미지 변경
  updateMyProfileImage: async ({
    file,
  }: UpdateMyProfileImageRequest): Promise<UserDetailResponse> => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await ax.post<UserDetailResponse>('/api/members/profile-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('updateMyProfileImage Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 자기소개 수정
  updateMyIntroduce: async ({
    introduce,
  }: UpdateMyIntroduceRequest): Promise<UserDetailResponse> => {
    try {
      const response = await ax.patch<UserDetailResponse>('/api/members/introduce', {
        introduce,
      });
      console.log('updateMyIntroduce Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
  // 출생년도 수정
  updateMyBirthYear: async ({
    birthYear,
  }: UpdateMyBirthYearRequest): Promise<UserDetailResponse> => {
    try {
      const response = await ax.patch<UserDetailResponse>('/api/members/birth-year', {
        birthYear,
      });
      console.log('updateMyBirthYear Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 닉네임 수정
  updateMyNickname: async ({ nickName }: UpdateMyNicknameRequest): Promise<UserDetailResponse> => {
    try {
      const response = await ax.patch<UserDetailResponse>('/api/members/nickname', {
        nickName,
      });
      console.log('updateMyNickname Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
  // 성별 수정
  updateMyGender: async ({ gender }: UpdateMyGenderRequest): Promise<UserDetailResponse> => {
    try {
      const response = await ax.patch<UserDetailResponse>('/api/members/gender', {
        gender,
      });
      console.log('updateMyGender Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
  // 국적 수정
  updateMyNationality: async ({
    nationality,
  }: UpdateMyNationalityRequest): Promise<UserDetailResponse> => {
    try {
      const response = await ax.patch<UserDetailResponse>('/api/members/nationality', {
        nationality,
      });
      console.log('updateMyNationality Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
  // 활동내역 - 리뷰 리스트
  userReviewHistory: async ({
    userId,
  }: UserReviewHistoryRequset): Promise<UserReviewHistoryResponse> => {
    try {
      const response = await ax.get<UserReviewHistoryResponse>(
        `/api/public/members/${userId}/activity/reviews`,
      );
      console.log('userReviewHistory Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 활동내역 - 글 리스트
  userPostHistory: async ({ userId }: UserPostHistoryRequest): Promise<UserPostHistoryResponse> => {
    try {
      const response = await ax.get<UserPostHistoryResponse>(
        `/api/public/members/${userId}/activity/posts`,
      );
      console.log('userPostHistory Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 활동내역 - 댓글 리스트
  userCommentHistory: async ({
    userId,
  }: UserCommentHistoryRequest): Promise<UserCommentHistoryResponse> => {
    try {
      const response = await ax.get<UserCommentHistoryResponse>(
        `/api/public/members/${userId}/activity/comments`,
      );
      console.log('userCommentHistory Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
};
