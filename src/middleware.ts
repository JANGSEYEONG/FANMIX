import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const customMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl; // 현재 경로
  const authToken = request.cookies.get('auth_token');

  // 특정 라우팅("/follow", "/my" 등)에 따라 조건부로 로그인 페이지로 이동 처리
  if (pathname.includes('/follow') || pathname.includes('/my')) {
    // TODO: jwt 토큰 검증 api 호출하기
    if (!authToken) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  // 기본적으로 next-intl 미들웨어 실행
  return customMiddleware(request);
}
export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(ko|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
