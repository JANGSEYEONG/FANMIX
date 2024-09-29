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
const useCurrentRouteLabel = (): [RouteLabel, boolean, boolean, boolean, HeaderColor] => {
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
    return [
      currentRoute.LABEL,
      currentRoute.HAS_PREV_BTN,
      currentRoute.HIDE_TITLE,
      currentRoute.HIDE_RIGHT_NAV,
      currentRoute.HEADER_COLOR || DEFAULT_HEADER_COLOR,
    ];
  } else {
    // 정의되지 않은 루트일 경우, 홈으로 표시하여 아이콘 보여지게 처리
    return [
      ROUTES.HOME.LABEL,
      ROUTES.HOME.HAS_PREV_BTN,
      ROUTES.HOME.HIDE_TITLE,
      ROUTES.HOME.HIDE_RIGHT_NAV,
      DEFAULT_HEADER_COLOR,
    ];
  }
};

export default useCurrentRouteLabel;
