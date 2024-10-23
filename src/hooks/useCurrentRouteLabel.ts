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
  headerColor: HeaderColor;
} => {
  const pathname = usePathname();
  const currentRoot = getRootPath(pathname);

  let currentRoute: RouteValue | undefined = Object.values(ROUTES).find(
    (route) => route.PATH === pathname,
  );

  if (!currentRoute) {
    currentRoute = Object.values(ROUTES).find(
      (route) =>
        route.ROOT === currentRoot && route.PATH.split('/').length === pathname.split('/').length, // ROOT, 세그먼트 개수 비교
    );
  }

  if (currentRoute) {
    return {
      currentLabel: currentRoute.LABEL,
      hasPrevButton: currentRoute.HAS_PREV_BTN,
      hideTitle: currentRoute.HIDE_TITLE,
      hideRightNav: currentRoute.HIDE_RIGHT_NAV,
      hideBottomNav: currentRoute.HIDE_BOTTOM_NAV,
      hideScrollTopBtn: currentRoute.HIDE_SCROLL_TOP_BTN,
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
      headerColor: DEFAULT_HEADER_COLOR,
    };
  }
};
