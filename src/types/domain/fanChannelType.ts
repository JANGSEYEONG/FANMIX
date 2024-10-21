// 팬채널 전체 조회 정렬 타입 (팬채널 페이지에서 사용)
export const ALL_FAN_CHANNELS_SORT_TYPES = {
  FOLLOWER_COUNT: 'FOLLOWER_COUNT', // 팔로워 많은 순
  CONFIRM_STATUS: 'CONFIRM_STATUS', // 본인인증 최근 순
  NAME: 'NAME', // 이름순
} as const;
export type AllFanChannelsSortType = keyof typeof ALL_FAN_CHANNELS_SORT_TYPES;

// 팬채널의 글 리스트 정렬 타입
export const FAN_CHANNEL_POST_SORT_TYPES = {
  LATEST_POST: 'LATEST_POST', // 최신순
  VIEW_COUNT: 'VIEW_COUNT', // 인기순
  LIKE_COUNT: 'LIKE_COUNT', // 추천순
} as const;
export type FanChannelPostSortType = keyof typeof FAN_CHANNEL_POST_SORT_TYPES;
