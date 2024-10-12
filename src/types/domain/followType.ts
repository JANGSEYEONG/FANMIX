// 내가 팔로우하는 인플루언서 리스트의 정렬 타입 (팔로우 페이지에서 사용)
export const MY_FOLLOWED_INFLUENCER_SORT_TYPE = {
  CRDATE: 'CRDATE', // 팔로우 날짜 순
  LATEST_REVIEW: 'LATEST_REVIEW', // 최신 리뷰 순
  NAME: 'NAME', // 이름 순
} as const;
export type MyFollowedInfluencerSortType = keyof typeof MY_FOLLOWED_INFLUENCER_SORT_TYPE;
