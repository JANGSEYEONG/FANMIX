import { Link } from '@/i18n/routing';
import { ROUTES } from '@/constants/routes';
import { useTranslations } from 'next-intl';

const MyPageMenuList = () => {
  const t = useTranslations('my_page');

  const menuItems = [
    { label: ROUTES.MY_ACTIVITY_HISTORY.LABEL, path: ROUTES.MY_ACTIVITY_HISTORY.PATH },
    { label: ROUTES.FOLLOW.LABEL, path: ROUTES.FOLLOW.PATH },
    { label: ROUTES.CUSTOMER_CENTER.LABEL, path: ROUTES.CUSTOMER_CENTER.PATH },
  ];

  return (
    <ul className="flex flex-col justify-center gap-6 body1-r">
      {menuItems.map((item) => {
        return (
          <Link key={item.label} href={item.path} className="h-6">
            {t(item.label)}
          </Link>
        );
      })}
    </ul>
  );
};

export default MyPageMenuList;
