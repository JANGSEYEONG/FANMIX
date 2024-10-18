// 내가 팔로우하는 인플루언서 리스트의 정렬 타입 (팔로우 페이지에서 사용)
export const MY_FOLLOWED_INFLUENCER_SORT_TYPE = {
  CRDATE: 'CRDATE', // 팔로우 날짜 순
  LATEST_REVIEW: 'LATEST_REVIEW', // 최신 리뷰 순
  NAME: 'NAME', // 이름 순
} as const;
export type MyFollowedInfluencerSortType = keyof typeof MY_FOLLOWED_INFLUENCER_SORT_TYPE;

// 내가 팔로우하는 커뮤니티 리스트의 정렬 타입 (팔로우 페이지에서 사용)
export const MY_FOLLOWED_COMMUNITY_SORT_TYPE = {
  LATEST_FOLLOW: 'LATEST_FOLLOW', // 최신 팔로우 순
  LATEST_POST: 'LATEST_POST', // 최신 글 순
  NAME: 'NAME', // 이름 순
} as const;
export type MyFollowedCommunitySortType = keyof typeof MY_FOLLOWED_COMMUNITY_SORT_TYPE;
