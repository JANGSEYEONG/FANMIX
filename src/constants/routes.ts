// LABEL = 다국어 파일 키값, topTItle, bottomNav 공용
export const ROUTES = {
  HOME: { PATH: '/', LABEL: '홈' },
  FOLLOW: { PATH: '/follow', LABEL: '팔로우' },
  FANCHANNEL: { PATH: '/fan-channel', LABEL: '팬채널' },
  MYPAGE: { PATH: '/my', LABEL: '마이페이지' },
} as const;

// ROUTES 객체의 타입을 정의
type RouteKey = keyof typeof ROUTES;

// ROUTES 객체의 값 타입을 추출
type RouteValue = (typeof ROUTES)[RouteKey];

// LABEL의 타입을 추출
export type RouteLabel = RouteValue['LABEL'];
