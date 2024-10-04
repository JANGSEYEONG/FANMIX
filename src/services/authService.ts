import { ax, handleAxiosError } from './axios';

import type { LoginRequest, LoginResponse } from '@/types/service/authServiceType';

export const authService = {
  // 로그인
  login: async ({ code, redirectUri }: LoginRequest): Promise<LoginResponse> => {
    try {
      const response = await ax.post<LoginResponse>('/api/members/oauth/google', {
        code,
        redirectUri,
      });
      console.log('Login Response:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 로그아웃
  logout: async () => {
    try {
      const response = await ax.post('/api/members/logout');
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },

  // 회원탈퇴
  deleteMember: async () => {
    try {
      const response = await ax.delete('/api/members');
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
};
