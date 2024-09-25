// LABEL = 다국어 파일 키값, topTItle, bottomNav 공용
export const ROUTES = {
  // 메인
  HOME: { ROOT: '/', PATH: '/', LABEL: '홈', HAS_PREV_BTN: false },

  // 팔로우
  FOLLOW: { ROOT: '/follow', PATH: '/follow', LABEL: '팔로우', HAS_PREV_BTN: false },

  // 커뮤니티
  COMMUNITY_INDEX: {
    ROOT: '/community',
    PATH: '/community',
    LABEL: '커뮤니티',
    HAS_PREV_BTN: false,
  },
  COMMUNITY: {
    ROOT: '/community',
    PATH: '/community/[communityId]',
    LABEL: '커뮤니티',
    HAS_PREV_BTN: true,
  },
  COMMUNITY_POST: {
    ROOT: '/community',
    PATH: '/community/[communityId]/[postId]',
    LABEL: '커뮤니티',
    HAS_PREV_BTN: true,
  },

  // 팬채널
  FAN_CHANNEL_INDEX: {
    ROOT: '/fan-channel',
    PATH: '/fan-channel',
    LABEL: '팬채널',
    HAS_PREV_BTN: false,
  },
  FAN_CHANNEL: {
    ROOT: '/fan-channel',
    PATH: '/fan-channel/[communityId]',
    LABEL: '팬채널',
    HAS_PREV_BTN: true,
  },
  FAN_CHANNEL_POST: {
    ROOT: '/fan-channel',
    PATH: '/fan-channel/[communityId]/[postId]',
    LABEL: '팬채널',
    HAS_PREV_BTN: true,
  },

  // 마이페이지
  MYPAGE: { ROOT: '/my', PATH: '/my', LABEL: '마이페이지', HAS_PREV_BTN: false },
  MYPAGE_EDIT: { ROOT: '/my', PATH: '/my/edit', LABEL: '내 정보 수정', HAS_PREV_BTN: true },
  MY_ACTIVITY_HISTORY: {
    ROOT: '/my',
    PATH: '/my/activity-history',
    LABEL: '활동내역',
    HAS_PREV_BTN: true,
  },
  CUSTOMER_CENTER: {
    ROOT: '/my',
    PATH: '/my/customer-center',
    LABEL: '고객센터',
    HAS_PREV_BTN: true,
  },

  // 타 유저 프로필
  USER_INFORMATION: {
    ROOT: '/user',
    PATH: '/user/[userId]',
    LABEL: '유저 정보',
    HAS_PREV_BTN: true,
  },

  // 인플루언서
  INFLUENCER_INDEX: {
    ROOT: '/influencer',
    PATH: '/influencer',
    LABEL: '인플루언서 찾기',
    HAS_PREV_BTN: false,
  },
  INFLUENCER: {
    ROOT: '/influencer',
    PATH: '/influencer/[influencerId]',
    LABEL: '인플루언서',
    HAS_PREV_BTN: true,
  },
  INFLUENCER_REVIEW: {
    ROOT: '/influencer',
    PATH: '/influencer/[influencerId]/[reviewId]',
    LABEL: '한줄 리뷰',
    HAS_PREV_BTN: true,
  },

  // 로그인
  LOGIN: { ROOT: '/auth', PATH: '/auth/login', LABEL: '로그인', HAS_PREV_BTN: false },
  LOGIN_REDIRECT: {
    ROOT: '/auth',
    PATH: '/auth/redirect',
    LABEL: '로그인 중',
    HAS_PREV_BTN: false,
  },
} as const;

// ROUTES 객체의 타입을 정의
type RouteKey = keyof typeof ROUTES;

// ROUTES 객체의 값 타입을 추출
type RouteValue = (typeof ROUTES)[RouteKey];

// LABEL의 타입을 추출
export type RouteLabel = RouteValue['LABEL'];
