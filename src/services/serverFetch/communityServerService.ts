import api from './fetch';

import type { PopularPostsResponse } from '@/types/service/communityServiceType';

// 메인 - 인기 글 리스트
export const getPopularPostsData = async (): Promise<PopularPostsResponse> => {
  return api.get<PopularPostsResponse>(
    `${process.env.NEXT_PUBLIC_URL}/api/communities/posts/hot5`,
    { hasAuth: true },
  );
};
