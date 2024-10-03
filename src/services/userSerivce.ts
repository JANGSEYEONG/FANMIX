import { ax } from './axios';
import axios from 'axios';

import type { UserDetailResponse } from '@/types/service/userServiceType';

// 특정 유저 상세정보 조회
export const userDetail = async (id: string): Promise<UserDetailResponse> => {
  try {
    const response = await ax.get<UserDetailResponse>(`/api/members/${id}`);
    console.log('userDetail Response:', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error?.response?.data?.customCode; // 백엔드 지정 오류 코드
      const errorMessage = error?.response?.data?.message; // 백엔드 지정 메시지
      console.error(`errorCode: ${errorCode}, errorMessage: ${errorMessage}`);
      throw error;
    }
    throw error;
  }
};

// 내 상세정보 조회
export const myDetail = async (): Promise<UserDetailResponse> => {
  try {
    const response = await ax.get<UserDetailResponse>('/api/members/me');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error?.response?.data?.customCode;
      const errorMessage = error?.response?.data?.message;
      console.error(`errorCode: ${errorCode}, errorMessage: ${errorMessage}`);
      throw error;
    }
    throw error;
  }
};
