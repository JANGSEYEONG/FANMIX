'use client';

import { useTranslations } from 'next-intl';
import { useLogout } from '@/hooks/queries/useAuthService';

import PageSpinner from '@/components/common/spinner/PageSpinner';

const LogoutButton = () => {
  const t = useTranslations('my_page');
  const logoutMutation = useLogout();

  return (
    <>
      <button className="text-neutral-400 body2-r" onClick={() => logoutMutation.mutate()}>
        {t('로그아웃')}
      </button>
      {logoutMutation.isPending && <PageSpinner />}
    </>
  );
};

export default LogoutButton;
