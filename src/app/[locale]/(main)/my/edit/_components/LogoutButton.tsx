'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const LogoutButton = () => {
  const t = useTranslations('my_page');

  return (
    <Link href="/?isLogout=true" className="text-neutral-400 body2-r">
      {t('로그아웃')}
    </Link>
  );
};

export default LogoutButton;
