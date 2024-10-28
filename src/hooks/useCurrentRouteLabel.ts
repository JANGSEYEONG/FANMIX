import { getRootPath } from '@/lib/text';
import { usePathname } from '@/i18n/routing';
import {
  ROUTES,
  DEFAULT_HEADER_COLOR,
  type HeaderColor,
  type RouteValue,
  type RouteLabel,
} from '@/constants/routes';

// pathname에 해당하는 LABEL을 찾는 함수
export const useCurrentRouteLabel = (): {
  currentLabel: RouteLabel;
  hasPrevButton: boolean;
  hideTitle: boolean;
  hideRightNav: boolean;
  hideBottomNav: boolean;
  hideScrollTopBtn: boolean;
  hideCreatePostBtn: boolean;
  headerColor: HeaderColor;
} => {
  const pathname = usePathname();
  const currentRoot = getRootPath(pathname);
  const pathSegments = pathname.split('/');
  const lastPathSegment = pathSegments[pathSegments.length - 1];

  // 1. 정확한 경로 매칭 먼저 시도
  let currentRoute: RouteValue | undefined = Object.values(ROUTES).find(
    (route) => route.PATH === pathname,
  );

  if (!currentRoute) {
    // 2. 같은 ROOT를 가진 라우트들만 필터링
    const sameRootRoutes = Object.values(ROUTES).filter((route) => route.ROOT === currentRoot);

    // 3. 마지막 세그먼트가 정적 문자열인 라우트 먼저 체크
    currentRoute = sameRootRoutes.find((route) => {
      const routeSegments = route.PATH.split('/');
      const lastRouteSegment = routeSegments[routeSegments.length - 1];

      // 세그먼트 개수가 같고
      if (routeSegments.length !== pathSegments.length) return false;

      // 마지막 세그먼트가 동적이 아니고([]) 정확히 일치하면
      if (!lastRouteSegment.startsWith('[') && lastRouteSegment === lastPathSegment) {
        // 나머지 세그먼트도 검사
        return routeSegments.every((routeSeg, index) => {
          const pathSeg = pathSegments[index];
          return routeSeg === pathSeg || (routeSeg.startsWith('[') && routeSeg.endsWith(']'));
        });
      }
      return false;
    });

    // 4. 정적 문자열 매칭 실패시 동적 세그먼트 라우트 체크
    if (!currentRoute) {
      currentRoute = sameRootRoutes.find((route) => {
        const routeSegments = route.PATH.split('/');

        if (routeSegments.length !== pathSegments.length) return false;

        return routeSegments.every((routeSeg, index) => {
          const pathSeg = pathSegments[index];
          return routeSeg === pathSeg || (routeSeg.startsWith('[') && routeSeg.endsWith(']'));
        });
      });
    }
  }

  if (currentRoute) {
    return {
      currentLabel: currentRoute.LABEL,
      hasPrevButton: currentRoute.HAS_PREV_BTN,
      hideTitle: currentRoute.HIDE_TITLE,
      hideRightNav: currentRoute.HIDE_RIGHT_NAV,
      hideBottomNav: currentRoute.HIDE_BOTTOM_NAV,
      hideScrollTopBtn: currentRoute.HIDE_SCROLL_TOP_BTN,
      hideCreatePostBtn: currentRoute.HIDE_CREATE_POST_BTN,
      headerColor: currentRoute.HEADER_COLOR || DEFAULT_HEADER_COLOR,
    };
  } else {
    // 정의되지 않은 루트일 경우, 홈으로 표시하여 아이콘 보여지게 처리
    return {
      currentLabel: ROUTES.HOME.LABEL,
      hasPrevButton: ROUTES.HOME.HAS_PREV_BTN,
      hideTitle: ROUTES.HOME.HIDE_TITLE,
      hideRightNav: ROUTES.HOME.HIDE_RIGHT_NAV,
      hideBottomNav: ROUTES.HOME.HIDE_BOTTOM_NAV,
      hideScrollTopBtn: ROUTES.HOME.HIDE_SCROLL_TOP_BTN,
      hideCreatePostBtn: ROUTES.HOME.HIDE_CREATE_POST_BTN,
      headerColor: DEFAULT_HEADER_COLOR,
    };
  }
};
