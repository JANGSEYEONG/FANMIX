// 포스트(글) 요약 카드 (메인, 활동내역에서 사용)
export interface TextPostCardData {
  influencerId: number | null;
  communityId: number;
  communityName: string | null;
  influencerName: string | null;
  postId: number;
  content: string;
  likeCount: number;
  commentCount: number;
  crDate: string;
}

// 커뮤니티의 글 리스트 정렬 타입
export const COMMUNITY_POST_SORT_TYPES = {
  LATEST_POST: 'LATEST_POST', // 최신순
  VIEW_COUNT: 'VIEW_COUNT', // 인기순
  LIKE_COUNT: 'LIKE_COUNT', // 추천순
} as const;
export type CommunityPostSortType = keyof typeof COMMUNITY_POST_SORT_TYPES;
