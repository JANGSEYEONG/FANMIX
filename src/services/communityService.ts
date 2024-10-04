import { ax, handleAxiosError } from './axios';

import type { PopularPostsResponse } from '@/types/service/communityServiceType';

export const communityService = {
  // 인기 글 조회 (popularPosts api만 팬채널과 커뮤니티 통합 조회)
  popularPosts: async (): Promise<PopularPostsResponse> => {
    try {
      const response = await ax.get<PopularPostsResponse>('/api/communities/posts/hot5');
      console.log('getPopularPosts:', response.data);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
};
