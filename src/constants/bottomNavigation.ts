import { ROUTES } from './routes';
import { LiaHomeSolid, LiaBookmark, LiaGem, LiaUser } from 'react-icons/lia';

export const BOTTOM_NAVIGATION_ITEMS = [
  {
    label: ROUTES.HOME.LABEL,
    icon: LiaHomeSolid,
    root: ROUTES.HOME.ROOT,
    path: ROUTES.HOME.PATH,
    requireAuth: false,
  },
  {
    label: ROUTES.FOLLOW.LABEL,
    icon: LiaBookmark,
    root: ROUTES.FOLLOW.ROOT,
    path: ROUTES.FOLLOW.PATH,
    requireAuth: true,
  },
  {
    label: ROUTES.FAN_CHANNEL_INDEX.LABEL,
    icon: LiaGem,
    root: ROUTES.FAN_CHANNEL_INDEX.ROOT,
    path: ROUTES.FAN_CHANNEL_INDEX.PATH,
    requireAuth: false,
  },
  {
    label: ROUTES.MYPAGE.LABEL,
    icon: LiaUser,
    root: ROUTES.MYPAGE.ROOT,
    path: ROUTES.MYPAGE.PATH,
    requireAuth: true,
  },
];
