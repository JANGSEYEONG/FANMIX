// LABEL = 다국어 파일 키값, topTItle, bottomNav 공용
export const ROUTES = {
  // 메인
  HOME: {
    ROOT: '/',
    PATH: '/',
    LABEL: '홈',
    HAS_PREV_BTN: false,
    HIDE_TITLE: false,
    HIDE_RIGHT_NAV: false,
    HIDE_BOTTOM_NAV: false,
    HIDE_TOP_FAB: false,
  },

  // 고객센터
  CUSTOMER_CENTER: {
    ROOT: '/',
    PATH: '/customer-service',
    LABEL: '고객센터',
    HAS_PREV_BTN: true,
    HIDE_TITLE: false,
    HIDE_RIGHT_NAV: false,
    HIDE_BOTTOM_NAV: false,
    HIDE_TOP_FAB: true,
  },

  // 팔로우
  FOLLOW: {
    ROOT: '/follow',
    PATH: '/follow',
    LABEL: '팔로우',
    HAS_PREV_BTN: false,
    HIDE_TITLE: false,
    HIDE_RIGHT_NAV: false,
    HIDE_BOTTOM_NAV: false,
    HIDE_TOP_FAB: false,
  },

  // 커뮤니티
  COMMUNITY_INDEX: {
    ROOT: '/community',
    PATH: '/community',
    LABEL: '커뮤니티',
    HAS_PREV_BTN: false,
    HIDE_TITLE: false,
    HIDE_RIGHT_NAV: false,
    HIDE_BOTTOM_NAV: false,
    HIDE_TOP_FAB: false,
  },
  COMMUNITY: {
    ROOT: '/community',
    PATH: '/community/[communityId]',
    LABEL: '커뮤니티',
    HAS_PREV_BTN: true,
    HIDE_TITLE: false,
    HIDE_RIGHT_NAV: false,
    HIDE_BOTTOM_NAV: false,
    HIDE_TOP_FAB: false,
  },
  COMMUNITY_POST: {
    ROOT: '/community',
    PATH: '/community/[communityId]/[postId]',
    LABEL: '커뮤니티',
    HAS_PREV_BTN: true,
    HIDE_TITLE: false,
    HIDE_RIGHT_NAV: false,
    HIDE_BOTTOM_NAV: false,
    HIDE_TOP_FAB: false,
  },

  // 팬채널
  FAN_CHANNEL_INDEX: {
    ROOT: '/fan-channel',
    PATH: '/fan-channel',
    LABEL: '팬채널',
    HAS_PREV_BTN: false,
    HIDE_TITLE: false,
    HIDE_RIGHT_NAV: false,
    HIDE_BOTTOM_NAV: false,
    HIDE_TOP_FAB: false,
  },
  FAN_CHANNEL: {
    ROOT: '/fan-channel',
    PATH: '/fan-channel/[influencerId]/[communityId]',
    LABEL: '팬채널',
    HAS_PREV_BTN: true,
    HIDE_TITLE: false,
    HIDE_RIGHT_NAV: false,
    HIDE_BOTTOM_NAV: false,
    HIDE_TOP_FAB: false,
  },
  FAN_CHANNEL_POST: {
    ROOT: '/fan-channel',
    PATH: '/fan-channel/[influencerId]/[communityId]/[postId]',
    LABEL: '팬채널',
    HAS_PREV_BTN: true,
    HIDE_TITLE: false,
    HIDE_RIGHT_NAV: false,
    HIDE_BOTTOM_NAV: false,
    HIDE_TOP_FAB: false,
  },

  // 마이페이지
  MYPAGE: {
    ROOT: '/my',
    PATH: '/my',
    LABEL: '마이페이지',
    HAS_PREV_BTN: false,
    HIDE_TITLE: false,
    HIDE_RIGHT_NAV: false,
    HIDE_BOTTOM_NAV: false,
    HIDE_TOP_FAB: true,
  },
  MYPAGE_EDIT: {
    ROOT: '/my',
    PATH: '/my/edit',
    LABEL: '내 정보 수정',
    HAS_PREV_BTN: true,
    HIDE_TITLE: false,
    HIDE_RIGHT_NAV: false,
    HIDE_BOTTOM_NAV: false,
    HIDE_TOP_FAB: true,
  },
  MY_ACTIVITY_HISTORY: {
    ROOT: '/my',
    PATH: '/my/activity-history',
    LABEL: '활동내역',
    HAS_PREV_BTN: true,
    HIDE_TITLE: false,
    HIDE_RIGHT_NAV: false,
    HIDE_BOTTOM_NAV: false,
    HIDE_TOP_FAB: true,
  },

  // 타 유저 프로필
  USER_INFORMATION: {
    ROOT: '/user',
    PATH: '/user/[userId]',
    LABEL: '유저 정보',
    HAS_PREV_BTN: true,
    HEADER_COLOR: '#000000',
    HIDE_TITLE: false,
    HIDE_RIGHT_NAV: false,
    HIDE_BOTTOM_NAV: false,
    HIDE_TOP_FAB: true,
  },

  // 인플루언서
  INFLUENCER_INDEX: {
    ROOT: '/influencer',
    PATH: '/influencer',
    LABEL: '인플루언서 찾기',
    HAS_PREV_BTN: false,
    HIDE_TITLE: false,
    HIDE_RIGHT_NAV: false,
    HIDE_BOTTOM_NAV: false,
    HIDE_TOP_FAB: false,
  },
  INFLUENCER: {
    ROOT: '/influencer',
    PATH: '/influencer/[influencerId]',
    LABEL: '인플루언서',
    HAS_PREV_BTN: true,
    HIDE_TITLE: true,
    HIDE_RIGHT_NAV: true,
    HIDE_BOTTOM_NAV: false,
    HIDE_TOP_FAB: false,
  },
  INFLUENCER_REVIEW_LIST: {
    ROOT: '/influencer',
    PATH: '/influencer/[influencerId]/reviews',
    LABEL: '인플루언서',
    HAS_PREV_BTN: true,
    HIDE_TITLE: true,
    HIDE_RIGHT_NAV: true,
    HIDE_BOTTOM_NAV: false,
    HIDE_TOP_FAB: false,
  },
  INFLUENCER_REVIEW: {
    ROOT: '/influencer',
    PATH: '/influencer/[influencerId]/review/[reviewId]',
    LABEL: '한줄 리뷰',
    HAS_PREV_BTN: true,
    HIDE_TITLE: false,
    HIDE_RIGHT_NAV: false,
    HIDE_BOTTOM_NAV: true,
    HIDE_TOP_FAB: true,
  },

  // 전체 한줄 리뷰
  REVIEW_INDEX: {
    ROOT: '/reviews',
    PATH: '/reviews',
    LABEL: '한줄 리뷰',
    HAS_PREV_BTN: true,
    HIDE_TITLE: false,
    HIDE_RIGHT_NAV: false,
    HIDE_BOTTOM_NAV: false,
    HIDE_TOP_FAB: false,
  },

  // 로그인
  LOGIN: {
    ROOT: '/auth',
    PATH: '/auth/login',
    LABEL: '로그인',
    HAS_PREV_BTN: false,
    HIDE_TITLE: true,
    HIDE_RIGHT_NAV: true,
    HIDE_BOTTOM_NAV: true,
    HIDE_TOP_FAB: true,
  },
  LOGIN_REDIRECT: {
    ROOT: '/auth',
    PATH: '/auth/redirect',
    LABEL: '로그인 중',
    HAS_PREV_BTN: false,
    HIDE_TITLE: true,
    HIDE_RIGHT_NAV: true,
    HIDE_BOTTOM_NAV: true,
    HIDE_TOP_FAB: true,
  },
} as const;

// ROUTES 객체의 타입을 정의
export type RouteKey = keyof typeof ROUTES;

type BaseRouteValue = {
  ROOT: string;
  PATH: string;
  LABEL: string;
  HAS_PREV_BTN: boolean;
  HEADER_COLOR?: string; // 선택적 속성으로 정의
  HIDE_TITLE: boolean;
  HIDE_RIGHT_NAV: boolean;
  HIDE_BOTTOM_NAV: boolean;
  HIDE_TOP_FAB: boolean;
};

// ROUTES 객체의 값 타입을 추출 (HEADER_COLOR를 선택적으로 포함)
export type RouteValue = BaseRouteValue &
  {
    [K in RouteKey]: (typeof ROUTES)[K];
  }[RouteKey];

// LABEL의 타입을 추출
export type RouteLabel = RouteValue['LABEL'];

// HEADER_COLOR의 타입을 추출
export type HeaderColor = RouteValue['HEADER_COLOR'] | undefined;

// 기본 헤더 색상 정의
export const DEFAULT_HEADER_COLOR = 'transparent';
